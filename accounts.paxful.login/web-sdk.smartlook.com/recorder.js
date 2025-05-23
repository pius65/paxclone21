! function() {
    "use strict";
    var o, e, t, n = function(o) {
            var e = null;
            try {
                e = window.localStorage.getItem(o)
            } catch (o) {}
            return e
        },
        r = function(o) {
            var e = null;
            try {
                e = window.sessionStorage.getItem(o)
            } catch (o) {}
            return e
        },
        d = function(o, e) {
            try {
                return window.sessionStorage.setItem(o, e), !0
            } catch (o) {
                return !1
            }
        },
        i = "smartlook_events_picker",
        l = (null === (o = document.currentScript) || void 0 === o ? void 0 : o.src.replace("recorder.js", "picker.ab3f01e44368fa33b406.js")) || "",
        a = new(function() {
            function o() {}
            return o.prototype.load = function() {
                var o = document.createElement("script");
                o.src = l, document.head.append(o), d(i, "1")
            }, o.prototype.shouldLoad = function() {
                return !(!r(i) && !n(i)) || document.referrer.indexOf("picker/4f249306-efd5-4127-b768-79a6750a7c5d-ca97caf7-335a-4e1f-b047-be42cb6098f9") > -1
            }, o
        }()),
        c = "smartlook_live_heatmaps",
        s = (null === (e = document.currentScript) || void 0 === e ? void 0 : e.src.replace("recorder.js", "live-heatmaps.e71321ca13392c124268.js")) || "",
        u = new(function() {
            function o() {}
            return o.prototype.load = function() {
                var o = document.createElement("script");
                o.src = s, document.head.append(o), d(c, "1")
            }, o.prototype.shouldLoad = function() {
                return Boolean(r(c) || n(c))
            }, o
        }()),
        p = function(o) {
            for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
            window.smartlook.silent || console.warn.apply(console, function(o, e, t) {
                if (t || 2 === arguments.length)
                    for (var n, r = 0, d = e.length; r < d; r++) !n && r in e || (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
                return o.concat(n || Array.prototype.slice.call(e))
            }(["[Smartlook] ".concat(o)], function(o, e) {
                var t = "function" == typeof Symbol && o[Symbol.iterator];
                if (!t) return o;
                var n, r, d = t.call(o),
                    i = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = d.next()).done;) i.push(n.value)
                } catch (o) {
                    r = {
                        error: o
                    }
                } finally {
                    try {
                        n && !n.done && (t = d.return) && t.call(d)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return i
            }(e), !1))
        },
        w = (null === (t = document.currentScript) || void 0 === t ? void 0 : t.src) || "",
        f = function() {
            window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Loading scripts.");
            var o = document.createElement("script");
            o.src = w.replace("recorder.js", "es6/init.4e02050bca448f127b3f.js"), o.type = "module", o.addEventListener("load", (function() {
                window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Script module loaded.")
            }), !0), o.addEventListener("error", (function() {
                window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Script module failed to load.")
            }), !0);
            var e = document.createElement("script");
            e.src = w.replace("recorder.js", "es5/init.4e3e7e7f27632918efcd.js"), e.noModule = !0, e.addEventListener("load", (function() {
                window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Script nomodule loaded.")
            }), !0), e.addEventListener("error", (function() {
                window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Script nomodule failed to load.")
            }), !0), "noModule" in document.createElement("script") ? (document.head.appendChild(o), document.head.appendChild(e)) : document.head.appendChild(e)
        };
    if (void 0 === window.smartlook) p("Smartlook script was loaded without initializing `window.smartlook` object.", document.currentScript);
    else if (void 0 !== Number.parseInt && "nodeName" in Node.prototype) {
        window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Supported device detected. Starting initialization."), window.smartlook.scriptSource = w.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^/]+$/, "/");
        var m = document.querySelectorAll('[src$="smartlook.com/recorder.js"]');
        if (m.length > 1 && (window.smartlook._loadInfo.push("Multiple recorder scripts detected. No initialization will be done."), p("Smartlook web-sdk loaded ".concat(m.length, "x."))), window.smartlook.isRecorderScriptLoaded) window.smartlook._loadInfo.push("Smartlook already initialized. No initialization will be done."), p("Smartlook initialization ignored in this script.", document.currentScript);
        else if (a.shouldLoad()) a.load();
        else if (u.shouldLoad()) u.load();
        else try {
            ! function() {
                var o, e, t, n, r, d, i, l, a, c;
                return -1 === [window.queueMicrotask, Array.from, null === (o = Array.prototype) || void 0 === o ? void 0 : o.find, null === (e = Array.prototype) || void 0 === e ? void 0 : e.findIndex, null === (t = Array.prototype) || void 0 === t ? void 0 : t.flat, null === (n = Array.prototype) || void 0 === n ? void 0 : n.flatMap, null === (r = Array.prototype) || void 0 === r ? void 0 : r.includes, null === (d = Element.prototype) || void 0 === d ? void 0 : d.append, null === (i = Event.prototype) || void 0 === i ? void 0 : i.composedPath, "getRootNode" in (Node.prototype || {}), "isConnected" in (Node.prototype || {}), Object.assign, Object.entries, Object.fromEntries, Object.hasOwn, Object.setPrototypeOf, Object.values, String.prototype.includes, String.prototype.endsWith, String.prototype.startsWith, window.fetch, window.AbortController, window.MessageChannel, window.MessagePort, null === (l = window.navigator) || void 0 === l ? void 0 : l.sendBeacon, window.requestIdleCallback, null === (a = window.Promise) || void 0 === a ? void 0 : a.any, window.ResizeObserver, null === (c = window.Symbol) || void 0 === c ? void 0 : c.asyncIterator, window.Reflect, window.Uint8Array.prototype.reduce].map(Boolean).indexOf(!1)
            }() ? (window.smartlook._loadInfo.push("Polyfills needs to be loaded."), function() {
                var o = w.replace("recorder.js", "polyfills.9d9e60e0603e89ed401f.js"),
                    e = document.createElement("script");
                e.src = o;
                var t = function(o) {
                    var n;
                    window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Polyfills loaded load."), void 0 === (n = o).isTrusted || n.isTrusted ? (e.removeEventListener("load", t, !0), f()) : window.smartlook._loadInfo.push("Polyfills untrusted event.")
                };
                e.addEventListener("load", t, !0), e.addEventListener("error", (function() {
                    window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Polyfills failed to load.")
                })), document.head.appendChild(e)
            }()) : (window.smartlook._loadInfo.push("Polyfills are not needed."), f())
        } finally {
            window.smartlook.isRecorderScriptLoaded = !0
        }
    } else window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push("Unsupported device detected. ".concat(navigator.userAgent)), p("Smartlook is not recording. Unsupported browser detected.")
}();