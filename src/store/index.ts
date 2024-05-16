import {create} from 'zustand';

export type TPost = {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  imageUrl?: string;
  link?: string;
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
