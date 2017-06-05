<template>
  <div class="scaffold-body">
    <v-header>
      <div slot="title">{{title}}</div>
    </v-header>
    <div class="scaffold-content-body" :class="{flowHidden: overflow}">
      <slot name="content"></slot>
      <div class="bottom-line" v-show="hasBottom"></div>
    </div>
    <div class="v-footer" v-show="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style scoped>
  .scaffold-body {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 99.99%;
  }
  .scaffold-content-body {
    position: relative;
    overflow: scroll;
    height: 100%;
  }
  .bottom-line {
    height: 1rem;
    width: 100%;
  }
  .v-footer {
    height: 1.5rem;
    line-height: 1.5rem;
    width: 100%;
  }
  .flowHidden {
    overflow: hidden;
  }
</style>
<script>
  import vHeader from './v-header.vue'
  export default {
    components: {
      'v-header': vHeader
    },
    props: {
      title: String,
      overflow: {
        type: Boolean,
        default: false
      },
      hasFooter: {
        type: Boolean,
        default: false
      },
      hasBottom: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
