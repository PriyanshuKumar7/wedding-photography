/* Feature: 3-Column Services Grid */
import { Camera, Film, Heart } from 'lucide-react';

const services = [
  { icon: <Camera size={40} />, title: "Wedding Photography", desc: "Capturing the essence of your big day." },
  { icon: <Film size={40} />, title: "Cinematic Films", desc: "Turning your memories into a movie." },
  { icon: <Heart size={40} />, title: "Pre-Wedding Shoots", desc: "Celebrating your love story before the big day." },
];

const ServicesPreview = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-lux-black px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
      {services.map((s, i) => (
        <div key={i} className="text-center p-6 sm:p-8 border border-white/5 hover:border-lux-gold/50 transition-all">
          <div className="text-lux-gold flex justify-center mb-4 sm:mb-6">{s.icon}</div>
          <h3 className="text-lg sm:text-xl font-serif mb-2 sm:mb-3">{s.title}</h3>
          <p className="text-xs sm:text-sm text-lux-gray">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default ServicesPreview;