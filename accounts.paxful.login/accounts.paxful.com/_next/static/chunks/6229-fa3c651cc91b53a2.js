! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a859f432-abc7-4a0c-a3a2-982c358f52dd", e._sentryDebugIdIdentifier = "sentry-dbid-a859f432-abc7-4a0c-a3a2-982c358f52dd")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6229], {
        71437: (e, r, t) => {
            t.d(r, {
                F: () => n,
                e: () => l
            });
            var o = t(89039);

            function n(...e) {
                return r => e.forEach(e => {
                    "function" == typeof e ? e(r) : null != e && (e.current = r)
                })
            }

            function l(...e) {
                return o.useCallback(n(...e), e)
            }
        },
        75603: (e, r, t) => {
            t.d(r, {
                g7: () => i
            });
            var o = t(89039),
                n = t(71437),
                l = t(44243),
                i = o.forwardRef((e, r) => {
                    let {
                        children: t,
                        ...n
                    } = e, i = o.Children.toArray(t), a = i.find(c);
                    if (a) {
                        let e = a.props.children,
                            t = i.map(r => r !== a ? r : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                        return (0, l.jsx)(s, { ...n,
                            ref: r,
                            children: o.isValidElement(e) ? o.cloneElement(e, void 0, t) : null
                        })
                    }
                    return (0, l.jsx)(s, { ...n,
                        ref: r,
                        children: t
                    })
                });
            i.displayName = "Slot";
            var s = o.forwardRef((e, r) => {
                let {
                    children: t,
                    ...l
                } = e;
                if (o.isValidElement(t)) {
                    let e = function(e) {
                        let r = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
                            t = r && "isReactWarning" in r && r.isReactWarning;
                        return t ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref") ? .get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(t);
                    return o.cloneElement(t, { ... function(e, r) {
                            let t = { ...r
                            };
                            for (let o in r) {
                                let n = e[o],
                                    l = r[o];
                                /^on[A-Z]/.test(o) ? n && l ? t[o] = (...e) => {
                                    l(...e), n(...e)
                                } : n && (t[o] = n) : "style" === o ? t[o] = { ...n,
                                    ...l
                                } : "className" === o && (t[o] = [n, l].filter(Boolean).join(" "))
                            }
                            return { ...e,
                                ...t
                            }
                        }(l, t.props),
                        ref: r ? (0, n.F)(r, e) : e
                    })
                }
                return o.Children.count(t) > 1 ? o.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            var a = ({
                children: e
            }) => (0, l.jsx)(l.Fragment, {
                children: e
            });

            function c(e) {
                return o.isValidElement(e) && e.type === a
            }
        },
        9545: (e, r, t) => {
            t.d(r, {
                W: () => o
            });

            function o() {
                for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (r = function e(r) {
                    var t, o, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r)) {
                            var l = r.length;
                            for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o)
                        } else
                            for (o in r) r[o] && (n && (n += " "), n += o)
                    }
                    return n
                }(e)) && (o && (o += " "), o += r);
                return o
            }
        },
        72308: (e, r, t) => {
            t.d(r, {
                m6: () => M
            });
            let o = /^\[(.+)\]$/;

            function n(e, r) {
                let t = e;
                return r.split("-").forEach(e => {
                    t.nextPart.has(e) || t.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), t = t.nextPart.get(e)
                }), t
            }
            let l = /\s+/;

            function i() {
                let e, r, t = 0,
                    o = "";
                for (; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                    let t;
                    if ("string" == typeof r) return r;
                    let o = "";
                    for (let n = 0; n < r.length; n++) r[n] && (t = e(r[n])) && (o && (o += " "), o += t);
                    return o
                }(e)) && (o && (o += " "), o += r);
                return o
            }

            function s(e) {
                let r = r => r[e] || [];
                return r.isThemeGetter = !0, r
            }
            let a = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                p = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function g(e) {
                return y(e) || d.has(e) || c.test(e)
            }

            function h(e) {
                return G(e, "length", R)
            }

            function y(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function w(e) {
                return G(e, "number", y)
            }

            function x(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function v(e) {
                return e.endsWith("%") && y(e.slice(0, -1))
            }

            function k(e) {
                return a.test(e)
            }

            function z(e) {
                return u.test(e)
            }
            let j = new Set(["length", "size", "percentage"]);

            function C(e) {
                return G(e, j, _)
            }

            function E(e) {
                return G(e, "position", _)
            }
            let S = new Set(["image", "url"]);

            function N(e) {
                return G(e, S, W)
            }

            function I(e) {
                return G(e, "", O)
            }

            function P() {
                return !0
            }

            function G(e, r, t) {
                let o = a.exec(e);
                return !!o && (o[1] ? "string" == typeof r ? o[1] === r : r.has(o[1]) : t(o[2]))
            }

            function R(e) {
                return p.test(e) && !f.test(e)
            }

            function _() {
                return !1
            }

            function O(e) {
                return b.test(e)
            }

            function W(e) {
                return m.test(e)
            }
            Symbol.toStringTag;
            let M = function(e, ...r) {
                let t, s, a;
                let c = function(l) {
                    var i;
                    return s = (t = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let r = 0,
                                t = new Map,
                                o = new Map;

                            function n(n, l) {
                                t.set(n, l), ++r > e && (r = 0, o = t, t = new Map)
                            }
                            return {
                                get(e) {
                                    let r = t.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                                },
                                set(e, r) {
                                    t.has(e) ? t.set(e, r) : n(e, r)
                                }
                            }
                        }((i = r.reduce((e, r) => r(e), e())).cacheSize),
                        parseClassName: function(e) {
                            let {
                                separator: r,
                                experimentalParseClassName: t
                            } = e, o = 1 === r.length, n = r[0], l = r.length;

                            function i(e) {
                                let t;
                                let i = [],
                                    s = 0,
                                    a = 0;
                                for (let c = 0; c < e.length; c++) {
                                    let d = e[c];
                                    if (0 === s) {
                                        if (d === n && (o || e.slice(c, c + l) === r)) {
                                            i.push(e.slice(a, c)), a = c + l;
                                            continue
                                        }
                                        if ("/" === d) {
                                            t = c;
                                            continue
                                        }
                                    }
                                    "[" === d ? s++ : "]" === d && s--
                                }
                                let c = 0 === i.length ? e : e.substring(a),
                                    d = c.startsWith("!"),
                                    u = d ? c.substring(1) : c;
                                return {
                                    modifiers: i,
                                    hasImportantModifier: d,
                                    baseClassName: u,
                                    maybePostfixModifierPosition: t && t > a ? t - a : void 0
                                }
                            }
                            return t ? function(e) {
                                return t({
                                    className: e,
                                    parseClassName: i
                                })
                            } : i
                        }(i),
                        ... function(e) {
                            let r = function(e) {
                                    var r;
                                    let {
                                        theme: t,
                                        prefix: o
                                    } = e, l = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (r = Object.entries(e.classGroups), o ? r.map(([e, r]) => [e, r.map(e => "string" == typeof e ? o + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [o + e, r])) : e)]) : r).forEach(([e, r]) => {
                                        (function e(r, t, o, l) {
                                            r.forEach(r => {
                                                if ("string" == typeof r) {
                                                    ("" === r ? t : n(t, r)).classGroupId = o;
                                                    return
                                                }
                                                if ("function" == typeof r) {
                                                    if (r.isThemeGetter) {
                                                        e(r(l), t, o, l);
                                                        return
                                                    }
                                                    t.validators.push({
                                                        validator: r,
                                                        classGroupId: o
                                                    });
                                                    return
                                                }
                                                Object.entries(r).forEach(([r, i]) => {
                                                    e(i, n(t, r), o, l)
                                                })
                                            })
                                        })(r, l, e, t)
                                    }), l
                                }(e),
                                {
                                    conflictingClassGroups: t,
                                    conflictingClassGroupModifiers: l
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(r, t) {
                                            if (0 === r.length) return t.classGroupId;
                                            let o = r[0],
                                                n = t.nextPart.get(o),
                                                l = n ? e(r.slice(1), n) : void 0;
                                            if (l) return l;
                                            if (0 === t.validators.length) return;
                                            let i = r.join("-");
                                            return t.validators.find(({
                                                validator: e
                                            }) => e(i)) ? .classGroupId
                                        }(t, r) || function(e) {
                                            if (o.test(e)) {
                                                let r = o.exec(e)[1],
                                                    t = r ? .substring(0, r.indexOf(":"));
                                                if (t) return "arbitrary.." + t
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, r) {
                                    let o = t[e] || [];
                                    return r && l[e] ? [...o, ...l[e]] : o
                                }
                            }
                        }(i)
                    }).cache.get, a = t.cache.set, c = d, d(l)
                };

                function d(e) {
                    let r = s(e);
                    if (r) return r;
                    let o = function(e, r) {
                        let {
                            parseClassName: t,
                            getClassGroupId: o,
                            getConflictingClassGroupIds: n
                        } = r, i = new Set;
                        return e.trim().split(l).map(e => {
                            let {
                                modifiers: r,
                                hasImportantModifier: n,
                                baseClassName: l,
                                maybePostfixModifierPosition: i
                            } = t(e), s = !!i, a = o(s ? l.substring(0, i) : l);
                            if (!a) {
                                if (!s || !(a = o(l))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let c = (function(e) {
                                if (e.length <= 1) return e;
                                let r = [],
                                    t = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (r.push(...t.sort(), e), t = []) : t.push(e)
                                }), r.push(...t.sort()), r
                            })(r).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: n ? c + "!" : c,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: r,
                                classGroupId: t,
                                hasPostfixModifier: o
                            } = e, l = r + t;
                            return !i.has(l) && (i.add(l), n(t, o).forEach(e => i.add(r + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, t);
                    return a(e, o), o
                }
                return function() {
                    return c(i.apply(null, arguments))
                }
            }(function() {
                let e = s("colors"),
                    r = s("spacing"),
                    t = s("blur"),
                    o = s("brightness"),
                    n = s("borderColor"),
                    l = s("borderRadius"),
                    i = s("borderSpacing"),
                    a = s("borderWidth"),
                    c = s("contrast"),
                    d = s("grayscale"),
                    u = s("hueRotate"),
                    p = s("invert"),
                    f = s("gap"),
                    b = s("gradientColorStops"),
                    m = s("gradientColorStopPositions"),
                    j = s("inset"),
                    S = s("margin"),
                    G = s("opacity"),
                    R = s("padding"),
                    _ = s("saturate"),
                    O = s("scale"),
                    W = s("sepia"),
                    M = s("skew"),
                    $ = s("space"),
                    D = s("translate"),
                    T = () => ["auto", "contain", "none"],
                    A = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    V = () => ["auto", k, r],
                    F = () => [k, r],
                    q = () => ["", g, h],
                    B = () => ["auto", y, k],
                    Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    H = () => ["solid", "dashed", "dotted", "double", "none"],
                    J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    L = () => ["", "0", k],
                    Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    U = () => [y, w],
                    X = () => [y, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [P],
                        spacing: [g, h],
                        blur: ["none", "", z, k],
                        brightness: U(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", z, k],
                        borderSpacing: F(),
                        borderWidth: q(),
                        contrast: U(),
                        grayscale: L(),
                        hueRotate: X(),
                        invert: L(),
                        gap: F(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [v, h],
                        inset: V(),
                        margin: V(),
                        opacity: U(),
                        padding: F(),
                        saturate: U(),
                        scale: U(),
                        sepia: L(),
                        skew: X(),
                        space: F(),
                        translate: F()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", k]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [z]
                        }],
                        "break-after": [{
                            "break-after": Q()
                        }],
                        "break-before": [{
                            "break-before": Q()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...Z(), k]
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: T()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": T()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": T()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [j]
                        }],
                        "inset-x": [{
                            "inset-x": [j]
                        }],
                        "inset-y": [{
                            "inset-y": [j]
                        }],
                        start: [{
                            start: [j]
                        }],
                        end: [{
                            end: [j]
                        }],
                        top: [{
                            top: [j]
                        }],
                        right: [{
                            right: [j]
                        }],
                        bottom: [{
                            bottom: [j]
                        }],
                        left: [{
                            left: [j]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", x, k]
                        }],
                        basis: [{
                            basis: V()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", k]
                        }],
                        grow: [{
                            grow: L()
                        }],
                        shrink: [{
                            shrink: L()
                        }],
                        order: [{
                            order: ["first", "last", "none", x, k]
                        }],
                        "grid-cols": [{
                            "grid-cols": [P]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", x, k]
                            }, k]
                        }],
                        "col-start": [{
                            "col-start": B()
                        }],
                        "col-end": [{
                            "col-end": B()
                        }],
                        "grid-rows": [{
                            "grid-rows": [P]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [x, k]
                            }, k]
                        }],
                        "row-start": [{
                            "row-start": B()
                        }],
                        "row-end": [{
                            "row-end": B()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", k]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", k]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [R]
                        }],
                        px: [{
                            px: [R]
                        }],
                        py: [{
                            py: [R]
                        }],
                        ps: [{
                            ps: [R]
                        }],
                        pe: [{
                            pe: [R]
                        }],
                        pt: [{
                            pt: [R]
                        }],
                        pr: [{
                            pr: [R]
                        }],
                        pb: [{
                            pb: [R]
                        }],
                        pl: [{
                            pl: [R]
                        }],
                        m: [{
                            m: [S]
                        }],
                        mx: [{
                            mx: [S]
                        }],
                        my: [{
                            my: [S]
                        }],
                        ms: [{
                            ms: [S]
                        }],
                        me: [{
                            me: [S]
                        }],
                        mt: [{
                            mt: [S]
                        }],
                        mr: [{
                            mr: [S]
                        }],
                        mb: [{
                            mb: [S]
                        }],
                        ml: [{
                            ml: [S]
                        }],
                        "space-x": [{
                            "space-x": [$]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [$]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, r]
                        }],
                        "min-w": [{
                            "min-w": [k, r, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [k, r, "none", "full", "min", "max", "fit", "prose", {
                                screen: [z]
                            }, z]
                        }],
                        h: [{
                            h: [k, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [k, r, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", z, h]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", w]
                        }],
                        "font-family": [{
                            font: [P]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", y, w]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, k]
                        }],
                        "list-image": [{
                            "list-image": ["none", k]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", k]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [G]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [G]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...H(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", g, h]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", g, k]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: F()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", k]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [G]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...Z(), E]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", C]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, N]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [m]
                        }],
                        "gradient-via-pos": [{
                            via: [m]
                        }],
                        "gradient-to-pos": [{
                            to: [m]
                        }],
                        "gradient-from": [{
                            from: [b]
                        }],
                        "gradient-via": [{
                            via: [b]
                        }],
                        "gradient-to": [{
                            to: [b]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [a]
                        }],
                        "border-w-x": [{
                            "border-x": [a]
                        }],
                        "border-w-y": [{
                            "border-y": [a]
                        }],
                        "border-w-s": [{
                            "border-s": [a]
                        }],
                        "border-w-e": [{
                            "border-e": [a]
                        }],
                        "border-w-t": [{
                            "border-t": [a]
                        }],
                        "border-w-r": [{
                            "border-r": [a]
                        }],
                        "border-w-b": [{
                            "border-b": [a]
                        }],
                        "border-w-l": [{
                            "border-l": [a]
                        }],
                        "border-opacity": [{
                            "border-opacity": [G]
                        }],
                        "border-style": [{
                            border: [...H(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [a]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [a]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [G]
                        }],
                        "divide-style": [{
                            divide: H()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...H()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [g, k]
                        }],
                        "outline-w": [{
                            outline: [g, h]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: q()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [G]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [g, h]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", z, I]
                        }],
                        "shadow-color": [{
                            shadow: [P]
                        }],
                        opacity: [{
                            opacity: [G]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...J(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": J()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [t]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", z, k]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [_]
                        }],
                        sepia: [{
                            sepia: [W]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [t]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [G]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [_]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [W]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
                        }],
                        duration: [{
                            duration: X()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", k]
                        }],
                        delay: [{
                            delay: X()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", k]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [O]
                        }],
                        "scale-x": [{
                            "scale-x": [O]
                        }],
                        "scale-y": [{
                            "scale-y": [O]
                        }],
                        rotate: [{
                            rotate: [x, k]
                        }],
                        "translate-x": [{
                            "translate-x": [D]
                        }],
                        "translate-y": [{
                            "translate-y": [D]
                        }],
                        "skew-x": [{
                            "skew-x": [M]
                        }],
                        "skew-y": [{
                            "skew-y": [M]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": F()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": F()
                        }],
                        "scroll-my": [{
                            "scroll-my": F()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": F()
                        }],
                        "scroll-me": [{
                            "scroll-me": F()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": F()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": F()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": F()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": F()
                        }],
                        "scroll-p": [{
                            "scroll-p": F()
                        }],
                        "scroll-px": [{
                            "scroll-px": F()
                        }],
                        "scroll-py": [{
                            "scroll-py": F()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": F()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": F()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": F()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": F()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": F()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": F()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", k]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [g, h, w]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);