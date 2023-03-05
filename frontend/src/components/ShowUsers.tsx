import { Box, Button, Typography } from "@mui/material";

interface IShowUsersProps {
  usersData: JSON[];
  setShowForm: (e: any) => void;
}

const ShowUsers = ({ usersData, setShowForm }: IShowUsersProps) => {
  const users = <pre>{JSON.stringify(usersData, null, 2)}</pre>;

  const handleReset = () => {
    setShowForm(true);
  };

  return (
    <Box>
      <Typography variant="h5" marginBottom={1}>
        🎉Parabéns os usuários foram criados com sucesso🎉
      </Typography>
      {users}
      <Button
        type="button"
        color="success"
        variant="contained"
        onClick={handleReset}
      >
        Voltar ao formulário
      </Button>
    </Box>
  );
};
export default ShowUsers;
