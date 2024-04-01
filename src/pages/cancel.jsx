import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

const Cancel = () => {
  const { t } = useTranslation();

  return (
    <Box className="cancel">
      <title>cancellation policy</title>
      <Header />
      <Box className="content" sx={{ padding: { xs: "30px", md: "100px" } }}>
        <h1>{t("cancel-title")}</h1>
        <p>{t("cancel-p-1")}</p>

        <p>
          {t("cancel-p-2-1")}{" "}
          <Link to="/Refund-Policy">{t("cancel-p-2-2")}</Link>{" "}
          {t("cancel-p-2-3")}
        </p>

        <p>
          {t("cancel-p-3-1")}
          <Link to="mailto:info@Correct.io">{t("cancel-p-3-2")}</Link>
          {t("cancel-p-3-3")}
        </p>
        <p>{t("cancel-p-4")}</p>
        <hr />
        <p className="light">{t("cancel-p-5")}</p>
      </Box>
    </Box>
  );
};

export default Cancel;
