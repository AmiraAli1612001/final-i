import { Box  } from "@mui/material";
import React from "react";
import mobile from "../images/mobile.webp";
import Services from "../components/services";
import Ready from "../components/Ready";
import Choice from "../components/Choice";
import Facts from "../components/Facts";
import Owl from "../components/Owl";

import Top from "../components/top";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  let data = {
    h1: t("Correct"),
    p: t("top-home-p"),
    link: t("contact-us"),
    img: mobile,
    path: "/contact",
  };
  return (
    <Box className="index">
      <title>Home</title>
      <Top data={data} />
      <Services />
      <Choice />
      <Facts />
      <Owl />
      <Ready />
    </Box>
  );
};

export default Home;
