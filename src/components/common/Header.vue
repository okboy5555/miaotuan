<template>
  <div class="header">
    <div class="title">
      {{this.$route.meta.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }

}
</script>

<style scoped lang="scss">
  .header {
    color: #ffff;
    font-weight: 700;
    line-height: 3rem;
    font-size: 1.2rem;
    height: 3rem;
    background: $color;
  }
</style>
