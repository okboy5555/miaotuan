<template>
  <div class="home">
    <Header></Header>
    <div>
      <input type="text" v-focus />
      {{count}}{{a}}
    </div>
    <router-view></router-view>
    <button @click="toOrder">我是按钮</button>
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
  methods: {
    toOrder () {
      this.$router.push('order')
    }
  },
  mounted () {

  },
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
