import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { Close } from "@mui/icons-material";
import i18n from "../i18n";

const Drawer = (props) => {
  function toTops() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  let headerLinks = [
    { text: "Home Page", path: "/" },
    { text: "Projects", path: "/projects" },
    { text: "Web Development", path: "/web-development" },
    { text: "Apps developments", path: "/App-developments" },
    { text: "SSL Certificates", path: "/ssl-certificates" },
    { text: "Domains", path: "/domains" },
  ];
  let [menu, setMenu] = useState(false);

  return (
    <Box
      className="drawer"
      sx={{
        transition: "1s",
        height: props.drawer ? "100vh" : "0px",
        overflow: "hidden",
      }}
    >
      <Grid container className="items">
        <Grid
          item
          md={1}
          className=" lang"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <LanguageIcon />
          <Box className="menu" sx={{ display: menu ? "block" : "none" }}>
            <p
              onClick={() => {
                i18n.changeLanguage("en");
                document.body.style.direction = "ltr";
              }}
            >
              EN
            </p>
            <p
              onClick={() => {
                i18n.changeLanguage("ar");
                document.body.style.direction = "rtl";
              }}
            >
              AR
            </p>
          </Box>
        </Grid>
        <Grid
          item
          md={1}
          className=" close"
          onClick={() => {
            props.setDrawer(false);
          }}
        >
          <Close />
        </Grid>

        <Grid item className="links" lg={9}>
          {headerLinks.map((item, index) => {
            return (
              <Box key={index}>
                <Link
                  to={item.path}
                  key={index}
                  className="not-animate"
                  onClick={() => {
                    toTops();
                    props.setDrawer(false);
                  }}
                >
                  {item.text}
                </Link>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Drawer;
