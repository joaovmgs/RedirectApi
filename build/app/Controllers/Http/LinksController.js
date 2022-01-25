"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Link_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Link"));
class LinksController {
    async store({ request }) {
        await request.validate({
            schema: Validator_1.schema.create({
                url: Validator_1.schema.string({}, [
                    Validator_1.rules.url()
                ]),
            })
        });
        const data = request.only(['url', 'multipleUrlsId']);
        const link = await Link_1.default.create(data);
        return link;
    }
    async update({ params, request }) {
        const link = await Link_1.default.findOrFail(params.id);
        const data = request.only(['url']);
        link.merge(data);
        await link.save();
    }
    async destroy({ params }) {
        const link = await Link_1.default.findOrFail(params.id);
        link.delete();
    }
}
exports.default = LinksController;
//# sourceMappingURL=LinksController.js.map