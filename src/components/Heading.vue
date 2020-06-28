<template>
  <component
    :is="el"
    class="font-mono inline-flex items-center font-bold rounded-lg text-3xl md:text-4xl text-accent"
  >
    >
    <slot></slot>
    <span class="blink text-2xl ml-2 mr-1">&block;</span>
  </component>
</template>

<script>
export default {
  props: {
    el: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.blink {
  animation: blink 1.2s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>