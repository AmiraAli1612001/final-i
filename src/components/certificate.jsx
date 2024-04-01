import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Certificate = () => {
  const { t } = useTranslation();

  return (
    <Box className="certificate">
      <h2>{t("certificate-title")}</h2>
      <p style={{ width: { xs: "90vw", md: "80vw" } }}>
        {t("certificate-p-1")}
      </p>
      <p>{t("certificate-p-2")}</p>
      <p>{t("certificate-p-3")}</p>
    </Box>
  );
};

export default Certificate;
