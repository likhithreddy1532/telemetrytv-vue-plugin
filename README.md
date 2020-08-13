# telemetrytv-vue-plugin

Vue plugin for the [TelemetryTV HTML SDK](https://apidocs.telemetrytv.com/reference/html-apps)

---

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

Enable the plugin in `onloadTelemetryTV` callback. Call it before rendering the main app (`#app`).

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

---

## Data Display

The SDK object now attached to the `ttv` property of your component. Its hierarchial structure is the same as mentioned in the [TelemetryTV HTML SDK Documentation](https://apidocs.telemetrytv.com/reference/html-apps).

This means you can easily display data like --

```html
<p>Current Playlist: {{ ttv.playlist.name }} ({{ ttv.playlist.id }})</p>
<p>Current Page: {{ ttv.page.name }} ({{ ttv.page.id }})</p>
```

---

## Methods

The methods provided in the SDK is functionable as well. For example, you can create a simple page navigation in the **HTML Overlay** with the following codes --

```html
<div>
  <button @click="ttv.playlist.previousPage">Previous Page</button>
  <button @click="ttv.playlist.nextPage">Next Page</button>
</div>
```

> NOTE: Please make sure the "Set Overlay Clickable" is toggled **on**, to make these buttons clickable in the TelemetryTV Player.

---

## Callbacks

The [callbacks](https://apidocs.telemetrytv.com/reference/html-apps#callbacks) provided in the SDK is also available.

For better performance, we recommend you only bind the callback(s) you need in practice.

Here's an example of `onPageChange` callback usage --

```javascript
window.onloadTelemetryTV = function () {
  // Enable Plugin
  Vue.use((ttvVuePlugin || window.ttvVuePlugin || {}).default)

  // Render The Vue app
  const app = new Vue({
    el: '#app',
    mounted () {
      this.ttv.onPageChange(this.onPageChange)
    },
    methods: {
      onPageChange (page) {
        console.log(`Page changed to ${page.name} (${page.id})`)
      }
    }
  })
}
```

