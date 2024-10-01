import {useEffect, useState} from 'react';
import {getMovieByIdUseCase, getMovieCastUseCase} from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = getMovieByIdUseCase(movieDBFetcher, movieId);
    const castPromise = getMovieCastUseCase(movieDBFetcher, movieId);
    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);

    setIsLoading(false);

    //console.log(cast);
  };

  return {isLoading, movie, cast};
};
