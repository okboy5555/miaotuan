<template>
  <div class="home">
      <Header></Header>
      <div class="top">
        <div class="headportrait">
          <span>头像</span>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/common/Footer.vue'
import Header from '@/components/common/Header.vue'

export default {
  name: 'mine',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .top {
    box-sizing: border-box;
    display: flex;
    height: 6rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 1.5rem 1.4rem;
    color: #fff;
    align-items: center;
    .headportrait {
      width: 4rem;
      height: 4rem;
      background: white;
      border-radius: 50%;
    }
  }
</style>
