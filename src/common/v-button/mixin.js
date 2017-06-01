export default {
  props: {
    // 按钮类型 primary info success danger
    type: {
      type: String,
      default: ''
    },
    // 是否是链接形态(仍然是 button 标签, 想要 <a> 请使用 <v-link>)
    link: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 幽灵按钮 (outlined 是本质, plain 是表象, 所以使用更简单的 plain 作为属性名)
    plain: {
      type: Boolean,
      default: false
    },
    // 占满父元素宽度
    fullwidth: {
      type: Boolean,
      default: false
    },
    // 大小: small, medium, large
    size: {
      type: String,
      default: ''
    },
    // 正在加载
    loading: {
      type: Boolean,
      default: false
    },
    // 小图标
    icon: {
      type: String,
      default: ''
    },
    // 形状 circle ...
    shape: {
      type: String,
      default: ''
    },
    // 漂浮的
    floating: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    thin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      return [
        {
          'is-disabled': this.disabled || this.loading,
          // 'is-loading': this.loading,
          'is-linked': this.link,
          'is-outlined': this.plain,
          'is-fullwidth': this.fullwidth,
          'is-floating': this.floating,
          'is-thin': this.thin
        },
        this.type ? 'is-' + this.type : '',
        this.size ? 'is-' + this.size : '',
        this.link ? 'is-' + this.link : '',
        this.shape ? 'is-' + this.shape : ''
      ]
    },
    iconClass () {
      return [
        this.icon,
        this.size ? 'is-' + this.size : ''
      ]
    }
  }
}
