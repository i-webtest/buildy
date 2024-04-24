import { gsap } from 'gsap';

export const accordeon = () => {
  const servicesCard = document.querySelectorAll('.services-card');

  servicesCard.forEach((card) => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('services-card_active')) {
        servicesCard.forEach((item) => {
          item.classList.remove('services-card_active');
        });

        card.classList.add('services-card_active');

        const tl = gsap.timeline({
          defaults: {
            duration: 1,
          },
        });

        tl.from('.services-card__text', {
          opacity: 0,
          duration: 1,
          x: 30,
        }).from('.services-card__link', {
          opacity: 0,
          duration: 1,
          x: 30,
        });
      }
    });
  });
};
