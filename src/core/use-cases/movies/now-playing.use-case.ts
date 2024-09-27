import {HttpAdapter} from '../../../config/adapters/http/http.adapter';

//Se busca que los casos de uso sean Agnosticos, es decir, que no necesiten de paquetes de terceros para funcionar, a esto me refiero a se que utilice el AxiosAdapter dentro de esta funcion, cosa que si se necesita cambiar axios por alguna otra libreria, NO haria falta cambiar el codigo en esta funcion, ya que la misma depende de HttpAdapter que es la clase abstracta, la cual no cambiaría.
export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter) => {
  try {
    const nowPlaying = await fetcher.get('/now_playing');
    console.log(nowPlaying);
  } catch (error) {}
};
