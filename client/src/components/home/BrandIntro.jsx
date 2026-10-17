/* Feature: About Intro on Home */
import SectionTitle from '../common/SectionTitle';

const BrandIntro = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-lux-dark text-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <SectionTitle subtitle="Welcome" title="A One-Of-A-Kind Experience" />
      <p className="text-sm sm:text-base md:text-lg text-lux-gray leading-relaxed max-w-2xl mx-auto">
        Based in India, available worldwide. We specialize in capturing candid moments, traditional rituals, and the grand celebration of your union.
      </p>
    </div>
  </section>
);
export default BrandIntro;