// Validate email format
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate password (minimum 8 characters, 1 number)
  export const isValidPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // Validate if a field is not empty
  export const isNotEmpty = (value: string): boolean => {
    return value.trim().length > 0;
  };
  
  // Validate phone number (example regex)
  export const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  