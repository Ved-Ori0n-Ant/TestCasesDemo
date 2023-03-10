import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
  children: ReactNode;
  title: string;
  testID?: string;
}

const Section = ({title, children, testID}: Props) => {
  return (
    <View style={styles.container} testID={testID}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
    width: '80%',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'maroon',
  },
});