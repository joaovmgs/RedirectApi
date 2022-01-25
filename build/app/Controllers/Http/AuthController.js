"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async store({ request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password, {
            expiresIn: '20 days'
        });
        return token;
    }
    async destroy({ auth }) {
        await auth.logout();
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map