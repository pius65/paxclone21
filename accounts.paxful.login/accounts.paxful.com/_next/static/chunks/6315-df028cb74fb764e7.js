! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9221d74d-23dd-4e23-8b41-e3b62c6988f3", e._sentryDebugIdIdentifier = "sentry-dbid-9221d74d-23dd-4e23-8b41-e3b62c6988f3")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6315], {
        16357: (e, t, s) => {
            s.d(t, {
                vM: () => eA,
                Mu: () => P
            });
            let r = (e, t) => e.push.apply(e, t),
                n = e => e.sort((e, t) => e.i - t.i || e.j - t.j),
                a = e => {
                    let t = {},
                        s = 1;
                    return e.forEach(e => {
                        t[e] = s, s += 1
                    }), t
                },
                i = {
                    4: [
                        [1, 2],
                        [2, 3]
                    ],
                    5: [
                        [1, 3],
                        [2, 3],
                        [2, 4]
                    ],
                    6: [
                        [1, 2],
                        [2, 4],
                        [4, 5]
                    ],
                    7: [
                        [1, 3],
                        [2, 3],
                        [4, 5],
                        [4, 6]
                    ],
                    8: [
                        [2, 4],
                        [4, 6]
                    ]
                },
                l = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
                o = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
                h = /^[A-Z\xbf-\xdf]+$/,
                u = /^[^a-z\xdf-\xff]+$/,
                c = /^[a-z\xdf-\xff]+$/,
                d = /^[^A-Z\xbf-\xdf]+$/,
                g = /[a-z\xdf-\xff]/,
                f = /[A-Z\xbf-\xdf]/,
                p = /[^A-Za-z\xbf-\xdf]/gi,
                m = /^\d+$/,
                b = new Date().getFullYear(),
                y = {
                    recentYear: /19\d\d|200\d|201\d|202\d/g
                },
                k = [" ", ",", ";", ":", "|", "/", "\\", "_", ".", "-"],
                x = k.length;
            class M {
                match({
                    password: e
                }) {
                    let t = [...this.getMatchesWithoutSeparator(e), ...this.getMatchesWithSeparator(e)];
                    return n(this.filterNoise(t))
                }
                getMatchesWithSeparator(e) {
                    let t = [],
                        s = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;
                    for (let r = 0; r <= Math.abs(e.length - 6); r += 1)
                        for (let n = r + 5; n <= r + 9 && !(n >= e.length); n += 1) {
                            let a = e.slice(r, +n + 1 || 9e9),
                                i = s.exec(a);
                            if (null != i) {
                                let e = this.mapIntegersToDayMonthYear([parseInt(i[1], 10), parseInt(i[3], 10), parseInt(i[4], 10)]);
                                null != e && t.push({
                                    pattern: "date",
                                    token: a,
                                    i: r,
                                    j: n,
                                    separator: i[2],
                                    year: e.year,
                                    month: e.month,
                                    day: e.day
                                })
                            }
                        }
                    return t
                }
                getMatchesWithoutSeparator(e) {
                    let t = [],
                        s = /^\d{4,8}$/,
                        r = e => Math.abs(e.year - b);
                    for (let n = 0; n <= Math.abs(e.length - 4); n += 1)
                        for (let a = n + 3; a <= n + 7 && !(a >= e.length); a += 1) {
                            let l = e.slice(n, +a + 1 || 9e9);
                            if (s.exec(l)) {
                                let e = [];
                                if (i[l.length].forEach(([t, s]) => {
                                        let r = this.mapIntegersToDayMonthYear([parseInt(l.slice(0, t), 10), parseInt(l.slice(t, s), 10), parseInt(l.slice(s), 10)]);
                                        null != r && e.push(r)
                                    }), e.length > 0) {
                                    let s = e[0],
                                        i = r(e[0]);
                                    e.slice(1).forEach(e => {
                                        let t = r(e);
                                        t < i && (s = e, i = t)
                                    }), t.push({
                                        pattern: "date",
                                        token: l,
                                        i: n,
                                        j: a,
                                        separator: "",
                                        year: s.year,
                                        month: s.month,
                                        day: s.day
                                    })
                                }
                            }
                        }
                    return t
                }
                filterNoise(e) {
                    return e.filter(t => {
                        let s = !1,
                            r = e.length;
                        for (let n = 0; n < r; n += 1) {
                            let r = e[n];
                            if (t !== r && r.i <= t.i && r.j >= t.j) {
                                s = !0;
                                break
                            }
                        }
                        return !s
                    })
                }
                mapIntegersToDayMonthYear(e) {
                    if (e[1] > 31 || e[1] <= 0) return null;
                    let t = 0,
                        s = 0,
                        r = 0;
                    for (let n = 0, a = e.length; n < a; n += 1) {
                        let a = e[n];
                        if (a > 99 && a < 1e3 || a > 2050) return null;
                        a > 31 && (s += 1), a > 12 && (t += 1), a <= 0 && (r += 1)
                    }
                    return s >= 2 || 3 === t || r >= 2 ? null : this.getDayMonth(e)
                }
                getDayMonth(e) {
                    let t = [
                            [e[2], e.slice(0, 2)],
                            [e[0], e.slice(1, 3)]
                        ],
                        s = t.length;
                    for (let e = 0; e < s; e += 1) {
                        let [s, r] = t[e];
                        if (1e3 <= s && s <= 2050) {
                            let e = this.mapIntegersToDayMonth(r);
                            if (null != e) return {
                                year: s,
                                month: e.month,
                                day: e.day
                            };
                            return null
                        }
                    }
                    for (let e = 0; e < s; e += 1) {
                        let [s, r] = t[e], n = this.mapIntegersToDayMonth(r);
                        if (null != n) return {
                            year: this.twoToFourDigitYear(s),
                            month: n.month,
                            day: n.day
                        }
                    }
                    return null
                }
                mapIntegersToDayMonth(e) {
                    let t = [e, e.slice().reverse()];
                    for (let e = 0; e < t.length; e += 1) {
                        let s = t[e],
                            r = s[0],
                            n = s[1];
                        if (r >= 1 && r <= 31 && n >= 1 && n <= 12) return {
                            day: r,
                            month: n
                        }
                    }
                    return null
                }
                twoToFourDigitYear(e) {
                    return e > 99 ? e : e > 50 ? e + 1900 : e + 2e3
                }
            }
            let w = new Uint32Array(65536),
                S = (e, t) => {
                    let s = e.length,
                        r = t.length,
                        n = 1 << s - 1,
                        a = -1,
                        i = 0,
                        l = s,
                        o = s;
                    for (; o--;) w[e.charCodeAt(o)] |= 1 << o;
                    for (o = 0; o < r; o++) {
                        let e = w[t.charCodeAt(o)],
                            s = e | i;
                        e |= (e & a) + a ^ a, i |= ~(e | a), a &= e, i & n && l++, a & n && l--, a = a << 1 | ~(s | (i = i << 1 | 1)), i &= s
                    }
                    for (o = s; o--;) w[e.charCodeAt(o)] = 0;
                    return l
                },
                v = (e, t) => {
                    let s = t.length,
                        r = e.length,
                        n = [],
                        a = [],
                        i = Math.ceil(s / 32),
                        l = Math.ceil(r / 32);
                    for (let e = 0; e < i; e++) a[e] = -1, n[e] = 0;
                    let o = 0;
                    for (; o < l - 1; o++) {
                        let i = 0,
                            l = -1,
                            h = 32 * o,
                            u = Math.min(32, r) + h;
                        for (let t = h; t < u; t++) w[e.charCodeAt(t)] |= 1 << t;
                        for (let e = 0; e < s; e++) {
                            let s = w[t.charCodeAt(e)],
                                r = a[e / 32 | 0] >>> e & 1,
                                o = n[e / 32 | 0] >>> e & 1,
                                h = s | i,
                                u = ((s | o) & l) + l ^ l | s | o,
                                c = i | ~(u | l),
                                d = l & u;
                            c >>> 31 ^ r && (a[e / 32 | 0] ^= 1 << e), d >>> 31 ^ o && (n[e / 32 | 0] ^= 1 << e), c = c << 1 | r, l = (d = d << 1 | o) | ~(h | c), i = c & h
                        }
                        for (let t = h; t < u; t++) w[e.charCodeAt(t)] = 0
                    }
                    let h = 0,
                        u = -1,
                        c = 32 * o,
                        d = Math.min(32, r - c) + c;
                    for (let t = c; t < d; t++) w[e.charCodeAt(t)] |= 1 << t;
                    let g = r;
                    for (let e = 0; e < s; e++) {
                        let s = w[t.charCodeAt(e)],
                            i = a[e / 32 | 0] >>> e & 1,
                            l = n[e / 32 | 0] >>> e & 1,
                            o = s | h,
                            c = ((s | l) & u) + u ^ u | s | l,
                            d = h | ~(c | u),
                            f = u & c;
                        g += d >>> r - 1 & 1, g -= f >>> r - 1 & 1, d >>> 31 ^ i && (a[e / 32 | 0] ^= 1 << e), f >>> 31 ^ l && (n[e / 32 | 0] ^= 1 << e), d = d << 1 | i, u = (f = f << 1 | l) | ~(o | d), h = d & o
                    }
                    for (let t = c; t < d; t++) w[e.charCodeAt(t)] = 0;
                    return g
                },
                I = (e, t) => {
                    if (e.length < t.length) {
                        let s = t;
                        t = e, e = s
                    }
                    return 0 === t.length ? e.length : e.length <= 32 ? S(e, t) : v(e, t)
                },
                A = (e, t, s) => {
                    let r = e.length <= t.length,
                        n = e.length <= s;
                    return r || n ? Math.ceil(e.length / 4) : s
                },
                j = (e, t, s) => {
                    let r = 0,
                        n = Object.keys(t).find(t => {
                            let n = A(e, t, s);
                            if (Math.abs(e.length - t.length) > n) return !1;
                            let a = I(e, t),
                                i = a <= n;
                            return i && (r = a), i
                        });
                    return n ? {
                        levenshteinDistance: r,
                        levenshteinDistanceEntry: n
                    } : {}
                };
            var T = {
                    a: ["4", "@"],
                    b: ["8"],
                    c: ["(", "{", "[", "<"],
                    d: ["6", "|)"],
                    e: ["3"],
                    f: ["#"],
                    g: ["6", "9", "&"],
                    h: ["#", "|-|"],
                    i: ["1", "!", "|"],
                    k: ["<", "|<"],
                    l: ["!", "1", "|", "7"],
                    m: ["^^", "nn", "2n", "/\\\\/\\\\"],
                    n: ["//"],
                    o: ["0", "()"],
                    q: ["9"],
                    u: ["|_|"],
                    s: ["$", "5"],
                    t: ["+", "7"],
                    v: ["<", ">", "/"],
                    w: ["^/", "uu", "vv", "2u", "2v", "\\\\/\\\\/"],
                    x: ["%", "><"],
                    z: ["2"]
                },
                D = {
                    warnings: {
                        straightRow: "straightRow",
                        keyPattern: "keyPattern",
                        simpleRepeat: "simpleRepeat",
                        extendedRepeat: "extendedRepeat",
                        sequences: "sequences",
                        recentYears: "recentYears",
                        dates: "dates",
                        topTen: "topTen",
                        topHundred: "topHundred",
                        common: "common",
                        similarToCommon: "similarToCommon",
                        wordByItself: "wordByItself",
                        namesByThemselves: "namesByThemselves",
                        commonNames: "commonNames",
                        userInputs: "userInputs",
                        pwned: "pwned"
                    },
                    suggestions: {
                        l33t: "l33t",
                        reverseWords: "reverseWords",
                        allUppercase: "allUppercase",
                        capitalization: "capitalization",
                        dates: "dates",
                        recentYears: "recentYears",
                        associatedYears: "associatedYears",
                        sequences: "sequences",
                        repeated: "repeated",
                        longerKeyboardPattern: "longerKeyboardPattern",
                        anotherWord: "anotherWord",
                        useWords: "useWords",
                        noNeed: "noNeed",
                        pwned: "pwned"
                    },
                    timeEstimation: {
                        ltSecond: "ltSecond",
                        second: "second",
                        seconds: "seconds",
                        minute: "minute",
                        minutes: "minutes",
                        hour: "hour",
                        hours: "hours",
                        day: "day",
                        days: "days",
                        month: "month",
                        months: "months",
                        year: "year",
                        years: "years",
                        centuries: "centuries"
                    }
                };
            class C {
                constructor(e = []) {
                    this.parents = e, this.children = new Map
                }
                addSub(e, ...t) {
                    let s = e.charAt(0);
                    this.children.has(s) || this.children.set(s, new C([...this.parents, s]));
                    let r = this.children.get(s);
                    for (let t = 1; t < e.length; t += 1) {
                        let s = e.charAt(t);
                        r.hasChild(s) || r.addChild(s), r = r.getChild(s)
                    }
                    return r.subs = (r.subs || []).concat(t), this
                }
                getChild(e) {
                    return this.children.get(e)
                }
                isTerminal() {
                    return !!this.subs
                }
                addChild(e) {
                    this.hasChild(e) || this.children.set(e, new C([...this.parents, e]))
                }
                hasChild(e) {
                    return this.children.has(e)
                }
            }
            var E = (e, t) => (Object.entries(e).forEach(([e, s]) => {
                s.forEach(s => {
                    t.addSub(s, e)
                })
            }), t);
            class L {
                constructor() {
                    this.matchers = {}, this.l33tTable = T, this.trieNodeRoot = E(T, new C), this.dictionary = {
                        userInputs: []
                    }, this.rankedDictionaries = {}, this.rankedDictionariesMaxWordSize = {}, this.translations = D, this.graphs = {}, this.useLevenshteinDistance = !1, this.levenshteinThreshold = 2, this.l33tMaxSubstitutions = 100, this.maxLength = 256, this.setRankedDictionaries()
                }
                setOptions(e = {}) {
                    e.l33tTable && (this.l33tTable = e.l33tTable, this.trieNodeRoot = E(e.l33tTable, new C)), e.dictionary && (this.dictionary = e.dictionary, this.setRankedDictionaries()), e.translations && this.setTranslations(e.translations), e.graphs && (this.graphs = e.graphs), void 0 !== e.useLevenshteinDistance && (this.useLevenshteinDistance = e.useLevenshteinDistance), void 0 !== e.levenshteinThreshold && (this.levenshteinThreshold = e.levenshteinThreshold), void 0 !== e.l33tMaxSubstitutions && (this.l33tMaxSubstitutions = e.l33tMaxSubstitutions), void 0 !== e.maxLength && (this.maxLength = e.maxLength)
                }
                setTranslations(e) {
                    if (this.checkCustomTranslations(e)) this.translations = e;
                    else throw Error("Invalid translations object fallback to keys")
                }
                checkCustomTranslations(e) {
                    let t = !0;
                    return Object.keys(D).forEach(s => {
                        s in e ? Object.keys(D[s]).forEach(r => {
                            r in e[s] || (t = !1)
                        }) : t = !1
                    }), t
                }
                setRankedDictionaries() {
                    let e = {},
                        t = {};
                    Object.keys(this.dictionary).forEach(s => {
                        e[s] = a(this.dictionary[s]), t[s] = this.getRankedDictionariesMaxWordSize(this.dictionary[s])
                    }), this.rankedDictionaries = e, this.rankedDictionariesMaxWordSize = t
                }
                getRankedDictionariesMaxWordSize(e) {
                    let t = e.map(e => "string" != typeof e ? e.toString().length : e.length);
                    return 0 === t.length ? 0 : t.reduce((e, t) => Math.max(e, t), -1 / 0)
                }
                buildSanitizedRankedDictionary(e) {
                    let t = [];
                    return e.forEach(e => {
                        let s = typeof e;
                        ("string" === s || "number" === s || "boolean" === s) && t.push(e.toString().toLowerCase())
                    }), a(t)
                }
                extendUserInputsDictionary(e) {
                    this.dictionary.userInputs || (this.dictionary.userInputs = []);
                    let t = [...this.dictionary.userInputs, ...e];
                    this.rankedDictionaries.userInputs = this.buildSanitizedRankedDictionary(t), this.rankedDictionariesMaxWordSize.userInputs = this.getRankedDictionariesMaxWordSize(t)
                }
                addMatcher(e, t) {
                    this.matchers[e] ? console.info(`Matcher ${e} already exists`) : this.matchers[e] = t
                }
            }
            let P = new L;
            class R {
                constructor(e) {
                    this.defaultMatch = e
                }
                match({
                    password: e
                }) {
                    let t = e.split("").reverse().join("");
                    return this.defaultMatch({
                        password: t
                    }).map(t => ({ ...t,
                        token: t.token.split("").reverse().join(""),
                        reversed: !0,
                        i: e.length - 1 - t.j,
                        j: e.length - 1 - t.i
                    }))
                }
            }
            class O {
                constructor({
                    substr: e,
                    limit: t,
                    trieRoot: s
                }) {
                    this.buffer = [], this.finalPasswords = [], this.substr = e, this.limit = t, this.trieRoot = s
                }
                getAllPossibleSubsAtIndex(e) {
                    let t = [],
                        s = this.trieRoot;
                    for (let r = e; r < this.substr.length; r += 1) {
                        let e = this.substr.charAt(r);
                        if (!(s = s.getChild(e))) break;
                        t.push(s)
                    }
                    return t
                }
                helper({
                    onlyFullSub: e,
                    isFullSub: t,
                    index: s,
                    subIndex: r,
                    changes: n,
                    lastSubLetter: a,
                    consecutiveSubCount: i
                }) {
                    if (this.finalPasswords.length >= this.limit) return;
                    if (s === this.substr.length) {
                        e === t && this.finalPasswords.push({
                            password: this.buffer.join(""),
                            changes: n
                        });
                        return
                    }
                    let l = [...this.getAllPossibleSubsAtIndex(s)],
                        o = !1;
                    for (let h = s + l.length - 1; h >= s; h -= 1) {
                        let u = l[h - s];
                        if (u.isTerminal()) {
                            if (a === u.parents.join("") && i >= 3) continue;
                            for (let s of (o = !0, u.subs)) {
                                this.buffer.push(s);
                                let l = n.concat({
                                    i: r,
                                    letter: s,
                                    substitution: u.parents.join("")
                                });
                                if (this.helper({
                                        onlyFullSub: e,
                                        isFullSub: t,
                                        index: h + 1,
                                        subIndex: r + s.length,
                                        changes: l,
                                        lastSubLetter: u.parents.join(""),
                                        consecutiveSubCount: a === u.parents.join("") ? i + 1 : 1
                                    }), this.buffer.pop(), this.finalPasswords.length >= this.limit) return
                            }
                        }
                    }
                    if (!e || !o) {
                        let l = this.substr.charAt(s);
                        this.buffer.push(l), this.helper({
                            onlyFullSub: e,
                            isFullSub: t && !o,
                            index: s + 1,
                            subIndex: r + 1,
                            changes: n,
                            lastSubLetter: a,
                            consecutiveSubCount: i
                        }), this.buffer.pop()
                    }
                }
                getAll() {
                    return this.helper({
                        onlyFullSub: !0,
                        isFullSub: !0,
                        index: 0,
                        subIndex: 0,
                        changes: [],
                        lastSubLetter: void 0,
                        consecutiveSubCount: 0
                    }), this.helper({
                        onlyFullSub: !1,
                        isFullSub: !0,
                        index: 0,
                        subIndex: 0,
                        changes: [],
                        lastSubLetter: void 0,
                        consecutiveSubCount: 0
                    }), this.finalPasswords
                }
            }
            let z = (e, t, s) => new O({
                    substr: e,
                    limit: t,
                    trieRoot: s
                }).getAll(),
                N = (e, t, s) => {
                    let r = e.changes.filter(e => e.i < t).reduce((e, t) => e - t.letter.length + t.substitution.length, t),
                        n = e.changes.filter(e => e.i >= t && e.i <= s),
                        a = n.reduce((e, t) => e - t.letter.length + t.substitution.length, s - t + r),
                        i = [],
                        l = [];
                    return n.forEach(e => {
                        0 > i.findIndex(t => t.letter === e.letter && t.substitution === e.substitution) && (i.push({
                            letter: e.letter,
                            substitution: e.substitution
                        }), l.push(`${e.substitution} -> ${e.letter}`))
                    }), {
                        i: r,
                        j: a,
                        subs: i,
                        subDisplay: l.join(", ")
                    }
                };
            class W {
                constructor(e) {
                    this.defaultMatch = e
                }
                isAlreadyIncluded(e, t) {
                    return e.some(e => Object.entries(e).every(([e, s]) => "subs" === e || s === t[e]))
                }
                match({
                    password: e
                }) {
                    let t = [],
                        s = z(e, P.l33tMaxSubstitutions, P.trieNodeRoot),
                        r = !1,
                        n = !0;
                    return s.forEach(s => {
                        if (r) return;
                        let a = this.defaultMatch({
                            password: s.password,
                            useLevenshtein: n
                        });
                        n = !1, a.forEach(n => {
                            r || (r = 0 === n.i && n.j === e.length - 1);
                            let a = N(s, n.i, n.j),
                                i = e.slice(a.i, +a.j + 1 || 9e9),
                                l = { ...n,
                                    l33t: !0,
                                    token: i,
                                    ...a
                                },
                                o = this.isAlreadyIncluded(t, l);
                            i.toLowerCase() === n.matchedWord || o || t.push(l)
                        })
                    }), t.filter(e => e.token.length > 1)
                }
            }
            class F {
                constructor() {
                    this.l33t = new W(this.defaultMatch), this.reverse = new R(this.defaultMatch)
                }
                match({
                    password: e
                }) {
                    return n([...this.defaultMatch({
                        password: e
                    }), ...this.reverse.match({
                        password: e
                    }), ...this.l33t.match({
                        password: e
                    })])
                }
                defaultMatch({
                    password: e,
                    useLevenshtein: t = !0
                }) {
                    let s = [],
                        r = e.length,
                        n = e.toLowerCase();
                    return Object.keys(P.rankedDictionaries).forEach(a => {
                        let i = P.rankedDictionaries[a],
                            l = Math.min(P.rankedDictionariesMaxWordSize[a], r);
                        for (let o = 0; o < r; o += 1) {
                            let h = Math.min(o + l, r);
                            for (let l = o; l < h; l += 1) {
                                let h = n.slice(o, +l + 1 || 9e9),
                                    u = h in i,
                                    c = {},
                                    d = 0 === o && l === r - 1;
                                P.useLevenshteinDistance && d && !u && t && (c = j(h, i, P.levenshteinThreshold));
                                let g = 0 !== Object.keys(c).length;
                                if (u || g) {
                                    let t = i[g ? c.levenshteinDistanceEntry : h];
                                    s.push({
                                        pattern: "dictionary",
                                        i: o,
                                        j: l,
                                        token: e.slice(o, +l + 1 || 9e9),
                                        matchedWord: h,
                                        rank: t,
                                        dictionaryName: a,
                                        reversed: !1,
                                        l33t: !1,
                                        ...c
                                    })
                                }
                            }
                        }
                    }), s
                }
            }
            class q {
                match({
                    password: e,
                    regexes: t = y
                }) {
                    let s = [];
                    return Object.keys(t).forEach(r => {
                        let n;
                        let a = t[r];
                        for (a.lastIndex = 0; n = a.exec(e);)
                            if (n) {
                                let e = n[0];
                                s.push({
                                    pattern: "regex",
                                    token: e,
                                    i: n.index,
                                    j: n.index + n[0].length - 1,
                                    regexName: r,
                                    regexMatch: n
                                })
                            }
                    }), n(s)
                }
            }
            var Y = {
                nCk(e, t) {
                    let s = e;
                    if (t > s) return 0;
                    if (0 === t) return 1;
                    let r = 1;
                    for (let e = 1; e <= t; e += 1) r *= s, r /= e, s -= 1;
                    return r
                },
                log10: e => 0 === e ? 0 : Math.log(e) / Math.log(10),
                log2: e => Math.log(e) / Math.log(2),
                factorial(e) {
                    let t = 1;
                    for (let s = 2; s <= e; s += 1) t *= s;
                    return t
                }
            };
            let $ = e => {
                let t = e.split(""),
                    s = t.filter(e => e.match(f)).length,
                    r = t.filter(e => e.match(g)).length,
                    n = 0,
                    a = Math.min(s, r);
                for (let e = 1; e <= a; e += 1) n += Y.nCk(s + r, e);
                return n
            };
            var _ = e => {
                let t = e.replace(p, "");
                if (t.match(d) || t.toLowerCase() === t) return 1;
                let s = [l, o, u],
                    r = s.length;
                for (let e = 0; e < r; e += 1) {
                    let r = s[e];
                    if (t.match(r)) return 2
                }
                return $(t)
            };
            let G = (e, t) => {
                    let s = 0,
                        r = e.indexOf(t);
                    for (; r >= 0;) s += 1, r = e.indexOf(t, r + t.length);
                    return s
                },
                Z = ({
                    sub: e,
                    token: t
                }) => {
                    let s = t.toLowerCase();
                    return {
                        subbedCount: G(s, e.substitution),
                        unsubbedCount: G(s, e.letter)
                    }
                };
            var U = ({
                l33t: e,
                subs: t,
                token: s
            }) => {
                if (!e) return 1;
                let r = 1;
                return t.forEach(e => {
                    let {
                        subbedCount: t,
                        unsubbedCount: n
                    } = Z({
                        sub: e,
                        token: s
                    });
                    if (0 === t || 0 === n) r *= 2;
                    else {
                        let e = Math.min(n, t),
                            s = 0;
                        for (let r = 1; r <= e; r += 1) s += Y.nCk(n + t, r);
                        r *= s
                    }
                }), r
            };
            let B = e => {
                    let t = 0;
                    return Object.keys(e).forEach(s => {
                        let r = e[s];
                        t += r.filter(e => !!e).length
                    }), t /= Object.entries(e).length
                },
                H = ({
                    token: e,
                    graph: t,
                    turns: s
                }) => {
                    let r = Object.keys(P.graphs[t]).length,
                        n = B(P.graphs[t]),
                        a = 0,
                        i = e.length;
                    for (let e = 2; e <= i; e += 1) {
                        let t = Math.min(s, e - 1);
                        for (let s = 1; s <= t; s += 1) a += Y.nCk(e - 1, s - 1) * r * n ** s
                    }
                    return a
                },
                V = (e, t) => {
                    let s = 1;
                    return e.token.length < t.length && (s = 1 === e.token.length ? 10 : 50), s
                },
                X = {
                    bruteforce: ({
                        token: e
                    }) => {
                        let t = 10 ** e.length;
                        return t === Number.POSITIVE_INFINITY && (t = Number.MAX_VALUE), Math.max(t, 1 === e.length ? 11 : 51)
                    },
                    date: ({
                        year: e,
                        separator: t
                    }) => {
                        let s = 365 * Math.max(Math.abs(e - b), 20);
                        return t && (s *= 4), s
                    },
                    dictionary: ({
                        rank: e,
                        reversed: t,
                        l33t: s,
                        subs: r,
                        token: n,
                        dictionaryName: a
                    }) => {
                        let i;
                        let l = _(n),
                            o = U({
                                l33t: s,
                                subs: r,
                                token: n
                            });
                        return i = "diceware" === a ? 3888 : e * l * o * (t && 2 || 1), {
                            baseGuesses: e,
                            uppercaseVariations: l,
                            l33tVariations: o,
                            calculation: i
                        }
                    },
                    regex: ({
                        regexName: e,
                        regexMatch: t,
                        token: s
                    }) => {
                        let r = {
                            alphaLower: 26,
                            alphaUpper: 26,
                            alpha: 52,
                            alphanumeric: 62,
                            digits: 10,
                            symbols: 33
                        };
                        return e in r ? r[e] ** s.length : "recentYear" === e ? Math.max(Math.abs(parseInt(t[0], 10) - b), 20) : 0
                    },
                    repeat: ({
                        baseGuesses: e,
                        repeatCount: t
                    }) => e * t,
                    sequence: ({
                        token: e,
                        ascending: t
                    }) => {
                        let s = e.charAt(0),
                            r = 0;
                        return r = ["a", "A", "z", "Z", "0", "1", "9"].includes(s) ? 4 : s.match(/\d/) ? 10 : 26, t || (r *= 2), r * e.length
                    },
                    spatial: ({
                        graph: e,
                        token: t,
                        shiftedCount: s,
                        turns: r
                    }) => {
                        let n = H({
                            token: t,
                            graph: e,
                            turns: r
                        });
                        if (s) {
                            let e = t.length - s;
                            if (0 === s || 0 === e) n *= 2;
                            else {
                                let t = 0;
                                for (let r = 1; r <= Math.min(s, e); r += 1) t += Y.nCk(s + e, r);
                                n *= t
                            }
                        }
                        return Math.round(n)
                    },
                    separator: () => x
                },
                K = (e, t) => X[e] ? X[e](t) : P.matchers[e] && "scoring" in P.matchers[e] ? P.matchers[e].scoring(t) : 0;
            var J = (e, t) => {
                let s = {};
                if ("guesses" in e && null != e.guesses) return e;
                let r = V(e, t),
                    n = K(e.pattern, e),
                    a = 0;
                "number" == typeof n ? a = n : "dictionary" === e.pattern && (a = n.calculation, s.baseGuesses = n.baseGuesses, s.uppercaseVariations = n.uppercaseVariations, s.l33tVariations = n.l33tVariations);
                let i = Math.max(a, r);
                return { ...e,
                    ...s,
                    guesses: i,
                    guessesLog10: Y.log10(i)
                }
            };
            let Q = {
                password: "",
                optimal: {},
                excludeAdditive: !1,
                separatorRegex: void 0,
                fillArray(e, t) {
                    let s = [];
                    for (let r = 0; r < e; r += 1) {
                        let e = [];
                        "object" === t && (e = {}), s.push(e)
                    }
                    return s
                },
                makeBruteforceMatch(e, t) {
                    return {
                        pattern: "bruteforce",
                        token: this.password.slice(e, +t + 1 || 9e9),
                        i: e,
                        j: t
                    }
                },
                update(e, t) {
                    let s = e.j,
                        r = J(e, this.password),
                        n = r.guesses;
                    t > 1 && (n *= this.optimal.pi[r.i - 1][t - 1]);
                    let a = Y.factorial(t) * n;
                    this.excludeAdditive || (a += 1e4 ** (t - 1));
                    let i = !1;
                    Object.keys(this.optimal.g[s]).forEach(e => {
                        let r = this.optimal.g[s][e];
                        parseInt(e, 10) <= t && r <= a && (i = !0)
                    }), i || (this.optimal.g[s][t] = a, this.optimal.m[s][t] = r, this.optimal.pi[s][t] = n)
                },
                bruteforceUpdate(e) {
                    let t = this.makeBruteforceMatch(0, e);
                    this.update(t, 1);
                    for (let s = 1; s <= e; s += 1) {
                        t = this.makeBruteforceMatch(s, e);
                        let r = this.optimal.m[s - 1];
                        Object.keys(r).forEach(e => {
                            "bruteforce" !== r[e].pattern && this.update(t, parseInt(e, 10) + 1)
                        })
                    }
                },
                unwind(e) {
                    let t = [],
                        s = e - 1,
                        r = 0,
                        n = 2e308,
                        a = this.optimal.g[s];
                    for (a && Object.keys(a).forEach(e => {
                            let t = a[e];
                            t < n && (r = parseInt(e, 10), n = t)
                        }); s >= 0;) {
                        let e = this.optimal.m[s][r];
                        t.unshift(e), s = e.i - 1, r -= 1
                    }
                    return t
                }
            };
            var ee = {
                mostGuessableMatchSequence(e, t, s = !1) {
                    Q.password = e, Q.excludeAdditive = s;
                    let r = e.length,
                        n = Q.fillArray(r, "array");
                    t.forEach(e => {
                        n[e.j].push(e)
                    }), n = n.map(e => e.sort((e, t) => e.i - t.i)), Q.optimal = {
                        m: Q.fillArray(r, "object"),
                        pi: Q.fillArray(r, "object"),
                        g: Q.fillArray(r, "object")
                    };
                    for (let e = 0; e < r; e += 1) n[e].forEach(e => {
                        e.i > 0 ? Object.keys(Q.optimal.m[e.i - 1]).forEach(t => {
                            Q.update(e, parseInt(t, 10) + 1)
                        }) : Q.update(e, 1)
                    }), Q.bruteforceUpdate(e);
                    let a = Q.unwind(r),
                        i = a.length,
                        l = this.getGuesses(e, i);
                    return {
                        password: e,
                        guesses: l,
                        guessesLog10: Y.log10(l),
                        sequence: a
                    }
                },
                getGuesses(e, t) {
                    let s = e.length;
                    return 0 === e.length ? 1 : Q.optimal.g[s - 1][t]
                }
            };
            class et {
                match({
                    password: e,
                    omniMatch: t
                }) {
                    let s = [],
                        r = 0;
                    for (; r < e.length;) {
                        let n = this.getGreedyMatch(e, r),
                            a = this.getLazyMatch(e, r);
                        if (null == n) break;
                        let {
                            match: i,
                            baseToken: l
                        } = this.setMatchToken(n, a);
                        if (i) {
                            let e = i.index + i[0].length - 1,
                                n = this.getBaseGuesses(l, t);
                            s.push(this.normalizeMatch(l, e, i, n)), r = e + 1
                        }
                    }
                    return s.some(e => e instanceof Promise) ? Promise.all(s) : s
                }
                normalizeMatch(e, t, s, r) {
                    let n = {
                        pattern: "repeat",
                        i: s.index,
                        j: t,
                        token: s[0],
                        baseToken: e,
                        baseGuesses: 0,
                        repeatCount: s[0].length / e.length
                    };
                    return r instanceof Promise ? r.then(e => ({ ...n,
                        baseGuesses: e
                    })) : { ...n,
                        baseGuesses: r
                    }
                }
                getGreedyMatch(e, t) {
                    let s = /(.+)\1+/g;
                    return s.lastIndex = t, s.exec(e)
                }
                getLazyMatch(e, t) {
                    let s = /(.+?)\1+/g;
                    return s.lastIndex = t, s.exec(e)
                }
                setMatchToken(e, t) {
                    let s;
                    let r = "";
                    if (t && e[0].length > t[0].length) {
                        s = e;
                        let t = /^(.+?)\1+$/.exec(s[0]);
                        t && (r = t[1])
                    } else(s = t) && (r = s[1]);
                    return {
                        match: s,
                        baseToken: r
                    }
                }
                getBaseGuesses(e, t) {
                    let s = t.match(e);
                    return s instanceof Promise ? s.then(t => ee.mostGuessableMatchSequence(e, t).guesses) : ee.mostGuessableMatchSequence(e, s).guesses
                }
            }
            class es {
                constructor() {
                    this.MAX_DELTA = 5
                }
                match({
                    password: e
                }) {
                    let t = [];
                    if (1 === e.length) return [];
                    let s = 0,
                        r = null,
                        n = e.length;
                    for (let a = 1; a < n; a += 1) {
                        let n = e.charCodeAt(a) - e.charCodeAt(a - 1);
                        if (null == r && (r = n), n !== r) {
                            let i = a - 1;
                            this.update({
                                i: s,
                                j: i,
                                delta: r,
                                password: e,
                                result: t
                            }), s = i, r = n
                        }
                    }
                    return this.update({
                        i: s,
                        j: n - 1,
                        delta: r,
                        password: e,
                        result: t
                    }), t
                }
                update({
                    i: e,
                    j: t,
                    delta: s,
                    password: r,
                    result: n
                }) {
                    if (t - e > 1 || 1 === Math.abs(s)) {
                        let a = Math.abs(s);
                        if (a > 0 && a <= this.MAX_DELTA) {
                            let a = r.slice(e, +t + 1 || 9e9),
                                {
                                    sequenceName: i,
                                    sequenceSpace: l
                                } = this.getSequence(a);
                            return n.push({
                                pattern: "sequence",
                                i: e,
                                j: t,
                                token: r.slice(e, +t + 1 || 9e9),
                                sequenceName: i,
                                sequenceSpace: l,
                                ascending: s > 0
                            })
                        }
                    }
                    return null
                }
                getSequence(e) {
                    let t = "unicode",
                        s = 26;
                    return c.test(e) ? (t = "lower", s = 26) : h.test(e) ? (t = "upper", s = 26) : m.test(e) && (t = "digits", s = 10), {
                        sequenceName: t,
                        sequenceSpace: s
                    }
                }
            }
            class er {
                constructor() {
                    this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/
                }
                match({
                    password: e
                }) {
                    let t = [];
                    return Object.keys(P.graphs).forEach(s => {
                        let n = P.graphs[s];
                        r(t, this.helper(e, n, s))
                    }), n(t)
                }
                checkIfShifted(e, t, s) {
                    return !e.includes("keypad") && this.SHIFTED_RX.test(t.charAt(s)) ? 1 : 0
                }
                helper(e, t, s) {
                    let r;
                    let n = [],
                        a = 0,
                        i = e.length;
                    for (; a < i - 1;) {
                        let l = a + 1,
                            o = null,
                            h = 0;
                        for (r = this.checkIfShifted(s, e, a);;) {
                            let u = t[e.charAt(l - 1)] || [],
                                c = !1,
                                d = -1,
                                g = -1;
                            if (l < i) {
                                let t = e.charAt(l),
                                    s = u.length;
                                for (let e = 0; e < s; e += 1) {
                                    let s = u[e];
                                    if (g += 1, s) {
                                        let e = s.indexOf(t);
                                        if (-1 !== e) {
                                            c = !0, 1 === e && (r += 1), o !== (d = g) && (h += 1, o = d);
                                            break
                                        }
                                    }
                                }
                            }
                            if (c) l += 1;
                            else {
                                l - a > 2 && n.push({
                                    pattern: "spatial",
                                    i: a,
                                    j: l - 1,
                                    token: e.slice(a, l),
                                    graph: s,
                                    turns: h,
                                    shiftedCount: r
                                }), a = l;
                                break
                            }
                        }
                    }
                    return n
                }
            }
            let en = RegExp(`[${k.join("")}]`);
            class ea {
                static getMostUsedSeparatorChar(e) {
                    let t = [...e.split("").filter(e => en.test(e)).reduce((e, t) => {
                        let s = e.get(t);
                        return s ? e.set(t, s + 1) : e.set(t, 1), e
                    }, new Map).entries()].sort(([e, t], [s, r]) => r - t);
                    if (!t.length) return;
                    let s = t[0];
                    if (!(s[1] < 2)) return s[0]
                }
                static getSeparatorRegex(e) {
                    return RegExp(`([^${e}
])(${e})(?!${e})`, "g")
                }
                match({
                    password: e
                }) {
                    let t = [];
                    if (0 === e.length) return t;
                    let s = ea.getMostUsedSeparatorChar(e);
                    if (void 0 === s) return t;
                    let r = ea.getSeparatorRegex(s);
                    for (let n of e.matchAll(r)) {
                        if (void 0 === n.index) continue;
                        let e = n.index + 1;
                        t.push({
                            pattern: "separator",
                            token: s,
                            i: e,
                            j: e
                        })
                    }
                    return t
                }
            }
            class ei {
                constructor() {
                    this.matchers = {
                        date: M,
                        dictionary: F,
                        regex: q,
                        repeat: et,
                        sequence: es,
                        spatial: er,
                        separator: ea
                    }
                }
                match(e) {
                    let t = [],
                        s = [];
                    return ([...Object.keys(this.matchers), ...Object.keys(P.matchers)].forEach(n => {
                        if (!this.matchers[n] && !P.matchers[n]) return;
                        let a = new(this.matchers[n] ? this.matchers[n] : P.matchers[n].Matching)().match({
                            password: e,
                            omniMatch: this
                        });
                        a instanceof Promise ? (a.then(e => {
                            r(t, e)
                        }), s.push(a)) : r(t, a)
                    }), s.length > 0) ? new Promise((e, r) => {
                        Promise.all(s).then(() => {
                            e(n(t))
                        }).catch(e => {
                            r(e)
                        })
                    }) : n(t)
                }
            }
            let el = {
                second: 1,
                minute: 60,
                hour: 3600,
                day: 86400,
                month: 2678400,
                year: 0x1ea6e00,
                century: 321408e4
            };
            class eo {
                translate(e, t) {
                    let s = e;
                    void 0 !== t && 1 !== t && (s += "s");
                    let {
                        timeEstimation: r
                    } = P.translations;
                    return r[s].replace("{base}", `${t}`)
                }
                estimateAttackTimes(e) {
                    let t = {
                            onlineThrottling100PerHour: e / (100 / 3600),
                            onlineNoThrottling10PerSecond: e / 10,
                            offlineSlowHashing1e4PerSecond: e / 1e4,
                            offlineFastHashing1e10PerSecond: e / 1e10
                        },
                        s = {
                            onlineThrottling100PerHour: "",
                            onlineNoThrottling10PerSecond: "",
                            offlineSlowHashing1e4PerSecond: "",
                            offlineFastHashing1e10PerSecond: ""
                        };
                    return Object.keys(t).forEach(e => {
                        let r = t[e];
                        s[e] = this.displayTime(r)
                    }), {
                        crackTimesSeconds: t,
                        crackTimesDisplay: s,
                        score: this.guessesToScore(e)
                    }
                }
                guessesToScore(e) {
                    return e < 1005 ? 0 : e < 1000005 ? 1 : e < 0x5f5e105 ? 2 : e < 0x2540be405 ? 3 : 4
                }
                displayTime(e) {
                    let t, s = "centuries",
                        r = Object.keys(el),
                        n = r.findIndex(t => e < el[t]);
                    return n > -1 && (s = r[n - 1], 0 !== n ? t = Math.round(e / el[s]) : s = "ltSecond"), this.translate(s, t)
                }
            }
            var eh = () => null,
                eu = () => ({
                    warning: P.translations.warnings.dates,
                    suggestions: [P.translations.suggestions.dates]
                });
            let ec = (e, t) => {
                    let s = null;
                    return !t || e.l33t || e.reversed ? e.guessesLog10 <= 4 && (s = P.translations.warnings.similarToCommon) : s = e.rank <= 10 ? P.translations.warnings.topTen : e.rank <= 100 ? P.translations.warnings.topHundred : P.translations.warnings.common, s
                },
                ed = (e, t) => {
                    let s = null;
                    return t && (s = P.translations.warnings.wordByItself), s
                },
                eg = (e, t) => t ? P.translations.warnings.namesByThemselves : P.translations.warnings.commonNames,
                ef = (e, t) => {
                    let s = null,
                        r = e.dictionaryName,
                        n = "lastnames" === r || r.toLowerCase().includes("firstnames");
                    return "passwords" === r ? s = ec(e, t) : r.includes("wikipedia") ? s = ed(e, t) : n ? s = eg(e, t) : "userInputs" === r && (s = P.translations.warnings.userInputs), s
                };
            var ep = (e, t) => {
                    let s = ef(e, t),
                        r = [],
                        n = e.token;
                    return n.match(l) ? r.push(P.translations.suggestions.capitalization) : n.match(u) && n.toLowerCase() !== n && r.push(P.translations.suggestions.allUppercase), e.reversed && e.token.length >= 4 && r.push(P.translations.suggestions.reverseWords), e.l33t && r.push(P.translations.suggestions.l33t), {
                        warning: s,
                        suggestions: r
                    }
                },
                em = e => "recentYear" === e.regexName ? {
                    warning: P.translations.warnings.recentYears,
                    suggestions: [P.translations.suggestions.recentYears, P.translations.suggestions.associatedYears]
                } : {
                    warning: null,
                    suggestions: []
                },
                eb = e => {
                    let t = P.translations.warnings.extendedRepeat;
                    return 1 === e.baseToken.length && (t = P.translations.warnings.simpleRepeat), {
                        warning: t,
                        suggestions: [P.translations.suggestions.repeated]
                    }
                },
                ey = () => ({
                    warning: P.translations.warnings.sequences,
                    suggestions: [P.translations.suggestions.sequences]
                }),
                ek = e => {
                    let t = P.translations.warnings.keyPattern;
                    return 1 === e.turns && (t = P.translations.warnings.straightRow), {
                        warning: t,
                        suggestions: [P.translations.suggestions.longerKeyboardPattern]
                    }
                },
                ex = () => null;
            let eM = {
                warning: null,
                suggestions: []
            };
            class ew {
                constructor() {
                    this.matchers = {
                        bruteforce: eh,
                        date: eu,
                        dictionary: ep,
                        regex: em,
                        repeat: eb,
                        sequence: ey,
                        spatial: ek,
                        separator: ex
                    }, this.defaultFeedback = {
                        warning: null,
                        suggestions: []
                    }, this.setDefaultSuggestions()
                }
                setDefaultSuggestions() {
                    this.defaultFeedback.suggestions.push(P.translations.suggestions.useWords, P.translations.suggestions.noNeed)
                }
                getFeedback(e, t) {
                    if (0 === t.length) return this.defaultFeedback;
                    if (e > 2) return eM;
                    let s = P.translations.suggestions.anotherWord,
                        r = this.getLongestMatch(t),
                        n = this.getMatchFeedback(r, 1 === t.length);
                    return null != n ? n.suggestions.unshift(s) : n = {
                        warning: null,
                        suggestions: [s]
                    }, n
                }
                getLongestMatch(e) {
                    let t = e[0];
                    return e.slice(1).forEach(e => {
                        e.token.length > t.token.length && (t = e)
                    }), t
                }
                getMatchFeedback(e, t) {
                    return this.matchers[e.pattern] ? this.matchers[e.pattern](e, t) : P.matchers[e.pattern] && "feedback" in P.matchers[e.pattern] ? P.matchers[e.pattern].feedback(e, t) : eM
                }
            }
            let eS = () => new Date().getTime(),
                ev = (e, t, s) => {
                    let r = new ew,
                        n = new eo,
                        a = ee.mostGuessableMatchSequence(t, e),
                        i = eS() - s,
                        l = n.estimateAttackTimes(a.guesses);
                    return {
                        calcTime: i,
                        ...a,
                        ...l,
                        feedback: r.getFeedback(l.score, a.sequence)
                    }
                },
                eI = (e, t) => (t && P.extendUserInputsDictionary(t), new ei().match(e)),
                eA = async (e, t) => {
                    let s = e.substring(0, P.maxLength),
                        r = eS();
                    return ev(await eI(s, t), s, r)
                }
        },
        3304: (e, t, s) => {
            s.d(t, {
                Z: () => r
            });
            let r = (0, s(71850).Z)("EyeOff", [
                ["path", {
                    d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
                    key: "1jxqfv"
                }],
                ["path", {
                    d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
                    key: "9wicm4"
                }],
                ["path", {
                    d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
                    key: "1jreej"
                }],
                ["line", {
                    x1: "2",
                    x2: "22",
                    y1: "2",
                    y2: "22",
                    key: "a6p6uj"
                }]
            ])
        },
        37737: (e, t, s) => {
            s.d(t, {
                Z: () => r
            });
            let r = (0, s(71850).Z)("Eye", [
                ["path", {
                    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
                    key: "rwhkz3"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        87094: (e, t, s) => {
            s.d(t, {
                cI: () => r.c
            });
            var r = s(52880)
        }
    }
]);