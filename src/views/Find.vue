<template>
  <div class="home">
      <Header></Header>
      <div>find</div>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
  name: 'find',
  components: {
    Header,
    Footer
  }
}
</script>
