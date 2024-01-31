import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import image from './MPC.png'

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

export default function Header() {
  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ justifyContent: "space-evenly" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={image}
              alt=""
              style={{
                width: "250px",
                height: "100px",
                objectFit: "cover",
                marginRight: "20px",
              }}
              width="148"
              height="86"
              // srcSet="https://static.wixstatic.com/media/8267da_7b14a87a776548638f774b5ef31251d8~mv2.png/v1/fill/w_148,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8267da_7b14a87a776548638f774b5ef31251d8~mv2.png 1x, https://static.wixstatic.com/media/8267da_7b14a87a776548638f774b5ef31251d8~mv2.png/v1/fill/w_296,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8267da_7b14a87a776548638f774b5ef31251d8~mv2.png 2x"
              fetchpriority="high"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              color="inherit"
              href="https://wa.me/7083776254?text=I%27m%20interested"
              target="_blank"
              rel="noreferrer noopener"
              style={{
                border: "2px solid gold",
                borderRadius: 20,
                marginRight: 20,
              }}
            >
              WhatsApp Us @7083776254
            </Button>
            <StyledButton
              href="https://wa.me/7083776254?text=I%27m%20interested"
              target="_blank"
              rel="noreferrer noopener"
            >
              Contact Us @7083776254
            </StyledButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
