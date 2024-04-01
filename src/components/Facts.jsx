import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import one from "../images/one.svg";
import two from "../images//two.webp";
import three from "../images/three.svg";
import four from "../images/four.webp";
import five from "../images/five.webp";
import six from "../images/six.webp";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Facts = () => {
  const { t } = useTranslation();

  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="facts">
      <Grid
        container
        className="container"
        sx={{ width: { xs: "95vw", md: "85vw" } }}
      >
        <Grid item xs={11} lg={5.5}>
          <h2>{t("facts-title")}</h2>
          <p>{t("facts-p")}</p>
          <Box className="images">
            <Box className="imgs">
              <h2 className="partener">{t("partner")}</h2>

              <Box
                className="box"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <CardMedia component="img" image={one} />
                  <CardMedia component="img" image={two} />
                  <CardMedia component="img" image={three} />
                </Box>
              </Box>
              <Box className="box">
                <CardMedia component="img" image={four} />
                <CardMedia component="img" image={five} />
                <CardMedia component="img" image={six} />
              </Box>
            </Box>
          </Box>
          <Grid item>
            <Link to="/about" className="fact-one" onClick={toTops}>
              {t("about-us")}
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          xs={11}
          lg={6}
          className="circles"
          sx={{ justifyContent: { xs: "center", lg: "flex-end" } }}
        >
          <Box className="row">
            <Box className="circle">
              <h2>24</h2>
              <p>{t("projects")}</p>
            </Box>
            <Box className="circle">
              <h2>25780800</h2>
              <p>{t("programming-lines")}</p>
            </Box>
          </Box>
          <Box className="row">
            <Box className="circle">
              <h2>298</h2>
              <p>{t("happy-customers")}</p>
            </Box>
            <Box className="circle">
              <h2>15</h2>
              <p>{t("years-of-work")}</p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Facts;
