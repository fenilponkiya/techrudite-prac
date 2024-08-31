import MenuIcon from "@mui/icons-material/Menu";
import { Slide, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import logo from "../images/logo.svg";

const drawerWidth = 240;
const navItems = ["Services", "About us", "Blogs", "Case Studies"];

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div />}
      </Slide>
    );
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} style={{ marginTop: 4 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} sx={{ textTransform: "none" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        sx={{
          background: "#FF6400",
          borderRadius: "16px",
          color: "white",
          fontSize: "0.7rem",
          fontWeight: 700,
        }}
      >
        Contact Us
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{ background: "transparent", boxShadow: 0 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flexGrow: 0.7,
                display: { xs: "none", sm: "block" },
              }}
            >
              <img src={logo} style={{ marginTop: "8px" }} />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "space-between",
                flexGrow: 0.3,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "black", textTransform: "none" }}
                >
                  {item}
                </Button>
              ))}
              <Button
                sx={{
                  background: "#FF6400",
                  borderRadius: "16px",
                  color: "white",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
