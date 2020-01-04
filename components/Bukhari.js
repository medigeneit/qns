import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Bukhari extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.container1}>
        <Text style={styles.paragraph}>
          Bukhari
        </Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection:'row'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container1:{
    flex:1,
    backgroundColor:'red'
  
  }
});
