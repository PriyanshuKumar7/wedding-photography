/* Feature: 404 Page */
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-lux-dark text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-lux-gold mb-4">
      404
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-lux-gray mb-6 sm:mb-8">
      Oops! Page not found.
    </p>
    <Link to="/">
      <Button variant="outline">Back to Home</Button>
    </Link>
  </div>
);
export default NotFound;