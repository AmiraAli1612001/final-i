import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./Header";
import { HashLink } from "react-router-hash-link";
import Particles from "react-particles";

import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom";

const Top = (props) => {
  let navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box>
      <Header />

      <Box className="home">
        <Grid
          container
          className="home-container"
          sx={{
            textAlign: { xs: "center", md: "start", position: "relative" },
          }}
        >
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fpsLimit: 120,

              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />

          <Box className="effect"></Box>

          <Grid
            item
            xs={11}
            md={7}
            lg={7}
            className="title"
            sx={{
              padding: { xs: "20px", md: "50px" },
              marginBottom: { md: "50px" },
            }}
          >
            <h1>{props.data.h1}</h1>
            <p style={{ color: "#ffffffb9" }} className="p-after">
              {props.data.p}
            </p>
            <p style={{ color: "#ffffffb9" }}>{props.data.p2}</p>

            <HashLink
              smooth="true"
              to={props.data.path}
              sx={{
                textAlign: "center",
                display: { xs: "block", md: "inline-block" },
                margin: "auto",
              }}
            >
              {props.data.link}
            </HashLink>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Top;
