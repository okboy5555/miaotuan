<template>
  <div class="home">
    <Header></Header>
    <div class="search" @click="searchBtn">
      <div class="search-input-suffix">
        <el-input placeholder="搜索商家，商品名称" prefix-icon="el-icon-search" v-model="search"></el-input>
      </div>
    </div>
    <div class="select">
      <router-link class :to="item.page" tag="div" v-for="item in tabbarDes" :key="item.id">
        <svg class="icon grey" aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
        <div class="detail">{{item.txt}}</div>
      </router-link>
    </div>
    <div class="shop-title">推荐商家</div>
    <shoplist></shoplist>
    <Footer></Footer>
  </div>
</template>

<script>
import shoplist from '@/components/shoplist.vue'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
// import axios from 'axios'

export default {
  name: 'home',
  components: {
    shoplist,
    Header,
    Footer
  },
  mounted () {
    // const data = {}
    // data.e.s = 3
    console.log('2333')
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
          page: 'food',
          icon: '#icon-icon-test'
        },
        {
          txt: '晚餐',
          page: 'find',
          icon: '#icon-dinner'
        },
        {
          txt: '商超便利',
          page: 'order',
          icon: '#icon-gouwu'
        },
        {
          txt: '水果',
          page: 'mine',
          icon: '#icon-shuiguo'
        },
        {
          txt: '医疗健康',
          page: 'mine',
          icon: '#icon-yiliaotuandui'
        },
        {
          txt: '鲜花绿植',
          page: 'mine',
          icon: '#icon-hua'
        },
        {
          txt: '厨房生鲜',
          page: 'mine',
          icon: '#icon-shengxian-pangxie'
        },
        {
          txt: '跑腿代购',
          page: 'mine',
          icon: '#icon-_waimai'
        },
        {
          txt: '甜品饮品',
          page: 'mine',
          icon: '#icon-naicha'
        },
        {
          txt: '签到领红包',
          page: 'mine',
          icon: '#icon-qiandao'
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
.home {
  background: #fff;
}
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
  padding-top: 1rem;
  height: 8rem;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 20%;
  }
  .detail {
    margin: 0 auto;
    width: 4rem;
    font-size: 0.5rem;
    color: $grey;
  }
}
.shop-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: $grey;
  height: 2rem;
  &:after,
  &:before {
    display: block;
    content: '';
    width: 3rem;
    height: 0.063rem;
    background-color: #999;
  }
  &:after {
    margin-left: 0.5rem;
  }
  &:before {
    margin-right: 0.5rem;
  }
}
</style>
