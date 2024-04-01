import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <Box className="terms">
      <title>terms and conditions</title>
      <Header />
      <Box className="content" sx={{ padding: { xs: "30px", md: "100px" } }}>
        <h1>{t("terms-title")}</h1>
        <p>{t("terms-p")}</p>
        <p>{t("terms-p-1")}</p>
        <p>{t("terms-p-2")}</p>
        <p>{t("terms-p-3")}</p>
        <p>{t("terms-p-4")}</p>
        <p>{t("terms-p-5")}</p>
        <h2>{t("terms-p-6")}</h2>
        <p>{t("terms-p-7")}</p>
        <ul>
          <li>
            <p>{t("terms-p-8")}</p>
          </li>
          <li>
            <p>{t("terms-p-9")}</p>
          </li>
          <li>
            <p>{t("terms-p-10")}</p>
          </li>
        </ul>
        <p>{t("terms-p-11")}</p>

        <h2> {t("terms-p-12")}</h2>
        <p>
          {t("terms-p-14")}
          <a href="/en/privacy"> {t("terms-p-13")}</a>.
        </p>
        <p>{t("terms-p-15")}</p>

        <h2>{t("terms-p-16")}</h2>

        <ul>
          <li>
            <p>{t("terms-p-17")}</p>
          </li>
          <li>
            <p>{t("terms-p-18")}</p>
          </li>
          <li>
            <p>{t("terms-p-19")}</p>
          </li>
          <li>
            <p>{t("terms-p-20")}</p>
          </li>
        </ul>
        <h2>{t("terms-p-21")}</h2>
        <p>{t("terms-p-22")}</p>
        <p>{t("terms-p-23")}</p>

        <h2>{t("terms-p-24")}</h2>
        <p>{t("terms-p-25")}</p>
        <h2> {t("terms-p-26")}</h2>
        <p>{t("terms-p-27")}</p>
        <h2> {t("terms-p-28")}</h2>
        <p>
          {t("terms-p-29")}
          <Link to="/privacy"> {t("terms-p-30")}</Link> {t("terms-p-31")}
        </p>
        <h2>{t("terms-p-32")}</h2>
        <ol>
          <li>{t("terms-p-33")}</li>
          <li>{t("terms-p-34")}</li>
          <li>{t("terms-p-35")}</li>
          <li>{t("terms-p-36")}</li>
          <li>{t("terms-p-37")}</li>
          <li>{t("terms-p-38")}</li>
          <li>{t("terms-p-39")}</li>
          <li>{t("terms-p-40")}</li>
          <li>{t("terms-p-41")}</li>
          <li>{t("terms-p-42")}</li>
          <li>{t("terms-p-43")}</li>
          <li>{t("terms-p-44")}</li>
          <li>{t("terms-p-45")}</li>
          <li>{t("terms-p-46")}</li>
          <li>{t("terms-p-47")}</li>
          <li>{t("terms-p-48")}</li>
          <li>{t("terms-p-49")}</li>
          <li>{t("terms-p-50")}</li>
          <li>{t("terms-p-51")}</li>
          <li>{t("terms-p-52")}</li>
          <li>{t("terms-p-53")}</li>
        </ol>

        <h2> {t("terms-p-54")}</h2>
        <p>
          {t("terms-p-55")}
          <Link to="/contact"> {t("terms-p-56")}</Link> {t("terms-p-57")}
        </p>
        <hr />
        <p class="light"> {t("terms-p-58")}</p>
      </Box>
    </Box>
  );
};

export default Terms;
