/* Feature: Booking Page Wrapper */
import SectionTitle from '../components/common/SectionTitle';
import BookingForm from '../components/booking/BookingForm';

const Contact = () => (
  <div className="
    pt-24 sm:pt-28 md:pt-32 
    pb-16 sm:pb-20 md:pb-24 
    min-h-screen 
    bg-lux-dark
    overflow-x-hidden
  ">
    <div className="
      container mx-auto 
      px-4 sm:px-6 lg:px-8 
      max-w-4xl
    ">
      <SectionTitle 
        subtitle="Get in Touch" 
        title={<>Book Your <span className="italic text-lux-gold">Date</span></>} 
      />
      
      <p className="
        text-center 
        text-sm sm:text-base 
        text-lux-gray 
        mb-8 sm:mb-10 md:mb-12
        px-2 sm:px-4
        max-w-2xl mx-auto
      ">
        Fill out the form below to check our availability.
      </p>
      
      <BookingForm />
    </div>
  </div>
);

export default Contact;