<template>
  <div class="star-content">
    <i
      class="i-f i-favorite-active stars pointer px3"
      v-for="(item, index) in 5"
      @click="sendIndex(index)"
      :class="{active: activeStar(index)}"/>
  </div>
</template>
<script>
  import './index.css'
  export default {
    data () {
      return {
        starNum: -1
      }
    },
    methods: {
      sendIndex (e) {
        this.starNum = e
        this.$emit('changeStar', e)
      },
      activeStar (_index) {
        return _index <= this.starNum
      }
    }
  }
</script>
