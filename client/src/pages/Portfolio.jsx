/* Feature: Filterable Gallery Page */
import { useState } from 'react';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import GalleryGrid from '../components/portfolio/GalleryGrid';
import SectionTitle from '../components/common/SectionTitle';

const categories = ["All", "Pre-Wedding", "Wedding", "Candid", "Traditional"];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  // TODO: BACKEND CONNECT - Data from /api/portfolio
  const portfolioItems = [
    { id: 1, cat: "Pre-Wedding", src: "https://i.pinimg.com/474x/d8/0b/92/d80b921a7bbfa92adf225e95228f9f56.jpg" },
    { id: 2, cat: "Wedding", src: "https://www.tusktravel.com/blog/wp-content/uploads/2021/11/destination-wedding-hotels-udaipur.jpg" },
    { id: 3, cat: "Candid", src: "https://img.freepik.com/premium-photo/candid-indian-family-photos-authentic-moments_1199394-213586.jpg" },
    { id: 4, cat: "Traditional", src: "https://images.stockcake.com/public/f/a/7/fa76812e-16a2-4a87-8ead-b78b726c9636_large/traditional-indian-wedding-stockcake.jpg" },
    { id: 5, cat: "Wedding", src: "https://wallpapercave.com/wp/wp7295476.jpg" },
    { id: 6, cat: "Candid", src: "https://i.pinimg.com/originals/87/e0/9e/87e09ecd72940cbc85a8496622d8d136.jpg" },
  ];

  const filteredItems = activeTab === "All" ? portfolioItems : portfolioItems.filter(item => item.cat === activeTab);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-lux-dark">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Our Work" title={<>Our <span className="italic text-lux-gold">Portfolio</span></>} />
        <CategoryFilter categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />
        <GalleryGrid items={filteredItems} />
      </div>
    </div>
  );
};
export default Portfolio;