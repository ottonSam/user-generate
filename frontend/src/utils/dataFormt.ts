const dataFormat = (data: any) => {
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

  const fieldsRequest: string[] = [];
  fields.forEach((field) => {
    if (data[field]) {
      fieldsRequest.push(field);
    }
  });
  return fieldsRequest;
};
export default dataFormat;
