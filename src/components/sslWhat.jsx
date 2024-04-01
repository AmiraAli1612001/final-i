import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const SslWhat = () => {
  const { t } = useTranslation();

  let circle = [
    { text: t("circle-1"), color: "#18b99b" },
    { text: t("circle-2"), color: "#b96618" },
    { text: t("circle-3"), color: "#efb111" },
    { text: t("circle-4"), color: "#3677bf" },
    { text: t("circle-5"), color: "#f171e7" },
    { text: t("circle-6"), color: "#9e69e4" },
  ];
  let icons = [
    {
      icon: <i class="fa fa-fingerprint"></i>,
      color: "#fd4f04",
      h3: t("ssl-box-1-title"),
      p: t("ssl-box-1-p"),
    },
    {
      icon: <i class="fa fa-headset"></i>,
      color: "#ff8904",
      h3: t("ssl-box-2-title"),
      p: t("ssl-box-2-p"),
    },
    {
      icon: <i class="fab fa-safari"></i>,
      color: "#08a3d7",
      h3: t("ssl-box-3-title"),
      p: t("ssl-box-3-p"),
    },
    {
      icon: <i class="fa fa-check"></i>,
      color: "#9fe400",
      h3: t("ssl-box-4-title"),
      p: t("ssl-box-4-p"),
    },
  ];
  return (
    <Box className="ssl-what">
      <h2>{t("benefit-title")}</h2>
      <p>{t("benefit-p")}</p>
      <Box className="circles">
        {circle.map((item, index) => {
          return (
            <Box
              key={index}
              className="circle"
              sx={{
                backgroundColor: item.color,
                outline: `8px solid ${item.color}`,
              }}
            >
              <p>{item.text}</p>
            </Box>
          );
        })}
      </Box>
      <hr />

      <h2>{t("ssl-box-title")}</h2>
      <p>{t("ssl-box-p")}</p>

      <Box className="boxes">
        {icons.map((item, index) => {
          return (
            <Box className="box" key={index}>
              <Box className="icon" sx={{ color: item.color }}>
                {item.icon}
              </Box>
              <Box className="data">
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SslWhat;
