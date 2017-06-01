<template>
  <div class="p_container">
    <ul>
      <li>
        <span :class="getPointClass(1)"><span></span></span>
        <span class="bar" :class="getBarClass(1)"></span>
        <p :class="getTextClass(1)">新建</p>
      </li>
      <li>
        <span :class="getPointClass(2)"><span></span></span>
        <span class="bar" :class="getBarClass(2)"></span>
        <p :class="getTextClass(2)">处理中</p>
      </li>
      <li>
        <span :class="getPointClass(3)"><span></span></span>
        <span class="bar" :class="getBarClass(3)"></span>
        <p :class="getTextClass(3)">已回复</p>
      </li>
      <li>
        <span :class="getPointClass(4)"><span></span></span>
        <p class="last" :class="getTextClass(4)">已完成</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import './index.css'
  export default {
    name: 'process',
    props: {
      step: {
        type: String,
        default: 1,
        required: true
      }
    },
    methods: {
      getPointClass (index) {
        if (parseInt(this.step) > index) {
          return 'passPoint'
        } else if (parseInt(this.step) === index) {
          return 'currentPoint'
        } else {
          return 'paddingPoint'
        }
      },
      getBarClass (index) {
        if (parseInt(this.step) <= index) {
          return 'paddingBar'
        } else {
          return 'passBar'
        }
      },
      getTextClass (index) {
        if (parseInt(this.step) < index) {
          return 'paddingText'
        } else {
          return 'passText'
        }
      }
    }
  }
</script>
