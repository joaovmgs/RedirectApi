"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UsersController {
    async index({}) {
        const users = await User_1.default.all();
        return users;
    }
    async store({ request }) {
        await request.validate({
            schema: Validator_1.schema.create({
                name: Validator_1.schema.string({}),
                surname: Validator_1.schema.string({}),
                email: Validator_1.schema.string({}, [
                    Validator_1.rules.email(),
                    Validator_1.rules.unique({ table: 'users', column: 'email' }),
                ]),
                password: Validator_1.schema.string({}),
            }),
            messages: {
                required: 'O {{ field }} e obrigatorio para criar uma nova conta de usuario !',
                'email.unique': 'Esse {{ field }} ja foi registrado anteriormente registrado !'
            }
        });
        const data = request.only(['name', 'surname', 'email', 'password']);
        const user = await User_1.default.create(data);
        return user;
    }
    async show({ params }) {
        const user = await User_1.default.findOrFail(params.id);
        return user;
    }
    async update({ request, params }) {
        const user = await User_1.default.findOrFail(params.id);
        const data = request.only(['name', 'surname', 'email', 'password']);
        user.merge(data);
        await user.save();
    }
    async destroy({ params }) {
        const user = await User_1.default.findOrFail(params.id);
        user.delete();
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map