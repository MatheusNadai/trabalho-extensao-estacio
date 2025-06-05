// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CapacitacaoScreen from './src/screens/CapacitacaoScreen';
import ConsumoConscienteScreen from './src/screens/ConsumoConscienteScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Beba com Consciência'}}
        />
        <Stack.Screen
          name="Capacitacao"
          component={CapacitacaoScreen}
          options={{title: 'Mão de Obra Especializada'}}
        />
        <Stack.Screen
          name="ConsumoConsciente"
          component={ConsumoConscienteScreen}
          options={{title: 'Consumo Consciente de Álcool'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
