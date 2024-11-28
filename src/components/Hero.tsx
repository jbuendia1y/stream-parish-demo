import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      marginX="auto"
      component="header"
      className="main-content"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        width="100%"
        textAlign="center"
        className="main-logo-container"
      >
        <Typography
          component="h1"
          variant="h1"
          className="title"
          maxWidth={["300px", "400px", "500px"]}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="StreamParish"
            sx={{
              maxWidth: "100%",
            }}
            className="logo"
          />
        </Typography>
        <Typography
          component="p"
          variant="body1"
          fontSize="1.2rem"
          sx={{
            color: (theme) => theme.palette.common.white,
          }}
        >
          Todo lo que amas en un solo lugar
        </Typography>
      </Box>

      <Stack className="main-actions" spacing="10px" marginY="20px">
        <Button
          component={Link}
          to="/subscribe"
          fullWidth
          variant="contained"
          size="large"
          sx={{ padding: 3, fontSize: "1.15rem" }}
        >
          Suscribirse
        </Button>
        <Button
          component={Link}
          to="/login"
          fullWidth
          variant="contained"
          size="large"
          sx={{ padding: 3, fontSize: "1.15rem" }}
        >
          Inicia sessión
        </Button>
      </Stack>

      <Typography
        variant="body1"
        component="p"
        className="term-and-conditions"
        textAlign="center"
        marginTop="50px"
        marginBottom="25px"
      >
        <Link to="/terms-and-conditions">Terminos y condiciones</Link>
      </Typography>
    </Box>
  );
}
