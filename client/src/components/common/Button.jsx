/* Feature: Reusable Button with variants */
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm font-semibold transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-lux-gold text-lux-black hover:bg-white",
    outline: "border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-lux-black",
    dark: "bg-lux-black text-lux-cream border border-white/20 hover:border-lux-gold"
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</button>;
};
export default Button;