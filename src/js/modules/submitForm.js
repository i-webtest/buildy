import { sendFormData } from './sendFormData';
import { validateForm } from './validateForm';

export const submitForm = async () => {
  const form = document.querySelector('.footer__form');
  const formBtn = form.querySelector('.footer__form-submit');

  const displayErrors = (errors) => {
    const errorElements = document.querySelector('.footer__form-error');

    errorElements.textContent = '';

    if (errors.length < 1) return;

    errors.forEach((error) => {
      const { field, message } = error;
      const errorElem = document.querySelector(`[data-for="${field}"]`);
      errorElem.textContent = message;
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const formDataObject = {};

    form.email.addEventListener('input', ({ target }) => {
      target.value = target.value.replace(/[^\w@\-.!~*']+/gi, '');
    });

    formData.forEach((value, key) => {
      formDataObject[key] = value.trim().replace(/\s+/g, ' ');
    });

    const validationErrors = validateForm(formDataObject);

    displayErrors(validationErrors);

    if (validationErrors.length > 0) return;

    sendFormData(form, formBtn, formDataObject);
  });
};
