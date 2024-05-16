import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostHeader} from './PostHeader';
import dayjs from 'dayjs';
import {PostProps} from '../../routes';

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

export function Post({route}: PostProps) {
  const {
    params: {post},
  } = route;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <PostHeader headerCaption={post.title} />
        <ImageBackground source={{uri: post.imageUrl}} style={styles.image}>
          <View style={styles.postTextContainer}>
            <ScrollView>
              <Text style={styles.postPublishingDateTime}>
                {dayjs(post.createdAt).format('dddd, D MMMM YYYY')}
              </Text>
              <Text style={styles.postText}>{post.text}</Text>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
