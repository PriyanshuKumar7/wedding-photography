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
    { id: 1, cat: "Pre-Wedding", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800" },
    { id: 2, cat: "Wedding", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800" },
    { id: 3, cat: "Candid", src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800" },
    { id: 4, cat: "Traditional", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800" },
    { id: 5, cat: "Wedding", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800" },
    { id: 6, cat: "Candid", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800" },
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