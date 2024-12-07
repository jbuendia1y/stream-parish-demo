import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  DEFAULT_USER_AVATAR_URL,
  UserLoading,
  UserNotExist,
} from "../models/User";
import { MdLogout } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export function AvatarNav() {
  const { user, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (user === UserNotExist) return null;

  if (user === UserLoading)
    return (
      <Skeleton variant="circular">
        <IconButton aria-label="loading-account">
          <Avatar
            src={DEFAULT_USER_AVATAR_URL}
            alt={"loading-account"}
            sx={{ backgroundColor: "white" }}
          />
        </IconButton>
      </Skeleton>
    );

  return (
    <>
      <IconButton
        onClick={handleOpenUserMenu}
        aria-label="account"
        aria-controls={anchorElUser ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorElUser ? "true" : undefined}
      >
        <Avatar
          src={user.avatar}
          alt={user.username}
          sx={{
            backgroundColor: "white",
            border: "2px solid white",
          }}
        />
      </IconButton>
      <Menu
        open={Boolean(anchorElUser)}
        anchorEl={anchorElUser}
        onClose={handleCloseUserMenu}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <Avatar
              src={user.avatar}
              alt={user.username}
              sx={{ backgroundColor: "white", width: 30, height: 30 }}
            />
          </ListItemIcon>
          <ListItemText
            primary={user.username}
            secondary={"Plan FREE"}
            sx={{ marginLeft: 1 }}
          />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <IoSettingsSharp width="25" height="25" fill="white" />
          </ListItemIcon>
          Configuración
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <MdLogout width="25" height="25" fill="white" />
          </ListItemIcon>
          Cerrar sessión
        </MenuItem>
      </Menu>
    </>
  );
}
