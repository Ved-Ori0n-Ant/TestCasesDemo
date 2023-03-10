import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../navigation/MainStack';
import {StackActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type props = {
  currentScreen: Stack;
  testID?: string;
};
const SCREENS = [
  'TextScreen',
  'TextTranslationScreen',
  'TextInputScreen',
  'ButtonScreen',
  'ImageScreen',
  'FlatListScreen',
];
export enum Stack {
    'TextScreen',
    'TextTranslationScreen',
    'TextInputScreen',
    'ButtonScreen',
    'ImageScreen',
    'FlatListScreen',
}

const NextnPrevious: React.FC<props> = ({currentScreen, testID}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressNext = () => {
    navigation.dispatch(StackActions.replace(SCREENS[currentScreen + 1]));
  };
  const onPressPrevious = () => {
    navigation.dispatch(StackActions.replace(SCREENS[currentScreen - 1]));
  };
  return (
    <View style={styles.body} testID={testID || 'np_btn'}>
      <Button
        title={'Previous'}
        testID={'Previous_btn'}
        onPress={onPressPrevious}
        disabled={currentScreen <= 0}
      />
      <Button
        title={'Next'}
        testID={'Next_btn'}
        onPress={onPressNext}
        disabled={currentScreen >= SCREENS.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default NextnPrevious;
