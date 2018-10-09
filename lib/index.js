// https://support.zendesk.com/hc/en-us/articles/229167008#topic_sty_j2r_gq
// https://support.zendesk.com/hc/en-us/articles/203761906
var getLang = function (lang) {
    return ({
        'af': 'af',
        'ar': 'ar',
        'ar-eg': 'ar-eg',
        'az': 'az',
        'bg': 'bg',
        'bs': 'bs',
        'ca': 'ca',
        'cs': 'cs',
        'da': 'da',
        'de': 'de',
        'de-at': 'de-at',
        'de-ch': 'de-ch',
        'de-x-informal': 'de-x-informal',
        'el': 'el',
        'en': 'en-US',
        'en-au': 'en-au',
        'en-be': 'en-be',
        'en-CA': 'en-CA',
        'en-ca': 'en-CA',
        'en-GB': 'en-GB',
        'en-gb': 'en-GB',
        'en-ie': 'en-ie',
        'en-in': 'en-in',
        'en-nz': 'en-nz',
        'en-ph': 'en-ph',
        'en-sg': 'en-sg',
        'en-US': 'en-US',
        'en-us': 'en-US',
        'en-za': 'en-za',
        'es': 'es',
        'es-419': 'es-419',
        'es-ES': 'es-ES',
        'es-es': 'es-ES',
        'es-MX': 'es-MX',
        'es-mx': 'es-MX',
        'et': 'et',
        'eu': 'eu',
        'fa': 'fa',
        'fi': 'fi',
        'fil': 'fil',
        'fr': 'fr',
        'fr-be': 'fr-be',
        'fr-CA': 'fr-CA',
        'fr-ca': 'fr-CA',
        'fr-ch': 'fr-ch',
        'fr-FR': 'fr-FR',
        'fr-fr': 'fr-FR',
        'he': 'he',
        'hi': 'hi',
        'hr': 'hr',
        'hu': 'hu',
        'id': 'id',
        'is': 'is',
        'it': 'it',
        'ja': 'ja',
        'ka': 'ka',
        'ko': 'ko',
        'ku': 'ku',
        'lt': 'lt',
        'lv': 'lv',
        'ms': 'ms',
        'nl': 'nl',
        'no': 'no',
        'pl': 'pl',
        'ps': 'ps',
        'pt': 'pt',
        'pt-BR': 'pt-BR',
        'pt-br': 'pt-BR',
        'ro': 'ro',
        'ru': 'ru',
        'sk': 'sk',
        'sl': 'sl',
        'sq': 'sq',
        'sr': 'sr',
        'sr-ME': 'sr-ME',
        'sr-me': 'sr-ME',
        'sv': 'sv',
        'th': 'th',
        'tr': 'tr',
        'uk': 'uk',
        'ur': 'ur',
        'vi': 'vi',
        'zh-CN': 'zh-CN',
        'zh-cn': 'zh-CN',
        'zh-TW': 'zh-TW',
        'zh-tw': 'zh-TW'
    }[lang] || (function () {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('[Vue-Zendesk]Not support lang code \'' + lang + '\', use \'en-US\' instead.')
        }
        return 'en-US'
    })())
}

var init = function (zendeskHost) {
    if (!window.zEmbed) {
        var n
        var o
        var d
        var i
        var s
        var a = []
        var r = document.createElement('iframe')
        window.zEmbed = function () {
            a.push(arguments)
        }
        window.zE = window.zE || window.zEmbed
        r.src = 'javascript:false'
        r.title = ''
        r.role = 'presentation';
        (r.frameElement || r).style.cssText = 'display: none'
        d = document.getElementsByTagName('script')
        d = d[d.length - 1]
        d.parentNode.insertBefore(r, d)
        i = r.contentWindow
        s = i.document
        try {
            o = s
        } catch (e) {
            n = document.domain
            r.src = 'javascript:var d=document.open();d.domain="' + n + '";void(0);'
            o = s
        }
        o.open()._l = function () {
            // this -> document
            var e = this.createElement('script')
            n && (this.domain = n)
            e.id = 'js-iframe-async'
            e.src = 'https://assets.zendesk.com/embeddable_framework/main.js'
            this.t = +new Date()
            this.zendeskHost = zendeskHost
            this.zEQueue = a
            this.body.appendChild(e)
        }
        o.write('<body onload="document._l();">')
        o.close()
    }
}

var setLocale = function (lang) {
    if (!window.zE) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('[Vue-Zendesk]Must call \'zendesk.init()\' first before \'setLocale\'.')
        }
        return
    }
    var zE = window.zE
    !!zE && zE(function () {
        // must use window.zE inside
        window.zE.setLocale(getLang(lang))
    })
}

export {
    setLocale,
    init
}

export default {
    setLocale,
    init
}
