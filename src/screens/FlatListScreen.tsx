import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NextnPrevious, {Stack} from '../components/NextnPrevious';
import { Data } from './Data'

const FlatListScreen = () => {
  const ListItems = ({
    value,
    index,
  }: {
    value: {name: string; id: number};
    index: number;
  }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(value.name);
      }}
      key={index.toString()}
      testID={'FlatList-Item'}
      style={{
        paddingVertical: 16,
        padding: 8,
        borderRadius: 12,
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text testID={'FlatList-ItemName'}>{value.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.subBody}>
        <FlatList
          testID={'FlatList'}
          data={Data}
          renderItem={({item, index}) => (
            <ListItems value={item} index={index} />
          )}
        />
      </View>
      <NextnPrevious currentScreen={Stack.FlatListScreen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  subBody: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlatListScreen;
