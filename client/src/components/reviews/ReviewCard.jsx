/* Feature: Single Review Card */
const ReviewCard = ({ review }) => (
  <div className="bg-lux-dark p-6 sm:p-8 md:p-10 rounded-lg border border-white/5 relative text-left h-full flex flex-col">
    <span className="text-5xl sm:text-6xl text-lux-gold/20 absolute top-2 sm:top-4 left-4 sm:left-6 font-serif">"</span>
    <p className="text-sm sm:text-base md:text-lg italic text-lux-gray leading-relaxed mb-4 sm:mb-6 relative z-10 flex-grow">
      {review.text}
    </p>
    <p className="text-xs sm:text-sm text-lux-gold tracking-widest uppercase">- {review.name}</p>
  </div>
);
export default ReviewCard;