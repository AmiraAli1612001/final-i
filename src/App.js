// import Header from "./components/Header";
import "../src/css/style.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Drawer from "./components/drawer";
import i18n from "i18next";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (
      window.localStorage.getItem("lang") === null &&
      window.localStorage.getItem("dir") === null
    ) {
      document.body.style.direction = "rtl";
      i18n.changeLanguage("ar");
    } else {
      document.body.style.direction = window.localStorage.getItem("dir");
      i18n.changeLanguage(window.localStorage.getItem("lang"));
    }
  });
  return (
    <div className="App">
      <Outlet />
      <Drawer />

      <Footer />
    </div>
  );
}

export default App;
