/* Feature: Reusable Section Heading */
const SectionTitle = ({ subtitle, title, center = true }) => {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <p className="text-xs sm:text-sm tracking-widest text-lux-gold uppercase mb-2 sm:mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
        {title}
      </h2>
    </div>
  );
};
export default SectionTitle;