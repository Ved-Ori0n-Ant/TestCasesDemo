import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';

const TextInputScreen = () => {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <TextInput
          placeholder={'Name'}
          testID={'TextInput'}
          value={text}
          onChangeText={(txt: string) => setText(txt)}
          style={{
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            padding: 16,
            fontSize: 28,
            marginHorizontal: 8,
          }}
        />
      </View>
      <View style={styles.text}>
      <Text testID='text'>{`Name is: ${text}`}</Text>
      </View>
      <NextnPrevious currentScreen={Stack.TextInputScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  subBody: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 250,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TextInputScreen;
