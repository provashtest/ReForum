import axios from 'axios';

/**
 * single discussion apis
 */
export const fetchSingleDiscussion = (discussion_slug) => {
  return axios.get(`/api/discussion/${discussion_slug}`);
};

export const toggleFavoriteApi = (discussion_id) => {
  return axios.put(`/api/discussion/toggleFavorite/${discussion_id}`);
};
