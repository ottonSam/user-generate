import { Stack } from "@mui/material";
import CheckBoxComponent from "./CheckBoxComponent";
import TextFieldComponent from "./TextFieldComponent";

const FormFields = () => (
  <Stack direction="column">
    <TextFieldComponent name="numero_usuarios" label="Numero de usuarios" />
    <CheckBoxComponent name="nome" label="Nome" />
    <CheckBoxComponent name="idade" label="Idade" />
    <CheckBoxComponent name="cpf" label="CPF" />
    <CheckBoxComponent name="rg" label="RG" />
    <CheckBoxComponent name="data_nasc" label="Data de nascimento" />
    <CheckBoxComponent name="sexo" label="Sexo" />
    <CheckBoxComponent name="signo" label="Signo" />
    <CheckBoxComponent name="mae" label="Mãe" />
    <CheckBoxComponent name="pai" label="Pai" />
    <CheckBoxComponent name="email" label="Email" />
    <CheckBoxComponent name="senha" label="Senha" />
    <CheckBoxComponent name="cep" label="Cep" />
    <CheckBoxComponent name="endereco" label="Endereço" />
    <CheckBoxComponent name="numero" label="Número da casa" />
    <CheckBoxComponent name="bairro" label="Bairro" />
    <CheckBoxComponent name="cidade" label="Cidade" />
    <CheckBoxComponent name="estado" label="Estado" />
    <CheckBoxComponent name="telefone_fixo" label="Telefone fixo" />
    <CheckBoxComponent name="celular" label="Celular" />
    <CheckBoxComponent name="altura" label="Altura" />
    <CheckBoxComponent name="peso" label="Peso" />
    <CheckBoxComponent name="tipo_sanguineo" label="Tipo Sanguineo" />
    <CheckBoxComponent name="cor" label="Cor favorita" />
  </Stack>
);

export default FormFields;
