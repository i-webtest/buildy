const header = document.querySelector('.header');

export const headerBackgroundColor = () => {
  // if (window.screen.width <= 940) {}

  window.onscroll = () => {
    // if (window.screen.width <= 940) {
    //   header.classList.toggle('header-active', window.scrollY > 100);
    // }
    // if (window.screen.width <= 520) {
    //   header.classList.toggle('header-active', window.scrollY > 70);
    // }
  };
};
