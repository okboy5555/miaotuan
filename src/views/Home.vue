<template>
  <div class="home">
    <Header></Header>
    <div class="search" @click="searchBtn">
      <div class="search-input-suffix">
        <el-input
          placeholder="搜索商家，商品名称"
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
      </div>
    </div>
    <div>home</div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  },
  props: {
    title: String
  },
  data: function () {
    return {
      search: null
    }
  },
  methods: {
    searchBtn: function () {
      this.$route.push({
        path: 'search'
      })
    }
  }

}
</script>
<style lang="scss" scoped>
  .search {
    background: #0085ff;
  }
  .search-input-suffix {
    margin: 0 auto;
    width: 21rem;
    height: 3rem;
  }
</style>
