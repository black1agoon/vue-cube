<template>
  <cube-sticky :pos="scrollY">
    <cube-scroll
        :scroll-events="scrollEvents"
        @scroll="scrollHandler">
      <ul>
        <li>title</li>
      </ul>
      <cube-input v-model="filter"
                  type="text"
                  @blur="filterBlur"
                  placeholder="请输入关键词过滤">
      </cube-input>
      <cube-sticky-ele ele-key="11">
        <ul class="sticky-header">
          <li>111</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="(item,index) in items" :key="'k' + index">{{item}}</li>
      </ul>
      <cube-sticky-ele ele-key="22">
        <ul class="sticky-header">
          <li>222</li>
          <li>222</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="(item, index) in items2" :key="'k2' + index">{{item}}</li>
      </ul>
      <cube-sticky-ele ele-key="33">
        <ul class="sticky-header">
          <li>333</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="(item, index) in items3" :key="'k3' + index">{{item}}</li>
      </ul>
    </cube-scroll>
    <template slot="fixed" slot-scope="props">
      <ul class="sticky-header">
        <li>{{props.current}}</li>
      </ul>
    </template>
  </cube-sticky>
</template>

<script>
  const _data = [
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]
  export default {
    data() {
      return {
        scrollEvents: ['scroll'],
        scrollY: 0,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y
      },
      filterBlur() {
        alert('blur')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>