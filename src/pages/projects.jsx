import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import mobile from "../images/mobile.webp";
import Top from "../components/top";
import Choice from "../components/Choice";
import Facts from "../components/Facts";
import Owl from "../components/Owl";
import Ready from "../components/Ready";
import cy from "../images/cy.png";
import cy2 from "../images/cy2.png";
import et from "../images/et.png";
import web from "../images/web.webp";
import web2 from "../images/web2.webp";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  let projects = [
    { img: cy, title: t("cyber-security-website"), type: t("website") },
    { img: cy2, title: t("cyber-security-website"), type: t("website") },
    { img: et, title: t("Etisalate-website"), type: t("website") },
    { img: web, title: t("Frank-And-OaK"), type: t("website") },
    { img: web2, title: t("Dropbox-website"), type: t("website") },
  ];
  let data = {
    h1: t("our-projects"),
    p: t("projects-p-1"),
    p2: t("projects-p-2"),
    link: t("contact-us"),
    img: mobile,
    path: "/contact",
  };
  return (
    <Box className=" projects">
      <title>projects</title>
      <Top data={data} />
      <Grid
        container
        className="row-project"
        sx={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <h2 className="our">{t("our-projects")}</h2>
        </Box>
        <Grid
          container
          className="row-project"
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projects.map((item) => {
            return (
              <Grid item className="item" xs={10} md={3}>
                <CardMedia
                  sx={{ width: "100%", height: "250px" }}
                  component="img"
                  image={item.img}
                />
                <Box className="layer">
                  <p>{item.title}</p>
                  <p>{item.type}</p>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Choice />
      <Facts />
      <Owl />
      <Ready />
    </Box>
  );
};

export default Projects;
