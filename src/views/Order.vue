<template>
  <div class="home">
      <Header></Header>
      <div>order</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'order',
  components: {
    Header,
    Footer
  }
}
</script>
