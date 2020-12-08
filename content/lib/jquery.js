! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = !!a && "length" in a && a.length,
            c = ma.type(a);
        return "function" !== c && !ma.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a, b, c) {
        if (ma.isFunction(b)) return ma.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ma.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (wa.test(b)) return ma.filter(b, a, c);
            b = ma.filter(b, a)
        }
        return ma.grep(a, function(a) {
            return ma.inArray(a, b) > -1 !== c
        })
    }

    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = {};
        return ma.each(a.match(Ca) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        da.addEventListener ? (da.removeEventListener("DOMContentLoaded", h), a.removeEventListener("load", h)) : (da.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (da.addEventListener || "load" === a.event.type || "complete" === da.readyState) && (g(), ma.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Ha, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : Ga.test(c) ? ma.parseJSON(c) : c)
                } catch (e) {}
                ma.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ma.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (Fa(a)) {
            var e, f, g = ma.expando,
                h = a.nodeType,
                i = h ? ma.cache : a,
                j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = ca.pop() || ma.guid++ : g), i[j] || (i[j] = h ? {} : {
                toJSON: ma.noop
            }), "object" != typeof b && "function" != typeof b || (d ? i[j] = ma.extend(i[j], b) : i[j].data = ma.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ma.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ma.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (Fa(a)) {
            var d, e, f = a.nodeType,
                g = f ? ma.cache : a,
                h = f ? a[ma.expando] : ma.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ma.isArray(b) ? b = b.concat(ma.map(b, ma.camelCase)) : b in d ? b = [b] : (b = ma.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !ma.isEmptyObject(d)) return
                }(c || (delete g[h].data, j(g[h]))) && (f ? ma.cleanData([a], !0) : la.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }

    function m(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return ma.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (ma.cssNumber[b] ? "" : "px"),
            k = (ma.cssNumber[b] || "px" !== j && +i) && Ja.exec(ma.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, ma.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function n(a) {
        var b = Ra.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function o(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ma.nodeName(d, b) ? f.push(d) : ma.merge(f, o(d, b));
        return void 0 === b || b && ma.nodeName(a, b) ? ma.merge([a], f) : f
    }

    function p(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ma._data(c, "globalEval", !b || ma._data(b[d], "globalEval"))
    }

    function q(a) {
        Na.test(a.type) && (a.defaultChecked = a.checked)
    }

    function r(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l, m = a.length, r = n(b), s = [], t = 0; t < m; t++)
            if (g = a[t], g || 0 === g)
                if ("object" === ma.type(g)) ma.merge(s, g.nodeType ? [g] : g);
                else if (Ta.test(g)) {
            for (i = i || r.appendChild(b.createElement("div")), j = (Oa.exec(g) || ["", ""])[1].toLowerCase(), l = Sa[j] || Sa._default, i.innerHTML = l[1] + ma.htmlPrefilter(g) + l[2], f = l[0]; f--;) i = i.lastChild;
            if (!la.leadingWhitespace && Qa.test(g) && s.push(b.createTextNode(Qa.exec(g)[0])), !la.tbody)
                for (g = "table" !== j || Ua.test(g) ? "<table>" !== l[1] || Ua.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; f--;) ma.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
            for (ma.merge(s, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
            i = r.lastChild
        } else s.push(b.createTextNode(g));
        for (i && r.removeChild(i), la.appendChecked || ma.grep(o(s, "input"), q), t = 0; g = s[t++];)
            if (d && ma.inArray(g, d) > -1) e && e.push(g);
            else if (h = ma.contains(g.ownerDocument, g), i = o(r.appendChild(g), "script"), h && p(i), c)
            for (f = 0; g = i[f++];) Pa.test(g.type || "") && c.push(g);
        return i = null, r
    }

    function s() {
        return !0
    }

    function t() {
        return !1
    }

    function u() {
        try {
            return da.activeElement
        } catch (a) {}
    }

    function v(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) v(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = t;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return ma().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = ma.guid++)), a.each(function() {
            ma.event.add(this, b, e, d, c)
        })
    }

    function w(a, b) {
        return ma.nodeName(a, "table") && ma.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function x(a) {
        return a.type = (null !== ma.find.attr(a, "type")) + "/" + a.type, a
    }

    function y(a) {
        var b = db.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function z(a, b) {
        if (1 === b.nodeType && ma.hasData(a)) {
            var c, d, e, f = ma._data(a),
                g = ma._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; d < e; d++) ma.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ma.extend({}, g.data))
        }
    }

    function A(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !la.noCloneEvent && b[ma.expando]) {
                e = ma._data(b);
                for (d in e.events) ma.removeEvent(b, d, e.handle);
                b.removeAttribute(ma.expando)
            }
            "script" === c && b.text !== a.text ? (x(b).text = a.text, y(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), la.html5Clone && a.innerHTML && !ma.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Na.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function B(a, b, c, d) {
        b = fa.apply([], b);
        var e, f, g, h, i, j, k = 0,
            l = a.length,
            m = l - 1,
            n = b[0],
            p = ma.isFunction(n);
        if (p || l > 1 && "string" == typeof n && !la.checkClone && cb.test(n)) return a.each(function(e) {
            var f = a.eq(e);
            p && (b[0] = n.call(this, e, f.html())), B(f, b, c, d)
        });
        if (l && (j = r(b, a[0].ownerDocument, !1, a, d), e = j.firstChild, 1 === j.childNodes.length && (j = e), e || d)) {
            for (h = ma.map(o(j, "script"), x), g = h.length; k < l; k++) f = j, k !== m && (f = ma.clone(f, !0, !0), g && ma.merge(h, o(f, "script"))), c.call(a[k], f, k);
            if (g)
                for (i = h[h.length - 1].ownerDocument, ma.map(h, y), k = 0; k < g; k++) f = h[k], Pa.test(f.type || "") && !ma._data(f, "globalEval") && ma.contains(i, f) && (f.src ? ma._evalUrl && ma._evalUrl(f.src) : ma.globalEval((f.text || f.textContent || f.innerHTML || "").replace(eb, "")));
            j = e = null
        }
        return a
    }

    function C(a, b, c) {
        for (var d, e = b ? ma.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || ma.cleanData(o(d)), d.parentNode && (c && ma.contains(d.ownerDocument, d) && p(o(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function D(a, b) {
        var c = ma(b.createElement(a)).appendTo(b.body),
            d = ma.css(c[0], "display");
        return c.detach(), d
    }

    function E(a) {
        var b = da,
            c = ib[a];
        return c || (c = D(a, b), "none" !== c && c || (hb = (hb || ma("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (hb[0].contentWindow || hb[0].contentDocument).document, b.write(), b.close(), c = D(a, b), hb.detach()), ib[a] = c), c
    }

    function F(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function G(a) {
        if (a in xb) return a;
        for (var b = a.charAt(0).toUpperCase() + a.slice(1), c = wb.length; c--;)
            if (a = wb[c] + b, a in xb) return a
    }

    function H(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = ma._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && La(d) && (f[g] = ma._data(d, "olddisplay", E(d.nodeName)))) : (e = La(d), (c && "none" !== c || !e) && ma._data(d, "olddisplay", e ? c : ma.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function I(a, b, c) {
        var d = tb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function J(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += ma.css(a, c + Ka[f], !0, e)), d ? ("content" === c && (g -= ma.css(a, "padding" + Ka[f], !0, e)), "margin" !== c && (g -= ma.css(a, "border" + Ka[f] + "Width", !0, e))) : (g += ma.css(a, "padding" + Ka[f], !0, e), "padding" !== c && (g += ma.css(a, "border" + Ka[f] + "Width", !0, e)));
        return g
    }

    function K(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = nb(a),
            g = la.boxSizing && "border-box" === ma.css(a, "boxSizing", !1, f);
        if (e <= 0 || null == e) {
            if (e = ob(a, b, f), (e < 0 || null == e) && (e = a.style[b]), kb.test(e)) return e;
            d = g && (la.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + J(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function L(a, b, c, d, e) {
        return new L.prototype.init(a, b, c, d, e)
    }

    function M() {
        return a.setTimeout(function() {
            yb = void 0
        }), yb = ma.now()
    }

    function N(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; e < 4; e += 2 - b) c = Ka[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a, b, c) {
        for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && La(a),
            p = ma._data(a, "fxshow");
        c.queue || (h = ma._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, ma.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ma.css(a, "display"), k = "none" === j ? ma._data(a, "olddisplay") || E(a.nodeName) : j, "inline" === k && "none" === ma.css(a, "float") && (la.inlineBlockNeedsLayout && "inline" !== E(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", la.shrinkWrapBlocks() || l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || ma.style(a, d)
            } else j = void 0;
        if (ma.isEmptyObject(m)) "inline" === ("none" === j ? E(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ma._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ma(a).show() : l.done(function() {
                ma(a).hide()
            }), l.done(function() {
                var b;
                ma._removeData(a, "fxshow");
                for (b in m) ma.style(a, b, m[b])
            });
            for (d in m) g = O(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Q(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ma.camelCase(c), e = b[d], f = a[c], ma.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ma.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function R(a, b, c) {
        var d, e, f = 0,
            g = R.prefilters.length,
            h = ma.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = yb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ma.extend({}, b),
                opts: ma.extend(!0, {
                    specialEasing: {},
                    easing: ma.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: yb || M(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = ma.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Q(k, j.opts.specialEasing); f < g; f++)
            if (d = R.prefilters[f].call(j, a, k, j.opts)) return ma.isFunction(d.stop) && (ma._queueHooks(j.elem, j.opts.queue).stop = ma.proxy(d.stop, d)), d;
        return ma.map(k, O, j), ma.isFunction(j.opts.start) && j.opts.start.call(a, j), ma.fx.timer(ma.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(a) {
        return ma.attr(a, "class") || ""
    }

    function T(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Ca) || [];
            if (ma.isFunction(c))
                for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function U(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ma.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Zb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function V(a, b) {
        var c, d, e = ma.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ma.extend(!0, a, c), a
    }

    function W(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function X(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Y(a) {
        return a.style && a.style.display || ma.css(a, "display")
    }

    function Z(a) {
        if (!ma.contains(a.ownerDocument || da, a)) return !0;
        for (; a && 1 === a.nodeType;) {
            if ("none" === Y(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }

    function $(a, b, c, d) {
        var e;
        if (ma.isArray(b)) ma.each(b, function(b, e) {
            c || cc.test(a) ? d(a, e) : $(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ma.type(b)) d(a, b);
        else
            for (e in b) $(a + "[" + e + "]", b[e], c, d)
    }

    function _() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function aa() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ba(a) {
        return ma.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }
    var ca = [],
        da = a.document,
        ea = ca.slice,
        fa = ca.concat,
        ga = ca.push,
        ha = ca.indexOf,
        ia = {},
        ja = ia.toString,
        ka = ia.hasOwnProperty,
        la = {},
        ma = function(a, b) {
            return new ma.fn.init(a, b)
        },
        na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oa = /^-ms-/,
        pa = /-([\da-z])/gi,
        qa = function(a, b) {
            return b.toUpperCase()
        };
    ma.fn = ma.prototype = {
        constructor: ma,
        selector: "",
        length: 0,
        toArray: function() {
            return ea.call(this)
        },
        get: function(a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : ea.call(this)
        },
        pushStack: function(a) {
            var b = ma.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return ma.each(this, a)
        },
        map: function(a) {
            return this.pushStack(ma.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ea.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ga,
        sort: ca.sort,
        splice: ca.splice
    }, ma.extend = ma.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ma.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ma.isPlainObject(c) || (b = ma.isArray(c))) ? (b ? (b = !1, f = a && ma.isArray(a) ? a : []) : f = a && ma.isPlainObject(a) ? a : {}, g[d] = ma.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, ma.extend({
        expando: "jQuery" + ("" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === ma.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === ma.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !ma.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== ma.type(a) || a.nodeType || ma.isWindow(a)) return !1;
            try {
                if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!la.ownFirst)
                for (b in a) return ka.call(a, b);
            for (b in a);
            return void 0 === b || ka.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && ma.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(oa, "ms-").replace(pa, qa)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var d, e = 0;
            if (c(a))
                for (d = a.length; e < d && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(na, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ma.merge(d, "string" == typeof a ? [a] : a) : ga.call(d, a)), d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (ha) return ha.call(b, a, c);
                for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c;) a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f, g = 0,
                h = [];
            if (c(a))
                for (e = a.length; g < e; g++) f = b(a[g], g, d), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, d), null != f && h.push(f);
            return fa.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (e = a[b], b = a, a = e), ma.isFunction(a)) return c = ea.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(ea.call(arguments)))
            }, d.guid = a.guid = a.guid || ma.guid++, d
        },
        now: function() {
            return +new Date
        },
        support: la
    }), "function" == typeof Symbol && (ma.fn[Symbol.iterator] = ca[Symbol.iterator]), ma.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ia["[object " + b + "]"] = b.toLowerCase()
    });
    var ra = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o = b && b.ownerDocument,
                p = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== p && 9 !== p && 11 !== p) return c;
            if (!d && ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, I)) {
                if (11 !== p && (j = ra.exec(a)))
                    if (e = j[1]) {
                        if (9 === p) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (o && (g = o.getElementById(e)) && M(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (j[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = j[3]) && v.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (v.qsa && !T[a + " "] && (!J || !J.test(a))) {
                    if (1 !== p) o = b, n = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(ta, "\\$&") : b.setAttribute("id", h = N), l = z(a), f = l.length, i = ma.test(h) ? "#" + h : "[id='" + h + "']"; f--;) l[f] = i + " " + m(l[f]);
                        n = l.join(","), o = sa.test(a) && k(b.parentNode) || b
                    }
                    if (n) try {
                        return $.apply(c, o.querySelectorAll(n)), c
                    } catch (q) {} finally {
                        h === N && b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (j = b[N] || (b[N] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === P && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; h < e; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; d < e && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, h < d && s(a.slice(h, d)), d < e && s(a = a.slice(d)), d < e && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g === G || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === G || (F(k), h = !I); m = a[l++];)
                                if (m(k, g || G, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = /'|\\/g,
            ua = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            va = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            wa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (xa) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = G.documentElement, I = !y(G), (c = G.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", wa, !1) : c.attachEvent && c.attachEvent("onunload", wa)), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(G.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = qa.test(G.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !G.getElementsByName || !G.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(ua, va);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && I) return b.getElementsByClassName(a)
            }, K = [], J = [], (v.qsa = qa.test(G.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = G.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = qa.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", fa)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = qa.test(H.compareDocumentPosition), M = b || qa.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === G || a.ownerDocument === O && M(O, a) ? -1 : b === G || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === G ? -1 : b === G ? 1 : e ? -1 : f ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === O ? -1 : i[d] === O ? 1 : 0
            }, G) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(ka, "='$1']"), v.matchesSelector && I && !T[c + " "] && (!K || !K.test(c)) && (!J || !J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ua, va), a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ua, va).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [P, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === P && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[N] || (m[N] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [P, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ha, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(ua, va),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ua, va).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return pa.test(a.nodeName)
                },
                input: function(a) {
                    return oa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(ua, va), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(ua, va), sa.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, !b || sa.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ma.find = ra, ma.expr = ra.selectors, ma.expr[":"] = ma.expr.pseudos, ma.uniqueSort = ma.unique = ra.uniqueSort, ma.text = ra.getText, ma.isXMLDoc = ra.isXML, ma.contains = ra.contains;
    var sa = function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && ma(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ta = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ua = ma.expr.match.needsContext,
        va = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        wa = /^.[^:#\[\.,]*$/;
    ma.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ma.find.matchesSelector(d, a) ? [d] : [] : ma.find.matches(a, ma.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, ma.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(ma(a).filter(function() {
                for (b = 0; b < e; b++)
                    if (ma.contains(d[b], this)) return !0
            }));
            for (b = 0; b < e; b++) ma.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ma.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && ua.test(a) ? ma(a) : a || [], !1).length
        }
    });
    var xa, ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        za = ma.fn.init = function(a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || xa, "string" == typeof a) {
                if (d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ya.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof ma ? b[0] : b, ma.merge(this, ma.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : da, !0)), va.test(d[1]) && ma.isPlainObject(b))
                        for (d in b) ma.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                if (e = da.getElementById(d[2]), e && e.parentNode) {
                    if (e.id !== d[2]) return xa.find(a);
                    this.length = 1, this[0] = e
                }
                return this.context = da, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ma.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(ma) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ma.makeArray(a, this))
        };
    za.prototype = ma.fn, xa = ma(da);
    var Aa = /^(?:parents|prev(?:Until|All))/,
        Ba = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ma.fn.extend({
        has: function(a) {
            var b, c = ma(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (ma.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ua.test(a) || "string" != typeof a ? ma(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ma.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? ma.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ma.inArray(this[0], ma(a)) : ma.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(ma.uniqueSort(ma.merge(this.get(), ma(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ma.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return sa(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return sa(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return sa(a, "nextSibling")
        },
        prevAll: function(a) {
            return sa(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return sa(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return sa(a, "previousSibling", c)
        },
        siblings: function(a) {
            return ta((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ta(a.firstChild)
        },
        contents: function(a) {
            return ma.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ma.merge([], a.childNodes)
        }
    }, function(a, b) {
        ma.fn[a] = function(c, d) {
            var e = ma.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ma.filter(d, e)), this.length > 1 && (Ba[a] || (e = ma.uniqueSort(e)), Aa.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var Ca = /\S+/g;
    ma.Callbacks = function(a) {
        a = "string" == typeof a ? f(a) : ma.extend({}, a);
        var b, c, d, e, g = [],
            h = [],
            i = -1,
            j = function() {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < g.length;) g[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = g.length, c = !1);
                a.memory || (c = !1), b = !1, e && (g = c ? [] : "")
            },
            k = {
                add: function() {
                    return g && (c && !b && (i = g.length - 1, h.push(c)), function d(b) {
                        ma.each(b, function(b, c) {
                            ma.isFunction(c) ? a.unique && k.has(c) || g.push(c) : c && c.length && "string" !== ma.type(c) && d(c)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function() {
                    return ma.each(arguments, function(a, b) {
                        for (var c;
                            (c = ma.inArray(b, g, c)) > -1;) g.splice(c, 1), c <= i && i--
                    }), this
                },
                has: function(a) {
                    return a ? ma.inArray(a, g) > -1 : g.length > 0
                },
                empty: function() {
                    return g && (g = []), this
                },
                disable: function() {
                    return e = h = [], g = c = "", this
                },
                disabled: function() {
                    return !g
                },
                lock: function() {
                    return e = !0, c || k.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, ma.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", ma.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ma.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ma.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return ma.Deferred(function(c) {
                            ma.each(b, function(b, f) {
                                var g = ma.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && ma.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? ma.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, ma.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = ea.call(arguments),
                g = f.length,
                h = 1 !== g || a && ma.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ma.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? ea.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && ma.isFunction(f[e].promise) ? f[e].promise().progress(j(e, c, b)).done(j(e, d, f)).fail(i.reject) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var Da;
    ma.fn.ready = function(a) {
        return ma.ready.promise().done(a), this
    }, ma.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? ma.readyWait++ : ma.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --ma.readyWait : ma.isReady) || (ma.isReady = !0, a !== !0 && --ma.readyWait > 0 || (Da.resolveWith(da, [ma]), ma.fn.triggerHandler && (ma(da).triggerHandler("ready"), ma(da).off("ready"))))
        }
    }), ma.ready.promise = function(b) {
        if (!Da)
            if (Da = ma.Deferred(), "complete" === da.readyState || "loading" !== da.readyState && !da.documentElement.doScroll) a.setTimeout(ma.ready);
            else if (da.addEventListener) da.addEventListener("DOMContentLoaded", h), a.addEventListener("load", h);
        else {
            da.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && da.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!ma.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(e, 50)
                    }
                    g(), ma.ready()
                }
            }()
        }
        return Da.promise(b)
    }, ma.ready.promise();
    var Ea;
    for (Ea in ma(la)) break;
    la.ownFirst = "0" === Ea, la.inlineBlockNeedsLayout = !1, ma(function() {
            var a, b, c, d;
            c = da.getElementsByTagName("body")[0], c && c.style && (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", la.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = da.createElement("div");
            la.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                la.deleteExpando = !1
            }
            a = null
        }();
    var Fa = function(a) {
            var b = ma.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
        },
        Ga = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ha = /([A-Z])/g;
    ma.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? ma.cache[a[ma.expando]] : a[ma.expando], !!a && !j(a)
            },
            data: function(a, b, c) {
                return k(a, b, c)
            },
            removeData: function(a, b) {
                return l(a, b)
            },
            _data: function(a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return l(a, b, !0)
            }
        }), ma.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ma.data(f), 1 === f.nodeType && !ma._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ma.camelCase(d.slice(5)), i(f, d, e[d])));
                        ma._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    ma.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    ma.data(this, a, b)
                }) : f ? i(f, a, ma.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    ma.removeData(this, a)
                })
            }
        }), ma.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = ma._data(a, b), c && (!d || ma.isArray(c) ? d = ma._data(a, b, ma.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ma.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ma._queueHooks(a, b),
                    g = function() {
                        ma.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ma._data(a, c) || ma._data(a, c, {
                    empty: ma.Callbacks("once memory").add(function() {
                        ma._removeData(a, b + "queue"), ma._removeData(a, c)
                    })
                })
            }
        }), ma.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ma.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = ma.queue(this, a, b);
                    ma._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ma.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    ma.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = ma.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ma._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            la.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = da.getElementsByTagName("body")[0], c && c.style ? (b = da.createElement("div"), d = da.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(da.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
    var Ia = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ja = new RegExp("^(?:([+-])=|)(" + Ia + ")([a-z%]*)$", "i"),
        Ka = ["Top", "Right", "Bottom", "Left"],
        La = function(a, b) {
            return a = b || a, "none" === ma.css(a, "display") || !ma.contains(a.ownerDocument, a)
        },
        Ma = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === ma.type(c)) {
                e = !0;
                for (h in c) Ma(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, ma.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(ma(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Na = /^(?:checkbox|radio)$/i,
        Oa = /<([\w:-]+)/,
        Pa = /^$|\/(?:java|ecma)script/i,
        Qa = /^\s+/,
        Ra = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var a = da.createElement("div"),
            b = da.createDocumentFragment(),
            c = da.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", la.leadingWhitespace = 3 === a.firstChild.nodeType, la.tbody = !a.getElementsByTagName("tbody").length, la.htmlSerialize = !!a.getElementsByTagName("link").length, la.html5Clone = "<:nav></:nav>" !== da.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), la.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", la.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = da.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), la.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, la.noCloneEvent = !!a.addEventListener, a[ma.expando] = 1, la.attributes = !a.getAttribute(ma.expando)
    }();
    var Sa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: la.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Sa.optgroup = Sa.option, Sa.tbody = Sa.tfoot = Sa.colgroup = Sa.caption = Sa.thead, Sa.th = Sa.td;
    var Ta = /<|&#?\w+;/,
        Ua = /<tbody/i;
    ! function() {
        var b, c, d = da.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (la[b] = c in a) || (d.setAttribute(c, "t"), la[b] = d.attributes[c].expando === !1);
        d = null
    }();
    var Va = /^(?:input|select|textarea)$/i,
        Wa = /^key/,
        Xa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ya = /^(?:focusinfocus|focusoutblur)$/,
        Za = /^([^.]*)(?:\.(.+)|)/;
    ma.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ma._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ma.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
                        return "undefined" == typeof ma || a && ma.event.triggered === a.type ? void 0 : ma.event.dispatch.apply(k.elem, arguments)
                    }, k.elem = a), b = (b || "").match(Ca) || [""], h = b.length; h--;) f = Za.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ma.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ma.event.special[n] || {}, l = ma.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ma.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ma.event.global[n] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ma.hasData(a) && ma._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(Ca) || [""], j = b.length; j--;)
                    if (h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ma.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ma.removeEvent(a, n, q.handle), delete k[n])
                    } else
                        for (n in k) ma.event.remove(a, n + b[j], c, d, !0);
                ma.isEmptyObject(k) && (delete q.handle, ma._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || da],
                n = ka.call(b, "type") ? b.type : b,
                o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || da, 3 !== d.nodeType && 8 !== d.nodeType && !Ya.test(n + ma.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ma.expando] ? b : new ma.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ma.makeArray(c, [b]), j = ma.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ma.isWindow(d)) {
                    for (i = j.delegateType || n, Ya.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || da) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0;
                    (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ma._data(h, "events") || {})[b.type] && ma._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && Fa(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && Fa(d) && g && d[n] && !ma.isWindow(d)) {
                    k = d[g], k && (d[g] = null), ma.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {}
                    ma.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = ma.event.fix(a);
            var b, c, d, e, f, g = [],
                h = ea.call(arguments),
                i = (ma._data(this, "events") || {})[a.type] || [],
                j = ma.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ma.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(f.namespace) || (a.handleObj = f, a.data = f.data, d = ((ma.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? ma(e, this).index(i) > -1 : ma.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[ma.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Xa.test(e) ? this.mouseHooks : Wa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ma.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || da), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || da, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === u() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (ma.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(a) {
                    return ma.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = ma.extend(new ma.Event, c, {
                type: a,
                isSimulated: !0
            });
            ma.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, ma.removeEvent = da.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, ma.Event = function(a, b) {
        return this instanceof ma.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? s : t) : this.type = a, b && ma.extend(this, b), this.timeStamp = a && a.timeStamp || ma.now(), void(this[ma.expando] = !0)) : new ma.Event(a, b)
    }, ma.Event.prototype = {
        constructor: ma.Event,
        isDefaultPrevented: t,
        isPropagationStopped: t,
        isImmediatePropagationStopped: t,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = s, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = s, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = s, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ma.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        ma.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || ma.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), la.submit || (ma.event.special.submit = {
        setup: function() {
            return !ma.nodeName(this, "form") && void ma.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = ma.nodeName(b, "input") || ma.nodeName(b, "button") ? ma.prop(b, "form") : void 0;
                c && !ma._data(c, "submit") && (ma.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), ma._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && ma.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return !ma.nodeName(this, "form") && void ma.event.remove(this, "._submit")
        }
    }), la.change || (ma.event.special.change = {
        setup: function() {
            return Va.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ma.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), ma.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), ma.event.simulate("change", this, a)
            })), !1) : void ma.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Va.test(b.nodeName) && !ma._data(b, "change") && (ma.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ma.event.simulate("change", this.parentNode, a)
                }), ma._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ma.event.remove(this, "._change"), !Va.test(this.nodeName)
        }
    }), la.focusin || ma.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            ma.event.simulate(b, a.target, ma.event.fix(a))
        };
        ma.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ma._data(d, b);
                e || d.addEventListener(a, c, !0), ma._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ma._data(d, b) - 1;
                e ? ma._data(d, b, e) : (d.removeEventListener(a, c, !0), ma._removeData(d, b))
            }
        }
    }), ma.fn.extend({
        on: function(a, b, c, d) {
            return v(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return v(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ma(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = t), this.each(function() {
                ma.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                ma.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return ma.event.trigger(a, b, c, !0)
        }
    });
    var $a = / jQuery\d+="(?:null|\d+)"/g,
        _a = new RegExp("<(?:" + Ra + ")[\\s/>]", "i"),
        ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        bb = /<script|<style|<link/i,
        cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        db = /^true\/(.*)/,
        eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        fb = n(da),
        gb = fb.appendChild(da.createElement("div"));
    ma.extend({
        htmlPrefilter: function(a) {
            return a.replace(ab, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = ma.contains(a.ownerDocument, a);
            if (la.html5Clone || ma.isXMLDoc(a) || !_a.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (gb.innerHTML = a.outerHTML, gb.removeChild(f = gb.firstChild)), !(la.noCloneEvent && la.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ma.isXMLDoc(a)))
                for (d = o(f), h = o(a), g = 0; null != (e = h[g]); ++g) d[g] && A(e, d[g]);
            if (b)
                if (c)
                    for (h = h || o(a), d = d || o(f), g = 0; null != (e = h[g]); g++) z(e, d[g]);
                else z(a, f);
            return d = o(f, "script"), d.length > 0 && p(d, !i && o(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ma.expando, i = ma.cache, j = la.attributes, k = ma.event.special; null != (c = a[g]); g++)
                if ((b || Fa(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ma.event.remove(c, d) : ma.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j || "undefined" == typeof c.removeAttribute ? c[h] = void 0 : c.removeAttribute(h), ca.push(e))
                }
        }
    }), ma.fn.extend({
        domManip: B,
        detach: function(a) {
            return C(this, a, !0)
        },
        remove: function(a) {
            return C(this, a)
        },
        text: function(a) {
            return Ma(this, function(a) {
                return void 0 === a ? ma.text(this) : this.empty().append((this[0] && this[0].ownerDocument || da).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return B(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = w(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return B(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = w(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return B(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return B(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ma.cleanData(o(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ma.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return ma.clone(this, a, b)
            })
        },
        html: function(a) {
            return Ma(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace($a, "") : void 0;
                if ("string" == typeof a && !bb.test(a) && (la.htmlSerialize || !_a.test(a)) && (la.leadingWhitespace || !Qa.test(a)) && !Sa[(Oa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = ma.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (ma.cleanData(o(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return B(this, arguments, function(b) {
                var c = this.parentNode;
                ma.inArray(this, a) < 0 && (ma.cleanData(o(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), ma.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        ma.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ma(a), g = f.length - 1; d <= g; d++) c = d === g ? this : this.clone(!0), ma(f[d])[b](c), ga.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var hb, ib = {
            HTML: "block",
            BODY: "block"
        },
        jb = /^margin/,
        kb = new RegExp("^(" + Ia + ")(?!px)[a-z%]+$", "i"),
        lb = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        mb = da.documentElement;
    ! function() {
        function b() {
            var b, k, l = da.documentElement;
            l.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", c = e = h = !1, d = g = !0, a.getComputedStyle && (k = a.getComputedStyle(j), c = "1%" !== (k || {}).top, h = "2px" === (k || {}).marginLeft, e = "4px" === (k || {
                width: "4px"
            }).width, j.style.marginRight = "50%", d = "4px" === (k || {
                marginRight: "4px"
            }).marginRight, b = j.appendChild(da.createElement("div")), b.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", b.style.marginRight = b.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(b) || {}).marginRight), j.removeChild(b)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", b = j.getElementsByTagName("td"), b[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === b[0].offsetHeight, f && (b[0].style.display = "", b[1].style.display = "none", f = 0 === b[0].offsetHeight)), l.removeChild(i)
        }
        var c, d, e, f, g, h, i = da.createElement("div"),
            j = da.createElement("div");
        j.style && (j.style.cssText = "float:left;opacity:.5", la.opacity = "0.5" === j.style.opacity, la.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", la.clearCloneStyle = "content-box" === j.style.backgroundClip, i = da.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), la.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, ma.extend(la, {
            reliableHiddenOffsets: function() {
                return null == c && b(), f
            },
            boxSizingReliable: function() {
                return null == c && b(), e
            },
            pixelMarginRight: function() {
                return null == c && b(), d
            },
            pixelPosition: function() {
                return null == c && b(), c
            },
            reliableMarginRight: function() {
                return null == c && b(), g
            },
            reliableMarginLeft: function() {
                return null == c && b(), h
            }
        }))
    }();
    var nb, ob, pb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (nb = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, ob = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || nb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || ma.contains(a.ownerDocument, a) || (g = ma.style(a, b)), c && !la.pixelMarginRight() && kb.test(g) && jb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : mb.currentStyle && (nb = function(a) {
        return a.currentStyle
    }, ob = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || nb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), kb.test(g) && !pb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    var qb = /alpha\([^)]*\)/i,
        rb = /opacity\s*=\s*([^)]*)/i,
        sb = /^(none|table(?!-c[ea]).+)/,
        tb = new RegExp("^(" + Ia + ")(.*)$", "i"),
        ub = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        vb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        wb = ["Webkit", "O", "Moz", "ms"],
        xb = da.createElement("div").style;
    ma.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ob(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": la.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ma.camelCase(b),
                    i = a.style;
                if (b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Ja.exec(c)) && e[1] && (c = m(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (ma.cssNumber[h] ? "" : "px")), la.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = ma.camelCase(b);
            return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = ob(a, b, d)), "normal" === f && b in vb && (f = vb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), ma.each(["height", "width"], function(a, b) {
        ma.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return sb.test(ma.css(a, "display")) && 0 === a.offsetWidth ? lb(a, ub, function() {
                    return K(a, b, d)
                }) : K(a, b, d)
            },
            set: function(a, c, d) {
                var e = d && nb(a);
                return I(a, c, d ? J(a, b, d, la.boxSizing && "border-box" === ma.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), la.opacity || (ma.cssHooks.opacity = {
        get: function(a, b) {
            return rb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ma.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ma.trim(f.replace(qb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = qb.test(f) ? f.replace(qb, e) : f + " " + e)
        }
    }), ma.cssHooks.marginRight = F(la.reliableMarginRight, function(a, b) {
        if (b) return lb(a, {
            display: "inline-block"
        }, ob, [a, "marginRight"])
    }), ma.cssHooks.marginLeft = F(la.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(ob(a, "marginLeft")) || (ma.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - lb(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ma.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        ma.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Ka[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, jb.test(a) || (ma.cssHooks[a + b].set = I)
    }), ma.fn.extend({
        css: function(a, b) {
            return Ma(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (ma.isArray(b)) {
                    for (d = nb(a), e = b.length; g < e; g++) f[b[g]] = ma.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ma.style(a, b, c) : ma.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return H(this, !0)
        },
        hide: function() {
            return H(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                La(this) ? ma(this).show() : ma(this).hide()
            })
        }
    }), ma.Tween = L, L.prototype = {
        constructor: L,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || ma.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ma.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = L.propHooks[this.prop];
            return a && a.get ? a.get(this) : L.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = L.propHooks[this.prop];
            return this.options.duration ? this.pos = b = ma.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = ma.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                ma.fx.step[a.prop] ? ma.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[ma.cssProps[a.prop]] && !ma.cssHooks[a.prop] ? a.elem[a.prop] = a.now : ma.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ma.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, ma.fx = L.prototype.init, ma.fx.step = {};
    var yb, zb, Ab = /^(?:toggle|show|hide)$/,
        Bb = /queueHooks$/;
    ma.Animation = ma.extend(R, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return m(c.elem, a, Ja.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                ma.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ca);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
            },
            prefilters: [P],
            prefilter: function(a, b) {
                b ? R.prefilters.unshift(a) : R.prefilters.push(a)
            }
        }), ma.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? ma.extend({}, a) : {
                complete: c || !c && b || ma.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ma.isFunction(b) && b
            };
            return d.duration = ma.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ma.fx.speeds ? ma.fx.speeds[d.duration] : ma.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                ma.isFunction(d.old) && d.old.call(this), d.queue && ma.dequeue(this, d.queue)
            }, d
        }, ma.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(La).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = ma.isEmptyObject(a),
                    f = ma.speed(b, c, d),
                    g = function() {
                        var b = R(this, ma.extend({}, a), f);
                        (e || ma._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = ma.timers,
                        g = ma._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Bb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || ma.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ma._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ma.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ma.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ma.each(["toggle", "show", "hide"], function(a, b) {
            var c = ma.fn[b];
            ma.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
            }
        }), ma.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            ma.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ma.timers = [], ma.fx.tick = function() {
            var a, b = ma.timers,
                c = 0;
            for (yb = ma.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || ma.fx.stop(), yb = void 0
        }, ma.fx.timer = function(a) {
            ma.timers.push(a), a() ? ma.fx.start() : ma.timers.pop()
        }, ma.fx.interval = 13, ma.fx.start = function() {
            zb || (zb = a.setInterval(ma.fx.tick, ma.fx.interval))
        }, ma.fx.stop = function() {
            a.clearInterval(zb), zb = null
        }, ma.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ma.fn.delay = function(b, c) {
            return b = ma.fx ? ma.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = da.createElement("input"),
                c = da.createElement("div"),
                d = da.createElement("select"),
                e = d.appendChild(da.createElement("option"));
            c = da.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", la.getSetAttribute = "t" !== c.className, la.style = /top/.test(a.getAttribute("style")), la.hrefNormalized = "/a" === a.getAttribute("href"), la.checkOn = !!b.value, la.optSelected = e.selected, la.enctype = !!da.createElement("form").enctype, d.disabled = !0, la.optDisabled = !e.disabled, b = da.createElement("input"), b.setAttribute("value", ""), la.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), la.radioValue = "t" === b.value
        }();
    var Cb = /\r/g,
        Db = /[\x20\t\r\n\f]+/g;
    ma.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = ma.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ma(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ma.isArray(e) && (e = ma.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = ma.valHooks[this.type] || ma.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = ma.valHooks[e.type] || ma.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(Cb, "") : null == c ? "" : c)
            }
        }
    }), ma.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = ma.find.attr(a, "value");
                    return null != b ? b : ma.trim(ma.text(a)).replace(Db, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                        if (c = d[i], (c.selected || i === e) && (la.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !ma.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ma(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = ma.makeArray(b), g = e.length; g--;)
                        if (d = e[g], ma.inArray(ma.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), ma.each(["radio", "checkbox"], function() {
        ma.valHooks[this] = {
            set: function(a, b) {
                if (ma.isArray(b)) return a.checked = ma.inArray(ma(a).val(), b) > -1
            }
        }, la.checkOn || (ma.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var Eb, Fb, Gb = ma.expr.attrHandle,
        Hb = /^(?:checked|selected)$/i,
        Ib = la.getSetAttribute,
        Jb = la.input;
    ma.fn.extend({
        attr: function(a, b) {
            return Ma(this, ma.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                ma.removeAttr(this, a)
            })
        }
    }), ma.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? ma.prop(a, b, c) : (1 === f && ma.isXMLDoc(a) || (b = b.toLowerCase(), e = ma.attrHooks[b] || (ma.expr.match.bool.test(b) ? Fb : Eb)), void 0 !== c ? null === c ? void ma.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = ma.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!la.radioValue && "radio" === b && ma.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(Ca);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ma.propFix[c] || c, ma.expr.match.bool.test(c) ? Jb && Ib || !Hb.test(c) ? a[d] = !1 : a[ma.camelCase("default-" + c)] = a[d] = !1 : ma.attr(a, c, ""), a.removeAttribute(Ib ? c : d)
        }
    }), Fb = {
        set: function(a, b, c) {
            return b === !1 ? ma.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && ma.propFix[c] || c, c) : a[ma.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ma.each(ma.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = Gb[b] || ma.find.attr;
        Jb && Ib || !Hb.test(b) ? Gb[b] = function(a, b, d) {
            var e, f;
            return d || (f = Gb[b], Gb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Gb[b] = f), e
        } : Gb[b] = function(a, b, c) {
            if (!c) return a[ma.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Jb && Ib || (ma.attrHooks.value = {
        set: function(a, b, c) {
            return ma.nodeName(a, "input") ? void(a.defaultValue = b) : Eb && Eb.set(a, b, c)
        }
    }), Ib || (Eb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b
        }
    }, Gb.id = Gb.name = Gb.coords = function(a, b, c) {
        var d;
        if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, ma.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified) return c.value
        },
        set: Eb.set
    }, ma.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Eb.set(a, "" !== b && b, c)
        }
    }, ma.each(["width", "height"], function(a, b) {
        ma.attrHooks[b] = {
            set: function(a, c) {
                if ("" === c) return a.setAttribute(b, "auto"), c
            }
        }
    })), la.style || (ma.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Kb = /^(?:input|select|textarea|button|object)$/i,
        Lb = /^(?:a|area)$/i;
    ma.fn.extend({
        prop: function(a, b) {
            return Ma(this, ma.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = ma.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), ma.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && ma.isXMLDoc(a) || (b = ma.propFix[b] || b, e = ma.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = ma.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Kb.test(a.nodeName) || Lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), la.hrefNormalized || ma.each(["href", "src"], function(a, b) {
        ma.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), la.optSelected || (ma.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), ma.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ma.propFix[this.toLowerCase()] = this
    }), la.enctype || (ma.propFix.enctype = "encoding");
    var Mb = /[\t\r\n\f]/g;
    ma.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (ma.isFunction(a)) return this.each(function(b) {
                ma(this).addClass(a.call(this, b, S(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Mb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = ma.trim(d), e !== h && ma.attr(c, "class", h)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (ma.isFunction(a)) return this.each(function(b) {
                ma(this).removeClass(a.call(this, b, S(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(Mb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = ma.trim(d), e !== h && ma.attr(c, "class", h)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ma.isFunction(a) ? this.each(function(c) {
                ma(this).toggleClass(a.call(this, c, S(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = ma(this), f = a.match(Ca) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else void 0 !== a && "boolean" !== c || (b = S(this), b && ma._data(this, "__className__", b), ma.attr(this, "class", b || a === !1 ? "" : ma._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + S(c) + " ").replace(Mb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), ma.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        ma.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ma.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Nb = a.location,
        Ob = ma.now(),
        Pb = /\?/,
        Qb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ma.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = ma.trim(b + "");
        return e && !ma.trim(e.replace(Qb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : ma.error("Invalid JSON: " + b)
    }, ma.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ma.error("Invalid XML: " + b), c
    };
    var Rb = /#.*$/,
        Sb = /([?&])_=[^&]*/,
        Tb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ub = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vb = /^(?:GET|HEAD)$/,
        Wb = /^\/\//,
        Xb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Yb = {},
        Zb = {},
        $b = "*/".concat("*"),
        _b = Nb.href,
        ac = Xb.exec(_b.toLowerCase()) || [];
    ma.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _b,
            type: "GET",
            isLocal: Ub.test(ac[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $b,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ma.parseJSON,
                "text xml": ma.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? V(V(a, ma.ajaxSettings), b) : V(ma.ajaxSettings, a)
        },
        ajaxPrefilter: T(Yb),
        ajaxTransport: T(Zb),
        ajax: function(b, c) {
            function d(b, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && a.clearTimeout(i), k = void 0, h = e || "", w.readyState = b > 0 ? 4 : 0, f = b >= 200 && b < 300 || 304 === b, d && (t = W(m, w, d)), t = X(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ma.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ma.etag[g] = v)), 204 === b || "HEAD" === m.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, !b && x || (x = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = void 0, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ma.active || ma.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = ma.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ma(n) : ma.event,
                p = ma.Deferred(),
                q = ma.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Tb.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (u < 2)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((b || m.url || _b) + "").replace(Rb, "").replace(Wb, ac[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ma.trim(m.dataType || "*").toLowerCase().match(Ca) || [""], null == m.crossDomain && (e = Xb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === ac[1] && e[2] === ac[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (ac[3] || ("http:" === ac[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = ma.param(m.data, m.traditional)), U(Yb, m, c, w), 2 === u) return w;
            j = ma.event && m.global, j && 0 === ma.active++ && ma.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Vb.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Pb.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Sb.test(g) ? g.replace(Sb, "$1_=" + Ob++) : g + (Pb.test(g) ? "&" : "?") + "_=" + Ob++)), m.ifModified && (ma.lastModified[g] && w.setRequestHeader("If-Modified-Since", ma.lastModified[g]), ma.etag[g] && w.setRequestHeader("If-None-Match", ma.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + $b + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[f](m[f]);
            if (k = U(Zb, m, c, w)) {
                if (w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), 2 === u) return w;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, k.send(s, d)
                } catch (x) {
                    if (!(u < 2)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return ma.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return ma.get(a, void 0, b, "script")
        }
    }), ma.each(["get", "post"], function(a, b) {
        ma[b] = function(a, c, d, e) {
            return ma.isFunction(c) && (e = e || d, d = c, c = void 0), ma.ajax(ma.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, ma.isPlainObject(a) && a))
        }
    }), ma._evalUrl = function(a) {
        return ma.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ma.fn.extend({
        wrapAll: function(a) {
            if (ma.isFunction(a)) return this.each(function(b) {
                ma(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ma(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return ma.isFunction(a) ? this.each(function(b) {
                ma(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = ma(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = ma.isFunction(a);
            return this.each(function(c) {
                ma(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ma.nodeName(this, "body") || ma(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ma.expr.filters.hidden = function(a) {
        return la.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Z(a)
    }, ma.expr.filters.visible = function(a) {
        return !ma.expr.filters.hidden(a)
    };
    var bc = /%20/g,
        cc = /\[\]$/,
        dc = /\r?\n/g,
        ec = /^(?:submit|button|image|reset|file)$/i,
        fc = /^(?:input|select|textarea|keygen)/i;
    ma.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = ma.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = ma.ajaxSettings && ma.ajaxSettings.traditional), ma.isArray(a) || a.jquery && !ma.isPlainObject(a)) ma.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) $(c, a[c], b, e);
        return d.join("&").replace(bc, "+")
    }, ma.fn.extend({
        serialize: function() {
            return ma.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = ma.prop(this, "elements");
                return a ? ma.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !ma(this).is(":disabled") && fc.test(this.nodeName) && !ec.test(a) && (this.checked || !Na.test(a))
            }).map(function(a, b) {
                var c = ma(this).val();
                return null == c ? null : ma.isArray(c) ? ma.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(dc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(dc, "\r\n")
                }
            }).get()
        }
    }), ma.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? aa() : da.documentMode > 8 ? _() : /^(get|post|head|put|delete|options)$/i.test(this.type) && _() || aa()
    } : _;
    var gc = 0,
        hc = {},
        ic = ma.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in hc) hc[a](void 0, !0)
    }), la.cors = !!ic && "withCredentials" in ic, ic = la.ajax = !!ic, ic && ma.ajaxTransport(function(b) {
        if (!b.crossDomain || la.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++gc;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete hc[h], c = void 0, g.onreadystatechange = ma.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = hc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    }), ma.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), ma.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return ma.globalEval(a), a
            }
        }
    }), ma.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ma.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = da.head || ma("head")[0] || da.documentElement;
            return {
                send: function(d, e) {
                    b = da.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    ma.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || ma.expando + "_" + Ob++;
            return this[a] = !0, a
        }
    }), ma.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = ma.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Pb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || ma.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? ma(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && ma.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), ma.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || da;
        var d = va.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = r([a], b, e), e && e.length && ma(e).remove(), ma.merge([], d.childNodes))
    };
    var lc = ma.fn.load;
    ma.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = ma.trim(a.slice(h, a.length)), a = a.slice(0, h)), ma.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && ma.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? ma("<div>").append(ma.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, ma.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        ma.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), ma.expr.filters.animated = function(a) {
        return ma.grep(ma.timers, function(b) {
            return a === b.elem
        }).length
    }, ma.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = ma.css(a, "position"),
                l = ma(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ma.css(a, "top"), i = ma.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ma.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ma.isFunction(b) && (b = b.call(a, c, ma.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ma.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                ma.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, ma.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = ba(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === ma.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ma.nodeName(a[0], "html") || (c = a.offset()), c.top += ma.css(a[0], "borderTopWidth", !0), c.left += ma.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ma.css(d, "marginTop", !0),
                    left: b.left - c.left - ma.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && !ma.nodeName(a, "html") && "static" === ma.css(a, "position");) a = a.offsetParent;
                return a || mb
            })
        }
    }), ma.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        ma.fn[a] = function(d) {
            return Ma(this, function(a, d, e) {
                var f = ba(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ma(f).scrollLeft() : e, c ? e : ma(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), ma.each(["top", "left"], function(a, b) {
        ma.cssHooks[b] = F(la.pixelPosition, function(a, c) {
            if (c) return c = ob(a, b), kb.test(c) ? ma(a).position()[b] + "px" : c
        })
    }), ma.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        ma.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            ma.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Ma(this, function(b, c, d) {
                    var e;
                    return ma.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ma.css(b, c, g) : ma.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ma.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), ma.fn.size = function() {
        return this.length
    }, ma.fn.andSelf = ma.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ma
    });
    var mc = a.jQuery,
        nc = a.$;
    return ma.noConflict = function(b) {
        return a.$ === ma && (a.$ = nc), b && a.jQuery === ma && (a.jQuery = mc), ma
    }, b || (a.jQuery = a.$ = ma), ma
});