import api from "./api";
import fields from "../utils/fields";

const apiRequest = async (data: any) => {
  const campos: string[] = [];
  fields.forEach((field) => {
    if (data[field]) {
      campos.push(field);
    }
  });

  const apiResponse = await api({
    data: {
      numero_usuarios: data.numero_usuarios,
      campos,
    },
  });

  return apiResponse;
};
export default apiRequest;
