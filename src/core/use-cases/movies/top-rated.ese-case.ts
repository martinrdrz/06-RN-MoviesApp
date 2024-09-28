import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

//Se busca que los casos de uso sean Agnosticos, es decir, que no necesiten de paquetes de terceros para funcionar, a esto me refiero a se que utilice el AxiosAdapter dentro de esta funcion, cosa que si se necesita cambiar axios por alguna otra libreria, NO haria falta cambiar el codigo en esta funcion, ya que la misma depende de HttpAdapter que es la clase abstracta, la cual no cambiaría.
//En este caso estoy haciendo uso de la inyeccion de dependencias, ya que le estoy pasando el parametro fetcher a esta funcion.
export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');
    return topRated.results.map(result =>
      MovieMapper.fromMovieDBRsultToEntity(result),
    );
    //console.log(nowPlaying.results);
    //return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching Movies - TopRated');
  }
};
