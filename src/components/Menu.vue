<template>
  <div style="width: 100%;height: calc(100vh - 60px);">
    <ul class="layui-nav layui-nav-tree" lay-filter="drop-menu">
      <li
        class="layui-nav-item"
        v-for="primaryMenu in menuList"
        :key="primaryMenu.id"
        :class="{ 'layui-this': primaryMenu.select }"
      >
        <a
          @click="
            $emit('jump-link', {
              link: primaryMenu.link,
              names: primaryMenu.names
            })
          "
        >
          <i class="icon iconfont" :class="primaryMenu.icon"></i>
          {{ primaryMenu.title }}
        </a>
        <template v-if="primaryMenu.child">
          <dl class="layui-nav-child">
            <dd
              :class="{ 'has-child': secondaryMenu.child }"
              v-for="secondaryMenu in primaryMenu.child"
              :key="secondaryMenu.id"
            >
              <a
                @click="
                  $emit('jump-link', {
                    link: secondaryMenu.link,
                    names: secondaryMenu.names
                  })
                "
              >
                {{ secondaryMenu.title }}
              </a>
              <template v-if="secondaryMenu.child">
                <dl class="layui-nav-child" style="margin-left: 10px;">
                  <dd
                    v-for="tertiaryMenu in secondaryMenu.child"
                    :key="tertiaryMenu.id"
                  >
                    <a
                      @click="
                        $emit('jump-link', {
                          link: tertiaryMenu.link,
                          names: tertiaryMenu.names
                        })
                      "
                    >
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
          title: '????????????',
          id: 1,
          names: ['????????????'],
          select: true,
          icon: 'icon-shouye',
          link: '/homepage'
        },
        {
          title: '????????????',
          id: 2,
          names: ['????????????'],
          icon: 'icon-shou',
          link: '/guns',
          child: [
            {
              title: '??????',
              id: 21,
              names: ['????????????', '??????'],
              link: '/guns/handgun'
            },
            {
              title: '??????',
              id: 22,
              names: ['????????????', '??????'],
              link: '/guns/barndook',
              child: [
                {
                  title: 'AK-47',
                  id: 221,
                  names: ['????????????', '??????', 'AK-47'],
                  link: '/guns/barndook/AK47'
                },
                {
                  title: 'M4A1',
                  id: 222,
                  names: ['????????????', '??????', 'M4A1'],
                  link: '/guns/barndook/M4A1'
                },
                {
                  title: 'M16',
                  id: 223,
                  names: ['????????????', '??????', 'M16'],
                  link: '/guns/barndook/M16'
                }
              ]
            },
            {
              title: '?????????',
              id: 23,
              names: ['????????????', '?????????'],
              link: '/guns/tommyGun'
            }
          ]
        },
        {
          title: '????????????',
          id: 3,
          names: ['????????????'],
          icon: 'icon-warplane',
          link: '/militaryPlan',
          child: [
            {
              title: '?????????',
              id: 31,
              names: ['????????????', '?????????'],
              link: '/militaryPlan/fighterPlane'
            },
            {
              title: '?????????',
              id: 32,
              names: ['????????????', '?????????'],
              link: '/militaryPlan/bombardmentAircraft'
            },
            {
              title: '?????????',
              id: 33,
              names: ['????????????', '?????????'],
              link: '/militaryPlan/scoutPlane'
            }
          ]
        },
        {
          title: '????????????',
          id: 4,
          names: ['????????????'],
          icon: 'icon-quanxian',
          link: '/authority'
        }
      ]
    }
  },
  created() {
    // ????????????????????????????????????
    // this.$request.get("url", {
    //   data: "menu-list"
    // }).then(res => {
    //   this.menuList = res.data
    // })
  },
  methods: {},
  beforeMount() {
    this.$emit('jump-link', {
      link: this.menuList[1].link,
      names: this.menuList[1].names
    })
  },
  mounted() {
    const that = this
    layui.use('element', function() {
      const element = layui.element
      element.init('nav')

      // ?????????????????????????????????
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
