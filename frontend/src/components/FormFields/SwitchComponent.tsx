import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Switch,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ICheckBoxComponentProps {
  name: string;
  label: string;
}

const SwitchComponent = ({ name, label }: ICheckBoxComponentProps) => {
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
      render={({ field }) => {
        return (
          <FormGroup>
            <FormControlLabel
              {...field}
              control={
                <Switch
                  color="secondary"
                  onChange={(e) => setValue(name, !watch(name))}
                />
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
export default SwitchComponent;
