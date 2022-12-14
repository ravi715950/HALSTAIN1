import Navbar from "./components/body/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home page/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/body/footer/Footer";
import Services from "./components/services/Services";
import ContactUS from "./components/contactUs/ContactUS";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUS />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
