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

export default function Container7() {
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
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          How to Make a deposit in order to bet.
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          Users who wish to place a wager must first deposit dollars on the
          registered ID.
        </Typography>
        <ol>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Log in to your ID, then click "Deposit."
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Now, choose a payment option to deposit funds. PhonePe, GPay, UPI
              payment, Net banking, and Paytm are all options for Indian
              customers to deposit funds.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Fill out the necessary deposit information.
            </Typography>
          </li>
          <li>
            <Typography variant="h6" style={{ marginTop: 20 }}>
              Select Deposit.
            </Typography>
          </li>
        </ol>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, marginBottom: 40, color: "gold" }}
        >
          Remember that when you agree to the money deposit terms, you also
          agree to the site's costs.
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
