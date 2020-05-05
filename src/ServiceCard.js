import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTextTitle: [
        'Software Development',
        'Advertising',
        'Consultancy',
        'Web Development',
        'Professional Design',
        '2D and 3D Animation',
      ],
      cardTextBody: [
        'We provide cross-platform, cutting edge, software solutions at an affordable rate.',
        "Communicate your Company's uniqueness by advertising WITHIN our mobile/web games and apps with integrated Social Media capabilities.",
        'We work in partnership with our clients, to overcome problems and improve the structure and efficiency of their IT systems.',
        "From simple responsive, SEO optimized one-page portfolio sites to complex database-driven Content Management Systems, we've got you covered.",
        "If you can conceive and envision it, we can create it. Convey your brand's ethos through original works of art done by our dedicated team of professional designers.",
        'Perfect for creating that "IT" factor, animations can help to keep your users excited about your game/app/website while subliminally communicating your brand message.',
      ],
      images: [
        require('./img/softwaredev.png'),
        require('./img/advertising.png'),
        require('./img/consultant.png'),
        require('./img/websiteicon.png'),
        require('./img/design.png'),
        require('./img/animation.png'),
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View elevation={5} style={styles.cardMain}>
          <View style={styles.imageBox}>
            <Image
              style={styles.icon}
              source={this.state.images[this.props.index]}
            />
          </View>
          <Text style={styles.txtTitle}>
            {this.state.cardTextTitle[this.props.index]}
            {'\n'}
            <Text style={styles.txtBody}>
              {this.state.cardTextBody[this.props.index]}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
  },

  cardMain: {
    backgroundColor: '#ffe',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
    height: 250,
  },
  imageBox: {
    borderRadius: 5,
    backgroundColor: '#c00',
    padding: 15,
    width: 75,
    height: 75,
  },
  icon: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  txtTitle: {
    fontSize: 16,
    color: '#c00',
    textAlign: 'center',
  },
  txtBody: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
});
