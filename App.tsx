/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {APP_ROUTES} from './src/routes';
import {Home} from './src/components/Home';
import {Post} from './src/components/Post';
import {NewPost} from './src/components/NewPost';
import {Modal} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name={APP_ROUTES.Home} component={Home} />
          <Stack.Screen name={APP_ROUTES.Post} component={Post} />
          <Stack.Screen name={APP_ROUTES.NewPost} component={NewPost} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen name={APP_ROUTES.Modal} component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
