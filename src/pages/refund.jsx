import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Refund = () => {
  const { t } = useTranslation();

  return (
    <Box className="refund">
      <title>refund policy</title>
      <Header />
      <Box className="content" sx={{ padding: { xs: "30px", md: "100px" } }}>
        <h1>{t("refund-policy-title")}</h1>
        <p>{t("refund-p-1")}</p>
        <p> {t("refund-p-2")}</p>
        <h2> {t("refund-p-3")}</h2>
        <p>{t("refund-p-4")}</p>
        <h2> {t("refund-p-5")}</h2>
        <p>
          {t("refund-p-6-1")}
          <Link to="mailto:refund@Correct.io"> {t("refund-p-6-2")}</Link>{" "}
          {t("refund-p-6-3")}
        </p>
        <ol>
          <li>
            <p> {t("refund-p-7")}</p>
          </li>
          <li>
            <p> {t("refund-p-8")}</p>
          </li>
        </ol>
        <p>{t("refund-p-9")}</p>
        <h3>{t("refund-p-10")}</h3>
        <p>
          {t("refund-p-11-1")}
          <a href="/en/terms"> {t("refund-p-11-2")}</a> {t("refund-p-11-3")}
        </p>
        <h3>{t("refund-p-next")}</h3>
        <p>{t("refund-p-12")}</p>
        <p>{t("refund-p-13")}</p>
        <h3>{t("refund-p-14")}</h3>
        <p>{t("refund-p-15")}</p>

        <h3>{t("refund-p-16")}</h3>
        <p>{t("refund-p-17")}</p>

        <hr />
        <p className="light">{t("refund-p-18")}</p>
      </Box>
    </Box>
  );
};

export default Refund;
