import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 35,
    textAlign: 'center',
    color: '#fff',
  },
});

type Props = {
  onPress: () => void;
  customStyles: ViewStyle;
  title: string;
};

export function Button({onPress, customStyles, title}: Props) {
  return (
    <Pressable style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
}
