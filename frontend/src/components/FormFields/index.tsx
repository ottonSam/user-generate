import { Stack } from "@mui/material";
import DataUserFields from "./DataUserFields";
import TextFieldComponent from "./TextFieldComponent";

const FormFields = () => (
  <Stack direction="column" margin="auto">
    <TextFieldComponent name="numero_usuarios" label="Numero de usuarios" />
    <DataUserFields />
  </Stack>
);

export default FormFields;
