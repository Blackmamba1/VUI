/**
 * Created by zhangjingguo on 2017/6/5.
 */
import Vue from 'vue'
import * as vui from './src/lib'

console.log(vui)

const components = {
  ...vui
}

console.log(vui, components)

const install = (Vue, options) => {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}
Vue.use(install)
