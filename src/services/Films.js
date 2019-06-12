import axios from 'axios';
import GoogleImages from 'google-images';

const client = new GoogleImages(
  '004566832713711953075:56aoigtc7gk',
  'AIzaSyBFvsBrfV7UC34FgjYpoveslL9j6p3Gg8I'
);

const BASE_URL = 'https://ghibliapi.herokuapp.com';

export default {
  getFilms: async () => {
    return axios.get(`${BASE_URL}/films`);
  },

  getFilmsCoverImages: async title => {
    return client.search(`${title} movie poster`, { size: 'large' });
  }
};
