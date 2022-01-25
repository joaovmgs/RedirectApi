import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Link from 'App/Models/Link';
import MultipleUrl from 'App/Models/MultipleUrl'

export default class MultipleUrlsController {
  public async index ({}: HttpContextContract) {
    // const urls = MultipleUrl.all();

    const urls = await MultipleUrl.query().preload('links')

    return urls;
  }

  public async store ({}: HttpContextContract) {
    const slug = Math.round((Math.random() * 36 ** 6)).toString(36);
    
    const url = await MultipleUrl.create({
      slug: slug
    });

    return url;

  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({ params }: HttpContextContract) {
    const Multiple = await MultipleUrl.findOrFail(params.id);

    Multiple.delete();
  }




  // CUSTOM FUNCTIONS
  public async sortUrl({ params, response }: HttpContextContract){
  
    const multiple = await MultipleUrl.findBy('slug', params.slug);
   
    const link = await Link
    .query()
    .where('multiple_urls_id', multiple!.id);

    const sort = Math.floor(Math.random() * link.length);
    return response.redirect(link[sort].url, true);

  }
}