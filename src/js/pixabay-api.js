import axios from 'axios';

export const fetchImages = async (searchText, page, pageSize = 15) => {
  const searchParams = new URLSearchParams({
    key: '48213456-ebc0266b477643e50c8486310',
    q: searchText.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: pageSize,
  });

  return axios(`https://pixabay.com/api/`, {
    params: searchParams
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data;
    })
    .then(data => {
      return {
        results: data.hits,
        total: data.totalHits
      }
    })
};