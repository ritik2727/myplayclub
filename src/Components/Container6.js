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
export default function Container6() {
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
          Instantly obtain your Cricket ID online.
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          To begin betting, you must first obtain your Cricket ID by following
          these simple steps:
        </Typography>
        <ol>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Please contact us using the WhatsApp number provided on the
              website ReddyAnna.in.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              You will be given a registration form in which you must provide
              all pertinent information such as your complete name, email
              address, current address, country, updated cellphone number,
              gender, and so on.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Following that, you will receive an online Cricket ID. Choose and
              create a password.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Here's how you can get your My Play Club ID.
            </Typography>
          </li>
        </ol>
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
