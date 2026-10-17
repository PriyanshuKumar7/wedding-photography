/* Feature: Tabs for filtering images */
const CategoryFilter = ({ categories, activeTab, setActiveTab }) => (
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setActiveTab(cat)}
        className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase transition-all border ${activeTab === cat ? 'border-lux-gold text-lux-gold' : 'border-transparent text-lux-gray hover:text-lux-cream'}`}
      >
        {cat}
      </button>
    ))}
  </div>
);
export default CategoryFilter;