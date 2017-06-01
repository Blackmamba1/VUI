<template>
  <div class="v-modal"  @click="hide">
    <slot name="body"></slot>
  </div>
</template>
<script>
  import './index.css'
  export default {
    name: 'v-modal',
    data () {
      return {}
    },
    props: {
      hide: Function
    }
  }
</script>
