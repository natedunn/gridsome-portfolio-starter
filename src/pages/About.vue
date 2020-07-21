<template>
  <Layout>
    <div class="max-w-4xl mx-auto py-12">
      <Heading el="h1">about</Heading>
      <div class="h-6"></div>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mr-12">
          <g-image src="@/images/me-large-bw.jpg" class="w-full mt-2 sticky" />
        </div>
        <div class="md:w-1/2">
          <section>
            <p>
              I'm Nate Dunn, a
              <span class="font-bold">front-end web developer and designer</span
              >, originally from Phoenix, Arizona but now based in
              <span class="font-bold">Mexico City 🇲🇽</span>.
            </p>
            <p>
              I started building for the web in 2012 (even earlier if you count
              editing Myspace codes). Today I work with a wide range of stacks
              including
              <span class="font-bold">Wordpress</span>,
              <span class="font-bold">Vue</span>,
              <span class="font-bold">Laravel</span>,
              <span class="font-bold">React</span>, and more. Additionally, I've
              spent a lot of time working with and authoring CSS frameworks.
            </p>
            <p>
              I am a avid learner, I never settle, and I am constantly
              experimenting. But most of all, I'm super passionate about how I
              can help make the web a more
              <span class="font-bold">beautiful</span>,
              <span class="font-bold">performant</span>, and
              <span class="font-bold">accessible</span> experience for everyone.
            </p>
            <p>
              If you would like to get in touch please try my email or
              <Link url="https://twitter.com/natedunn">Twitter</Link>. Thanks
              for stopping by. 👋🏻
            </p>
          </section>
        </div>
      </div>
      <div class="h-24"></div>
    </div>
  </Layout>
</template>

<script>
import Heading from "@/components/Heading";
export default {
  metaInfo: {
    title: "About"
  },
  components: {
    Heading
  }
};
</script>

<style lang="postcss" scoped>
p {
  @apply text-xl mb-4 leading-relaxed;
}
.g-image {
  top: 1rem;
}
</style>