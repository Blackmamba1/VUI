/**
 * Created by zhangjingguo on 2017/5/24.
 */

import Vue from 'vue'

import vHeader from './scaffold/v-header.vue'
import cell from './cell/cell.vue'
import vTextarea from './v-textarea'
import vInput from './v-input'
import vUpload from './v-upload'
import vStar from './v-star'
import vButton from './v-button'
import vModal from './v-modal'
import vConfirm from './v-confirm'
import vToast from './v-toast'
import vScaffold from './scaffold/v-scaffold.vue'
import vTool from './v-tool'

const components = {
  vHeader,
  cell,
  vTextarea,
  vInput,
  vUpload,
  vStar,
  vButton,
  vModal,
  vConfirm,
  vToast,
  vScaffold,
}

const install = function (Vue, Option) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}


Vue.use(install)
Vue.use(vTool)

export {
  vHeader,
  cell,
  vTextarea,
  vInput,
  vUpload,
  vStar,
  vButton,
  vModal,
  vConfirm,
  vToast,
  vScaffold,
  vTool
}
