import { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Login from "../app/Login";
import { useAuth } from "./use-auth";

export const AuthLogin = () => {
  const { login } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem("at");
    token !== null && login(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper
      component="form"
      onSubmit={(evt) => {
        evt.preventDefault();
        login(evt.target[0].value);
      }}
      sx={{
        p: 5,
        minWidth: 500,
        mt: 30,
        border: "3px solid white",
        borderColor: "primary.light"
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" textAlign="center">
          Survey App
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          type="text"
          size="small"
          name="token"
          placeholder="Invitation token"
          fullWidth
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Link to="/Login" element={<Login />}>
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Link>
      </Box>
      <Divider />
      <Button
        sx={{ mb: 2 }}
        onClick={() =>
          login(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiZm9ybSJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJmb3JtIiwieC1oYXN1cmEtdXNlci1pZCI6Inh4eCIsIngtaGFzdXJhLWZvcm0taWQiOiJ4eHgifX0.uPC5oicDRxiqV7o8CbQH7lI3mzFilrwW4Ofz9SWfN8o"
          )
        }
        fullWidth
      >
        Login with dev token
      </Button>
    </Paper>
  );
};
