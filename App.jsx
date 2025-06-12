
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllTasks from './src/screens/AllTasks';
import CreateScreen from './src/screens/CreateScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllTasks" component={AllTasks}   options={({ route }) => {
    return { title: route.params.title };
  }}
 />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;