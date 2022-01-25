import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import { schema, rules } from '@ioc:Adonis/Core/Validator';


export default class UsersController {
  public async index ({}: HttpContextContract) {

    const users = await User.all();

    return users;

  }

  public async store ({ request }: HttpContextContract) {

     await request.validate({
      schema: schema.create({
        name: schema.string({}),
        surname: schema.string({}),
        email: schema.string({},[
          rules.email(),
          rules.unique({table:'users',column:'email'}),
        ]),
        password: schema.string({}),
      }),
      messages: {
        required: 'O {{ field }} e obrigatorio para criar uma nova conta de usuario !',
        'email.unique': 'Esse {{ field }} ja foi registrado anteriormente registrado !'
      }
    });
    


    const data = request.only(['name','surname','email','password']);
    const user = await User.create(data);

    return user;
  }

  public async show ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    
    return user;
  }

  public async update ({ request,params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    const data = request.only(['name','surname','email','password']);

    user.merge(data);

    await user.save();
  
  }

  public async destroy ({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);

    user.delete();
  }
}
