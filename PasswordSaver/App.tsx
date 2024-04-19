/**
 * 
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './src/router/Stackrouter';


const App = () => {
  
  return (
    <NavigationContainer>
      <StackRouter/>
    </NavigationContainer>
  );
}

export default App;
