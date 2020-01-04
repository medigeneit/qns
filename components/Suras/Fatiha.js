import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,FlatList } from 'react-native';

 

export default class Fatiha extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
     
      <View style={styles.container}>
       <FlatList
          data={[
            {id:1,arabic:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',english:'(Bismillāhi r-raḥmāni r-raḥīm)'},
            {id:2, arabic:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',english:'(Al ḥamdu lillāhi rabbi l-’ālamīn)'},
            {id:3,arabic:'الرَّحْمَنِ الرَّحِيمِ',english:'(Ar raḥmāni r-raḥīm)'},
            {id:4,arabic:' مَالِكِ يَوْمِ الدِّينِ',english:'(Māliki yawmi d-dīn)'},
          {id:5,arabic:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',english:'(Iyyāka na’budu wa iyyāka nasta’īn'},
            {id:6,arabic:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم',english:'(Ihdinā ṣ-ṣirāṭ al-mustaqīm)'},
            {id:7,arabic:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا          الضَّالِّينَ',english:'(Ṣirāṭ al lazi na an’amta ‘alayhim, ġayril maġḍūbi ‘alayhim walāḍ ḍāllīn)'},
             {id:1,arabic:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',english:'(Bismillāhi r-raḥmāni r-raḥīm)'},
            {id:2, arabic:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',english:'(Al ḥamdu lillāhi rabbi l-’ālamīn)'},
            {id:3,arabic:'الرَّحْمَنِ الرَّحِيمِ',english:'(Ar raḥmāni r-raḥīm)'},
            {id:4,arabic:' مَالِكِ يَوْمِ الدِّينِ',english:'(Māliki yawmi d-dīn)'},
          {id:5,arabic:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',english:'(Iyyāka na’budu wa iyyāka nasta’īn'},
            {id:6,arabic:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم',english:'(Ihdinā ṣ-ṣirāṭ al-mustaqīm)'},
            {id:7,arabic:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا          الضَّالِّينَ',english:'(Ṣirāṭ al lazi na an’amta ‘alayhim, ġayril maġḍūbi ‘alayhim walāḍ ḍāllīn)'},
             {id:1,arabic:'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',english:'(Bismillāhi r-raḥmāni r-raḥīm)'},
            {id:2, arabic:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',english:'(Al ḥamdu lillāhi rabbi l-’ālamīn)'},
            {id:3,arabic:'الرَّحْمَنِ الرَّحِيمِ',english:'(Ar raḥmāni r-raḥīm)'},
            {id:4,arabic:' مَالِكِ يَوْمِ الدِّينِ',english:'(Māliki yawmi d-dīn)'},
          {id:5,arabic:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',english:'(Iyyāka na’budu wa iyyāka nasta’īn'},
            {id:6,arabic:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم',english:'(Ihdinā ṣ-ṣirāṭ al-mustaqīm)'},
            {id:7,arabic:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا          الضَّالِّينَ',english:'(Ṣirāṭ al lazi na an’amta ‘alayhim, ġayril maġḍūbi ‘alayhim walāḍ ḍāllīn)'},
            
          ]}
          renderItem={({item}) => <Text onPress={() => this.props.navigation.navigate('Fatiha')} style={styles.item}>{item.id}{item.arabic}{item.english}</Text>}
        />

      </View>    
     );
  }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        
      
    },

    item:{
    margin: 29,
    marginTop: 5,
    paddingLeft:30,
    paddingTop:50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color:'#fff'

  },
})
