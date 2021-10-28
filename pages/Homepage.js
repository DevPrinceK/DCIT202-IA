import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Vscroll from '../components/vscroll', 

const Home = () => {
    return (
        <View style={styles.container}>
          {/* Header */}
            <Header />
            {/* Header ends here! */}


           {/* Scrollable */}
            <ScrollView horizontal={true} >
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
            {/* Scrollable ends here! */}



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
