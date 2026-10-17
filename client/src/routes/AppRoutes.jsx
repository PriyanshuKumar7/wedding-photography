/* All Routes Configuration */
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Packages from '../pages/Packages';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="packages" element={<Packages />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* TODO: BACKEND CONNECT - Admin Routes (Auth Protected) */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<div className="text-white p-10">Admin Dashboard (Coming Soon)</div>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;