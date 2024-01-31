import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  color: white !important;
  border: 2px solid gold !important;
  border-radius: 20px !important;
  width: 300px !important;
  margin-right: 20px !important;
  &:hover {
    background-color: green !important;
    box-shadow: none;
    border: 2px solid green !important;
  }
`;

export default function Container5() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        backgroundColor: "black",
        color: "#fff",
        width: "100%", // Set width to 100vw
        padding: 100,
      }}
    >
      <Grid item style={{ maxWidth: "50em" }}>
        <Typography
          variant="h3"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          About My Play Club Book
        </Typography>
        <Typography variant="h6" textAlign="center" style={{ marginTop: 20 }}>
          My Play Club Book is a cricket betting and trading website that has
          been in operation since 2010. This service is regarded the largest
          book exchange platform for cricket betting after Mahadev's book. It
          distinguishes itself from other exchange platforms due to its simple
          deposit and withdrawal options. My Play Club owns or operates this
          website. We communicate exclusively via Whatsapp.
        </Typography>
        <Typography variant="h6" textAlign="center" style={{ marginTop: 20 }}>
          My Play Club cricket ID online has lately developed the most recent
          new methods of making money through betting. Users receive their
          cricket IDs promptly online, with 24-hour withdrawal services. With
          over 50000 pleased consumers, this platform is at the top of the book
          exchange market. It currently has over 200 offline branches.
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: 40 }}>
        <StyledButton
          href="https://wa.me/7083776254?text=I%27m%20interested"
          target="_blank"
          rel="noreferrer noopener"
        >
          Contact Us @7083776254
        </StyledButton>
      </Grid>
    </Grid>
  );
}
