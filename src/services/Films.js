import axios from 'axios';

const BASE_URL = 'https://ghibliapi.herokuapp.com';

export default {
  getFilms: async () => {
    return axios.get(`${BASE_URL}/films`);
  }
}
