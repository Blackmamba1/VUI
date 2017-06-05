<template>
    <div>
      <div class="cell-title" v-if="title">{{title}}</div>
      <div class="cell-content">
        <slot name="content"></slot>
      </div>
    </div>
</template>
<script>
    import './index.css'
    export default {
      name: 'cell',
      props: {
        title: {
          type: String,
          default: ''
        }
      },
      data () {
        return {
        }
      }
    }
</script>
