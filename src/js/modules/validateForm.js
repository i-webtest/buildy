export const validateForm = (formData) => {
  const { email } = formData;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = [];

  if (!email) {
    errors.push({ field: 'email', message: 'Enter your email' });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email address...' });
  }

  return errors;
};
