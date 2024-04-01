import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Box className="about">
      <title>about us</title>
      <Header />
      <Box className="content" sx={{ padding: { xs: "30px", md: "100px" } }}>
        <h1>{t("about-us")}</h1>
        <p>{t("about-p")}</p>
        <h2>{t("about-p-2")}</h2>
        <ul>
          <li>
            <p>{t("about-p-3")}</p>
          </li>
          <li>
            <p>{t("about-p-4")}</p>
          </li>
          <li>
            <p>{t("about-p-5")}</p>
          </li>
          <li>
            <p>{t("about-p-6")}</p>
          </li>
        </ul>
        <h2>{t("about-p-7")}</h2>
        <p>{t("about-p-8")}</p>

        <h2>{t("about-p-9")}</h2>
        <p>{t("about-p-10")}</p>

        <h2>{t("about-p-11")}</h2>
        <p>{t("about-p-12")}</p>

        <h2>{t("about-p-13")}</h2>

        <p>
          {t("about-p-14")} {t("about-p-15")}{" "}
          <Link to="/contact">{t("contact-us")}</Link>
        </p>
      </Box>
    </Box>
  );
};

export default About;
