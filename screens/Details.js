import React, {Component} from 'react';
import { View, Text } from 'react-native';

 class Details extends Component {

  static navigationOptions =
  {
     title: 'Details ',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ini Details</Text>
      </View>
    );
  }
}

export default Details