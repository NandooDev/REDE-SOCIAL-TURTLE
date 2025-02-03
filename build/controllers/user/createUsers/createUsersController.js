import validator from "validator";
import { sendMail } from "../../../services/sendMail";
export class CreateUsersController {
    createUsersRepository;
    cryptographyPassword;
    constructor(createUsersRepository, cryptographyPassword) {
        this.createUsersRepository = createUsersRepository;
        this.cryptographyPassword = cryptographyPassword;
    }
    async handle(httpRequest) {
        try {
            // verificar campos obrigatórios
            const requiredFields = [
                "name",
                "username",
                "email",
                "password",
            ];
            for (const field of requiredFields) {
                if (!httpRequest?.body?.[field]?.length) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`,
                    };
                }
            }
            //verificar se o email é valido
            const emailIsValid = validator.isEmail(httpRequest.body.email);
            if (!emailIsValid) {
                return {
                    statusCode: 400,
                    body: `Email is invalid`,
                };
            }
            const { password, ...userData } = httpRequest.body;
            //criptografar senha
            const passwordCryptography = await this.cryptographyPassword.execute(password);
            const user = await this.createUsersRepository.createUsers({
                ...userData,
                password: passwordCryptography,
            });
            sendMail(user.email, user.username);
            return {
                statusCode: 201,
                body: user,
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
