import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { FormTypes } from "@/app/types/types";

const theme = createTheme({ palette: { primary: { main: "#6b1d50" } } });

function TextField({
  id,
  type,
  name,
  value,
  placeholder,
  error,
  errorText,
  hidden = false,
  handleChange,
  multiline,
  rows,
  width = "48%",
}: FormTypes) {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        error={error}
        hidden={hidden}
        size='small'
        sx={{ width: width, mb: "0.5rem", mr: "2%" }}>
        <InputLabel htmlFor={id}>{placeholder}</InputLabel>
        <OutlinedInput
          sx={{
            color: "#6b1d50",
            borderRadius: "5px",
            "&.Mui-focused": {
              border: "none",
            },
          }}
          id={id}
          type={type}
          name={name}
          value={value}
          label={placeholder}
          onChange={handleChange}
          multiline={multiline}
          rows={rows}
        />

        <FormHelperText sx={{ color: "#6b1d50" }}>{errorText}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
}

export default TextField;
