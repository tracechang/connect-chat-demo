! function() {
    "use strict";
    "undefined" == typeof window.BG && (window.BG = {});
    var a = window.BG.backOrClose = function() {
        var a = history.length;
        return a && a > 1 ? history.go(-1) : window.close(), !1
    };
    window.BG.openChatWindow = function(a, b) {
        return "object" != typeof b && (b = {
            width: 640,
            height: 480
        }), window.open(a, "chatWindow", "toolbar=no,directories=no,status=no,menubar=no,resizable=yes,location=no,scrollbars=yes,width=" + b.width + ",height=" + b.height)
    }, window.BG.isWindowOpened = function(a) {
        return !a || a.closed
    }, $(function() {
        $(".back-or-close").on("click", a), $("a.popup-if-possible").on("click", function(a) {
            window.open(this.href, this.id, $(this).data("openOptions")) && a.preventDefault()
        }), $("button[data-href]").on("click", function(a) {
            window.location.href = $(a.target).data("href")
        })
    })
}();
//# sourceMappingURL=portal-min.js.map