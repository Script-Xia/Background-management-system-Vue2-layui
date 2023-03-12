<template>
  <div class="breadcrumb">
    <span class="layui-breadcrumb">
      <span 
        @click="clickName(index)"
        v-for="(name, index) in names" 
        :key="name"
      >
        {{ name }}
        <span v-if="index !== names.length - 1">></span> 
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    names: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    // 得到当前路由路径组成的数组
    getPathArr() {
      const pathArr = this.$route.path.split("/")
      pathArr.shift()
      return pathArr
    },
    // 得到当前被点击的面包屑元素应跳转的路径
    getLink(index) {
      const pathArr = this.getPathArr()
      let path = ""

      for (let i = 0; i < pathArr.length; i++) {
        if (i > index) break
        const pathStr = pathArr[i];
        path += "/" + pathStr 
      }

      return path
    },
    clickName(index) {
      const link = this.getLink(index)
      // 避免冗余导航到当前位置
      if (link == this.$route.path) return

      // 修改names并跳转
      this.$emit("change-names", index + 1)
      this.$router.push(link)
    }
  },
  mounted() {
    layui.use("element", function() {
      const element = layui.element
      element.init("breadcrumb")
    })
    
  }
}
</script>

<style scoped>
  .breadcrumb {
    display: flex;
    margin: 18px 0 20px;
    padding: 10px;
    background-color: #eee;
    border-radius: 6px;
  }

  .layui-breadcrumb span {
    font-size: 18px;
    cursor: pointer;
  }
</style>
