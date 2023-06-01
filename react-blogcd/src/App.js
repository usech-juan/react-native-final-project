import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/Navbar';
import BlogPost from './pages/BlogPost';
import BlogList from './pages/BlogList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Navbar} />
        <Stack.Screen name="BlogPost" component={BlogPost} />
        <Stack.Screen name="BlogList" component={BlogList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


