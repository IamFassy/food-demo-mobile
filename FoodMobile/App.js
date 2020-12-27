//Library
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
//Components
import Navigation from './source/Navigation/Navigation';
import Colors from './source/Utils/Colors';

library.add(faPlus, faMinus, faShoppingCart);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <Navigation />
      </SafeAreaView>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})
