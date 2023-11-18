import "./App.css";
import BannerImg from "./component/BannerImg";
//json file
import slides from "./data/courasol.json";
import cards from "./data/cards.json";
import card from "./data/infocard.json";

//end json file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Appointment from "./component/Appointment";
import Case from "./component/Case";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Docter from "./pages/Docter";
import Location from "./pages/Location";
import Service from "./pages/Service";
import Nopage from "./pages/Nopage";
import InfoCards from "./component/InfoCards";
import Footer from "./component/Footer";
// import AppointmentForm from "./pages/AppointmentForm";
function App() {
  return (
    <>
      <Navbar />
      <BannerImg data={slides} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/docter" element={<Docter />} />
        <Route path="/location" element={<Location />} />
        <Route path="/service" element={<Service />} />
        <Route path="/#" element={<Nopage />} />
      </Routes>

      <Appointment />
      <Case products={cards} />
      {/* <AppointmentForm/> */}
      <InfoCards product={card}/>
      <Footer/>
    </>
  );
}

export default App;
