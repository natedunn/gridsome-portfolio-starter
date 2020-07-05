<template>
  <Layout>
    <div>
      <div class="h-12"></div>
      <section class="container">
        <h1 class="font-mono inline-block">
          <Heading el="div">hello</Heading>
          <div
            class="inline-block font-bold text-3xl md:text-4xl lg:text-4xl mt-3 pl-10"
          >
            <span class="inline-block w-full mb-3">Hi, my name is Nate.</span>
            <span>I design and develop things for the internet.</span>
          </div>
        </h1>
        <!-- <h2 class="text-lg font-mono mt-4">
          I am a font-end web developer &amp; designer.
        </h2> -->
      </section>
      <div class="h-12"></div>
      <div class="inline-block w-full border-b border-primary"></div>
      <div class="h-8"></div>
      <div class="container flex flex-wrap recents">
        <section>
          <h2 class="font-mono text-2xl">Recent posts</h2>
          <ul>
            <li><Link url="/thing">Item here</Link></li>
            <li><Link url="/thing">Another One</Link></li>
            <li><Link url="/thing">One More</Link></li>
          </ul>
        </section>
        <section>
          <h2 class="font-mono text-2xl">
            Featured projects
          </h2>
          <ul>
            <li><Link url="/thing">Item here</Link></li>
            <li><Link url="/thing">Another One</Link></li>
            <li><Link url="/thing">One More</Link></li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  components: {
    Heading
  },
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

