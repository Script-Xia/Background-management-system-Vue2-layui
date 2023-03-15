<template>
  <div style="width: 100%;height: calc(100vh - 60px);">
    <ul class="layui-nav layui-nav-tree" lay-filter="drop-menu" @click="jumpLink">
      <li
        class="layui-nav-item"
        v-for="(primaryMenu, primaryIndex) in menuList"
        :key="primaryMenu.id"
        :class="{ 'layui-this': primaryMenu.select }"
      >
        <a :data-hierarchy="primaryIndex">
          <i class="icon iconfont" :class="primaryMenu.icon"></i>
          {{ primaryMenu.title }}
        </a>
        <template v-if="primaryMenu.child">
          <dl class="layui-nav-child">
            <dd
              :class="{ 'has-child': secondaryMenu.child }"
              v-for="(secondaryMenu, secondaryIndex) in primaryMenu.child"
              :key="secondaryMenu.id"
            >
              <a :data-hierarchy="primaryIndex + '-' + secondaryIndex">
                {{ secondaryMenu.title }}
              </a>
              <template v-if="secondaryMenu.child">
                <dl class="layui-nav-child" style="margin-left: 10px;">
                  <dd
                    v-for="(tertiaryMenu, tertiaryIndex) in secondaryMenu.child"
                    :key="tertiaryMenu.id"
                  >
                    <a :data-hierarchy="primaryIndex + '-' + secondaryIndex + '-' + tertiaryIndex">
                      {{ tertiaryMenu.title }}
                    </a>
                  </dd>
                </dl>
              </template>
            </dd>
          </dl>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menuList: [
        {
          title: '系统首页',
          id: 1,
          names: ['系统首页'],
          select: true,
          icon: 'icon-shouye',
          link: '/homepage'
        },
        {
          title: '枪支管理',
          id: 2,
          names: ['枪支管理'],
          icon: 'icon-shou',
          link: '/guns',
          child: [
            {
              title: '手枪',
              id: 21,
              names: ['枪支管理', '手枪'],
              link: '/guns/handgun'
            },
            {
              title: '步枪',
              id: 22,
              names: ['枪支管理', '步枪'],
              link: '/guns/barndook',
              child: [
                {
                  title: 'AK-47',
                  id: 221,
                  names: ['枪支管理', '步枪', 'AK-47'],
                  link: '/guns/barndook/AK47'
                },
                {
                  title: 'M4A1',
                  id: 222,
                  names: ['枪支管理', '步枪', 'M4A1'],
                  link: '/guns/barndook/M4A1'
                },
                {
                  title: 'M16',
                  id: 223,
                  names: ['枪支管理', '步枪', 'M16'],
                  link: '/guns/barndook/M16'
                }
              ]
            },
            {
              title: '冲锋枪',
              id: 23,
              names: ['枪支管理', '冲锋枪'],
              link: '/guns/tommyGun'
            }
          ]
        },
        {
          title: '军机管理',
          id: 3,
          names: ['军机管理'],
          icon: 'icon-warplane',
          link: '/militaryPlan',
          child: [
            {
              title: '战斗机',
              id: 31,
              names: ['军机管理', '战斗机'],
              link: '/militaryPlan/fighterPlane'
            },
            {
              title: '轰炸机',
              id: 32,
              names: ['军机管理', '轰炸机'],
              link: '/militaryPlan/bombardmentAircraft'
            },
            {
              title: '侦察机',
              id: 33,
              names: ['军机管理', '侦察机'],
              link: '/militaryPlan/scoutPlane'
            }
          ]
        },
        {
          title: '权限管理',
          id: 4,
          names: ['权限管理'],
          icon: 'icon-quanxian',
          link: '/authority'
        }
      ]
    }
  },
  methods: {
    // 事件冒泡处理
    jumpLink(e) {
      const hierarchy = e.target.dataset.hierarchy.split("-")
      // 必须要深拷贝
      let menuData = JSON.parse(JSON.stringify(this.menuList[hierarchy[0]]))
      
      if (hierarchy.length > 1) {
        for (let index = 1; index < hierarchy.length; index++) {
          menuData = menuData.child[hierarchy[index]]
        }
      }
      this.$emit('jump-link', {
        link: menuData.link,
        names: menuData.names
      })
    }
  },
  beforeMount() {
    this.$emit('jump-link', {
      link: this.menuList[0].link,
      names: this.menuList[0].names
    })
  },
  mounted() {
    const that = this
    layui.use('element', function() {
      const element = layui.element
      element.init('nav')

      // 改变二级菜单的右侧图标
      document.querySelectorAll('.has-child a i.layui-icon').forEach(i => {
        i.classList.add('layui-icon-triangle-r')
        i.classList.remove('layui-icon-down')
      })
    })
  }
}
</script>

<style>
.layui-nav-tree {
  width: 74%;
  height: 100%;
  overflow: hidden;
}

.layui-nav-tree .layui-nav-item {
  line-height: 50px;
}

.layui-nav-tree .layui-nav-item a {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
}

.has-child.layui-nav-itemed > a .layui-nav-more {
  transform: rotate(90deg);
}
</style>