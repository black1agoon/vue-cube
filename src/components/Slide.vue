<template>
  <div class="slide-wrapper">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url" v-for="(img, idx) in item.image" :key="idx">
          <img :src="img">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
  export default {
    name: 'slide',
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: ['//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png',
              '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png']
          },
          {
            url: 'http://www.didichuxing.com/',
            image: ['//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png']
          },
          {
            url: 'http://www.didichuxing.com/',
            image: ['//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png']
          }
        ]
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.slide-wrapper
  width: 100%
  border: 1px solid red
</style>