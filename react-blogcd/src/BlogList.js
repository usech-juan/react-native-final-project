import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

function BlogList() {
  const API_URL = 'https://online-movie-database.p.rapidapi.com';
  const API_KEY = '1d9eaf0c24msh738a94125ae0308p13cabfjsn31e797ef476c';
  const URL_IMAGE = 'https://www.imdb.com/title/tt4633694/mediaviewer/rm173371392/?ref_=tt_ov_i';
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/list_movies/`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
        },
      });
      const data = await response.json();
      setBlogs(data.movies);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Blog List</Text>
      {blogs.map((blog) => (
        <View key={blog.id}>
          <Text>{blog.title}</Text>
          <Image source={{ uri: URL_IMAGE }} style={{ width: 200, height: 200 }} />
          <Text>{blog.description_full}</Text>
        </View>
      ))}
    </View>
  );
}

export default BlogList;
