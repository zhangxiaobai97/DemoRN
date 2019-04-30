import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity }  from 'react-native';
import { Container } from 'native-base';
import { Actions }  from 'react-native-router-flux';

export default class Index extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();

    this.timer = setTimeout(() => {
      Actions.tabs()
    }, 3000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const { opacity } = this.state;
    return (
      <Container>
        {/* <TouchableOpacity onPress={}> */}
          <Animated.Image style={{ ...styles.bgImg, opacity }} source={require('../../image/bg.jpg')} />
          <Text style={styles.bgText}>时间存在的意义就是任何事情都不可能立刻实现</Text>
        {/* </TouchableOpacity> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bgImg: {
    width : '100%',
    height: '100%'
  },
  bgText: {
    position: 'absolute',
    color:'lightyellow',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    top: '82%'
  }
});