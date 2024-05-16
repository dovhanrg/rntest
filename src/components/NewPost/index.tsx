import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {PostHeader} from '../Post/PostHeader';
import {Button} from '../common/Button';
import React, {useState} from 'react';
import {TPost} from '../../store';
import firestore from '@react-native-firebase/firestore';
import dayjs from 'dayjs';

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 50,
  },
  input: {
    backgroundColor: 'rgba(164, 169, 174, 0.15)',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 24,
    paddingHorizontal: 30,
    paddingTop: 18,
    paddingBottom: 17,
    borderRadius: 10,
    marginBottom: 25,
  },
  textArea: {
    maxHeight: 155,
  },
  formContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  button: {
    backgroundColor: '#456EFE',
  },
  separator: {flex: 1},
});

type Props = {
  navigation: any;
};

export function NewPost({navigation}: Props) {
  const [post, setPost] = useState<TPost>({
    createdAt: '',
    id: '',
    imageUrl: '',
    text: '',
    title: '',
  });
  const handleUpdatePost = (field: keyof TPost, text: string) => {
    setPost(prevState => {
      return {...prevState, [field]: text};
    });
  };
  const handlePublic = () => {
    firestore()
      .collection('news')
      .add({
        ...post,
        createdAt: dayjs().format(),
      })
      .finally(() => {
        navigation.goBack();
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <PostHeader headerCaption={'New post'} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Title*'}
            onChangeText={text => handleUpdatePost('title', text)}
          />
          <TextInput
            style={styles.input}
            placeholder={'Image url'}
            onChangeText={text => handleUpdatePost('imageUrl', text)}
          />
          <TextInput style={styles.input} placeholder={'Link'} />
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
            textAlignVertical={'top'}
            placeholder={'Type  your message here..*'}
            onChangeText={text => handleUpdatePost('text', text)}
          />
          <View style={styles.separator} />
          <Button
            title={'Public'}
            onPress={handlePublic}
            customStyles={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
