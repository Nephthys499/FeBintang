import { Routes, Route } from "react-router-dom";

// import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import KuisPage from "./pages/KuisPage";
import MatematikaPage from "./pages/MatematikaPage";
import IpaPage from "./pages/IpaPage";
import IpsPage from "./pages/IpsPage";
import PknPage from "./pages/PknPage";
import BahasaPage from "./pages/BahasaPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Kelas" Component={KelasPage} />
        <Route path="/Testimonial" Component={TestimonialPage} />
        <Route path="/Faq" Component={FaqPage} />
        <Route path="/Syaratketen" Component={SyaratKetenPage} />
        <Route path="/kuis/:quizId" Component={KuisPage} />
        <Route path="/Matematika" Component={MatematikaPage} />
        <Route path="/Ipa" Component={IpaPage} />
        <Route path="/Ips" Component={IpsPage} />
        <Route path="/Pkn" Component={PknPage} />
        <Route path="/Bahasa" Component={BahasaPage} />
      </Routes>
    </div>
  );
}

export default App;
