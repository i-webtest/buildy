export const trailers = () => {
  const createListTrailers = (parent, srcList) => {
    const trailersList = document.createElement('ul');
    trailersList.classList.add('about__trailers-list');
    parent.append(trailersList);

    const trailerWrappers = [];
    const trailerFrames = [];

    srcList.forEach((src) => {
      const trailersItem = document.createElement('li');
      trailersItem.classList.add('about__trailers-item');
      trailersList.append(trailersItem);

      const trailersWrapper = document.createElement('div');
      trailersWrapper.classList.add('about__trailers-wrapper');
      trailersItem.append(trailersWrapper);
      trailerWrappers.push(trailersWrapper);

      const trailersVideo = document.createElement('iframe');
      trailersVideo.classList.add('about__trailers-video');
      trailersWrapper.append(trailersVideo);
      trailerFrames.push(trailersVideo);

      const idVideo = src.match(/\/embed\/([^/\?]+)/)[1];

      trailersVideo.srcdoc = `
        <style>
          * {
            padding: 0;
            margin: 0;
          }

          html, body {
            width: 100%;
            height: 100%;
          }

          a {
            cursor: default;
          }

          img, svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          #button {
            position: absolute;
            z-index: 5;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 119px;
            height: 119px;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
        </style>

        <a href="https://www.youtube.com/embed/${idVideo}?autoplay=1">
          <img src="https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg">
          <div id="button">
            <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.3" width="119" height="119" rx="59.5" fill="white" />
              <rect x="14.5714" y="14.5713" width="89.8571" height="89.8571" rx="44.9286" fill="white" />
              <path d="M68.5597 55.9829L54.941 45.9691C52.2995 44.0269 48.5714 45.913 48.5714 49.1917V69.6199C48.5714 72.9333 52.3692 74.81 55.0012 72.7973L68.62 62.383C70.7384 60.763 70.7083 57.5628 68.5597 55.9829Z" fill="#505050" />
            </svg>
          </div>
        </a>
      `;
    });

    return { trailerWrappers, trailerFrames };
  };

  const controlTrailer = (trailerWrappers, trailerFrames, i = 0, j = 0) => {
    if (i !== j) {
      trailerWrappers[i].style.display = 'none';
      trailerFrames[i].srcdoc = '';
    } else {
      trailerWrappers[i].style.display = 'block';
      trailerFrames[i].srcdoc = trailerFrames[i].dataset.srcdoc;
    }
  };

  const init = () => {
    const trailersContainer = document.querySelector('.about__video');
    const trailersButtons = document.querySelectorAll('.about__item-link');

    const srcList = [];

    trailersButtons.forEach((btn) => {
      srcList.push(btn.dataset.src);
    });

    const { trailerWrappers, trailerFrames } = createListTrailers(trailersContainer, srcList);

    trailersButtons.forEach((btn, j) => {
      trailerFrames[j].dataset.srcdoc = trailerFrames[j].srcdoc;

      btn.addEventListener('click', () => {
        trailersButtons.forEach((tBtn, i) => {
          if (tBtn === btn) {
            tBtn.classList.add('about__item-link_active');
          } else {
            tBtn.classList.remove('about__item-link_active');
          }

          controlTrailer(trailerWrappers, trailerFrames, i, j);
        });
      });
    });

    controlTrailer(trailerWrappers, trailerFrames);
  };

  init();
};
