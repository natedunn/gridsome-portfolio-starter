<template>
  <Layout>
    <div class="container mx-auto py-16">
      <div class="border-b border-primary pb-2 flex justify-between items-center">
        <h1 class="text-4xl font-bold font-mono">Writings</h1>
        <Link href="/rss.xml">RSS</Link>
      </div>
      <section class="mt-6">
        <div v-for="post in $page.posts.edges" :key="post.id" class="post border-primary border-b">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-mono">
              <Link class="inline-block py-4" :to="post.node.path">{{ post.node.title }}</Link>
            </h2>
            <div class="text-secondary">
              <span>{{ post.node.date }}</span>
            </div>
          </div>
        </div>
      </section>

      <pagination-posts
        class="mt-4"
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
  query Posts($page: Int) {
    posts: allPost(sortBy: "date", order: DESC, perPage: 6, page: $page)
      @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          date(format: "MMMM D, Y")
          summary
          path
        }
      }
    }
  }
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>

