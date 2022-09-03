import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import DateCom from "../date/index.jsx";
import About from "../about/index.jsx";
import Layout from "../layout/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="me" element={<DateCom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}