"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Link"));
const MultipleUrl_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MultipleUrl"));
class MultipleUrlsController {
    async index({}) {
        const urls = await MultipleUrl_1.default.query().preload('links');
        return urls;
    }
    async store({}) {
    }
    async show({}) {
    }
    async update({}) {
    }
    async destroy({}) {
    }
    async sortUrl({ params, response }) {
        const multiple = await MultipleUrl_1.default.findBy('slug', params.slug);
        if (multiple) {
            const link = await Link_1.default
                .query()
                .where('multiple_urls_id', multiple.id);
            const sort = Math.floor(Math.random() * link.length);
            return link[sort].url;
        }
        else {
            return response
                .status(404)
                .json({ message: "Url não encontrado !" });
        }
    }
}
exports.default = MultipleUrlsController;
//# sourceMappingURL=MultipleUrlsController.js.map