<template>
    <el-input
      placeholder="搜索音乐"
      icon="search"
      v-model="musicName"
      :on-icon-click="searchMuisc">
    </el-input>
</template>
<script>
import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource)
export default {
  data() {
    return {
      musicName: ''
    }
  },
  methods: {
    searchMuisc() {
        var _this = this;
        _this.$http.get('/api/v2/music/search').then(function(res){
            console.log(res);
        })
    }
  }
}
</script>
