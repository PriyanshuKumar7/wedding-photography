/* Feature: 3-Column Pricing Layout */
import PackageCard from './PackageCard';

const PricingTable = ({ packages }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto">
    {packages.map((pkg, idx) => <PackageCard key={idx} pkg={pkg} />)}
  </div>
);
export default PricingTable;