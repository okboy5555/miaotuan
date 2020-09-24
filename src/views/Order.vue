<template>
  <div class="home">
    <Header></Header>
    <div>{{count}}</div>
    <div>{{doneTodoCount }}</div>
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
  },
  mounted () {
    console.log(this.$store.getters.doneTodosCount)
    console.log(this.count)
    this.$store.commit({
      type: 'increment',
      amount: 10
    })
    // 以对象形式分发
    this.$store.dispatch({
      type: 'incrementAsync',
      amount: 10
    })
    // this.$store.dispatch({
    //   type: 'getData'
    // })
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    doneTodoCount () {
      return this.$store.getters.doneTodosCount
    }
  }
}
</script>
