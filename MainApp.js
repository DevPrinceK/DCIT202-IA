import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Custom import
import Header from 'components/header'
import Home from 'pages/Homepage'






// Using ES6 (Arrow Functional Component)
const App = () => {
  // The master App components: Renders all other components
  return (
    <View>
      {/* Main App renders pages and implements navigations */}

      {/* Homepage */}
      <Home />

      
    
    
    </View>
  )
}


// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
