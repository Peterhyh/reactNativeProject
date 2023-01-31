import * as React from 'react';
import MainContainer from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <MainContainer />
    </NavigationContainer>
  );
}

export default App;