import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Ready = () => {
  const { t } = useTranslation();

  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="ready">
      <Box className="container">
        <h2>{t("ready-title")}</h2>
        <p>{t("ready-p")} </p>
        <Link to="/contact" onClick={toTops}>
          {t("contact-us")}
        </Link>
      </Box>
    </Box>
  );
};

export default Ready;
