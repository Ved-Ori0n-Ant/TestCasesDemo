import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

const TextScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <Text
          testID={'text'}
          style={{
            fontSize: 32,
            color: '#123456',
          }}>
          Hello Tests
        </Text>
      </View>
      <NextnPrevious currentScreen={Stack.TextScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  subBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TextScreen;