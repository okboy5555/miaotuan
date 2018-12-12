<template>
  <div class="home">
      <Header></Header>
      <div>mine</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'mine',
  components: {
    Header,
    Footer
  }
}
</script>
