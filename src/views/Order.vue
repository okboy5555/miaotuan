<template>
  <div class="home">
      <Header></Header>
      <div>order</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'order',
  components: {
    Header,
    Footer
  }
}
</script>
