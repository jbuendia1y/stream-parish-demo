import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AvatarNav } from "./AvatarNav";
import { MobileNavButton } from "./MobileNavButton";

export function MainAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <MobileNavButton />
            <Typography
              variant="h6"
              component="p"
              fontWeight="bold"
              display={"flex"}
              flexGrow={1}
              color="white"
            >
              StreamParish
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.25}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Stack
                direction="row"
                flexGrow={1}
                sx={{ display: { xs: "none", lg: "flex" } }}
              >
                <Button
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to="/home"
                >
                  Inicio
                </Button>
                <Button
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to="/movies"
                >
                  Lista de peliculas
                </Button>
                <Button
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to={"/shows?status=current"}
                >
                  En emisión
                </Button>
              </Stack>
              <AvatarNav />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
