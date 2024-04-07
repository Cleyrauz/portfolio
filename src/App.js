import "./App.css";
import Home from "./components/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Resume from "./components/Resume";
import PublicSpeaking from "./components/PublicSpeaking";
import Contact from "./components/Contact";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/public-speaking" element={<PublicSpeaking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CssBaseline>
    </>
  );
}

export default App;
