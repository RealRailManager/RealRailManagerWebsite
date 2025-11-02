import Header from "./Header";
import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Install from "./pages/install";
import Contact from "./pages/contact";
import ModAuthor from "./pages/modAuthor";

export default function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<Install />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mod-author" element={<ModAuthor />} />
      </Routes>
    </Router>
  );
}