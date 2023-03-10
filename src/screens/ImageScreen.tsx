import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

const ImageScreen = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{
            height: 200,
            width: 200,
          }}
          testID={'Image'}
        />
      </View>
      <NextnPrevious currentScreen={Stack.ImageScreen} />
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

export default ImageScreen;
