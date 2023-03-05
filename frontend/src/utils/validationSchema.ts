import * as yup from "yup";

const validationSchema = yup.object().shape({
  numero_usuarios: yup.number().min(1).max(30).required(),
  nome: yup.boolean().required().default(false),
  idade: yup.boolean().required().default(false),
  cpf: yup.boolean().required().default(false),
  rg: yup.boolean().required().default(false),
  data_nasc: yup.boolean().required().default(false),
  sexo: yup.boolean().required().default(false),
  signo: yup.boolean().required().default(false),
  mae: yup.boolean().required().default(false),
  pai: yup.boolean().required().default(false),
  email: yup.boolean().required().default(false),
  senha: yup.boolean().required().default(false),
  cep: yup.boolean().required().default(false),
  endereco: yup.boolean().required().default(false),
  numero: yup.boolean().required().default(false),
  bairro: yup.boolean().required().default(false),
  cidade: yup.boolean().required().default(false),
  estado: yup.boolean().required().default(false),
  telefone_fixo: yup.boolean().required().default(false),
  celular: yup.boolean().required().default(false),
  altura: yup.boolean().required().default(false),
  peso: yup.boolean().required().default(false),
  tipo_sanguineo: yup.boolean().required().default(false),
  cor: yup.boolean().required().default(false),
});

export default validationSchema;
