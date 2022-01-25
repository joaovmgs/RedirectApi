"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.resource('url', 'UrlSinglesController').apiOnly();
Route_1.default.resource('urls', 'MultipleUrlsController').apiOnly();
Route_1.default.resource('links', 'LinksController').apiOnly().except(['index', 'show']);
Route_1.default.get('m/:slug', 'MultipleUrlsController.sortUrl');
//# sourceMappingURL=url.js.map