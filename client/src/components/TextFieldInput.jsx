import TextField from "@mui/material/TextField";

const TextFieldInput = ({ textFieldErrorMessage, textFieldRef, textFieldError }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Write an Url"
        variant="outlined"
        size="small"
        inputRef={textFieldRef}
        error={textFieldError}
        helperText={textFieldError ? textFieldErrorMessage : null}
      ></TextField>
    </>
  );
};

export default TextFieldInput;
