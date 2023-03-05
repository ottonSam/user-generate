import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import validationSchema from "../utils/validationSchema";
import FormFields from "./FormFields";
import { Button, Typography } from "@mui/material";
import dataFormat from "../utils/dataFormt";
import api from "../services/api";

interface IFormInputs {
  numero_usuarios: number;
  idade: boolean;
  cpf: boolean;
  rg: boolean;
  data_nasc: boolean;
  sexo: boolean;
  signo: boolean;
  mae: boolean;
  pai: boolean;
  email: boolean;
  senha: boolean;
  cep: boolean;
  endereco: boolean;
  numero: boolean;
  bairro: boolean;
  cidade: boolean;
  estado: boolean;
  telefone_fixo: boolean;
  celular: boolean;
  altura: boolean;
  peso: boolean;
  tipo_sanguineo: boolean;
  cor: boolean;
}

const UserGenerateForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [dataUsers, setDataUsers] = useState([{}]);

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    const numberUsers = data.numero_usuarios;
    const fieldsRequest = dataFormat(data);
    const apiResponse = await api({
      data: {
        numero_usuarios: numberUsers,
        campos: fieldsRequest,
      },
    });
    apiResponse.status === 200 && setDataUsers(apiResponse.data);
    console.log(apiResponse.data);
    setShowForm(false);
  };
  return (
    <div>
      {showForm ? (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
            <FormFields />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </FormProvider>
      ) : (
        <h1>🎉Formulário enviado parabéns🎉</h1>
      )}
      {!showForm && <Typography>{JSON.stringify(dataUsers)}</Typography>}
    </div>
  );
};
export default UserGenerateForm;
