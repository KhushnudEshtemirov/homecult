import { Routes, Route } from "react-router-dom";

import TopMenu from "./components/top-menu/top-menu";
import Homepage from "./pages/homepage/homepage";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
