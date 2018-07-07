import Vuex from 'vuex';

import landingPage from './modules/landing-page';

export default () => new Vuex.Store({
  modules: {
    landingPage,
  },
});
