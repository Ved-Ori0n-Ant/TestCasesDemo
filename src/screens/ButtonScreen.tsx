import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

const ButtonScreen = () => {
  const [state, setState] = useState('');
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <Text>{state + ' Pressed'}</Text>
        <Button
          title={'Button 1'}
          testID={'Button_1'}
          onPress={() => {
            setState('Button 1');
            console.log('button 1');
          }}
        />
        <Button
          title={'Button 2'}
          testID={'Button_2'}
          onPress={() => {
            setState('Button 2');
            console.log('button 2');
          }}
        />
        <Button
          title={'Button 3'}
          testID={'Button_3'}
          onPress={() => {
            setState('Button 3');
            console.log('button 3');
          }}
        />
      </View>
      <NextnPrevious testID='np_btn' currentScreen={Stack.ButtonScreen} />
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

export default ButtonScreen;
