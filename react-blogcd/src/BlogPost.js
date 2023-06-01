import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useParams } from '@react-navigation/native';

function BlogPost() {
  const { id } = useParams();
  const API_URL = 'https://online-movie-database.p.rapidapi.com';
  const API_KEY = '1d9eaf0c24msh738a94125ae0308p13cabfjsn31e797ef476c';
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/movie_details/?movie_id=${id}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
        },
      });
      const data = await response.json();
      setBlog(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View>
      <Text>Blog Post</Text>
      <Text>{blog.title}</Text>
      <Image source={{ uri: blog.large_cover_image }} style={{ width: 200, height: 200 }} />
      <Text>{blog.description_full}</Text>
      <Button onPress={handleFavorite} title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} />
      {isFavorite && <FavoriteView />}
    </View>
  );
}

export default BlogPost;
