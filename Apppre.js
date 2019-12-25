import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        response: [],
        id: "",
        detail: "",
    };
}

componentDidMount() {
    axios.get('http://academicbd.com/qns_public/public/api/quran-ayat-by-chapter/1')
    .then((response) => {
        //as soon as the state is updated, component   will render using updated values
        this.setState({ response: response});
    });
}

 

render() {
    return (
        <View>
            {
                this.state.response.translations.map((translations, index) => {
                     (<Text>{person.id}</Text>);
                })
            }
        </View>
    );
}
}