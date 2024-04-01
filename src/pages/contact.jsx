import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Top from "../components/top";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  let data = {
    h1: t("contact-us"),
    p: t("contact-p-1"),
    p2: t("contact-p-2"),
  };

  return (
    <Box className="contact">
      <title>contact us</title>
      <Header />
      <Top data={data} />

      <Box className="form-layer">
        <Box
          className="form"
          sx={{
            width: { xs: "90vw", md: "70vw" },
            zIndex: "2",
            position: "relative",
          }}
        >
          <Grid container className="pa" sx={{ width: "100%" }}>
            <Grid item xs={12} md={8.5}>
              <form>
                <h2>{t("message")}</h2>
                <p>{t("form-contact-p")}</p>
                <Grid container className="form-container">
                  <Grid item xs={11} md={5}>
                    <label>{t("full-name")}</label>
                    <input
                      type="text"
                      //  placeholder={t("place-name")}
                    />
                  </Grid>
                  <Grid item xs={11} md={5}>
                    <label>{t("email-addreess")}</label>
                    <input
                      type="email"
                      // placeholder={t("place-email")}
                    />
                  </Grid>
                  <Grid item xs={11} md={5}>
                    <label>{t("phone")}</label>
                    <input
                      type="text"
                      // placeholder={t("place-phone")}
                    />
                  </Grid>
                  <Grid item xs={11} md={5}>
                    <label>{t("subject")}</label>
                    <input
                      type="text"
                      //  placeholder={t("place-subject")}
                    />
                  </Grid>
                  <Grid item xs={10.5}>
                    <label>{t("message-body")}</label>
                    <textarea
                      // placeholder={t("place-message")}
                      style={{ width: "100%" }}
                    ></textarea>
                  </Grid>
                  <Grid item xs={11}>
                    <p className="light">
                      <span> {t("end-p-1")}</span>

                      <Link to="/privacy-policy">
                        <span>{t("privacy")}</span>
                      </Link>
                      <span> {t("end-p-3")}</span>

                      {/* <Link to="/en/privacy">{t("privacy")}</Link> {t("page")}. */}
                    </p>
                    <input type="submit" value={t("send")} />
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={3.5} className="back" sx={{ zIndex: "-1" }}>
              <h2>{t("contact-information")}</h2>

              <Box className="itemscon">
                <Box className="peritem">
                  <Box className="icon">
                    <i className="fa fa-map-marker-alt"></i>
                  </Box>
                  <Box className="text">{t("street")}</Box>
                </Box>
                <Box className="peritem">
                  <Box className="icon">
                    <i className="fa fa-envelope"></i>
                  </Box>
                  <Box className="text">
                    <Link to="mailto:info@correct.ws">info@correct.ws</Link>
                  </Box>
                </Box>
                <Box className="peritem">
                  <Box className="icon">
                    <i className="fa fa-phone"></i>
                  </Box>
                  <Box className="text">
                    <Link dir="ltr" to="tel:+44 20 4524 2360">
                      +44 20 4524 2360
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box className="social">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-whatsapp"></i>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
