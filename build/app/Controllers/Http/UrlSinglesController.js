"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UrlSingle_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/UrlSingle"));
class UrlSinglesController {
    async index({}) {
        const url = await UrlSingle_1.default.all();
        return url;
    }
    async store({ request }) {
        const slug = Math.round((Math.random() * 36 ** 6)).toString(36);
        const data = request.only(['url']);
        const slugFind = await UrlSingle_1.default.findBy('url', data.url);
        if (slugFind) {
            return { url: slugFind.url, slug: slugFind.slug };
        }
        const url = await UrlSingle_1.default.create({
            slug: slug,
            url: data.url
        });
        return url;
    }
    async show({ params }) {
        const url = await UrlSingle_1.default.findOrFail(params.id);
        return url;
    }
    async update({ request, params }) {
        const url = await UrlSingle_1.default.findOrFail(params.id);
        const data = request.only(['slug', 'url']);
        url.merge(data);
        await url.save();
        return url;
    }
    async destroy({ params }) {
        const url = await UrlSingle_1.default.findOrFail(params.id);
        await url.delete();
    }
    async redirect({ params }) {
        const url = await UrlSingle_1.default.findByOrFail('slug', params.id);
        return url.url;
    }
}
exports.default = UrlSinglesController;
//# sourceMappingURL=UrlSinglesController.js.map