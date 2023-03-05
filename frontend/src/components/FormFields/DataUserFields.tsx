import { Box, Button, List } from "@mui/material";
import { useState } from "react";
import SwitchComponent from "./SwitchComponent";

const DataUserFields = () => {
  const [showCase, setShowCase] = useState(0);

  const handleChange = (newValue: number) => {
    setShowCase(newValue);
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Button type="button" onClick={() => handleChange(0)}>
          Dados autenticação
        </Button>
        <Button type="button" onClick={() => handleChange(1)}>
          Dados pessoais
        </Button>
        <Button type="button" onClick={() => handleChange(2)}>
          Endereço
        </Button>
        <Button type="button" onClick={() => handleChange(3)}>
          Outros
        </Button>
      </Box>
      <List sx={{ display: showCase === 0 ? "block" : "none" }}>
        <SwitchComponent name="nome" label="Nome" />
        <SwitchComponent name="email" label="Email" />
        <SwitchComponent name="senha" label="Senha" />
        <SwitchComponent name="telefone_fixo" label="Telefone fixo" />
        <SwitchComponent name="celular" label="Celular" />
      </List>

      <List sx={{ display: showCase === 1 ? "block" : "none" }}>
        <SwitchComponent name="idade" label="Idade" />
        <SwitchComponent name="data_nasc" label="Data de nascimento" />
        <SwitchComponent name="cpf" label="CPF" />
        <SwitchComponent name="rg" label="RG" />
        <SwitchComponent name="sexo" label="Sexo" />
        <SwitchComponent name="mae" label="Mãe" />
        <SwitchComponent name="pai" label="Pai" />
      </List>

      <List sx={{ display: showCase === 2 ? "block" : "none" }}>
        <SwitchComponent name="cep" label="Cep" />
        <SwitchComponent name="endereco" label="Endereço" />
        <SwitchComponent name="numero" label="Número da casa" />
        <SwitchComponent name="bairro" label="Bairro" />
        <SwitchComponent name="cidade" label="Cidade" />
        <SwitchComponent name="estado" label="Estado" />
      </List>

      <List sx={{ display: showCase === 3 ? "block" : "none" }}>
        <SwitchComponent name="signo" label="Signo" />
        <SwitchComponent name="altura" label="Altura" />
        <SwitchComponent name="peso" label="Peso" />
        <SwitchComponent name="tipo_sanguineo" label="Tipo Sanguineo" />
        <SwitchComponent name="cor" label="Cor favorita" />
      </List>
    </>
  );
};
export default DataUserFields;
