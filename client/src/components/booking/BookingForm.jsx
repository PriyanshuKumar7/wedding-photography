/* Feature: Form with state management & Mock Submission */
import { useState } from 'react';
import Button from '../common/Button';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', weddingDate: '', venue: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // TODO: BACKEND CONNECT - Axios POST /api/bookings
    setTimeout(() => {
      setStatus('Booking Successful! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', weddingDate: '', venue: '', message: '' });
    }, 1500);
  };

  const inputClass = "w-full bg-transparent border-b border-lux-gray/50 py-3 text-sm sm:text-base focus:outline-none focus:border-lux-gold text-lux-cream placeholder-lux-gray";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 bg-lux-black p-5 sm:p-8 md:p-12 border border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <input type="text" name="name" required placeholder="Full Name" onChange={handleChange} value={formData.name} className={inputClass} />
        <input type="email" name="email" required placeholder="Email Address" onChange={handleChange} value={formData.email} className={inputClass} />
        <input type="tel" name="phone" required placeholder="Phone Number" onChange={handleChange} value={formData.phone} className={inputClass} />
        <input type="date" name="weddingDate" required onChange={handleChange} value={formData.weddingDate} className={inputClass} />
      </div>
      <input type="text" name="venue" placeholder="Wedding Venue / City" onChange={handleChange} value={formData.venue} className={inputClass} />
      <textarea name="message" rows="4" placeholder="Your Message (Optional)" onChange={handleChange} value={formData.message} className={`${inputClass} resize-none`}></textarea>
      <Button type="submit" className="w-full">Submit Booking Request</Button>
      {status && <p className="text-center text-sm sm:text-base text-lux-gold mt-4">{status}</p>}
    </form>
  );
};
export default BookingForm;