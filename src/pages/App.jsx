import { Box } from "@mui/material";
import React from "react";
import mobile from "../images/mobile.webp";
import Top from "../components/top";
import Modern from "../components/modern";
import Choice from "../components/Choice";
import Facts from "../components/Facts";
import Owl from "../components/Owl";
import Ready from "../components/Ready";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();

  let data = {
    h1: t("app-title"),
    p: t("app-p"),
    link: t("learn-more"),
    img: mobile,
    path: "/App-developments/#modern",
  };
  return (
    <Box className="app">
      <title>app development</title>
      <Top data={data} />
      <Modern />
      <Choice />
      <Facts />
      <Owl />
      <Ready />
    </Box>
  );
};

export default App;
