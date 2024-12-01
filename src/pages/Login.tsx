import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, setError } = useForm<LoginForm>();

  const OnSubmit = async (data: LoginForm) => {
    try {
      await login(data.email, data.password);
      navigate("/home");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error(e);
      setError("email", { message: "Incorrect email" });
      setError("password", { message: "Incorrect password" });
    }
  };

  return (
    <Box
      component="main"
      sx={{ backgroundColor: (theme) => theme.palette.background.default }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          marginX: "auto",
          paddingX: "10px",
          boxSizing: "border-box",
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.grey.A400,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          textAlign="center"
          marginBottom="30px"
        >
          Comienza tu aventura
        </Typography>
        <Container
          component="form"
          maxWidth="sm"
          onSubmit={handleSubmit(OnSubmit)}
        >
          <Stack spacing="10px">
            <TextField
              label="Email"
              type="email"
              size="medium"
              {...register("email", { required: true })}
              error={!!formState.errors.email}
            />
            <TextField
              label="Password"
              type="password"
              size="medium"
              {...register("password", { required: true })}
              error={!!formState.errors.password}
            />
            <Typography
              component={Link}
              to="/forgot-password"
              display="block"
              textAlign="right"
            >
              ¿Olvidaste tu contraseña?
            </Typography>
            <Button type="submit" variant="contained" fullWidth size="large">
              Iniciar sessión
            </Button>
          </Stack>
          <Typography
            component="p"
            display="block"
            marginY="20px"
            textAlign="center"
            sx={{
              position: "relative",
              ":before": {
                position: "absolute",
                top: "calc(50% - 1px)",
                left: 0,
                content: "''",

                width: "calc(50% - 30px)",
                height: "1px",
                backgroundColor: (theme) => theme.palette.common.black,
              },
              ":after": {
                position: "absolute",
                top: "calc(50% - 1px)",
                right: 0,
                content: "''",

                width: "calc(50% - 30px)",
                height: "1px",
                backgroundColor: (theme) => theme.palette.common.black,
              },
            }}
          >
            o
          </Typography>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            sx={{ borderRadius: 10000 }}
            startIcon={<FcGoogle />}
          >
            Google
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
