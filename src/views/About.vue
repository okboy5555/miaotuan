<template>
  <div class="about">
    <h1 class="miao">This is an about page</h1>
    <div></div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('increment')
    console.log(this.$store.state.count)
  }
}
</script>
<style lang="scss" scoped>
  .miao {
    color: $color;
    width: 3rem;
  }
</style>
