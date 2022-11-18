// const axios = require('axios');
const axios = require('axios').default;
export default class ApiService {
  constructor() {
    this.searchValue = '';
    this.page = 1;
    this.totalHits = 0;
  }

  //запит за допомогою метода fetch() ----->

  // fetchCards() {
  //   const url = `https://pixabay.com/api/?key=31347767-165cf29bd2d2396f21a38e64e&q=${this.searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

  //   return fetch(url)
  //   .then(resp => resp.json())
  //   .then(info => {
  //     this.incrementPage();

  //     return info.hits;
  //   })
  //   .catch(err => console.log(err));

  // }
  //  <----------

  async fetchCards() {
    const url = `https://pixabay.com/api/?key=31347767-165cf29bd2d2396f21a38e64e&q=${this.searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    try {
      const response = await axios.get(url);
      const arrayOfObjects = await response.data.hits;
      const totalHits = await response.data.totalHits;
      this.incrementPage();
      this.totalHits = totalHits;

      // console.log(arrayOfObjects);

      return arrayOfObjects;
    } catch (error) {
      console.log('ERROR: ', console.log(error));
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get data() {
    return this.searchValue;
  }

  set data(newData) {
    this.searchValue = newData;
  }
}
