import { Box, Button, Divider, Grid, Link, Typography } from "@mui/material";
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

export default function Container9() {
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
        // height: 600,
      }}
    >
      <Grid item style={{ maxWidth: "50em" }}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          How to place bet on My Play Club Book
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          ​You may place bets on 1000+ games and play 150+ live casino games
          without having to register. The live games are displayed on the
          betting platform's dashboard. You must select a game and place a
          wager. If you want to wager on the match toss, go to the Fancy bet
          section after selecting the match. Place your wager on a specific
          team.
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

      <Grid item style={{ maxWidth: "50em", marginTop: 100 }}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          Multiple Sports Games and Live Casinos to Bet on
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          The My Play Club cricket ID platform has thousands of sports games,
          including cricket, basketball, football, tennis, and soccer, among
          others. You can place your bet on any sports game or live match. In
          addition to sports games, there will be live casinos where you may try
          your luck at winning the most money.
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

      <Grid item style={{ maxWidth: "50em", marginTop: 100 }}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          How to Get in Touch with My Play Club Book
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          The contact information is available on the webpage. You can also
          reach us through any of the WhatsApp numbers provided below.
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

      <Grid item style={{ maxWidth: "50em", marginTop: 100 }}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ fontWeight: "bold" }}
        >
          How to Withdraw Cash
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          Withdrawal is simple, and you can deposit the winnings into your bank
          account by sending a legitimate withdrawal request to the registered
          numbers. Remember that the withdrawal notification will only be
          published on one website. First and foremost, you must cancel all
          outstanding stakes and agree to withdraw the refund. On withdrawal
          requests, we may impose a fee.
        </Typography>
        <Typography variant="h6" textAlign="center" style={{ marginTop: 20 }}>
          My Play Club Book is a reputed betting platform. All you have to do is
          register for your cricket ID online and follow the instructions.
          Gambling and betting, on the other hand, are addictions, therefore
          play honestly to avoid addiction. Invest your money wisely and try
          your luck to make the most money. You have 24-hour deposit and
          withdrawal options, so you can gamble whenever you want.
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          style={{ marginTop: 20, color: "gold" }}
        >
          We will double-check the details before proceeding with the withdrawal
          request to confirm that everything is proper. The money will be shown
          in the bank account number that you provided.
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

      <Box
        sx={{
          backgroundColor: "black",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {/* First Line */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Link
            href="/contact-us"
            style={{
              margin: "0 40px",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Contact Us
          </Link>

          <Link
            href="/about-us"
            style={{
              margin: "0 40px",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            About Us
          </Link>
        </div>
        <Divider color="gold" style={{ height: 2 }} />

        {/* Second Line */}
        <Typography
          variant="body2"
          style={{ marginBottom: "30px", marginTop: 30 }}
        >
          <Link
            href="/terms"
            style={{
              margin: "0 40px",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Terms and Conditions
          </Link>

          <Link
            href="/privacy-policy"
            style={{
              margin: "0 40px",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Privacy Policy
          </Link>

          <Link
            href="/disclaimer"
            style={{
              margin: "0 40px",
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Disclaimer
          </Link>
        </Typography>

        <Divider color="gold" style={{ height: 2 }} />
        {/* Third Line with Logos */}
        <div style={{ marginTop: 20 }}>
          <img
            src="https://static.wixstatic.com/media/956c3a_a88a0f4708dc4b8db3183151bf42ee0f~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_a88a0f4708dc4b8db3183151bf42ee0f~mv2.png"
            alt="WhatsApp Logo"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <img
            src="https://static.wixstatic.com/media/956c3a_7005efac8e5a49f6ad6eb273df200fe2~mv2.png/v1/fill/w_52,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_7005efac8e5a49f6ad6eb273df200fe2~mv2.png"
            alt="Telegram Logo"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <img
            src="https://static.wixstatic.com/media/956c3a_d4f8d1d46d3a4762be56051028caadb1~mv2.png/v1/fill/w_50,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/956c3a_d4f8d1d46d3a4762be56051028caadb1~mv2.png"
            alt="Instagram Logo"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
          <img
            src="https://static.wixstatic.com/media/956c3a_78367ffb49d7467887c840245926aa22~mv2.png/v1/fill/w_50,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Pinterest-logo.png"
            alt="Pin Logo"
            style={{ width: "50px", height: "50px", margin: "0 10px" }}
          />
        </div>
      </Box>
    </Grid>
  );
}
