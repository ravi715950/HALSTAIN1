import Navb from "./components/body/nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home page/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/body/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<AboutUs />} />
          <Route path="/brands" element={<AboutUs />} />
          <Route path="/contactUs" element={<AboutUs />} />
          <Route path="/services" element={<AboutUs />} />
          <Route path="/blog" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
