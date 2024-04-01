import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <Box className="privacy">
      <title>privacy policy</title>
      <Header />
      <Box className="content" sx={{ padding: { xs: "30px", md: "100px" } }}>
        <h1>{t("privacy-title")}</h1>
        <p>{t("privacy-p-1")}</p>
        <h2>{t("privacy-p-2")}</h2>
        <ul>
          <li>
            <p>{t("privacy-p-3")}</p>
          </li>
          <li>
            <p>{t("privacy-p-4")}</p>
          </li>
          <li>
            <p>{t("privacy-p-5")}</p>
          </li>
        </ul>
        <h2>{t("privacy-p-6")}</h2>
        <p>{t("privacy-p-7")}</p>
        <p>{t("privacy-p-8")}</p>
        <p>{t("privacy-p-9")}</p>
        <p>{t("privacy-p-10")}</p>
        <p>{t("privacy-p-11")}</p>
        <p>{t("privacy-p-12")}</p>
        <p>{t("privacy-p-13")}</p>
        <p>{t("privacy-p-14")}</p>
        <h2>{t("privacy-p-15")}</h2>
        <p>{t("privacy-p-16")}</p>
        <h2>{t("privacy-p-17")}</h2>
        <p>{t("privacy-p-18")}</p>
        <ul>
          <li>
            <p>{t("privacy-p-19")}</p>
            <p>{t("privacy-p-20")}</p>
          </li>
          <li>
            <p>{t("privacy-p-21")}</p>
          </li>
          <li>
            <p>{t("privacy-p-22")}</p>
          </li>
          <li>
            <p>{t("privacy-p-23")}</p>
          </li>
          <li>
            <p>{t("privacy-p-24")}</p>
          </li>
          <li>
            <p>{t("privacy-p-25")}</p>
          </li>
        </ul>
        <h2> {t("privacy-p-26")}</h2>
        <p>{t("privacy-p-27")}</p>
        <p>{t("privacy-p-28")}</p>
        <p>{t("privacy-p-29")}</p>
        <p>{t("privacy-p-30")}</p>
        <h2> {t("privacy-p-d")}</h2>
        <p>{t("privacy-p-31")}</p>

        <ul>
          <li>
            {" "}
            <p> {t("privacy-p-32")}</p>
          </li>
          <li>
            <p>{t("privacy-p-33")}</p>
          </li>
          <li>
            <p>{t("privacy-p-34")}</p>
          </li>
          <li>
            <p>{t("privacy-p-35")}</p>
          </li>
          {/* <li>
              <p>
                Once the retention period expires, the personal data will be
                deleted. Therefore, the right to access, right to erase, right to
                rectification and right to data portability cannot be enforced after
                the retention period has expired.
              </p>
            </li> */}
        </ul>
        <h2>{t("privacy-p-36")}</h2>
        <p>{t("privacy-p-37")}</p>
        <p>{t("privacy-p-38")}</p>
        <h2>{t("privacy-p-39")}</h2>
        <p>{t("privacy-p-40")}</p>
        <p>{t("privacy-p-41")}</p>

        <ul>
          <li>
            <p>
              <b>{t("privacy-p-42-b")}</b>
              <span>{t("privacy-p-42")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-43-b")}</b>
              <span> {t("privacy-p-43")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-44-b")}</b>
              <span> {t("privacy-p-44")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-45-b")}</b>
              <span> {t("privacy-p-45")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-46-b")}</b>
              <span> {t("privacy-p-46")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-47-b")}</b>
              <span> {t("privacy-p-47")}</span>
            </p>
          </li>
          <li>
            <p>
              <b>{t("privacy-p-48-b")}</b>
              <span>{t("privacy-p-48")}</span>
            </p>
          </li>
        </ul>
        <h2>{t("privacy-p-50")}</h2>
        <p>{t("privacy-p-51")}</p>
        <p>{t("privacy-p-52")}</p>
        <h2>{t("privacy-p-53")}</h2>
        <p>{t("privacy-p-54")}</p>
        <h2>{t("privacy-p-55")}</h2>
        <p>{t("privacy-p-56")}</p>
        <p>{t("privacy-p-57")}</p>
        <h3>{t("privacy-p-58")}</h3>
        <p>{t("privacy-p-59")}</p>
        <h3>{t("privacy-p-60")}</h3>
        <p>{t("privacy-p-61")}</p>
        <h3>{t("privacy-p-62")}</h3>
        <p>{t("privacy-p-63")}</p>
        <h3>{t("privacy-p-64")}</h3>

        <p>{t("privacy-p-65")}</p>
        <p>{t("privacy-p-66")}</p>
        <h3>{t("privacy-p-67")}</h3>
        <p>{t("privacy-p-68")}</p>
        <p>{t("privacy-p-69")}</p>

        <h2>{t("privacy-p-70")}</h2>
        <p>{t("privacy-p-71")}</p>
        <p>{t("privacy-p-72")}</p>
        <p>{t("privacy-p-73")}</p>
        <h3>{t("privacy-p-74")}</h3>
        <p>
          {t("privacy-p-75")}
          <b> {t("privacy-p-76")} </b> {t("privacy-p-78")}
        </p>
        <h3>{t("privacy-p-79")}</h3>
        <p>{t("privacy-p-80")}</p>
        <h3>{t("privacy-p-81")}</h3>
        <p>{t("privacy-p-82")}</p>
        <p>{t("privacy-p-83")}</p>
        <h3>{t("privacy-p-84")}</h3>
        <p>{t("privacy-p-85")}</p>
        <p>{t("privacy-p-86")}</p>
        <p>{t("privacy-p-87")}</p>
        <h3>{t("privacy-p-88")}</h3>
        <p>{t("privacy-p-89")}</p>
        <p>{t("privacy-p-90")}</p>
        <h3>{t("privacy-p-91")}</h3>
        <p>{t("privacy-p-92")}</p>
        <p>{t("privacy-p-93")}</p>
        <h3>{t("privacy-p-94")}</h3>
        <p>{t("privacy-p-95")}</p>
        <h3>{t("privacy-p-96")}</h3>
        <p>{t("privacy-p-97")}</p>
        <p>{t("privacy-p-98")}</p>
        <p>{t("privacy-p-99")}</p>
        <p>{t("privacy-p-100")}</p>
        <p>{t("privacy-p-101")}</p>

        <h3>{t("privacy-p-102")}</h3>
        <p>{t("privacy-p-103")}</p>
        <ul>
          <li>
            <p>{t("privacy-p-104")}</p>
          </li>
          <li>
            <p>{t("privacy-p-105")}</p>
            <ul>
              <li>
                <p>{t("privacy-p-106")}</p>
              </li>
              <li>
                <p>{t("privacy-p-107")}</p>
              </li>
            </ul>
          </li>
        </ul>
        <p>{t("privacy-p-108")}</p>
        <p>{t("privacy-p-109")}</p>
        <h4> {t("privacy-p-110")}</h4>
        <p>{t("privacy-p-111")}</p>
        <p>{t("privacy-p-112")}</p>
        <h4> {t("privacy-p-113")}</h4>
        <p>{t("privacy-p-114")}</p>
        <p>{t("privacy-p-115")}</p>
        <ul>
          <li>
            <p>{t("privacy-p-116")}</p>
            <p>{t("privacy-p-117")}</p>
          </li>
          <li>
            <p>{t("privacy-p-118")}</p>
          </li>
        </ul>
        <p>{t("privacy-p-119")}</p>
        <p>{t("privacy-p-120")}</p>
        <p>{t("privacy-p-121")}</p>
        <h4> {t("privacy-p-122")}</h4>
        <p>{t("privacy-p-123")}</p>
        <p>{t("privacy-p-124")}</p>
        <p> {t("privacy-p-125")}</p>
        <p>{t("privacy-p-126")}</p>
        <p>{t("privacy-p-127")}</p>
        <h2>{t("privacy-p-128")}</h2>
        <p>{t("privacy-p-129")}</p>
        <p>{t("privacy-p-130")}</p>
        <p>{t("privacy-p-131")}</p>
        <h3> {t("privacy-p-132")}</h3>
        <p>{t("privacy-p-133")}</p>
        <ul>
          <li>
            <p> {t("privacy-p-134")}</p>
          </li>
          <li>
            <p> {t("privacy-p-135")}</p>
          </li>
          <li>
            <p>{t("privacy-p-136")}</p>
          </li>
          <li>
            <p>{t("privacy-p-137")}</p>
          </li>
          <li>
            <p>{t("privacy-p-138")}</p>
          </li>
          <li>
            <p>{t("privacy-p-139")}</p>
          </li>
          <li>
            <p> {t("privacy-p-140")}</p>
          </li>
          <li>
            <p>{t("privacy-p-141")}</p>
          </li>
          <li>
            <p>{t("privacy-p-142")}</p>
          </li>
          <li>
            <p> {t("privacy-p-143")}</p>
          </li>
        </ul>
        <p>{t("privacy-p-144")}</p>

        <h3> {t("privacy-p-145")}</h3>

        <p>
          {t("privacy-p-146")}

          <b>{t("privacy-p-147")}</b>
          {t("privacy-p-148")}
        </p>
        <h3> {t("privacy-p-149")}</h3>
        <p>
          {t("privacy-p-150")}
          <b>{t("privacy-p-151")}</b> {t("privacy-p-152")}
          <b> {t("privacy-p-153")}</b> {t("privacy-p-154")}
        </p>
        <h3>{t("privacy-p-155")}</h3>
        <p>{t("privacy-p-156")}</p>
        <p> {t("privacy-p-157")}</p>
        <ul>
          <li>
            <p>{t("privacy-p-158")}</p>
          </li>
          <li>
            <p>{t("privacy-p-159")}</p>
          </li>
          <li>
            <p>{t("privacy-p-160")}</p>
          </li>
          <li>
            <p>{t("privacy-p-161")}</p>
          </li>
          <li>
            <p>{t("privacy-p-162")}</p>
          </li>
          <li>
            <p>{t("privacy-p-163")}</p>
          </li>
          <li>
            <p>{t("privacy-p-164")}</p>
          </li>
          <li>
            <p> {t("privacy-p-165")}</p>
          </li>
          <li>
            <p>{t("privacy-p-166")}</p>
          </li>
          <li>
            <p>{t("privacy-p-167")}</p>
          </li>
          <li>
            <p>{t("privacy-p-168")}</p>
          </li>
          <li>
            <p>{t("privacy-p-169")}</p>
          </li>
        </ul>
        <p>{t("privacy-p-170")}</p>
        <h3> {t("privacy-p-171")}</h3>
        <p>{t("privacy-p-172")}</p>
        <h3> {t("privacy-p-173")}</h3>
        <p> {t("privacy-p-174")}</p>
        <p>{t("privacy-p-175")}</p>
        <p>{t("privacy-p-176")}</p>
        <p>{t("privacy-p-177")}</p>
        <p>{t("privacy-p-178")}</p>

        <p>{t("privacy-p-179")}</p>
        <h3>{t("privacy-p-180")}</h3>
        <p>{t("privacy-p-181")}</p>
        <ul>
          <li>
            <p>{t("privacy-p-182")}</p>
          </li>
          <li>
            <p>{t("privacy-p-183")}</p>
          </li>
          <li>
            <p> {t("privacy-p-184")}</p>
          </li>
          <li>
            <p>{t("privacy-p-185")}</p>
          </li>
          <li>
            <p>{t("privacy-p-186")}</p>
          </li>
          <li>
            <p>{t("privacy-p-187")}</p>
          </li>
        </ul>
        <h3> {t("privacy-p-188")}</h3>
        <b className="b"> {t("privacy-p-189")}</b>
        <p>{t("privacy-p-190")}</p>
        <h3>
          <b> {t("privacy-p-191")}</b>
        </h3>
        <p>{t("privacy-p-192")}</p>
        <h3>
          <b> {t("privacy-p-193")}</b>
        </h3>
        <p>{t("privacy-p-194")}</p>
        <h3>
          <b> {t("privacy-p-195")}</b>
        </h3>
        <p>{t("privacy-p-196")}</p>
        <h3>
          <b> {t("privacy-p-197")}</b>
        </h3>
        <p>{t("privacy-p-198")}</p>
        <h3>
          <b> {t("privacy-p-199")}</b>
        </h3>
        <p>{t("privacy-p-200")}</p>
        <h3>
          <b> {t("privacy-p-201")}</b>
        </h3>
        <p>{t("privacy-p-202")}</p>
        <h3>
          <b> {t("privacy-p-203")}</b>
        </h3>
        <p>{t("privacy-p-204")}</p>
        <h3>
          <b>{t("privacy-p-205")}</b>
        </h3>
        <p>{t("privacy-p-206")}</p>
        <h3>{t("privacy-p-207")}</h3>
        <p>{t("privacy-p-208")}</p>
        <h3> {t("privacy-p-209")}</h3>
        <p>{t("privacy-p-210")}</p>
        <h2> {t("privacy-p-211")}</h2>
        <p>
          {t("privacy-p-212")}
          <Link to="/contact"> {t("privacy-p-213")}</Link>{" "}
          {t("privacy-p-214")}
        </p>
        <hr />
        <h3> {t("privacy-p-215")}</h3>
        <p>{t("privacy-p-216")}</p>
        <hr />
        <p className="light"> {t("privacy-p-217")}</p>
      </Box>
    </Box>
  );
};

export default Privacy;
