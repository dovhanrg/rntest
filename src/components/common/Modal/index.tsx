import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../Button';
import firestore from '@react-native-firebase/firestore';

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

type Props = {
  route: {params: {id: string}};
};

export function Modal({route}: Props) {
  const navigation = useNavigation();
  const {params} = route;
  const onDelete = () => {
    firestore()
      .collection('news')
      .doc(params.id)
      .delete()
      .finally(() => {
        navigation.goBack();
      });
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.pressableArea}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Button
          title={'Delete'}
          onPress={onDelete}
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
