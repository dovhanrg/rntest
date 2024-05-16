import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 304,
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  title: {
    color: '#000',
    fontSize: 20,
    lineHeight: 23.44,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  text: {
    color: '#000',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 5,
  },
  time: {
    color: '#8E949A',
    fontSize: 12,
    lineHeight: 17,
  },
  textContainer: {
    padding: 18,
    backgroundColor: '#fff',
  },
});

type Props = {
  title: string;
  imageUrl?: string;
  text: string;
  time: string;
};

export function PostPreview({title, text, imageUrl, time}: Props) {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.container}
        onLongPress={() => navigation.navigate(APP_ROUTES.Modal as never)}
        onPress={() => navigation.navigate(APP_ROUTES.Post as never)}>
        <ImageBackground
          source={{uri: imageUrl}}
          resizeMode="cover"
          alt={title}
          style={styles.image}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {text}
            </Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}
