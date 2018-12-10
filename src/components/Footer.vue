<template>
  <div class="footer">
    <div class="cell" @click="navigation(item.page,index)" v-for="(item,index) in tabbarDes" :key="item.id">
      <svg class="icon grey" :class="{blue:item.isActive}" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <div class="detail" :class="{blue:item.isActive}">{{item.txt}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
  data: function () {
    return {
      tabbarDes: [
        {
          txt: '首页',
          page: 'home',
          icon: '#icon-changyonglogo40-copy',
          isActive: 0
        },
        {
          txt: '发现',
          page: 'find',
          icon: '#icon-faxian',
          isActive: 0
        },
        {
          txt: '订单',
          page: 'order',
          icon: '#icon-dingdan',
          isActive: 0
        },
        {
          txt: '我的',
          page: 'mine',
          icon: '#icon-wode-copy',
          isActive: 0
        }
      ]
    }
  },
  methods: {
    navigation: function (page, index) {
      this.tabbarDes.forEach(e => {
        if (e.page === page) {
          e.isActive = 1
        } else {
          e.isActive = 0
        }
      })
      this.$router.push('/' + page)
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3.6rem;
    background: #fff;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    .detail {
      color: $grey;
      font-size: .2rem;
    }
    .cell {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-top: .5rem;
      width: 100%;
      height: 100%;
    }
    .grey {
      color: $grey;
      height: 1.5rem;
      width: 1.5rem;
    }
  }
  .blue {
    color: $color !important;
  }
</style>
