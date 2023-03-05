import * as yup from "yup";

const validationSchema = yup.object().shape({
  numero_usuarios: yup.number().min(1).max(30).required(),
  nome: yup.boolean().required(),
  idade: yup.boolean().required(),
  cpf: yup.boolean().required(),
  rg: yup.boolean().required(),
  data_nasc: yup.boolean().required(),
  sexo: yup.boolean().required(),
  signo: yup.boolean().required(),
  mae: yup.boolean().required(),
  pai: yup.boolean().required(),
  email: yup.boolean().required(),
  senha: yup.boolean().required(),
  cep: yup.boolean().required(),
  endereco: yup.boolean().required(),
  numero: yup.boolean().required(),
  bairro: yup.boolean().required(),
  cidade: yup.boolean().required(),
  estado: yup.boolean().required(),
  telefone_fixo: yup.boolean().required(),
  celular: yup.boolean().required(),
  altura: yup.boolean().required(),
  peso: yup.boolean().required(),
  tipo_sanguineo: yup.boolean().required(),
  cor: yup.boolean().required(),
});

export default validationSchema;
