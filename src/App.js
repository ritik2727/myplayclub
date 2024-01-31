import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Link,
  Divider,
  makeStyles,
} from "@mui/material";
import "./App.css";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Header from "./Components/Header";
import Container1 from "./Components/Container1";
import Container2 from "./Components/Container2";
import Container3 from "./Components/Container3";
import Container4 from "./Components/Container4";
import Container5 from "./Components/Container5";
import Container6 from "./Components/Container6";
import Container7 from "./Components/Container7";
import Container8 from "./Components/Container8";
import Container9 from "./Components/Container9";

const StyledButton = styled(Button)`
  color: white !important;
  border: 2px solid gold !important;
  border-radius: 20px !important;
  margin-right: 20px !important;
  &:hover {
    background-color: green !important;
    box-shadow: none;
    border: 2px solid green !important;
  }
`;

const App = () => {
  return (
    <>
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </>
  );
};

export default App;
