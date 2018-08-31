<template>
  <div>
    <douban-header/>
    <douban-body/>
  </div>
</template>

<script>
import DBHeader from './components/douban-header'
import DBBody from './components/douban-body'

export default {
  name: 'App',
  components: {
    'douban-header': DBHeader,
    'douban-body': DBBody,
  },
  methods: {
    setCity: function(city) {
      this.$store.dispatch()
    }
  }
}
</script>

<style>
@import 'reset.css';
</style>
