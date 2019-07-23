import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';

import { Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import MovieList from './MovieListContainer';
import { GenreChip, DetailHeader } from '../presentation';
import { themoviedbHelper } from '../../../lib';
import { MovieActionCreators, MovieDetailActionCreators } from '../ducks';
import { HomeStyle } from './styles';


function DetailContainer() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.movieDetail);
  const movie = themoviedbHelper.normalizeData(data);

  function onRequestDetail(id) {
    dispatch(MovieActionCreators.selectedMovie(id));
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }

  useEffect(() => {
    dispatch(MovieDetailActionCreators.movieDetailRequest());
  }, []);

  return (
    <ScrollView style={HomeStyle.container}>
      <DetailHeader
        title={movie.title}
        voteAverage={movie.voteAverage}
        voteCount={movie.voteCount}
        backdropUrl={movie.backdropUrl}
      />
      <View style={HomeStyle.contentDetailBody}>
        <Title>PLOT</Title>
        <Paragraph>{movie.overview}</Paragraph>
        <GenreChip genres={movie.genres} />
      </View>
      <MovieList
        title="Recommended Movies"
        data={movie.recommendations ?.results}
        onPress={onRequestDetail}
      />
    </ScrollView>
  );
}

export default DetailContainer;
