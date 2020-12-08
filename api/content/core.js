! function() {
    "use strict";

    function a(b) {
        function c(a, b) {
            if (!O) return !1;
            a = d(a);
            var c = /\.NET ?(CLR )?[0-9.]+[A-Z]?/g.test(D);
            if (c)
                for (var e, f, g = /\.NET ?(CLR )?([0-9.]+)([A-Z])?/g; null !== (e = g.exec(D));)
                    if (f = a.compare(e[2]), 0 === f) {
                        if (!b) return !0;
                        if (e[3] === b) return !0
                    } else if (f < 0) return !0;
            switch (M.version) {
                case "7":
                    return a.compare("3.5.1") <= 0;
                case "8":
                    return a.compare("4.5.0") <= 0;
                case "8.1":
                    return a.compare("4.5.1") <= 0;
                case "10":
                    return a.compare("4.6.0") <= 0;
                default:
                    return !1
            }
        }

        function d(a) {
            for (var b = a.replace(/[^0-9.]/g, "").match(/[0-9]*\.|[0-9]+/g), c = [], d = 0; d < b.length; d++) {
                var f = b[d];
                "." !== f && c.push(f)
            }
            return a = {
                major: +c[0] || 0,
                minor: +c[1] || 0,
                patch: +c[2] || 0,
                build: +c[3] || 0
            }, a.isEmpty = !(a.major || a.minor || a.patch || a.build), a.parsed = [a.major, a.minor, a.patch, a.build], a.text = a.parsed.join("."), a.compare = e, a
        }

        function e(a) {
            "string" == typeof a && (a = d(a));
            for (var b = 0; b < 4; b++)
                if (this.parsed[b] !== a.parsed[b]) return this.parsed[b] > a.parsed[b] ? 1 : -1;
            return 0
        }

        function f(a, b) {
            var d = !a.disableClickonce && (J || K) && "2000" !== M.version;
            if (d) {
                if (c("4.5.0")) return a.clickonceVersion = "4.5", b.clickonce(a);
                if (c("4.0.0", "E")) return a.clickonceVersion = "4.0", b.clickonce(a)
            }
            return b.javascript(a)
        }

        function g(b, c) {
            var d = s.renderAttributes(b),
                e = s.renderSkills(b);
            delete b.attributes, delete b.skills;
            var f = "popup=" + (c ? "1" : "0") + "&c2cjs=1" + a.encodeURLParameters(b) + d + e;
            return n() + "/api/start_session?" + f
        }

        function h(a) {
            window.location.href = g(a, !1)
        }

        function i(a, b, c) {
            function d() {
                return !(!c || c.closed || 0 === c.outerHeight) && (c.location.href = g(a, !0), !0)
            }
            var e, f = 0,
                i = 10;
            return !c && b ? void h(a) : void(d() || (e = setInterval(function() {
                if (f >= i) {
                    clearInterval(e);
                    try {
                        c.close()
                    } catch (g) {}
                    b && h(a)
                }
                f++, d() && clearInterval(e)
            }, 100)))
        }

        function j(a) {
            var b, c = !1,
                d = ["rep", "issue", "sessionKey"];
            for (b in d)
                if (d.hasOwnProperty(b) && a.hasOwnProperty(d[b])) {
                    if (c) throw BG.exceptionFactory("Only one start method is allowed in the options passed in to start()");
                    c = !0
                }
            if (!c) throw BG.exceptionFactory("A start method is required in the options object passed to start()");
            a.hasOwnProperty("debugMode") || (a.debugMode = !1)
        }

        function k(b) {
            j(b);
            var c, d, e = {};
            if (b.hasOwnProperty("rep")) {
                if (!b.rep.hasOwnProperty("id") || !b.rep.hasOwnProperty("name") || b.rep.hasOwnProperty("id") && "" === b.rep.id.toString().trim() || b.rep.hasOwnProperty("name") && "" === b.rep.name.toString().trim()) throw BG.exceptionFactory("Both id and name are required parameters when starting a session with a rep.");
                e = {
                    id: b.rep.id,
                    name: b.rep.name
                }
            } else if (b.hasOwnProperty("issue")) {
                if (!b.issue) throw BG.exceptionFactory("'issue' option is null or undefined");
                if (a.isFormElement(b.issue) ? (e = o(b.issue), e.hasOwnProperty("skills") && (e.skills = e.skills.split(",").concat(b.skills), e.skills = r.grep(e.skills, function(a, b) {
                        return r.inArray(a, e.skills) === b
                    }), b.skills = e.skills, delete e.skills)) : e = BG.clone(b.issue), !e.hasOwnProperty("id") && !e.hasOwnProperty("codeName")) throw BG.exceptionFactory("No issue id was supplied in the options passed to start()");
                if (e.hasOwnProperty("id") && e.hasOwnProperty("codeName")) throw BG.exceptionFactory("Only id or codeName may be provided, not both");
                c = {
                    customerName: "customer_name",
                    companyCode: "customer_company_code",
                    companyName: "customer_company",
                    details: "customer_desc",
                    externalKey: "external_key"
                };
                for (d in c) c.hasOwnProperty(d) && e.hasOwnProperty(d) && (e[c[d]] = e[d], delete e[d]);
                c = {
                    customer_name: "name",
                    customer_company_code: "company_code",
                    customer_company: "company",
                    customer_desc: "details"
                };
                for (d in c) c.hasOwnProperty(d) && e.hasOwnProperty(d) && ("object" != typeof b.customer && (b.customer = {}), b.customer.hasOwnProperty(c[d]) || (b.customer[c[d]] = e[d]), delete e[d]);
                e.issue_menu = "1"
            } else b.hasOwnProperty("sessionKey") && (e = {
                short_key: b.sessionKey,
                skipconfirm: 1
            });
            if (b.hasOwnProperty("attributes") && b.attributes.hasOwnProperty("externalKey") && (b.attributes.external_key = b.attributes.externalKey, delete b.attributes.externalKey), e.locale = b.locale || null, e.chat_locale = b.chat_locale || b.chatLocale || null, b.hasOwnProperty("timezone_offset") ? e.timezone_offset = b.timezone_offset : e.timezone_offset = (new Date).getTimezoneOffset() * -1, b.hasOwnProperty("customer"))
                for (var f in b.customer) e["customer." + f] = b.customer[f];
            return s.configureOptions(b), e.attributes = b.attributes, e.skills = b.skills, e
        }

        function l() {
            if (null === r) throw BG.exceptionFactory("JQuery is not loaded, cannot use dialog box");
            null === z && (z = r("<div />").appendTo("body"))
        }

        function m(a) {
            if (null === r) throw BG.exceptionFactory("JQuery is not loaded");
            l(), z.empty().bgDialog({
                id: "bomgarDialog",
                css: {
                    width: "680px",
                    height: "400px"
                }
            });
            var b = r(".bg-modal-dialog-overlay");
            b.one("click", function() {
                C && s.closeDialog(0)
            }), C || (document.body.style.overflow = "hidden"), b.addClass("opaque"), z.append(a)
        }

        function n() {
            return t.getProtocol() + "//" + u
        }

        function o(a) {
            var b = {},
                c = r(a).serializeArray();
            return r.each(c, function(a, c) {
                b[c.name] = c.value
            }), b
        }

        function p(a) {
            return r.extend(v || H ? {
                dataType: "json",
                type: "POST"
            } : {
                dataType: "jsonp",
                jsonp: "jsonp"
            }, a)
        }

        function q(a) {
            a.fn.extend({
                bgDialog: function(b) {
                    function c() {
                        d.$dialogRoot.remove(), d.$modalOverlay.remove(), J && 6 === L && a("select.ie6-zindex-fix").show().removeClass("ie6-zindex-fix")
                    }
                    var d = this;
                    if ("destroy" === b) return c(), this;
                    if (0 !== this.parents(".bg-dialog-root").length) return this;
                    var e = this.$modalOverlay = a("<div/>").addClass("bg-modal-dialog-overlay").insertBefore(this);
                    b.overlay && b.overlay.css && e.css(b.overlay.css);
                    var f = a("<div/>").addClass("bg-dialog-root").attr({
                        tabindex: "-1",
                        role: "dialog"
                    });
                    b.id && f.attr("id", b.id), b.css && f.css(b.css);
                    var g = a("<div/>").addClass("bg-dialog-content"),
                        h = a(window);
                    return f.append(g), this.wrap(f), f = this.$dialogRoot = this.parents(".bg-dialog-root"), J && (6 === L && (e.addClass("ie6").css({
                        width: a(document).innerWidth() + 10,
                        height: a(document).innerHeight() + 10
                    }), a("select:visible").addClass("ie6-zindex-fix").hide()), L <= 8 ? (f.addClass("ie-lte8"), setTimeout(function() {
                        var a = h.innerHeight() / 2 - f.height() / 2,
                            b = h.innerWidth() / 2 - f.width() / 2;
                        f.css({
                            top: a + "px",
                            left: b + "px"
                        })
                    })) : L <= 9 && f.addClass("ie-lte9")), this
                },
                bgProgressBar: function(b) {
                    var c;
                    if (this.hasClass("bg-progress-bar") ? c = this.find(".bg-progress-bar-value") : (c = a("<div/>").addClass("bg-progress-bar-value"), this.addClass("bg-progress-bar").attr("role", "progressbar"), this.append(c)), b && "undefined" != typeof b.value)
                        if (b.value === !1) c.append(a("<div/>").addClass("bg-progress-bar-indeterminate-overlay")).css("width", "100%");
                        else {
                            this.find(".bg-progress-bar-indeterminate-overlay").remove();
                            var d = parseInt(b.value, 10);
                            isFinite(d) && (d = Math.max(0, Math.min(d, 100)), c.css("width", d + "%"))
                        }
                    return this
                }
            })
        }
        var r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O;
        r = null, s = this, t = b, u = b.getHost(), I = b.uaParser, M = I.getOS(), O = "Windows" === M.name, E = "iOS" === M.name, F = "Android" === M.name, D = navigator.userAgent, N = I.getBrowser(), L = N.major ? parseInt(N.major, 10) : null, J = "IE" === N.name, K = "Edge" === N.name, w = null, x = null, y = null, z = null, A = null, B = !0, C = !0, v = u === window.location.hostname, H = "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest, G = !0, this.setJQuery = function(a) {
            r = a, q(r)
        }, this.startBrowserSession = function(a) {
            BG.log("Starting browser session from inside core"), this.startSession(a, !0)
        }, this.startFullSession = function(a) {
            BG.log("Starting full session from inside core"), this.startSession(a, !1)
        }, this.configureOptions = function(a) {
            a.hasOwnProperty("attributes") || (a.attributes = {}), a.hasOwnProperty("skills") || (a.skills = []), a.hasOwnProperty("external_key") && (a.attributes.external_key = a.external_key)
        }, this.renderAttributes = function(a) {
            var b = "";
            for (var c in a.attributes) b += "&" + encodeURIComponent("session.custom." + c) + "=" + encodeURIComponent(a.attributes[c]);
            return b
        }, this.renderSkills = function(a) {
            var b = "";
            return a.skills.length > 0 && (b = "&session.skills=" + encodeURIComponent(a.skills.join(","))), b
        }, this.startSession = function(b, c) {
            var d = k(b);
            if (A = t.getResources().jQueryProgressBarColor, b.hasOwnProperty("uiOptions")) {
                var e = b.uiOptions;
                e.hasOwnProperty("jQueryOptions") && e.jQueryOptions.hasOwnProperty("jQueryProgressBarColor") && (A = b.uiOptions.jQueryOptions.jQueryProgressBarColor), e.hasOwnProperty("closeOnFinish") && (B = e.closeOnFinish), e.hasOwnProperty("allowDialogClose") && (C = e.allowDialogClose), e.hasOwnProperty("fallbackToFullWindow") && (G = b.uiOptions.fallbackToFullWindow)
            }
            var g = function() {};
            b.hasOwnProperty("sessionStartFailed") && "function" == typeof b.sessionStartFailed && (g = b.sessionStartFailed), l(), null === y && (y = r("<div />", {
                id: "bomgarProgressBar"
            })), y.bgProgressBar({
                value: 0
            }), y.find(".bg-progress-bar-value").css("background-color", A), y.show(), null === w && (w = r("<div />").css({
                padding: "10px",
                "text-align": "center",
                margin: "0px auto",
                position: "relative",
                width: "500px",
                overflow: "hidden"
            }).append(y)), null === x && (x = r("<div />").addClass("bg-instructions-container")), m(r("<div />").css({
                height: "100%",
                width: "100%"
            }).append(w).append(x)), s.setProgressControls(null);
            var h = this.renderAttributes(b),
                i = this.renderSkills(b),
                j = {
                    downloadLink: n() + "/api/start_session?" + (c ? "cobrowse=1" : "") + a.encodeURLParameters(d) + h + i + "&download=1",
                    debug: b.debugMode,
                    disableClickonce: b.disableClickonce,
                    sessionParameters: d,
                    fallbackURL: n() + "/download_client_connector?api=1" + (c ? "&cobrowse=1" : "") + "&g-public-errorType=minimal_html" + (F || E ? "" : "&minimalInstructions=1") + a.encodeURLParameters(d) + h
                };
            return c || !b.hasOwnProperty("sessionKey") || b.hasOwnProperty("skipConfirm") ? b.hasOwnProperty("rep") && !b.hasOwnProperty("skipConfirm") ? (r.ajax(p({
                url: n() + "/portal/check-rep",
                data: {
                    id: b.rep.id,
                    name: b.rep.name
                }
            })).done(function(a) {
                a.error ? (x.html(a.msg), y.hide(), g()) : (b.skipConfirm = !0, s.startSession(b, c))
            }), !1) : void f(j, {
                javascript: s.downloadWithJavascript,
                clickonce: s.downloadWithClickOnce
            }) : (r.ajax(p({
                url: n() + "/portal/access-key-confirmation",
                data: {
                    accessKey: b.sessionKey
                }
            })).done(function(a) {
                if (a.error) x.html(a.msg), y.hide(), g();
                else if (a.confirm) {
                    var d, e, f;
                    d = r("<p/>").text(a.confirmationMessage), e = r("<button/>").prop("id", "confirmKey").text(a.yes).one("click", function() {
                        b.skipConfirm = !0, s.startSession(b, c)
                    }), f = r("<button/>").prop("id", "cancelKey").text(a.cancel).one("click", function() {
                        s.closeDialog(0)
                    });
                    var h = r("<div/>").css({
                        textAlign: "center"
                    }).append(d, e, f);
                    x.empty().append(h)
                } else b.skipConfirm = !0, s.startSession(b, c)
            }), !1)
        }, this.downloadWithJavascript = function(b) {
            BG.log("Using javascript delivery"), a.strace();
            var c = "object" == typeof b ? b.fallbackURL : b;
            BG.log("Setting window location to " + c + "&download=1"), b.sessionParameters["g-public-errorType"] = "json", r.ajax(p({
                url: n() + "/portal/instructions/customer",
                data: b.sessionParameters,
                beforeSend: function(a, b) {
                    BG.log("Setting url of instructions to " + b.url)
                }
            })).done(function(a) {
                if (y.hide(), a.error) x.html(a.errorMessage);
                else if (F || E ? G === !1 && z.remove() : (x.html(a.instructions), r("#fallbackLink").attr("href", c + "&download=1")), !J) {
                    var b = F || E ? "" : "&download=1";
                    window.location = c + b
                }
            }), J && L >= 9 && (window.location = c + "&download=1")
        }, this.downloadWithClickOnce = function(a) {
            r.ajax({
                url: n() + "/portal/instructions/clickonce",
                data: a.sessionParameters
            }).done(function(b) {
                y.hide(), x.html(b.instructions), r("#clickOnceFallbackLink").one("click", function() {
                    return s.downloadWithJavascript(a), !1
                });
                var c = n() + "/clickonce/" + a.clickonceVersion + "/CustomerClientStarter.application?source=" + encodeURIComponent(a.fallbackURL + "&download=1") + "&useragent=" + encodeURIComponent(D) + "&_cachebuster=" + (new Date).getTime(),
                    d = r("#clickonceAnchor");
                d.attr("href", c).on("click", function() {
                    setTimeout(function() {
                        var a = d.parent();
                        a.html(a.text()), a.css("color", "gray")
                    }, 250)
                })
            })
        }, this.setProgressControls = function(a) {
            null === a ? (BG.log("Setting up indeterminate progress bar"), y.bgProgressBar({
                value: !1
            })) : (BG.log("Setting up determinate progress bar"), a > 100 && (a = 100), a < 0 && (a = 0), y.bgProgressBar({
                value: a
            }))
        }, this.startChatSession = function(a, b) {
            BG.log("Starting chat session from inside core");
            var c = k(a);
            i(c, G, b)
        }, this.closeDialog = function() {
            null !== z && (B ? (z.html(""), z.bgDialog("destroy"), z = null) : (r("#sessionInstructions").hide(), r("#sessionStartedDisplay").show()))
        }
    }
    a.isFormElement = function(a) {
        return !!a && !!a.tagName && "form" === a.tagName.toLowerCase()
    }, a.strace = function() {
        if ("function" == typeof printStackTrace && "undefined" != typeof console && null !== console && "function" == typeof console.info) {
            var a = 0,
                b = printStackTrace();
            console.info("Stack trace:");
            for (var c in b) a < 4 ? a++ : console.info(b[c])
        }
    }, a.encodeURLParameters = function(a) {
        var b, c = "";
        for (b in a) a.hasOwnProperty(b) && "object" != typeof a[b] && (c += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(a[b]));
        return c
    }, BG.createCore = function(b) {
        return BG.core = new a(b), BG.core
    }
}();
//# sourceMappingURL=core-min.js.map