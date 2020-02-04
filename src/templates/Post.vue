<template>
  <Layout>
    <div class="container mx-auto my-16">
      <h1 class="text-4xl font-bold font-mono">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm tags">
        <span class="inline-block mr-4">Filed under:</span>
        <Link :to="tag.path" v-for="tag in $page.post.tags" :key="tag.id">{{ tag.title }}</Link>
      </div>
      <div class="mb-8">
        <Link to="/blog" class="font-bold uppercase">Back to Blog</Link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      title
      date(format: "MMMM D, Y")
      content
      tags {
        title
        path
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style lang="postcss">
.tags > a:not(:last-of-type) {
  @apply mr-4;
}
</style>
<style src="../css/github-markdown.css" />