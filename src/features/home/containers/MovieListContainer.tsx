import React from "react";
import { FlatList } from "react-native";

import { Title } from "react-native-paper";

import { momentHelper, themoviedbHelper } from "../../../lib";
import { CardMovie, CardMoviePlaceholder } from "../../../components";
import { HomeStyle } from "./styles";

interface IProps {
  title: string;
  data: Array<any>; // TODO add type
  nextPage: () => void;
  onPress: () => void;
  isFetching: boolean;
}

const MovieListContainer: React.FC<IProps> = ({
  title,
  data = [],
  nextPage = () => undefined,
  onPress = () => undefined,
  isFetching = false,
}) => {
  const renderItem = (item) => {
    const {
      id,
      voteAverage,
      title: movieTitle,
      releaseDate,
      posterUrl,
    } = themoviedbHelper.normalizeData(item);

    const releaseDateFormated = momentHelper.formatDate(releaseDate);
    return (
      <CardMovie
        title={movieTitle}
        imageUrl={posterUrl}
        voteAverage={voteAverage}
        releaseDate={releaseDateFormated}
        onPress={() => onPress(id)}
      />
    );
  };

  const renderFooter = () => {
    if (!isFetching) return null;
    return <CardMoviePlaceholder numItems={20} />;
  };

  return (
    <>
      <Title style={HomeStyle.title}>{title}</Title>

      <FlatList
        contentContainerStyle={HomeStyle.contentFlatlist}
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderItem(item)}
        onEndReached={nextPage}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        horizontal
        showsHorizontalScrollIndicator={false}
        testID="movieList"
      />
    </>
  );
};

export default MovieListContainer;