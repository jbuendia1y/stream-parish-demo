import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const { register, formState, handleSubmit } = useForm<LoginForm>();

  const OnSubmit = (data: LoginForm) => {
    console.log(data);
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
          <Stack spacing="25px">
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
              Iniciar sessión
            </Button>
          </Stack>
          <Typography
            component={Link}
            to="/forgot-password"
            display="block"
            marginY="20px"
            textAlign="center"
          >
            ¿Olvidaste tu contraseña?
          </Typography>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            startIcon={<FcGoogle />}
          >
            Google
          </Button>
        </Container>
      </Container>
    </Box>
  );
}
