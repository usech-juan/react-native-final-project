import React from 'react';
import { View, Text, Image, Button } from 'react-native';

function WaitView({ movies, handleFavorite }) {
  return (
    <View>
      <View>
        {movies.map((movie) => (
          <View key={movie.id}>
            <Image source={{ uri: movie.imageUrl }} style={{ width: '100%', height: 200 }} />
            <Text>{movie.title}</Text>
            <Button onPress={handleFavorite} title="Add to Favorites" />
          </View>
        ))}
      </View>
    </View>
  );
}

export default WaitView;

