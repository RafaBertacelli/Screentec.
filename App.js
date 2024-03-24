import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login';
import Home from './src/pages/home';
import facaLogin from './src/pages/facaLogin';
const Stack = createNativeStackNavigator ();


export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
       options={{headerShown:false,}}/>

     <Stack.Screen name="Login" component={Login}
        options={{headerShown:false,}}/>

    <Stack.Screen name="facaLogin" component={facaLogin}
        options={{headerShown:false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

