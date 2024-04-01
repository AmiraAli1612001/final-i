import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Projects from "./pages/projects.jsx"
import Home from "./pages/Home";
import Web from "./pages/web.jsx";
import Apps from "./pages/App.jsx";
import Domains from "./pages/domains.jsx";
import Ssl from "./pages/ssl.jsx";
import Terms from "./pages/terms.jsx";
import Refund from "./pages/refund.jsx";
import About from "./pages/about.jsx";

import Cancel from "./pages/cancel.jsx"
import Privacy from "./pages/privacy.jsx";
import Contact from "./pages/contact.jsx";
import Transfer from "./pages/transfer.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route index element={<Home/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="web-development" element={<Web/>}/>
    <Route path="App-developments" element={<Apps/>}/>
    <Route path="domains" element={<Domains/>}/>
    <Route path="ssl-certificates" element={<Ssl/>}/>
    <Route path="terms-conditions" element={<Terms/>}/>
    <Route path="Refund-Policy" element={<Refund/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="cancellation" element={<Cancel/>}/>
    <Route path="privacy-policy" element={<Privacy/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="transfer" element={<Transfer/>}/>















    
  </Route>)
);
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
