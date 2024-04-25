export const scrollTopButton = (className, options) => {
  const button = document.querySelector('.footer__btn-top');

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
