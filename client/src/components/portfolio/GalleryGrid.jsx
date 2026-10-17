/* Feature: Responsive Image Grid with Hover Effect */
const GalleryGrid = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
    {items.map(item => (
      <div key={item.id} className="group relative overflow-hidden h-64 sm:h-72 md:h-80 cursor-pointer">
        <img
          src={item.src}
          alt={item.cat}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-lux-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
          <p className="text-lux-gold font-serif text-lg sm:text-xl">{item.cat}</p>
        </div>
      </div>
    ))}
  </div>
);
export default GalleryGrid;