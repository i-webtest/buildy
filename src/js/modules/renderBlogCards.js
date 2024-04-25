// import { blogCard } from './data';

// const URL = 'https://buildy-a2d91-default-rtdb.firebaseio.com/blogCard.json';

export const renderBlogCards = () => {
  const list = document.querySelector('.blog__list');
  const btn = document.querySelector('.blog__button');

  let currentCard = 2;
  let count = 1;

  const render = (data) => {
    list.innerHTML = '';

    data.forEach((item) => {
      // const list = document.createElement('ul');
      // list.classList.add('blog__list');

      // const li = document.createElement('li');
      // li.classList.add('blog__item');

      // const article = document.createElement('article');
      // article.classList.add('blog__card');
      // article.style.cssText = `
      //   background-image: url(${item.bg[0]});
      //   background-image: image-set(
      //     url(${item.bg[1]}) type('image/avif') 1x,
      //     url(${item.bg[2]}) type('image/webp') 1x,
      //     url(${item.bg[0]}) type('image/jpg') 1x
      //   );
      // `;
      // article.innerHTML = `
      //   <svg
      //     class="blog__card-intersect"
      //     width="75"
      //     height="75"
      //     viewBox="0 0 75 75"
      //     fill="none"
      //     xmlns="http://www.w3.org/2000/svg"
      //   >
      //     <path
      //       opacity="0.6"
      //       fill-rule="evenodd"
      //       clip-rule="evenodd"
      //       d="M0 0V75H75C75 33.5786 41.4214 0 0 0Z"
      //       fill="black"
      //     />
      //   </svg>

      //   <div class="blog__card-details">
      //     <span class="blog__card-label">${item.label}</span>

      //     <p class="blog__card-text">
      //       ${item.textThin}
      //       <span>${item.textBold}</span>
      //     </p>

      //     <div class="blog__card-info">
      //       <img class="blog__card-user" src=${item.img} width="31" height="31" alt="${item.name}" />

      //       <h3 class="blog__card-user-title">${item.name}</h3>

      //       <time class="blog__card-date" datetime=${item.datetime}>${item.date}</time>
      //     </div>

      //     <a class="blog__card-link" href="#">Read More</a>
      //   </div>
      // `;

      // li.append(article);
      // list.append(li);

      list.insertAdjacentHTML(
        'beforeend',
        `
          <li class="blog__item">
            <article class="blog__card">
              <svg
                class="blog__card-intersect"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.6"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0V75H75C75 33.5786 41.4214 0 0 0Z"
                  fill="black"
                />
              </svg>

              <div class="blog__card-details">
                <span class="blog__card-label">${item.label}</span>

                <p class="blog__card-text">
                  ${item.textThin}
                  <span>${item.textBold}</span>
                </p>

                <div class="blog__card-info">
                  <img class="blog__card-user" src="${item.img}" width="31" height="31" alt="${item.name}" />

                  <h3 class="blog__card-user-title">${item.name}</h3>

                  <time class="blog__card-date" datetime=${item.datetime}>${item.date}</time>
                </div>

                <a class="blog__card-link" href="#">Read More</a>
              </div>
            </article>
          </li>
        `,
      );
    });
  };

  const sliceArray = (data, index) => {
    return data.slice(0, index);
  };

  const changeData = (data) => {
    const newCurrentCard = currentCard * count;

    render(sliceArray(data, newCurrentCard));

    if (data.length > newCurrentCard) {
      count++;
    } else {
      btn.style.display = 'none';
    }
  };

  const getData = () => {
    fetch('https://buildy-a2d91-default-rtdb.firebaseio.com/blogCard.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Данные были получены с ошибкой');
        }
      })
      .then((data) => {
        console.log(data);
        changeData(data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        console.log('finally');
      });
  };

  btn.addEventListener('click', getData);

  getData();
};
