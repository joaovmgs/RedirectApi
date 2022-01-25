"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class FirstUserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.create({
            'email': 'joao@hotmail.com',
            'password': 'secret',
            'name': 'João',
            'surname': 'Santos'
        });
    }
}
exports.default = FirstUserSeeder;
//# sourceMappingURL=FirstUser.js.map