import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,FlatList} from 'react-native';



export default class Fatiha extends React.Component {
static navigationOptions = {
footer: null
};
render() {
return (
<View style={styles.container}>
<Text style={styles.txt}>Al-Fatihah (The Opener)</Text>
<FlatList
data={[
{id:1,
arabic:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
english:'In the Name of Allah—the Most Compassionate, Most Merciful.'
},
{id:2,
arabic:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
english:'(All praise is for Allah—Lord of all worlds,)'
},
{id:3,arabic:'الرَّحْمَنِ الرَّحِيمِ',english:'(the Most Compassionate, Most Merciful,)'},
{id:4,arabic:' مَالِكِ يَوْمِ الدِّينِ',english:'(Master of the Day of Judgment.)'},
{id:5,arabic:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',english:'(You ˹alone˺ we worship and You ˹alone˺ we ask for help.'},
{id:6,arabic:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم',english:'(Guide us along the Straight Path,)'},
{id:7,arabic:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',english:'(the Path of those You have blessed—not those You are displeased with, or those who are astray.)'},
]}

renderItem={({item}) =>
<View style={styles.ayatlist}>
<View style={styles.item}>
<Text style={styles.ayatarabic}>{item.arabic} .{item.id}</Text>
</View>
<View  style={styles.item}>
<Text>{item.english}</Text>
</View>
</View>
}
/>

</View>
);
}
}

const styles = StyleSheet.create({

container:{
  paddingTop:10,
backgroundColor:'#F3F3F3'
},


image:{
width:50,
height:50
},

item:{

fontSize: 15,
fontWeight: 'bold',
textAlign: 'center',
color:'black'

},

ayatarabic:{

  paddingBottom: 10,
 
  
  },



ayatlist:{

  padding:10,
  paddingBottom:10,
  
  },

txt:{
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',
color:'black'

}
})