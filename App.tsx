import React from 'react';
import AppNavigator from '../Awee_shop/src/Navigations/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
