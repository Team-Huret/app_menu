export const capitalizeFirstLetter = (string: string) => {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const verifyPassword = (password: string): boolean => {
  const minLength = 6;
  const maxLength = 20;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (password.length >= minLength && password.length <= maxLength && hasLowercase && hasUppercase && hasNumber) {
    return true;
  }
  return false;
};

export const isStringContainsOnlyLetters = (string: string): boolean => {
  // Check if the string only contains letters and spaces
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(string);
};
