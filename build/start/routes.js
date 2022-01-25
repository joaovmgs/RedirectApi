"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
require("./routes/user");
require("./routes/url");
Route_1.default.get('/', async () => {
    return { Api: 'Api 1.0 | ' + Env_1.default.get('APPLICATION_NAME') };
});
Route_1.default.get('/:id', 'UrlSinglesController.redirect');
//# sourceMappingURL=routes.js.map