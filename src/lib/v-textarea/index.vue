<template>
  <label class="v-cell v-textarea-wrap px1">
    <div v-if="title">{{title}}</div>
        <textarea class="v-cell-body v-textarea"
                  :rows="rows"
                  :placeholder="placeholder"
                  :style="styleObj"
                  v-model="text"
                  value="value"
        ></textarea>
  </label>
</template>

<script lang="babel">
  /**
   * Created by ablipan on 17/6/1.
   * textarea 组件
   */
  import './index.css'
  export default{
    name: 'v-textarea',
    components: {},
    data () {
      return {
        text: ''
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      rows: {
        type: Number,
        default: 3
      },
      placeholder: {
        type: String,
        default: ''
      },
      styleObj: {
        type: Object
      },
      value: {
        type: String
      }
    },
    watch: {
      text (val) {
        this.$emit('on-change', val)
      }
    }
  }
</script>
