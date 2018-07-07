<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero mb-4 mb-md-5 mx-auto text-center`">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ intro }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { ABOUT } from '../../store/modules/landing-page';
import { GET_LANDING_PAGE } from '../../store/action-types';

export default {
  name: `About`,
  computed: {
    ...mapState(`landingPage`, [
      `intro`,
      `title`,
    ]),
  },
  // The `fetch` method is called by
  // Nuxt.js before the component is
  // initialized. This is the right place
  // to fetch the data necessary for the
  // page to render.
  async fetch({ store, route }) {
    await store.dispatch(`landingPage/${GET_LANDING_PAGE}`, ABOUT);
  },
};
</script>

<style>
.About__hero {
  max-width: 36em;
}
</style>
