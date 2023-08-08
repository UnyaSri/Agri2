import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceIndicatePage = () => {
  return (
    <View style={styles.container}>
      <Text>Price Indicate Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PriceIndicatePage;
