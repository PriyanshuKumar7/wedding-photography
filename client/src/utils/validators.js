/* Feature: Form Validation Helpers */
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);