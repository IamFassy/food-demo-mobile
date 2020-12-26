//Library
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
//Components
import Navigation from './source/Navigation/Navigation';
import Colors from './source/Utils/Colors';


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
    flex: 1
  }
})
