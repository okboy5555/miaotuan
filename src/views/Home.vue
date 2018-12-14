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
    <div class="select">
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
      <div >
        <svg class="icon grey" aria-hidden="true">
          <use xlink:href="#icon-changyonglogo40-copy"></use>
        </svg>
      </div>
    </div>
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
      search: null,
      tabbarDes: [
        {
          txt: '美食',
          page: 'home',
          icon: '#icon-changyonglogo40-copy'
        },
        {
          txt: '晚餐',
          page: 'find',
          icon: '#icon-faxian'
        },
        {
          txt: '商超便利',
          page: 'order',
          icon: '#icon-dingdan'
        },
        {
          txt: '水果',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '医疗健康',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '鲜花绿植',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '厨房生鲜',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '跑腿代购',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '甜品饮品',
          page: 'mine',
          icon: '#icon-wode-copy'
        },
        {
          txt: '签到领红包',
          page: 'mine',
          icon: '#icon-wode-copy'
        }
      ]
    }
  },
  methods: {
    searchBtn: function () {
      this.$router.push({
        path: '/search'
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
  .select {
    display: flex;
    height: 5rem;
    flex-wrap: wrap;
    justify-content: center;
    div {
      width: 20%;
    }
  }
</style>
