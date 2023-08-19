import { AXIOS_INSTANCE } from "../axios";

export const getPostsAPI = async (title = '', page=1, limit=10) => {
  try {
    const options = {
        url: `/posts?title=${title}&page=${page}&limit=${limit}`,
        method: 'GET',
    }
    const { data } = await AXIOS_INSTANCE(options)
    return data
  }
  catch (error) {
      throw error
  }
};

export const createPostAPI = async (content) => {
  const formData = new FormData();
  formData.append('image', content.image);
  formData.append('title', content.title);
  formData.append('subtitle', content.subtitle);
  formData.append('body', content.body);

  try {
    const options = {
      url: `/post`,
      method: 'POST',
      data : formData
    }
    const { data, status } = await AXIOS_INSTANCE(options)
    return {status, message:  data?.messsage}
  }
  catch (error) {
    return {status: 400 , message : error?.response?.data?.message || "Error"}
  }
};