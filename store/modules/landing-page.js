import { GET_LANDING_PAGE } from '../action-types';
import { SET_LANDING_PAGE } from '../mutation-types';
import api from '../../utils/api';

export const ABOUT = `about`;
export const HOME = `home`;

export default {
  namespaced: true,
  actions: {
    async [GET_LANDING_PAGE]({ commit }, slug) {
      const response = await api.get(`cdn/stories/${slug}`);
      const { story } = response.data;
      const id = story.uuid;
      const data = story.content;

      commit(SET_LANDING_PAGE, {
        id,
        intro: data.intro,
        title: data.title,
      });
    },
  },
  mutations: {
    [SET_LANDING_PAGE](state, landingPage) {
      Object.assign(state, landingPage);
    },
  },
  state: () => ({
    id: null,
    intro: ``,
    title: ``,
  }),
};
