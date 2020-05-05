import React, {Component} from 'react';
import {ScrollView, View, Dimensions} from 'react-native';
import ActionBar from './src/ActionBar';
import Carousel from './src/Carousel';
import ServiceCards from './src/ServiceCards';
const DEVICE_HEIGHT = Dimensions.get('window').height;
export default class App extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }
  setSelectedIndex = event => {
    //get width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    //console.log('VIEW SIZE: ' + viewSize);
    const contentOffset = event.nativeEvent.contentOffset.y;
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
          selectedIndex: prev.selectedIndex === 2 ? 0 : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 260 * this.state.selectedIndex,
            x: 0,
          });
        },
      );
    }, 3000);
  };
  render() {
    return (
      <View>
        <ActionBar />
        <ScrollView
          style={styles.mainView}
          ref={this.scrollRef}
          onMomentumScrollEnd={this.setSelectedIndex}>
          <ServiceCards />
        </ScrollView>
        <Carousel />
      </View>
    );
  }
}

const styles = {
  mainView: {
    padding: 0,
    marginTop: 50,
  },
  textStyle: {
    fontSize: 36,
  },
};
