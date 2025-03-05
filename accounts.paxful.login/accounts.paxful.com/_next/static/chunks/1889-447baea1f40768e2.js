! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "34278002-6519-40bb-bc14-04dc2775d557", e._sentryDebugIdIdentifier = "sentry-dbid-34278002-6519-40bb-bc14-04dc2775d557")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1889], {
        49897: (e, t, n) => {
            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(12362), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        71889: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            });
            let r = n(47345),
                o = n(44243),
                l = r._(n(89039)),
                u = n(81709),
                f = n(31639),
                a = n(72374),
                c = n(67259),
                i = n(72456),
                d = n(89387),
                s = n(98717),
                p = n(90548),
                b = n(49897),
                y = n(52193),
                h = n(74632),
                g = n(92927),
                v = new Set;

            function _(e, t, n, r, o, l) {
                if ("undefined" != typeof window && (l || (0, f.isLocalURL)(t))) {
                    if (!r.bypassPrefetchedCheck && !l) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (v.has(o)) return;
                        v.add(o)
                    }(async () => l ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function M(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let j = l.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: v,
                    children: j,
                    prefetch: m = null,
                    passHref: P,
                    replace: k,
                    shallow: C,
                    scroll: O,
                    locale: w,
                    onClick: E,
                    onMouseEnter: I,
                    onTouchStart: R,
                    legacyBehavior: x = !1,
                    ...L
                } = e;
                n = j, x && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let D = l.default.useContext(d.RouterContext),
                    T = l.default.useContext(s.AppRouterContext),
                    S = null != D ? D : T,
                    U = !D,
                    K = !1 !== m,
                    A = null === m ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: N,
                        as: H
                    } = l.default.useMemo(() => {
                        if (!D) {
                            let e = M(a);
                            return {
                                href: e,
                                as: v ? M(v) : e
                            }
                        }
                        let [e, t] = (0, u.resolveHref)(D, a, !0);
                        return {
                            href: e,
                            as: v ? (0, u.resolveHref)(D, v) : t || e
                        }
                    }, [D, a, v]),
                    q = l.default.useRef(N),
                    z = l.default.useRef(H);
                x && (r = l.default.Children.only(n));
                let B = x ? r && "object" == typeof r && r.ref : t,
                    [F, G, J] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    Q = l.default.useCallback(e => {
                        (z.current !== H || q.current !== N) && (J(), z.current = H, q.current = N), F(e)
                    }, [H, N, J, F]),
                    V = (0, g.useMergedRef)(Q, B);
                l.default.useEffect(() => {
                    S && G && K && _(S, N, H, {
                        locale: w
                    }, {
                        kind: A
                    }, U)
                }, [H, N, G, w, K, null == D ? void 0 : D.locale, S, U, A]);
                let W = {
                    ref: V,
                    onClick(e) {
                        x || "function" != typeof E || E(e), x && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), S && !e.defaultPrevented && function(e, t, n, r, o, u, a, c, i) {
                            let {
                                nodeName: d
                            } = e.currentTarget;
                            if ("A" === d.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !i && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let s = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: u,
                                    locale: c,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            i ? l.default.startTransition(s) : s()
                        }(e, S, N, H, k, C, O, w, U)
                    },
                    onMouseEnter(e) {
                        x || "function" != typeof I || I(e), x && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), S && (K || !U) && _(S, N, H, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, U)
                    },
                    onTouchStart: function(e) {
                        x || "function" != typeof R || R(e), x && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), S && (K || !U) && _(S, N, H, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: A
                        }, U)
                    }
                };
                if ((0, c.isAbsoluteUrl)(H)) W.href = H;
                else if (!x || P || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== w ? w : null == D ? void 0 : D.locale,
                        t = (null == D ? void 0 : D.isLocaleDomain) && (0, b.getDomainLocale)(H, e, null == D ? void 0 : D.locales, null == D ? void 0 : D.domainLocales);
                    W.href = t || (0, y.addBasePath)((0, i.addLocale)(H, e, null == D ? void 0 : D.defaultLocale))
                }
                return x ? l.default.cloneElement(r, W) : (0, o.jsx)("a", { ...L,
                    ...W,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        90548: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(89039),
                o = n(3080),
                l = "function" == typeof IntersectionObserver,
                u = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, c = a || !l, [i, d] = (0, r.useState)(!1), s = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    s.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (l) {
                        if (c || i) return;
                        let e = s.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: l
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = u.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), u.set(n, t), t
                            }(n);
                            return l.set(e, t), o.observe(e),
                                function() {
                                    if (l.delete(e), o.unobserve(e), 0 === l.size) {
                                        o.disconnect(), u.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!i) {
                        let e = (0, o.requestIdleCallback)(() => d(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [c, n, t, i, s.current]), [p, i, (0, r.useCallback)(() => {
                    d(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        92927: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(89039);

            function o(e, t) {
                let n = (0, r.useRef)(() => {}),
                    o = (0, r.useRef)(() => {});
                return (0, r.useMemo)(() => e && t ? r => {
                    null === r ? (n.current(), o.current()) : (n.current = l(e, r), o.current = l(t, r))
                } : e || t, [e, t])
            }

            function l(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let n = e(t);
                    return "function" == typeof n ? n : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);