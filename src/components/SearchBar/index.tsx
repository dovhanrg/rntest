import {StyleSheet, TextInput} from 'react-native';
import {useState} from 'react';
import {IconPlusSvg} from '../common/IconPlusSvg';
import {IconSearchSvg} from '../common/IconSearchSvg';
import {ButtonWithIcon} from '../common/ButtonWithIcon';
import {TopContainer} from '../common/TopContainer';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../routes';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingLeft: 48,
    backgroundColor: 'rgba(164,169,174,0.31)',
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    justifyContent: 'space-between',
  },
});

export function SearchBar() {
  const [text, onChangeText] = useState('');
  const navigation = useNavigation();
  return (
    <TopContainer customStyles={styles.container}>
      <IconSearchSvg />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Search'}
      />
      <ButtonWithIcon
        onPress={() => navigation.navigate(APP_ROUTES.NewPost as never)}>
        <IconPlusSvg />
      </ButtonWithIcon>
    </TopContainer>
  );
}
