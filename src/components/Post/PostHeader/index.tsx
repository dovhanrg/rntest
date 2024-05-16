import {TopContainer} from '../../common/TopContainer';
import {ButtonWithIcon} from '../../common/ButtonWithIcon';
import {StyleSheet, Text, View} from 'react-native';
import {IconLeftSvg} from '../../common/IconLeftSvg';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  topContainer: {},
  textContainer: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    lineHeight: 23.44,
    fontWeight: '600',
    fontSize: 20,
  },
  button: {
    marginLeft: 30,
  },
});

type Props = {
  headerCaption: string;
};

export function PostHeader({headerCaption}: Props) {
  const navigation = useNavigation();
  return (
    <TopContainer customStyles={styles.topContainer}>
      <ButtonWithIcon
        customStyles={styles.button}
        onPress={() => navigation.goBack()}>
        <IconLeftSvg />
      </ButtonWithIcon>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{headerCaption}</Text>
      </View>
    </TopContainer>
  );
}
