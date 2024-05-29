import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api/postApi'; // Import the API functions

const Test = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await api.getAll();
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchData();
  }, []); // Call once when component mounts

  return (
    <View>
      <Text>Posts:</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.securityFees}</Text>
            <Text>{item.rent}</Text>
            <Text>{item.selectCategory[1]}</Text>
            {/* Render other post details as needed */}
          </View>
        )}
      />
    </View>
  );
};

export default Test;
