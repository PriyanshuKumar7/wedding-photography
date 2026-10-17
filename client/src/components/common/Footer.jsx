/* Feature: Global Footer with Social Links */
const Footer = () => {
  return (
    <footer className="bg-lux-black py-12 sm:py-14 md:py-16 border-t border-white/10 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-lux-gold mb-4 sm:mb-6">
          Your Brand
        </h2>
        <p className="text-xs sm:text-sm text-lux-gray mb-6 sm:mb-8 max-w-md mx-auto px-2">
          Capturing timeless love stories with a cinematic touch.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest text-lux-gray mb-6 sm:mb-8">
          <a href="#" className="hover:text-lux-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-lux-gold transition-colors">Facebook</a>
          <a href="#" className="hover:text-lux-gold transition-colors">WhatsApp</a>
        </div>
        <p className="text-[10px] sm:text-xs text-lux-gray/50 px-2">
          © 2026 Priyanshu Web services. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;