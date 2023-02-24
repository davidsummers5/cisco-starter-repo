import React, { Component } from "react";
import "./App.css";
import { Box, Grid, Container, Toolbar, CssBaseline } from "@mui/material";
import Banner from "./Banner.js";
import Data from "./Data.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IPv4: null,
      IPv6: null,
      latency: null,
    };
  }

  render() {
    axios.get("https://api.ipify.org").then((response) => {
      console.log(response.data);
      this.setState({ IPv4: response.data });
    });
    axios.get("https://api6.ipify.org").then((response) => {
      console.log(response.data);
      this.setState({ IPv6: response.data });
    });
    axios.get("http://localhost:8000/message").then((response) => {
      console.log(response.data);
      this.setState({ latency: response.data.message + "ms" });
    });

    return (
      <Box
        sx={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <Banner />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} md={5} lg={4} alignItems="center">
                <Data name="IPv4" data={this.state.IPv4} />
              </Grid>
              <Grid item xs={8} md={7} lg={5}>
                <Data name="IPv6" data={this.state.IPv6} />
              </Grid>
              <Grid item xs={6} md={5} lg={4} alignItems="center">
                <Data name="Latency" data={this.state.latency} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    );
  }
}

export default App;
