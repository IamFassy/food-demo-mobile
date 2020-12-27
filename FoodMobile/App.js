//Library
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
//Components
import Navigation from './source/Navigation/Navigation';
import Colors from './source/Utils/Colors';
import { Provider } from 'react-redux';
import { store } from './source/ReduxClasses/Store/ConfigureStore';

library.add(faPlus, faMinus, faShoppingCart);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
          <Navigation />
        </SafeAreaView>
      </Provider>

    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
