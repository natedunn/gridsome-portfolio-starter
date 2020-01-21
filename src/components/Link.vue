<template>
  <a v-if="href || external" :href="href">
    <slot>{{ text }}</slot>
  </a>
  <g-link v-else :to="to">
    <slot>{{ text }}</slot>
  </g-link>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      required: true,
      default: false
    },
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  }
}
</script>