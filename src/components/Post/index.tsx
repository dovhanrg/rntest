import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostHeader} from './PostHeader';

const image = {
  uri: 'https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__',
};

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  postTextContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 26,
    paddingBottom: 35,
    maxHeight: 517,
    backgroundColor: '#fff',
  },
  postText: {
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 20,
    color: '#000',
  },
  postPublishingDateTime: {
    marginBottom: 15,
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 20.8,
    color: '#2E0505',
  },
});

const text = `Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.
At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms.
`;

export function Post() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <PostHeader headerCaption={'Discovery by scientists'} />
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.postTextContainer}>
            <ScrollView>
              <Text style={styles.postPublishingDateTime}>
                {'Sunday, 9 May 2021'}
              </Text>
              <Text style={styles.postText}>{text}</Text>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
