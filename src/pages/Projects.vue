<template>
  <Layout>
    <div class="container mx-auto py-16">
      <h1>Current projects</h1>
      <section>
        <ul>
          <li>
            <Link href="https://useproper.dev">Proper</Link>
          </li>
          <li>
            <Link href="https://weirdweb.dev">Weird Web</Link>
          </li>
          <li>
            <Link href="https://radlist.io">Rad</Link>
          </li>
          <li>
            <Link href="https://natedunn.net">This site</Link>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
</template>

<script>
import Link from '@/components/Link'
export default {
  components: {
    Link
  }
}
</script>