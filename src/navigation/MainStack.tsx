import React from 'react';
import TextScreen from '../screens/TextScreen';
import TextInputScreen from '../screens/TextInputScreen';
import ButtonScreen from '../screens/ButtonScreen';
import ImageScreen from '../screens/ImageScreen';
import FlatListScreen from '../screens/FlatListScreen';
import TextTranslationScreen from '../screens/TextTranslationScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  TextScreen: any;
  TextInputScreen: any;
  ButtonScreen: any;
  ImageScreen: any;
  TextTranslationScreen: any;
  FlatListScreen: any;
};

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'TextScreen'} component={TextScreen} />
        <StackNavigator.Screen name={'TextTranslationScreen'} component={TextTranslationScreen} />
        <StackNavigator.Screen name={'TextInputScreen'} component={TextInputScreen} />
        <StackNavigator.Screen name={'ButtonScreen'} component={ButtonScreen} />
        <StackNavigator.Screen name={'ImageScreen'} component={ImageScreen} />
        <StackNavigator.Screen name={'FlatListScreen'} component={FlatListScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
