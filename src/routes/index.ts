import {TPost} from '../store';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const APP_ROUTES = {
  NewPost: 'NewPost',
  Modal: 'Modal',
  Home: 'Home',
  Post: 'Post',
} as const;

export type RootStackParamList = {
  NewPost: undefined;
  Modal: {id: string};
  Home: undefined;
  Post: {post: TPost};
};

export type ModalProps = NativeStackScreenProps<RootStackParamList, 'Modal'>;
export type PostProps = NativeStackScreenProps<RootStackParamList, 'Post'>;
