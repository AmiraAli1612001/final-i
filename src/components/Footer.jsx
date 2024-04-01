import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import logos from "../images/logos.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <Box className="footer">
      <svg
        className="svg"
        width="287"
        height="296"
        viewBox="0 0 287 296"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="287" height="296" fill="none"></rect>
        <g filter="url(#filter0_d)">
          <path d="M87 112L87.5 0L227.5 87.5L87 112Z" fill="#D43ED7"></path>
          <path d="M87 112L87.5 0L0 140L87 112Z" fill="#DF3EE3"></path>
          <path
            d="M140 227.5L87 112L227.5 87.5L140 227.5Z"
            fill="#922D9D"
          ></path>
          <path d="M0 140L87 112L140 227.5L0 140Z" fill="#9432AA"></path>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="286.5"
            height="295.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dx="31" dy="40"></feOffset>
            <feGaussianBlur stdDeviation="14"></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"
            ></feColorMatrix>
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            ></feBlend>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
      <Grid container className="footer-container">
        <Grid item className="item" xs={10} md={3}>
          <h5>{t("about-us")}</h5>
          <hr />
          <p>{t("footer-about-p-1")}</p>
          <p>{t("footer-about-p-2")}</p>
          <p> {t("footer-about-p-3")}</p>
          <hr />
          <span> {t("footer-about-p-4")}</span>
          <Box className="icons">
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </Box>
          <span> {t("footer-about-p-5")}</span>
          <Link to="#">0222877709</Link>
          <span> {t("footer-about-p-6")}</span>
          <Link to="#">info@correct.ws</Link>
        </Grid>
        <Grid item className="item" xs={10} md={3}>
          <h5>{t("sitemap")}</h5>
          <hr />
          <Link to="/terms-conditions" onClick={toTops}>
            {t("terms-conditions")}
          </Link>
          <Link to="/privacy-policy" onClick={toTops}>
            {t("privacy-policy")}
          </Link>
          <Link to="/Refund-Policy" onClick={toTops}>
            {t("refund-policy")}
          </Link>
          <Link to="/cancellation" onClick={toTops}>
            {t("cancel")}
          </Link>
          <Link to="/about" onClick={toTops}>
            {t("about-us")}
          </Link>
          <Link to="/projects" onClick={toTops}>
            {t("projects")}
          </Link>
          <Link to="/contact" onClick={toTops}>
            {t("contact-us")}
          </Link>
          <Link to="/web-development" onClick={toTops}>
            {t("web")}
          </Link>
          <Link to="/App-developments" onClick={toTops}>
            {t("app")}
          </Link>
          <Link to="/domains" onClick={toTops}>
            {t("register-domain")}
          </Link>
          <Link to="/transfer" onClick={toTops}>
            {t("transfer-domain")}
          </Link>
        </Grid>
        <Grid item className="item" xs={10} md={3}>
          <h5>{t("important-links")}</h5>
          <hr />
          <Link to="/web-development" onClick={toTops}>
            {t("websites")}
          </Link>
          <Link to="/App-developments" onClick={toTops}>
            {t("mobile-apps")}
          </Link>
          <Link to="/ssl-certificates" onClick={toTops}>
            {t("ssl-certificates")}
          </Link>
          <Link to="/domains" onClick={toTops}>
            {t("domain")}
          </Link>
        </Grid>
      </Grid>
      <Box className="logos">
        <p style={{ textAlign: "center" }}>{t("payment")}</p>
        <CardMedia component="img" image={logos} />
        <p style={{ textAlign: "center" }}>
          {t("copy-right")}
          <Link>{t("copy-right-2")}</Link>
          {t("copy-right-3")}
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
