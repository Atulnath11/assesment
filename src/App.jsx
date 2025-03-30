import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}

export default App;
