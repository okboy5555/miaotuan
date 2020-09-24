<template>
  <div class="home">
    <Header></Header>
    <div>
      <input type="text" v-focus />
      {{count}}{{a}}
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import { mapState } from 'vuex'

export default {
  name: 'find',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      // test: 'miaomiao'
      a: 'miaomiao'
    }
  },
  // mounted () {
  //   this.$store.commit('increment')
  //   console.log(this.$store.state.count)
  // }
  computed: {
    test () {
      return this.a
    },
    ...mapState({
      count: state => state.count
    })
  }
}
</script>
