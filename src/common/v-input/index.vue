<template>
  <label>
    <div :style="{width: labelWidth + 'em'}">
      {{title}}
    </div>
    <div>
      <input class="v-input" type="tel"
             :placeholder="placeholder"
             v-model="text" :disabled ="disabled" :style="styleObj">
    </div>
    <a slot="v-cell-footer"
       class="text-light ml05"
       v-if="showClear"
       v-show="value"
       @click="value = ''"
    >
      <i class="fa fa-times-circle"></i>
    </a>
  </label>
</template>

<script lang="babel">
  /**
   * Created by ablipan on 17/5/24.
   * v-input
   */
  import './index.css'
  export default{
    name: 'v-input',
    props: {
      title: {
        type: String,
        default: ''
      },
      value: {
        type: [ String, Number ],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      err: String,
      showClear: {
        type: Boolean,
        default: true
      },
      disabled: false,
      styleObj: Object
    },
    data () {
      return {
        text: ''
      }
    },
    watch: {
      text (val) {
        this.$emit('on-change', val)
      }
    },
    methods: {},
    ready () {
    },
    computed: {
      inputClass () {
        return [
          { 'has-error': !!this.err }
        ]
      },
      // 参考 https://github.com/airyland/vux/blob/master/src/components/x-input/index.vue
      labelWidth () {
        return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 0.5
      }
    }
  }
</script>
