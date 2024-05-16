import {StyleSheet, View, ViewStyle} from 'react-native';
import {PropsWithChildren} from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
});

type Props = PropsWithChildren<{
  customStyles?: ViewStyle;
}>;

export function TopContainer({children, customStyles}: Props) {
  return <View style={[styles.container, customStyles]}>{children}</View>;
}
