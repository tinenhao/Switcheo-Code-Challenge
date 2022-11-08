import React from "react";
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const TextContainer = styled("div")(({ theme }) => ({
  width: "75%",
  display: "flex",
  marginBottom: 25,
}));

const TextBox = styled("div")(({ theme }) => ({
  color: theme.palette.background.default,
  width: 240,
  fontSize: 18,
  marginTop: 14,
}));

const TextInput = styled(TextField)(({ theme }) => ({
  width: "70%",
  marginLeft: 10,
  fontSize: 12,
  input: {
    color: theme.palette.background.default,
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { border: `solid 2.5px ${theme.palette.text.secondary}` },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": { borderColor: theme.palette.background.default },
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": { borderColor: theme.palette.background.default },
  },
}));

function Main() {
  const theme = useTheme();

  return (
    <Box width="100vw" height="100vh" display="flex">
      <Container>
        <Box
          component="img"
          alt="Switcheo Logo"
          src={logo}
          sx={{
            height: 200,
            width: 400,
          }}
        />
      </Container>
      <Container sx={{ backgroundColor: theme.palette.text.primary }}>
        <TextContainer>
          <TextBox>ETH Address: </TextBox>
          <TextInput />
        </TextContainer>
        <TextContainer>
          <TextBox>Amount To Send: </TextBox>
          <TextInput type={"number"} />
        </TextContainer>
        <TextContainer>
          <TextBox>OTP Authentication: </TextBox>
          <TextInput type={"number"} />
        </TextContainer>
        <Button
          sx={{
            height: 50,
            width: 200,
            fontSize: 20,
            border: `solid 2.5px ${theme.palette.background.default}`,
            color: theme.palette.background.default,
            "&:hover": {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            },
          }}
        >
          SEND TOKENS
        </Button>
      </Container>
    </Box>
  );
}

export default Main;
