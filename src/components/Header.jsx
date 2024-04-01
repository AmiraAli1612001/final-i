import { Box, AppBar, Toolbar, Grid, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../images/logo-1.png";
import logo2 from "../images/logo-2.png";

import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./drawer";
import i18n from "../i18n";
import { t } from "i18next";
const Header = () => {
  let location = useLocation()
  let navigate = useNavigate();
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let headerLinks = [
    { text: t("nav-projects"), path: "/projects", hover: t("nav-projects") },
    {
      text: t("web"),
      path: "/web-development",
      hover: t("web"),
    },
    {
      text: t("app"),
      path: "/App-developments",
      hover: t("app"),
    },
    {
      text: t("ssl"),
      path: "/ssl-certificates",
      hover: t("ssl"),
    },
    { text: t("domain"), path: "/domains", hover: t("domain") },
  ];
  let [menu, setMenu] = useState(false);
  let [drawer, setDrawer] = useState(false);

  return (
    <Box>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <AppBar>
        <Toolbar>
          <Grid container className="items">
            <Grid
              item
              className="item-one"
              md={2}
              onClick={() => {
                navigate("/");
              }}
            >
              <CardMedia
                component="img"
                image={
                  location.pathname === "/privacy-policy" ||
                  location.pathname === "/Refund-Policy" ||
                  location.pathname === "/terms-conditions"||
                  location.pathname === "/about"||
                  location.pathname === "/cancellation"
                    ? logo2
                    : logo1
                }
                sx={{ width: "150px" }}
              />
            </Grid>
            <Grid item className="links" lg={9}>
              {headerLinks.map((item, index) => {
                return (
                  <Box
                    className="relative-link"
                    key={index}
                    sx={{ display: { xs: "none", lg: "flex" } }}
                  >
                    <Link
                      to={item.path}
                      key={index}
                      className="not-animate"
                      onClick={toTops}
                      data-hover={item.hover}
                    >
                      {item.text}
                    </Link>
                  </Box>
                );
              })}
            </Grid>
            <Grid
              item
              md={1}
              className="item-three"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <LanguageIcon />
              <Box className="menu" sx={{ display: menu ? "block" : "none" }}>
                <p
                  onClick={() => {
                    i18n.changeLanguage("en");

                    window.localStorage.setItem("lang", "en");
                    window.localStorage.setItem("dir", "ltr");
                    document.body.style.direction =
                      window.localStorage.getItem("dir");
                  }}
                >
                  EN
                </p>
                <p
                  onClick={() => {
                    i18n.changeLanguage("ar");
                    window.localStorage.setItem("lang", "ar");
                    window.localStorage.setItem("dir", "rtl");
                    document.body.style.direction =
                      window.localStorage.getItem("dir");
                  }}
                >
                  AR
                </p>
              </Box>
            </Grid>
            <Grid
              item
              md={1}
              sx={{ display: { xs: "block", lg: "none" }, cursor: "pointer" }}
              onClick={() => {
                setDrawer(!drawer);
              }}
            >
              <MenuIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
