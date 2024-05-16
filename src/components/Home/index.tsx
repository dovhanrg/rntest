import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {SearchBar} from '../SearchBar';
import React, {useEffect, useState} from 'react';
import {MainBackgroundSvg} from '../common/MainBackgroundSvg/';
import {PostPreview} from '../PostPreview';
import {TPost} from '../../store';
import firestore from '@react-native-firebase/firestore';

function onError(error: any) {
  console.error(error);
}

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  emptyListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export function Home() {
  const [postFilter, setPostFilter] = useState('');
  const [posts, setPosts] = useState<TPost[]>([]);

  const handleFilterInput = (input: string) => {
    setPostFilter(input);
  };

  useEffect(() => {
    firestore()
      .collection<TPost>('news')
      .get()
      .then(querySnapshot => {
        setPosts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
      });
    firestore()
      .collection<TPost>('news')
      .onSnapshot(function (querySnapshot) {
        setPosts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
      }, onError);
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <SearchBar onChangeText={handleFilterInput} text={postFilter} />
        <FlatList
          contentContainerStyle={
            !posts.length ||
            !posts.some(
              post =>
                post.title.toLowerCase().indexOf(postFilter.toLowerCase()) > -1,
            )
              ? styles.emptyListContainer
              : {}
          }
          data={
            postFilter
              ? posts.filter(
                  post =>
                    post.title.toLowerCase().indexOf(postFilter.toLowerCase()) >
                    -1,
                )
              : posts
          }
          renderItem={({item}) => <PostPreview key={item.id} post={item} />}
          keyExtractor={item => item.id}
          ListEmptyComponent={<MainBackgroundSvg />}
        />
      </View>
    </SafeAreaView>
  );
}
