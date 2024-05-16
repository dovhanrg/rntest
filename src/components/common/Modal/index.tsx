import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../Button';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 35,
    paddingBottom: 35,
    paddingTop: 50,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  buttonSeparator: {
    height: 10,
  },
  buttonDelete: {
    backgroundColor: '#FF6363',
  },
  buttonClose: {
    backgroundColor: '#456EFE',
  },
  pressableArea: {
    flex: 1,
  },
});

export function Modal() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.pressableArea}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Button
          title={'Delete'}
          onPress={() => navigation.goBack()}
          customStyles={styles.buttonDelete}
        />
        <View style={styles.buttonSeparator} />
        <Button
          title={'Close'}
          onPress={() => navigation.goBack()}
          customStyles={styles.buttonClose}
        />
      </View>
    </View>
  );
}
