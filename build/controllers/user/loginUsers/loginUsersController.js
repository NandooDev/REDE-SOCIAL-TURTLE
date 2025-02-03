import validator from "validator";
import { generateAcessToken, generateRefreshToken, } from "../../../auth/utils/jwtUtils";
export class LoginUsersController {
    loginUsersRepository;
    constructor(loginUsersRepository) {
        this.loginUsersRepository = loginUsersRepository;
    }
    async handle(httpRequest) {
        try {
            //verificar se o email é valido
            const emailIsValid = validator.isEmail(httpRequest.body.email);
            if (!emailIsValid) {
                return {
                    statusCode: 400,
                    body: `Email is invalid`,
                };
            }
            const userLogin = await this.loginUsersRepository.loginUsers(httpRequest.body);
            if (userLogin.login == false) {
                return {
                    statusCode: 401,
                    body: "Email ou senha inválidos",
                };
            }
            const payload = {
                id: userLogin.id,
                username: userLogin.username,
                role: userLogin.role,
            };
            const acessToken = generateAcessToken(payload);
            const refreshToken = generateRefreshToken(payload.id);
            return {
                statusCode: 201,
                body: { acessToken: acessToken, refreshToken: refreshToken },
            };
        }
        catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}
