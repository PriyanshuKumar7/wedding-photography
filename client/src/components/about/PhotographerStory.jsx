/* Feature: Image + Text Grid Layout */
const PhotographerStory = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
    <div className="relative mx-auto w-full max-w-md md:max-w-none">
      <div className="absolute inset-0 border border-lux-gold translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
      <img
        src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=800"
        alt="Photographer"
        className="relative z-10 w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-xs sm:text-sm tracking-widest text-lux-gold uppercase mb-3 sm:mb-4">Our Story</h2>
      <h1 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-8 leading-tight">
        Behind The <br className="hidden sm:block" /> Lens
      </h1>
      <p className="text-sm sm:text-base text-lux-gray leading-relaxed mb-4 sm:mb-6">
        We are a team of passionate storytellers. What started as a hobby of capturing sunsets quickly turned into a lifelong obsession with capturing human connection.
      </p>
      <p className="text-sm sm:text-base text-lux-gray leading-relaxed mb-6 sm:mb-8">
        With over 10 years of experience and 200+ weddings under our belt, we believe that the best photos are the ones where you forget the camera is even there.
      </p>
    </div>
  </div>
);
export default PhotographerStory;