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

export default function Container3() {
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
        // height: 600,
        padding: 100,
      }}
    >
      <Grid item>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Happy Clients Always Love Us
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: 40 }}>
        <Grid
          container
          direction="row"
          spacing={5}
          style={{ justifyContent: "space-evenly" }}
        >
          <Grid item>
            <div className="circle-container">
              <div className="circle">
                <div className="circle-content">
                  <div className="circle-number">40,000+</div>
                  <div className="circle-text">Happy Clients</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item>
            {" "}
            <div className="circle-container">
              <div className="circle">
                <div className="circle-content">
                  <div className="circle-number">2 lakh +</div>
                  <div className="circle-text">Application users</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item>
            {" "}
            <div className="circle-container">
              <div className="circle">
                <div className="circle-content">
                  <div className="circle-number">4.7</div>
                  <div className="circle-text">Rating</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: 40 }}>
        <Button
          color="inherit"
          href="https://wa.me/7083776254?text=I%27m%20interested"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            border: "2px solid gold",
            borderRadius: 20,
            marginRight: 20,
            width: 300,
          }}
        >
          Open Your Demo Account
        </Button>
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
