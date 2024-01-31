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
export default function Container8() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(https://static.wixstatic.com/media/956c3a_b67a9fac301e4cb69409611ea2cc90cc~mv2.webp)`,
        width: "100%",
        padding: 100,
      }}
    >
      <Grid item style={{ maxWidth: "50em" }}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          WhatsApp US Today
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          Feel free to contact us.
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: 20 }}>
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
