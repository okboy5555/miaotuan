<template>
  <div class="search-input-suffix">
    <span class="el-icon-arrow-left" @click="goback"></span>
    <el-input
      placeholder="搜索商家，商品名称"
      prefix-icon="el-icon-search"
      v-model="search">
    </el-input>
    <span class="search">搜索</span>
  </div>
</template>
<script>
export default {
  name: 'search',
  data: function () {
    return {
      search: null
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
  .search-input-suffix {
    padding: .5rem 0;
    background: #ffff;
  }
  .el-icon-arrow-left {
    font-size: 2rem;
    vertical-align: middle;
  }
  .el-input--prefix {
    width: 16rem;
    margin-left: 1rem;
  }
  .search {
    margin-left: 1rem;
  }
</style>
