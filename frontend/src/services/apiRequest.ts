import api from "./api";

const apiRequest = async (data: any) => {
  const fields = [
    "nome",
    "idade",
    "cpf",
    "rg",
    "data_nasc",
    "sexo",
    "signo",
    "mae",
    "pai",
    "email",
    "senha",
    "cep",
    "endereco",
    "numero",
    "bairro",
    "cidade",
    "estado",
    "telefone_fixo",
    "celular",
    "altura",
    "peso",
    "tipo_sanguineo",
    "cor",
  ];

  const campos: string[] = [];
  fields.forEach((field) => {
    if (data[field]) {
      campos.push(field);
    }
  });

  const apiResponse = await api({
    data: {
      numero_usuarios: data.numero_usuarios,
      campos,
    },
  });

  return apiResponse;
};
export default apiRequest;
