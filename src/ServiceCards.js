import React from 'react';
import {View, StyleSheet} from 'react-native';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
  return (
    <View style={styles.section}>
      <View style={styles.container}>
        <ServiceCard style={styles.card} index={0} />
        <ServiceCard style={styles.card} index={1} />
      </View>
      <View style={styles.container}>
        <ServiceCard style={styles.card} index={2} />
        <ServiceCard style={styles.card} index={3} />
      </View>
      <View style={styles.container}>
        <ServiceCard style={styles.card} index={4} />
        <ServiceCard style={styles.card} index={5} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  section: {
    marginTop: 350,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    width: '50%',
    height: '50%',
  },
});

export default ServiceCards;
