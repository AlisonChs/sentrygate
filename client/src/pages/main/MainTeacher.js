import "./main.css";
import Lottie from "lottie-react";

import { useState } from "react";

import computer from "../../_assets/js/computer.json";

import { useNavigate } from "react-router";
import { Stack, Box, Typography } from "@mui/material";


export function MainTeacher() {

  const navigate = useNavigate();

  const boxStyle = {
    color: "white",
    backgroundColor: "blueviolet",
    width: 150,
    height: 150,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    transition: "all 0.5s",
    "&:hover": {
      boxShadow: "10px 10px 0px 2px rgba(138,43,226,0.86)",
    },
    fontWeight: "bolder",
  };

  const boxTitleStyle = {
    color: "white",
    backgroundColor: "blueviolet",
    width: 700,
    height: 100,
    borderRadius: 5,
    fontSize: "0.1rem",
    padding: "1rem 1rem 1rem 1rem",
  };

  const handleQuest = () => navigate("/quest");

  return (
    <Stack>
      <div className="main">

        {/* Animação de estrelas do fundo da tela */}
        <div className="stars">
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="mainContent">
          <div className="content-left">
            <Box sx={boxTitleStyle} className="title">
              <Typography sx={{display: `flex`, flexDirection: `row`}} component="h1">
                <b>
                  Bem vindo!{" "}
                  {localStorage.getItem("name") === "" ? (
                    localStorage.getItem("name")
                  ) : (
                    <span>Professor</span>
                  )}
                </b>
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginTop: 10 }}
            >
              <Box onClick={handleQuest} sx={boxStyle}>
                Realizar chamada
              </Box>
              
              
            </Stack>
          </div>
            <div className="content-right">
              <div>
                <Lottie animationData={computer} style={{ width: "100%" }} />
              </div>
            </div>
        </div>
      </div>
    </Stack>
  );
}
