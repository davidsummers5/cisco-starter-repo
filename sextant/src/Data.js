import React, { Component } from "react";
import { Paper, Typography } from "@mui/material";

class Data extends Component {
  render() {
    return (
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
          gutterBottom
        >
          {this.props.name}:
        </Typography>
        <Typography
          style={{ display: "inline-block", whiteSpace: "pre-line" }}
          component="h1"
          variant="h6"
          color="primary"
          gutterBottom
        >
          {this.props.data}
        </Typography>
      </Paper>
    );
  }
}

export default Data;
