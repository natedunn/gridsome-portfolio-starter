<template>
  <div class="flex justify-between items-center">
    <Link
      :to="previousPage"
      :underline="!showPreviousPage ? false : true"
      :class="{
        'text-disabled cursor-not-allowed is-disabled': !showPreviousPage
      }"
      >&larr; Prev</Link
    >
    <div>Page {{ currentPage }} of {{ totalPages }}</div>
    <Link
      :to="nextPage"
      :underline="!showPreviousPage ? false : true"
      :class="{
        'text-disabled cursor-not-allowed is-disabled': !showNextPage
      }"
      >Next &rarr;</Link
    >
  </div>
</template>

<script>
export default {
  props: ["base", "totalPages", "currentPage"],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1;
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages;
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`;
    }
  }
};
</script>
