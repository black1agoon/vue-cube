<template>
  <div id="app">
    <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'application-store',
    components: {
    },
    data() {
      return {
        current: '快车',
        labels: [
          '快车',
          '小巴',
          '专车',
          '顺风车',
          '代驾',
          '公交',
          '自驾租车',
          '豪华车',
          '二手车',
          '出租车'
        ],
        tabs: ['针织', '梭织', '袜业', '汽车零件部', '无纺布'],
        activeIndex: 0,
        scroll: null
      }
    },
    methods: {
      tabClick(index) {
        this.activeIndex = index
      },
      changeHandler(cur) {
        this.current = cur
      }
    },
    mounted() {
      // this.scroll = new BScroll(this.$refs.scroll, {
      //   click: true,
      //   scrollX: true,
      // })
    }
  }
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
