<template>
    <div class="v-upload">
      <div class="upload-list">
        <div v-for="item in fileList" class="upload-item tc">
          <i class="i-f i-delete delete-file" v-if="fileList.length>0" @click="delFile(item)"/>
          <img class="upImg" :src="item.Content" @click="previewImg(item.Content)">
        </div>
      </div>
      <div class="upload-btn">
        <span v-if="fileList.length < max"><i class="i-f i-add pointer upload-btn-add" @click="chooseImg"/>添加图片</span>
        <input type="file" v-show="false" ref="file" accept="image/png,image/gif" @change="getImg($event)">
      </div>
      <div class="preview-modal" v-if="showModal" @click="hidePreview">
        <img class="preview-img" :src="previewUrl" alt="">
      </div>
    </div>
</template>
<script>
  import './index.css'
  export default {
    name: 'v-upload',
    data () {
      return {
        fileList: [],
        defaultFile: null,
        showModal: false,
        previewUrl: ''
      }
    },
    props: {
      max: {
        type: Number,
        default: 4
      }
    },
    methods: {
      getImg (e) {
        const reader = new FileReader()
        const self = this
        reader.addEventListener('load', function () {
          self.fileList.push({Content: this.result, Filename: e.target.files[0].name})
          self.$emit('getImg', {file: this.result, lists: self.fileList})
          e.target.value = null
        }, false)
        reader.readAsDataURL(e.target.files[0])
      },
      chooseImg () {
        this.$refs.file.click()
      },
      delFile (item) {
        const self = this
        this.fileList.forEach(function (subs, subIndex) {
          if (item.Content === subs.Content) {
            self.fileList.splice(subIndex, 1)
            self.$emit('getImg', {lists: self.fileList})
            return false
          }
        })
      },
      previewImg (url) {
        this.showModal = true
        this.previewUrl = url
      },
      hidePreview () {
        this.showModal = false
        this.previewUrl = ''
      }
    }
  }
</script>
