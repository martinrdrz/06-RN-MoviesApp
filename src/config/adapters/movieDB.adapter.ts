//import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '74c6197b0d7993d24a3dedc6b74d4a3d',
    //api_key: THE_MOVIE_DB_KEY,
    language: 'es',
  },
});
