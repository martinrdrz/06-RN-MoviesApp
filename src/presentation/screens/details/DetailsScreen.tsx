import {RouteProp, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStackParam} from '../../navegation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';

export const DetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParam, 'Details'>>();
  const {movieId} = route.params;
  const {isLoading, movie} = useMovie(movieId);
  if (isLoading) return <Text>Loading . . .</Text>;

  return (
    <View>
      {/* Header */}
      <MovieHeader
        poster={movie!.poster}
        originalTitle={movie!.originalTitle}
        title={movie!.title}
      />
      {/* Details */}
      {/* <MovieDetails movie */}
    </View>
  );
};
