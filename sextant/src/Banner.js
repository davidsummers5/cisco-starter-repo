import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

class Banner extends Component {
  render() {
    return (
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Sextant
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Banner;
