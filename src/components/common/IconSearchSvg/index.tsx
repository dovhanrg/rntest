import {Circle, Path, Svg} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 12,
  },
});

export function IconSearchSvg() {
  return (
    <View style={styles.wrapper}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Circle cx="11" cy="11" r="6" stroke="#8E949A" />
        <Path d="M20 20L17 17" stroke="#8E949A" stroke-linecap="round" />
      </Svg>
    </View>
  );
}
