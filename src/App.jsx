import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import FinalMessage from "./pages/FinalMessage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/final-message" element={<FinalMessage />} />
    </Routes>
  );
}

export default App;
