import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Memories from "./pages/Memories";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route
          path="/achievements"
          element={<Achievements />}
        />

        <Route
          path="/memories"
          element={<Memories />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>

    </Routes>
  );
}

export default App;