import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {store} from './src/redux/store';
import {Provider as StoreProvider} from 'react-redux';

import MainNav from './src/navigation/MainNav';

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainNav />
    </StoreProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
