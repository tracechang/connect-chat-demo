if ("undefined" == typeof BG) var BG = {};
! function() {
    "use strict";

    function a() {
        function a(a) {
            if (!b[a]) {
                b[a] = !0;
                var c = document.createElement("script"),
                    d = document.getElementsByTagName("script")[0];
                c.type = "text/javascript", c.async = !0, c.src = a, d.parentNode.insertBefore(c, d)
            }
        }
        var b = {};
        this.lazyLoadCss = function(a) {
            if (!b[a]) {
                b[a] = !0;
                var c = document.createElement("link"),
                    d = document.getElementsByTagName("head")[0];
                c.type = "text/css", c.href = a, c.rel = "stylesheet", d.appendChild(c)
            }
        }, this.loadScript = function(b, c, d) {
            if ("function" != typeof c && (c = function() {
                    return !0
                }), "function" != typeof d && (d = function() {}), c()) return void d();
            a(b);
            var e = setInterval(function() {
                c() && (clearInterval(e), d())
            }, 10)
        }
    }

    function b() {
        function b(a, b) {
            var c = !1,
                d = !1,
                e = null,
                f = null;
            return "function" != typeof a && (a = function() {}), p ? (a(), !0) : !q && (q = !0, s.lazyLoadCss(l.pathReplace(b.stylesheet, m)), s.loadScript(l.pathReplace(b.coreScript, m), function() {
                return "undefined" != typeof BG.createCore
            }, function() {
                t = BG.createCore(l), c = !0
            }), null === o && ("undefined" != typeof jQuery && (e = jQuery), s.loadScript(l.pathReplace(b.jQuerySrc, m), function() {
                return "undefined" != typeof jQuery && jQuery !== e
            }, function() {
                d = !0, o = jQuery.noConflict(!0)
            })), f = setInterval(function() {
                c && d && (q = !1, p = !0, clearInterval(f), a())
            }, 10), !0)
        }
        var d, e, f, g, h, i, j, k, l = this,
            m = window.location.host,
            n = null,
            o = null,
            p = !1,
            q = !1,
            r = {
                coreScript: "{scriptRoot}/api/content/core.js",
                jQuerySrc: "{scriptRoot}/content/lib/jquery.js",
                stylesheet: "{scriptRoot}/content/start_session.css"
            },
            s = new a,
            t = null;
        this.uaParser = k = c(), e = k.getDevice(), d = k.getOS(), f = k.getBrowser(), h = "IE" === f.name, g = "mobile" === e.type || "tablet" === e.type, i = "iOS" === d.name, j = "Android" === d.name, this.pathReplace = function(a, b) {
            return null !== b ? this.getProtocol() + "//" + a.replace(/\{scriptRoot\}/, b) : this.getProtocol() + "//" + a.replace(/\{scriptRoot\}/, m)
        }, this.getResources = function() {
            return r
        }, this.getHost = function() {
            return m
        }, this.getProtocol = function() {
            return null === n && (n = 0 !== window.location.protocol.indexOf("http") ? "http:" : window.location.protocol), n
        }, this.getJQuery = function() {
            return o
        }, this.preStartCallback = null, String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), BG.setSite = function(a) {
            m = a
        }, BG.setProtocol = function(a) {
            var b = a.trim().toLowerCase();
            if ("http" !== b && "https" !== b) throw BG.exceptionFactory('protocol must be either "http" or "https"');
            n = b
        }, BG.start = function(a, c) {
            var d, e = null,
                f = !1,
                h = BG.clone(r);
            if ("number" != typeof a) throw BG.exceptionFactory('"type" must be a valid START_TYPE, for instance, BG.START_TYPE.FULL.');
            for (e in BG.START_TYPE)
                if (BG.START_TYPE[e] === a) {
                    f = !0;
                    break
                }
            if (!f) throw BG.exceptionFactory('"type" must be a valid START_TYPE, for instance, BG.START_TYPE.FULL.');
            if ("object" != typeof c || null === c) throw BG.exceptionFactory('"options" must be a object that contains the start options.');
            if (c.hasOwnProperty("uiOptions") && c.uiOptions.hasOwnProperty("jQueryOptions"))
                for (e in c.uiOptions.jQueryOptions) c.uiOptions.jQueryOptions.hasOwnProperty(e) && (h[e] = c.uiOptions.jQueryOptions[e]);
            return a === BG.START_TYPE.CHAT && (i || j) && c.uiOptions.fallbackToFullWindow === !1 && (a = BG.START_TYPE.FULL), a !== BG.START_TYPE.CHAT || g || (d = window.open("about:blank", "clickToChat", "toolbar=no,directories=no,status=no,menubar=no,resizable=yes,location=no,scrollbars=yes,width=640,height=480")), !!b(function() {
                switch (l.preStartCallback && l.preStartCallback(l), t.setJQuery(o), a) {
                    case BG.START_TYPE.CHAT:
                        t.startChatSession(c, d);
                        break;
                    case BG.START_TYPE.BROWSER:
                        t.startBrowserSession(c);
                        break;
                    case BG.START_TYPE.FULL:
                        t.startFullSession(c)
                }
            }, h) || (BG.log("Currently attempting to start a session, ignoring duplicate request."), !1)
        }
    }

    function c() {
        return function(a, b) {
            var c = "0.7.12",
                d = "",
                e = "?",
                f = "function",
                g = "object",
                h = "string",
                i = "major",
                j = "model",
                k = "name",
                l = "type",
                m = "vendor",
                n = "version",
                o = "architecture",
                p = "console",
                q = "mobile",
                r = "tablet",
                s = "smarttv",
                t = "wearable",
                u = "embedded",
                v = {
                    extend: function(a, b) {
                        var c = {};
                        for (var d in a) b[d] && b[d].length % 2 === 0 ? c[d] = b[d].concat(a[d]) : c[d] = a[d];
                        return c
                    },
                    has: function(a, b) {
                        return "string" == typeof a && b.toLowerCase().indexOf(a.toLowerCase()) !== -1
                    },
                    lowerize: function(a) {
                        return a.toLowerCase()
                    },
                    major: function(a) {
                        return typeof a === h ? a.replace(/[^\d\.]/g, "").split(".")[0] : b
                    },
                    trim: function(a) {
                        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                w = {
                    rgx: function(a, c) {
                        for (var d, e, h, i, j, k, l = 0; l < c.length && !j;) {
                            var m = c[l],
                                n = c[l + 1];
                            for (d = e = 0; d < m.length && !j;)
                                if (j = m[d++].exec(a))
                                    for (h = 0; h < n.length; h++) k = j[++e], i = n[h], typeof i === g && i.length > 0 ? 2 == i.length ? typeof i[1] == f ? this[i[0]] = i[1].call(this, k) : this[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== f || i[1].exec && i[1].test ? this[i[0]] = k ? k.replace(i[1], i[2]) : b : this[i[0]] = k ? i[1].call(this, k, i[2]) : b : 4 == i.length && (this[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : b) : this[i] = k ? k : b;
                            l += 2
                        }
                    },
                    str: function(a, c) {
                        for (var d in c)
                            if (typeof c[d] === g && c[d].length > 0) {
                                for (var f = 0; f < c[d].length; f++)
                                    if (v.has(c[d][f], a)) return d === e ? b : d
                            } else if (v.has(c[d], a)) return d === e ? b : d;
                        return a
                    }
                },
                x = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                y = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [k, n],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [k, "Opera Mini"], n
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [k, "Opera"], n
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],
                        [k, n],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [k, "IE"], n
                        ],
                        [/(edge)\/((\d+)?[\w\.]+)/i],
                        [k, n],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [k, "Yandex"], n
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [k, "Puffin"], n
                        ],
                        [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i, /(ucbrowser)\/([\w\.]+)/i],
                        [
                            [k, "UCBrowser"], n
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [k, /_/g, " "], n
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [k, "WeChat"], n
                        ],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [k, n],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [n, [k, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [n, [k, "Facebook"]],
                        [/(headlesschrome) ([\w\.]+)/i],
                        [n, [k, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [k, /(.+)/, "$1 WebView"], n
                        ],
                        [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [n, [k, "Android Browser"]],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [k, n],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [k, "Dolphin"], n
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [k, "Chrome"], n
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [k, "Opera Coast"], n
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [n, [k, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [n, [k, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [n, k],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [k, [n, w.str, x.browser.oldsafari.version]],
                        [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                        [k, n],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [k, "Netscape"], n
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [k, n]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            [o, "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            [o, v.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            [o, "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            [o, "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            [o, /ower/, "", v.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            [o, "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            [o, v.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                        [j, m, [l, r]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [j, [m, "Apple"],
                            [l, r]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [j, "Apple TV"],
                            [m, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [m, j, [l, r]],
                        [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                        [j, [m, "Amazon"],
                            [l, r]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                        [
                            [j, w.str, x.device.amazon.model],
                            [m, "Amazon"],
                            [l, q]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [j, m, [l, q]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [j, [m, "Apple"],
                            [l, q]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [m, j, [l, q]],
                        [/\(bb10;\s(\w+)/i],
                        [j, [m, "BlackBerry"],
                            [l, q]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                        [j, [m, "Asus"],
                            [l, r]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [m, "Sony"],
                            [j, "Xperia Tablet"],
                            [l, r]
                        ],
                        [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                        [
                            [m, "Sony"],
                            [j, "Xperia Phone"],
                            [l, q]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [m, j, [l, p]],
                        [/android.+;\s(shield)\sbuild/i],
                        [j, [m, "Nvidia"],
                            [l, p]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [j, [m, "Sony"],
                            [l, p]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [m, w.str, x.device.sprint.vendor],
                            [j, w.str, x.device.sprint.model],
                            [l, q]
                        ],
                        [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                        [m, j, [l, r]],
                        [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                        [m, [j, /_/g, " "],
                            [l, q]
                        ],
                        [/(nexus\s9)/i],
                        [j, [m, "HTC"],
                            [l, r]
                        ],
                        [/(nexus\s6p)/i],
                        [j, [m, "Huawei"],
                            [l, q]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [m, j, [l, q]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [j, [m, "Microsoft"],
                            [l, p]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [j, /\./g, " "],
                            [m, "Microsoft"],
                            [l, q]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [j, [m, "Motorola"],
                            [l, q]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [j, [m, "Motorola"],
                            [l, r]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [m, v.trim],
                            [j, v.trim],
                            [l, s]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [j, /^/, "SmartTV"],
                            [m, "Samsung"],
                            [l, s]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [j, [m, "Sharp"],
                            [l, s]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [m, "Samsung"], j, [l, r]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [m, [l, s], j],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                        [
                            [m, "Samsung"], j, [l, q]
                        ],
                        [/sie-(\w+)*/i],
                        [j, [m, "Siemens"],
                            [l, q]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                        [
                            [m, "Nokia"], j, [l, q]
                        ],
                        [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                        [j, [m, "Acer"],
                            [l, r]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [m, "LG"], j, [l, r]
                        ],
                        [/(lg) netcast\.tv/i],
                        [m, j, [l, s]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                        [j, [m, "LG"],
                            [l, q]
                        ],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [j, [m, "Lenovo"],
                            [l, r]
                        ],
                        [/linux;.+((jolla));/i],
                        [m, j, [l, q]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [m, j, [l, t]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [m, j, [l, q]],
                        [/crkey/i],
                        [
                            [j, "Chromecast"],
                            [m, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [j, [m, "Google"],
                            [l, t]
                        ],
                        [/android.+;\s(pixel c)\s/i],
                        [j, [m, "Google"],
                            [l, r]
                        ],
                        [/android.+;\s(pixel xl|pixel)\s/i],
                        [j, [m, "Google"],
                            [l, q]
                        ],
                        [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                        [
                            [j, /_/g, " "],
                            [m, "Xiaomi"],
                            [l, q]
                        ],
                        [/android.+a000(1)\s+build/i],
                        [j, [m, "OnePlus"],
                            [l, q]
                        ],
                        [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [l, v.lowerize], m, j
                        ]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [n, [k, "EdgeHTML"]],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [k, n],
                        [/rv\:([\w\.]+).*(gecko)/i],
                        [n, k]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [k, n],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [k, [n, w.str, x.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [k, "Windows"],
                            [n, w.str, x.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [k, "BlackBerry"], n
                        ],
                        [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                        [k, n],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                        [
                            [k, "Symbian"], n
                        ],
                        [/\((series40);/i],
                        [k],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [k, "Firefox OS"], n
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                        [k, n],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [k, "Chromium OS"], n
                        ],
                        [/(sunos)\s?([\w\.]+\d)*/i],
                        [
                            [k, "Solaris"], n
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                        [k, n],
                        [/(haiku)\s(\w+)/i],
                        [k, n],
                        [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                        [
                            [k, "iOS"],
                            [n, /_/g, "."]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [k, "Mac OS"],
                            [n, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                        [k, n]
                    ]
                },
                z = function(a, b) {
                    this[k] = a, this[n] = b
                },
                A = function(a) {
                    this[o] = a
                },
                B = function(a, b, c) {
                    this[m] = a, this[j] = b, this[l] = c
                },
                C = z,
                D = z,
                E = function(b, c) {
                    if (!(this instanceof E)) return new E(b, c).getResult();
                    var e = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : d),
                        f = c ? v.extend(y, c) : y,
                        g = new z,
                        h = new A,
                        i = new B,
                        j = new C,
                        k = new D;
                    return this.getBrowser = function() {
                        return w.rgx.call(g, e, f.browser), g.major = v.major(g.version), g
                    }, this.getCPU = function() {
                        return w.rgx.call(h, e, f.cpu), h
                    }, this.getDevice = function() {
                        return w.rgx.call(i, e, f.device), i
                    }, this.getEngine = function() {
                        return w.rgx.call(j, e, f.engine), j
                    }, this.getOS = function() {
                        return w.rgx.call(k, e, f.os), k
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return e
                    }, this.setUA = function(a) {
                        return e = a, g = new z, h = new A, i = new B, j = new C, k = new D, this
                    }, this
                };
            return E.VERSION = c, E.BROWSER = {
                NAME: k,
                MAJOR: i,
                VERSION: n
            }, E.CPU = {
                ARCHITECTURE: o
            }, E.DEVICE = {
                MODEL: j,
                VENDOR: m,
                TYPE: l,
                CONSOLE: p,
                MOBILE: q,
                SMARTTV: s,
                TABLET: r,
                WEARABLE: t,
                EMBEDDED: u
            }, E.ENGINE = {
                NAME: k,
                VERSION: n
            }, E.OS = {
                NAME: k,
                VERSION: n
            }, new E
        }("object" == typeof window ? window : this)
    }
    BG.START_TYPE = {
        BROWSER: 1,
        CHAT: 2,
        FULL: 3
    }, BG.log = function(a) {
        "undefined" != typeof console && null !== console && "function" == typeof console.log && ("object" == typeof a ? console.log(JSON.stringify(a, void 0, 2)) : console.log(a))
    }, BG.exceptionFactory = function(a) {
        return a
    }, BG.clone = function(a) {
        var b, c;
        if (null === a || "object" != typeof a) return a;
        b = a.constructor();
        for (c in a) a.hasOwnProperty(c) && (b[c] = BG.clone(a[c]));
        return b
    }, BG.makeSession = function() {
        delete BG.core, delete BG.session, BG.session = new b
    }, BG.makeSession()
}();
//# sourceMappingURL=start_session-min.js.map