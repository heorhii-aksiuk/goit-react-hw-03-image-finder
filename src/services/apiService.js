const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24011643-a99499b85595b827654661749';

// function apiFetch() {
//   fetch(
//     `https://pixabay.com/api/?q=${currentRequest}&page=1&key=24011643-a99499b85595b827654661749&image_type=photo&orientation=horizontal&per_page=12`,
//   )
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(response => {
//       console.log(response);
//       return this.setState({ items: response.hits });
//     })
//     .catch(console.log);
// }

export default class ApiService {
  constructor() {
    this._searchQuery = '';
    this._page = 1;
  }

  async fetchImages() {
    const searchParams = new URLSearchParams({
      q: this._searchQuery,
      page: this._page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    });

    const apiFetch = await fetch(`${BASE_URL}?${searchParams}`);
    const response = await apiFetch.json();
    const { hits } = response;
    return hits;
  }

  // get searchQuery() {
  //   return this._searchQuery;
  // }

  set searchQuery(newQuery) {
    this._searchQuery = newQuery;
  }
}
