import { Request, Response } from "express";

import generateUser from "@killovsky/4devs";

interface IGenerateUserDTO {
  numero_usuarios: number;
  campos: string[];
}
class GenerateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { numero_usuarios, campos } = request.body;

    const apiResponse = await generateUser.gerar(numero_usuarios);

    if (apiResponse.error) {
      response.status(apiResponse.code).send(apiResponse.error_msg);
    }

    const users = [];

    apiResponse.dados.forEach((user) => {
      const userData = {};
      campos.forEach((dado) => {
        userData[dado] = user[dado];
      });
      users.push(userData);
    });

    return response.status(200).json(users);
  }
}

export { GenerateUserController };
