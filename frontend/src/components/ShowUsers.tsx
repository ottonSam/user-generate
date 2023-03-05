import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IShowUsersProps {
  usersData: any;
}

const ShowUsers = ({ usersData }: IShowUsersProps) => {
  const users = usersData.map((user: JSON) => {
    return <pre>{JSON.stringify(user, null, 2)}</pre>;
  });

  return (
    <Box>
      <Typography variant="h5">
        🎉Parabéns os usuários foram criados com sucesso🎉
      </Typography>
      {users}
    </Box>
  );
};
export default ShowUsers;
