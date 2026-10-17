/* Feature: Pricing Page */
import SectionTitle from '../components/common/SectionTitle';
import PricingTable from '../components/packages/PricingTable';

const Packages = () => {
  // TODO: BACKEND CONNECT - Fetch from /api/packages
  const packages = [
    { title: "Basic", price: "₹ 50,000", features: ["1 Day Coverage", "1 Photographer", "100 Edited Photos", "Online Gallery"], highlight: false },
    { title: "Premium", price: "₹ 1,20,000", features: ["2 Day Coverage", "2 Photographers + 1 Cinematographer", "300 Edited Photos", "Cinematic Film (5 min)", "Premium Photo Album"], highlight: true },
    { title: "Luxury", price: "₹ 2,50,000", features: ["Full Event Coverage", "Full Team (Photo + Film)", "500+ Edited Photos", "Feature Film (15 min)", "Luxury Leather Album", "Drone Coverage"], highlight: false }
  ];

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 min-h-screen bg-lux-dark overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle subtitle="Pricing" title={<>Wedding <span className="italic text-lux-gold">Packages</span></>} />
        <p className="text-sm sm:text-base text-lux-gray mb-10 sm:mb-12 md:mb-16 max-w-xl mx-auto px-2">
          Choose the perfect package to capture your special day. Custom packages are also available on request.
        </p>
        <PricingTable packages={packages} />
      </div>
    </div>
  );
};
export default Packages;