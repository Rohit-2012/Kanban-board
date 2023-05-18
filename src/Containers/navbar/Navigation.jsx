import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { BsCircleHalf, BsTrello } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar({ changeTheme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: 0 }}>
        <Toolbar
          sx={{
            backgroundColor: "#424242",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: {
              xs: "1rem",
              sm: "1rem",
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <CgMenuGridR />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            <BsTrello style={{ marginRight: "0.5rem", marginTop: "0.5rem" }} />
            Trello
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              paddingLeft: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              onClick={changeTheme}
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#757575",
                "&:hover": {
                  backgroundColor: "#757575",
                },
              }}
            >
              Change background
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              href="https://trello.com/"
              target="_blank"
            >
              <Badge badgeContent={0} color="error">
                <HelpOutlineIcon />
              </Badge>
            </IconButton>
            <Tooltip title="Change Theme">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <BsCircleHalf size={20} />
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={handleClick}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Chand babu</MenuItem>
              <MenuItem onClick={handleClose}>Rohit kirti</MenuItem>
              <MenuItem onClick={handleClose}>Kajal gupta</MenuItem>
              <MenuItem onClick={handleClose}>Ruturaj mengal</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
