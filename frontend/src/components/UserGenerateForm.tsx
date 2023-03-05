import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import validationSchema from "../utils/validationSchema";
import FormFields from "./FormFields";
import { Button, Typography } from "@mui/material";
import apiRequest from "../services/apiRequest";

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

interface IUserGenerateFormProps {
  setDataUsers: (e: any) => void;
  setShowForm: (e: any) => void;
}

const UserGenerateForm = ({
  setDataUsers,
  setShowForm,
}: IUserGenerateFormProps) => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = async (
    data: IFormInputs
  ) => {
    const apiResponse = await apiRequest(data);
    if (apiResponse.status === 200) {
      setDataUsers(apiResponse.data);
      setShowForm(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Typography variant="h5" marginBottom={1}>
        Preencha o formulário para a criação dos usuários
      </Typography>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
        <FormFields />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </FormProvider>
  );
};
export default UserGenerateForm;
