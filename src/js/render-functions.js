import iziToast from 'izitoast';

const getGalleryItemTemplate = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
      <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <ul class="gallery-item-info">
        <li>
          <p>Likes</p>
          <p>${likes}</p>
        </li>
        <li>
          <p>Views</p>
          <p>${views}</p>
        </li>
        <li>
          <p>Comments</p>
          <p>${comments}</p>
        </li>
        <li>
          <p>Downloads</p>
          <p>${downloads}</p>
        </li>
      </ul>
    </a>
  </li>`;
};

export const renderGallery = (container, images) => {
  if (!images) return (container.innerHTML = '');

  const markup = images
    .map(image => {
      return getGalleryItemTemplate(image);
    })
    .join('');

  container.insertAdjacentHTML('beforeend', markup);

  scrollGallery(container, 2);
};

export const scrollGallery = (container, items) => {
  const { height } = container
    .querySelector('.gallery-item')
    .getBoundingClientRect();

  window.scrollBy({
    top: height * items,
    behavior: 'smooth',
  });
};

export const renderError = message => {
  iziToast.error({
    message,
    position: 'topRight',
  });
};

export const renderInfo = message => {
  iziToast.info({
    message,
    position: 'topRight',
  });
};

export const toggleVisibility = (loader, isVisible) => {
  if (isVisible) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
};
