! function(t) {
    "use strict";
    if (void 0 === t) throw Error("Geetest requires browser environment");
    var e = t.document,
        r = t.Math,
        o = e.getElementsByTagName("head")[0];

    function n(t) {
        this._obj = t
    }

    function a(t) {
        var e = this;
        new n(t)._each(function(t, r) {
            e[t] = r
        })
    }
    n.prototype = {
        _each: function(t) {
            var e = this._obj;
            for (var r in e) e.hasOwnProperty(r) && t(r, e[r]);
            return this
        },
        _extend: function(t) {
            var e = this;
            new n(t)._each(function(t, r) {
                e._obj[t] = r
            })
        }
    }, a.prototype = {
        apiServers: ["gcaptcha4.geetest.com", "gcaptcha4.geevisit.com", "gcaptcha4.gsensebot.com"],
        staticServers: ["static.geetest.com", "static.geevisit.com"],
        protocol: "http://",
        typePath: "/load",
        fallback_config: {
            bypass: {
                staticServers: ["static.geetest.com", "static.geevisit.com"],
                type: "bypass",
                bypass: "/v4/bypass.js"
            }
        },
        _get_fallback_config: function() {
            return c(this.type) ? this.fallback_config[this.type] : this.fallback_config.bypass
        },
        _extend: function(t) {
            var e = this;
            new n(t)._each(function(t, r) {
                e[t] = r
            })
        }
    };
    var c = function(t) {
            return "string" == typeof t
        },
        i = /Mobi/i.test(navigator.userAgent),
        s = {},
        l = {},
        u = function(t, e) {
            if ("function" == typeof t) {
                var r = Array.prototype.slice.call(arguments, 2);
                return Function.prototype.bind ? t.bind(e, r) : function() {
                    var o = Array.prototype.slice.call(arguments);
                    return t.apply(e, r.concat(o))
                }
            }
        },
        f = Object.prototype.toString;

    function p(t, e) {
        if ((r = t) !== Object(r) || (o = t, "[object Date]" == f.call(o)) || (n = t, "[object RegExp]" == f.call(n)) || (a = t, "[object Boolean]" == f.call(a)) || "function" == typeof(c = t)) return e ? (i = t).replace(/(\S)(_([a-zA-Z]))/g, function(t, e, r, o) {
            return e + o.toUpperCase() || ""
        }) : t;
        if (s = t, "[object Array]" == f.call(s))
            for (var r, o, n, a, c, i, s, l = [], u = 0; u < t.length; u++) l.push(p(t[u]));
        else {
            var l = {};
            for (var g in t) t.hasOwnProperty(g) && (l[p(g, !0)] = p(t[g]))
        }
        return l
    }
    var g = function(t, r, n) {
            var a = e.createElement("script");
            a.charset = "UTF-8", a.async = !0, /static\.geetest\.com/g.test(t) && (a.crossOrigin = "anonymous"), a.onerror = function() {
                r(!0), c = !0
            };
            var c = !1;
            a.onload = a.onreadystatechange = function() {
                c || a.readyState && "loaded" !== a.readyState && "complete" !== a.readyState || (c = !0, setTimeout(function() {
                    r(!1)
                }, 0))
            }, a.src = t, o.appendChild(a), setTimeout(function() {
                c || (a.onerror = a.onload = null, a.remove && a.remove(), r(!0))
            }, n || 1e4)
        },
        d = function(t) {
            if (!t) return "";
            var e = "?";
            return new n(t)._each(function(t, r) {
                var o, n;
                (c(r) || "number" == typeof(o = r) || "boolean" == typeof(n = r)) && (e = e + encodeURIComponent(t) + "=" + encodeURIComponent(r) + "&")
            }), "?" === e && (e = ""), e.replace(/&$/, "")
        },
        v = function(t, e, r, o) {
            e = (n = e).replace(/^https?:\/\/|\/$/g, "");
            var n, a, c = (0 !== (a = (a = r) && a.replace(/\/+/g, "/")).indexOf("/") && (a = "/" + a), a + d(o));
            return e && (c = t + e + c), c
        },
        h = function(e, o, n, a, c, i, s) {
            var l = function(f) {
                if (s) {
                    var p = "geetest_" + (parseInt(1e4 * r.random()) + new Date().valueOf());
                    t[p] = u(s, null, p), c.callback = p
                }
                var d = v(o, n[f], a, c);
                g(d, function(e) {
                    if (e) {
                        if (p) try {
                            t[p] = function() {
                                t[p] = null
                            }
                        } catch (r) {}
                        f >= n.length - 1 ? i(!0) : l(f + 1)
                    } else i(!1)
                }, e.timeout)
            };
            l(0)
        },
        y = function(e, o, n, a) {
            var c = function(e, r) {
                "success" == r.status ? a(r.data) : (r.status, a(r)), t[e] = void 0;
                try {
                    delete t[e]
                } catch (o) {}
            };
            h(n, n.protocol, e, o, {
                callback: "",
                captcha_id: n.captchaId,
                challenge: n.challenge || "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var e = 16 * r.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                }),
                client_type: i ? "h5" : "web",
                risk_type: n.riskType,
                user_info: n.userInfo,
                call_type: n.callType,
                lang: n.language ? n.language : "Netscape" === navigator.appName ? navigator.language.toLowerCase() : navigator.userLanguage.toLowerCase()
            }, function(t) {
                if (t && "function" == typeof n.offlineCb) {
                    n.offlineCb();
                    return
                }
                t && a(n._get_fallback_config())
            }, c)
        },
        x = function(t, e, r) {
            if ("function" == typeof e.onError) e.onError({
                desc: r.desc,
                msg: r.msg,
                code: r.code
            });
            else throw Error({
                networkError: "\xe7\xbd‘\xe7\xbbœ\xe9”™\xe8\xaf\xaf",
                gtTypeError: "gt\xe5\xad—\xe6\xae\xb5\xe4\xb8\x8d\xe6˜\xaf\xe5\xad—\xe7\xac\xa6\xe4\xb8\xb2\xe7\xb1\xbb\xe5ž‹"
            }[t])
        };
    (t.Geetest || e.getElementById("gt_lib")) && (l.slide = "loaded");
    var $ = function(t) {
        var r = !1,
            o = t && ({
                js: "script",
                css: "link"
            })[t.split(".").pop()];
        if (void 0 !== o) {
            var n = e.getElementsByTagName(o);
            for (var a in n)(n[a].href && n[a].href.toString().indexOf(t) > 0 || n[a].src && n[a].src.toString().indexOf(t) > 0) && (r = !0)
        }
        return r
    };
    t.initGeetest4 = function(e, r) {
        var o, c = new a(e);
        e.https ? c.protocol = "https://" : e.protocol || (c.protocol = t.location.protocol + "//"), "object" == typeof(o = e.getType) && null !== o && c._extend(e.getType), y(c.apiServers, c.typePath, c, function(e) {
            var e = p(e);
            if ("error" === e.status) return x("networkError", c, e);
            var o = e.type;
            c.debug && new n(e)._extend(c.debug);
            var a = function() {
                c._extend(e), r(new t.Geetest4(c))
            };
            s[o] = s[o] || [];
            var i = l[o] || "init";
            if ("init" === i) l[o] = "loading", s[o].push(a), e.gctPath && h(c, c.protocol, Object.hasOwnProperty.call(c, "staticServers") ? c.staticServers : e.staticServers || c.staticServers, e.gctPath, null, function(t) {
                t && x("networkError", c, {
                    code: "60205",
                    msg: "Network failure",
                    desc: {
                        detail: "gct resource load timeout"
                    }
                })
            }), h(c, c.protocol, Object.hasOwnProperty.call(c, "staticServers") ? c.staticServers : e.staticServers || c.staticServers, e.bypass || e.staticPath + e.js, null, function(t) {
                if (t) l[o] = "fail", x("networkError", c, {
                    code: "60204",
                    msg: "Network failure",
                    desc: {
                        detail: "js resource load timeout"
                    }
                });
                else {
                    l[o] = "loaded";
                    for (var e = s[o], r = 0, n = e.length; r < n; r += 1) {
                        var a, i = e[r];
                        "function" == typeof(a = i) && i()
                    }
                    s[o] = [], l[o] = "init"
                }
            });
            else {
                if ("loaded" === i) return e.gctPath && !$(e.gctPath) && h(c, c.protocol, Object.hasOwnProperty.call(c, "staticServers") ? c.staticServers : e.staticServers || c.staticServers, e.gctPath, null, function(t) {
                    t && x("networkError", c, {
                        code: "60205",
                        msg: "Network failure",
                        desc: {
                            detail: "gct resource load timeout"
                        }
                    })
                }), a();
                "fail" === i ? x("networkError", c, {
                    code: "60204",
                    msg: "Network failure",
                    desc: {
                        detail: "js resource load timeout"
                    }
                }) : "loading" === i && s[o].push(a)
            }
        })
    }
}(window);