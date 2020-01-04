import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, FlatList,SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Fatiha from "./Suras/Fatiha"

export default class Quran extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
     
      <View style={styles.container}>
      <View style={styles.con1}>
        <Text style={styles.paragraph}>
         Al-Quran(Free)
        </Text>
        
        
        
            <View style={styles.ol}>

            <View style={{flexDirection: 'row',backgroundColor:'#589958'}}>
               <View style={{width:'50%'}}>
                  <Text onPress={() => this.props.navigation.navigate('Fatiha')} style={styles.item}>Surah</Text>
              </View>
              <View style={{width:'50%'}}>
                <Text onPress={() => this.props.navigation.navigate('Fatiha')} style={styles.item}>chapter</Text>
              </View>
          </View>
            
           
              <FlatList
          data={[
            {id:1,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:2, arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:3,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:4,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:5,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:6,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:7,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:8,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:9,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:10,arabic:'Al Fatiha',english:'(Al Fatiha)'},
             {id:11,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:12, arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:13,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:14,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:15,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:16,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:17,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:18,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:19,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:20,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:21, arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:22,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:23,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:24,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:25,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:26,arabic:'Al Fatiha',english:'(Al Fatiha)'},
            {id:27,arabic:'Al Fatiha',english:'(Al Fatiha)'},
          
          ]}
          renderItem={({item}) =><View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width:'50%'}}>
          <Text onPress={() => this.props.navigation.navigate('Fatiha')} style={styles.item}>{item.id}. {item.arabic}</Text>
          </View>
          <View style={{width:'50%'}}>
          <Text onPress={() => this.props.navigation.navigate('Bukhari')} style={styles.item}>{item.english}</Text>
          </View>
          </View>}
        />
      
        
            </View>
        </View>
        
        
      </View>    
     );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    paddingTop:15,
    backgroundColor:'#589958',

  },
  paragraph: {
    margin: 29,
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'black'
  },
  ol:{
    
    margin: 29,
    marginTop: 0,
    backgroundColor:'#fff'

  },

  item:{
    margin: 5,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'black'

  },
 
  
});
