import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Futures1 from "./pages/Futures1";
import Futures3 from "./pages/Futures3";
import Futures2 from "./pages/Futures2";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/futures1" element={<Futures1 />} />
        <Route exact path="/futures2" element={<Futures2 />} />
        <Route exact path="/futures3" element={<Futures3 />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
