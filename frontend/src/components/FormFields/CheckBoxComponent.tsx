import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ICheckBoxComponentProps {
  name: string;
  label: string;
}

const CheckBoxComponent = ({ name, label }: ICheckBoxComponentProps) => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => {
        return (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => setValue(name, !watch(name))} />
              }
              label={label}
            />
            {errors[name] && (
              <FormHelperText>
                <Typography color="error" align="center">
                  {errors[name]?.message?.toString()}
                </Typography>
              </FormHelperText>
            )}
          </FormGroup>
        );
      }}
    />
  );
};
export default CheckBoxComponent;
