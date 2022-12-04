import { Routes, Route } from "react-router-dom";

import TopMenu from "./components/top-menu/top-menu";
import Homepage from "./pages/homepage/homepage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
