<template>
  <div id="app">
    <div class="layui-layout layui-layout-admin">
      <Header></Header>
      <div class="layui-fluid" style="margin-top: 60px; padding-left: 0;">
        <div class="layui-row">
          <div class="layui-col-lg2 layui-col-md3 layui-col-sm3 menu">
            <Menu @jump-link="jump"></Menu>
          </div>
          <div class="layui-col-lg10 layui-col-md9 layui-col-sm9 content">
            <Breadcrumb :names="names" @change-names="changeNames">
            </Breadcrumb>
            <div class="rotuer-view-container">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@components/Menu.vue';
import Breadcrumb from '@components/Breadcrumb.vue';
import Header from '@components/Header.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Breadcrumb,
    Header
  },
  data() {
    return {
      names: []
    }
  },
  methods: {
    jump(data) {
      // 避免冗余导航到当前位置
      if (data.link !== this.$route.path) {
        this.$router.push(data.link)
        this.names = data.names
      }
    },
    // 修改names
    changeNames(length) {
      this.names.splice(length)
    }
  },
}
</script>

<style>
.content {
  margin-left: -3%;
}

.rotuer-view-container {
  width: 100%;
  height: calc(100vh - 60px - 82px);
  overflow: auto;
}
</style>