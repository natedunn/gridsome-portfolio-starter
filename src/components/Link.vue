<template>
  <a v-if="href" :href="href" :class="styles">
    <slot>{{ text }}</slot>
  </a>
  <g-link v-else :to="to" :class="styles">
    <slot>{{ text }}</slot>
  </g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    underline: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  },
  computed: {
    styles() {
      return this.underline ? "is-underlined" : null;
    }
  }
};
</script>

<style lang="postcss">
/* base */
a:not(.is-disabled) {
  color: var(--color-link);
  &:hover {
    color: var(--textColor-accent);
  }
}
/* is-underlined */
a:not(.is-disabled).is-underlined {
  text-decoration: underline solid var(--color-link-underline);
  text-underline-offset: var(--text-underline-offset);
  &:hover {
    text-decoration-color: var(--textColor-accent);
  }
}
</style>