const ttvVuePlugin = {
  install(Vue, options) {
    Vue.prototype.ttv = Vue.observable(window.telemetryTV)

    Vue.mixin({
      mounted () {
        console.log('TelemetryTV Vue Plugin Mounted!')
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ttvVuePlugin)
}

export default ttvVuePlugin
