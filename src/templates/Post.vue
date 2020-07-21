<template>
  <Layout>
    <div class="max-w-4xl mx-auto py-16">
      <div class="border-b border-primary">
        <h1 class="text-4xl font-bold font-mono">{{ $page.post.title }}</h1>
        <div class="flex items-center mt-2 mb-4">
          <span class="inline-block mr-3 text-xl text-gray-600">{{
            dateFormat
          }}</span>
          <div v-if="outOfDate">
            <span
              class="text-xs py-1 px-2 rounded bg-accent uppercase font-bold text-primary-invert"
              >1+ Year(s) Old</span
            >
          </div>
        </div>
      </div>

      <div class="h-12"></div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="flex mb-8 text-sm tags">
        <span class="inline-block mr-4">Filed under:</span>
        <Link v-for="tag in $page.post.tags" :key="tag.id" :url="tag.path">{{
          tag.title
        }}</Link>
      </div>
      <div class="mb-8">
        <Link url="/posts" class="font-bold uppercase">Back to all posts</Link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: post(path: $path) {
      title
      cover
      date
      content
      tags {
        title
        path
      }
    }
  }
</page-query>

<script>
import moment from "moment";
import slugify from "@sindresorhus/slugify";
import config from "@/.temp/config";
export default {
  metaInfo() {
    return {
      title: this.pageTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post)
        },
        // Open Graph
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post)
        },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD")
        },
        { property: "og:image", content: this.ogImageUrl },
        { property: "fb:app_id", content: "null" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post)
        },
        { name: "twitter:site", content: "@cossssmin" },
        { name: "twitter:creator", content: "@cossssmin" },
        { name: "twitter:image", content: this.ogImageUrl }
      ]
    };
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }
      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }
  },
  computed: {
    config() {
      return config;
    },
    ogImageUrl() {
      return this.$page.post.cover
        ? this.config.siteUrl + this.$page.post.cover.src
        : this.config.siteUrl +
            require(`!!assets-loader!@/images/default-cover.jpg`).src;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.path;
      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/post/${slugify(this.$page.post.title)}/`;
    },
    pageTitle() {
      return this.$page.post.title ? this.$page.post.title : null;
    },
    outOfDate() {
      const current = moment();
      const date = moment(this.$page.post.date, "YYYY-MM-DD");
      return current.diff(date, "days") > 365 ? true : false;
    },
    dateFormat() {
      return moment(this.$page.post.date, "YYYY-MM-DD").format("MMMM D, Y");
    }
  }
};
</script>

<style lang="postcss">
.tags > a:not(:last-of-type) {
  @apply mr-4;
}
</style>
<style src="../css/github-markdown.css" />