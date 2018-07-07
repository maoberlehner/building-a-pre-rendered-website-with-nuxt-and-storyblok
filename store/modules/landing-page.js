import { GET_LANDING_PAGE } from '../action-types';
import { SET_LANDING_PAGE } from '../mutation-types';
import api from '../../utils/api';

export const ABOUT = `about`;
export const HOME = `home`;

function adaptMediaBlock({
  image,
  // eslint-disable-next-line camelcase
  image_position,
  text,
  title,
  _uid,
}) {
  return {
    id: _uid,
    image: {
      position: image_position,
      url: image,
    },
    text,
    title,
  };
}

function adaptTeaser({
  image,
  link,
  text,
  title,
  _uid,
}) {
  return {
    id: _uid,
    image: {
      url: image,
    },
    link: link.url,
    text,
    title,
  };
}

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
        mediaBlocks: data.media_blocks.map(x => adaptMediaBlock(x)),
        teasers: data.teasers.map(x => adaptTeaser(x)),
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
    mediaBlocks: [],
    teasers: [],
    title: ``,
  }),
};
