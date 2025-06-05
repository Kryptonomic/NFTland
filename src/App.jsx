import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Marketplace } from "./pages/Marketplace";
import { Profile } from "./pages/Profile";
import { Connect } from "./pages/Connect";
import { Game } from "./pages/Game";
import { Future } from "./pages/Future";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/game" element={<Game />} />
        <Route path="/future" element={<Future />} />
      </Routes>
    </Router>
  );
}

export default App;
