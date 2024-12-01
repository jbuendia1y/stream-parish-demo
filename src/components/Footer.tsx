import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as ReactLink } from "react-router-dom";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        paddingY: 5,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Container maxWidth="lg">
        <Typography component="h3" marginBottom="0">
          <Box
            component="img"
            src="/logo_stream-parish.png"
            alt="StreamParish"
            sx={{ aspectRatio: "16/9", width: "150px" }}
          />
        </Typography>
        <Divider sx={{ marginY: 2.5 }} />
        <List sx={{ color: (theme) => theme.palette.common.white }}>
          <ListItem disablePadding>
            <ListItemButton component={ReactLink} to="/">
              <ListItemText primary="Inicio" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={ReactLink} to="/movies">
              <ListItemText primary="Lista de películas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={ReactLink} to="/shows?status=current">
              <ListItemText primary="Series en emisión" />
            </ListItemButton>
          </ListItem>
        </List>
        <Stack direction="row" spacing={1.5} justifyContent="end">
          <Link
            component={ReactLink}
            to="#facebook"
            aria-label="Facebook"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            <FaFacebookSquare size="25px" />
          </Link>
          <Link
            component={ReactLink}
            to="#twitter"
            aria-label="Twitter"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            <FaXTwitter size="25px" />
          </Link>
          <Link
            component={ReactLink}
            to="#instagram"
            aria-label="Instagram"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            <FaSquareInstagram size="25px" />
          </Link>
          <Link
            component={ReactLink}
            to="#youtube"
            aria-label="Youtube"
            sx={{ color: (theme) => theme.palette.common.white }}
          >
            <FaYoutube size="25px" />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
