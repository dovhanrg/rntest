import {StyleSheet, TouchableHighlight, ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

const styles = StyleSheet.create({
  button: {
    height: 47,
    width: 47,
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    // borderColor: '#f0f',
    // borderWidth: 1,
  },
});

type Props = PropsWithChildren<{
  onPress?: () => void;
  customStyles?: ViewStyle;
}>;

export function ButtonWithIcon({children, onPress, customStyles}: Props) {
  return (
    <TouchableHighlight style={[styles.button, customStyles]} onPress={onPress}>
      {children}
    </TouchableHighlight>
  );
}
