import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainLayout from "./layouts/MainLayout";

// ====================
// Public Pages
// ====================
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Memories from "./pages/Memories";
import Contact from "./pages/Contact";

// ====================
// Admin Layout
// ====================
import AdminLayout from "./admin/layouts/AdminLayout";

// ====================
// Admin Pages
// ====================
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Teachers from "./admin/pages/Teachers";
import Admissions from "./admin/pages/Admissions";
import AcademicsAdmin from "./admin/pages/Academics";
import GalleryAdmin from "./admin/pages/Gallery";
import AchievementsAdmin from "./admin/pages/Achievements";
import MemoriesAdmin from "./admin/pages/Memories";
import Notices from "./admin/pages/Notices";
import Events from "./admin/pages/Events";
import ContactAdmin from "./admin/pages/Contact";
import Settings from "./admin/pages/Settings";



function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ==================== Public Website ==================== */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ==================== Admin Login ==================== */}
        <Route path="/admin" element={<Login />} />

        {/* ==================== Admin Dashboard ==================== */}
        <Route path="/admin/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academics" element={<AcademicsAdmin />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="achievements" element={<AchievementsAdmin />} />
          <Route path="memories" element={<MemoriesAdmin />} />
          <Route path="notices" element={<Notices />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<ContactAdmin />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Redirect */}
        <Route
          path="/admin/home"
          element={<Navigate to="/admin/dashboard" replace />}
        />
      </Routes>
    </>
  );
}

export default App;