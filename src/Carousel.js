import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Carousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      images: [
        require('./img/1.jpg'),
        require('./img/2.jpg'),
        require('./img/3.jpg'),
      ],
    };
  }
  setSelectedIndex = event => {
    //get width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //console.log('VIEW SIZE: ' + viewSize);
    const contentOffset = event.nativeEvent.contentOffset.x;
    //console.log('CONTENT OFFSET: ' + contentOffset);
    //get current position of the scrollView
    const selectedIndex = Math.floor(contentOffset / viewSize);
    //console.log('selectedIndex: ' + selectedIndex);
    this.setState({selectedIndex});
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.state.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        },
      );
    }, 3000);
  };
  render() {
    const images = this.state.images;
    const {selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          <ImageBackground style={styles.backgroundImage} source={images[0]}>
            <Text style={styles.coverTextTitle}>
              WELCOME TO{'\n'}
              <Text style={styles.coverTextTitleRed}>TEEMALTECH{'\n'}</Text>
              <Text style={styles.coverText}>GENIUS AT PLAY</Text>
            </Text>
          </ImageBackground>
          <ImageBackground style={styles.backgroundImage} source={images[1]}>
            <Text style={styles.coverTextTitle}>
              ON{'\n'}
              THE LEADING EDGE OF{'\n'}
              <Text style={styles.coverTextTitleRed}>TECHNOLOGY{'\n'}</Text>
              <Text style={styles.coverText}>
                WHERE CREATIVITY MEETS INNOVATION
              </Text>
            </Text>
          </ImageBackground>
          <ImageBackground style={styles.backgroundImage} source={images[2]}>
            <Text style={styles.coverTextTitle}>
              MAKE YOUR IDEA A{'\n'}
              <Text style={styles.coverTextTitleRed}>REALITY{'\n'}</Text>
              <Text style={styles.coverText}>
                SOFTWARE - GAMES - CONSULTANCY
              </Text>
            </Text>
          </ImageBackground>
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              key={image}
              style={[
                styles.whiteCirle,
                {opacity: i === selectedIndex ? 1 : 0.5},
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCirle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: DEVICE_WIDTH,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: 350,
    position: 'absolute',
    zIndex: 9,
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  coverTextTitle: {
    fontFamily: 'Arial Black, sans-serif',
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    paddingTop: 90,
    textShadowColor: 'rgba(0, 0, 0, .75)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
  coverTextTitleRed: {
    padding: 5,
    color: 'red',
    fontSize: 46,
  },
  coverText: {
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
  },
});
