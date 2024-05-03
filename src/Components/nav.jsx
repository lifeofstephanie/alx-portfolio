import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Nav</Typography>
        <Button color="inherit" style={{ background: "#ccc" }}>
          Home
        </Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
