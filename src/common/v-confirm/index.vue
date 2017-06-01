<template>
    <v-modal v-show="showModal" :hide="hide">
      <div class="confirm-body" slot="body">
        <div class="v-confirm-header"></div>
        <div class="v-confirm-body">{{content}}</div>
        <div class="confirm-btn-area">
          <div class="fl6 tc" @click="hide">返回编辑</div>
          <div class="fl6 tc highlight" @click="onOk">直接退出</div>
        </div>
      </div>
    </v-modal>
</template>
<script>
  import vModal from '../v-modal'
  import './index.css'
  export default {
    name: 'v-confirm',
    data () {
      return {}
    },
    props: {
      showModal: Boolean,
      content: String
    },
    components: {
      'v-modal': vModal
    },
    methods: {
      hide () {
        this.$emit('hide-modal', false)
      },
      onOk () {
        this.$emit('on-ok')
      }
    }
  }
</script>
