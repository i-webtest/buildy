export const blogCards = () => {
  const blogList = document.querySelector('.blog__list');
  const blogItems = document.querySelectorAll('.blog__item').length;
  const btn = document.querySelector('.blog__button');

  let items = 2;

  const showMore = () => {
    items += 2;

    const array = Array.from(blogList.children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach((item) => item.classList.add('blog__item-visible'));

    if (visibleItems.length === blogItems) {
      btn.style.display = 'none';
    }
  };

  btn.addEventListener('click', showMore);
};
