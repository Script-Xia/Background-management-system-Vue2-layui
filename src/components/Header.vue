<template>
  <div class="layui-header">
    <div class="layui-fluid header">
      <h2>后台管理系统</h2>
      <ul class="layui-nav">
        <li class="layui-nav-item">
          <a href="">控制台<span class="layui-badge">9</span></a>
        </li>
        <li class="layui-nav-item">
          <a href="">个人中心<span class="layui-badge-dot"></span></a>
        </li>
        <li class="layui-nav-item">
          <a href=""><i class="layui-icon layui-icon-username"></i> 我</a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">修改信息</a></dd>
            <dd><a href="javascript:;">安全管理</a></dd>
            <dd><a href="javascript:;">退了</a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data () {
    return {
      
    }
  },
  methods: {},
}
</script>

<style scoped>
  .header {
    /* 开启BFC */
    display: flow-root;
    position: relative;
    width: 100%;
  }

  .header h2 {
    color: #fff;
    position: absolute;
    left: 4%;
    line-height: 60px;
  }

  .layui-nav {
    position: absolute;
    right: 6%;
  }

  .layui-nav .layui-nav-item a {
    font-size: 16px;
  }
</style>