import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {SearchBar} from '../SearchBar';
import React, {useEffect} from 'react';
import {MainBackgroundSvg} from '../common/MainBackgroundSvg/';
import {PostPreview} from '../PostPreview';
import {useStore} from '../../store';

const text = `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
`;
const image =
  'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    text,
    time: Date(),
    imageUrl: image,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    text,
    time: Date(),
    imageUrl: image,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    text,
    time: Date(),
    imageUrl: image,
  },
];

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
});

export function Home() {
  const {setPosts, posts} = useStore();
  useEffect(() => {
    setTimeout(() => {
      setPosts(DATA);
    }, 1500);
  }, [setPosts]);
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <SearchBar />
        {posts.length > 0 ? (
          <FlatList
            data={posts}
            renderItem={({item}) => <PostPreview {...item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <MainBackgroundSvg />
        )}
      </View>
    </SafeAreaView>
  );
}
