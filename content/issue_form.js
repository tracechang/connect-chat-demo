! function() {
    "use strict";

    function a() {
        if (0 === j.length) {
            if (m.isIE && m.version <= 6) return !0
        } else if (0 === j[0].selectedIndex) return g ? window.alert(l.selectRep) : window.alert(l.selectIssue), !1;
        return f ? b() : c()
    }

    function b() {
        var a = "download_client_connector.ns?popup=1",
            b = i.find("[id^='issues:']").serialize();
        b.length && (a += "&" + b);
        var c = BG.openChatWindow(a);
        return BG.isWindowOpened(c)
    }

    function c() {
        var a = {},
            b = i.find("[id^='issues:']").serializeArray();
        return $.each(b, function(b, c) {
            a[c.name] = c.value
        }), BG.start(BG.START_TYPE.FULL, {
            issue: a,
            uiOptions: {
                closeOnFinish: !1,
                allowDialogClose: !1
            },
            disableClickonce: e,
            locale: h
        }), !1
    }

    function d() {
        k.prop("disabled", 0 === j[0].selectedIndex)
    }
    var e, f, g, h, i, j, k, l = {},
        m = function() {
            var a = navigator.userAgent.match(/MSIE (\d+)/i);
            return a && a.length > 1 ? {
                isIE: !0,
                version: parseInt(a[1], 10)
            } : {
                isIE: !1
            }
        }();
    $(function() {
        var b = $("#issueFormStrings"),
            c = $("#issueFormParams");
        e = c.data("disableClickonce"), f = c.data("chatEnabled"), g = c.data("displayReps"), h = c.data("currentLocale"), l.selectIssue = b.data("selectIssue"), l.selectRep = b.data("selectRep"), i = $("#issues_form"), j = $("#issues\\:id"), k = $("#issues\\:submit"), i.on("submit", a), j.on("change", d), d()
    })
}();
//# sourceMappingURL=issue_form-min.js.map