import SimpleLightbox from 'simplelightbox';
import { fetchImages } from './js/pixabay-api';
import {
  renderError,
  renderGallery,
  renderInfo,
  toggleVisibility,
} from './js/render-functions';

const searchFormElement = document.querySelector('.search-form');
const loadMoreElement = document.querySelector('.load-more');
const loaderElement = document.querySelector('.loader');
const galleryContainer = document.querySelector('.gallery');

const simpleLightboxInstance = new SimpleLightbox('.gallery a.gallery-link', {
  captionDelay: 250,
  overlayOpacity: 0.8,
});

const pageSize = 15;
let currentPage = 1;
let searchQuery = '';

const searchHandler = async event => {
  event.preventDefault();

  searchQuery = event.target.elements['search'].value;
  currentPage = 1;
  // clear gallery if new search
  renderGallery(galleryContainer);

  await loadImagesPage(currentPage);

  searchFormElement.reset();
};

const loadMoreHandler = async () => {
  currentPage += 1;
  await loadImagesPage(currentPage);
};

const loadImagesPage = async page => {
  toggleVisibility(loaderElement, true);
  toggleVisibility(loadMoreElement, false);

  try {
    const { results: images, total } = await fetchImages(
      searchQuery,
      page,
      pageSize
    );

    if (!images.length) {
      renderError('Sorry, there are no more images to load!');
    } else {
      renderGallery(galleryContainer, images);
      simpleLightboxInstance.refresh();
      // show load more button if there are more images to load
      if (pageSize * page < total) {
        toggleVisibility(loadMoreElement, true);
      } else if (page !== 1) {
        renderInfo(
          "We're sorry, but you've reached the end of search results."
        );
      }
    }
  } catch {
    renderError('Sorry, something went wrong. Please try again later!');
  } finally {
    toggleVisibility(loaderElement, false);
  }
};

searchFormElement.addEventListener('submit', searchHandler);
loadMoreElement.addEventListener('click', loadMoreHandler);
