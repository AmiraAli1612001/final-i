import { Box, Tab, TabPanel, TabList, TabContext } from "@mui/material";
import React from "react";
import Top from "../components/top";
import ssl from "../images/ssl_new.png";
import Certificate from "../components/certificate";
import SslWhat from "../components/sslWhat";
import Mytabs from "../components/mytabs";
import { useTranslation } from "react-i18next";

const Ssl = () => {
  const { t, i18n } = useTranslation();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let data = {
    h1: t("ssl-title"),
    p: t("ssl-p"),
    link: "",
    img: ssl,
  };
  return (
    <Box className="ssl">
      <title>ssl certificates</title>
      <Top data={data} />
      <Box className="our-plan">
        <h2>{t("our-plan")}</h2>
        <p>{t("plan-p")}</p>
        <Mytabs />
      </Box>
      <Certificate />
      <SslWhat />
    </Box>
  );
};

export default Ssl;
