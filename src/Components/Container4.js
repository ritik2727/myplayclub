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

export default function Container4() {
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
      <Grid item style={{ maxWidth: "70em" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ margin: 20 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f0f0", // Set your desired background color
                padding: 4,
                width: 250,
                height: 150,
                borderRadius: 8,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow
              }}
            >
              <div style={{ maxWidth: "20em" }}>
                <img
                  src="https://static.wixstatic.com/media/956c3a_6db9876350824432aef35e41fc7a3576~mv2.png/v1/fill/w_44,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_6db9876350824432aef35e41fc7a3576~mv2.png"
                  alt="img1"
                  style={{ width: 44, height: 45, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 5, color: "black" }}
                >
                  Already Joined 40K+ users and enjoying.
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item style={{ margin: 20 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f0f0", // Set your desired background color
                padding: 4,
                width: 250,
                height: 150,
                borderRadius: 8,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow
              }}
            >
              <div style={{ maxWidth: "20em" }}>
                <img
                  src="https://static.wixstatic.com/media/956c3a_56038c0faa324bcda5e56d63e97e0e11~mv2.png/v1/fill/w_39,h_51,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_56038c0faa324bcda5e56d63e97e0e11~mv2.png"
                  alt="img1"
                  style={{ width: 44, height: 45, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 5, color: "black" }}
                >
                  Your Information is 100% Secured with us.
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item style={{ margin: 20 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f0f0", // Set your desired background color
                padding: 4,
                width: 250,
                height: 150,
                borderRadius: 8,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow
              }}
            >
              <div style={{ maxWidth: "20em" }}>
                <img
                  src="https://static.wixstatic.com/media/956c3a_63cbe62eba84463d84a8a352e2a9cd96~mv2.png/v1/fill/w_47,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_63cbe62eba84463d84a8a352e2a9cd96~mv2.png"
                  alt="img1"
                  style={{ width: 44, height: 45, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 5, color: "black" }}
                >
                  24 hour withdrawal available (unlimited time)
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item style={{ margin: 20 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f0f0", // Set your desired background color
                padding: 4,
                width: 250,
                height: 150,
                borderRadius: 8,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow
              }}
            >
              <div style={{ maxWidth: "20em" }}>
                <img
                  src="https://static.wixstatic.com/media/956c3a_63cbe62eba84463d84a8a352e2a9cd96~mv2.png/v1/fill/w_47,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_63cbe62eba84463d84a8a352e2a9cd96~mv2.png"
                  alt="img1"
                  style={{ width: 44, height: 45, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 5, color: "black" }}
                >
                  100% Genuine and Secured
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item style={{ margin: 20 }}>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f0f0f0", // Set your desired background color
                padding: 4,
                width: 250,
                height: 150,
                borderRadius: 8,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow
              }}
            >
              <div style={{ maxWidth: "20em" }}>
                <img
                  src="https://static.wixstatic.com/media/956c3a_5b259d20e2104b85b7b1ff6cdc8b963e~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_5b259d20e2104b85b7b1ff6cdc8b963e~mv2.png"
                  alt="img1"
                  style={{ width: 44, height: 45, borderRadius: "50%" }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 5, color: "black" }}
                >
                  24x7 customer service available. So need to Worry!
                </Typography>
              </div>
            </Box>
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
