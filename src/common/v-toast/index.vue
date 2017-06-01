<template>
  <div v-if="showToast">
    <div class="toast-board" @click="hiddenToast"></div>
    <div class="v-toast">
      <slot name="icon"></slot>
      {{title}}
    </div>
  </div>
</template>
<script>
  import './index.css'
  export default {
    name: 'v-toast',
    props: {
      title: String,
      isShow: Boolean
    },
    data () {
      return {
        showToast: false
      }
    },
    watch: {
      isShow () {
        this.showToast = this.isShow
      }
    },
    methods: {
      hiddenToast () {
        this.showToast = false
      }
    },
    mount () {
    }
  }
</script>
