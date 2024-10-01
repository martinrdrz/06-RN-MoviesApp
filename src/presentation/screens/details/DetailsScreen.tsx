import {RouteProp, useRoute} from '@react-navigation/native';
import {Text} from 'react-native';
import {RootStackParam} from '../../navegation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

export const DetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParam, 'Details'>>();
  const {movieId} = route.params;
  const {isLoading, movie, cast = []} = useMovie(movieId);
  if (isLoading) return <Text>Loading . . .</Text>;

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader
        poster={movie!.poster}
        originalTitle={movie!.originalTitle}
        title={movie!.title}
      />
      {/* Details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
