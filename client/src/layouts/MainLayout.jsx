/* Main Website Layout - Navbar, Footer, WhatsApp */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import WhatsAppBtn from '../components/booking/WhatsAppBtn';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow"><Outlet /></main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
};
export default MainLayout;