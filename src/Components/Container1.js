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

export default function Container1() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        marginTop: 80,
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        padding: 100,
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // opacity:9,
        backgroundImage: `url(https://static.wixstatic.com/media/956c3a_b67a9fac301e4cb69409611ea2cc90cc~mv2.webp)`,
        width: "100%", // Set width to 100vw
        // height: 700,
      }}
    >
      <Grid item>
        <Grid container direction="row" justify="center">
          <Grid item style={{ maxWidth: "40em" }}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              Welcome to My Play Club
            </Typography>
            <Typography variant="h6" style={{ marginTop: 10 }}>
              India's No.1 Platform since 2010
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ marginTop: 10, marginBottom: 20 }}
            >
              Do you want to open your cricket ID online but can't find a
              trustworthy betting platform? Here's a copy of My Play Club's book
              for you. This is India's most famous and trusted cricket demo ID
              platform. My Play Club is India's largest exchange platform,
              offering fantastic online sports betting with a 24-hour withdrawal
              service.
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <StyledButton
                href="https://wa.me/7083776254?text=I%27m%20interested"
                target="_blank"
                rel="noreferrer noopener"
              >
                Contact Us @7083776254
              </StyledButton>
              <Button
                color="inherit"
                href="https://wa.me/7083776254?text=I%27m%20interested"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  border: "2px solid gold",
                  borderRadius: 20,
                  marginTop: 20,
                  marginBottom: 20,
                  width: 300,
                }}
              >
                WhatsApp Us @7083776254
              </Button>
              <Button
                color="inherit"
                href="https://wa.me/7083776254?text=I%27m%20interested"
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  border: "2px solid gold",
                  borderRadius: 20,
                  marginBottom: 20,
                  width: 300,
                }}
              >
                WhatsApp Us @7083776254
              </Button>
            </Box>
          </Grid>
          <Grid item style={{ marginRight: "5em" }}>
            <img
              alt="mobile phone icon"
              src="https://static.wixstatic.com/media/8267da_a5b3faeb271746c9b4a9f5074d795446~mv2.png/v1/fill/w_350,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8267da_a5b3faeb271746c9b4a9f5074d795446~mv2.png"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
