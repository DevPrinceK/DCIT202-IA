import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const Vscroll = ({imgLink, imgText}) => {
    return (
            <View style={styles.scrollStyle}>
                <View style={styles.inImage}>
                    <Image source={require({imgLink})} style={styles.displayImage} />
                </View>

                <View style={styles.intext}>
                    <Text>{imgText}</Text> 
                </View>
            </View>
    )
}

export default Vscroll;


// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  scrollStyle: {
      height: 130, 
      width: 130,
      marginLeft: 20,
      borderWidth: 0.5,
      borderColor: "#ddddee"
  },
  intext: {
      flex: 1,
      paddingLeft:10,
      paddingTop:10,
  },
  inImage: {
      flex: 2,
  },
  displayImage: {
      flex: 1,
      height: null,
      width: null,
      resizeMode: 'cover',
  },
});
