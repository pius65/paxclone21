! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a931b031-be88-48db-abda-9461b5e3ea06", e._sentryDebugIdIdentifier = "sentry-dbid-a931b031-be88-48db-abda-9461b5e3ea06")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6452], {
        39860: (e, t, r) => {
            let n, i, s, o, a, l;
            r.d(t, {
                G: () => rO
            });
            var c, u, d = r(81734),
                h = r(26970),
                p = (r(30295), r(77663)),
                f = r(12096),
                m = r(24409),
                y = r(88747),
                g = r(40948),
                v = r(4747),
                S = r(41802),
                _ = r(19344),
                w = r(36222),
                b = r(59346),
                E = (r(80330), r(84490)),
                k = r(61790),
                M = r(38520),
                I = r(41914),
                C = r(69739),
                R = r(99748),
                x = r(37036),
                T = r(76e3),
                A = r(70893),
                D = r(52579),
                O = r(92090),
                N = r(56747),
                L = r(6267),
                P = r(58289),
                B = r(52637);
            let F = w.GLOBAL_OBJ,
                U = "sentryReplaySession",
                W = "Unable to send Replay";

            function z(e, t) {
                return null != e ? e : t()
            }

            function j(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function H(e) {
                let t = j([e, "optionalAccess", e => e.host]);
                return j([t, "optionalAccess", e => e.shadowRoot]) === e
            }

            function $(e) {
                return "[object ShadowRoot]" === Object.prototype.toString.call(e)
            }

            function q(e) {
                try {
                    var t;
                    let r = e.rules || e.cssRules;
                    return r ? ((t = Array.from(r, V).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t) : null
                } catch (e) {
                    return null
                }
            }

            function V(e) {
                let t;
                if ("styleSheet" in e) try {
                    t = q(e.styleSheet) || function(e) {
                        let {
                            cssText: t
                        } = e;
                        if (t.split('"').length < 3) return t;
                        let r = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? r.push("layer") : e.layerName && r.push(`layer(${e.layerName})`), e.supportsText && r.push(`supports(${e.supportsText})`), e.media.length && r.push(e.media.mediaText), r.join(" ") + ";"
                    }(e)
                } catch (e) {} else if ("selectorText" in e && e.selectorText.includes(":")) return e.cssText.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2");
                return t || e.cssText
            }! function(e) {
                e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
            }(c || (c = {}));
            class K {
                constructor() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
                getId(e) {
                    return e ? z(j([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), () => -1) : -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    let t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    let r = t.id;
                    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    let r = this.getNode(e);
                    if (r) {
                        let e = this.nodeMetaMap.get(r);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function J({
                maskInputOptions: e,
                tagName: t,
                type: r
            }) {
                return "OPTION" === t && (t = "SELECT"), !!(e[t.toLowerCase()] || r && e[r] || "password" === r || "INPUT" === t && !r && e.text)
            }

            function G({
                isMasked: e,
                element: t,
                value: r,
                maskInputFn: n
            }) {
                let i = r || "";
                return e ? (n && (i = n(i, t)), "*".repeat(i.length)) : i
            }

            function Y(e) {
                return e.toLowerCase()
            }

            function X(e) {
                return e.toUpperCase()
            }
            let Q = "__rrweb_original__";

            function Z(e) {
                let t = e.type;
                return e.hasAttribute("data-rr-is-password") ? "password" : t ? Y(t) : null
            }

            function ee(e, t, r) {
                return "INPUT" === t && ("radio" === r || "checkbox" === r) ? e.getAttribute("value") || "" : e.value
            }

            function et(e, t) {
                let r;
                try {
                    r = new URL(e, z(t, () => window.location.href))
                } catch (e) {
                    return null
                }
                return z(j([r.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", e => e[1]]), () => null)
            }
            let er = {};

            function en(e) {
                let t = er[e];
                if (t) return t;
                let r = window.document,
                    n = window[e];
                if (r && "function" == typeof r.createElement) try {
                    let t = r.createElement("iframe");
                    t.hidden = !0, r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]), r.head.removeChild(t)
                } catch (e) {}
                return er[e] = n.bind(window)
            }

            function ei(...e) {
                return en("setTimeout")(...e)
            }

            function es(...e) {
                return en("clearTimeout")(...e)
            }
            let eo = 1,
                ea = RegExp("[^a-z0-9-_:]");

            function el() {
                return eo++
            }
            let ec = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
                eu = /^(?:[a-z+]+:)?\/\//i,
                ed = /^www\..*/i,
                eh = /^(data:)([^,]*),(.*)/i;

            function ep(e, t) {
                return (e || "").replace(ec, (e, r, n, i, s, o) => {
                    let a = n || s || o,
                        l = r || i || "";
                    if (!a) return e;
                    if (eu.test(a) || ed.test(a) || eh.test(a)) return `url(${l}${a}${l})`;
                    if ("/" === a[0]) return `url(${l}${(t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0]).split("?")[0]+a}${l})`;
                    let c = t.split("/"),
                        u = a.split("/");
                    for (let e of (c.pop(), u)) "." !== e && (".." === e ? c.pop() : c.push(e));
                    return `url(${l}${c.join("/")}${l})`
                })
            }
            let ef = /^[^ \t\n\r\u000c]+/,
                em = /^[, \t\n\r\u000c]+/,
                ey = new WeakMap;

            function eg(e, t) {
                return t && "" !== t.trim() ? ev(e, t) : t
            }

            function ev(e, t) {
                let r = ey.get(e);
                if (r || (r = e.createElement("a"), ey.set(e, r)), t) {
                    if (t.startsWith("blob:") || t.startsWith("data:")) return t
                } else t = "";
                return r.setAttribute("href", t), r.href
            }

            function eS(e, t, r, n, i, s) {
                return n ? "src" !== r && ("href" !== r || "use" === t && "#" === n[0]) && ("xlink:href" !== r || "#" === n[0]) && ("background" !== r || "table" !== t && "td" !== t && "th" !== t) ? "srcset" === r ? function(e, t) {
                    if ("" === t.trim()) return t;
                    let r = 0;

                    function n(e) {
                        let n;
                        let i = e.exec(t.substring(r));
                        return i ? (n = i[0], r += n.length, n) : ""
                    }
                    let i = [];
                    for (; n(em), !(r >= t.length);) {
                        let s = n(ef);
                        if ("," === s.slice(-1)) s = eg(e, s.substring(0, s.length - 1)), i.push(s);
                        else {
                            let n = "";
                            s = eg(e, s);
                            let o = !1;
                            for (;;) {
                                let e = t.charAt(r);
                                if ("" === e) {
                                    i.push((s + n).trim());
                                    break
                                }
                                if (o) ")" === e && (o = !1);
                                else {
                                    if ("," === e) {
                                        r += 1, i.push((s + n).trim());
                                        break
                                    }
                                    "(" === e && (o = !0)
                                }
                                n += e, r += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(e, n) : "style" === r ? ep(n, ev(e)) : "object" === t && "data" === r ? eg(e, n) : "function" == typeof s ? s(r, n, i) : n : eg(e, n) : n
            }

            function e_(e, t, r) {
                return ("video" === e || "audio" === e) && "autoplay" === t
            }

            function ew(e, t, r = 1 / 0, n = 0) {
                return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : ew(e.parentNode, t, r, n + 1)
            }

            function eb(e, t) {
                return r => {
                    if (null === r) return !1;
                    try {
                        if (e) {
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                    for (let r = e.classList.length; r--;) {
                                        let n = e.classList[r];
                                        if (t.test(n)) return !0
                                    }
                                    return !1
                                }(r, e)) return !0
                        }
                        if (t && r.matches(t)) return !0;
                        return !1
                    } catch (e) {
                        return !1
                    }
                }
            }

            function eE(e, t, r, n, i, s) {
                try {
                    let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                    if (null === o) return !1;
                    if ("INPUT" === o.tagName) {
                        let e = o.getAttribute("autocomplete");
                        if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e)) return !0
                    }
                    let a = -1,
                        l = -1;
                    if (s) {
                        if ((l = ew(o, eb(n, i))) < 0) return !0;
                        a = ew(o, eb(t, r), l >= 0 ? l : 1 / 0)
                    } else {
                        if ((a = ew(o, eb(t, r))) < 0) return !1;
                        l = ew(o, eb(n, i), a >= 0 ? a : 1 / 0)
                    }
                    return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s
                } catch (e) {}
                return !!s
            }

            function ek(e) {
                return null == e ? "" : e.toLowerCase()
            }

            function eM(e, t) {
                let r;
                let {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    unblockSelector: u,
                    maskAllText: d,
                    maskTextClass: h,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: m,
                    skipChild: y = !1,
                    inlineStylesheet: g = !0,
                    maskInputOptions: v = {},
                    maskAttributeFn: S,
                    maskTextFn: _,
                    maskInputFn: w,
                    slimDOMOptions: b,
                    dataURLOptions: E = {},
                    inlineImages: k = !1,
                    recordCanvas: M = !1,
                    onSerialize: I,
                    onIframeLoad: C,
                    iframeLoadTimeout: R = 5e3,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: T = 5e3,
                    keepIframeSrcFn: A = () => !1,
                    newlyAddedElement: D = !1
                } = t, {
                    preserveWhiteSpace: O = !0
                } = t, N = function(e, t) {
                    let {
                        doc: r,
                        mirror: s,
                        blockClass: o,
                        blockSelector: a,
                        unblockSelector: l,
                        maskAllText: u,
                        maskAttributeFn: d,
                        maskTextClass: h,
                        unmaskTextClass: p,
                        maskTextSelector: f,
                        unmaskTextSelector: m,
                        inlineStylesheet: y,
                        maskInputOptions: g = {},
                        maskTextFn: v,
                        maskInputFn: S,
                        dataURLOptions: _ = {},
                        inlineImages: w,
                        recordCanvas: b,
                        keepIframeSrcFn: E,
                        newlyAddedElement: k = !1
                    } = t, M = function(e, t) {
                        if (!t.hasNode(e)) return;
                        let r = t.getId(e);
                        return 1 === r ? void 0 : r
                    }(r, s);
                    switch (e.nodeType) {
                        case e.DOCUMENT_NODE:
                            if ("CSS1Compat" !== e.compatMode) return {
                                type: c.Document,
                                childNodes: [],
                                compatMode: e.compatMode
                            };
                            return {
                                type: c.Document,
                                childNodes: []
                            };
                        case e.DOCUMENT_TYPE_NODE:
                            return {
                                type: c.DocumentType,
                                name: e.name,
                                publicId: e.publicId,
                                systemId: e.systemId,
                                rootId: M
                            };
                        case e.ELEMENT_NODE:
                            return function(e, t) {
                                let r;
                                let {
                                    doc: s,
                                    blockClass: o,
                                    blockSelector: a,
                                    unblockSelector: l,
                                    inlineStylesheet: u,
                                    maskInputOptions: d = {},
                                    maskAttributeFn: h,
                                    maskInputFn: p,
                                    dataURLOptions: f = {},
                                    inlineImages: m,
                                    recordCanvas: y,
                                    keepIframeSrcFn: g,
                                    newlyAddedElement: v = !1,
                                    rootId: S,
                                    maskAllText: _,
                                    maskTextClass: w,
                                    unmaskTextClass: b,
                                    maskTextSelector: E,
                                    unmaskTextSelector: k
                                } = t, M = function(e, t, r, n) {
                                    try {
                                        if (n && e.matches(n)) return !1;
                                        if ("string" == typeof t) {
                                            if (e.classList.contains(t)) return !0
                                        } else
                                            for (let r = e.classList.length; r--;) {
                                                let n = e.classList[r];
                                                if (t.test(n)) return !0
                                            }
                                        if (r) return e.matches(r)
                                    } catch (e) {}
                                    return !1
                                }(e, o, a, l), I = function(e) {
                                    if (e instanceof HTMLFormElement) return "form";
                                    let t = Y(e.tagName);
                                    return ea.test(t) ? "div" : t
                                }(e), C = {}, R = e.attributes.length;
                                for (let t = 0; t < R; t++) {
                                    let r = e.attributes[t];
                                    r.name && !e_(I, r.name, r.value) && (C[r.name] = eS(s, I, Y(r.name), r.value, e, h))
                                }
                                if ("link" === I && u) {
                                    let t = Array.from(s.styleSheets).find(t => t.href === e.href),
                                        r = null;
                                    t && (r = q(t)), r && (delete C.rel, delete C.href, C._cssText = ep(r, t.href))
                                }
                                if ("style" === I && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                                    let t = q(e.sheet);
                                    t && (C._cssText = ep(t, ev(s)))
                                }
                                if ("input" === I || "textarea" === I || "select" === I || "option" === I) {
                                    let t = Z(e),
                                        r = ee(e, X(I), t),
                                        n = e.checked;
                                    if ("submit" !== t && "button" !== t && r) {
                                        let n = eE(e, w, E, b, k, J({
                                            type: t,
                                            tagName: X(I),
                                            maskInputOptions: d
                                        }));
                                        C.value = G({
                                            isMasked: n,
                                            element: e,
                                            value: r,
                                            maskInputFn: p
                                        })
                                    }
                                    n && (C.checked = n)
                                }
                                if ("option" === I && (e.selected && !d.select ? C.selected = !0 : delete C.selected), "canvas" === I && y) {
                                    if ("2d" === e.__context) ! function(e) {
                                        let t = e.getContext("2d");
                                        if (!t) return !0;
                                        for (let r = 0; r < e.width; r += 50)
                                            for (let n = 0; n < e.height; n += 50) {
                                                let i = t.getImageData;
                                                if (new Uint32Array((Q in i ? i[Q] : i).call(t, r, n, Math.min(50, e.width - r), Math.min(50, e.height - n)).data.buffer).some(e => 0 !== e)) return !1
                                            }
                                        return !0
                                    }(e) && (C.rr_dataURL = e.toDataURL(f.type, f.quality));
                                    else if (!("__context" in e)) {
                                        let t = e.toDataURL(f.type, f.quality),
                                            r = s.createElement("canvas");
                                        r.width = e.width, r.height = e.height, t !== r.toDataURL(f.type, f.quality) && (C.rr_dataURL = t)
                                    }
                                }
                                if ("img" === I && m) {
                                    n || (i = (n = s.createElement("canvas")).getContext("2d"));
                                    let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>",
                                        r = e.crossOrigin,
                                        o = () => {
                                            e.removeEventListener("load", o);
                                            try {
                                                n.width = e.naturalWidth, n.height = e.naturalHeight, i.drawImage(e, 0, 0), C.rr_dataURL = n.toDataURL(f.type, f.quality)
                                            } catch (r) {
                                                if ("anonymous" !== e.crossOrigin) {
                                                    e.crossOrigin = "anonymous", e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o);
                                                    return
                                                }
                                                console.warn(`Cannot inline img src=${t}! Error: ${r}`)
                                            }
                                            "anonymous" === e.crossOrigin && (r ? C.crossOrigin = r : e.removeAttribute("crossorigin"))
                                        };
                                    e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o)
                                }
                                if (("audio" === I || "video" === I) && (C.rr_mediaState = e.paused ? "paused" : "played", C.rr_mediaCurrentTime = e.currentTime), !v && (e.scrollLeft && (C.rr_scrollLeft = e.scrollLeft), e.scrollTop && (C.rr_scrollTop = e.scrollTop)), M) {
                                    let {
                                        width: t,
                                        height: r
                                    } = e.getBoundingClientRect();
                                    C = {
                                        class: C.class,
                                        rr_width: `${t}px`,
                                        rr_height: `${r}px`
                                    }
                                }
                                "iframe" !== I || g(C.src) || (M || e.contentDocument || (C.rr_src = C.src), delete C.src);
                                try {
                                    customElements.get(I) && (r = !0)
                                } catch (e) {}
                                return {
                                    type: c.Element,
                                    tagName: I,
                                    attributes: C,
                                    childNodes: [],
                                    isSVG: !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                                    needBlock: M,
                                    rootId: S,
                                    isCustom: r
                                }
                            }(e, {
                                doc: r,
                                blockClass: o,
                                blockSelector: a,
                                unblockSelector: l,
                                inlineStylesheet: y,
                                maskAttributeFn: d,
                                maskInputOptions: g,
                                maskInputFn: S,
                                dataURLOptions: _,
                                inlineImages: w,
                                recordCanvas: b,
                                keepIframeSrcFn: E,
                                newlyAddedElement: k,
                                rootId: M,
                                maskAllText: u,
                                maskTextClass: h,
                                unmaskTextClass: p,
                                maskTextSelector: f,
                                unmaskTextSelector: m
                            });
                        case e.TEXT_NODE:
                            return function(e, t) {
                                let {
                                    maskAllText: r,
                                    maskTextClass: n,
                                    unmaskTextClass: i,
                                    maskTextSelector: s,
                                    unmaskTextSelector: o,
                                    maskTextFn: a,
                                    maskInputOptions: l,
                                    maskInputFn: u,
                                    rootId: d
                                } = t, h = e.parentNode && e.parentNode.tagName, p = e.textContent, f = "STYLE" === h || void 0, m = "SCRIPT" === h || void 0, y = "TEXTAREA" === h || void 0;
                                if (f && p) {
                                    try {
                                        e.nextSibling || e.previousSibling || j([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = q(e.parentNode.sheet))
                                    } catch (t) {
                                        console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                                    }
                                    p = ep(p, ev(t.doc))
                                }
                                m && (p = "SCRIPT_PLACEHOLDER");
                                let g = eE(e, n, s, i, o, r);
                                return f || m || y || !p || !g || (p = a ? a(p, e.parentElement) : p.replace(/[\S]/g, "*")), y && p && (l.textarea || g) && (p = u ? u(p, e.parentNode) : p.replace(/[\S]/g, "*")), "OPTION" === h && p && (p = G({
                                    isMasked: eE(e, n, s, i, o, J({
                                        type: null,
                                        tagName: h,
                                        maskInputOptions: l
                                    })),
                                    element: e,
                                    value: p,
                                    maskInputFn: u
                                })), {
                                    type: c.Text,
                                    textContent: p || "",
                                    isStyle: f,
                                    rootId: d
                                }
                            }(e, {
                                doc: r,
                                maskAllText: u,
                                maskTextClass: h,
                                unmaskTextClass: p,
                                maskTextSelector: f,
                                unmaskTextSelector: m,
                                maskTextFn: v,
                                maskInputOptions: g,
                                maskInputFn: S,
                                rootId: M
                            });
                        case e.CDATA_SECTION_NODE:
                            return {
                                type: c.CDATA,
                                textContent: "",
                                rootId: M
                            };
                        case e.COMMENT_NODE:
                            return {
                                type: c.Comment,
                                textContent: e.textContent || "",
                                rootId: M
                            };
                        default:
                            return !1
                    }
                }(e, {
                    doc: s,
                    mirror: o,
                    blockClass: a,
                    blockSelector: l,
                    maskAllText: d,
                    unblockSelector: u,
                    maskTextClass: h,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: m,
                    inlineStylesheet: g,
                    maskInputOptions: v,
                    maskAttributeFn: S,
                    maskTextFn: _,
                    maskInputFn: w,
                    dataURLOptions: E,
                    inlineImages: k,
                    recordCanvas: M,
                    keepIframeSrcFn: A,
                    newlyAddedElement: D
                });
                if (!N) return console.warn(e, "not serialized"), null;
                r = o.hasNode(e) ? o.getId(e) : ! function(e, t) {
                    if (t.comment && e.type === c.Comment) return !0;
                    if (e.type === c.Element) {
                        if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) && "script" === e.attributes.as || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === et(e.attributes.href)) || t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (ek(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ek(e.attributes.name) || "icon" === ek(e.attributes.rel) || "apple-touch-icon" === ek(e.attributes.rel) || "shortcut icon" === ek(e.attributes.rel)))) return !0;
                        if ("meta" === e.tagName) {
                            if (t.headMetaDescKeywords && ek(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (ek(e.attributes.property).match(/^(og|twitter|fb):/) || ek(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === ek(e.attributes.name))) return !0;
                            if (t.headMetaRobots && ("robots" === ek(e.attributes.name) || "googlebot" === ek(e.attributes.name) || "bingbot" === ek(e.attributes.name))) return !0;
                            if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"]) return !0;
                            else if (t.headMetaAuthorship && ("author" === ek(e.attributes.name) || "generator" === ek(e.attributes.name) || "framework" === ek(e.attributes.name) || "publisher" === ek(e.attributes.name) || "progid" === ek(e.attributes.name) || ek(e.attributes.property).match(/^article:/) || ek(e.attributes.property).match(/^product:/))) return !0;
                            else if (t.headMetaVerification && ("google-site-verification" === ek(e.attributes.name) || "yandex-verification" === ek(e.attributes.name) || "csrf-token" === ek(e.attributes.name) || "p:domain_verify" === ek(e.attributes.name) || "verify-v1" === ek(e.attributes.name) || "verification" === ek(e.attributes.name) || "shopify-checkout-api-token" === ek(e.attributes.name))) return !0
                        }
                    }
                    return !1
                }(N, b) && (O || N.type !== c.Text || N.isStyle || N.textContent.replace(/^\s+|\s+$/gm, "").length) ? el() : -2;
                let L = Object.assign(N, {
                    id: r
                });
                if (o.add(e, L), -2 === r) return null;
                I && I(e);
                let P = !y;
                if (L.type === c.Element) {
                    P = P && !L.needBlock, delete L.needBlock;
                    let t = e.shadowRoot;
                    t && $(t) && (L.isShadowHost = !0)
                }
                if ((L.type === c.Document || L.type === c.Element) && P) {
                    b.headWhitespace && L.type === c.Element && "head" === L.tagName && (O = !1);
                    let t = {
                        doc: s,
                        mirror: o,
                        blockClass: a,
                        blockSelector: l,
                        maskAllText: d,
                        unblockSelector: u,
                        maskTextClass: h,
                        unmaskTextClass: p,
                        maskTextSelector: f,
                        unmaskTextSelector: m,
                        skipChild: y,
                        inlineStylesheet: g,
                        maskInputOptions: v,
                        maskAttributeFn: S,
                        maskTextFn: _,
                        maskInputFn: w,
                        slimDOMOptions: b,
                        dataURLOptions: E,
                        inlineImages: k,
                        recordCanvas: M,
                        preserveWhiteSpace: O,
                        onSerialize: I,
                        onIframeLoad: C,
                        iframeLoadTimeout: R,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: T,
                        keepIframeSrcFn: A
                    };
                    for (let r of Array.from(e.childNodes)) {
                        let e = eM(r, t);
                        e && L.childNodes.push(e)
                    }
                    if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
                        for (let r of Array.from(e.shadowRoot.childNodes)) {
                            let n = eM(r, t);
                            n && ($(e.shadowRoot) && (n.isShadow = !0), L.childNodes.push(n))
                        }
                }
                return e.parentNode && H(e.parentNode) && $(e.parentNode) && (L.isShadow = !0), L.type === c.Element && "iframe" === L.tagName && function(e, t, r) {
                    let n;
                    let i = e.contentWindow;
                    if (!i) return;
                    let s = !1;
                    try {
                        n = i.document.readyState
                    } catch (e) {
                        return
                    }
                    if ("complete" !== n) {
                        let n = ei(() => {
                            s || (t(), s = !0)
                        }, r);
                        e.addEventListener("load", () => {
                            es(n), s = !0, t()
                        });
                        return
                    }
                    let o = "about:blank";
                    if (i.location.href !== o || e.src === o || "" === e.src) return ei(t, 0), e.addEventListener("load", t);
                    e.addEventListener("load", t)
                }(e, () => {
                    let t = e.contentDocument;
                    if (t && C) {
                        let r = eM(t, {
                            doc: t,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: u,
                            maskAllText: d,
                            maskTextClass: h,
                            unmaskTextClass: p,
                            maskTextSelector: f,
                            unmaskTextSelector: m,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: v,
                            maskAttributeFn: S,
                            maskTextFn: _,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: E,
                            inlineImages: k,
                            recordCanvas: M,
                            preserveWhiteSpace: O,
                            onSerialize: I,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: A
                        });
                        r && C(e, r)
                    }
                }, R), L.type === c.Element && "link" === L.tagName && "string" == typeof L.attributes.rel && ("stylesheet" === L.attributes.rel || "preload" === L.attributes.rel && "string" == typeof L.attributes.href && "css" === et(L.attributes.href)) && function(e, t, r) {
                    let n, i = !1;
                    try {
                        n = e.sheet
                    } catch (e) {
                        return
                    }
                    if (n) return;
                    let s = ei(() => {
                        i || (t(), i = !0)
                    }, r);
                    e.addEventListener("load", () => {
                        es(s), i = !0, t()
                    })
                }(e, () => {
                    if (x) {
                        let t = eM(e, {
                            doc: s,
                            mirror: o,
                            blockClass: a,
                            blockSelector: l,
                            unblockSelector: u,
                            maskAllText: d,
                            maskTextClass: h,
                            unmaskTextClass: p,
                            maskTextSelector: f,
                            unmaskTextSelector: m,
                            skipChild: !1,
                            inlineStylesheet: g,
                            maskInputOptions: v,
                            maskAttributeFn: S,
                            maskTextFn: _,
                            maskInputFn: w,
                            slimDOMOptions: b,
                            dataURLOptions: E,
                            inlineImages: k,
                            recordCanvas: M,
                            preserveWhiteSpace: O,
                            onSerialize: I,
                            onIframeLoad: C,
                            iframeLoadTimeout: R,
                            onStylesheetLoad: x,
                            stylesheetLoadTimeout: T,
                            keepIframeSrcFn: A
                        });
                        t && x(e, t)
                    }
                }, T), L
            }

            function eI(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }

            function eC(e, t, r = document) {
                let n = {
                    capture: !0,
                    passive: !0
                };
                return r.addEventListener(e, t, n), () => r.removeEventListener(e, t, n)
            }
            let eR = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                ex = {
                    map: {},
                    getId: () => (console.error(eR), -1),
                    getNode: () => (console.error(eR), null),
                    removeNodeFromMap() {
                        console.error(eR)
                    },
                    has: () => (console.error(eR), !1),
                    reset() {
                        console.error(eR)
                    }
                };

            function eT(e, t, r = {}) {
                let n = null,
                    i = 0;
                return function(...s) {
                    let o = Date.now();
                    i || !1 !== r.leading || (i = o);
                    let a = t - (o - i),
                        l = this;
                    a <= 0 || a > t ? (n && (function(...e) {
                        eK("clearTimeout")(...e)
                    }(n), n = null), i = o, e.apply(l, s)) : n || !1 === r.trailing || (n = eJ(() => {
                        i = !1 === r.leading ? 0 : Date.now(), n = null, e.apply(l, s)
                    }, a))
                }
            }

            function eA(e, t, r) {
                try {
                    if (!(t in e)) return () => {};
                    let n = e[t],
                        i = r(n);
                    return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: n
                        }
                    })), e[t] = i, () => {
                        e[t] = n
                    }
                } catch (e) {
                    return () => {}
                }
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (ex = new Proxy(ex, {
                get: (e, t, r) => ("map" === t && console.error(eR), Reflect.get(e, t, r))
            }));
            let eD = Date.now;

            function eO(e) {
                let t = e.document;
                return {
                    left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : eI([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                    top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : eI([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || eI([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
                }
            }

            function eN() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
            }

            function eL() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
            }

            function eP(e) {
                return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
            }

            function eB(e, t, r, n, i) {
                if (!e) return !1;
                let s = eP(e);
                if (!s) return !1;
                let o = eb(t, r);
                if (!i) {
                    let e = n && s.matches(n);
                    return o(s) && !e
                }
                let a = ew(s, o),
                    l = -1;
                return !(a < 0) && (n && (l = ew(s, eb(null, n))), a > -1 && l < 0 || a < l)
            }

            function eF(e, t) {
                return -2 === t.getId(e)
            }

            function eU(e) {
                return !!e.changedTouches
            }

            function eW(e, t) {
                return !!("IFRAME" === e.nodeName && t.getMeta(e))
            }

            function ez(e, t) {
                return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
            }

            function ej(e) {
                return !!eI([e, "optionalAccess", e => e.shadowRoot])
            }
            /[1-9][0-9]{12}/.test(Date.now().toString()) || (eD = () => new Date().getTime());
            class eH {
                constructor() {
                    this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
                }
                getId(e) {
                    return (0, d.h)(this.styleIDMap.get(e), () => -1)
                }
                has(e) {
                    return this.styleIDMap.has(e)
                }
                add(e, t) {
                    let r;
                    return this.has(e) ? this.getId(e) : (r = void 0 === t ? this.id++ : t, this.styleIDMap.set(e, r), this.idStyleMap.set(r, e), r)
                }
                getStyle(e) {
                    return this.idStyleMap.get(e) || null
                }
                reset() {
                    this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
                }
                generateId() {
                    return this.id++
                }
            }

            function e$(e) {
                let t = null;
                return eI([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host), t
            }

            function eq(e) {
                let t = e.ownerDocument;
                return !!t && (t.contains(e) || function(e) {
                    let t = e.ownerDocument;
                    if (!t) return !1;
                    let r = function(e) {
                        let t, r = e;
                        for (; t = e$(r);) r = t;
                        return r
                    }(e);
                    return t.contains(r)
                }(e))
            }
            let eV = {};

            function eK(e) {
                let t = eV[e];
                if (t) return t;
                let r = window.document,
                    n = window[e];
                if (r && "function" == typeof r.createElement) try {
                    let t = r.createElement("iframe");
                    t.hidden = !0, r.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (n = i[e]), r.head.removeChild(t)
                } catch (e) {}
                return eV[e] = n.bind(window)
            }

            function eJ(...e) {
                return eK("setTimeout")(...e)
            }
            var eG = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e))(eG || {}),
                eY = (e => (e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", e[e.CustomElement = 16] = "CustomElement", e))(eY || {}),
                eX = (e => (e[e.MouseUp = 0] = "MouseUp", e[e.MouseDown = 1] = "MouseDown", e[e.Click = 2] = "Click", e[e.ContextMenu = 3] = "ContextMenu", e[e.DblClick = 4] = "DblClick", e[e.Focus = 5] = "Focus", e[e.Blur = 6] = "Blur", e[e.TouchStart = 7] = "TouchStart", e[e.TouchMove_Departed = 8] = "TouchMove_Departed", e[e.TouchEnd = 9] = "TouchEnd", e[e.TouchCancel = 10] = "TouchCancel", e))(eX || {}),
                eQ = (e => (e[e.Mouse = 0] = "Mouse", e[e.Pen = 1] = "Pen", e[e.Touch = 2] = "Touch", e))(eQ || {});
            class eZ {
                constructor() {
                    this.length = 0, this.head = null, this.tail = null
                }
                get(e) {
                    if (e >= this.length) throw Error("Position outside of list range");
                    let t = this.head;
                    for (let r = 0; r < e; r++) t = function(e) {
                        let t;
                        let r = e[0],
                            n = 1;
                        for (; n < e.length;) {
                            let i = e[n],
                                s = e[n + 1];
                            if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                            "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                        }
                        return r
                    }([t, "optionalAccess", e => e.next]) || null;
                    return t
                }
                addNode(e) {
                    let t = {
                        value: e,
                        previous: null,
                        next: null
                    };
                    if (e.__ln = t, e.previousSibling && "__ln" in e.previousSibling) {
                        let r = e.previousSibling.__ln.next;
                        t.next = r, t.previous = e.previousSibling.__ln, e.previousSibling.__ln.next = t, r && (r.previous = t)
                    } else if (e.nextSibling && "__ln" in e.nextSibling && e.nextSibling.__ln.previous) {
                        let r = e.nextSibling.__ln.previous;
                        t.previous = r, t.next = e.nextSibling.__ln, e.nextSibling.__ln.previous = t, r && (r.next = t)
                    } else this.head && (this.head.previous = t), t.next = this.head, this.head = t;
                    null === t.next && (this.tail = t), this.length++
                }
                removeNode(e) {
                    let t = e.__ln;
                    this.head && (t.previous ? (t.previous.next = t.next, t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next, this.head ? this.head.previous = null : this.tail = null), e.__ln && delete e.__ln, this.length--)
                }
            }
            let e0 = (e, t) => `${e}@${t}`;
            class e1 {
                constructor() {
                    this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = e => {
                        e.forEach(this.processMutation), this.emit()
                    }, this.emit = () => {
                        if (this.frozen || this.locked) return;
                        let e = [],
                            t = new Set,
                            r = new eZ,
                            n = e => {
                                let t = e,
                                    r = -2;
                                for (; - 2 === r;) r = (t = t && t.nextSibling) && this.mirror.getId(t);
                                return r
                            },
                            i = i => {
                                if (!i.parentNode || !eq(i)) return;
                                let s = H(i.parentNode) ? this.mirror.getId(e$(i)) : this.mirror.getId(i.parentNode),
                                    o = n(i);
                                if (-1 === s || -1 === o) return r.addNode(i);
                                let a = eM(i, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskAllText: this.maskAllText,
                                    unblockSelector: this.unblockSelector,
                                    maskTextClass: this.maskTextClass,
                                    unmaskTextClass: this.unmaskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    unmaskTextSelector: this.unmaskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskAttributeFn: this.maskAttributeFn,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: e => {
                                        eW(e, this.mirror) && !eB(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e), ez(e, this.mirror) && this.stylesheetManager.trackLinkElement(e), ej(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                                    },
                                    onIframeLoad: (e, t) => {
                                        eB(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (this.iframeManager.attachIframe(e, t), e.contentWindow && this.canvasManager.addWindow(e.contentWindow), this.shadowDomManager.observeAttachShadow(e))
                                    },
                                    onStylesheetLoad: (e, t) => {
                                        this.stylesheetManager.attachLinkElement(e, t)
                                    }
                                });
                                a && (e.push({
                                    parentId: s,
                                    nextId: o,
                                    node: a
                                }), t.add(a.id))
                            };
                        for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (let e of this.movedSet)(!e3(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                        for (let e of this.addedSet) e5(this.droppedSet, e) || e3(this.removes, e, this.mirror) ? e5(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                        let s = null;
                        for (; r.length;) {
                            let e = null;
                            if (s) {
                                let t = this.mirror.getId(s.value.parentNode),
                                    r = n(s.value); - 1 !== t && -1 !== r && (e = s)
                            }
                            if (!e) {
                                let t = r.tail;
                                for (; t;) {
                                    let r = t;
                                    if (t = t.previous, r) {
                                        let t = this.mirror.getId(r.value.parentNode);
                                        if (-1 === n(r.value)) continue;
                                        if (-1 !== t) {
                                            e = r;
                                            break
                                        } {
                                            let t = r.value;
                                            if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                                let n = t.parentNode.host;
                                                if (-1 !== this.mirror.getId(n)) {
                                                    e = r;
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (!e) {
                                for (; r.head;) r.removeNode(r.head.value);
                                break
                            }
                            s = e.previous, r.removeNode(e.value), i(e.value)
                        }
                        let o = {
                            texts: this.texts.map(e => ({
                                id: this.mirror.getId(e.node),
                                value: e.value
                            })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            attributes: this.attributes.map(e => {
                                let {
                                    attributes: t
                                } = e;
                                if ("string" == typeof t.style) {
                                    let r = JSON.stringify(e.styleDiff),
                                        n = JSON.stringify(e._unchangedStyles);
                                    r.length < t.style.length && (r + n).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                                }
                                return {
                                    id: this.mirror.getId(e.node),
                                    attributes: t
                                }
                            }).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                            removes: this.removes,
                            adds: e
                        };
                        (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
                    }, this.processMutation = e => {
                        if (!eF(e.target, this.mirror)) switch (e.type) {
                            case "characterData":
                                {
                                    let t = e.target.textContent;eB(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || t === e.oldValue || this.texts.push({
                                        value: eE(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, eP(e.target)) : t.replace(/[\S]/g, "*") : t,
                                        node: e.target
                                    });
                                    break
                                }
                            case "attributes":
                                {
                                    let t = e.target,
                                        r = e.attributeName,
                                        n = e.target.getAttribute(r);
                                    if ("value" === r) {
                                        let r = Z(t),
                                            i = t.tagName;
                                        n = ee(t, i, r);
                                        let s = J({
                                            maskInputOptions: this.maskInputOptions,
                                            tagName: i,
                                            type: r
                                        });
                                        n = G({
                                            isMasked: eE(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, s),
                                            element: t,
                                            value: n,
                                            maskInputFn: this.maskInputFn
                                        })
                                    }
                                    if (eB(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || n === e.oldValue) return;
                                    let i = this.attributeMap.get(e.target);
                                    if ("IFRAME" === t.tagName && "src" === r && !this.keepIframeSrcFn(n)) {
                                        if (t.contentDocument) return;
                                        r = "rr_src"
                                    }
                                    if (i || (i = {
                                            node: e.target,
                                            attributes: {},
                                            styleDiff: {},
                                            _unchangedStyles: {}
                                        }, this.attributes.push(i), this.attributeMap.set(e.target, i)), "type" === r && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"), !e_(t.tagName, r) && (i.attributes[r] = eS(this.doc, Y(t.tagName), Y(r), n, t, this.maskAttributeFn), "style" === r)) {
                                        if (!this.unattachedDoc) try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                        let r = this.unattachedDoc.createElement("span");
                                        for (let n of (e.oldValue && r.setAttribute("style", e.oldValue), Array.from(t.style))) {
                                            let e = t.style.getPropertyValue(n),
                                                s = t.style.getPropertyPriority(n);
                                            e !== r.style.getPropertyValue(n) || s !== r.style.getPropertyPriority(n) ? "" === s ? i.styleDiff[n] = e : i.styleDiff[n] = [e, s] : i._unchangedStyles[n] = [e, s]
                                        }
                                        for (let e of Array.from(r.style)) "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                    }
                                    break
                                }
                            case "childList":
                                if (eB(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                                e.addedNodes.forEach(t => this.genAdds(t, e.target)), e.removedNodes.forEach(t => {
                                    let r = this.mirror.getId(t),
                                        n = H(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                    eB(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eF(t, this.mirror) || -1 === this.mirror.getId(t) || (this.addedSet.has(t) ? (e2(this.addedSet, t), this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === r || function e(t, r) {
                                        if (H(t)) return !1;
                                        let n = r.getId(t);
                                        return !r.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, r))
                                    }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[e0(r, n)] ? e2(this.movedSet, t) : this.removes.push({
                                        parentId: n,
                                        id: r,
                                        isShadow: !!(H(e.target) && $(e.target)) || void 0
                                    })), this.mapRemoves.push(t))
                                })
                        }
                    }, this.genAdds = (e, t) => {
                        if (!this.processedNodeManager.inOtherBuffer(e, this) && !(this.addedSet.has(e) || this.movedSet.has(e))) {
                            if (this.mirror.hasNode(e)) {
                                if (eF(e, this.mirror)) return;
                                this.movedSet.add(e);
                                let r = null;
                                t && this.mirror.hasNode(t) && (r = this.mirror.getId(t)), r && -1 !== r && (this.movedMap[e0(this.mirror.getId(e), r)] = !0)
                            } else this.addedSet.add(e), this.droppedSet.delete(e);
                            !eB(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)), ej(e) && e.shadowRoot.childNodes.forEach(t => {
                                this.processedNodeManager.add(t, this), this.genAdds(t, e)
                            }))
                        }
                    }
                }
                init(e) {
                    ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                        this[t] = e[t]
                    })
                }
                freeze() {
                    this.frozen = !0, this.canvasManager.freeze()
                }
                unfreeze() {
                    this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
                }
                isFrozen() {
                    return this.frozen
                }
                lock() {
                    this.locked = !0, this.canvasManager.lock()
                }
                unlock() {
                    this.locked = !1, this.canvasManager.unlock(), this.emit()
                }
                reset() {
                    this.shadowDomManager.reset(), this.canvasManager.reset()
                }
            }

            function e2(e, t) {
                e.delete(t), t.childNodes.forEach(t => e2(e, t))
            }

            function e3(e, t, r) {
                return 0 !== e.length && function(e, t, r) {
                    let n = t.parentNode;
                    for (; n;) {
                        let t = r.getId(n);
                        if (e.some(e => e.id === t)) return !0;
                        n = n.parentNode
                    }
                    return !1
                }(e, t, r)
            }

            function e5(e, t) {
                return 0 !== e.size && function e(t, r) {
                    let {
                        parentNode: n
                    } = r;
                    return !!n && (!!t.has(n) || e(t, n))
                }(e, t)
            }
            let e8 = e => s ? (...t) => {
                try {
                    return e(...t)
                } catch (e) {
                    if (s && !0 === s(e)) return () => {};
                    throw e
                }
            } : e;

            function e6(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            let e4 = [];

            function e7(e) {
                try {
                    if ("composedPath" in e) {
                        let t = e.composedPath();
                        if (t.length) return t[0]
                    } else if ("path" in e && e.path.length) return e.path[0]
                } catch (e) {}
                return e && e.target
            }

            function e9(e, t) {
                let r = new e1;
                e4.push(r), r.init(e);
                let n = window.MutationObserver || window.__rrMutationObserver,
                    i = e6([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
                i && window[i] && (n = window[i]);
                let s = new n(e8(t => {
                    e.onMutation && !1 === e.onMutation(t) || r.processMutations.bind(r)(t)
                }));
                return s.observe(t, {
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), s
            }

            function te({
                scrollCb: e,
                doc: t,
                mirror: r,
                blockClass: n,
                blockSelector: i,
                unblockSelector: s,
                sampling: o
            }) {
                return eC("scroll", e8(eT(e8(o => {
                    let a = e7(o);
                    if (!a || eB(a, n, i, s, !0)) return;
                    let l = r.getId(a);
                    if (a === t && t.defaultView) {
                        let r = eO(t.defaultView);
                        e({
                            id: l,
                            x: r.left,
                            y: r.top
                        })
                    } else e({
                        id: l,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
                }), o.scroll || 100)), t)
            }
            let tt = ["INPUT", "TEXTAREA", "SELECT"],
                tr = new WeakMap;

            function tn(e) {
                var t;
                return t = [], ta("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || ta("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || ta("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || ta("CSSConditionRule") && e.parentRule instanceof CSSConditionRule ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e)) : e.parentStyleSheet && t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)), t
            }

            function ti(e, t, r) {
                let n, i;
                return e ? (e.ownerNode ? n = t.getId(e.ownerNode) : i = r.getId(e), {
                    styleId: i,
                    id: n
                }) : {}
            }

            function ts({
                mirror: e,
                stylesheetManager: t
            }, r) {
                let n = null;
                n = "#document" === r.nodeName ? e.getId(r) : e.getId(r.host);
                let i = "#document" === r.nodeName ? e6([r, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : e6([r, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot]),
                    s = e6([i, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(e6([i, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
                return null !== n && -1 !== n && i && s ? (Object.defineProperty(r, "adoptedStyleSheets", {
                    configurable: s.configurable,
                    enumerable: s.enumerable,
                    get() {
                        return e6([s, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                    },
                    set(e) {
                        let r = e6([s, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                        if (null !== n && -1 !== n) try {
                            t.adoptStyleSheets(e, n)
                        } catch (e) {}
                        return r
                    }
                }), e8(() => {
                    Object.defineProperty(r, "adoptedStyleSheets", {
                        configurable: s.configurable,
                        enumerable: s.enumerable,
                        get: s.get,
                        set: s.set
                    })
                })) : () => {}
            }

            function to(e, t = {}) {
                let r;
                let n = e.doc.defaultView;
                if (!n) return () => {};
                e.recordDOM && (r = e9(e, e.doc));
                let i = function({
                        mousemoveCb: e,
                        sampling: t,
                        doc: r,
                        mirror: n
                    }) {
                        let i;
                        if (!1 === t.mousemove) return () => {};
                        let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                            o = "number" == typeof t.mousemoveCallback ? t.mousemoveCallback : 500,
                            a = [],
                            l = eT(e8(t => {
                                let r = Date.now() - i;
                                e(a.map(e => (e.timeOffset -= r, e)), t), a = [], i = null
                            }), o),
                            c = e8(eT(e8(e => {
                                let t = e7(e),
                                    {
                                        clientX: r,
                                        clientY: s
                                    } = eU(e) ? e.changedTouches[0] : e;
                                i || (i = eD()), a.push({
                                    x: r,
                                    y: s,
                                    id: n.getId(t),
                                    timeOffset: eD() - i
                                }), l("undefined" != typeof DragEvent && e instanceof DragEvent ? eY.Drag : e instanceof MouseEvent ? eY.MouseMove : eY.TouchMove)
                            }), s, {
                                trailing: !1
                            })),
                            u = [eC("mousemove", c, r), eC("touchmove", c, r), eC("drag", c, r)];
                        return e8(() => {
                            u.forEach(e => e())
                        })
                    }(e),
                    s = function({
                        mouseInteractionCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: i,
                        unblockSelector: s,
                        sampling: o
                    }) {
                        if (!1 === o.mouseInteraction) return () => {};
                        let a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                            l = [],
                            c = null,
                            u = t => o => {
                                let a = e7(o);
                                if (eB(a, n, i, s, !0)) return;
                                let l = null,
                                    u = t;
                                if ("pointerType" in o) {
                                    switch (o.pointerType) {
                                        case "mouse":
                                            l = eQ.Mouse;
                                            break;
                                        case "touch":
                                            l = eQ.Touch;
                                            break;
                                        case "pen":
                                            l = eQ.Pen
                                    }
                                    l === eQ.Touch ? eX[t] === eX.MouseDown ? u = "TouchStart" : eX[t] === eX.MouseUp && (u = "TouchEnd") : eQ.Pen
                                } else eU(o) && (l = eQ.Touch);
                                null !== l ? (c = l, (u.startsWith("Touch") && l === eQ.Touch || u.startsWith("Mouse") && l === eQ.Mouse) && (l = null)) : eX[t] === eX.Click && (l = c, c = null);
                                let d = eU(o) ? o.changedTouches[0] : o;
                                if (!d) return;
                                let h = r.getId(a),
                                    {
                                        clientX: p,
                                        clientY: f
                                    } = d;
                                e8(e)({
                                    type: eX[u],
                                    id: h,
                                    x: p,
                                    y: f,
                                    ...null !== l && {
                                        pointerType: l
                                    }
                                })
                            };
                        return Object.keys(eX).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== a[e]).forEach(e => {
                            let r = Y(e),
                                n = u(e);
                            if (window.PointerEvent) switch (eX[e]) {
                                case eX.MouseDown:
                                case eX.MouseUp:
                                    r = r.replace("mouse", "pointer");
                                    break;
                                case eX.TouchStart:
                                case eX.TouchEnd:
                                    return
                            }
                            l.push(eC(r, n, t))
                        }), e8(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    o = te(e),
                    a = function({
                        viewportResizeCb: e
                    }, {
                        win: t
                    }) {
                        let r = -1,
                            n = -1;
                        return eC("resize", e8(eT(e8(() => {
                            let t = eN(),
                                i = eL();
                            (r !== t || n !== i) && (e({
                                width: Number(i),
                                height: Number(t)
                            }), r = t, n = i)
                        }), 200)), t)
                    }(e, {
                        win: n
                    }),
                    l = function({
                        inputCb: e,
                        doc: t,
                        mirror: r,
                        blockClass: n,
                        blockSelector: i,
                        unblockSelector: s,
                        ignoreClass: o,
                        ignoreSelector: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        sampling: u,
                        userTriggeredOnInput: d,
                        maskTextClass: h,
                        unmaskTextClass: p,
                        maskTextSelector: f,
                        unmaskTextSelector: m
                    }) {
                        function y(e) {
                            let r = e7(e),
                                u = e.isTrusted,
                                y = r && X(r.tagName);
                            if ("OPTION" === y && (r = r.parentElement), !r || !y || 0 > tt.indexOf(y) || eB(r, n, i, s, !0)) return;
                            let v = r;
                            if (v.classList.contains(o) || a && v.matches(a)) return;
                            let S = Z(r),
                                _ = ee(v, y, S),
                                w = !1,
                                b = J({
                                    maskInputOptions: l,
                                    tagName: y,
                                    type: S
                                }),
                                E = eE(r, h, f, p, m, b);
                            ("radio" === S || "checkbox" === S) && (w = r.checked), _ = G({
                                isMasked: E,
                                element: r,
                                value: _,
                                maskInputFn: c
                            }), g(r, d ? {
                                text: _,
                                isChecked: w,
                                userTriggered: u
                            } : {
                                text: _,
                                isChecked: w
                            });
                            let k = r.name;
                            "radio" === S && k && w && t.querySelectorAll(`input[type="radio"][name="${k}"]`).forEach(e => {
                                if (e !== r) {
                                    let t = G({
                                        isMasked: E,
                                        element: e,
                                        value: ee(e, y, S),
                                        maskInputFn: c
                                    });
                                    g(e, d ? {
                                        text: t,
                                        isChecked: !w,
                                        userTriggered: !1
                                    } : {
                                        text: t,
                                        isChecked: !w
                                    })
                                }
                            })
                        }

                        function g(t, n) {
                            let i = tr.get(t);
                            if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                                tr.set(t, n);
                                let i = r.getId(t);
                                e8(e)({ ...n,
                                    id: i
                                })
                            }
                        }
                        let v = ("last" === u.input ? ["change"] : ["input", "change"]).map(e => eC(e, e8(y), t)),
                            S = t.defaultView;
                        if (!S) return () => {
                            v.forEach(e => e())
                        };
                        let _ = S.Object.getOwnPropertyDescriptor(S.HTMLInputElement.prototype, "value"),
                            w = [
                                [S.HTMLInputElement.prototype, "value"],
                                [S.HTMLInputElement.prototype, "checked"],
                                [S.HTMLSelectElement.prototype, "value"],
                                [S.HTMLTextAreaElement.prototype, "value"],
                                [S.HTMLSelectElement.prototype, "selectedIndex"],
                                [S.HTMLOptionElement.prototype, "selected"]
                            ];
                        return _ && _.set && v.push(...w.map(e => (function e(t, r, n, i, s = window) {
                            let o = s.Object.getOwnPropertyDescriptor(t, r);
                            return s.Object.defineProperty(t, r, i ? n : {
                                set(e) {
                                    eJ(() => {
                                        n.set.call(this, e)
                                    }, 0), o && o.set && o.set.call(this, e)
                                }
                            }), () => e(t, r, o || {}, !0)
                        })(e[0], e[1], {
                            set() {
                                e8(y)({
                                    target: this,
                                    isTrusted: !1
                                })
                            }
                        }, !1, S))), e8(() => {
                            v.forEach(e => e())
                        })
                    }(e),
                    c = function({
                        mediaInteractionCb: e,
                        blockClass: t,
                        blockSelector: r,
                        unblockSelector: n,
                        mirror: i,
                        sampling: s,
                        doc: o
                    }) {
                        let a = e8(o => eT(e8(s => {
                                let a = e7(s);
                                if (!a || eB(a, t, r, n, !0)) return;
                                let {
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                } = a;
                                e({
                                    type: o,
                                    id: i.getId(a),
                                    currentTime: l,
                                    volume: c,
                                    muted: u,
                                    playbackRate: d
                                })
                            }), s.media || 500)),
                            l = [eC("play", a(0), o), eC("pause", a(1), o), eC("seeked", a(2), o), eC("volumechange", a(3), o), eC("ratechange", a(4), o)];
                        return e8(() => {
                            l.forEach(e => e())
                        })
                    }(e),
                    u = () => {},
                    d = () => {},
                    h = () => {},
                    p = () => {};
                e.recordDOM && (u = function({
                    styleSheetRuleCb: e,
                    mirror: t,
                    stylesheetManager: r
                }, {
                    win: n
                }) {
                    let i, s;
                    if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                    let o = n.CSSStyleSheet.prototype.insertRule;
                    n.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                        apply: e8((n, i, s) => {
                            let [o, a] = s, {
                                id: l,
                                styleId: c
                            } = ti(i, t, r.styleMirror);
                            return (l && -1 !== l || c && -1 !== c) && e({
                                id: l,
                                styleId: c,
                                adds: [{
                                    rule: o,
                                    index: a
                                }]
                            }), n.apply(i, s)
                        })
                    });
                    let a = n.CSSStyleSheet.prototype.deleteRule;
                    n.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                        apply: e8((n, i, s) => {
                            let [o] = s, {
                                id: a,
                                styleId: l
                            } = ti(i, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                removes: [{
                                    index: o
                                }]
                            }), n.apply(i, s)
                        })
                    }), n.CSSStyleSheet.prototype.replace && (i = n.CSSStyleSheet.prototype.replace, n.CSSStyleSheet.prototype.replace = new Proxy(i, {
                        apply: e8((n, i, s) => {
                            let [o] = s, {
                                id: a,
                                styleId: l
                            } = ti(i, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                replace: o
                            }), n.apply(i, s)
                        })
                    })), n.CSSStyleSheet.prototype.replaceSync && (s = n.CSSStyleSheet.prototype.replaceSync, n.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
                        apply: e8((n, i, s) => {
                            let [o] = s, {
                                id: a,
                                styleId: l
                            } = ti(i, t, r.styleMirror);
                            return (a && -1 !== a || l && -1 !== l) && e({
                                id: a,
                                styleId: l,
                                replaceSync: o
                            }), n.apply(i, s)
                        })
                    }));
                    let l = {};
                    tl("CSSGroupingRule") ? l.CSSGroupingRule = n.CSSGroupingRule : (tl("CSSMediaRule") && (l.CSSMediaRule = n.CSSMediaRule), tl("CSSConditionRule") && (l.CSSConditionRule = n.CSSConditionRule), tl("CSSSupportsRule") && (l.CSSSupportsRule = n.CSSSupportsRule));
                    let c = {};
                    return Object.entries(l).forEach(([n, i]) => {
                        c[n] = {
                            insertRule: i.prototype.insertRule,
                            deleteRule: i.prototype.deleteRule
                        }, i.prototype.insertRule = new Proxy(c[n].insertRule, {
                            apply: e8((n, i, s) => {
                                let [o, a] = s, {
                                    id: l,
                                    styleId: c
                                } = ti(i.parentStyleSheet, t, r.styleMirror);
                                return (l && -1 !== l || c && -1 !== c) && e({
                                    id: l,
                                    styleId: c,
                                    adds: [{
                                        rule: o,
                                        index: [...tn(i), a || 0]
                                    }]
                                }), n.apply(i, s)
                            })
                        }), i.prototype.deleteRule = new Proxy(c[n].deleteRule, {
                            apply: e8((n, i, s) => {
                                let [o] = s, {
                                    id: a,
                                    styleId: l
                                } = ti(i.parentStyleSheet, t, r.styleMirror);
                                return (a && -1 !== a || l && -1 !== l) && e({
                                    id: a,
                                    styleId: l,
                                    removes: [{
                                        index: [...tn(i), o]
                                    }]
                                }), n.apply(i, s)
                            })
                        })
                    }), e8(() => {
                        n.CSSStyleSheet.prototype.insertRule = o, n.CSSStyleSheet.prototype.deleteRule = a, i && (n.CSSStyleSheet.prototype.replace = i), s && (n.CSSStyleSheet.prototype.replaceSync = s), Object.entries(l).forEach(([e, t]) => {
                            t.prototype.insertRule = c[e].insertRule, t.prototype.deleteRule = c[e].deleteRule
                        })
                    })
                }(e, {
                    win: n
                }), d = ts(e, e.doc), h = function({
                    styleDeclarationCb: e,
                    mirror: t,
                    ignoreCSSAttributes: r,
                    stylesheetManager: n
                }, {
                    win: i
                }) {
                    let s = i.CSSStyleDeclaration.prototype.setProperty;
                    i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                        apply: e8((i, o, a) => {
                            let [l, c, u] = a;
                            if (r.has(l)) return s.apply(o, [l, c, u]);
                            let {
                                id: d,
                                styleId: h
                            } = ti(e6([o, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                            return (d && -1 !== d || h && -1 !== h) && e({
                                id: d,
                                styleId: h,
                                set: {
                                    property: l,
                                    value: c,
                                    priority: u
                                },
                                index: tn(o.parentRule)
                            }), i.apply(o, a)
                        })
                    });
                    let o = i.CSSStyleDeclaration.prototype.removeProperty;
                    return i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                        apply: e8((i, s, a) => {
                            let [l] = a;
                            if (r.has(l)) return o.apply(s, [l]);
                            let {
                                id: c,
                                styleId: u
                            } = ti(e6([s, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), t, n.styleMirror);
                            return (c && -1 !== c || u && -1 !== u) && e({
                                id: c,
                                styleId: u,
                                remove: {
                                    property: l
                                },
                                index: tn(s.parentRule)
                            }), i.apply(s, a)
                        })
                    }), e8(() => {
                        i.CSSStyleDeclaration.prototype.setProperty = s, i.CSSStyleDeclaration.prototype.removeProperty = o
                    })
                }(e, {
                    win: n
                }), e.collectFonts && (p = function({
                    fontCb: e,
                    doc: t
                }) {
                    let r = t.defaultView;
                    if (!r) return () => {};
                    let n = [],
                        i = new WeakMap,
                        s = r.FontFace;
                    r.FontFace = function(e, t, r) {
                        let n = new s(e, t, r);
                        return i.set(n, {
                            family: e,
                            buffer: "string" != typeof t,
                            descriptors: r,
                            fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                        }), n
                    };
                    let o = eA(t.fonts, "add", function(t) {
                        return function(r) {
                            return eJ(e8(() => {
                                let t = i.get(r);
                                t && (e(t), i.delete(r))
                            }), 0), t.apply(this, [r])
                        }
                    });
                    return n.push(() => {
                        r.FontFace = s
                    }), n.push(o), e8(() => {
                        n.forEach(e => e())
                    })
                }(e)));
                let f = function(e) {
                        let {
                            doc: t,
                            mirror: r,
                            blockClass: n,
                            blockSelector: i,
                            unblockSelector: s,
                            selectionCb: o
                        } = e, a = !0, l = e8(() => {
                            let e = t.getSelection();
                            if (!e || a && e6([e, "optionalAccess", e => e.isCollapsed])) return;
                            a = e.isCollapsed || !1;
                            let l = [],
                                c = e.rangeCount || 0;
                            for (let t = 0; t < c; t++) {
                                let {
                                    startContainer: o,
                                    startOffset: a,
                                    endContainer: c,
                                    endOffset: u
                                } = e.getRangeAt(t);
                                eB(o, n, i, s, !0) || eB(c, n, i, s, !0) || l.push({
                                    start: r.getId(o),
                                    startOffset: a,
                                    end: r.getId(c),
                                    endOffset: u
                                })
                            }
                            o({
                                ranges: l
                            })
                        });
                        return l(), eC("selectionchange", l)
                    }(e),
                    m = function({
                        doc: e,
                        customElementCb: t
                    }) {
                        let r = e.defaultView;
                        return r && r.customElements ? eA(r.customElements, "define", function(e) {
                            return function(r, n, i) {
                                try {
                                    t({
                                        define: {
                                            name: r
                                        }
                                    })
                                } catch (e) {}
                                return e.apply(this, [r, n, i])
                            }
                        }) : () => {}
                    }(e),
                    y = [];
                for (let t of e.plugins) y.push(t.observer(t.callback, n, t.options));
                return e8(() => {
                    e4.forEach(e => e.reset()), e6([r, "optionalAccess", e => e.disconnect, "call", e => e()]), i(), s(), o(), a(), l(), c(), u(), d(), h(), p(), f(), m(), y.forEach(e => e())
                })
            }

            function ta(e) {
                return void 0 !== window[e]
            }

            function tl(e) {
                return !!(void 0 !== window[e] && window[e].prototype && "insertRule" in window[e].prototype && "deleteRule" in window[e].prototype)
            }
            class tc {
                constructor(e) {
                    this.generateIdFn = e, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
                }
                getId(e, t, r, n) {
                    let i = r || this.getIdToRemoteIdMap(e),
                        s = n || this.getRemoteIdToIdMap(e),
                        o = i.get(t);
                    return o || (o = this.generateIdFn(), i.set(t, o), s.set(o, t)), o
                }
                getIds(e, t) {
                    let r = this.getIdToRemoteIdMap(e),
                        n = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getId(e, t, r, n))
                }
                getRemoteId(e, t, r) {
                    let n = r || this.getRemoteIdToIdMap(e);
                    return "number" != typeof t ? t : n.get(t) || -1
                }
                getRemoteIds(e, t) {
                    let r = this.getRemoteIdToIdMap(e);
                    return t.map(t => this.getRemoteId(e, t, r))
                }
                reset(e) {
                    if (!e) {
                        this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap;
                        return
                    }
                    this.iframeIdToRemoteIdMap.delete(e), this.iframeRemoteIdToIdMap.delete(e)
                }
                getIdToRemoteIdMap(e) {
                    let t = this.iframeIdToRemoteIdMap.get(e);
                    return t || (t = new Map, this.iframeIdToRemoteIdMap.set(e, t)), t
                }
                getRemoteIdToIdMap(e) {
                    let t = this.iframeRemoteIdToIdMap.get(e);
                    return t || (t = new Map, this.iframeRemoteIdToIdMap.set(e, t)), t
                }
            }

            function tu(e) {
                let t;
                let r = e[0],
                    n = 1;
                for (; n < e.length;) {
                    let i = e[n],
                        s = e[n + 1];
                    if (n += 2, ("optionalAccess" === i || "optionalCall" === i) && null == r) return;
                    "access" === i || "optionalAccess" === i ? (t = r, r = s(r)) : ("call" === i || "optionalCall" === i) && (r = s((...e) => r.call(t, ...e)), t = void 0)
                }
                return r
            }
            class td {
                constructor() {
                    this.crossOriginIframeMirror = new tc(el), this.crossOriginIframeRootIdMap = new WeakMap
                }
                addIframe() {}
                addLoadListener() {}
                attachIframe() {}
            }
            class th {
                constructor(e) {
                    this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new tc(el), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = e.mutationCb, this.wrappedEmit = e.wrappedEmit, this.stylesheetManager = e.stylesheetManager, this.recordCrossOriginIframes = e.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tc(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = e.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
                }
                addIframe(e) {
                    this.iframes.set(e, !0), e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
                }
                addLoadListener(e) {
                    this.loadListener = e
                }
                attachIframe(e, t) {
                    this.mutationCb({
                        adds: [{
                            parentId: this.mirror.getId(e),
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }), tu([this, "access", e => e.loadListener, "optionalCall", t => t(e)]), e.contentDocument && e.contentDocument.adoptedStyleSheets && e.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(e.contentDocument.adoptedStyleSheets, this.mirror.getId(e.contentDocument))
                }
                handleMessage(e) {
                    if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source) return;
                    let t = this.crossOriginIframeMap.get(e.source);
                    if (!t) return;
                    let r = this.transformCrossOriginEvent(t, e.data.event);
                    r && this.wrappedEmit(r, e.data.isCheckout)
                }
                transformCrossOriginEvent(e, t) {
                    switch (t.type) {
                        case eG.FullSnapshot:
                            {
                                this.crossOriginIframeMirror.reset(e),
                                this.crossOriginIframeStyleMirror.reset(e),
                                this.replaceIdOnNode(t.data.node, e);
                                let r = t.data.node.id;
                                return this.crossOriginIframeRootIdMap.set(e, r),
                                this.patchRootIdOnNode(t.data.node, r),
                                {
                                    timestamp: t.timestamp,
                                    type: eG.IncrementalSnapshot,
                                    data: {
                                        source: eY.Mutation,
                                        adds: [{
                                            parentId: this.mirror.getId(e),
                                            nextId: null,
                                            node: t.data.node
                                        }],
                                        removes: [],
                                        texts: [],
                                        attributes: [],
                                        isAttachIframe: !0
                                    }
                                }
                            }
                        case eG.Meta:
                        case eG.Load:
                        case eG.DomContentLoaded:
                            break;
                        case eG.Plugin:
                            return t;
                        case eG.Custom:
                            return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]), t;
                        case eG.IncrementalSnapshot:
                            switch (t.data.source) {
                                case eY.Mutation:
                                    return t.data.adds.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(t.node, e);
                                        let r = this.crossOriginIframeRootIdMap.get(e);
                                        r && this.patchRootIdOnNode(t.node, r)
                                    }), t.data.removes.forEach(t => {
                                        this.replaceIds(t, e, ["parentId", "id"])
                                    }), t.data.attributes.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t.data.texts.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eY.Drag:
                                case eY.TouchMove:
                                case eY.MouseMove:
                                    return t.data.positions.forEach(t => {
                                        this.replaceIds(t, e, ["id"])
                                    }), t;
                                case eY.ViewportResize:
                                    return !1;
                                case eY.MediaInteraction:
                                case eY.MouseInteraction:
                                case eY.Scroll:
                                case eY.CanvasMutation:
                                case eY.Input:
                                    return this.replaceIds(t.data, e, ["id"]), t;
                                case eY.StyleSheetRule:
                                case eY.StyleDeclaration:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleId"]), t;
                                case eY.Font:
                                    return t;
                                case eY.Selection:
                                    return t.data.ranges.forEach(t => {
                                        this.replaceIds(t, e, ["start", "end"])
                                    }), t;
                                case eY.AdoptedStyleSheet:
                                    return this.replaceIds(t.data, e, ["id"]), this.replaceStyleIds(t.data, e, ["styleIds"]), tu([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                                        this.replaceStyleIds(t, e, ["styleId"])
                                    })]), t
                            }
                    }
                    return !1
                }
                replace(e, t, r, n) {
                    for (let i of n)(Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(r, t[i]) : t[i] = e.getId(r, t[i]));
                    return t
                }
                replaceIds(e, t, r) {
                    return this.replace(this.crossOriginIframeMirror, e, t, r)
                }
                replaceStyleIds(e, t, r) {
                    return this.replace(this.crossOriginIframeStyleMirror, e, t, r)
                }
                replaceIdOnNode(e, t) {
                    this.replaceIds(e, t, ["id", "rootId"]), "childNodes" in e && e.childNodes.forEach(e => {
                        this.replaceIdOnNode(e, t)
                    })
                }
                patchRootIdOnNode(e, t) {
                    e.type === c.Document || e.rootId || (e.rootId = t), "childNodes" in e && e.childNodes.forEach(e => {
                        this.patchRootIdOnNode(e, t)
                    })
                }
            }
            class tp {
                init() {}
                addShadowRoot() {}
                observeAttachShadow() {}
                reset() {}
            }
            class tf {
                constructor(e) {
                    this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = e.mutationCb, this.scrollCb = e.scrollCb, this.bypassOptions = e.bypassOptions, this.mirror = e.mirror, this.init()
                }
                init() {
                    this.reset(), this.patchAttachShadow(Element, document)
                }
                addShadowRoot(e, t) {
                    if (!$(e) || this.shadowDoms.has(e)) return;
                    this.shadowDoms.add(e), this.bypassOptions.canvasManager.addShadowRoot(e);
                    let r = e9({ ...this.bypassOptions,
                        doc: t,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }, e);
                    this.restoreHandlers.push(() => r.disconnect()), this.restoreHandlers.push(te({ ...this.bypassOptions,
                        scrollCb: this.scrollCb,
                        doc: e,
                        mirror: this.mirror
                    })), eJ(() => {
                        e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)), this.restoreHandlers.push(ts({
                            mirror: this.mirror,
                            stylesheetManager: this.bypassOptions.stylesheetManager
                        }, e))
                    }, 0)
                }
                observeAttachShadow(e) {
                    e.contentWindow && e.contentDocument && this.patchAttachShadow(e.contentWindow.Element, e.contentDocument)
                }
                patchAttachShadow(e, t) {
                    let r = this;
                    this.restoreHandlers.push(eA(e.prototype, "attachShadow", function(e) {
                        return function(n) {
                            let i = e.call(this, n);
                            return this.shadowRoot && eq(this) && r.addShadowRoot(this.shadowRoot, t), i
                        }
                    }))
                }
                reset() {
                    this.restoreHandlers.forEach(e => {
                        try {
                            e()
                        } catch (e) {}
                    }), this.restoreHandlers = [], this.shadowDoms = new WeakSet, this.bypassOptions.canvasManager.resetShadowRoots()
                }
            }
            class tm {
                reset() {}
                freeze() {}
                unfreeze() {}
                lock() {}
                unlock() {}
                snapshot() {}
                addWindow() {}
                addShadowRoot() {}
                resetShadowRoots() {}
            }
            class ty {
                constructor(e) {
                    this.trackedLinkElements = new WeakSet, this.styleMirror = new eH, this.mutationCb = e.mutationCb, this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
                }
                attachLinkElement(e, t) {
                    "_cssText" in t.attributes && this.mutationCb({
                        adds: [],
                        removes: [],
                        texts: [],
                        attributes: [{
                            id: t.id,
                            attributes: t.attributes
                        }]
                    }), this.trackLinkElement(e)
                }
                trackLinkElement(e) {
                    this.trackedLinkElements.has(e) || (this.trackedLinkElements.add(e), this.trackStylesheetInLinkElement(e))
                }
                adoptStyleSheets(e, t) {
                    if (0 === e.length) return;
                    let r = {
                            id: t,
                            styleIds: []
                        },
                        n = [];
                    for (let t of e) {
                        let e;
                        this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t), n.push({
                            styleId: e,
                            rules: Array.from(t.rules || CSSRule, (e, t) => ({
                                rule: V(e),
                                index: t
                            }))
                        })), r.styleIds.push(e)
                    }
                    n.length > 0 && (r.styles = n), this.adoptedStyleSheetCb(r)
                }
                reset() {
                    this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
                }
                trackStylesheetInLinkElement(e) {}
            }
            class tg {
                constructor() {
                    this.nodeMap = new WeakMap, this.active = !1
                }
                inOtherBuffer(e, t) {
                    let r = this.nodeMap.get(e);
                    return r && Array.from(r).some(e => e !== t)
                }
                add(e, t) {
                    this.active || (this.active = !0, function(...e) {
                        eK("requestAnimationFrame")(...e)
                    }(() => {
                        this.nodeMap = new WeakMap, this.active = !1
                    })), this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
                }
                destroy() {}
            }
            try {
                if (2 !== Array.from([1], e => 2 * e)[0]) {
                    let e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = (0, h.x)([e, "access", e => e.contentWindow, "optionalAccess", e => e.Array, "access", e => e.from]) || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            let tv = new K;

            function tS(e = {}) {
                let t;
                let {
                    emit: r,
                    checkoutEveryNms: n,
                    checkoutEveryNth: i,
                    blockClass: l = "rr-block",
                    blockSelector: c = null,
                    unblockSelector: u = null,
                    ignoreClass: d = "rr-ignore",
                    ignoreSelector: p = null,
                    maskAllText: f = !1,
                    maskTextClass: m = "rr-mask",
                    unmaskTextClass: y = null,
                    maskTextSelector: g = null,
                    unmaskTextSelector: v = null,
                    inlineStylesheet: S = !0,
                    maskAllInputs: _,
                    maskInputOptions: w,
                    slimDOMOptions: b,
                    maskAttributeFn: E,
                    maskInputFn: k,
                    maskTextFn: M,
                    maxCanvasSize: I = null,
                    packFn: C,
                    sampling: R = {},
                    dataURLOptions: x = {},
                    mousemoveWait: T,
                    recordDOM: A = !0,
                    recordCanvas: D = !1,
                    recordCrossOriginIframes: O = !1,
                    recordAfter: N = "DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load",
                    userTriggeredOnInput: L = !1,
                    collectFonts: P = !1,
                    inlineImages: B = !1,
                    plugins: F,
                    keepIframeSrcFn: U = () => !1,
                    ignoreCSSAttributes: W = new Set([]),
                    errorHandler: z,
                    onMutation: j,
                    getCanvasManager: H
                } = e;
                s = z;
                let $ = !O || window.parent === window,
                    q = !1;
                if (!$) try {
                    window.parent.document && (q = !1)
                } catch (e) {
                    q = !0
                }
                if ($ && !r) throw Error("emit function is required");
                if (!$ && !q) return () => {};
                void 0 !== T && void 0 === R.mousemove && (R.mousemove = T), tv.reset();
                let V = !0 === _ ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0,
                        radio: !0,
                        checkbox: !0
                    } : void 0 !== w ? w : {},
                    J = !0 === b || "all" === b ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaVerification: !0,
                        headMetaAuthorship: "all" === b,
                        headMetaDescKeywords: "all" === b
                    } : b || {};
                ! function(e = window) {
                    "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...e) => {
                        let t = e[0];
                        if (!(0 in e)) throw TypeError("1 argument is required");
                        do
                            if (this === t) return !0; while (t = t && t.parentNode);
                        return !1
                    })
                }();
                let G = 0,
                    Y = e => {
                        for (let t of F || []) t.eventProcessor && (e = t.eventProcessor(e));
                        return C && !q && (e = C(e)), e
                    };
                o = (e, s) => {
                    if (e.timestamp = eD(), (0, h.x)([e4, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== eG.FullSnapshot && !(e.type === eG.IncrementalSnapshot && e.data.source === eY.Mutation) && e4.forEach(e => e.unfreeze()), $)(0, h.x)([r, "optionalCall", t => t(Y(e), s)]);
                    else if (q) {
                        let t = {
                            type: "rrweb",
                            event: Y(e),
                            origin: window.location.origin,
                            isCheckout: s
                        };
                        window.parent.postMessage(t, "*")
                    }
                    if (e.type === eG.FullSnapshot) t = e, G = 0;
                    else if (e.type === eG.IncrementalSnapshot) {
                        if (e.data.source === eY.Mutation && e.data.isAttachIframe) return;
                        G++;
                        let r = i && G >= i,
                            s = n && t && e.timestamp - t.timestamp > n;
                        (r || s) && es(!0)
                    }
                };
                let X = e => {
                        o({
                            type: eG.IncrementalSnapshot,
                            data: {
                                source: eY.Mutation,
                                ...e
                            }
                        })
                    },
                    Q = e => o({
                        type: eG.IncrementalSnapshot,
                        data: {
                            source: eY.Scroll,
                            ...e
                        }
                    }),
                    Z = e => o({
                        type: eG.IncrementalSnapshot,
                        data: {
                            source: eY.CanvasMutation,
                            ...e
                        }
                    }),
                    ee = new ty({
                        mutationCb: X,
                        adoptedStyleSheetCb: e => o({
                            type: eG.IncrementalSnapshot,
                            data: {
                                source: eY.AdoptedStyleSheet,
                                ...e
                            }
                        })
                    }),
                    et = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new td : new th({
                        mirror: tv,
                        mutationCb: X,
                        stylesheetManager: ee,
                        recordCrossOriginIframes: O,
                        wrappedEmit: o
                    });
                for (let e of F || []) e.getMirror && e.getMirror({
                    nodeMirror: tv,
                    crossOriginIframeMirror: et.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: et.crossOriginIframeStyleMirror
                });
                let er = new tg,
                    en = function(e, t) {
                        try {
                            return e ? e(t) : new tm
                        } catch (e) {
                            return console.warn("Unable to initialize CanvasManager"), new tm
                        }
                    }(H, {
                        mirror: tv,
                        win: window,
                        mutationCb: e => o({
                            type: eG.IncrementalSnapshot,
                            data: {
                                source: eY.CanvasMutation,
                                ...e
                            }
                        }),
                        recordCanvas: D,
                        blockClass: l,
                        blockSelector: c,
                        unblockSelector: u,
                        maxCanvasSize: I,
                        sampling: R.canvas,
                        dataURLOptions: x,
                        errorHandler: z
                    }),
                    ei = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new tp : new tf({
                        mutationCb: X,
                        scrollCb: Q,
                        bypassOptions: {
                            onMutation: j,
                            blockClass: l,
                            blockSelector: c,
                            unblockSelector: u,
                            maskAllText: f,
                            maskTextClass: m,
                            unmaskTextClass: y,
                            maskTextSelector: g,
                            unmaskTextSelector: v,
                            inlineStylesheet: S,
                            maskInputOptions: V,
                            dataURLOptions: x,
                            maskAttributeFn: E,
                            maskTextFn: M,
                            maskInputFn: k,
                            recordCanvas: D,
                            inlineImages: B,
                            sampling: R,
                            slimDOMOptions: J,
                            iframeManager: et,
                            stylesheetManager: ee,
                            canvasManager: en,
                            keepIframeSrcFn: U,
                            processedNodeManager: er
                        },
                        mirror: tv
                    }),
                    es = (e = !1) => {
                        if (!A) return;
                        o({
                            type: eG.Meta,
                            data: {
                                href: window.location.href,
                                width: eL(),
                                height: eN()
                            }
                        }, e), ee.reset(), ei.init(), e4.forEach(e => e.lock());
                        let t = function(e, t) {
                            let {
                                mirror: r = new K,
                                blockClass: n = "rr-block",
                                blockSelector: i = null,
                                unblockSelector: s = null,
                                maskAllText: o = !1,
                                maskTextClass: a = "rr-mask",
                                unmaskTextClass: l = null,
                                maskTextSelector: c = null,
                                unmaskTextSelector: u = null,
                                inlineStylesheet: d = !0,
                                inlineImages: h = !1,
                                recordCanvas: p = !1,
                                maskAllInputs: f = !1,
                                maskAttributeFn: m,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOM: v = !1,
                                dataURLOptions: S,
                                preserveWhiteSpace: _,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: E,
                                onStylesheetLoad: k,
                                stylesheetLoadTimeout: M,
                                keepIframeSrcFn: I = () => !1
                            } = t || {};
                            return eM(e, {
                                doc: e,
                                mirror: r,
                                blockClass: n,
                                blockSelector: i,
                                unblockSelector: s,
                                maskAllText: o,
                                maskTextClass: a,
                                unmaskTextClass: l,
                                maskTextSelector: c,
                                unmaskTextSelector: u,
                                skipChild: !1,
                                inlineStylesheet: d,
                                maskInputOptions: !0 === f ? {
                                    color: !0,
                                    date: !0,
                                    "datetime-local": !0,
                                    email: !0,
                                    month: !0,
                                    number: !0,
                                    range: !0,
                                    search: !0,
                                    tel: !0,
                                    text: !0,
                                    time: !0,
                                    url: !0,
                                    week: !0,
                                    textarea: !0,
                                    select: !0
                                } : !1 === f ? {} : f,
                                maskAttributeFn: m,
                                maskTextFn: y,
                                maskInputFn: g,
                                slimDOMOptions: !0 === v || "all" === v ? {
                                    script: !0,
                                    comment: !0,
                                    headFavicon: !0,
                                    headWhitespace: !0,
                                    headMetaDescKeywords: "all" === v,
                                    headMetaSocial: !0,
                                    headMetaRobots: !0,
                                    headMetaHttpEquiv: !0,
                                    headMetaAuthorship: !0,
                                    headMetaVerification: !0
                                } : !1 === v ? {} : v,
                                dataURLOptions: S,
                                inlineImages: h,
                                recordCanvas: p,
                                preserveWhiteSpace: _,
                                onSerialize: w,
                                onIframeLoad: b,
                                iframeLoadTimeout: E,
                                onStylesheetLoad: k,
                                stylesheetLoadTimeout: M,
                                keepIframeSrcFn: I,
                                newlyAddedElement: !1
                            })
                        }(document, {
                            mirror: tv,
                            blockClass: l,
                            blockSelector: c,
                            unblockSelector: u,
                            maskAllText: f,
                            maskTextClass: m,
                            unmaskTextClass: y,
                            maskTextSelector: g,
                            unmaskTextSelector: v,
                            inlineStylesheet: S,
                            maskAllInputs: V,
                            maskAttributeFn: E,
                            maskInputFn: k,
                            maskTextFn: M,
                            slimDOM: J,
                            dataURLOptions: x,
                            recordCanvas: D,
                            inlineImages: B,
                            onSerialize: e => {
                                eW(e, tv) && et.addIframe(e), ez(e, tv) && ee.trackLinkElement(e), ej(e) && ei.addShadowRoot(e.shadowRoot, document)
                            },
                            onIframeLoad: (e, t) => {
                                et.attachIframe(e, t), e.contentWindow && en.addWindow(e.contentWindow), ei.observeAttachShadow(e)
                            },
                            onStylesheetLoad: (e, t) => {
                                ee.attachLinkElement(e, t)
                            },
                            keepIframeSrcFn: U
                        });
                        if (!t) return console.warn("Failed to snapshot the document");
                        o({
                            type: eG.FullSnapshot,
                            data: {
                                node: t,
                                initialOffset: eO(window)
                            }
                        }), e4.forEach(e => e.unlock()), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ee.adoptStyleSheets(document.adoptedStyleSheets, tv.getId(document))
                    };
                a = es;
                try {
                    let e = [],
                        t = e => e8(to)({
                            onMutation: j,
                            mutationCb: X,
                            mousemoveCb: (e, t) => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: t,
                                    positions: e
                                }
                            }),
                            mouseInteractionCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.MouseInteraction,
                                    ...e
                                }
                            }),
                            scrollCb: Q,
                            viewportResizeCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.ViewportResize,
                                    ...e
                                }
                            }),
                            inputCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.Input,
                                    ...e
                                }
                            }),
                            mediaInteractionCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.MediaInteraction,
                                    ...e
                                }
                            }),
                            styleSheetRuleCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.StyleSheetRule,
                                    ...e
                                }
                            }),
                            styleDeclarationCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.StyleDeclaration,
                                    ...e
                                }
                            }),
                            canvasMutationCb: Z,
                            fontCb: e => o({
                                type: eG.IncrementalSnapshot,
                                data: {
                                    source: eY.Font,
                                    ...e
                                }
                            }),
                            selectionCb: e => {
                                o({
                                    type: eG.IncrementalSnapshot,
                                    data: {
                                        source: eY.Selection,
                                        ...e
                                    }
                                })
                            },
                            customElementCb: e => {
                                o({
                                    type: eG.IncrementalSnapshot,
                                    data: {
                                        source: eY.CustomElement,
                                        ...e
                                    }
                                })
                            },
                            blockClass: l,
                            ignoreClass: d,
                            ignoreSelector: p,
                            maskAllText: f,
                            maskTextClass: m,
                            unmaskTextClass: y,
                            maskTextSelector: g,
                            unmaskTextSelector: v,
                            maskInputOptions: V,
                            inlineStylesheet: S,
                            sampling: R,
                            recordDOM: A,
                            recordCanvas: D,
                            inlineImages: B,
                            userTriggeredOnInput: L,
                            collectFonts: P,
                            doc: e,
                            maskAttributeFn: E,
                            maskInputFn: k,
                            maskTextFn: M,
                            keepIframeSrcFn: U,
                            blockSelector: c,
                            unblockSelector: u,
                            slimDOMOptions: J,
                            dataURLOptions: x,
                            mirror: tv,
                            iframeManager: et,
                            stylesheetManager: ee,
                            shadowDomManager: ei,
                            processedNodeManager: er,
                            canvasManager: en,
                            ignoreCSSAttributes: W,
                            plugins: (0, h.x)([F, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                                observer: e.observer,
                                options: e.options,
                                callback: t => o({
                                    type: eG.Plugin,
                                    data: {
                                        plugin: e.name,
                                        payload: t
                                    }
                                })
                            }))]) || []
                        }, {});
                    et.addLoadListener(r => {
                        try {
                            e.push(t(r.contentDocument))
                        } catch (e) {
                            console.warn(e)
                        }
                    });
                    let r = () => {
                        es(), e.push(t(document))
                    };
                    return "interactive" === document.readyState || "complete" === document.readyState ? r() : (e.push(eC("DOMContentLoaded", () => {
                        o({
                            type: eG.DomContentLoaded,
                            data: {}
                        }), "DOMContentLoaded" === N && r()
                    })), e.push(eC("load", () => {
                        o({
                            type: eG.Load,
                            data: {}
                        }), "load" === N && r()
                    }, window))), () => {
                        e.forEach(e => e()), er.destroy(), a = void 0, s = void 0
                    }
                } catch (e) {
                    console.warn(e)
                }
            }
            tS.mirror = tv, tS.takeFullSnapshot = function(e) {
                if (!a) throw Error("please take full snapshot after start recording");
                a(e)
            };
            let t_ = ["info", "warn", "error", "log"];

            function tw(e) {
                return e > 0x2540be3ff ? e : 1e3 * e
            }

            function tb(e) {
                return e > 0x2540be3ff ? e / 1e3 : e
            }

            function tE(e, t) {
                "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(), e.addUpdate(() => (e.throttledAddEvent({
                    type: eG.Custom,
                    timestamp: 1e3 * (t.timestamp || 0),
                    data: {
                        tag: "breadcrumb",
                        payload: (0, E.Fv)(t, 10, 1e3)
                    }
                }), "console" === t.category)))
            }

            function tk(e) {
                return e.closest("button,a") || e
            }

            function tM(e) {
                let t = tI(e);
                return t && t instanceof Element ? tk(t) : t
            }

            function tI(e) {
                return "object" == typeof e && e && "target" in e ? e.target : e
            }! function() {
                let e = {
                    exception: () => void 0,
                    infoTick: () => void 0,
                    setConfig: e => {
                        e.captureExceptions, e.traceInternals
                    }
                };
                t_.forEach(t => {
                    e[t] = () => void 0
                })
            }();
            let tC = new Set([eY.Mutation, eY.StyleSheetRule, eY.StyleDeclaration, eY.AdoptedStyleSheet, eY.CanvasMutation, eY.Selection, eY.MediaInteraction]);
            class tR {
                constructor(e, t, r = tE) {
                    this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = t.timeout / 1e3, this._threshold = t.threshold / 1e3, this._scollTimeout = t.scrollTimeout / 1e3, this._replay = e, this._ignoreSelector = t.ignoreSelector, this._addBreadcrumbEvent = r
                }
                addListeners() {
                    var e;
                    let t = (e = () => {
                        this._lastMutation = tT()
                    }, l || (l = [], (0, k.hl)(F, "open", function(e) {
                        return function(...t) {
                            if (l) try {
                                l.forEach(e => e())
                            } catch (e) {}
                            return e.apply(F, t)
                        }
                    })), l.push(e), () => {
                        let t = l ? l.indexOf(e) : -1;
                        t > -1 && l.splice(t, 1)
                    });
                    this._teardown = () => {
                        t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                    }
                }
                removeListeners() {
                    this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
                }
                handleClick(e, t) {
                    var r;
                    if (r = this._ignoreSelector, !tx.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || r && t.matches(r) || !(e.data && "number" == typeof e.data.nodeId && e.timestamp)) return;
                    let n = {
                        timestamp: tb(e.timestamp),
                        clickBreadcrumb: e,
                        clickCount: 0,
                        node: t
                    };
                    this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
                }
                registerMutation(e = Date.now()) {
                    this._lastMutation = tb(e)
                }
                registerScroll(e = Date.now()) {
                    this._lastScroll = tb(e)
                }
                registerClick(e) {
                    let t = tk(e);
                    this._handleMultiClick(t)
                }
                _handleMultiClick(e) {
                    this._getClicks(e).forEach(e => {
                        e.clickCount++
                    })
                }
                _getClicks(e) {
                    return this._clicks.filter(t => t.node === e)
                }
                _checkClicks() {
                    let e = [],
                        t = tT();
                    for (let r of (this._clicks.forEach(r => {
                            !r.mutationAfter && this._lastMutation && (r.mutationAfter = r.timestamp <= this._lastMutation ? this._lastMutation - r.timestamp : void 0), !r.scrollAfter && this._lastScroll && (r.scrollAfter = r.timestamp <= this._lastScroll ? this._lastScroll - r.timestamp : void 0), r.timestamp + this._timeout <= t && e.push(r)
                        }), e)) {
                        let e = this._clicks.indexOf(r);
                        e > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(e, 1))
                    }
                    this._clicks.length && this._scheduleCheckClicks()
                }
                _generateBreadcrumbs(e) {
                    let t = this._replay,
                        r = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
                        n = e.mutationAfter && e.mutationAfter <= this._threshold,
                        {
                            clickCount: i,
                            clickBreadcrumb: s
                        } = e;
                    if (!r && !n) {
                        let r = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout),
                            n = r < 1e3 * this._timeout ? "mutation" : "timeout",
                            o = {
                                type: "default",
                                message: s.message,
                                timestamp: s.timestamp,
                                category: "ui.slowClickDetected",
                                data: { ...s.data,
                                    url: F.location.href,
                                    route: t.getCurrentRoute(),
                                    timeAfterClickMs: r,
                                    endReason: n,
                                    clickCount: i || 1
                                }
                            };
                        this._addBreadcrumbEvent(t, o);
                        return
                    }
                    if (i > 1) {
                        let e = {
                            type: "default",
                            message: s.message,
                            timestamp: s.timestamp,
                            category: "ui.multiClick",
                            data: { ...s.data,
                                url: F.location.href,
                                route: t.getCurrentRoute(),
                                clickCount: i,
                                metric: !0
                            }
                        };
                        this._addBreadcrumbEvent(t, e)
                    }
                }
                _scheduleCheckClicks() {
                    this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = (0, O.iK)(() => this._checkClicks(), 1e3)
                }
            }
            let tx = ["A", "BUTTON", "INPUT"];

            function tT() {
                return Date.now() / 1e3
            }

            function tA(e) {
                return {
                    timestamp: Date.now() / 1e3,
                    type: "default",
                    ...e
                }
            }! function(e) {
                e[e.Document = 0] = "Document", e[e.DocumentType = 1] = "DocumentType", e[e.Element = 2] = "Element", e[e.Text = 3] = "Text", e[e.CDATA = 4] = "CDATA", e[e.Comment = 5] = "Comment"
            }(u || (u = {}));
            let tD = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]),
                tO = e => t => {
                    if (!e.isEnabled()) return;
                    let r = function(e) {
                        let {
                            target: t,
                            message: r
                        } = function(e) {
                            let t;
                            let r = "click" === e.name,
                                n = null;
                            try {
                                n = r ? tM(e.event) : tI(e.event), t = (0, M.Rt)(n, {
                                    maxStringLength: 200
                                }) || "<unknown>"
                            } catch (e) {
                                t = "<unknown>"
                            }
                            return {
                                target: n,
                                message: t
                            }
                        }(e);
                        return tA({
                            category: `ui.${e.name}`,
                            ...tN(t, r)
                        })
                    }(t);
                    if (!r) return;
                    let n = "click" === t.name,
                        i = n ? t.event : void 0;
                    n && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && function(e, t, r) {
                        e.handleClick(t, r)
                    }(e.clickDetector, r, tM(t.event)), tE(e, r)
                };

            function tN(e, t) {
                let r = tS.mirror.getId(e),
                    n = r && tS.mirror.getNode(r),
                    i = n && tS.mirror.getMeta(n),
                    s = i && i.type === u.Element ? i : null;
                return {
                    message: t,
                    data: s ? {
                        nodeId: r,
                        node: {
                            id: r,
                            tagName: s.tagName,
                            textContent: Array.from(s.childNodes).map(e => e.type === u.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                            attributes: function(e) {
                                let t = {};
                                for (let r in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]), e)
                                    if (tD.has(r)) {
                                        let n = r;
                                        ("data-testid" === r || "data-test-id" === r) && (n = "testId"), t[n] = e[r]
                                    }
                                return t
                            }(s.attributes)
                        }
                    } : {}
                }
            }
            let tL = {
                resource: function(e) {
                    let {
                        entryType: t,
                        initiatorType: r,
                        name: n,
                        responseEnd: i,
                        startTime: s,
                        decodedBodySize: o,
                        encodedBodySize: a,
                        responseStatus: l,
                        transferSize: c
                    } = e;
                    return ["fetch", "xmlhttprequest"].includes(r) ? null : {
                        type: `${t}.${r}`,
                        start: tF(s),
                        end: tF(i),
                        name: n,
                        data: {
                            size: c,
                            statusCode: l,
                            decodedBodySize: o,
                            encodedBodySize: a
                        }
                    }
                },
                paint: function(e) {
                    let {
                        duration: t,
                        entryType: r,
                        name: n,
                        startTime: i
                    } = e, s = tF(i);
                    return {
                        type: r,
                        name: n,
                        start: s,
                        end: s + t,
                        data: void 0
                    }
                },
                navigation: function(e) {
                    let {
                        entryType: t,
                        name: r,
                        decodedBodySize: n,
                        duration: i,
                        domComplete: s,
                        encodedBodySize: o,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: l,
                        domInteractive: c,
                        loadEventStart: u,
                        loadEventEnd: d,
                        redirectCount: h,
                        startTime: p,
                        transferSize: f,
                        type: m
                    } = e;
                    return 0 === i ? null : {
                        type: `${t}.${m}`,
                        start: tF(p),
                        end: tF(s),
                        name: r,
                        data: {
                            size: f,
                            decodedBodySize: n,
                            encodedBodySize: o,
                            duration: i,
                            domInteractive: c,
                            domContentLoadedEventStart: a,
                            domContentLoadedEventEnd: l,
                            loadEventStart: u,
                            loadEventEnd: d,
                            domComplete: s,
                            redirectCount: h
                        }
                    }
                }
            };

            function tP(e, t) {
                return ({
                    metric: r
                }) => void t.replayPerformanceEntries.push(e(r))
            }

            function tB(e) {
                let t = tL[e.entryType];
                return t ? t(e) : null
            }

            function tF(e) {
                return ((I.Z1 || F.performance.timeOrigin) + e) / 1e3
            }

            function tU(e) {
                let t = e.entries[e.entries.length - 1];
                return tH(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0)
            }

            function tW(e) {
                let t = [],
                    r = [];
                for (let n of e.entries)
                    if (void 0 !== n.sources) {
                        let e = [];
                        for (let t of n.sources)
                            if (t.node) {
                                r.push(t.node);
                                let n = tS.mirror.getId(t.node);
                                n && e.push(n)
                            }
                        t.push({
                            value: n.value,
                            nodeIds: e.length ? e : void 0
                        })
                    }
                return tH(e, "cumulative-layout-shift", r, t)
            }

            function tz(e) {
                let t = e.entries[e.entries.length - 1];
                return tH(e, "first-input-delay", t && t.target ? [t.target] : void 0)
            }

            function tj(e) {
                let t = e.entries[e.entries.length - 1];
                return tH(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0)
            }

            function tH(e, t, r, n) {
                let i = e.value,
                    s = e.rating,
                    o = tF(i);
                return {
                    type: "web-vital",
                    name: t,
                    start: o,
                    end: o,
                    data: {
                        value: i,
                        size: i,
                        rating: s,
                        nodeIds: r ? r.map(e => tS.mirror.getId(e)) : void 0,
                        attributions: n
                    }
                }
            }
            class t$ extends Error {
                constructor() {
                    super("Event buffer exceeded maximum size of 20000000.")
                }
            }
            class tq {
                constructor() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return this.events.length > 0
                }
                get type() {
                    return "sync"
                }
                destroy() {
                    this.events = []
                }
                async addEvent(e) {
                    let t = JSON.stringify(e).length;
                    if (this._totalSize += t, this._totalSize > 2e7) throw new t$;
                    this.events.push(e)
                }
                finish() {
                    return new Promise(e => {
                        let t = this.events;
                        this.clear(), e(JSON.stringify(t))
                    })
                }
                clear() {
                    this.events = [], this._totalSize = 0, this.hasCheckout = !1
                }
                getEarliestTimestamp() {
                    let e = this.events.map(e => e.timestamp).sort()[0];
                    return e ? tw(e) : null
                }
            }
            class tV {
                constructor(e) {
                    this._worker = e, this._id = 0
                }
                ensureReady() {
                    return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise((e, t) => {
                        this._worker.addEventListener("message", ({
                            data: r
                        }) => {
                            r.success ? e() : t()
                        }, {
                            once: !0
                        }), this._worker.addEventListener("error", e => {
                            t(e)
                        }, {
                            once: !0
                        })
                    })), this._ensureReadyPromise
                }
                destroy() {
                    this._worker.terminate()
                }
                postMessage(e, t) {
                    let r = this._getAndIncrementId();
                    return new Promise((n, i) => {
                        let s = ({
                            data: t
                        }) => {
                            if (t.method === e && t.id === r) {
                                if (this._worker.removeEventListener("message", s), !t.success) {
                                    i(Error("Error in compression worker"));
                                    return
                                }
                                n(t.response)
                            }
                        };
                        this._worker.addEventListener("message", s), this._worker.postMessage({
                            id: r,
                            method: e,
                            arg: t
                        })
                    })
                }
                _getAndIncrementId() {
                    return this._id++
                }
            }
            class tK {
                constructor(e) {
                    this._worker = new tV(e), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
                }
                get hasEvents() {
                    return !!this._earliestTimestamp
                }
                get type() {
                    return "worker"
                }
                ensureReady() {
                    return this._worker.ensureReady()
                }
                destroy() {
                    this._worker.destroy()
                }
                addEvent(e) {
                    let t = tw(e.timestamp);
                    (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                    let r = JSON.stringify(e);
                    return (this._totalSize += r.length, this._totalSize > 2e7) ? Promise.reject(new t$) : this._sendEventToWorker(r)
                }
                finish() {
                    return this._finishRequest()
                }
                clear() {
                    this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, e => {})
                }
                getEarliestTimestamp() {
                    return this._earliestTimestamp
                }
                _sendEventToWorker(e) {
                    return this._worker.postMessage("addEvent", e)
                }
                async _finishRequest() {
                    let e = await this._worker.postMessage("finish");
                    return this._earliestTimestamp = null, this._totalSize = 0, e
                }
            }
            class tJ {
                constructor(e) {
                    this._fallback = new tq, this._compression = new tK(e), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
                }
                get type() {
                    return this._used.type
                }
                get hasEvents() {
                    return this._used.hasEvents
                }
                get hasCheckout() {
                    return this._used.hasCheckout
                }
                set hasCheckout(e) {
                    this._used.hasCheckout = e
                }
                destroy() {
                    this._fallback.destroy(), this._compression.destroy()
                }
                clear() {
                    return this._used.clear()
                }
                getEarliestTimestamp() {
                    return this._used.getEarliestTimestamp()
                }
                addEvent(e) {
                    return this._used.addEvent(e)
                }
                async finish() {
                    return await this.ensureWorkerIsLoaded(), this._used.finish()
                }
                ensureWorkerIsLoaded() {
                    return this._ensureWorkerIsLoadedPromise
                }
                async _ensureWorkerIsLoaded() {
                    try {
                        await this._compression.ensureReady()
                    } catch (e) {
                        return
                    }
                    await this._switchToCompressionWorker()
                }
                async _switchToCompressionWorker() {
                    let {
                        events: e,
                        hasCheckout: t
                    } = this._fallback, r = [];
                    for (let t of e) r.push(this._compression.addEvent(t));
                    this._compression.hasCheckout = t, this._used = this._compression;
                    try {
                        await Promise.all(r), this._fallback.clear()
                    } catch (e) {}
                }
            }

            function tG() {
                try {
                    return "sessionStorage" in F && !!F.sessionStorage
                } catch (e) {
                    return !1
                }
            }

            function tY(e) {
                return void 0 !== e && Math.random() < e
            }

            function tX(e) {
                let t = Date.now(),
                    r = e.id || (0, C.DM)(),
                    n = e.started || t,
                    i = e.lastActivity || t;
                return {
                    id: r,
                    started: n,
                    lastActivity: i,
                    segmentId: e.segmentId || 0,
                    sampled: e.sampled,
                    previousSessionId: e.previousSessionId
                }
            }

            function tQ(e) {
                if (tG()) try {
                    F.sessionStorage.setItem(U, JSON.stringify(e))
                } catch (e) {}
            }

            function tZ({
                sessionSampleRate: e,
                allowBuffering: t,
                stickySession: r = !1
            }, {
                previousSessionId: n
            } = {}) {
                let i = tX({
                    sampled: tY(e) ? "session" : !!t && "buffer",
                    previousSessionId: n
                });
                return r && tQ(i), i
            }

            function t0(e, t, r = +new Date) {
                return null === e || void 0 === t || t < 0 || 0 !== t && e + t <= r
            }

            function t1(e, {
                maxReplayDuration: t,
                sessionIdleExpire: r,
                targetTime: n = Date.now()
            }) {
                return t0(e.started, t, n) || t0(e.lastActivity, r, n)
            }

            function t2(e, {
                sessionIdleExpire: t,
                maxReplayDuration: r
            }) {
                return !!t1(e, {
                    sessionIdleExpire: t,
                    maxReplayDuration: r
                }) && ("buffer" !== e.sampled || 0 !== e.segmentId)
            }

            function t3({
                sessionIdleExpire: e,
                maxReplayDuration: t,
                previousSessionId: r
            }, n) {
                let i = n.stickySession && function() {
                    if (!tG()) return null;
                    try {
                        let e = F.sessionStorage.getItem(U);
                        if (!e) return null;
                        let t = JSON.parse(e);
                        return tX(t)
                    } catch (e) {
                        return null
                    }
                }();
                return i ? t2(i, {
                    sessionIdleExpire: e,
                    maxReplayDuration: t
                }) ? tZ(n, {
                    previousSessionId: i.id
                }) : i : tZ(n, {
                    previousSessionId: r
                })
            }

            function t5(e, t, r) {
                return !!t6(e, t) && (t8(e, t, r), !0)
            }
            async function t8(e, t, r) {
                if (!e.eventBuffer) return null;
                try {
                    r && "buffer" === e.recordingMode && e.eventBuffer.clear(), r && (e.eventBuffer.hasCheckout = !0);
                    let n = e.getOptions(),
                        i = function(e, t) {
                            try {
                                if ("function" == typeof t && e.type === eG.Custom) return t(e)
                            } catch (e) {
                                return null
                            }
                            return e
                        }(t, n.beforeAddRecordingEvent);
                    if (!i) return;
                    return await e.eventBuffer.addEvent(i)
                } catch (n) {
                    let t = n && n instanceof t$ ? "addEventSizeExceeded" : "addEvent";
                    e.handleException(n), await e.stop({
                        reason: t
                    });
                    let r = (0, f.s3)();
                    r && r.recordDroppedEvent("internal_sdk_error", "replay")
                }
            }

            function t6(e, t) {
                if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
                let r = tw(t.timestamp);
                return !(r + e.timeouts.sessionIdlePause < Date.now()) && !(r > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration)
            }

            function t4(e) {
                return "transaction" === e.type
            }

            function t7(e) {
                return "feedback" === e.type
            }

            function t9(e) {
                return !!e.category
            }

            function re(e, t) {
                return t.map(({
                    type: t,
                    start: r,
                    end: n,
                    name: i,
                    data: s
                }) => {
                    let o = e.throttledAddEvent({
                        type: eG.Custom,
                        timestamp: r,
                        data: {
                            tag: "performanceSpan",
                            payload: {
                                op: t,
                                description: i,
                                startTimestamp: r,
                                endTimestamp: n,
                                data: s
                            }
                        }
                    });
                    return "string" == typeof o ? Promise.resolve(null) : o
                })
            }

            function rt(e, t) {
                var r;
                e.isEnabled() && null !== t && (r = t.name, (0, m.W)(r, (0, f.s3)()) || e.addUpdate(() => (re(e, [t]), !0)))
            }

            function rr(e) {
                if (!e) return;
                let t = new TextEncoder;
                try {
                    if ("string" == typeof e) return t.encode(e).length;
                    if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
                    if (e instanceof FormData) {
                        let r = ru(e);
                        return t.encode(r).length
                    }
                    if (e instanceof Blob) return e.size;
                    if (e instanceof ArrayBuffer) return e.byteLength
                } catch (e) {}
            }

            function rn(e) {
                if (!e) return;
                let t = parseInt(e, 10);
                return isNaN(t) ? void 0 : t
            }

            function ri(e) {
                try {
                    if ("string" == typeof e) return [e];
                    if (e instanceof URLSearchParams) return [e.toString()];
                    if (e instanceof FormData) return [ru(e)];
                    if (!e) return [void 0]
                } catch (e) {
                    return [void 0, "BODY_PARSE_ERROR"]
                }
                return [void 0, "UNPARSEABLE_BODY_TYPE"]
            }

            function rs(e, t) {
                if (!e) return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
                let r = { ...e._meta
                    },
                    n = r.warnings || [];
                return r.warnings = [...n, t], e._meta = r, e
            }

            function ro(e, t) {
                if (!t) return null;
                let {
                    startTimestamp: r,
                    endTimestamp: n,
                    url: i,
                    method: s,
                    statusCode: o,
                    request: a,
                    response: l
                } = t;
                return {
                    type: e,
                    start: r / 1e3,
                    end: n / 1e3,
                    name: i,
                    data: (0, k.Jr)({
                        method: s,
                        statusCode: o,
                        request: a,
                        response: l
                    })
                }
            }

            function ra(e) {
                return {
                    headers: {},
                    size: e,
                    _meta: {
                        warnings: ["URL_SKIPPED"]
                    }
                }
            }

            function rl(e, t, r) {
                if (!t && 0 === Object.keys(e).length) return;
                if (!t) return {
                    headers: e
                };
                if (!r) return {
                    headers: e,
                    size: t
                };
                let n = {
                        headers: e,
                        size: t
                    },
                    {
                        body: i,
                        warnings: s
                    } = function(e) {
                        if (!e || "string" != typeof e) return {
                            body: e
                        };
                        let t = e.length > 15e4,
                            r = function(e) {
                                let t = e[0],
                                    r = e[e.length - 1];
                                return "[" === t && "]" === r || "{" === t && "}" === r
                            }(e);
                        if (t) {
                            let t = e.slice(0, 15e4);
                            return r ? {
                                body: t,
                                warnings: ["MAYBE_JSON_TRUNCATED"]
                            } : {
                                body: `${t}…`,
                                warnings: ["TEXT_TRUNCATED"]
                            }
                        }
                        if (r) try {
                            return {
                                body: JSON.parse(e)
                            }
                        } catch (e) {}
                        return {
                            body: e
                        }
                    }(r);
                return n.body = i, s && s.length > 0 && (n._meta = {
                    warnings: s
                }), n
            }

            function rc(e, t) {
                return Object.entries(e).reduce((r, [n, i]) => {
                    let s = n.toLowerCase();
                    return t.includes(s) && e[n] && (r[s] = i), r
                }, {})
            }

            function ru(e) {
                return new URLSearchParams(e).toString()
            }

            function rd(e, t) {
                let r = function(e, t = F.document.baseURI) {
                    if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(F.location.origin)) return e;
                    let r = new URL(e, t);
                    if (r.origin !== new URL(t).origin) return e;
                    let n = r.href;
                    return !e.endsWith("/") && n.endsWith("/") ? n.slice(0, -1) : n
                }(e);
                return (0, R.U0)(r, t)
            }
            async function rh(e, t, r) {
                try {
                    let n = await rp(e, t, r),
                        i = ro("resource.fetch", n);
                    rt(r.replay, i)
                } catch (e) {}
            }
            async function rp(e, t, r) {
                let n = Date.now(),
                    {
                        startTimestamp: i = n,
                        endTimestamp: s = n
                    } = t,
                    {
                        url: o,
                        method: a,
                        status_code: l = 0,
                        request_body_size: c,
                        response_body_size: u
                    } = e.data,
                    d = rd(o, r.networkDetailAllowUrls) && !rd(o, r.networkDetailDenyUrls);
                return {
                    startTimestamp: i,
                    endTimestamp: s,
                    url: o,
                    method: a,
                    statusCode: l,
                    request: d ? function({
                        networkCaptureBodies: e,
                        networkRequestHeaders: t
                    }, r, n) {
                        let i = r ? 1 === r.length && "string" != typeof r[0] ? rv(r[0], t) : 2 === r.length ? rv(r[1], t) : {} : {};
                        if (!e) return rl(i, n, void 0);
                        let [s, o] = ri(ry(r)), a = rl(i, n, s);
                        return o ? rs(a, o) : a
                    }(r, t.input, c) : ra(c),
                    response: await rf(d, r, t.response, u)
                }
            }
            async function rf(e, {
                networkCaptureBodies: t,
                networkResponseHeaders: r
            }, n, i) {
                if (!e && void 0 !== i) return ra(i);
                let s = n ? rg(n.headers, r) : {};
                if (!n || !t && void 0 !== i) return rl(s, i, void 0);
                let [o, a] = await rm(n), l = function(e, {
                    networkCaptureBodies: t,
                    responseBodySize: r,
                    captureDetails: n,
                    headers: i
                }) {
                    try {
                        let s = e && e.length && void 0 === r ? rr(e) : r;
                        if (!n) return ra(s);
                        if (t) return rl(i, s, e);
                        return rl(i, s, void 0)
                    } catch (e) {
                        return rl(i, r, void 0)
                    }
                }(o, {
                    networkCaptureBodies: t,
                    responseBodySize: i,
                    captureDetails: e,
                    headers: s
                });
                return a ? rs(l, a) : l
            }
            async function rm(e) {
                let t = function(e) {
                    try {
                        return e.clone()
                    } catch (e) {}
                }(e);
                if (!t) return [void 0, "BODY_PARSE_ERROR"];
                try {
                    return [await new Promise((e, r) => {
                        let n = (0, O.iK)(() => r(Error("Timeout while trying to read response body")), 500);
                        rS(t).then(t => e(t), e => r(e)).finally(() => clearTimeout(n))
                    })]
                } catch (e) {
                    if (e instanceof Error && e.message.indexOf("Timeout") > -1) return [void 0, "BODY_PARSE_TIMEOUT"];
                    return [void 0, "BODY_PARSE_ERROR"]
                }
            }

            function ry(e = []) {
                if (2 === e.length && "object" == typeof e[1]) return e[1].body
            }

            function rg(e, t) {
                let r = {};
                return t.forEach(t => {
                    e.get(t) && (r[t] = e.get(t))
                }), r
            }

            function rv(e, t) {
                if (!e) return {};
                let r = e.headers;
                return r ? r instanceof Headers ? rg(r, t) : Array.isArray(r) ? {} : rc(r, t) : {}
            }
            async function rS(e) {
                return await e.text()
            }
            async function r_(e, t, r) {
                try {
                    let n = function(e, t, r) {
                            let n = Date.now(),
                                {
                                    startTimestamp: i = n,
                                    endTimestamp: s = n,
                                    input: o,
                                    xhr: a
                                } = t,
                                {
                                    url: l,
                                    method: c,
                                    status_code: u = 0,
                                    request_body_size: d,
                                    response_body_size: h
                                } = e.data;
                            if (!l) return null;
                            if (!a || !rd(l, r.networkDetailAllowUrls) || rd(l, r.networkDetailDenyUrls)) {
                                let e = ra(d);
                                return {
                                    startTimestamp: i,
                                    endTimestamp: s,
                                    url: l,
                                    method: c,
                                    statusCode: u,
                                    request: e,
                                    response: ra(h)
                                }
                            }
                            let p = a[L.xU],
                                f = p ? rc(p.request_headers, r.networkRequestHeaders) : {},
                                m = rc(function(e) {
                                    let t = e.getAllResponseHeaders();
                                    return t ? t.split("\r\n").reduce((e, t) => {
                                        let [r, n] = t.split(": ");
                                        return n && (e[r.toLowerCase()] = n), e
                                    }, {}) : {}
                                }(a), r.networkResponseHeaders),
                                [y, g] = r.networkCaptureBodies ? ri(o) : [void 0],
                                [v, S] = r.networkCaptureBodies ? function(e) {
                                    let t = [];
                                    try {
                                        return [e.responseText]
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    try {
                                        return function(e, t) {
                                            try {
                                                if ("string" == typeof e) return [e];
                                                if (e instanceof Document) return [e.body.outerHTML];
                                                if ("json" === t && e && "object" == typeof e) return [JSON.stringify(e)];
                                                if (!e) return [void 0]
                                            } catch (e) {
                                                return [void 0, "BODY_PARSE_ERROR"]
                                            }
                                            return [void 0, "UNPARSEABLE_BODY_TYPE"]
                                        }(e.response, e.responseType)
                                    } catch (e) {
                                        t.push(e)
                                    }
                                    return [void 0]
                                }(a) : [void 0],
                                _ = rl(f, d, y),
                                w = rl(m, h, v);
                            return {
                                startTimestamp: i,
                                endTimestamp: s,
                                url: l,
                                method: c,
                                statusCode: u,
                                request: g ? rs(_, g) : _,
                                response: S ? rs(w, S) : w
                            }
                        }(e, t, r),
                        i = ro("resource.xhr", n);
                    rt(r.replay, i)
                } catch (e) {}
            }
            async function rw(e) {
                try {
                    return Promise.all(re(e, [function(e) {
                        let {
                            jsHeapSizeLimit: t,
                            totalJSHeapSize: r,
                            usedJSHeapSize: n
                        } = e, i = Date.now() / 1e3;
                        return {
                            type: "memory",
                            name: "memory",
                            start: i,
                            end: i,
                            data: {
                                memory: {
                                    jsHeapSizeLimit: t,
                                    totalJSHeapSize: r,
                                    usedJSHeapSize: n
                                }
                            }
                        }
                    }(F.performance.memory)]))
                } catch (e) {
                    return []
                }
            }
            async function rb({
                client: e,
                scope: t,
                replayId: r,
                event: n
            }) {
                let i = {
                    event_id: r,
                    integrations: "object" != typeof e._integrations || null === e._integrations || Array.isArray(e._integrations) ? void 0 : Object.keys(e._integrations)
                };
                e.emit("preprocessEvent", n, i);
                let s = await (0, v.R)(e.getOptions(), n, i, t, e, (0, f.aF)());
                if (!s) return null;
                s.platform = s.platform || "javascript";
                let o = e.getSdkMetadata(),
                    {
                        name: a,
                        version: l
                    } = o && o.sdk || {};
                return s.sdk = { ...s.sdk,
                    name: a || "sentry.javascript.unknown",
                    version: l || "0.0.0"
                }, s
            }
            async function rE({
                recordingData: e,
                replayId: t,
                segmentId: r,
                eventContext: n,
                timestamp: i,
                session: s
            }) {
                var o;
                let a;
                let l = function({
                        recordingData: e,
                        headers: t
                    }) {
                        let r;
                        let n = `${JSON.stringify(t)}
`;
                        if ("string" == typeof e) r = `${n}${e}`;
                        else {
                            let t = new TextEncoder().encode(n);
                            (r = new Uint8Array(t.length + e.length)).set(t), r.set(e, t.length)
                        }
                        return r
                    }({
                        recordingData: e,
                        headers: {
                            segment_id: r
                        }
                    }),
                    {
                        urls: c,
                        errorIds: u,
                        traceIds: d,
                        initialTimestamp: h
                    } = n,
                    p = (0, f.s3)(),
                    m = (0, f.nZ)(),
                    y = p && p.getTransport(),
                    g = p && p.getDsn();
                if (!p || !y || !g || !s.sampled) return (0, T.WD)({});
                let v = {
                        type: "replay_event",
                        replay_start_timestamp: h / 1e3,
                        timestamp: i / 1e3,
                        error_ids: u,
                        trace_ids: d,
                        urls: c,
                        replay_id: t,
                        segment_id: r,
                        replay_type: s.sampled
                    },
                    S = await rb({
                        scope: m,
                        client: p,
                        replayId: t,
                        event: v
                    });
                if (!S) return p.recordDroppedEvent("event_processor", "replay", v), (0, T.WD)({});
                delete S.sdkProcessingMetadata;
                let _ = (o = p.getOptions().tunnel, (0, x.Jd)((0, x.Cd)(S, (0, x.HY)(S), o, g), [
                    [{
                        type: "replay_event"
                    }, S],
                    [{
                        type: "replay_recording",
                        length: "string" == typeof l ? new TextEncoder().encode(l).length : l.length
                    }, l]
                ]));
                try {
                    a = await y.send(_)
                } catch (t) {
                    let e = Error(W);
                    try {
                        e.cause = t
                    } catch (e) {}
                    throw e
                }
                if ("number" == typeof a.statusCode && (a.statusCode < 200 || a.statusCode >= 300)) throw new rk(a.statusCode);
                let w = (0, A.WG)({}, a);
                if ((0, A.Q)(w, "replay")) throw new rM(w);
                return a
            }
            class rk extends Error {
                constructor(e) {
                    super(`Transport returned status code ${e}`)
                }
            }
            class rM extends Error {
                constructor(e) {
                    super("Rate limit hit"), this.rateLimits = e
                }
            }
            async function rI(e, t = {
                count: 0,
                interval: 5e3
            }) {
                let {
                    recordingData: r,
                    onError: n
                } = e;
                if (r.length) try {
                    return await rE(e), !0
                } catch (r) {
                    if (r instanceof rk || r instanceof rM) throw r;
                    if ((0, p.v)("Replays", {
                            _retryCount: t.count
                        }), n && n(r), t.count >= 3) {
                        let e = Error(`${W} - max retries exceeded`);
                        try {
                            e.cause = r
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count, new Promise((r, n) => {
                        (0, O.iK)(async () => {
                            try {
                                await rI(e, t), r(!0)
                            } catch (e) {
                                n(e)
                            }
                        }, t.interval)
                    })
                }
            }
            let rC = "__THROTTLED";
            class rR {
                constructor({
                    options: e,
                    recordingOptions: t
                }) {
                    rR.prototype.__init.call(this), rR.prototype.__init2.call(this), rR.prototype.__init3.call(this), rR.prototype.__init4.call(this), rR.prototype.__init5.call(this), rR.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                        sessionIdlePause: 3e5,
                        sessionIdleExpire: 9e5
                    }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._requiresManualStart = !1, this._hasInitializedCoreListeners = !1, this._context = {
                        errorIds: new Set,
                        traceIds: new Set,
                        urls: [],
                        initialTimestamp: Date.now(),
                        initialUrl: ""
                    }, this._recordingOptions = t, this._options = e, this._debouncedFlush = function(e, t, r) {
                        let n, i, s;
                        let o = r && r.maxWait ? Math.max(r.maxWait, t) : 0;

                        function a() {
                            return l(), n = e()
                        }

                        function l() {
                            void 0 !== i && clearTimeout(i), void 0 !== s && clearTimeout(s), i = s = void 0
                        }

                        function c() {
                            return i && clearTimeout(i), i = (0, O.iK)(a, t), o && void 0 === s && (s = (0, O.iK)(a, o)), n
                        }
                        return c.cancel = l, c.flush = function() {
                            return void 0 !== i || void 0 !== s ? a() : n
                        }, c
                    }(() => this._flush(), this._options.flushMinDelay, {
                        maxWait: this._options.flushMaxDelay
                    }), this._throttledAddEvent = function(e, t, r) {
                        let n = new Map,
                            i = e => {
                                let t = e - 5;
                                n.forEach((e, r) => {
                                    r < t && n.delete(r)
                                })
                            },
                            s = () => [...n.values()].reduce((e, t) => e + t, 0),
                            o = !1;
                        return (...t) => {
                            let r = Math.floor(Date.now() / 1e3);
                            if (i(r), s() >= 300) {
                                let e = o;
                                return o = !0, e ? "__SKIPPED" : rC
                            }
                            o = !1;
                            let a = n.get(r) || 0;
                            return n.set(r, a + 1), e(...t)
                        }
                    }((e, t) => (function(e, t, r) {
                        return t6(e, t) ? t8(e, t, r) : Promise.resolve(null)
                    })(this, e, t), 0, 0);
                    let {
                        slowClickTimeout: r,
                        slowClickIgnoreSelectors: n
                    } = this.getOptions(), i = r ? {
                        threshold: Math.min(3e3, r),
                        timeout: r,
                        scrollTimeout: 300,
                        ignoreSelector: n ? n.join(",") : ""
                    } : void 0;
                    i && (this.clickDetector = new tR(this, i))
                }
                getContext() {
                    return this._context
                }
                isEnabled() {
                    return this._isEnabled
                }
                isPaused() {
                    return this._isPaused
                }
                isRecordingCanvas() {
                    return !!this._canvas
                }
                getOptions() {
                    return this._options
                }
                handleException(e) {
                    this._options.onError && this._options.onError(e)
                }
                initializeSampling(e) {
                    let {
                        errorSampleRate: t,
                        sessionSampleRate: r
                    } = this._options, n = t <= 0 && r <= 0;
                    this._requiresManualStart = n, !n && (this._initializeSessionForSampling(e), this.session) && !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", this._initializeRecording())
                }
                start() {
                    if (this._isEnabled && "session" === this.recordingMode || this._isEnabled && "buffer" === this.recordingMode) return;
                    this._updateUserActivity();
                    let e = t3({
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 1,
                        allowBuffering: !1
                    });
                    this.session = e, this._initializeRecording()
                }
                startBuffering() {
                    if (this._isEnabled) return;
                    let e = t3({
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }, {
                        stickySession: this._options.stickySession,
                        sessionSampleRate: 0,
                        allowBuffering: !0
                    });
                    this.session = e, this.recordingMode = "buffer", this._initializeRecording()
                }
                startRecording() {
                    try {
                        var e;
                        let t;
                        let r = this._canvas;
                        this._stopRecording = tS({ ...this._recordingOptions,
                            ..."buffer" === this.recordingMode ? {
                                checkoutEveryNms: 6e4
                            } : this._options._experiments.continuousCheckout && {
                                checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                            },
                            emit: (e = this, t = !1, (r, n) => {
                                if (!e.checkAndHandleExpiredSession()) return;
                                let i = n || !t;
                                t = !0, e.clickDetector && function(e, t) {
                                    try {
                                        if (3 !== t.type) return;
                                        let {
                                            source: r
                                        } = t.data;
                                        if (tC.has(r) && e.registerMutation(t.timestamp), r === eY.Scroll && e.registerScroll(t.timestamp), t.data.source === eY.MouseInteraction) {
                                            let {
                                                type: r,
                                                id: n
                                            } = t.data, i = tS.mirror.getNode(n);
                                            i instanceof HTMLElement && r === eX.Click && e.registerClick(i)
                                        }
                                    } catch (e) {}
                                }(e.clickDetector, r), e.addUpdate(() => {
                                    if ("buffer" === e.recordingMode && i && e.setInitialState(), !t5(e, r, i)) return !0;
                                    if (!i) return !1;
                                    let t = e.session;
                                    if (i && e.session && 0 === e.session.segmentId && t5(e, function(e) {
                                            let t = e.getOptions();
                                            return {
                                                type: eG.Custom,
                                                timestamp: Date.now(),
                                                data: {
                                                    tag: "options",
                                                    payload: {
                                                        shouldRecordCanvas: e.isRecordingCanvas(),
                                                        sessionSampleRate: t.sessionSampleRate,
                                                        errorSampleRate: t.errorSampleRate,
                                                        useCompressionOption: t.useCompression,
                                                        blockAllMedia: t.blockAllMedia,
                                                        maskAllText: t.maskAllText,
                                                        maskAllInputs: t.maskAllInputs,
                                                        useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                        networkCaptureBodies: t.networkCaptureBodies,
                                                        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                        networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                    }
                                                }
                                            }
                                        }(e), !1), "buffer" === e.recordingMode && t && e.eventBuffer) {
                                        let r = e.eventBuffer.getEarliestTimestamp();
                                        r && (t.started = r, e.getOptions().stickySession && tQ(t))
                                    }
                                    return !!t && !!t.previousSessionId || ("session" === e.recordingMode && e.flush(), !0)
                                })
                            }),
                            onMutation: this._onMutationHandler,
                            ...r ? {
                                recordCanvas: r.recordCanvas,
                                getCanvasManager: r.getCanvasManager,
                                sampling: r.sampling,
                                dataURLOptions: r.dataURLOptions
                            } : {}
                        })
                    } catch (e) {
                        this.handleException(e)
                    }
                }
                stopRecording() {
                    try {
                        return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                    } catch (e) {
                        return this.handleException(e), !1
                    }
                }
                async stop({
                    forceFlush: e = !1,
                    reason: t
                } = {}) {
                    if (this._isEnabled) {
                        this._isEnabled = !1;
                        try {
                            ! function() {
                                let e = (0, f.nZ)().getPropagationContext().dsc;
                                e && delete e.replay_id;
                                let t = (0, y.HN)();
                                if (t) {
                                    let e = (0, g.jC)(t);
                                    delete e.replay_id
                                }
                            }(), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), e && await this._flush({
                                    force: !0
                                }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null,
                                function() {
                                    if (tG()) try {
                                        F.sessionStorage.removeItem(U)
                                    } catch (e) {}
                                }(), this.session = void 0
                        } catch (e) {
                            this.handleException(e)
                        }
                    }
                }
                pause() {
                    this._isPaused || (this._isPaused = !0, this.stopRecording())
                }
                resume() {
                    this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording())
                }
                async sendBufferedReplayOrFlush({
                    continueRecording: e = !0
                } = {}) {
                    if ("session" === this.recordingMode) return this.flushImmediate();
                    let t = Date.now();
                    await this.flushImmediate();
                    let r = this.stopRecording();
                    e && r && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(t), this._updateSessionActivity(t), this._maybeSaveSession()), this.startRecording())
                }
                addUpdate(e) {
                    let t = e();
                    "buffer" !== this.recordingMode && !0 !== t && this._debouncedFlush()
                }
                triggerUserActivity() {
                    if (this._updateUserActivity(), !this._stopRecording) {
                        if (!this._checkSession()) return;
                        this.resume();
                        return
                    }
                    this.checkAndHandleExpiredSession(), this._updateSessionActivity()
                }
                updateUserActivity() {
                    this._updateUserActivity(), this._updateSessionActivity()
                }
                conditionalFlush() {
                    return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
                }
                flush() {
                    return this._debouncedFlush()
                }
                flushImmediate() {
                    return this._debouncedFlush(), this._debouncedFlush.flush()
                }
                cancelFlush() {
                    this._debouncedFlush.cancel()
                }
                getSessionId() {
                    return this.session && this.session.id
                }
                checkAndHandleExpiredSession() {
                    if (this._lastActivity && t0(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                        this.pause();
                        return
                    }
                    return !!this._checkSession()
                }
                setInitialState() {
                    let e = `${F.location.pathname}${F.location.hash}${F.location.search}`,
                        t = `${F.location.origin}${e}`;
                    this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = t, this._context.initialTimestamp = Date.now(), this._context.urls.push(t)
                }
                throttledAddEvent(e, t) {
                    let r = this._throttledAddEvent(e, t);
                    if (r === rC) {
                        let e = tA({
                            category: "replay.throttled"
                        });
                        this.addUpdate(() => !t5(this, {
                            type: 5,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e,
                                metric: !0
                            }
                        }))
                    }
                    return r
                }
                getCurrentRoute() {
                    let e = this.lastActiveSpan || (0, y.HN)(),
                        t = e && (0, y.Gx)(e),
                        r = (t && (0, y.XU)(t).data || {})[S.Zj];
                    if (t && r && ["route", "custom"].includes(r)) return (0, y.XU)(t).description
                }
                _initializeRecording() {
                    this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                        useCompression: e,
                        workerUrl: t
                    }) {
                        if (e && window.Worker) {
                            let e = function(e) {
                                try {
                                    let t = e || ("undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                        let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                        return URL.createObjectURL(e)
                                    }());
                                    if (!t) return;
                                    let r = new Worker(t);
                                    return new tJ(r)
                                } catch (e) {}
                            }(t);
                            if (e) return e
                        }
                        return new tq
                    }({
                        useCompression: this._options.useCompression,
                        workerUrl: this._options.workerUrl
                    }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
                }
                _initializeSessionForSampling(e) {
                    let t = this._options.errorSampleRate > 0,
                        r = t3({
                            sessionIdleExpire: this.timeouts.sessionIdleExpire,
                            maxReplayDuration: this._options.maxReplayDuration,
                            previousSessionId: e
                        }, {
                            stickySession: this._options.stickySession,
                            sessionSampleRate: this._options.sessionSampleRate,
                            allowBuffering: t
                        });
                    this.session = r
                }
                _checkSession() {
                    if (!this.session) return !1;
                    let e = this.session;
                    return !t2(e, {
                        sessionIdleExpire: this.timeouts.sessionIdleExpire,
                        maxReplayDuration: this._options.maxReplayDuration
                    }) || (this._refreshSession(e), !1)
                }
                async _refreshSession(e) {
                    this._isEnabled && (await this.stop({
                        reason: "refresh session"
                    }), this.initializeSampling(e.id))
                }
                _addListeners() {
                    try {
                        F.document.addEventListener("visibilitychange", this._handleVisibilityChange), F.addEventListener("blur", this._handleWindowBlur), F.addEventListener("focus", this._handleWindowFocus), F.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (function(e) {
                            let t = (0, f.s3)();
                            (0, P.O)(tO(e)), (0, B.a)(t => {
                                if (!e.isEnabled()) return;
                                let r = function(e) {
                                    let {
                                        from: t,
                                        to: r
                                    } = e, n = Date.now() / 1e3;
                                    return {
                                        type: "navigation.push",
                                        start: n,
                                        end: n,
                                        name: r,
                                        data: {
                                            previous: t
                                        }
                                    }
                                }(t);
                                null !== r && (e.getContext().urls.push(r.name), e.triggerUserActivity(), e.addUpdate(() => (re(e, [r]), !1)))
                            }),
                            function(e) {
                                let t = (0, f.s3)();
                                t && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                                    if (!e.isEnabled() || !t9(t)) return;
                                    let r = !t9(t) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(t.category) || t.category.startsWith("ui.") ? null : "console" === t.category ? function(e) {
                                        let t = e.data && e.data.arguments;
                                        if (!Array.isArray(t) || 0 === t.length) return tA(e);
                                        let r = !1,
                                            n = t.map(e => {
                                                if (!e) return e;
                                                if ("string" == typeof e) return e.length > 5e3 ? (r = !0, `${e.slice(0,5e3)}…`) : e;
                                                if ("object" == typeof e) try {
                                                    let t = (0, E.Fv)(e, 7);
                                                    if (JSON.stringify(t).length > 5e3) return r = !0, `${JSON.stringify(t,null,2).slice(0,5e3)}…`;
                                                    return t
                                                } catch (e) {}
                                                return e
                                            });
                                        return tA({ ...e,
                                            data: { ...e.data,
                                                arguments: n,
                                                ...r ? {
                                                    _meta: {
                                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                    }
                                                } : {}
                                            }
                                        })
                                    }(t) : tA(t);
                                    r && tE(e, r)
                                })(e, t))
                            }(e),
                            function(e) {
                                let t = (0, f.s3)();
                                try {
                                    let {
                                        networkDetailAllowUrls: r,
                                        networkDetailDenyUrls: n,
                                        networkCaptureBodies: i,
                                        networkRequestHeaders: s,
                                        networkResponseHeaders: o
                                    } = e.getOptions(), a = {
                                        replay: e,
                                        networkDetailAllowUrls: r,
                                        networkDetailDenyUrls: n,
                                        networkCaptureBodies: i,
                                        networkRequestHeaders: s,
                                        networkResponseHeaders: o
                                    };
                                    t && t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, r) {
                                        if (t.data) try {
                                            var n, i;
                                            "xhr" === t.category && (n = r) && n.xhr && (function(e, t) {
                                                let {
                                                    xhr: r,
                                                    input: n
                                                } = t;
                                                if (!r) return;
                                                let i = rr(n),
                                                    s = r.getResponseHeader("content-length") ? rn(r.getResponseHeader("content-length")) : function(e, t) {
                                                        try {
                                                            let r = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                            return rr(r)
                                                        } catch (e) {
                                                            return
                                                        }
                                                    }(r.response, r.responseType);
                                                void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r), r_(t, r, e)), "fetch" === t.category && (i = r) && i.response && (function(e, t) {
                                                let {
                                                    input: r,
                                                    response: n
                                                } = t, i = rr(r ? ry(r) : void 0), s = n ? rn(n.headers.get("content-length")) : void 0;
                                                void 0 !== i && (e.data.request_body_size = i), void 0 !== s && (e.data.response_body_size = s)
                                            }(t, r), rh(t, r, e))
                                        } catch (e) {}
                                    })(a, e, t))
                                } catch (e) {}
                            }(e);
                            let r = Object.assign((t, r) => !e.isEnabled() || e.isPaused() ? t : "replay_event" === t.type ? (delete t.breadcrumbs, t) : (!t.type || t4(t) || t7(t)) && e.checkAndHandleExpiredSession() ? t7(t) ? (e.flush(), t.contexts.feedback.replay_id = e.getSessionId(), e.triggerUserActivity(), e.addUpdate(() => !t.timestamp || (e.throttledAddEvent({
                                type: eG.Custom,
                                timestamp: 1e3 * t.timestamp,
                                data: {
                                    tag: "breadcrumb",
                                    payload: {
                                        timestamp: t.timestamp,
                                        type: "default",
                                        category: "sentry.feedback",
                                        data: {
                                            feedbackId: t.event_id
                                        }
                                    }
                                }
                            }), !1)), t) : !t.type && t.exception && t.exception.values && t.exception.values.length && r.originalException && r.originalException.__rrweb__ && !e.getOptions()._experiments.captureExceptions ? null : (("buffer" === e.recordingMode && t.message !== W && t.exception && !t.type && tY(e.getOptions().errorSampleRate) || "session" === e.recordingMode) && (t.tags = { ...t.tags,
                                replayId: e.getSessionId()
                            }), t) : t, {
                                id: "Replay"
                            });
                            (0, p.Qy)(r), t && (t.on("beforeSendEvent", t => {
                                e.isEnabled() && !t.type && function(e, t) {
                                    let r = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                    "string" == typeof r && (r.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || r.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && tE(e, tA({
                                        category: "replay.hydrate-error",
                                        data: {
                                            url: (0, M.l4)()
                                        }
                                    }))
                                }(e, t)
                            }), t.on("afterSendEvent", (t, r) => {
                                if (!e.isEnabled() || t.type && !t4(t)) return;
                                let n = r && r.statusCode;
                                if (n && !(n < 200) && !(n >= 300)) {
                                    if (t4(t)) {
                                        (function(e, t) {
                                            let r = e.getContext();
                                            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && r.traceIds.size < 100 && r.traceIds.add(t.contexts.trace.trace_id)
                                        })(e, t);
                                        return
                                    }(function(e, t) {
                                        let r = e.getContext();
                                        if (t.event_id && r.errorIds.size < 100 && r.errorIds.add(t.event_id), "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId) return;
                                        let {
                                            beforeErrorSampling: n
                                        } = e.getOptions();
                                        ("function" != typeof n || n(t)) && (0, O.iK)(async () => {
                                            try {
                                                await e.sendBufferedReplayOrFlush()
                                            } catch (t) {
                                                e.handleException(t)
                                            }
                                        })
                                    })(e, t)
                                }
                            }), t.on("createDsc", t => {
                                let r = e.getSessionId();
                                r && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = r)
                            }), t.on("spanStart", t => {
                                e.lastActiveSpan = t
                            }), t.on("spanEnd", t => {
                                e.lastActiveSpan = t
                            }), t.on("beforeSendFeedback", (t, r) => {
                                let n = e.getSessionId();
                                r && r.includeReplay && e.isEnabled() && n && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = n)
                            }))
                        }(this), this._hasInitializedCoreListeners = !0)
                    } catch (e) {
                        this.handleException(e)
                    }
                    this._performanceCleanupCallback = function(e) {
                        function t(t) {
                            e.performanceEntries.includes(t) || e.performanceEntries.push(t)
                        }

                        function r({
                            entries: e
                        }) {
                            e.forEach(t)
                        }
                        let n = [];
                        return ["navigation", "paint", "resource"].forEach(e => {
                            n.push((0, N._j)(e, r))
                        }), n.push((0, N.$A)(tP(tU, e)), (0, N.PR)(tP(tW, e)), (0, N.to)(tP(tz, e)), (0, N.YF)(tP(tj, e))), () => {
                            n.forEach(e => e())
                        }
                    }(this)
                }
                _removeListeners() {
                    try {
                        F.document.removeEventListener("visibilitychange", this._handleVisibilityChange), F.removeEventListener("blur", this._handleWindowBlur), F.removeEventListener("focus", this._handleWindowFocus), F.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                    } catch (e) {
                        this.handleException(e)
                    }
                }
                __init() {
                    this._handleVisibilityChange = () => {
                        "visible" === F.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                    }
                }
                __init2() {
                    this._handleWindowBlur = () => {
                        let e = tA({
                            category: "ui.blur"
                        });
                        this._doChangeToBackgroundTasks(e)
                    }
                }
                __init3() {
                    this._handleWindowFocus = () => {
                        let e = tA({
                            category: "ui.focus"
                        });
                        this._doChangeToForegroundTasks(e)
                    }
                }
                __init4() {
                    this._handleKeyboardEvent = e => {
                        ! function(e, t) {
                            if (!e.isEnabled()) return;
                            e.updateUserActivity();
                            let r = function(e) {
                                var t;
                                let {
                                    metaKey: r,
                                    shiftKey: n,
                                    ctrlKey: i,
                                    altKey: s,
                                    key: o,
                                    target: a
                                } = e;
                                if (!a || "INPUT" === (t = a).tagName || "TEXTAREA" === t.tagName || t.isContentEditable || !o) return null;
                                let l = r || i || s,
                                    c = 1 === o.length;
                                if (!l && c) return null;
                                let u = (0, M.Rt)(a, {
                                        maxStringLength: 200
                                    }) || "<unknown>",
                                    d = tN(a, u);
                                return tA({
                                    category: "ui.keyDown",
                                    message: u,
                                    data: { ...d.data,
                                        metaKey: r,
                                        shiftKey: n,
                                        ctrlKey: i,
                                        altKey: s,
                                        key: o
                                    }
                                })
                            }(t);
                            r && tE(e, r)
                        }(this, e)
                    }
                }
                _doChangeToBackgroundTasks(e) {
                    !this.session || t1(this.session, {
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }) || (e && this._createCustomBreadcrumb(e), this.conditionalFlush())
                }
                _doChangeToForegroundTasks(e) {
                    this.session && this.checkAndHandleExpiredSession() && e && this._createCustomBreadcrumb(e)
                }
                _updateUserActivity(e = Date.now()) {
                    this._lastActivity = e
                }
                _updateSessionActivity(e = Date.now()) {
                    this.session && (this.session.lastActivity = e, this._maybeSaveSession())
                }
                _createCustomBreadcrumb(e) {
                    this.addUpdate(() => {
                        this.throttledAddEvent({
                            type: eG.Custom,
                            timestamp: e.timestamp || 0,
                            data: {
                                tag: "breadcrumb",
                                payload: e
                            }
                        })
                    })
                }
                _addPerformanceEntries() {
                    let e = this.performanceEntries.map(tB).filter(Boolean).concat(this.replayPerformanceEntries);
                    if (this.performanceEntries = [], this.replayPerformanceEntries = [], this._requiresManualStart) {
                        let t = this._context.initialTimestamp / 1e3;
                        e = e.filter(e => e.start >= t)
                    }
                    return Promise.all(re(this, e))
                }
                _clearContext() {
                    this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
                }
                _updateInitialTimestampFromEventBuffer() {
                    let {
                        session: e,
                        eventBuffer: t
                    } = this;
                    if (!e || !t || this._requiresManualStart || e.segmentId) return;
                    let r = t.getEarliestTimestamp();
                    r && r < this._context.initialTimestamp && (this._context.initialTimestamp = r)
                }
                _popEventContext() {
                    let e = {
                        initialTimestamp: this._context.initialTimestamp,
                        initialUrl: this._context.initialUrl,
                        errorIds: Array.from(this._context.errorIds),
                        traceIds: Array.from(this._context.traceIds),
                        urls: this._context.urls
                    };
                    return this._clearContext(), e
                }
                async _runFlush() {
                    let e = this.getSessionId();
                    if (this.session && this.eventBuffer && e && (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents) && (await rw(this), this.eventBuffer && e === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        let t = Date.now();
                        if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw Error("Session is too long, not sending replay");
                        let r = this._popEventContext(),
                            n = this.session.segmentId++;
                        this._maybeSaveSession();
                        let i = await this.eventBuffer.finish();
                        await rI({
                            replayId: e,
                            recordingData: i,
                            segmentId: n,
                            eventContext: r,
                            session: this.session,
                            timestamp: t,
                            onError: e => this.handleException(e)
                        })
                    } catch (t) {
                        this.handleException(t), this.stop({
                            reason: "sendReplay"
                        });
                        let e = (0, f.s3)();
                        e && e.recordDroppedEvent(t instanceof rM ? "ratelimit_backoff" : "send_error", "replay")
                    }
                }
                __init5() {
                    this._flush = async ({
                        force: e = !1
                    } = {}) => {
                        if (!this._isEnabled && !e || !this.checkAndHandleExpiredSession() || !this.session) return;
                        let t = this.session.started,
                            r = Date.now() - t;
                        this._debouncedFlush.cancel();
                        let n = r < this._options.minReplayDuration,
                            i = r > this._options.maxReplayDuration + 5e3;
                        if (n || i) {
                            n && this._debouncedFlush();
                            return
                        }
                        let s = this.eventBuffer;
                        s && 0 === this.session.segmentId && s.hasCheckout;
                        let o = !!this._flushLock;
                        this._flushLock || (this._flushLock = this._runFlush());
                        try {
                            await this._flushLock
                        } catch (e) {
                            this.handleException(e)
                        } finally {
                            this._flushLock = void 0, o && this._debouncedFlush()
                        }
                    }
                }
                _maybeSaveSession() {
                    this.session && this._options.stickySession && tQ(this.session)
                }
                __init6() {
                    this._onMutationHandler = e => {
                        let t = e.length,
                            r = this._options.mutationLimit,
                            n = this._options.mutationBreadcrumbLimit,
                            i = r && t > r;
                        if (t > n || i) {
                            let e = tA({
                                category: "replay.mutations",
                                data: {
                                    count: t,
                                    limit: i
                                }
                            });
                            this._createCustomBreadcrumb(e)
                        }
                        return !i || (this.stop({
                            reason: "mutationLimit",
                            forceFlush: "session" === this.recordingMode
                        }), !1)
                    }
                }
            }

            function rx(e, t) {
                return [...e, ...t].join(",")
            }
            let rT = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
                rA = ["content-length", "content-type", "accept"],
                rD = !1,
                rO = e => new rN(e);
            class rN {
                static __initStatic() {
                    this.id = "Replay"
                }
                constructor({
                    flushMinDelay: e = 5e3,
                    flushMaxDelay: t = 5500,
                    minReplayDuration: r = 4999,
                    maxReplayDuration: n = 36e5,
                    stickySession: i = !0,
                    useCompression: s = !0,
                    workerUrl: o,
                    _experiments: a = {},
                    maskAllText: l = !0,
                    maskAllInputs: c = !0,
                    blockAllMedia: u = !0,
                    mutationBreadcrumbLimit: d = 750,
                    mutationLimit: h = 1e4,
                    slowClickTimeout: p = 7e3,
                    slowClickIgnoreSelectors: f = [],
                    networkDetailAllowUrls: m = [],
                    networkDetailDenyUrls: y = [],
                    networkCaptureBodies: g = !0,
                    networkRequestHeaders: v = [],
                    networkResponseHeaders: S = [],
                    mask: _ = [],
                    maskAttributes: w = ["title", "placeholder"],
                    unmask: b = [],
                    block: E = [],
                    unblock: k = [],
                    ignore: M = [],
                    maskFn: I,
                    beforeAddRecordingEvent: C,
                    beforeErrorSampling: R
                } = {}) {
                    this.name = rN.id;
                    let x = function({
                        mask: e,
                        unmask: t,
                        block: r,
                        unblock: n,
                        ignore: i
                    }) {
                        return {
                            maskTextSelector: rx(e, [".sentry-mask", "[data-sentry-mask]"]),
                            unmaskTextSelector: rx(t, []),
                            blockSelector: rx(r, [".sentry-block", "[data-sentry-block]", 'base[href="/"]']),
                            unblockSelector: rx(n, []),
                            ignoreSelector: rx(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                        }
                    }({
                        mask: _,
                        unmask: b,
                        block: E,
                        unblock: k,
                        ignore: M
                    });
                    if (this._recordingOptions = {
                            maskAllInputs: c,
                            maskAllText: l,
                            maskInputOptions: {
                                password: !0
                            },
                            maskTextFn: I,
                            maskInputFn: I,
                            maskAttributeFn: (e, t, r) => (function({
                                el: e,
                                key: t,
                                maskAttributes: r,
                                maskAllText: n,
                                privacyOptions: i,
                                value: s
                            }) {
                                return !n || i.unmaskTextSelector && e.matches(i.unmaskTextSelector) ? s : r.includes(t) || "value" === t && "INPUT" === e.tagName && ["submit", "button"].includes(e.getAttribute("type") || "") ? s.replace(/[\S]/g, "*") : s
                            })({
                                maskAttributes: w,
                                maskAllText: l,
                                privacyOptions: x,
                                key: e,
                                value: t,
                                el: r
                            }),
                            ...x,
                            slimDOMOptions: "all",
                            inlineStylesheet: !0,
                            inlineImages: !1,
                            collectFonts: !0,
                            errorHandler: e => {
                                try {
                                    e.__rrweb__ = !0
                                } catch (e) {}
                            }
                        }, this._initialOptions = {
                            flushMinDelay: e,
                            flushMaxDelay: t,
                            minReplayDuration: Math.min(r, 15e3),
                            maxReplayDuration: Math.min(n, 36e5),
                            stickySession: i,
                            useCompression: s,
                            workerUrl: o,
                            blockAllMedia: u,
                            maskAllInputs: c,
                            maskAllText: l,
                            mutationBreadcrumbLimit: d,
                            mutationLimit: h,
                            slowClickTimeout: p,
                            slowClickIgnoreSelectors: f,
                            networkDetailAllowUrls: m,
                            networkDetailDenyUrls: y,
                            networkCaptureBodies: g,
                            networkRequestHeaders: rL(v),
                            networkResponseHeaders: rL(S),
                            beforeAddRecordingEvent: C,
                            beforeErrorSampling: R,
                            _experiments: a
                        }, this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${rT}` : rT), this._isInitialized && (0, D.j)()) throw Error("Multiple Sentry Session Replay instances are not supported");
                    this._isInitialized = !0
                }
                get _isInitialized() {
                    return rD
                }
                set _isInitialized(e) {
                    rD = e
                }
                afterAllSetup(e) {
                    (0, D.j)() && !this._replay && (this._setup(e), this._initialize(e))
                }
                start() {
                    this._replay && this._replay.start()
                }
                startBuffering() {
                    this._replay && this._replay.startBuffering()
                }
                stop() {
                    return this._replay ? this._replay.stop({
                        forceFlush: "session" === this._replay.recordingMode
                    }) : Promise.resolve()
                }
                flush(e) {
                    return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(), Promise.resolve()) : Promise.resolve()
                }
                getReplayId() {
                    if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
                }
                _initialize(e) {
                    this._replay && (this._maybeLoadFromReplayCanvasIntegration(e), this._replay.initializeSampling())
                }
                _setup(e) {
                    let t = function(e, t) {
                        let r = t.getOptions(),
                            n = {
                                sessionSampleRate: 0,
                                errorSampleRate: 0,
                                ...(0, k.Jr)(e)
                            },
                            i = (0, _.o)(r.replaysSessionSampleRate),
                            s = (0, _.o)(r.replaysOnErrorSampleRate);
                        return null == i && null == s && (0, b.Cf)(() => {
                            console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                        }), null != i && (n.sessionSampleRate = i), null != s && (n.errorSampleRate = s), n
                    }(this._initialOptions, e);
                    this._replay = new rR({
                        options: t,
                        recordingOptions: this._recordingOptions
                    })
                }
                _maybeLoadFromReplayCanvasIntegration(e) {
                    try {
                        let t = e.getIntegrationByName("ReplayCanvas");
                        if (!t) return;
                        this._replay._canvas = t.getOptions()
                    } catch (e) {}
                }
            }

            function rL(e) {
                return [...rA, ...e.map(e => e.toLowerCase())]
            }
            rN.__initStatic()
        }
    }
]);