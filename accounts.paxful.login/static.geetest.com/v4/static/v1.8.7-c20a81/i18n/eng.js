! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "object" == typeof exports ? exports.GeetestLang = t() : e.GeetestLang = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function i(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        return i.m = e, i.c = t, i.d = function(e, t, r) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) i.d(r, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return r
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 0)
    }([function(e, t, i) {
        "use strict";
        t.__esModule = !0, t["default"] = void 0;
        var r = {
            btn_tips: "Click to verify",
            match_tips: "Click and swap to line up three identical items in a row",
            slide_tips: "Slide to complete the puzzle",
            click_tips: "Select in  this order",
            phrase_tips: "Click the letters in a semantic order",
            space_tips: "space_tips",
            pencil_tips: "Please follow the _line_ to draw the shape",
            winlinze_tips: "Click and drop to line up five identical items in a row",
            nine_tips: "Select _ images with",
            copy_right: "Powered by Geetest",
            success: "sec s. You beat score% of users",
            fail: "Please try again",
            wait: "Loading",
            validating: "Verifying",
            lock_success: "Verification Success",
            comfirm: "OK",
            forbidden: "Oops! Please try again!",
            error_content: "Retry",
            refresh_tips: "Refresh",
            close_tips: "Close",
            feedback_tips: "More info",
            voice_tips: "Input what you hear",
            voice_icon_tips: "Visual impairment",
            back_tips: "Back",
            play_tips: "Play",
            replay_tips: "Replay",
            change_tips: "Change",
            input_tips: "input_tips",
            neterror: "Network Error"
        };
        t["default"] = r
    }])["default"]
}));