import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

export default function Login() {
  const { registerWithEmail } = useAuth();
  const navigate = useNavigate();
  const { register, formState, handleSubmit, setError } =
    useForm<RegisterForm>();

  const OnSubmit = async (data: RegisterForm) => {
    try {
      await registerWithEmail({
        avatar:
          "https://fastly.picsum.photos/id/237/100/100.jpg?hmac=Pna_vL4vYBRMXxFMY-lYXcZAL34T7PZWdNDlEOwqqE4",
        ...data,
      });
      navigate("/login");
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
        component={Paper}
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
          boxShadow: 5,
          backgroundColor: "#b6b6b6a3",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          textAlign="center"
          marginBottom="30px"
        >
          Crear cuenta
        </Typography>
        <Container
          component="form"
          maxWidth="sm"
          onSubmit={handleSubmit(OnSubmit)}
        >
          <Stack spacing="10px">
            <TextField
              label="Username"
              type="username"
              size="medium"
              {...register("username", { required: true })}
              error={!!formState.errors.username}
            />
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

            <Button type="submit" variant="contained" fullWidth size="large">
              Registrarse
            </Button>
            <Box paddingTop={1}>
              <Link
                component={ReactLink}
                to="/login"
                display="block"
                textAlign="center"
                letterSpacing={2.5}
                sx={{ marginTop: 1 }}
              >
                Ya tienes cuenta?, ¡Inicia sessión!
              </Link>
            </Box>
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
            sx={{
              borderRadius: 10000,
              backgroundColor: (theme) => theme.palette.common.white,
              color: (theme) => theme.palette.common.black,
            }}
            startIcon={<FcGoogle />}
          >
            Google
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
