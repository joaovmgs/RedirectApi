import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UrlSingle from 'App/Models/UrlSingle';


export default class UrlSinglesController {
  public async index ({response}: HttpContextContract) {
    const url = await UrlSingle.all();
    response.status(418)
    return url;
    // response.send(['teste',418])
  }

  public async store ({ request }: HttpContextContract) {

    const slug = Math.round((Math.random() * 36 ** 6)).toString(36);
    const data = request.only(['url']);


    const slugFind = await UrlSingle.findBy('url', data.url);
    if(slugFind){
      return {url: slugFind.url,slug: slugFind.slug};
    }
    function addhttp(url) {
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = "http://" + url;
      }
      return url;
    }
    
    const url = await UrlSingle.create({
      slug: slug,
      url: addhttp(data.url)
    });

    return url;
  }

  public async show ({ params }: HttpContextContract) {
    const url = await UrlSingle.findOrFail(params.id);
    
    return url;
  }

  public async update ({ request,params }: HttpContextContract) {
    const url = await UrlSingle.findOrFail(params.id);
    const data = request.only(['slug','url']);


    function addhttp(url) {
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = "http://" + url;
      }
      return url;
    }


    url.merge({
      "url": addhttp(data.url),
      "slug": data.slug
    });

    await url.save();
    return url;
  }

  public async destroy ({ params }: HttpContextContract) {
    
    const url = await UrlSingle.findOrFail(params.id);
    await url.delete();

  }

  public async redirect({ params, response }: HttpContextContract) {
    const url = await UrlSingle.findByOrFail('slug', params.id);

    return response.redirect(url.url, true);
  }
}
