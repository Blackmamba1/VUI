<template>
    <div class="header">
      <div class="header-back tc">
        <slot name="back"><i class="i-f i-back" @click="back" /></slot>
      </div>
      <div class="header-title tc">
        <slot name="title">{{test}}</slot>
      </div>
      <div class="header-operate tc">
        <slot name="operate"></slot>
      </div>
    </div>
</template>
<script>
  import './header.css'
  export default {
    data () {
      return {
        test: '内容为空'
      }
    },
    props: {
      back: {
        type: Function,
        default: function () {
          window.history.go(-1)
        }
      }
    },
    mounted () {
    }
  }
</script>
