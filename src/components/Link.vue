<template>
  <a v-if="href" :href="href">
    <slot>{{ text }}</slot>
  </a>
  <g-link v-else :to="to">
    <slot>{{ text }}</slot>
  </g-link>
</template>

<script>
export default {
  props: {
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