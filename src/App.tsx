
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import SecondaryFooter from "./components/SecondaryFooter";
import { Toaster } from "./components/ui/toaster";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <Router>
      <Navigation />
      <AppRoutes />
      <SecondaryFooter />
      <Footer />
      <Toaster />
      <CookieBanner />
    </Router>
  );
}

export default App;
