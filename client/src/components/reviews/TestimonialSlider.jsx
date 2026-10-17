/* Feature: Grid for Reviews (Future: Slider) */
import ReviewCard from './ReviewCard';

const TestimonialSlider = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
    {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
  </div>
);
export default TestimonialSlider;