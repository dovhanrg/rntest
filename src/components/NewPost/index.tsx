import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {PostHeader} from '../Post/PostHeader';
import {Button} from '../common/Button';
import React from 'react';

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
    lineHeight: 24.82,
    paddingHorizontal: 30,
    paddingTop: 18,
    paddingBottom: 17,
    borderRadius: 10,
    marginBottom: 25,
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

export function NewPost() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <PostHeader headerCaption={'New post'} />
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder={'Title*'} />
          <TextInput style={styles.input} placeholder={'Image url'} />
          <TextInput style={styles.input} placeholder={'Link'} />
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            textAlignVertical={'top'}
            placeholder={'Type  your message here..*'}
          />
          <View style={styles.separator} />
          <Button
            title={'Public'}
            onPress={() => {}}
            customStyles={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
