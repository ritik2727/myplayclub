import { Button, Grid, Typography } from "@mui/material";
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

export default function Container2() {
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
        height: 300,
      }}
    >
      <Grid item style={{ maxWidth: "50em" }}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          My Play Club Customer Support
        </Typography>
        <Typography variant="h6" style={{ marginTop: 20, marginBottom: 20 }}>
          Get in touch with My Play Club for any Queries, Emergencies, Feedback
          or Complaints. We are here to help you 24/7 with our online services.
        </Typography>
      </Grid>
      <Grid item>
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
