<template>
  <div class="footer">
    <div>
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-changyonglogo40-copy"></use>
      </svg>
      <div class="detail">首页</div>
    </div>
    <div>
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-faxian"></use>
      </svg>
      <div class="detail">发现</div>
    </div>
    <div>
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-dingdan"></use>
      </svg>
      <div class="detail">订单</div>
    </div>
    <div>
      <svg class="icon grey" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
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
      color: $color;
      font-size: .2rem;
    }
    .grey {
      color: $grey;
    }
  }
</style>
