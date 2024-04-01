import { Box } from "@mui/material";
import React from "react";
import macbook from "../images/MacBook.png";
import Top from "../components/top";
import Modern from "../components/modern";
import { useTranslation } from "react-i18next";

const Web = () => {
  const { t } = useTranslation();

  let data = {
    h1: t("web-title"),
    p: t("web-p"),
    link: t("learn-more"),
    img: macbook,
    path: "/web-development/#modern",
  };
  return (
    <Box className="web">
      <title>web development</title>
      <Top data={data} />
      <Modern />
    </Box>
  );
};

export default Web;
