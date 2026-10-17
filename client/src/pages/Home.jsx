/* Feature: Composes Home Sections */
import HeroSection from '../components/home/HeroSection';
import BrandIntro from '../components/home/BrandIntro';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialSlider from '../components/reviews/TestimonialSlider';
import SectionTitle from '../components/common/SectionTitle';

const Home = () => {
  // TODO: BACKEND CONNECT - Reviews backend se aayenge
  const dummyReviews = [
    { id: 1, name: "The Harsh's", text: "They made us feel so comfortable. The photos are beyond breathtaking." },
    { id: 2, name: "Md Abul Farah", text: "Best decision we made for our wedding. The cinematic film is a masterpiece." }
  ];

  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <BrandIntro />
      <ServicesPreview />
      <section className="py-16 sm:py-20 md:py-24 bg-lux-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="What Our Clients Say" />
          <TestimonialSlider reviews={dummyReviews} />
        </div>
      </section>
    </div>
  );
};
export default Home;