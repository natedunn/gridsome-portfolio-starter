<template>
  <Layout>
    <div class="container mx-auto py-12">
      <section class="text-center border-b border-primary pt-6 pb-20">
        <h1 class="text-4xl font-mono">Hi. I'm Nate Dunn.</h1>
        <h2 class="text-lg font-mono mt-4">
          I am a font-end web developer &amp; designer.
        </h2>
      </section>
      <div class="h-8"></div>
      <div class="flex flex-wrap recents">
        <section>
          <h2 class="font-mono text-2xl">Recent posts</h2>
          <ul>
            <li><Link to="/thing">Item here</Link></li>
            <li><Link to="/thing">Another One</Link></li>
            <li><Link to="/thing">One More</Link></li>
          </ul>
        </section>
        <section>
          <h2 class="font-mono text-2xl">
            Featured projects
          </h2>
          <ul>
            <li><Link to="/thing">Item here</Link></li>
            <li><Link to="/thing">Another One</Link></li>
            <li><Link to="/thing">One More</Link></li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style lang="postcss" scoped>
@screen md {
  .recents > section {
    width: calc(50% - theme("spacing.4"));
  }
}
</style>

