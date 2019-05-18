import React, {Component} from 'react';
import { View, Text} from 'react-native';

class Profile extends Component {

static navigationOptions = {
  title: 'Profile Activity',
  };

    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Profile Activity Screen</Text>
        </View>
      );
    }
}

export default Profile