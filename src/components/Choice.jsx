import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import robot from "../images/correct.svg";

import { useTranslation } from "react-i18next";

const Choice = () => {
  const { t } = useTranslation();

  let list = [
    { icon: robot, text: t("choice-li-1") },
    {
      icon: robot,
      text: t("choice-li-2"),
    },
    {
      icon: robot,
      text: t("choice-li-3"),
    },
    {
      icon: robot,
      text: t("choice-li-4"),
    },
    {
      icon: robot,
      text: t("choice-li-5"),
    },
    {
      icon: robot,
      text: t("choice-li-6"),
    },
    { icon: robot, text: t("choice-li-7") },
  ];
  return (
    <Box className="choice" sx={{ padding: { xs: "50px 10px" } }}>
      <Grid
        container
        className="container"
        sx={{ width: { xs: "95vw", md: "85vw" }, margin: "auto" }}
      >
        <Grid item xs={10} lg={6}>
          <h2>{t("choice-title")}</h2>
          <p>{t("choice-p")}</p>
          <ul>
            {list.map((item) => {
              return (
                <li>
                  <CardMedia component="img" image={item.icon} />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </Grid>
        <Grid
          item
          xs={11}
          lg={4}
          sx={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            margin: { xs: "50px auto", md: "0px auto" },
          }}
        >
          <div class="icon" style={{ display: { xs: "none", md: "flex" } }}>
            <svg
              maxWidth="369"
              height="455"
              viewBox="0 0 369 455"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Correct Robot S2" clip-path="url(#clip0S2)">
                <g id="RobotS2">
                  <g id="Ellipse 19" filter="url(#filter0_dS2)">
                    <ellipse
                      cx="243.5"
                      cy="443"
                      rx="37.5"
                      ry="5"
                      fill="black"
                      fill-opacity="0.01"
                    ></ellipse>
                  </g>
                  <g id="Left Hand">
                    <rect
                      id="Rectangle 15"
                      x="147.326"
                      y="213.881"
                      width="44"
                      height="11"
                      transform="rotate(-15 147.326 213.881)"
                      fill="#E3E3E3"
                    ></rect>
                    <rect
                      id="Rectangle 16"
                      x="99.7782"
                      y="160"
                      width="78.9219"
                      height="11"
                      transform="rotate(45 99.7782 160)"
                      fill="#E3E3E3"
                    ></rect>
                    <rect
                      id="Rectangle 17"
                      x="70"
                      y="161"
                      width="28"
                      height="11"
                      rx="5.5"
                      fill="#E3E3E3"
                    ></rect>
                    <g id="Joint">
                      <ellipse
                        id="Real Joint"
                        cx="152.294"
                        cy="218.294"
                        rx="9"
                        ry="9"
                        transform="rotate(180 152.294 218.294)"
                        fill="#C4C4C4"
                      ></ellipse>
                      <g id="Effect">
                        <mask
                          id="mask0"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="143"
                          y="209"
                          width="19"
                          height="19"
                        >
                          <ellipse
                            id="Ellipse 15"
                            cx="152.294"
                            cy="218.294"
                            rx="9"
                            ry="9"
                            transform="rotate(180 152.294 218.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask0)">
                          <ellipse
                            id="Ellipse 16"
                            cx="156.294"
                            cy="209.294"
                            rx="9"
                            ry="9"
                            transform="rotate(180 156.294 209.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <g id="Effect_2">
                        <mask
                          id="mask1"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="140"
                          y="206"
                          width="25"
                          height="25"
                        >
                          <ellipse
                            id="Ellipse 15_2"
                            cx="152.294"
                            cy="218.294"
                            rx="9"
                            ry="9"
                            transform="rotate(-120 152.294 218.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask1)">
                          <ellipse
                            id="Ellipse 16_2"
                            cx="162.088"
                            cy="217.258"
                            rx="9"
                            ry="9"
                            transform="rotate(-120 162.088 217.258)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <circle
                        id="Ellipse 17"
                        cx="152.294"
                        cy="218.294"
                        r="3"
                        fill="#363749"
                      ></circle>
                      <circle
                        id="Ellipse 18"
                        cx="152.294"
                        cy="218.294"
                        r="1"
                        fill="white"
                      ></circle>
                    </g>
                    <g id="Joint_2">
                      <ellipse
                        id="Real Joint_2"
                        cx="98.2941"
                        cy="166.294"
                        rx="9"
                        ry="9"
                        transform="rotate(180 98.2941 166.294)"
                        fill="#C4C4C4"
                      ></ellipse>
                      <g id="Effect_3">
                        <mask
                          id="mask2"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="89"
                          y="157"
                          width="19"
                          height="19"
                        >
                          <ellipse
                            id="Ellipse 15_3"
                            cx="98.2943"
                            cy="166.294"
                            rx="9"
                            ry="9"
                            transform="rotate(180 98.2943 166.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask2)">
                          <ellipse
                            id="Ellipse 16_3"
                            cx="102.294"
                            cy="157.294"
                            rx="9"
                            ry="9"
                            transform="rotate(180 102.294 157.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <g id="Effect_4">
                        <mask
                          id="mask3"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="86"
                          y="154"
                          width="25"
                          height="25"
                        >
                          <ellipse
                            id="Ellipse 15_4"
                            cx="98.2943"
                            cy="166.294"
                            rx="9"
                            ry="9"
                            transform="rotate(-120 98.2943 166.294)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask3)">
                          <ellipse
                            id="Ellipse 16_4"
                            cx="108.089"
                            cy="165.258"
                            rx="9"
                            ry="9"
                            transform="rotate(-120 108.089 165.258)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <circle
                        id="Ellipse 17_2"
                        cx="98.2943"
                        cy="166.294"
                        r="3"
                        fill="#363749"
                      ></circle>
                      <circle
                        id="Ellipse 18_2"
                        cx="98.2943"
                        cy="166.294"
                        r="1"
                        fill="white"
                      ></circle>
                    </g>
                  </g>
                  <g id="Right Hand">
                    <rect
                      id="Rectangle 15_2"
                      x="337.771"
                      y="225.344"
                      width="44"
                      height="11"
                      transform="rotate(-159.275 337.771 225.344)"
                      fill="#E3E3E3"
                    ></rect>
                    <path
                      id="Rectangle 16_2"
                      d="M342.537 297.044L329.817 219.154L340.673 217.381L353.394 295.271L342.537 297.044Z"
                      fill="#E3E3E3"
                    ></path>
                    <path
                      id="Rectangle 17_2"
                      d="M341.313 315.585C338.379 314.799 336.637 311.783 337.424 308.849L339.443 301.313C340.229 298.379 343.245 296.637 346.179 297.424V297.424C349.113 298.21 350.854 301.226 350.068 304.16L348.049 311.696C347.263 314.63 344.247 316.371 341.313 315.585V315.585Z"
                      fill="#E3E3E3"
                    ></path>
                    <g id="Joint_3">
                      <ellipse
                        id="Real Joint_3"
                        cx="333.881"
                        cy="218.71"
                        rx="9"
                        ry="9"
                        transform="rotate(-174.275 333.881 218.71)"
                        fill="#C4C4C4"
                      ></ellipse>
                      <g id="Effect_5">
                        <mask
                          id="mask4"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="324"
                          y="208"
                          width="20"
                          height="21"
                        >
                          <ellipse
                            id="Ellipse 15_5"
                            cx="333.882"
                            cy="218.71"
                            rx="9"
                            ry="9"
                            transform="rotate(-174.275 333.882 218.71)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask4)">
                          <ellipse
                            id="Ellipse 16_5"
                            cx="338.759"
                            cy="210.154"
                            rx="9"
                            ry="9"
                            transform="rotate(-174.275 338.759 210.154)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <g id="Effect_6">
                        <mask
                          id="mask5"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="321"
                          y="206"
                          width="25"
                          height="25"
                        >
                          <ellipse
                            id="Ellipse 15_6"
                            cx="333.881"
                            cy="218.71"
                            rx="9"
                            ry="9"
                            transform="rotate(-114.275 333.881 218.71)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask5)">
                          <ellipse
                            id="Ellipse 16_6"
                            cx="343.73"
                            cy="218.656"
                            rx="9"
                            ry="9"
                            transform="rotate(-114.275 343.73 218.656)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <circle
                        id="Ellipse 17_3"
                        cx="333.882"
                        cy="218.71"
                        r="3"
                        transform="rotate(5.72482 333.882 218.71)"
                        fill="#363749"
                      ></circle>
                      <circle
                        id="Ellipse 18_3"
                        cx="333.881"
                        cy="218.71"
                        r="1"
                        transform="rotate(5.72482 333.881 218.71)"
                        fill="white"
                      ></circle>
                    </g>
                    <g id="Joint_4">
                      <ellipse
                        id="Real Joint_4"
                        cx="347.459"
                        cy="296.459"
                        rx="9"
                        ry="9"
                        transform="rotate(-174.275 347.459 296.459)"
                        fill="#C4C4C4"
                      ></ellipse>
                      <g id="Effect_7">
                        <mask
                          id="mask6"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="337"
                          y="286"
                          width="21"
                          height="21"
                        >
                          <ellipse
                            id="Ellipse 15_7"
                            cx="347.459"
                            cy="296.459"
                            rx="9"
                            ry="9"
                            transform="rotate(-174.275 347.459 296.459)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask6)">
                          <ellipse
                            id="Ellipse 16_7"
                            cx="352.337"
                            cy="287.903"
                            rx="9"
                            ry="9"
                            transform="rotate(-174.275 352.337 287.903)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <g id="Effect_8">
                        <mask
                          id="mask7"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="335"
                          y="284"
                          width="25"
                          height="25"
                        >
                          <ellipse
                            id="Ellipse 15_8"
                            cx="347.459"
                            cy="296.459"
                            rx="9"
                            ry="9"
                            transform="rotate(-114.275 347.459 296.459)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </mask>
                        <g mask="url(#mask7)">
                          <ellipse
                            id="Ellipse 16_8"
                            cx="357.308"
                            cy="296.405"
                            rx="9"
                            ry="9"
                            transform="rotate(-114.275 357.308 296.405)"
                            fill="#D1D1D1"
                          ></ellipse>
                        </g>
                      </g>
                      <circle
                        id="Ellipse 17_4"
                        cx="347.459"
                        cy="296.459"
                        r="3"
                        transform="rotate(5.72482 347.459 296.459)"
                        fill="#363749"
                      ></circle>
                      <circle
                        id="Ellipse 18_4"
                        cx="347.459"
                        cy="296.459"
                        r="1"
                        transform="rotate(5.72482 347.459 296.459)"
                        fill="white"
                      ></circle>
                    </g>
                  </g>
                  <g id="Wheel">
                    <rect
                      id="Rectangle 2"
                      x="223"
                      y="365"
                      width="4"
                      height="25"
                      fill="#C4C4C4"
                    ></rect>
                    <rect
                      id="Rectangle 6"
                      x="223"
                      y="365"
                      width="4"
                      height="5"
                      fill="#BDBDBD"
                    ></rect>
                    <rect
                      id="Rectangle 3"
                      x="263"
                      y="365"
                      width="4"
                      height="25"
                      fill="#C4C4C4"
                    ></rect>
                    <rect
                      id="Rectangle 7"
                      x="263"
                      y="365"
                      width="4"
                      height="5"
                      fill="#BDBDBD"
                    ></rect>
                    <rect
                      id="Rectangle 4"
                      x="220"
                      y="388"
                      width="10"
                      height="19"
                      rx="5"
                      fill="#363749"
                    ></rect>
                    <rect
                      id="Rectangle 5"
                      x="259"
                      y="388"
                      width="10"
                      height="19"
                      rx="5"
                      fill="#363749"
                    ></rect>
                    <g id="Group 3">
                      <circle
                        id="Ellipse 9"
                        cx="225.635"
                        cy="359.5"
                        r="6.5"
                        fill="#DEDEDE"
                      ></circle>
                      <path
                        id="Subtract"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M232.01 360.9C230.82 362.23 229.09 363.067 227.164 363.067C223.574 363.067 220.664 360.157 220.664 356.567C220.664 356.132 220.707 355.706 220.789 355.294C219.76 356.444 219.135 357.962 219.135 359.626C219.135 363.216 222.045 366.126 225.635 366.126C228.789 366.126 231.418 363.88 232.01 360.9Z"
                        fill="#EFEFEF"
                      ></path>
                    </g>
                    <g id="Group 2">
                      <circle
                        id="Ellipse 10"
                        cx="264.5"
                        cy="359.5"
                        r="6.5"
                        fill="#DEDEDE"
                      ></circle>
                      <path
                        id="Subtract_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M262.846 363.067C266.436 363.067 269.346 360.157 269.346 356.567C269.346 356.132 269.303 355.706 269.221 355.294C270.25 356.444 270.875 357.962 270.875 359.626C270.875 363.216 267.965 366.126 264.375 366.126C261.221 366.126 258.592 363.88 258 360.9C259.19 362.23 260.92 363.067 262.846 363.067Z"
                        fill="#EFEFEF"
                      ></path>
                    </g>
                    <g id="Group 1">
                      <circle
                        id="Ellipse 8"
                        cx="245"
                        cy="349"
                        r="20"
                        fill="#CECECE"
                      ></circle>
                      <path
                        id="Vector 6"
                        d="M225 347.298C231.525 353.965 246.702 366.957 255.213 365.596C246.418 369.993 228.064 372.489 225 347.298Z"
                        fill="#D7D7D7"
                      ></path>
                    </g>
                    <rect
                      id="Rectangle 8"
                      x="258"
                      y="394"
                      width="3"
                      height="6"
                      rx="1.5"
                      fill="#363749"
                    ></rect>
                    <rect
                      id="Rectangle 9"
                      x="228"
                      y="394"
                      width="3"
                      height="6"
                      rx="1.5"
                      fill="#363749"
                    ></rect>
                    <rect
                      id="Rectangle 10"
                      x="231"
                      y="392"
                      width="6"
                      height="11"
                      rx="3"
                      fill="#363749"
                    ></rect>
                    <rect
                      id="Rectangle 12"
                      x="237"
                      y="377"
                      width="15"
                      height="48"
                      rx="7.5"
                      fill="#4A4C5F"
                    ></rect>
                    <path
                      id="Subtract_3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M242.312 377.991C241.484 379.196 241 380.656 241 382.229V414.222C241 418.364 244.358 421.722 248.5 421.722C249.261 421.722 249.996 421.609 250.688 421.398C249.337 423.367 247.069 424.659 244.5 424.659C240.358 424.659 237 421.301 237 417.159V385.166C237 381.785 239.237 378.927 242.312 377.991Z"
                      fill="#555666"
                    ></path>
                    <rect
                      id="Rectangle 11"
                      x="252"
                      y="392"
                      width="6"
                      height="11"
                      rx="3"
                      fill="#363749"
                    ></rect>
                  </g>
                  <g id="Body">
                    <path
                      id="Vector 5"
                      d="M209.646 330.581C130.342 274.445 173.559 199.596 209.646 179.993H281.822C356.225 233.456 319.691 309.641 281.822 330.581C251.526 372.995 221.081 348.254 209.646 330.581Z"
                      fill="white"
                    ></path>
                    <g id="Mask">
                      <mask
                        id="mask8"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="164"
                        y="179"
                        width="161"
                        height="175"
                      >
                        <path
                          id="Vector 6_2"
                          d="M209.646 330.581C130.342 274.445 173.559 199.596 209.646 179.993H281.822C356.225 233.456 319.691 309.641 281.822 330.581C251.526 372.995 221.081 348.254 209.646 330.581Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask8)">
                        <path
                          id="Vector 7"
                          d="M209.646 320.581C130.342 264.445 173.559 189.596 209.646 169.993H281.822C356.225 223.456 319.691 299.641 281.822 320.581C251.526 362.995 221.081 338.254 209.646 320.581Z"
                          fill="#F7F7F7"
                        ></path>
                      </g>
                    </g>
                    <g id="Inner Gap" filter="url(#filter1_i)">
                      <mask
                        id="mask9"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="164"
                        y="179"
                        width="161"
                        height="175"
                      >
                        <path
                          id="Vector 1"
                          d="M209.646 330.581C130.342 274.445 173.559 199.596 209.646 179.993H281.822C356.225 233.456 319.691 309.641 281.822 330.581C251.526 372.995 221.081 348.254 209.646 330.581Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask9)">
                        <ellipse
                          id="Ellipse 5"
                          cx="245.59"
                          cy="260.188"
                          rx="52.1266"
                          ry="97.1249"
                          fill="#F0F0F0"
                        ></ellipse>
                      </g>
                      <mask
                        id="mask10"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="193"
                        y="163"
                        width="105"
                        height="195"
                      >
                        <ellipse
                          id="Ellipse 6"
                          cx="245.59"
                          cy="260.188"
                          rx="52.1266"
                          ry="97.1249"
                          fill="#F0F0F0"
                        ></ellipse>
                      </mask>
                      <g mask="url(#mask10)">
                        <ellipse
                          id="Ellipse 7"
                          cx="245.127"
                          cy="240.125"
                          rx="52.1266"
                          ry="97.1249"
                          fill="#E2E2E2"
                        ></ellipse>
                      </g>
                    </g>
                  </g>
                  <g id="Head">
                    <g id="Ear">
                      <rect
                        id="Rectangle 1"
                        x="154.257"
                        y="16.039"
                        width="6.23738"
                        height="68.6111"
                        fill="#EFEEEC"
                      ></rect>
                      <circle
                        id="Ellipse 1"
                        cx="165.841"
                        cy="102.471"
                        r="25.8406"
                        fill="#DFDFDF"
                      ></circle>
                      <circle
                        id="Ellipse 2"
                        cx="157.376"
                        cy="9.35606"
                        r="9.35606"
                        fill="#DFDFDF"
                      ></circle>
                      <mask
                        id="mask11"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="148"
                        y="0"
                        width="19"
                        height="19"
                      >
                        <circle
                          id="Ellipse 3"
                          cx="157.376"
                          cy="9.35606"
                          r="9.35606"
                          fill="#DFDFDF"
                        ></circle>
                      </mask>
                      <g mask="url(#mask11)">
                        <circle
                          id="Ellipse 4"
                          cx="163.376"
                          cy="2.35606"
                          r="9.35606"
                          fill="#E8E8E8"
                        ></circle>
                        <circle
                          id="Ellipse 5_2"
                          cx="151.376"
                          cy="2.35606"
                          r="9.35606"
                          fill="#E8E8E8"
                        ></circle>
                      </g>
                    </g>
                    <g id="Ear_2">
                      <rect
                        id="Rectangle 1_2"
                        width="6.23738"
                        height="68.6111"
                        transform="matrix(-1 0 0 1 334.25 16.039)"
                        fill="#EFEEEC"
                      ></rect>
                      <circle
                        id="Ellipse 1_2"
                        r="25.8406"
                        transform="matrix(-1 0 0 1 322.666 102.471)"
                        fill="#DFDFDF"
                      ></circle>
                      <circle
                        id="Ellipse 2_2"
                        r="9.35606"
                        transform="matrix(-1 0 0 1 331.131 9.35606)"
                        fill="#DFDFDF"
                      ></circle>
                      <g id="Group 5360">
                        <mask
                          id="mask12"
                          mask-type="alpha"
                          maskUnits="userSpaceOnUse"
                          x="321"
                          y="0"
                          width="20"
                          height="19"
                        >
                          <circle
                            id="Ellipse 3_2"
                            r="9.35606"
                            transform="matrix(-1 0 0 1 331.131 9.35606)"
                            fill="#DFDFDF"
                          ></circle>
                        </mask>
                        <g mask="url(#mask12)">
                          <circle
                            id="Ellipse 4_2"
                            r="9.35606"
                            transform="matrix(-1 0 0 1 337.131 2.35606)"
                            fill="#E8E8E8"
                          ></circle>
                          <circle
                            id="Ellipse 5_3"
                            r="9.35606"
                            transform="matrix(-1 0 0 1 325.131 2.35606)"
                            fill="#E8E8E8"
                          ></circle>
                        </g>
                      </g>
                    </g>
                    <path
                      id="Vector 2"
                      d="M328.012 92.6696C301.726 -12.4748 173.415 6.68291 160.494 92.6696V155.489C160.494 166.182 171.484 173.013 176.979 175.092H204.156C203.087 177.231 207.275 181.329 209.502 183.112C240.244 197.368 273.213 186.23 278.559 183.112C282.367 180.89 284.202 177.32 284.351 175.092H303.954C312.864 178.3 324.597 166.479 328.012 159.944V92.6696Z"
                      fill="#EEEFF1"
                    ></path>
                    <path
                      id="Subtract_4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M160.494 143.46V155.043C160.494 165.736 171.484 172.567 176.979 174.647H204.156C203.087 176.785 207.275 180.884 209.502 182.666C240.244 196.923 273.213 185.785 278.559 182.666C282.367 180.445 284.202 176.874 284.351 174.647H303.954C312.864 177.854 324.597 166.033 328.012 159.499V147.915C324.597 154.449 312.864 166.271 303.954 163.063H284.351H204.156H176.979C171.484 160.984 160.494 154.152 160.494 143.46Z"
                      fill="#DFDFDF"
                    ></path>
                    <g id="Face">
                      <path
                        id="Vector 3"
                        d="M196.269 148.806H293.453C301.922 148.806 309.367 142.909 310.467 134.511C319.329 66.8427 278.497 38.3153 244.699 38.3153C214.932 38.3153 172.125 63.7281 179.154 133.965C180.018 142.607 187.584 148.806 196.269 148.806Z"
                        fill="#363749"
                      ></path>
                      <g id="Mouth">
                        <path
                          id="Vector 4"
                          d="M222.937 112.057C220.839 137.479 267.5 137.108 265.581 112.061C265.471 110.626 264.208 109.6 262.769 109.6L225.753 109.6C224.317 109.6 223.055 110.625 222.937 112.057Z"
                          fill="#3FBAFF"
                        ></path>
                      </g>
                      <circle
                        id="Vector 5_2"
                        cx="215.294"
                        cy="91.333"
                        r="7.57396"
                        fill="#3FBAFF"
                      ></circle>
                      <circle
                        id="LeftEyeS2"
                        cx="215.351"
                        cy="74"
                        r="9.49863"
                        fill="#363749"
                      ></circle>
                      <circle
                        id="Ellipse 4_3"
                        cx="274.104"
                        cy="91.333"
                        r="7.57396"
                        fill="#3FBAFF"
                      ></circle>
                      <circle
                        id="RightEyeS2"
                        cx="274.104"
                        cy="74"
                        r="9.49863"
                        fill="#363749"
                      ></circle>
                    </g>
                  </g>
                  <g id="Correct Logo" clip-path="url(#clip1)">
                    <path
                      id="Vector"
                      d="M244.057 287.054C261.012 287.054 274.756 273.31 274.756 256.356C274.756 239.401 261.012 225.657 244.057 225.657C227.103 225.657 213.358 239.401 213.358 256.356C213.358 273.31 227.103 287.054 244.057 287.054Z"
                      fill="url(#jsfahfuidhiuhoie3794162734)"
                    ></path>
                    <g id="Logo Container">
                      <mask
                        id="mask13"
                        mask-type="alpha"
                        maskUnits="userSpaceOnUse"
                        x="213"
                        y="225"
                        width="62"
                        height="63"
                      >
                        <path
                          id="Vector_2"
                          d="M244.057 287.054C261.012 287.054 274.756 273.31 274.756 256.356C274.756 239.401 261.012 225.657 244.057 225.657C227.103 225.657 213.358 239.401 213.358 256.356C213.358 273.31 227.103 287.054 244.057 287.054Z"
                          fill="url(#paint1_linear)"
                        ></path>
                      </mask>
                      <g mask="url(#mask13)">
                        <path
                          id="Vector_3"
                          d="M243.699 266.398C260.653 266.398 274.398 252.653 274.398 235.699C274.398 218.744 260.653 205 243.699 205C226.744 205 213 218.744 213 235.699C213 252.653 226.744 266.398 243.699 266.398Z"
                          fill="white"
                          fill-opacity="0.04"
                        ></path>
                        <path
                          id="Vector_4"
                          d="M243.699 306.398C260.653 306.398 274.398 292.653 274.398 275.699C274.398 258.744 260.653 245 243.699 245C226.744 245 213 258.744 213 275.699C213 292.653 226.744 306.398 243.699 306.398Z"
                          fill="white"
                          fill-opacity="0.04"
                        ></path>
                        <path
                          id="Vector_5"
                          d="M263.699 286.398C280.653 286.398 294.398 272.653 294.398 255.699C294.398 238.744 280.653 225 263.699 225C246.744 225 233 238.744 233 255.699C233 272.653 246.744 286.398 263.699 286.398Z"
                          fill="white"
                          fill-opacity="0.04"
                        ></path>
                        <path
                          id="Vector_6"
                          d="M223.699 286.398C240.653 286.398 254.398 272.653 254.398 255.699C254.398 238.744 240.653 225 223.699 225C206.744 225 193 238.744 193 255.699C193 272.653 206.744 286.398 223.699 286.398Z"
                          fill="white"
                          fill-opacity="0.04"
                        ></path>
                      </g>
                    </g>
                    <g id="Real Correct Logo">
                      <path
                        id="Vector_7"
                        d="M263.155 255.159C263.155 255.367 263.139 257.301 263.139 257.301C262.833 264.456 257.134 270.216 250.002 270.621C249.47 270.62 248.939 270.621 248.408 270.621C247.553 270.622 246.699 270.625 245.844 270.625C242.764 270.625 239.684 270.634 236.604 270.612C236.304 270.61 235.928 270.506 235.721 270.308C235.216 269.826 235.24 269.164 235.418 268.552C235.584 267.979 235.992 267.568 236.619 267.508C237.224 267.45 237.835 267.454 238.443 267.436C239.047 267.418 239.649 267.411 240.253 267.398C240.897 267.384 241.541 267.362 242.183 267.31C242.855 267.257 243.246 266.721 243.308 266.058C243.371 265.38 243.06 264.762 242.464 264.528C242.124 264.394 241.742 264.306 241.379 264.303C240.086 264.294 238.79 264.291 237.496 264.291C236.258 264.291 235.019 264.292 233.781 264.291C232.812 264.29 231.842 264.303 230.873 264.271C229.645 264.227 229.007 263.174 229.512 262.058C229.778 261.472 230.3 261.262 230.885 261.243C231.963 261.207 233.042 261.218 234.121 261.215C234.745 261.213 235.369 261.211 235.993 261.21C237.573 261.207 239.154 261.205 240.733 261.196C241.658 261.19 242.305 260.572 242.336 259.702C242.367 258.819 241.832 258.244 240.873 258.147C240.562 258.116 240.249 258.106 239.936 258.106C238.397 258.109 236.858 258.118 235.318 258.122C235.03 258.123 234.742 258.124 234.454 258.125C232.126 258.132 229.799 258.13 227.472 258.143C226.483 258.148 225.627 257.964 225.319 256.85V256.381C225.442 256.098 225.52 255.782 225.699 255.541C226.045 255.075 226.591 254.984 227.128 254.966C228.205 254.931 229.283 254.92 230.361 254.916C232.028 254.91 233.694 254.906 235.36 254.908C235.708 254.909 236.055 254.91 236.403 254.911C238.574 254.917 240.745 254.931 242.917 254.955C243.593 254.961 243.871 255.261 243.827 255.971C243.728 257.535 243.939 259.03 244.762 260.39C246.792 263.738 251.506 265.157 254.846 262.6C255.191 262.337 255.491 262.011 255.789 261.693C255.894 261.581 255.994 261.331 255.994 261.154C255.839 261.154 255.706 261.161 255.562 261.161C254.609 261.158 253.655 261.173 252.702 261.172C251.929 261.172 251.717 260.968 251.713 260.204C251.707 258.688 251.709 257.173 251.716 255.656C251.72 254.957 251.897 254.791 252.685 254.79C254.92 254.79 257.155 254.805 259.39 254.807C260.601 254.808 261.407 254.784 262.78 254.784C263.03 254.784 263.155 254.951 263.155 255.159Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_8"
                        d="M232.542 242.405C232.271 242.404 231.999 242.403 231.728 242.405C231.728 242.404 231.727 242.403 231.727 242.402C231.998 242.403 232.27 242.404 232.542 242.405Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_9"
                        d="M233.335 242.409C233.257 242.41 233.179 242.41 233.101 242.41V242.408C233.179 242.408 233.257 242.408 233.335 242.409Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_10"
                        d="M260.071 248.659C260.024 248.694 257.884 250.191 256.556 251.059C256.03 251.403 255.842 251.386 255.286 250.988C254.367 250.331 253.405 249.776 252.294 249.488C250.5 249.023 248.858 249.384 247.326 250.349C246.786 250.69 246.311 251.134 245.769 251.468C245.465 251.656 245.086 251.807 244.736 251.818C243.455 251.86 242.171 251.864 240.89 251.819C240.44 251.804 239.951 251.688 239.561 251.473C238.976 251.15 238.769 250.443 238.95 249.839C239.12 249.271 239.704 248.832 240.388 248.823C241.748 248.805 243.109 248.832 244.469 248.803C244.915 248.793 245.372 248.712 245.798 248.581C246.429 248.385 246.767 247.766 246.712 247.055C246.651 246.268 246.318 245.807 245.575 245.734C244.505 245.628 243.426 245.589 242.35 245.584C241.704 245.581 241.058 245.578 240.411 245.576C238.305 245.573 236.2 245.575 234.094 245.573H234.042C233.145 245.579 232.247 245.585 231.349 245.568C230.383 245.55 229.791 244.933 229.8 244C229.809 242.976 230.345 242.423 231.357 242.408C231.481 242.406 231.604 242.405 231.728 242.405C231.999 242.403 232.271 242.404 232.542 242.405C232.69 242.406 232.837 242.407 232.984 242.407C233.023 242.407 233.062 242.407 233.101 242.408V242.41C233.179 242.41 233.257 242.41 233.334 242.409C233.94 242.412 234.546 242.416 235.152 242.422C239.591 242.461 244.06 242.547 248.418 242.58C248.939 242.584 249.457 242.587 249.974 242.589H249.976C254.282 242.853 257.281 244.431 260.196 248.075C260.387 248.314 260.238 248.534 260.071 248.659Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_11"
                        d="M234.381 248.83C234.943 248.83 235.506 248.811 236.067 248.835C236.777 248.867 237.204 249.311 237.262 250.026C237.337 250.953 237.03 251.474 236.289 251.641C236.079 251.689 235.857 251.701 235.64 251.703C234.718 251.71 233.796 251.72 232.875 251.702C232.044 251.686 231.535 251.124 231.543 250.276C231.551 249.345 232.012 248.842 232.882 248.829C233.381 248.821 233.881 248.827 234.381 248.827V248.83V248.83Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_12"
                        d="M234.381 248.83C234.943 248.83 235.506 248.811 236.067 248.835C236.777 248.867 237.204 249.311 237.262 250.026C237.337 250.953 237.03 251.474 236.289 251.641C236.079 251.689 235.857 251.701 235.64 251.703C234.718 251.71 233.796 251.72 232.875 251.702C232.044 251.686 231.535 251.124 231.543 250.276C231.551 249.345 232.012 248.842 232.882 248.829C233.381 248.821 233.881 248.827 234.381 248.827V248.83V248.83Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_13"
                        d="M233.102 242.407V242.408C233.063 242.407 233.023 242.407 232.984 242.407H233.102Z"
                        fill="white"
                      ></path>
                      <path
                        id="Vector_14"
                        d="M235.152 242.422C234.546 242.416 233.94 242.412 233.334 242.409C233.911 242.405 234.487 242.391 235.061 242.415C235.092 242.416 235.122 242.419 235.152 242.422Z"
                        fill="white"
                      ></path>
                    </g>
                  </g>
                </g>
                <g id="HelloLabel">
                  <rect
                    id="Rectangle 17_3"
                    y="120"
                    width="120"
                    height="34"
                    rx="17"
                    fill="white"
                  ></rect>
                  <path
                    id="Subtract_5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.747196 132C0.261445 133.581 0 135.26 0 137C0 146.389 7.61116 154 17 154H103C112.389 154 120 146.389 120 137C120 135.26 119.739 133.581 119.253 132C117.118 138.949 110.649 144 103 144H17C9.35127 144 2.88234 138.949 0.747196 132Z"
                    fill="#F3F3F3"
                  ></path>
                  <path
                    id="Hello !"
                    d="M45.0215 144H43.1367V137.428H35.9688V144H34.0938V129.781H35.9688V135.895H43.1367V129.781H45.0215V144ZM52.4531 144.195C51.0208 144.195 49.8555 143.727 48.957 142.789C48.0586 141.845 47.6094 140.585 47.6094 139.01V138.678C47.6094 137.63 47.8079 136.695 48.2051 135.875C48.6087 135.048 49.1686 134.404 49.8848 133.941C50.6074 133.473 51.3887 133.238 52.2285 133.238C53.6022 133.238 54.6699 133.691 55.4316 134.596C56.1934 135.501 56.5742 136.796 56.5742 138.482V139.234H49.416C49.4421 140.276 49.7448 141.119 50.3242 141.764C50.9102 142.402 51.6523 142.721 52.5508 142.721C53.1888 142.721 53.7292 142.59 54.1719 142.33C54.6146 142.07 55.002 141.725 55.334 141.295L56.4375 142.154C55.5521 143.515 54.224 144.195 52.4531 144.195ZM52.2285 134.723C51.4993 134.723 50.8874 134.99 50.3926 135.523C49.8978 136.051 49.5918 136.793 49.4746 137.75H54.7676V137.613C54.7155 136.695 54.4681 135.986 54.0254 135.484C53.5827 134.977 52.9837 134.723 52.2285 134.723ZM60.6367 144H58.8301V129H60.6367V144ZM65.5 144H63.6934V129H65.5V144ZM67.9219 138.619C67.9219 137.584 68.1237 136.653 68.5273 135.826C68.9375 134.999 69.5039 134.361 70.2266 133.912C70.9557 133.463 71.7858 133.238 72.7168 133.238C74.1556 133.238 75.3177 133.736 76.2031 134.732C77.0951 135.729 77.541 137.053 77.541 138.707V138.834C77.541 139.863 77.3424 140.787 76.9453 141.607C76.5547 142.421 75.9915 143.056 75.2559 143.512C74.5267 143.967 73.6868 144.195 72.7363 144.195C71.304 144.195 70.1419 143.697 69.25 142.701C68.3646 141.705 67.9219 140.387 67.9219 138.746V138.619ZM69.7383 138.834C69.7383 140.006 70.0085 140.947 70.5488 141.656C71.0957 142.366 71.8249 142.721 72.7363 142.721C73.6543 142.721 74.3835 142.363 74.9238 141.646C75.4642 140.924 75.7344 139.915 75.7344 138.619C75.7344 137.46 75.4577 136.523 74.9043 135.807C74.3574 135.084 73.6283 134.723 72.7168 134.723C71.8249 134.723 71.1055 135.077 70.5586 135.787C70.0117 136.497 69.7383 137.512 69.7383 138.834ZM86.7891 139.986H85.1582L85.0312 129.781H86.9258L86.7891 139.986ZM84.9629 143.092C84.9629 142.799 85.0508 142.555 85.2266 142.359C85.4089 142.158 85.6758 142.057 86.0273 142.057C86.3789 142.057 86.6458 142.158 86.8281 142.359C87.0104 142.555 87.1016 142.799 87.1016 143.092C87.1016 143.385 87.0104 143.629 86.8281 143.824C86.6458 144.013 86.3789 144.107 86.0273 144.107C85.6758 144.107 85.4089 144.013 85.2266 143.824C85.0508 143.629 84.9629 143.385 84.9629 143.092Z"
                    fill="#363749"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_dS2"
                  x="199"
                  y="431"
                  width="89"
                  height="24"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
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
                <filter
                  id="filter1_i"
                  x="193.463"
                  y="163.063"
                  width="104.253"
                  height="190.937"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="jsfahfuidhiuhoie3794162734"
                  x1="254.311"
                  y1="235.91"
                  x2="238.961"
                  y2="271.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#363749"></stop>
                  <stop offset="1" stop-color="#385660"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="254.311"
                  y1="235.91"
                  x2="238.961"
                  y2="271.705"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#363749"></stop>
                  <stop offset="1" stop-color="#385660"></stop>
                </linearGradient>
                <clipPath id="clip0S2">
                  <rect width="368.85" height="455" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1">
                  <rect
                    width="61.3977"
                    height="61.3977"
                    fill="white"
                    transform="translate(213.358 225.657)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>{" "}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Choice;
