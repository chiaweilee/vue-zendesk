# @chiaweilee/zendesk.js
fontend zendesk client

<a href="https://npmcharts.com/compare/vue-zendesk?minimal=true"><img src="https://img.shields.io/npm/dm/vue-zendesk.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-zendesk"><img src="https://img.shields.io/npm/v/vue-zendesk.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-zendesk"><img src="https://img.shields.io/npm/l/vue-zendesk.svg" alt="License"></a>

## Install
```cmd
npm install @chiaweilee/zendesk.js
```

## Usage

*base usage*

```js
import zendesk from '@chiaweilee/zendesk.js'
// import { init, setLocale } from '@chiaweilee/zendesk.js'
zendesk.init('domain.zendesk.com')
zendesk.setLocale('en-us') // set language
```

## Vue Example

```js
import { setLocale }, zendesk from '@chiaweilee/zendesk.js'
export default {
    data () {
        return {
            lang: 'en-us'
        }
    },
    mounted () {
        zendesk.init('my.zendesk.com')
        zendesk.setLocale(this.lang)
    },
    watch: {
        lang (newLang) {
            // zendesk.setLocale(newLang)
            setLocale(newLang)
        }
    }
}
```

