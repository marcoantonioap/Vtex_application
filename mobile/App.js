import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/1_Login';
import Dashboard from './src/pages/2_Dashboard';
import Produtos from './src/pages/3_Produtos';
import Perfil from './src/pages/4_Perfil';
const Stack = createStackNavigator();

export default function App(){
  return (     
    
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
              <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
              <Stack.Screen name="Produtos" component={Produtos} options={{headerShown: false}}/>
              <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
            </Stack.Navigator>
          </NavigationContainer>               
  );
};

