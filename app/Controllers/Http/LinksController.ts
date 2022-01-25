import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Link from 'App/Models/Link';

export default class LinksController {

  public async store ({ request }: HttpContextContract) {

    await request.validate({
      schema: schema.create({
        url: schema.string({},[
          rules.url()
        ]),
      })
    })
    const data = request.only(['url','multipleUrlsId']);

    function addhttp(url) {
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = "http://" + url;
      }
      return url;
    }


    const link = await Link.create({
      url: addhttp(data.url),
      multipleUrlsId: data.multipleUrlsId
    });

    return link;

  }

  public async update ({ params, request }: HttpContextContract) {
    const link = await Link.findOrFail(params.id);
    const data = request.only(['url']);

    function addhttp(url) {
      if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
          url = "http://" + url;
      }
      return url;
    }

    link.merge({
      "url": addhttp(data.url)
    });

    await link.save();
  }

  public async destroy ({ params }: HttpContextContract) {
    const link = await Link.findOrFail(params.id);

    link.delete();
  }
}
