import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/navbar";
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Hero"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact";
import Services from "./Components/services/Services";
import OurServices from "./pages/OurServices"
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Blog/>} />
        </Routes>
      </main>
      <OurServices/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
