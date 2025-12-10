import { createSlice } from "@reduxjs/toolkit";
import type { Post } from "../../type/post";
import { blogsData } from "../../data/dataPost";
 
interface PostsState {
  blogs: Post[];
  recentPosts: Post[];
  currentPosts: Post[];
  currentPage: number;
  totalPages: number;
  selectedPost: Post | null;
}

const initialState: PostsState = {
  blogs: blogsData,
  recentPosts: [],
  currentPosts: [],
  currentPage: 1,
  totalPages:  Math.ceil(blogsData.length / 6),
  selectedPost: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fetchAllBlogs: (state, action) => {
      const { page , itemsPerPage} = action.payload;
      const indexOfLastItem = page * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      state.currentPosts = [...state.blogs].reverse().slice(indexOfFirstItem, indexOfLastItem);
      state.currentPage = page;
    },

    fetchRecentBlogs: (state, action) => {
      const { len, id } = action.payload;
      if(id)
        state.recentPosts = [...state.blogs].filter((item) => item.id != id).slice(0, len);
          else
        state.recentPosts = [...state.blogs].slice(0, len);
    },

    fetchBlogDetails: (state, action) => {
      const postId = action.payload.id;
      const blog = state.blogs.find((p) => p.id === postId);
      state.selectedPost = blog ?? null;
    },
  },
});

export const {fetchAllBlogs, fetchRecentBlogs, fetchBlogDetails} = blogSlice.actions;
export default blogSlice.reducer;