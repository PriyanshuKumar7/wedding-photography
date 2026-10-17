/* Feature: Team Member Profile Card */
const TeamCard = ({ name, role, image }) => (
  <div className="text-center group">
    <div className="overflow-hidden mb-3 sm:mb-4 h-64 sm:h-72 md:h-80">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
      />
    </div>
    <h4 className="text-lg sm:text-xl font-serif">{name}</h4>
    <p className="text-[10px] sm:text-xs text-lux-gold tracking-widest uppercase mt-1">{role}</p>
  </div>
);
export default TeamCard;