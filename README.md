# telemetrytv-vue-plugin

Vue plugin for the [TelemetryTV HTML SDK](https://apidocs.telemetrytv.com/reference/html-apps)


## Get Started

### Step 1: Import both Vue and TelemetryTV Vue Plugin from CDNJS

Please make sure the plugin is loaded after VueJS.

```html
<head>
  <!-- Vue -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"></script>

  <!-- TelemetryTV Vue Plugin -->
  <script src="https://cdnjs.cloudflare.com/$PENDING_PATH"></script>
</head>
```

### Step 2: Enable plugin

Enable the plugin in `onloadTelemetryTV` callback. Call it before rendering the main `#app`.

```javascript
window.onloadTelemetryTV = function () {
  // Enable Plugin
  Vue.use((ttvVuePlugin || window.ttvVuePlugin || {}).default)

  // Render The Vue app
  const app = new Vue({
    el: '#app',
    mounted () {
      console.debug('App mounted!')
    }
  })
}

```
