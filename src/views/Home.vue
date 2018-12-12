<template>
  <div class="home">
    <Header></Header>
    <div>home</div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Header
  }
}
</script>
