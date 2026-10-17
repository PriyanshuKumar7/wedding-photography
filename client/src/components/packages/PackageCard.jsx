/* Feature: Single Pricing Card */
import Button from '../common/Button';

const PackageCard = ({ pkg }) => (
  <div className={`p-6 sm:p-8 lg:p-10 border ${pkg.highlight ? 'border-lux-gold bg-lux-black/50 md:-translate-y-4 shadow-2xl shadow-lux-gold/10' : 'border-white/10 bg-lux-dark'} flex flex-col items-center`}>
    <h3 className="text-xl sm:text-2xl font-serif text-lux-gold mb-2">{pkg.title}</h3>
    <p className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8">{pkg.price}</p>
    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-xs sm:text-sm text-lux-gray w-full">
      {pkg.features.map((f, i) => (
        <li key={i} className="flex items-center justify-center text-center">
          <span className="w-1.5 h-1.5 bg-lux-gold rounded-full mr-2 sm:mr-3 shrink-0"></span>
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Button variant={pkg.highlight ? 'primary' : 'outline'} className="w-full mt-auto">Book {pkg.title}</Button>
  </div>
);
export default PackageCard;