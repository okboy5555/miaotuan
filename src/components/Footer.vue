<template>
  <div class="footer">
    <div class="cell" @click="home">
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-changyonglogo40-copy"></use>
      </svg>
      <div class="detail">首页</div>
    </div>
    <div class="cell" @click="find">
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-faxian"></use>
      </svg>
      <div class="detail">发现</div>
    </div>
    <div class="cell" @click="order">
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-dingdan"></use>
      </svg>
      <div class="detail">订单</div>
    </div>
    <div class="cell" @click="mine">
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-wode-copy"></use>
      </svg>
      <div class="detail">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods: {
    home: function () {
      this.$router.push('/home')
    },
    find: function () {
      this.$router.push('/find')
    },
    order: function () {
      this.$router.push('/order')
    },
    mine: function () {
      this.$router.push('/mine')
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
</style>
