import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>BuyIt</Text>
        </View>
    )
}

export default Header;


// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
