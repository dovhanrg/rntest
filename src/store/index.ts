import {create} from 'zustand';

type TPost = {
  id: string;
  title: string;
  text: string;
  time: string;
  imageUrl?: string;
};

type State = {
  posts: TPost[];
};

type Actions = {
  setPosts: (posts: TPost[]) => void;
  deletePost: (postID: string) => void;
};

export const useStore = create<State & Actions>(set => ({
  posts: [],
  setPosts: posts => set(() => ({posts})),
  deletePost: postID =>
    set(state => ({posts: state.posts.filter(post => post.id !== postID)})),
}));
