"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.resource('/users', 'UsersController').apiOnly().middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
    show: ['auth'],
    index: ['auth']
});
Route_1.default.group(() => {
    Route_1.default.post('/', 'AuthController.store');
    Route_1.default.delete('/', 'AuthController.destroy');
}).prefix('auth');
//# sourceMappingURL=user.js.map