/**
 * Created by zhangjingguo on 2017/5/31.
 */

exports.install = (Vue) => {
  const _self = Vue.prototype
  _self.$popup = {
    show: (msg, type, time) => {
      const div = document.createElement('div')
      div.classList.add('v-popup', type, 'show')
      div.innerText = msg
      div.id = 'v-popup'
      document.body.appendChild(div)
      setTimeout(() => {
        _self.$popup.hide()
      }, time * 1000 || 1000)
    },
    hide: () => {
      const pop = document.getElementById('v-popup')
      pop.innerHTML = null
      pop.className = 'hide'
      document.body.removeChild(pop)
    }
  }
}
