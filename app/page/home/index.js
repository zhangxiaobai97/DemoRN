import React from 'react';
import { View, Text } from 'native-base';
import UI from '../../component';

export default class Home extends React.Component {
  render() {
    return(
      <UI.Container title='主页'>
        <View>
          <Text>123</Text>
        </View>
      </UI.Container>
    );
  }
}