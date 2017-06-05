<template>
  <button class="button" :class="btnClass" :type="htmlType" :style="styleObj" @click="clickEvent">
    <i class="fa icon" :class="iconClass" v-if="icon"></i>
    <slot></slot>
    <i class="fa fa-spin fa-spinner" v-if="loading"></i>
  </button>
</template>

<script lang="babel">
  /**
   * Created by zhangjg on 17/5/25.
   * 按钮
   */
  import buttonMixin from './mixin'
  import './index.css'
  export default{
    name: 'v-button',
    mixins: [ buttonMixin ],
    props: {
      // 参考 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
      htmlType: {
        type: String,
        default: ''
      },
      styleObj: Object
    },
    methods: {
      clickEvent () {
        this.$emit('on-click')
      }
    }
  }
</script>
