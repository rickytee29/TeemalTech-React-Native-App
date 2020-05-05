import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class ActionBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'TeemalTech',
      subTitle: 'design, animate, innovate...',
    };
  }
  render() {
    return (
      <View style={styles.ActionBar}>
        <Image style={styles.tinyLogo} source={require('./img/logo.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ActionBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',

    marginTop: 0,
    zIndex: 10,
    width: '100%',
    backgroundColor: '#c00',
    height: 50,
    position: 'absolute',
  },
  tinyLogo: {
    height: 18,
    resizeMode: 'contain',
  },
  appName: {
    color: 'white',
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 26,
    fontFamily: 'impact',
  },
});
