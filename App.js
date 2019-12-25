import * as React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    chapters: []
  }

  componentDidMount() {
    axios.get(`http://academicbd.com/qns_public/public/api/quran`)
      .then(res => {
        const chapters = res.data.chapters;
        this.setState({ chapters });
      })
  }


  
  

  render() {
    return (
      <View>
            {
                this.state.chapters.map((x) => {
                    return (<Text>{x.name}</Text>);
                })
            }
        </View>
    )
  }
}