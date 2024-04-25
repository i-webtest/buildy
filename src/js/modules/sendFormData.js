export const sendFormData = async (form, formBtn, formDataObject) => {
  try {
    formBtn.textContent = 'Send...';
    formBtn.disabled = true;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      form.reset();
    } else if (response.status === 422) {
      const errors = await response.json();
      console.log(errors);
      throw new Error('Ошибка валидации данных');
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    formBtn.textContent = 'Submit';
    formBtn.disabled = false;
  }
};
