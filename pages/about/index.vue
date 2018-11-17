<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__hero mb-4 mb-md-5 mx-auto text-center`">
      <h1 class="display-4">{{ title }}</h1>
      <p class="lead">
        {{ intro }}
      </p>
    </div>

    <div :class="`${$options.name}__media-blocks mb-5`">
      <app-media-block
        v-for="mediaBlock in mediaBlocks"
        :key="mediaBlock.id"
        v-bind="mediaBlock"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { ABOUT } from '../../store/modules/landing-page';
import { GET_LANDING_PAGE } from '../../store/action-types';

import AppMediaBlock from '../../components/AppMediaBlock.vue';

export default {
  name: `About`,
  components: {
    AppMediaBlock,
  },
  computed: {
    ...mapState(`landingPage`, [
      `intro`,
      `mediaBlocks`,
      `title`,
    ]),
  },
  // The `fetch` method is called by
  // Nuxt.js before the component is
  // initialized. This is the right place
  // to fetch the data necessary for the
  // page to render.
  async fetch({ store }) {
    await store.dispatch(`landingPage/${GET_LANDING_PAGE}`, ABOUT);
  },
};
</script>

<style>
.About__hero {
  max-width: 36em;
}

.About__media-blocks > :not(:last-child) {
  margin-bottom: 4em;
}
</style>
