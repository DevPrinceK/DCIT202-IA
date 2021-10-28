import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Vscroll from '../components/vscroll'

const Home = () => {
    return (
        <View style={styles.container}>
          {/* Header */}
            <Header />


           {/* Scrollable */}
            <ScrollView>
              <Vscroll 
                imgLink={require('../assets/images/itemOne.jpg')}
                imgText='Item One'
              />

              <Vscroll 
                imgLink={require('../assets/images/itemOne.jpg')}
                imgText='Item One'
              />

              <Vscroll 
                imgLink={require('../assets/images/itemOne.jpg')}
                imgText='Item One'
              />

              <Vscroll 
                imgLink={require('../assets/images/itemOne.jpg')}
                imgText='Item One'
              />
            </ScrollView>

        </View>
    )
};

export default Home;


// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
