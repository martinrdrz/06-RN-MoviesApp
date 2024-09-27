import {AxiosAdapter} from './http/axios.adapter';

export const movieDBAdapter = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '74c6197b0d7993d24a3dedc6b74d4a3d',
    language: 'es',
  },
});
