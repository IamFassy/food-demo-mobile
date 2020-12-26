//Library
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//Components
import Navigation from './source/Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
