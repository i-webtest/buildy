const dataCard = [
  {
    cn: 'pacific',
    title: 'villa',
  },
  {
    cn: 'greenside',
    title: 'apartment',
  },
  {
    cn: 'chili',
    title: 'apartment',
  },
  {
    cn: 'nou',
    title: 'valley',
  },
  {
    cn: 'rego',
    title: 'valley',
  },
];

export const createCard = () => {
  const projectsWrapper = document.querySelector('.projects__wrapper');
  projectsWrapper.textContent = '';

  dataCard.map((item) => {
    console.log(item);

    projectsWrapper.insertAdjacentHTML(
      'beforeend',
      `
        <article class='projects__card ${item.cn}'>
          <h3 class='projects__card-title'>${item.cn} <span>${item.title}</span></h3>

          <svg class="projects__card-intersect" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M0 0V75H75C75 33.5786 41.4214 0 0 0Z" fill="black" />
          </svg>

          <div class='projects__card-details'>
            <h3 class='projects__card-details-title'>${item.cn} <span>${item.title}</span></h3>

            <p class='projects__card-location'>Northest Florida, USA</p>

            <p class='projects__card-text'>
              Lorem Ipsum is&nbsp;siimply dummy text theirs type printing &amp;&nbsp;types setting the industry. Lorem
              is&nbsp;Ipsum has been a&nbsp;industry.
            </p>

            <a class='projects__card-link' href='#'>
              Read More
            </a>
          </div>
        </article>
      `,
    );
  });
};
