/* Feature: Full-screen Hero Banner with CTA */
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => (
  <section className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center justify-center text-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 leading-tight">
        Cinematic <span className="italic text-lux-gold">Wedding</span> Stories
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-lux-cream/80 mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed">
        We don't just take photos. We preserve emotions, tears, and laughter for a lifetime.
      </p>
      <Link to="/portfolio"><Button>View Portfolio</Button></Link>
    </div>
  </section>
);
export default HeroSection;