<template>
  <div class="v-star">
    <v-stars @changeStar="changeDesc" />
    <div class="active tc desc">{{description}}&nbsp;</div>
  </div>
</template>
<script lang="babel">
  import stars from './starts.vue'
  import './index.css'
  export default {
    name: 'v-star',
    components: {
      'v-stars': stars
    },
    props: {
      desc: {
        type: Array,
        default: function () {
          return [
            '非常不满意',
            '差',
            '一般',
            '满意',
            '非常满意'
          ]
        }
      }
    },
    data () {
      return {
        description: ''
      }
    },
    methods: {
      changeDesc (index) {
        this.description = this.desc[index]
        this.$emit('star-num', index + 1)
      }
    }
  }
</script>
