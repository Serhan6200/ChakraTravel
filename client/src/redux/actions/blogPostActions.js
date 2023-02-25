import axios from "axios";

import {
  setBlogPost,
  setBlogPostByCategory,
  setError,
  setLoading,
  setUpdateButtonLoading,
  blogPostCreated,
  blogPostRemoved,
  blogPostUpdated,
} from "../slices/blogPost";

export const getBlogPostByCategory = (category, pageItems) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await axios.get(`/blog/post`);
    dispatch(setBlogPostByCategory(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected has occured. Please try again later"
      )
    );
  }
};
