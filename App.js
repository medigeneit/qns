import React, { Component } from 'react';
import { Text, View, StyleSheet,Button,Image,TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Quran from "./components/Quran"
import Bukhari from "./components/Bukhari"
import Fatiha from "./components/Suras/Fatiha"

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <TouchableOpacity
            style={styles.userBtn}
          onPress={() => this.props.navigation.navigate('Quran')}>
              <Image
       style={styles.image} 
       source={require('./assets/Quran.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Compass.png')} />
          </TouchableOpacity>
          </View>
        
          <View style={styles.container2}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Bukhari')}>
              <Image
       style={styles.image} 
       source={require('./assets/Bukhari.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Muslim.png')} />
          </TouchableOpacity>
          </View>
       
          <View style={styles.container3}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Tirmidhi.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Nasai.png')} />
          </TouchableOpacity>
          </View>

          <View style={styles.container4}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Dawood.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('Details')}>
              <Image
       style={styles.image} 
       source={require('./assets/Majah.png')} />
          </TouchableOpacity>
          </View>
      </View>
      
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home:HomeScreen,
    Quran:Quran,
    Bukhari:Bukhari,
    Fatiha:Fatiha
  },
  {
    InitialRouteName: 'Home',
  }
);

const Appcontainer = createAppContainer(RootStack);
type Props = {};
export default class App extends Component<props> {
  render() {
    return <Appcontainer />;
  }
}


const styles = StyleSheet.create({
  image:{
    width:90,
    height:80,
    justifyContent:'space-between'
    },

    container:{
      flex:1,
      backgroundColor:'#616cbf',
      justifyContent:'center',
      paddingLeft:20
    },
    
    container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20
    
  },
 container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20
    
  },
   container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20
    
  },
  
   container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20
    
  },
  userBtn: {
    padding: 30,
    width: '48%',
    borderRadius: 20,
    
  },
  
});
