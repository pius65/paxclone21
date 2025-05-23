/*! For license information please see init.4e02050bca448f127b3f.js.LICENSE.txt */
(() => {
    "use strict";
    var e, t, o = {
            955: (e, t, o) => {
                o.d(t, {
                    VW: () => l,
                    Wo: () => c,
                    fj: () => d,
                    l2: () => s,
                    t9: () => a,
                    w$: () => u
                });
                var r = o(665),
                    n = o(260),
                    i = function(e, t, o, r) {
                        return new(o || (o = Promise))((function(n, i) {
                            function s(e) {
                                try {
                                    d(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    d(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function d(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            d((r = r.apply(e, t || [])).next())
                        }))
                    };
                const s = e => i(void 0, [e], void 0, (function*({
                        config: e,
                        sessionId: t,
                        visitorId: o
                    }) {
                        const i = {
                            key: e.projectKey,
                            sessionId: t,
                            visitorId: o
                        };
                        e.userId && (i.userId = e.userId);
                        const {
                            data: s,
                            response: a
                        } = yield r.F("/rec/setup-recording/website", {
                            method: "POST",
                            abortPreviousRequest: !1,
                            baseUrl: e.managerHost,
                            body: JSON.stringify(i),
                            credentials: "include",
                            logPayloadOnError: !0,
                            throwOnConvert: !0
                        });
                        return s.ok && s.recordingAllowed ? (e.isRelayProxy && (s.recording.assetsHost = n.c(e.host, "/assets").toString(), s.recording.writerHost = n.c(e.host, "/web-writer").toString()), {
                            response: a,
                            setupData: s
                        }) : {
                            response: a,
                            setupData: s
                        }
                    })),
                    a = e => i(void 0, [e], void 0, (function*({
                        managerHost: e,
                        projectKey: t,
                        sessionId: o
                    }) {
                        const {
                            data: n
                        } = yield r.F(`/rec/sessions/${o}/active?projectKey=${t}`, {
                            method: "GET",
                            abortPreviousRequest: !0,
                            baseUrl: e,
                            throwOnConvert: !0
                        });
                        return n
                    })),
                    d = e => i(void 0, [e], void 0, (function*({
                        assetsHost: e,
                        urls: t
                    }) {
                        yield r.F("/cache", {
                            method: "POST",
                            abortPreviousRequest: !1,
                            baseUrl: e,
                            body: JSON.stringify(t),
                            waitForOnlineStatus: !0
                        })
                    })),
                    l = ({
                        assetsHost: e,
                        urls: t
                    }) => r.T("/cache", {
                        baseUrl: e,
                        body: JSON.stringify(t)
                    }),
                    c = e => i(void 0, [e], void 0, (function*({
                        formData: e,
                        isFromPreviousRecord: t,
                        recordId: o,
                        sessionId: n,
                        visitorId: i,
                        writerHost: s
                    }) {
                        let a = "/rec/v3/write";
                        if (window.URLSearchParams) {
                            const e = new URLSearchParams([
                                ["rid", o],
                                ["sid", n],
                                ["vid", i]
                            ]);
                            t && e.append("isFromPreviousRecord", "true"), a += `?${e.toString()}`
                        }
                        const {
                            data: d
                        } = yield r.F(a, {
                            method: "POST",
                            abortPreviousRequest: !1,
                            baseUrl: s,
                            body: e,
                            doNotRetryOnDocumentHidden: !0,
                            headers: {},
                            waitForOnlineStatus: !0
                        });
                        return d
                    })),
                    u = ({
                        formData: e,
                        isPartialChunk: t,
                        recordId: o,
                        retryCount: n,
                        sessionId: i,
                        visitorId: s,
                        writerHost: a
                    }) => {
                        let d = "/rec/v3/write";
                        if (window.URLSearchParams) {
                            const e = new URLSearchParams([
                                ["rid", o],
                                ["sid", i],
                                ["vid", s],
                                ["isPartialChunk", String(t)]
                            ]);
                            t || e.delete("isPartialChunk"), d += `?${e.toString()}`
                        }
                        return r.T(d, {
                            baseUrl: a,
                            body: e,
                            retryCount: n,
                            waitForOnlineStatus: !0
                        })
                    }
            },
            915: (e, t, o) => {
                var r;
                o.d(t, {
                        GX: () => n,
                        MG: () => i,
                        g4: () => r,
                        o7: () => s
                    }),
                    function(e) {
                        e.ACKNOWLEDGED = "SL__ACKNOWLEDGED", e.DISCOVERY = "SL__DISCOVERY", e.DISCOVERED = "SL__DISCOVERED", e.USER_ACTIVITY = "SL__USER_ACTIVITY", e.STOP_RECORDING = "SL__STOP_RECORD", e.START_RECORDING = "SL__START_RECORDING"
                    }(r || (r = {}));
                const n = e => {
                        if (e && "object" == typeof e && Object.hasOwn(e, "name")) {
                            const t = e.name;
                            if ("string" == typeof t && t.startsWith("SL__")) return !0
                        }
                        return !1
                    },
                    i = e => e.name === r.DISCOVERY,
                    s = e => e.name === r.DISCOVERED
            },
            735: (e, t, o) => {
                o.d(t, {
                    o: () => r
                });
                const r = (e, ...t) => {
                    window.smartlook.silent || console.warn(`[Smartlook] ${e}`, ...t)
                }
            },
            324: (e, t, o) => {
                o.d(t, {
                    q: () => i,
                    t: () => n
                });
                var r = o(185);
                class n extends r.f {
                    constructor(...e) {
                        super(...e), Object.setPrototypeOf(this, n.prototype)
                    }
                }
                class i extends r.f {
                    constructor(...e) {
                        super(...e), Object.setPrototypeOf(this, i.prototype)
                    }
                }
            },
            257: (e, t, o) => {
                o.d(t, {
                    $_: () => i,
                    NH: () => n,
                    Qd: () => r
                });
                const r = e => {
                        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
                        const t = Object.getPrototypeOf(e);
                        return null === t || t === Object.prototype
                    },
                    n = e => {
                        const t = {};
                        for (const [o, r] of Object.entries(e)) null !== r && "number" != typeof r && "string" != typeof r && "boolean" != typeof r || (t[o] = r);
                        return Object.entries(t).forEach((([e, o]) => {
                            ("function" == typeof o || "object" == typeof o && null !== o || "symbol" == typeof o) && delete t[e]
                        })), t
                    },
                    i = e => {
                        const t = Object.assign({}, e);
                        return Object.entries(t).forEach((([e, o]) => {
                            "" !== o && null != o || delete t[e]
                        })), t
                    }
            },
            654: (e, t, o) => {
                o.d(t, {
                    OW: () => r,
                    uX: () => i,
                    wL: () => s
                });
                const r = ["card", "credit", "expiry", "cvv", "cvc"],
                    n = ["cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type"],
                    i = (e, t = r) => {
                        var o;
                        const i = (null !== (o = e.getAttribute("autocomplete")) && void 0 !== o ? o : "").toLowerCase();
                        return !(!i || !n.some((e => i.includes(e)))) || Array.from(e.attributes).filter((e => "value" !== e.name)).flatMap((e => [e.name, e.value])).some((e => t.some((t => e.toLowerCase().includes(t)))))
                    },
                    s = new Set(["file", "password"])
            },
            757: (e, t, o) => {
                o.d(t, {
                    f4: () => c,
                    vS: () => u
                });
                var r = o(409),
                    n = o(185),
                    i = o(451),
                    s = o(311),
                    a = o(955),
                    d = function(e, t, o, r) {
                        return new(o || (o = Promise))((function(n, i) {
                            function s(e) {
                                try {
                                    d(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    d(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function d(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            d((r = r.apply(e, t || [])).next())
                        }))
                    };
                const l = (e, t, o) => d(void 0, void 0, void 0, (function*() {
                        try {
                            return s.R.debug("Calling active endpoint in init."), yield(0, a.t9)({
                                managerHost: t.managerHost,
                                projectKey: t.projectKey,
                                sessionId: e
                            })
                        } catch (e) {
                            e instanceof r.h ? (e.isConnectionError || s.R.warn("/active call failed on network error.", e), 404 === e.status && o.clearStorage()) : e instanceof n.f ? e.shouldReport && s.R.warn("/active call failed on recorder error.", e) : s.R.warn("/active call failed on unknown error.", e)
                        }
                        return null
                    })),
                    c = (e, t) => {
                        var o, r, n, i;
                        const s = [],
                            a = t.getCookieMetadataForProjectKey(e.projectKey);
                        s.push({
                            sessionId: null !== (o = null == a ? void 0 : a.sessionId) && void 0 !== o ? o : null,
                            visitorId: null !== (r = null == a ? void 0 : a.visitorId) && void 0 !== r ? r : null
                        });
                        const d = t.getLocalStorageMetadataForProjectKey(e.projectKey),
                            l = null !== (n = null == d ? void 0 : d.sessionId) && void 0 !== n ? n : null,
                            c = null !== (i = null == d ? void 0 : d.visitorId) && void 0 !== i ? i : null;
                        return s[0].sessionId === l && s[0].visitorId === c || s.push({
                            sessionId: l,
                            visitorId: c
                        }), s
                    },
                    u = (e, t, o, ...r) => d(void 0, [e, t, o, ...r], void 0, (function*(e, t, o, r = []) {
                        var n, s, a;
                        for (const s of e)
                            if (s.sessionId) {
                                if (r.includes(s.sessionId)) continue;
                                const e = yield l(s.sessionId, t, o);
                                if (null == e ? void 0 : e.isActive) return {
                                    sessionId: s.sessionId,
                                    sessionTimeRemaining: e.sessionTimeRemaining,
                                    visitorId: null !== (n = s.visitorId) && void 0 !== n ? n : i.$()
                                }
                            }
                        return o.clearAssetsStore(), {
                            sessionId: i.$(),
                            visitorId: null !== (a = null === (s = e.find((e => null !== e.visitorId))) || void 0 === s ? void 0 : s.visitorId) && void 0 !== a ? a : i.$()
                        }
                    }))
            },
            321: (e, t, o) => {
                o.d(t, {
                    e: () => s,
                    w: () => r
                });
                var r, n = o(257),
                    i = o(283);
                ! function(e) {
                    e.CLICK = "click", e.CUSTOM_EVENT = "custom event", e.IDENTIFY = "identify", e.PROPERTIES = "global event"
                }(r || (r = {}));
                const s = (e, t, o) => {
                    (0, i.Nu)(e, t);
                    const r = (0, n.NH)(e);
                    return (0, i.fB)(r, t, o)
                }
            },
            480: (e, t, o) => {
                o.d(t, {
                    c: () => i,
                    q: () => n
                });
                var r = o(257);
                const n = e => {
                        const t = (0, r.Qd)(e) ? JSON.stringify(e) : String(e);
                        return new Blob([t]).size
                    },
                    i = e => {
                        let t = 0;
                        return e.forEach(((e, o) => {
                            t += o.length, t += "string" == typeof e ? e.length : e.size
                        })), t
                    }
            },
            283: (e, t, o) => {
                o.d(t, {
                    EE: () => E,
                    I2: () => S,
                    M0: () => R,
                    Nu: () => y,
                    fB: () => b
                });
                var r = o(412),
                    n = o(553),
                    i = o(735),
                    s = o(257),
                    a = o(321),
                    d = o(480);
                const l = "https://web.developer.smartlook.com/docs",
                    c = `${l}/custom-click-properties`,
                    u = `${l}/error-logging#custom-errors-api`,
                    g = `${l}/custom-events#creating-custom-events`,
                    f = `${l}/custom-event-properties`,
                    h = `${l}/identify-visitor`,
                    p = `${l}/custom-navigation-event`,
                    v = e => (0, r.Kg)(e) && e.length > 0 && e.length <= 200,
                    m = e => (0, d.q)(e) <= 5e3,
                    w = (e, t) => {
                        const o = e.trim();
                        return o !== e && (0, i.o)(`Invalid format of string '${o}'. Please remove spaces at the beginning or at the end of the string. See more at ${k(t)}.`), o
                    },
                    y = (e, t) => {
                        const o = n.NC(e);
                        if (!(0, s.Qd)(o)) {
                            const e = (r = o, Object.prototype.toString.call(r).slice(8, -1).toLowerCase());
                            (0, i.o)(`Invalid type of ${t} properties. Expected plain object, got ${e}. See more at ${k(t)}`)
                        }
                        var r
                    },
                    b = (e, t, o = "") => {
                        const r = Object.assign({}, e);
                        for (const [n, s] of Object.entries(e)) {
                            const e = v(n),
                                a = m(s);
                            if (e && a || delete r[n], e) {
                                const e = w(n, t);
                                e !== n && (r[e] = r[n], delete r[n])
                            } else(0, i.o)(`${o?`${o}: `:""}Invalid name of ${t} property '${n}'. See more at ${k(t)}`);
                            a || (0, i.o)(`${o?`${o}: `:""}Invalid value of ${t} property '${n}' (${typeof s}). See more at ${k(t)}`, s)
                        }
                        return r
                    },
                    S = e => v(e) ? w(String(e), a.w.CUSTOM_EVENT) : ((0, i.o)(`Invalid custom event name '${e}'. See more at ${g}`), e),
                    R = e => {
                        var t;
                        if (t = e, (0, d.q)(t) <= 5e3) return e;
                        (0, i.o)(`Invalid error message. See more at ${u}`)
                    },
                    E = e => {
                        if ((e => (0, r.Kg)(e) && e.length > 0 && e.length <= 1e3)(e)) return e;
                        (0, i.o)(`Invalid navigation url '${e}'. See more at ${p}`)
                    },
                    k = e => {
                        var t;
                        return null !== (t = {
                            [a.w.CLICK]: c,
                            [a.w.CUSTOM_EVENT]: g,
                            [a.w.IDENTIFY]: h,
                            [a.w.PROPERTIES]: f
                        }[e]) && void 0 !== t ? t : l
                    }
            },
            153: (e, t, o) => {
                o.d(t, {
                    j: () => d
                });
                var r = o(41),
                    n = o(53),
                    i = o(311),
                    s = o(915);
                const a = ["mousemove", "click", "keypress", "touchmove", "drag", "wheel", "mouseover"],
                    d = e => {
                        return o = function*() {
                            const t = Array.from(document.querySelectorAll("iframe")),
                                o = [document];
                            for (const e of t) {
                                const t = r.xw(e);
                                t && o.push(t)
                            }
                            const d = [],
                                l = a.map((e => new Promise((t => {
                                    const r = e => {
                                        n.Q(e) && t()
                                    };
                                    for (const t of o) d.push((() => t.removeEventListener(e, r, !0))), t.addEventListener(e, r, !0)
                                }))));
                            e && l.push(e.waitForEventFromAnySource(s.g4.USER_ACTIVITY)), yield Promise.any(l);
                            for (const e of d) try {
                                e()
                            } catch (e) {
                                i.R.debug("Listener could not be removed", e)
                            }
                        }, new((t = void 0) || (t = Promise))((function(e, r) {
                            function n(e) {
                                try {
                                    s(o.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function i(e) {
                                try {
                                    s(o.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function s(o) {
                                var r;
                                o.done ? e(o.value) : (r = o.value, r instanceof t ? r : new t((function(e) {
                                    e(r)
                                }))).then(n, i)
                            }
                            s((o = o.apply(void 0, [])).next())
                        }));
                        var t, o
                    }
            },
            311: (e, t, o) => {
                var r;
                o.d(t, {
                        R: () => i
                    }),
                    function(e) {
                        e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR"
                    }(r || (r = {}));
                class n {
                    groupLoggingIntervalId = null;
                    groupsByKey = new Map;
                    isGroupLoggingEnabled = !1;
                    loggingLevel = null;
                    middlewares = [];
                    constructor() {}
                    debug = (e, ...t) => {
                        this.processMiddlewares("console", "debug", e, ...t), null !== this.loggingLevel && r.DEBUG >= this.loggingLevel && console.debug(e, ...t)
                    };
                    debugGroup = (e, ...t) => {
                        this.isGroupLoggingEnabled ? null !== this.loggingLevel && r.DEBUG >= this.loggingLevel && this.pushToGroup("debug", e, ...t) : this.debug(e, ...t)
                    };
                    debugNoConsole = (e, ...t) => {
                        this.processMiddlewares("internal", "debug", e, ...t)
                    };
                    enableGroupLogging = () => {
                        this.isGroupLoggingEnabled = !0, null !== this.groupLoggingIntervalId && (this.groupLoggingIntervalId = setInterval((() => {
                            const e = this.groupsByKey;
                            this.groupsByKey = new Map;
                            for (const [t, o] of e.entries()) {
                                console.groupCollapsed(t);
                                for (const [e, ...t] of o) console[e](...t);
                                console.groupEnd()
                            }
                        }), 1e3))
                    };
                    error = (e, ...t) => {
                        this.processMiddlewares("console", "error", e, ...t), null !== this.loggingLevel && r.ERROR >= this.loggingLevel && console.error(e, ...t)
                    };
                    errorGroup = (e, ...t) => {
                        this.isGroupLoggingEnabled ? null !== this.loggingLevel && r.ERROR >= this.loggingLevel && this.pushToGroup("error", e, ...t) : this.error(e, ...t)
                    };
                    errorNoConsole = (e, ...t) => {
                        this.processMiddlewares("internal", "error", e, ...t)
                    };
                    info = (e, ...t) => {
                        this.processMiddlewares("console", "info", e, ...t), null !== this.loggingLevel && r.INFO >= this.loggingLevel && console.log(e, ...t)
                    };
                    infoGroup = (e, ...t) => {
                        this.isGroupLoggingEnabled ? null !== this.loggingLevel && r.INFO >= this.loggingLevel && this.pushToGroup("info", e, ...t) : this.info(e, ...t)
                    };
                    infoNoConsole = (e, ...t) => {
                        this.processMiddlewares("internal", "info", e, ...t)
                    };
                    setLoggingLevel = e => {
                        this.loggingLevel = n.convertLogLevelToNumber(e)
                    };
                    setMiddleware = e => {
                        this.middlewares.push(e)
                    };
                    warn = (e, ...t) => {
                        this.processMiddlewares("console", "warn", e, ...t), null !== this.loggingLevel && r.WARN >= this.loggingLevel && console.warn(e, ...t)
                    };
                    warnGroup = (e, ...t) => {
                        this.isGroupLoggingEnabled ? null !== this.loggingLevel && r.WARN >= this.loggingLevel && this.pushToGroup("warn", e, ...t) : this.warn(e, ...t)
                    };
                    warnNoConsole = (e, ...t) => {
                        this.processMiddlewares("internal", "warn", e, ...t)
                    };
                    static convertLogLevelToNumber = e => {
                        switch (e) {
                            case "debug":
                                return r.DEBUG;
                            case "info":
                                return r.INFO;
                            case "warn":
                                return r.WARN;
                            default:
                                return r.ERROR
                        }
                    };
                    processMiddlewares = (e, t, o, ...r) => {
                        this.middlewares.forEach((n => n(e, t, o, ...r)))
                    };
                    pushToGroup(e, t, ...o) {
                        let r = this.groupsByKey.get(t);
                        r || (r = [], this.groupsByKey.set(t, r)), r.push([e, ...o])
                    }
                }
                const i = new n
            },
            185: (e, t, o) => {
                o.d(t, {
                    f: () => r
                });
                class r extends Error {
                    constructor(e, {
                        additionalData: t = {},
                        originalError: o,
                        shouldReport: n = !0
                    } = {}) {
                        super(e), Object.setPrototypeOf(this, r.prototype), this.name = "WebSDKError", this.additionalData = t, this.shouldReport = n, o && (this.originalName = o.name, this.originalStack = o.stack, this.originalMessage = o.message, this.originalError = o), o instanceof r && (this.originalAdditionalData = o.additionalData)
                    }
                    toJSON() {
                        return {
                            name: this.name,
                            additionalData: this.additionalData,
                            message: this.message,
                            originalAdditionalData: this.originalAdditionalData,
                            originalError: this.originalError,
                            originalMessage: this.originalMessage,
                            originalName: this.originalName,
                            originalStack: this.originalStack,
                            shouldReport: this.shouldReport,
                            stack: this.stack
                        }
                    }
                }
            },
            824: (e, t, o) => {
                o.d(t, {
                    bJ: () => r,
                    eu: () => n,
                    v2: () => i
                });
                const r = e => {
                        var t, o;
                        return null !== e && "object" == typeof e && (e instanceof Error || (null === (t = e.constructor.name) || void 0 === t ? void 0 : t.endsWith("Error")) || (null === (o = e.constructor.name) || void 0 === o ? void 0 : o.endsWith("Exception")))
                    },
                    n = e => r(e) && (e instanceof SyntaxError || "SyntaxError" === e.constructor.name),
                    i = e => {
                        return r(t = e) && (t instanceof DOMException || "DOMException" === t.constructor.name) && "SecurityError" === e.name;
                        var t
                    }
            },
            119: (e, t, o) => {
                o.d(t, {
                    V1: () => r,
                    ks: () => i,
                    qf: () => n
                });
                const r = e => null !== e && "object" == typeof e && "FormData" === e.constructor.name,
                    n = e => null !== e && "object" == typeof e && "Blob" === e.constructor.name,
                    i = e => null !== e && "object" == typeof e && "Request" === e.constructor.name
            },
            412: (e, t, o) => {
                o.d(t, {
                    Kg: () => r,
                    b0: () => i,
                    tR: () => n
                });
                const r = e => "string" == typeof e,
                    n = e => {
                        return "number" == typeof(t = e) && Number.isInteger(t) && e >= 0;
                        var t
                    },
                    i = e => void 0 === e
            },
            409: (e, t, o) => {
                o.d(t, {
                    h: () => r
                });
                class r extends Error {
                    get isConnectionError() {
                        return this.status < 0 && !this.isAbortedByRecorder && !this.isAbortedByUserAgent
                    }
                    get isAbortedByRecorder() {
                        return this.isSignalAborted
                    }
                    get isAbortedByUserAgent() {
                        var e;
                        return this.originalError instanceof Error && "AbortError" === (null === (e = this.originalError) || void 0 === e ? void 0 : e.name) && !this.isSignalAborted
                    }
                    constructor(e, t, o, n, i, s, a, d, l) {
                        super(e), this.status = t, this.responseTimingData = o, this.requestPayload = i, this.originalError = a, this.responseData = d, this.additionalData = l, this.name = "ApiError", Object.setPrototypeOf(this, r.prototype), this.responseDebugData = s ? (e => ({
                            type: e.type,
                            bodyUsed: e.bodyUsed,
                            headers: e.headers ? Array.from(e.headers) : void 0,
                            ok: e.ok,
                            redirected: e.redirected,
                            url: e.url
                        }))(s) : void 0, this.isSignalAborted = null == n ? void 0 : n.aborted, this.visibilityState = document.visibilityState, this.isOffline = !1 === navigator.onLine, this.wasBeaconFallbackUsed = !1
                    }
                }
            },
            665: (e, t, o) => {
                o.d(t, {
                    F: () => g,
                    T: () => f
                });
                var r = o(185),
                    n = o(311),
                    i = o(260);
                const s = () => {
                    return t = function*() {
                        navigator.onLine || (yield new Promise((e => {
                            const t = () => {
                                window.removeEventListener("online", t), e()
                            };
                            window.addEventListener("online", t), navigator.onLine && (e(), window.removeEventListener("online", t))
                        })))
                    }, new((e = void 0) || (e = Promise))((function(o, r) {
                        function n(e) {
                            try {
                                s(t.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function i(e) {
                            try {
                                s(t.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function s(t) {
                            var r;
                            t.done ? o(t.value) : (r = t.value, r instanceof e ? r : new e((function(e) {
                                e(r)
                            }))).then(n, i)
                        }
                        s((t = t.apply(void 0, [])).next())
                    }));
                    var e, t
                };
                var a = o(409),
                    d = function(e, t, o, r) {
                        return new(o || (o = Promise))((function(n, i) {
                            function s(e) {
                                try {
                                    d(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function a(e) {
                                try {
                                    d(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function d(e) {
                                var t;
                                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                                    e(t)
                                }))).then(s, a)
                            }
                            d((r = r.apply(e, t || [])).next())
                        }))
                    };
                const l = {
                        headers: {}
                    },
                    c = {
                        "Content-Type": "text/plain;charset=UTF-8"
                    },
                    u = new Map,
                    g = (e, t) => d(void 0, void 0, void 0, (function*() {
                        var {
                            abortPreviousRequest: o,
                            baseUrl: d,
                            body: g,
                            doNotRetryOnDocumentHidden: f = !1,
                            headers: h,
                            logPayloadOnError: p = !1,
                            retryCount: v = 3,
                            retryInterval: m = 1e3,
                            throwOnConvert: w = !1,
                            waitForOnlineStatus: y = !1
                        } = t, b = function(e, t) {
                            var o = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var n = 0;
                                for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]])
                            }
                            return o
                        }(t, ["abortPreviousRequest", "baseUrl", "body", "doNotRetryOnDocumentHidden", "headers", "logPayloadOnError", "retryCount", "retryInterval", "throwOnConvert", "waitForOnlineStatus"]);
                        const S = (0, i.c)(d, e);
                        let R = u.get(S.href);
                        R && o && (n.R.debug("Aborting previous request", S), R.abort("Aborted previous request.")), R = new AbortController, u.set(S.href, R);
                        const E = Object.assign(Object.assign(Object.assign(Object.assign({}, l), {
                            body: g
                        }), b), {
                            signal: R.signal
                        });
                        let k;
                        E.headers = void 0 === h ? c : h;
                        let O, I = null,
                            A = performance.now(),
                            M = 0,
                            L = -1;
                        for (let e = 1; e <= v; e++) {
                            y && (yield s()), L = e;
                            try {
                                if (1 === e) A = performance.now(), k = yield fetch(S.href, E);
                                else {
                                    const t = [],
                                        o = new Promise((t => {
                                            setTimeout((() => {
                                                t()
                                            }), m * Math.pow(2, e - 1))
                                        }));
                                    if (t.push(o), f) {
                                        const e = new Promise((e => {
                                            const t = () => {
                                                "hidden" === document.visibilityState && (document.removeEventListener("visibilitychange", t), e())
                                            };
                                            document.addEventListener("visibilitychange", t), "hidden" === document.visibilityState && (document.removeEventListener("visibilitychange", t), e())
                                        }));
                                        t.push(e)
                                    }
                                    if (yield Promise.race(t), f && "hidden" === document.visibilityState) throw new Error("Document is hidden and flag `doNotRetryOnDocumentHidden` is set to true.");
                                    y && (yield s()), A = performance.now(), k = yield fetch(S.href, E)
                                }
                                O = void 0
                            } catch (t) {
                                if (O = t, t instanceof Error && "AbortError" === t.name) throw u.delete(S.href), new a.h("Request was aborted.", -1, {
                                    fetchTotalMs: M,
                                    finalRetries: L
                                }, R.signal, p ? JSON.stringify(g) : "Payload not logged.", void 0, t);
                                if (e < v && (!f || "hidden" !== document.visibilityState)) continue
                            } finally {
                                M = performance.now() - A
                            }
                            if (u.delete(S.href), !k) throw new a.h(`API request to ${S.href} failed due to connection error.`, -1, {
                                fetchTotalMs: M,
                                finalRetries: L
                            }, R.signal, p ? JSON.stringify(g) : "Payload not logged.", void 0, O);
                            if (k.status > 399) {
                                try {
                                    I = yield k.json()
                                } catch (e) {
                                    if (e instanceof Error && ("AbortError" === e.name || "TypeError" === e.name)) throw new a.h(`API request to ${S.href} failed with status code ${k.status}.`, k.status, {
                                        fetchTotalMs: M,
                                        finalRetries: L
                                    }, R.signal, "Payload not logged.", k, e)
                                }
                                try {
                                    I || (I = yield k.text())
                                } catch (e) {
                                    if (e instanceof Error && ("AbortError" === e.name || "TypeError" === e.name)) throw new a.h(`API request to ${S.href} failed with status code ${k.status}.`, k.status, {
                                        fetchTotalMs: M,
                                        finalRetries: L
                                    }, R.signal, "Payload not logged.", k, e)
                                }
                                throw new a.h(`API request to ${S.href} failed with status code ${k.status}`, k.status, {
                                    fetchTotalMs: M,
                                    finalRetries: L
                                }, R.signal, p ? JSON.stringify(g) : "Payload not logged.", k, void 0, I)
                            }
                            if (204 === k.status) break;
                            try {
                                I = yield k.json();
                                break
                            } catch (t) {
                                if (t instanceof Error && ("AbortError" === t.name || "TypeError" === t.name) && e < v) continue;
                                if (w && t instanceof Error) throw "AbortError" === t.name || "TypeError" === t.name ? new a.h(`API request to ${S.href} failed due to connection error.`, -1, {
                                    fetchTotalMs: M,
                                    finalRetries: L
                                }, R.signal, p ? JSON.stringify(g) : "Payload not logged.", void 0, O) : new r.f(`Could not convert data to JSON in ${S.href} request`, {
                                    additionalData: {
                                        type: k.type,
                                        bodyUsed: k.bodyUsed,
                                        fetchTotalMs: M,
                                        finalRetries: L,
                                        headers: k.headers ? Array.from(k.headers) : void 0,
                                        ok: k.ok,
                                        online: navigator.onLine,
                                        originalErrorMessage: t.message,
                                        originalErrorName: t.name,
                                        redirected: k.redirected,
                                        status: k.status,
                                        url: k.url,
                                        visibility: document.visibilityState
                                    },
                                    originalError: t
                                });
                                if (w) throw new r.f(`Unknown error happened during API call. ${JSON.stringify(t)}`);
                                break
                            }
                        }
                        if (void 0 === k) throw new r.f("Response object is undefined.", {
                            shouldReport: !0
                        });
                        return {
                            data: I,
                            response: k
                        }
                    })),
                    f = (e, t) => d(void 0, [e, t], void 0, (function*(e, {
                        baseUrl: t,
                        body: o,
                        retryCount: r = 1,
                        waitForOnlineStatus: n
                    }) {
                        const a = (0, i.c)(t, e),
                            d = navigator.sendBeacon.bind(navigator);
                        for (; r > 0;) {
                            n && (yield s());
                            try {
                                if (d(a.href, o)) return !0;
                                continue
                            } catch (e) {
                                if (e instanceof TypeError && "Illegal invocation" === e.message) try {
                                    return yield fetch(a.href, {
                                        method: "POST",
                                        body: o,
                                        keepalive: !0
                                    }), !0
                                } catch (e) {
                                    return !1
                                }
                                throw e
                            } finally {
                                r -= 1
                            }
                        }
                        return !1
                    }))
            },
            53: (e, t, o) => {
                o.d(t, {
                    Q: () => r
                });
                const r = e => void 0 === e.isTrusted || e.isTrusted
            },
            451: (e, t, o) => {
                o.d(t, {
                    $: () => r
                });
                const r = () => ((e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce(((e, t) => e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_")), ""))()
            },
            41: (e, t, o) => {
                o.d(t, {
                    ni: () => r,
                    u5: () => i,
                    xw: () => n
                });
                const r = e => {
                        var t, o;
                        let r = null;
                        try {
                            r = null !== (o = null === (t = e.defaultView) || void 0 === t ? void 0 : t.frameElement) && void 0 !== o ? o : null
                        } catch (e) {}
                        return r
                    },
                    n = e => {
                        try {
                            return e.contentDocument
                        } catch (e) {}
                        return null
                    },
                    i = e => {
                        var t;
                        let o = null;
                        try {
                            o = null !== (t = e.frameElement) && void 0 !== t ? t : null
                        } catch (e) {}
                        return o
                    }
            },
            553: (e, t, o) => {
                o.d(t, {
                    NC: () => d,
                    As: () => a,
                    Fd: () => s,
                    mS: () => g
                });
                var r = o(824),
                    n = o(119),
                    i = o(795);
                const s = e => {
                        try {
                            if ((0, r.bJ)(e) && !Object.hasOwn(e, "toJSON")) return a(e);
                            if ("object" == typeof e && null !== e) {
                                const t = Object.keys(e);
                                if (1 === t.length && "isTrusted" === t[0]) return a(e)
                            }
                            if (["function", "symbol", "bigint", "undefined"].includes(typeof e)) return a(e);
                            const t = JSON.stringify(e);
                            return (0, i.G)(t)
                        } catch (t) {
                            return a(e)
                        }
                    },
                    a = (e, t) => {
                        try {
                            return (0, i.f)(d(e), t).stringified
                        } catch (e) {
                            return JSON.stringify("[non-serializable object]")
                        }
                    },
                    d = (e, t = new WeakMap) => {
                        let o;
                        return Array.isArray(e) ? e.map((e => d(e, t))) : (o = "object" == typeof e && null !== e ? e instanceof Element ? `[Element: ${e.tagName}]` : l(e, t) : ["function", "symbol", "bigint", "undefined"].includes(typeof e) ? typeof e : null === e || "number" == typeof e || "string" == typeof e || "boolean" == typeof e ? e : JSON.stringify(e), o)
                    },
                    l = (e, t) => {
                        let o;
                        const i = Object.keys(e);
                        if ((0, n.V1)(e)) {
                            const t = {};
                            e.forEach(((e, o) => {
                                t[o] = "string" == typeof e ? e : `[file:${e.type}][${e.name}]`
                            })), o = t
                        } else if ((0, r.bJ)(e) && !Object.hasOwn(e, "toJSON")) o = u(e);
                        else if (1 === i.length && "isTrusted" === i[0]) {
                            const t = Object.keys(Object.getPrototypeOf(e));
                            o = JSON.parse(JSON.stringify(e, [...i, ...t]))
                        } else o = c(t, e);
                        return o
                    },
                    c = (e, t) => {
                        if (e.has(t)) return "[circular]";
                        e.set(t, !0);
                        const o = [];
                        for (const [r, n] of Object.entries(t)) o.push([r, d(n, e)]);
                        return Object.fromEntries(o)
                    },
                    u = e => {
                        const t = JSON.parse(JSON.stringify(e));
                        return t.name || (t.name = e.name), t.stack || (t.stack = e.stack), t.message || (t.message = e.message), t
                    },
                    g = e => {
                        let t;
                        if (Array.isArray(e)) t = "[" + e.map((e => g(e))).join(",") + "]";
                        else if ("function" == typeof e || (o = e) instanceof RegExp || "object" == typeof o && null !== o && "RegExp" === o.constructor.name) t = e.toString();
                        else if ("boolean" == typeof e || void 0 === e) t = e;
                        else if ("object" == typeof e && null !== e) {
                            const o = [];
                            for (const [t, r] of Object.entries(e)) o.push([t, g(r)]);
                            t = `{${o.map((([e,t])=>`"${e}":${t}`)).join(",")}}`
                        } else t = JSON.stringify(e);
                        var o;
                        return t
                    }
            },
            795: (e, t, o) => {
                o.d(t, {
                    G: () => s,
                    f: () => i
                });
                var r = o(553);
                const n = "[smartlook-truncated]",
                    i = (e, t = 16384) => {
                        let o = JSON.stringify(e);
                        return o.length <= t ? {
                            isTruncated: !1,
                            stringified: o
                        } : (Array.isArray(e) ? o = ((e, t) => {
                            let o = "";
                            for (const i of e) {
                                if (t <= 0) {
                                    o += JSON.stringify(n) + ",";
                                    break
                                }
                                const e = (0, r.As)(i, t) + ",";
                                o += e, t -= e.length
                            }
                            return "[" + o.slice(0, Math.max(0, o.length - 1)) + "]"
                        })(e, t) : "object" == typeof e && null !== e ? o = ((e, t) => {
                            let o = "";
                            for (const [i, s] of Object.entries(e)) {
                                if (t <= 0) {
                                    o += JSON.stringify(n) + ":true,";
                                    break
                                }
                                const e = `"${i}":${(0,r.As)(s,t)},`;
                                o += e, t -= e.length
                            }
                            return "{" + o.slice(0, Math.max(0, o.length - 1)) + "}"
                        })(e, t) : "string" == typeof e ? o = JSON.stringify(n + "[string] " + e.slice(0, Math.max(0, t))) : "number" == typeof e && (o = JSON.stringify(n + "[number] " + String(e).slice(0, Math.max(0, t)))), {
                            isTruncated: !0,
                            stringified: o
                        })
                    },
                    s = (e, t = 16384) => e.length <= t ? e : JSON.stringify(n + "[string] " + e.slice(0, Math.max(0, t)))
            },
            260: (e, t, o) => {
                o.d(t, {
                    L: () => i,
                    c: () => r
                });
                const r = (e, t) => {
                        const o = new URL(/^https?:\/\//.test(r = e) ? r : `https://${r}`);
                        var r;
                        if (!t) return o;
                        let n = o.pathname;
                        return n.endsWith("/") && t.startsWith("/") && (n = n.slice(0, -1)), new URL(`${n}${t}`, o.origin)
                    },
                    n = [/:\/\/10(\.\w+){3}(:\w+)?\//, /:\/\/172\.(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31).\w+\.\w+(:\w+)?\//, /:\/\/192\.168(\.\w+){2}(:\w+)?\//, /:\/\/localhost(:\w+)?\//, /:\/\/127\.0\.0\.1(:\w+)?\//, /^file:\/{3}/],
                    i = e => n.some((t => t.test(e)))
            },
            645: (e, t, o) => {
                o.d(t, {
                    NM: () => i,
                    VP: () => n,
                    wp: () => r
                });
                const r = () => window.top === window,
                    n = e => {
                        try {
                            return Boolean(e.location.href)
                        } catch (e) {
                            return !1
                        }
                    },
                    i = () => {
                        if (r()) return !1;
                        try {
                            return Boolean(window.frameElement)
                        } catch (e) {
                            return !1
                        }
                    }
            }
        },
        r = {};

    function n(e) {
        var t = r[e];
        if (void 0 !== t) return t.exports;
        var i = r[e] = {
            exports: {}
        };
        return o[e](i, i.exports, n), i.exports
    }
    n.m = o, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, o) => (n.f[o](e, t), t)), [])), n.u = e => "bundle.eccdb719246c73f4af95.js", n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "@smartlook/recorder:", n.l = (o, r, i, s) => {
        if (e[o]) e[o].push(r);
        else {
            var a, d;
            if (void 0 !== i)
                for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                    var u = l[c];
                    if (u.getAttribute("src") == o || u.getAttribute("data-webpack") == t + i) {
                        a = u;
                        break
                    }
                }
            a || (d = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, n.nc && a.setAttribute("nonce", n.nc), a.setAttribute("data-webpack", t + i), a.src = o), e[o] = [r];
            var g = (t, r) => {
                    a.onerror = a.onload = null, clearTimeout(f);
                    var n = e[o];
                    if (delete e[o], a.parentNode && a.parentNode.removeChild(a), n && n.forEach((e => e(r))), t) return t(r)
                },
                f = setTimeout(g.bind(null, void 0, {
                    type: "timeout",
                    target: a
                }), 12e4);
            a.onerror = g.bind(null, a.onerror), a.onload = g.bind(null, a.onload), d && document.head.appendChild(a)
        }
    }, n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "", (() => {
        if (void 0 !== n) {
            var e = n.u,
                t = n.e,
                o = {},
                r = {};
            n.u = function(t) {
                return e(t) + (o.hasOwnProperty(t) ? "?" + o[t] : "")
            }, n.e = function(i) {
                return t(i).catch((function(t) {
                    var s = r.hasOwnProperty(i) ? r[i] : 3;
                    if (s < 1) {
                        var a = e(i);
                        throw t.message = "Loading chunk " + i + " failed after 3 retries.\n(" + a + ")", t.request = a, t
                    }
                    return new Promise((function(e) {
                        setTimeout((function() {
                            var t = Date.now();
                            o[i] = t, r[i] = s - 1, e(n.e(i))
                        }), 100)
                    }))
                }))
            }
        }
    })(), (() => {
        var e = {
            385: 0
        };
        n.f.j = (t, o) => {
            var r = n.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) o.push(r[2]);
                else {
                    var i = new Promise(((o, n) => r = e[t] = [o, n]));
                    o.push(r[2] = i);
                    var s = n.p + n.u(t),
                        a = new Error;
                    n.l(s, (o => {
                        if (n.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var i = o && ("load" === o.type ? "missing" : o.type),
                                s = o && o.target && o.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + s + ")", a.name = "ChunkLoadError", a.type = i, a.request = s, r[1](a)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, o) => {
                var r, i, [s, a, d] = o,
                    l = 0;
                if (s.some((t => 0 !== e[t]))) {
                    for (r in a) n.o(a, r) && (n.m[r] = a[r]);
                    d && d(n)
                }
                for (t && t(o); l < s.length; l++) i = s[l], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            o = window.webpackChunk_smartlook_recorder = window.webpackChunk_smartlook_recorder || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    })();
    var i = n(311),
        s = n(645),
        a = n(185),
        d = n(451),
        l = n(409),
        c = n(955),
        u = n(260),
        g = n(654);
    const f = {
            eu: "manager.eu.smartlook.cloud",
            us: "manager.us.smartlook.cloud"
        },
        h = {
            additionalCreditCardsIdentifiers: g.OW,
            additionalPageParams: !1,
            advancedNetwork: !1,
            banTime: 3e5,
            cookies: !0,
            enableCompression: !0,
            enableRecordingOfAutomationFrameworks: !1,
            externalLogging: !0,
            fallbackToAlternativeIds: !1,
            forceSetupData: null,
            host: f.eu,
            interceptors: {},
            isCrossOriginIframeMode: !1,
            isRelayProxy: !1,
            loggingLevel: "error",
            managerHost: f.eu,
            packAssets: !1,
            packAssetsToRecording: !1,
            persistentGlobalEventProperties: !1,
            proxyAllImages: !1,
            record: {},
            region: "eu",
            standalone: !1,
            startRecordingAfterUserActivity: !0,
            storageKeys: {
                SMARTLOOK_BAN_EXPIRE: "smartlook_ban_expire",
                SMARTLOOK_BAN_REASON: "smartlook_ban_reason",
                SMARTLOOK_COOKIE: "SL_C_23361dd035530_SID",
                SMARTLOOK_COOKIE_DOMAIN: "SL_C_23361dd035530_DOMAIN",
                SMARTLOOK_DEBUG: "smartlook_debug",
                SMARTLOOK_LS: "SL_L_23361dd035530_SID",
                SMARTLOOK_LS_GLOBAL_PROPERTIES: "smartlook_global_properties",
                SMARTLOOK_LS_QUEUED_CHUNKS: "smartlook_queued_chunks"
            },
            upload: () => null,
            uploadInterval: 7500,
            userId: null
        };
    var p = n(915),
        v = n(735),
        m = n(324),
        w = n(757);
    const y = () => !!s.NM() && window.parent && void 0 !== window.parent.smartlook,
        b = e => !(!window.parent || !window.parent.smartlook || "string" != typeof window.parent.smartlook.key || window.parent.smartlook.key !== e);
    var S = n(153),
        R = n(553),
        E = n(53),
        k = n(665);
    class O {
        constructor(e, t, o, r, n, i) {
            this.projectKey = e, this.datadogHost = t, this.uploadInterval = o, this.version = r, this.additionalContext = n, this.logPrefix = i, this.isSendingLogsDisabled = !1, this.logMessagesCache = new Map, this.logsToSend = [], this.uuid = (0, d.$)(), this.sendLog = (e, t, o, ...r) => {
                if ("error" === t || "internal" === e) {
                    const e = this.logMessagesCache.get(o),
                        n = performance.now();
                    if (this.logMessagesCache.set(o, n), void 0 !== e && n - e < 1e3) return;
                    this.logsToSend.push(this.createLog(o, t, ...r)), "hidden" === document.visibilityState && this.processLogs()
                }
            }, this.createLog = (e, t, ...o) => {
                var r, n, i, s, a, d;
                const l = Object.fromEntries(o.map(((e, t) => [t, JSON.parse((0, R.As)(e))])));
                return {
                    context: Object.assign(Object.assign(Object.assign({}, null === (r = this.additionalContext) || void 0 === r ? void 0 : r.call(this)), {
                        isIframe: window.top !== window,
                        isWindowOpened: null !== window.opener,
                        origin: null !== (n = window.location.origin) && void 0 !== n ? n : "unknown",
                        referrer: document.referrer,
                        url: null !== (s = null === (i = window.location) || void 0 === i ? void 0 : i.href) && void 0 !== s ? s : "unknown",
                        userAgent: null !== (d = null === (a = window.navigator) || void 0 === a ? void 0 : a.userAgent) && void 0 !== d ? d : "unknown",
                        uuid: this.uuid,
                        visibilityState: document.visibilityState
                    }), l),
                    message: this.logPrefix ? `${this.logPrefix}: ${e}` : e,
                    severity: t,
                    tags: {},
                    timestamp: Date.now()
                }
            }, this.handleError = e => {
                e.error instanceof a.f && e.error.shouldReport && (this.logsToSend.push(this.createLog(`Uncaught error: ${e.error}`, "error", e.error)), "hidden" === document.visibilityState && this.processLogs())
            }, this.handlePromiseRejection = e => {
                var t;
                if (e.reason instanceof a.f && e.reason.shouldReport) {
                    if ("string" == typeof(null === (t = e.reason.additionalData) || void 0 === t ? void 0 : t.message) && (e.reason.additionalData.message.includes("Cannot set properties of undefined (setting 'sessionManager')") || e.reason.additionalData.message.includes("undefined is not an object (evaluating 'this.sessionManager=e')") || e.reason.additionalData.message.includes("this is undefined") || e.reason.additionalData.message.includes("Unable to set property 'sessionManager' of undefined or null reference"))) return;
                    this.logsToSend.push(this.createLog(`Unhandled promise rejection: ${e.reason}`, "error", e.reason)), "hidden" === document.visibilityState && this.processLogs()
                }
            }, this.processLogIntervalId = window.setInterval((() => {
                this.processLogs()
            }), this.uploadInterval), window.addEventListener("error", this.handleError, !0), window.addEventListener("unhandledrejection", this.handlePromiseRejection, !0), document.addEventListener("visibilitychange", (e => {
                (0, E.Q)(e) && "hidden" === document.visibilityState && (this.processLogs(), setTimeout((() => {
                    this.processLogs()
                }), 500))
            }), !0)
        }
        processLogs() {
            return e = this, o = function*() {
                if (!this.isSendingLogsDisabled && this.logsToSend.length > 0) {
                    const e = this.logsToSend;
                    this.logsToSend = [];
                    const t = {
                        logs: e,
                        tags: {
                            platform: "web",
                            sdkVersion: this.version,
                            userAgent: navigator.userAgent
                        }
                    };
                    try {
                        yield(e => {
                            return t = [e], r = function*({
                                datadogHost: e,
                                payload: t,
                                projectKey: o
                            }) {
                                yield(0, k.F)(`/rec/log/${o}`, {
                                    method: "POST",
                                    abortPreviousRequest: !1,
                                    baseUrl: e,
                                    body: JSON.stringify(t),
                                    throwOnConvert: !1
                                })
                            }, new((o = void 0) || (o = Promise))((function(e, n) {
                                function i(e) {
                                    try {
                                        a(r.next(e))
                                    } catch (e) {
                                        n(e)
                                    }
                                }

                                function s(e) {
                                    try {
                                        a(r.throw(e))
                                    } catch (e) {
                                        n(e)
                                    }
                                }

                                function a(t) {
                                    var r;
                                    t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
                                        e(r)
                                    }))).then(i, s)
                                }
                                a((r = r.apply(void 0, t || [])).next())
                            }));
                            var t, o, r
                        })({
                            datadogHost: this.datadogHost,
                            payload: t,
                            projectKey: this.projectKey
                        })
                    } catch (t) {
                        t instanceof l.h && (422 === t.status || 404 === t.status) ? this.isSendingLogsDisabled = !0 : this.logsToSend.push(...e)
                    }
                }
            }, new((t = void 0) || (t = Promise))((function(r, n) {
                function i(e) {
                    try {
                        a(o.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function s(e) {
                    try {
                        a(o.throw(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function a(e) {
                    var o;
                    e.done ? r(e.value) : (o = e.value, o instanceof t ? o : new t((function(e) {
                        e(o)
                    }))).then(i, s)
                }
                a((o = o.apply(e, [])).next())
            }));
            var e, t, o
        }
    }
    const I = (e, t) => {
        let o = e.domain;
        const r = o.split(".");
        let n = 0;
        for (; n < r.length - 1 && !e.cookie.includes(`${t}=true`);) n += 1, o = r.slice(-1 - n).join("."), e.cookie = `${t}=true;domain=${o};path=/;sameSite=strict;secure`;
        return e.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${o};path=/;sameSite=strict;secure`, o
    };
    class A {
        constructor(e, t) {
            this.storageKeys = e, this.useCookies = t, this.getCookieData = () => {
                const e = A.getCookie(this.storageKeys.SMARTLOOK_COOKIE);
                try {
                    return JSON.parse(null != e ? e : "{}")
                } catch (e) {
                    return {}
                }
            }
        }
        clearCookies() {
            this.useCookies && this.removeCookie(this.storageKeys.SMARTLOOK_COOKIE)
        }
        getCookieMetadataForProjectKey(e) {
            var t;
            return this.useCookies && (null !== (t = this.getCookieData()[e]) && void 0 !== t ? t : null) || null
        }
        setCookieProjectMetadata(e, t) {
            if (!this.useCookies) return;
            const o = this.getCookieData();
            o[e] = t, this.setCookie(this.storageKeys.SMARTLOOK_COOKIE, JSON.stringify(o))
        }
        static getCookie(e) {
            const t = document.cookie.split(";");
            try {
                for (let o = 0; o < t.length; o += 1) {
                    const r = t[o].trim().split("=");
                    if (r[0] === e) return r[1]
                }
            } catch (e) {}
            return null
        }
        static getCookieExpirationDate() {
            const e = new Date;
            return e.setMonth(e.getMonth() + 13), e.toUTCString()
        }
        removeCookie(e) {
            window.document.cookie = `${e}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${I(document,this.storageKeys.SMARTLOOK_COOKIE_DOMAIN)};path=/`
        }
        setCookie(e, t) {
            t && (window.document.cookie = `${e}=${t};expires=${A.getCookieExpirationDate()};domain=${I(document,this.storageKeys.SMARTLOOK_COOKIE_DOMAIN)};path=/;sameSite=strict;secure`)
        }
    }
    var M = function(e, t, o, r) {
        return new(o || (o = Promise))((function(n, i) {
            function s(e) {
                try {
                    d(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    d(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function d(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                    e(t)
                }))).then(s, a)
            }
            d((r = r.apply(e, t || [])).next())
        }))
    };
    const L = "assets";
    class T {
        constructor() {
            this.database = null, this.initializeDatabasePromise = null, this.isDatabaseClosed = !1, this.numberOfUnexpectedCloses = 0, this.clearAssetsStore = () => M(this, void 0, void 0, (function*() {
                if (yield this.initializeIfNeeded(), !this.isDatabaseClosed) try {
                    yield new Promise(((e, t) => {
                        if (!this.database) return void t(new a.f("IndexDB: Database not initialized"));
                        if (!this.database.objectStoreNames.contains(L)) return void e();
                        const o = this.database.transaction(L, "readwrite").objectStore(L).clear();
                        o.addEventListener("success", (t => {
                            i.R.debug("Success clearing asset store", t), e()
                        })), o.addEventListener("error", (e => {
                            i.R.debug("Error clearing asset store", e), t("Error clearing store")
                        }))
                    }))
                } catch (e) {
                    i.R.debug("Error clearing asset store", e)
                }
            })), this.clearStorage = () => M(this, void 0, void 0, (function*() {
                yield this.clearAssetsStore()
            })), this.getStoredAsset = e => M(this, void 0, void 0, (function*() {
                if (yield this.initializeIfNeeded(), this.isDatabaseClosed) return null;
                try {
                    return yield new Promise(((t, o) => {
                        if (!this.database) return void o(new a.f("IndexDB: Database not initialized"));
                        if (!this.database.objectStoreNames.contains(L)) return void t(null);
                        const r = this.database.transaction(L, "readonly").objectStore(L).get(e);
                        r.addEventListener("success", (() => {
                            i.R.debug("Success reading asset data", r.result), t(r.result)
                        })), r.addEventListener("error", (e => {
                            i.R.debug("Error reading asset data", e), o(new a.f("IndexDB: Error reading data"))
                        }))
                    }))
                } catch (e) {
                    return i.R.debug("Error reading asset data", e), null
                }
            })), this.storeAsset = e => M(this, void 0, void 0, (function*() {
                if (yield this.initializeIfNeeded(), !this.isDatabaseClosed) {
                    if (!this.database) throw new Error("Database not initialized");
                    if (!this.database.objectStoreNames.contains(L)) throw new Error("Object store not found");
                    if ((yield this.getNumberOfStoredAssets()) >= 2e3) i.R.debug("Max number of stored assets reached. Asset will not be stored.");
                    else try {
                        yield new Promise(((t, o) => {
                            var r;
                            const n = null === (r = this.database) || void 0 === r ? void 0 : r.transaction(L, "readwrite"),
                                s = null == n ? void 0 : n.objectStore(L),
                                d = null == s ? void 0 : s.put(e);
                            null == d || d.addEventListener("success", (e => {
                                i.R.debug("Success writing asset data", e), t()
                            })), null == d || d.addEventListener("error", (e => {
                                var r, n;
                                i.R.debug("Error writing asset data", e), "QuotaExceededError" === (null === (r = d.error) || void 0 === r ? void 0 : r.name) && (i.R.debug("QuotaExceededError occurred while writing data. Asset will not be stored and store will be cleared."), this.clearAssetsStore()), "DataCloneError" === (null === (n = d.error) || void 0 === n ? void 0 : n.name) && d.error.message.includes("BlobURLs are not yet supported.") && t(), o(new a.f("IndexDB: Error writing data"))
                            }))
                        }))
                    } catch (e) {
                        i.R.debug("Error writing asset data", e)
                    }
                }
            })), this.getNumberOfStoredAssets = () => M(this, void 0, void 0, (function*() {
                if (yield this.initializeIfNeeded(), this.isDatabaseClosed) return 0;
                try {
                    return yield new Promise(((e, t) => {
                        if (!this.database) return void t(new a.f("IndexDB: Database not initialized"));
                        if (!this.database.objectStoreNames.contains(L)) return void e(0);
                        const o = this.database.transaction(L, "readonly").objectStore(L).count();
                        o.addEventListener("success", (() => {
                            i.R.debug("Success reading asset store size", o.result), e(o.result)
                        })), o.addEventListener("error", (e => {
                            i.R.debug("Error reading asset store size", e), t(new a.f("IndexDB: Error reading store size"))
                        }))
                    }))
                } catch (e) {
                    return i.R.debug("Error reading asset store size", e), 0
                }
            }))
        }
        initializeIfNeeded() {
            return M(this, void 0, void 0, (function*() {
                if (this.numberOfUnexpectedCloses > 5 || this.isDatabaseClosed) this.isDatabaseClosed = !0;
                else if (!this.database)
                    if (this.initializeDatabasePromise) try {
                        this.database = yield this.initializeDatabasePromise
                    } catch (e) {
                        this.isDatabaseClosed = !0
                    } else {
                        this.initializeDatabasePromise = new Promise(((e, t) => {
                            const o = indexedDB.open("smartlook_internal_db", 1);
                            o.addEventListener("error", (e => {
                                i.R.debug("Error occurred while opening IndexedDB database. IndexedDB is not available.", e), t(new a.f("IndexDB: Error occurred while opening IndexedDB database. IndexedDB is not available."))
                            })), o.addEventListener("success", (t => {
                                i.R.debug("IndexedDB database opened successfully.", t);
                                const r = o.result;
                                r.addEventListener("close", (() => {
                                    this.numberOfUnexpectedCloses += 1, this.database = null, this.initializeDatabasePromise = null
                                })), e(r)
                            })), o.addEventListener("upgradeneeded", (e => {
                                i.R.debug("IndexedDB database upgrade needed.", e);
                                const t = o.result;
                                t.objectStoreNames.contains(L) || t.createObjectStore(L, {
                                    keyPath: "url"
                                })
                            }))
                        }));
                        try {
                            this.database = yield this.initializeDatabasePromise
                        } catch (e) {
                            return void(this.isDatabaseClosed = !0)
                        }
                    }
            }))
        }
    }
    const C = e => {
            let t = null;
            try {
                t = window.localStorage.getItem(e)
            } catch (e) {}
            return t
        },
        P = (e, t) => {
            try {
                return window.localStorage.setItem(e, t), !0
            } catch (e) {
                return !1
            }
        },
        j = e => {
            try {
                window.localStorage.removeItem(e)
            } catch (e) {}
        };
    class D {
        constructor(e, t) {
            this.projectKey = e, this.storageKeys = t, this.getLocalStorageData = () => {
                const e = C(this.storageKeys.SMARTLOOK_LS);
                try {
                    return JSON.parse(null != e ? e : "{}")
                } catch (e) {
                    return {}
                }
            }, this.getLocalStorageProjectMetadata = e => {
                var t;
                return null !== (t = this.getLocalStorageData()[e]) && void 0 !== t ? t : null
            }, this.removeFromLocalStorageProjectMetadata = (e, t) => {
                const o = this.getLocalStorageData();
                o[e] && (delete o[e][t], P(this.storageKeys.SMARTLOOK_LS, JSON.stringify(o)))
            }, this.updateLocalStorageProjectMetadata = (e, t) => {
                const o = this.getLocalStorageData();
                o[e] = Object.assign(Object.assign({}, o[e]), t), P(this.storageKeys.SMARTLOOK_LS, JSON.stringify(o))
            }
        }
        clearLocalStorage() {
            j(this.storageKeys.SMARTLOOK_LS), j(this.storageKeys.SMARTLOOK_BAN_REASON), j(this.storageKeys.SMARTLOOK_BAN_EXPIRE), j(this.storageKeys.SMARTLOOK_DEBUG), j(this.storageKeys.SMARTLOOK_LS_GLOBAL_PROPERTIES)
        }
        getBanExpire() {
            return C(this.storageKeys.SMARTLOOK_BAN_EXPIRE)
        }
        getBanReason() {
            return C(this.storageKeys.SMARTLOOK_BAN_REASON)
        }
        getGlobalProperties() {
            const e = C(this.storageKeys.SMARTLOOK_LS_GLOBAL_PROPERTIES);
            if (e) try {
                const t = JSON.parse(e);
                return t.projectKey !== this.projectKey ? {} : t.props
            } catch (e) {
                i.R.warnNoConsole("Cannot get global properties from local storage.", e)
            }
            return {}
        }
        getLocalStorageMetadataForProjectKey(e) {
            const t = this.getLocalStorageProjectMetadata(e);
            if (!t) return null;
            const {
                sessionId: o,
                visitorId: r
            } = t;
            return {
                sessionId: o,
                visitorId: r
            }
        }
        getQueuedChunks() {
            const e = C(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS);
            if (e) try {
                const t = JSON.parse(e);
                if (Array.isArray(t)) return t
            } catch (e) {
                i.R.warnNoConsole("Cannot get queued chunk from local storage.", e)
            }
            return null
        }
        getSetupRetryAfterExpire() {
            var e;
            const t = this.getLocalStorageProjectMetadata(this.projectKey);
            return null !== (e = null == t ? void 0 : t.setupRetryAfter) && void 0 !== e ? e : null
        }
        getSetupRetryAfterExpireReason() {
            var e;
            const t = this.getLocalStorageProjectMetadata(this.projectKey);
            return null !== (e = null == t ? void 0 : t.setupRetryAfterReason) && void 0 !== e ? e : null
        }
        isRecorderInDebugMode() {
            return Boolean(C(this.storageKeys.SMARTLOOK_DEBUG))
        }
        queueChunkToSend(e) {
            const t = C(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS),
                o = [];
            if (t) try {
                const e = JSON.parse(t);
                Array.isArray(e) && o.push(...e)
            } catch (e) {
                i.R.warnNoConsole("Cannot parse queued chunk from local storage.", e)
            }
            return o.push(e), P(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS, JSON.stringify(o))
        }
        removeBanExpire() {
            j(this.storageKeys.SMARTLOOK_BAN_EXPIRE)
        }
        removeBanReason() {
            j(this.storageKeys.SMARTLOOK_BAN_REASON)
        }
        removeQueuedChunks() {
            j(this.storageKeys.SMARTLOOK_LS_QUEUED_CHUNKS)
        }
        removeSetupAfterExpire() {
            this.removeFromLocalStorageProjectMetadata(this.projectKey, "setupRetryAfter")
        }
        removeSetupAfterExpireReason() {
            this.removeFromLocalStorageProjectMetadata(this.projectKey, "setupRetryAfterReason")
        }
        setBanExpire(e) {
            P(this.storageKeys.SMARTLOOK_BAN_EXPIRE, e)
        }
        setBanReason(e) {
            P(this.storageKeys.SMARTLOOK_BAN_REASON, e)
        }
        setGlobalProperties(e) {
            const t = {
                projectKey: this.projectKey,
                props: e
            };
            P(this.storageKeys.SMARTLOOK_LS_GLOBAL_PROPERTIES, JSON.stringify(t))
        }
        setLocalStorageProjectMetadata(e, t) {
            this.updateLocalStorageProjectMetadata(e, t)
        }
        setSetupRetryAfter(e) {
            this.updateLocalStorageProjectMetadata(this.projectKey, {
                setupRetryAfter: e
            })
        }
        setSetupRetryAfterReason(e) {
            this.updateLocalStorageProjectMetadata(this.projectKey, {
                setupRetryAfterReason: e
            })
        }
    }
    var _ = function(e, t, o, r) {
        return new(o || (o = Promise))((function(n, i) {
            function s(e) {
                try {
                    d(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    d(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function d(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                    e(t)
                }))).then(s, a)
            }
            d((r = r.apply(e, t || [])).next())
        }))
    };
    class N {
        constructor({
            projectKey: e,
            storageKeys: t,
            useCookies: o
        }) {
            this.getStoredAsset = e => _(this, void 0, void 0, (function*() {
                return this.idbStorageManager.getStoredAsset(e)
            })), this.storeAsset = e => _(this, void 0, void 0, (function*() {
                return this.idbStorageManager.storeAsset(e)
            })), this.cookieManager = new A(t, o), this.localStorageManager = new D(e, t), this.idbStorageManager = new T
        }
        clearAssetsStore() {
            return _(this, void 0, void 0, (function*() {
                yield this.idbStorageManager.clearAssetsStore()
            }))
        }
        clearStorage() {
            this.localStorageManager.clearLocalStorage(), this.cookieManager.clearCookies(), this.idbStorageManager.clearStorage()
        }
        getBanExpire() {
            return this.localStorageManager.getBanExpire()
        }
        getBanReason() {
            return this.localStorageManager.getBanReason()
        }
        getCookieMetadataForProjectKey(e) {
            return this.cookieManager.getCookieMetadataForProjectKey(e)
        }
        getGlobalProperties() {
            return this.localStorageManager.getGlobalProperties()
        }
        getLocalStorageMetadataForProjectKey(e) {
            return this.localStorageManager.getLocalStorageMetadataForProjectKey(e)
        }
        getQueuedChunks() {
            return this.localStorageManager.getQueuedChunks()
        }
        getSetupRetryAfterExpire() {
            return this.localStorageManager.getSetupRetryAfterExpire()
        }
        getSetupRetryAfterExpireReason() {
            return this.localStorageManager.getSetupRetryAfterExpireReason()
        }
        isRecorderInDebugMode() {
            return this.localStorageManager.isRecorderInDebugMode()
        }
        queueChunkToSend(e) {
            return this.localStorageManager.queueChunkToSend(e)
        }
        removeBanExpire() {
            this.localStorageManager.removeBanExpire()
        }
        removeBanReason() {
            this.localStorageManager.removeBanReason()
        }
        removeQueuedChunks() {
            this.localStorageManager.removeQueuedChunks()
        }
        removeSetupAfterExpire() {
            this.localStorageManager.removeSetupAfterExpire()
        }
        removeSetupAfterExpireReason() {
            this.localStorageManager.removeSetupAfterExpireReason()
        }
        setBanExpire(e) {
            this.localStorageManager.setBanExpire(e)
        }
        setBanReason(e) {
            this.localStorageManager.setBanReason(e)
        }
        setGlobalProperties(e) {
            this.localStorageManager.setGlobalProperties(e)
        }
        setMetadata(e, t) {
            this.cookieManager.setCookieProjectMetadata(e, t), this.localStorageManager.setLocalStorageProjectMetadata(e, t)
        }
        setSetupRetryAfter(e) {
            this.localStorageManager.setSetupRetryAfter(e)
        }
        setSetupRetryAfterReason(e) {
            this.localStorageManager.setSetupRetryAfterReason(e)
        }
    }
    class K {
        getServerTime() {
            if (void 0 === this.lastServerTime || void 0 === this.relativeTimeSinceLastServerTimeSet) throw new a.f("Server time is undefined", {
                additionalData: {
                    lastServerTime: this.lastServerTime,
                    relativeTimeSinceLastServerTimeSet: this.relativeTimeSinceLastServerTimeSet
                },
                shouldReport: !0
            });
            return new Date(this.lastServerTime.getTime() + performance.now() - this.relativeTimeSinceLastServerTimeSet)
        }
        getServerTimestamp() {
            return this.getServerTime().getTime()
        }
        setServerTime(e) {
            this.lastServerTime = new Date(e), this.relativeTimeSinceLastServerTimeSet = performance.now()
        }
    }
    class x {
        constructor() {
            this.scrollPositionsByElement = new WeakMap, this.getPosition = e => this.scrollPositionsByElement.get(e), this.setPosition = (e, t) => {
                this.scrollPositionsByElement.set(e, t)
            }
        }
    }
    var B = n(321);
    class $ {
        constructor(e) {
            this.persistentStorageManager = e.persistentStorageManager
        }
        clear() {
            this.persistentStorageManager.setGlobalProperties({})
        }
        getProperties() {
            return this.persistentStorageManager.getGlobalProperties()
        }
        updateProperties(e) {
            const t = Object.assign({}, this.getProperties());
            Object.assign(t, e), this.persistentStorageManager.setGlobalProperties((0, B.e)(t, B.w.PROPERTIES))
        }
    }
    class U {
        constructor() {
            this.properties = {}
        }
        clear() {
            this.properties = {}
        }
        getProperties() {
            return this.properties
        }
        updateProperties(e) {
            const t = Object.assign({}, this.properties);
            Object.assign(t, e), this.properties = (0, B.e)(t, B.w.PROPERTIES)
        }
    }
    class F {
        constructor(e, t, o, r) {
            if (this.persistentStorageManager = e, this.startRecording = t, this.stopRecording = o, this.config = r, this.isRecordingStopped = !1, this.isAppliedBan(!0)) {
                const e = this.persistentStorageManager.getBanExpire();
                if (e) {
                    const t = Number.parseInt(e, 10) - Date.now();
                    t > 0 && (i.R.debug(`BAN is applied. Waiting ${t}ms.`), this.banTimeoutId = setTimeout((() => {
                        this.banTimeoutId = void 0, this.startRecording()
                    }), t))
                }
            }
        }
        applyBan(e) {
            if ("hidden" === document.visibilityState) return;
            if (this.config.isCrossOriginIframeMode) {
                if (i.R.debug("Ban is not applied. Cross-origin mode detected."), !this.isRecordingStopped) try {
                    this.stopRecording()
                } catch (e) {} finally {
                    this.isRecordingStopped = !0
                }
                return
            }
            e.shouldReport && (i.R.warnNoConsole(`Applying ban. Reason: "${e.message}".`, e), i.R.warn(`Applying ban. Reason: "${e.message}".`, e));
            const t = Date.now() + this.config.banTime;
            if (this.persistentStorageManager.setBanExpire(t.toString()), this.persistentStorageManager.setBanReason(e.message), void 0 === this.banTimeoutId) {
                if (!this.isRecordingStopped) try {
                    this.stopRecording()
                } catch (e) {} finally {
                    this.isRecordingStopped = !0
                }
            } else clearTimeout(this.banTimeoutId);
            this.banTimeoutId = setTimeout((() => {
                this.banTimeoutId = void 0;
                try {
                    this.startRecording()
                } catch (t) {
                    i.R.error("Cannot start recording after BAN expired", t, {
                        banReason: e.message
                    })
                }
            }), this.config.banTime)
        }
        clearBanIfApplied() {
            this.persistentStorageManager.removeBanExpire(), this.persistentStorageManager.removeBanReason(), this.banTimeoutId && clearTimeout(this.banTimeoutId)
        }
        getBanReason() {
            var e;
            return null !== (e = this.persistentStorageManager.getBanReason()) && void 0 !== e ? e : ""
        }
        isAppliedBan(e = !1) {
            if (!e) return void 0 !== this.banTimeoutId;
            const t = this.persistentStorageManager.getBanExpire();
            return !!(t && Number.parseInt(t, 10) > Date.now()) || (this.persistentStorageManager.removeBanExpire(), this.persistentStorageManager.removeBanReason(), !1)
        }
    }
    var G = function(e, t, o, r) {
        return new(o || (o = Promise))((function(n, i) {
            function s(e) {
                try {
                    d(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    d(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function d(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                    e(t)
                }))).then(s, a)
            }
            d((r = r.apply(e, t || [])).next())
        }))
    };
    const z = window.parent === window.top ? 1e4 : 11e3;
    class J {
        constructor(e) {
            this.projectKey = e, this.discoveredIframeWindows = new Set, this.eventListenersByEventType = new Map, this.isClosed = !1, this.pendingEventsByMessageEventSource = new Map, this.waitingListenersByEventType = new Map, this.waitingListenersByEventTypeByMessageEventSource = new Map, this.addPostMessageEventListener = (e, t) => {
                const o = this.eventListenersByEventType.get(e);
                o ? o.push(t) : this.eventListenersByEventType.set(e, [t])
            }, this.broadcastEventToAllDiscoveredIframes = e => {
                this.discoveredIframeWindows.forEach((t => {
                    t.postMessage(e, "*")
                }))
            }, this.clearDiscoveredIframeWindows = () => {
                this.discoveredIframeWindows.clear()
            }, this.close = () => {
                this.isClosed = !0
            }, this.isTherePendingEvent = (e, t) => {
                var o;
                const r = this.pendingEventsByMessageEventSource.get(t);
                if (r) {
                    const t = (null !== (o = r.get(e)) && void 0 !== o ? o : []).filter((t => t.name === e));
                    if (t.length > 0) return t.length > 1 && i.R.warn("Received multiple events. Taking first received."), !0
                }
                return !1
            }, this.sendEventToSource = (e, t) => {
                i.R.debug(`Sending ${e.name} event to different source.`, e), t.postMessage(e, "*")
            }, this.waitForEventFromAnySource = e => G(this, void 0, void 0, (function*() {
                var t;
                for (const o of this.pendingEventsByMessageEventSource.values()) {
                    const r = null !== (t = o.get(e)) && void 0 !== t ? t : [],
                        n = r.filter((t => t.name === e));
                    if (n.length > 0) return n.length > 1 && i.R.warn("Received multiple events. Taking first received."), o.set(e, r.filter((t => t.name !== e))), n[0]
                }
                let o, r = this.waitingListenersByEventType.get(e);
                void 0 === r && (r = [], this.waitingListenersByEventType.set(e, r));
                const n = yield new Promise((e => {
                    r && (o = e, r.push(e))
                }));
                return o && (i.R.debug(`Removing event listener for "${e}".`), this.waitingListenersByEventType.set(e, r.filter((e => e !== o)))), n
            })), this.waitForEventFromSource = (e, t) => G(this, void 0, void 0, (function*() {
                var o;
                const r = this.pendingEventsByMessageEventSource.get(t);
                if (r) {
                    const t = null !== (o = r.get(e)) && void 0 !== o ? o : [],
                        n = t.filter((t => t.name === e));
                    if (n.length > 0) return n.length > 1 && i.R.warn("Received multiple events. Taking first received."), r.set(e, t.filter((t => t.name !== e))), n[0]
                }
                let n = this.waitingListenersByEventTypeByMessageEventSource.get(t);
                void 0 === n && (n = new Map, this.waitingListenersByEventTypeByMessageEventSource.set(t, n));
                const s = yield new Promise((t => {
                    if (void 0 === n) throw new a.f("listenersByWindow is undefined");
                    n.set(e, t)
                }));
                return n.delete(e), s
            })), this.waitForEventFromSourceOrThrowAfterGivenTime = (e, t, o = z) => {
                const r = this.waitForEventFromSource(e, t),
                    n = new Promise(((t, r) => {
                        setTimeout((() => {
                            r(new m.t(`Could not retrieve event ${e} in given time (${o}ms).`, {
                                shouldReport: !1
                            }))
                        }), o)
                    }));
                return Promise.race([r, n])
            }, this.postMessageEventListener = e => {
                if (!E.Q(e)) return;
                const t = e.data;
                if ((0, p.GX)(t) && e.source) {
                    const o = e.source;
                    if (t.key !== this.projectKey) return void i.R.debug("Received event with different key.", e);
                    (0, p.MG)(t) && !this.isClosed && (i.R.debug("Received discovery. Sending discovered response", e), this.sendEventToSource({
                        name: p.g4.DISCOVERED,
                        key: this.projectKey,
                        sessionId: window.smartlook.sessionId
                    }, o)), (0, p.o7)(t) && !this.isClosed && (i.R.debug("Received discovered. Sending acknowledged response", e), this.sendEventToSource({
                        name: p.g4.ACKNOWLEDGED,
                        key: this.projectKey
                    }, o), this.discoveredIframeWindows.add(e.source));
                    const r = this.eventListenersByEventType.get(t.name);
                    if (r) {
                        i.R.debug(`Found listeners for event - ${e.data.name}.`, e);
                        for (const t of r) t(e.data)
                    }
                    const n = this.waitingListenersByEventTypeByMessageEventSource.get(e.source);
                    if (n) {
                        const e = n.get(t.name);
                        e && (i.R.debug(`Found waiting listener for event - ${t.name}.`), e(t))
                    }
                    const s = this.waitingListenersByEventType.get(t.name);
                    if (s && s.length > 0 && (i.R.debug(`Found waiting listener from any source for event - ${t.name}.`), s.forEach((e => e(t)))), n || r || s && s.length > 0) return;
                    i.R.debug(`No pending listener found for ${t.name}.`);
                    const a = this.pendingEventsByMessageEventSource.get(e.source);
                    if (a) {
                        const e = a.get(t.name);
                        e ? (e.push(t), a.set(t.name, e)) : a.set(t.name, [t])
                    } else {
                        const o = new Map;
                        o.set(t.name, [t]), this.pendingEventsByMessageEventSource.set(e.source, o)
                    }
                }
            }, window.addEventListener("message", this.postMessageEventListener)
        }
    }
    class q {
        constructor(e) {
            this.persistentStorageManager = e, this.applyRetryAfter = e => {
                const t = Date.now() + 1e3 * e;
                this.persistentStorageManager.setSetupRetryAfter(t.toString())
            }, this.getAppliedRetryAfterReason = () => this.persistentStorageManager.getSetupRetryAfterExpireReason(), this.isAppliedRetryAfter = () => {
                const e = this.persistentStorageManager.getSetupRetryAfterExpire();
                return e && Number.parseInt(e, 10) > Date.now() ? !(Number.parseInt(e, 10) - Date.now() > 6048e5 && (i.R.errorNoConsole("Value of `setupRetryAfterExpire` is greater than one week. Ignoring it.", {
                    currentTime: Date.now(),
                    currentTimeISO: (new Date).toISOString(),
                    setupRetryAfterExpire: e
                }), this.removeRetryAfterValues(), 1)) : (this.removeRetryAfterValues(), !1)
            }, this.removeRetryAfterValues = () => {
                this.persistentStorageManager.removeSetupAfterExpireReason(), this.persistentStorageManager.removeSetupAfterExpire()
            }, this.setAppliedRetryAfterReason = e => {
                this.persistentStorageManager.setSetupRetryAfterReason(e)
            }
        }
    }
    var H, W, V, Q = function(e, t, o, r) {
        return new(o || (o = Promise))((function(n, i) {
            function s(e) {
                try {
                    d(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    d(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function d(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o((function(e) {
                    e(t)
                }))).then(s, a)
            }
            d((r = r.apply(e, t || [])).next())
        }))
    };
    let Y;
    n.p = null === document.currentScript ? window.smartlook.scriptSource + "es6/" : window.smartlook.scriptSource + "es5/";
    let X, Z, ee = !1,
        te = !1,
        oe = !0;
    const re = [];
    let ne, ie, se, ae, de, le, ce, ue, ge, fe, he = [],
        pe = !1,
        ve = !1,
        me = 0,
        we = !1,
        ye = !1,
        be = !1;
    const Se = performance.now(),
        Re = (e, ...t) => Q(void 0, void 0, void 0, (function*() {
            var o, r, g, R, E, k, I, A;
            if (window.smartlook._loadInfo = window.smartlook._loadInfo || [], (e => {
                    void 0 === window.smartlook._apiCallsHistory && (window.smartlook._apiCallsHistory = []), window.smartlook._apiCallsHistory.push(["function" == typeof e ? "function" : e, performance.now() - Se]), window.smartlook._apiCallsHistory.length > 15 && window.smartlook._apiCallsHistory.shift()
                })(e), window.navigator.userAgent.includes("BingPreview") || window.navigator.userAgent.includes("adidxbot") || window.navigator.userAgent.includes("Bingbot"))(0, v.o)("Smartlook is disabled. Bot detected.");
            else {
                if ("init" === e && me < 1 || "reinit" === e) {
                    if (fe = t[0], ge = null !== (o = t[1]) && void 0 !== o ? o : {}, "string" == typeof fe && (fe = fe.trim()), void 0 === fe || "string" == typeof fe && 0 === fe.length) return window.smartlook._loadInfo.push("Initialization unsuccessful. Project key is empty."), (0, v.o)("Smartlook could not be initialized. Provided project key is empty."), void("reinit" === e && (we = !1));
                    if (ue = ((e, t, o) => {
                            const r = Object.assign(h, Object.assign(Object.assign({}, o), {
                                projectKey: e,
                                recorderVersion: "089f207"
                            }));
                            if (o.host) {
                                r.managerHost = r.host;
                                const e = u.c(o.host);
                                (!e.host.endsWith("smartlook.cloud") && !e.host.endsWith("smartlook.com") || e.host.endsWith("smartlook.cloud") && e.host.includes("relay-proxy")) && (r.managerHost = u.c(e.toString(), "/manager").toString(), r.isRelayProxy = !0)
                            } else if (o.region) {
                                const e = f[o.region];
                                if (void 0 === e) throw new Error("Unknown region");
                                r.host = e, r.managerHost = e
                            }
                            return "f2353f89c956e0b7a93a0ab1b5cfbf01725acab2" === e && (r.host = f.us, r.managerHost = f.us), r.packAssetsToRecording && (r.packAssets = {
                                fonts: !0,
                                images: !0,
                                styles: !0
                            }), ["b0375d591e85b0affec1d581bfed3c760cb8c56d", "ff68798c802965f6c79ab4a4f317fe02e778c847", "263616316fc439f9ca1bfc939d7841ab0b310a19", "57cac5996e97c209eb339793b7a1977c2ee9177d", "2a5a223d674a1920334b75bb26b7a13ad2662dc3", "f90c858c4670dc0d26743247a5a842e45f625f2d", "22393f4f77a5629fcee1766cdb311183bd9332a7", "1a9ce36284f2e7f3ddb8f853484dae73d2707f21", "4ee6fddab7cd9a55effe0c9a551016d185ff2393", "4c418d9e2b73aca33edceec3576791e207169cf3", "aa14696252590ac72b8a32101b9b837430bfda56", "cfd7a3e7a1f60352c1ffd4f7d0e01de2ec213c41", "440ecd8e7f6c4e28524a6cdab4488a192187ba55", "cce039e0a58a23378404b872c2c30a82c6e7753e", "64a50e39976c60bbca1bb94ba3b3e2fe7b68b54b"].includes(e) && (r.fallbackToAlternativeIds = !0), "051840f3c6e4c1a4fa02caacfbb89b05dc201643" === e && (r.standalone = !0), r
                        })(fe, 0, null != ge ? ge : {}), !ue.enableRecordingOfAutomationFrameworks && navigator.webdriver) return window.smartlook._loadInfo.push("Initialization unsuccessful. Automation framework is detected."), void(0, v.o)("Smartlook is stopped. Automation framework is detected.");
                    if (!be) {
                        if ((e => {
                                Object.defineProperties(window.smartlook, {
                                    _debugData: {
                                        get() {
                                            var t;
                                            try {
                                                return void 0 === window.smartlook.recorderClass && y() && b(e.projectKey) && window.parent && window.parent.smartlook ? window.parent.smartlook._debugData : null === (t = window.smartlook.recorder) || void 0 === t ? void 0 : t.debugData
                                            } catch (e) {
                                                i.R.debug(`Cannot get _debugData: ${e}`)
                                            }
                                        }
                                    },
                                    isIframeModeEnabled: {
                                        get: () => e.isCrossOriginIframeMode || void 0 === window.smartlook.recorderClass && y() && b(e.projectKey)
                                    },
                                    key: {
                                        get() {
                                            try {
                                                return e.projectKey
                                            } catch (e) {
                                                i.R.debug(`Cannot get key: ${e}`)
                                            }
                                        }
                                    },
                                    playUrl: {
                                        get() {
                                            var t;
                                            try {
                                                return void 0 === window.smartlook.recorderClass && y() && b(e.projectKey) && window.parent && window.parent.smartlook ? window.parent.smartlook.playUrl : null === (t = window.smartlook.recorder) || void 0 === t ? void 0 : t.playUrl
                                            } catch (e) {
                                                i.R.debug(`Cannot get playUrl: ${e}`)
                                            }
                                        }
                                    },
                                    recordId: {
                                        get() {
                                            var t;
                                            try {
                                                return void 0 === window.smartlook.recorderClass && y() && b(e.projectKey) && window.parent && window.parent.smartlook ? window.parent.smartlook.recordId : null === (t = window.smartlook.recorder) || void 0 === t ? void 0 : t.recordId
                                            } catch (e) {
                                                i.R.debug(`Cannot get recordId: ${e}`)
                                            }
                                        }
                                    },
                                    sessionId: {
                                        get() {
                                            var t;
                                            try {
                                                return void 0 === window.smartlook.recorderClass && y() && b(e.projectKey) && window.parent && window.parent.smartlook ? window.parent.smartlook.sessionId : null === (t = window.smartlook.recorder) || void 0 === t ? void 0 : t.sessionId
                                            } catch (e) {
                                                i.R.debug(`Cannot get sessionId: ${e}`)
                                            }
                                        }
                                    },
                                    version: {
                                        get: () => e.recorderVersion
                                    },
                                    visitorId: {
                                        get() {
                                            var t;
                                            try {
                                                return void 0 === window.smartlook.recorderClass && y() && b(e.projectKey) && window.parent && window.parent.smartlook ? window.parent.smartlook.visitorId : null === (t = window.smartlook.recorder) || void 0 === t ? void 0 : t.visitorId
                                            } catch (e) {
                                                i.R.debug(`Cannot get visitorId: ${e}`)
                                            }
                                        }
                                    }
                                })
                            })(ue), !pe) {
                            const e = ((e, t) => {
                                const o = new N({
                                        projectKey: e.projectKey,
                                        storageKeys: e.storageKeys,
                                        useCookies: e.cookies
                                    }),
                                    r = new K,
                                    n = new x,
                                    s = e.persistentGlobalEventProperties ? new $({
                                        persistentStorageManager: o
                                    }) : new U,
                                    a = new F(o, (() => window.smartlook("reinit", e.projectKey, t)), (() => window.smartlook("stop")), e);
                                let d;
                                e.externalLogging && (d = new O(e.projectKey, e.managerHost, e.uploadInterval, e.recorderVersion, (() => {
                                    var t, o, r, n;
                                    const {
                                        userId: i
                                    } = e, s = function(e, t) {
                                        var o = {};
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
                                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                            var n = 0;
                                            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (o[r[n]] = e[r[n]])
                                        }
                                        return o
                                    }(e, ["userId"]);
                                    return {
                                        apiCallHistory: window.smartlook._apiCallsHistory,
                                        config: s,
                                        playUrl: null !== (t = window.smartlook.playUrl) && void 0 !== t ? t : "unknown",
                                        recordId: null !== (o = window.smartlook.recordId) && void 0 !== o ? o : "unknown",
                                        sessionId: null !== (r = window.smartlook.sessionId) && void 0 !== r ? r : "unknown",
                                        visitorId: null !== (n = window.smartlook.visitorId) && void 0 !== n ? n : "unknown"
                                    }
                                }))), !0 !== window.smartlook.silent && i.R.setLoggingLevel(o.isRecorderInDebugMode() ? "debug" : e.loggingLevel);
                                const l = new J(e.projectKey);
                                return d && i.R.setMiddleware(d.sendLog), {
                                    banService: a,
                                    persistentStorageManager: o,
                                    postMessageService: l,
                                    propertiesManager: s,
                                    scrollManager: n,
                                    setupRetryAfterService: new q(o),
                                    timeManager: r
                                }
                            })(ue, ge);
                            ae = e.persistentStorageManager, de = e.propertiesManager, ie = e.banService, le = e.timeManager, ce = e.scrollManager, ne = e.postMessageService, se = e.setupRetryAfterService, pe = !0
                        }
                        be = !0;
                        const e = ae.getQueuedChunks();
                        try {
                            e && (e => {
                                0 !== e.length && requestIdleCallback((() => {
                                    for (const t of e) {
                                        const e = new FormData;
                                        for (const [o, r] of Object.entries(t.apiData)) {
                                            const t = JSON.stringify(r);
                                            e.append(o, t)
                                        }
                                        i.R.debug("Writing queued chunk.", {
                                            chunk: t
                                        }), (0, c.Wo)({
                                            formData: e,
                                            isFromPreviousRecord: !0,
                                            recordId: t.apiData.recordData.id,
                                            sessionId: t.apiData.sessionData.id,
                                            visitorId: t.apiData.visitorData.id,
                                            writerHost: t.writerHost
                                        }).catch((e => {
                                            i.R.debug("Writing queued chunk failed.", {
                                                chunk: t,
                                                error: e
                                            })
                                        }))
                                    }
                                }))
                            })(e)
                        } catch (e) {
                            i.R.errorNoConsole("Sending queued chunks failed.")
                        } finally {
                            ae.removeQueuedChunks()
                        }
                    }
                }
                if (fe && y())
                    if (i.R.debug("Smartlook loaded in parent window."), ee) i.R.debug("Smartlook is already initialized in iframe. No API calls will be proxied.");
                    else {
                        if (b(fe)) {
                            if (i.R.debug("Detected smartlook in parent window. API calls 'navigate', 'track', 'properties', 'navigation' and 'error' will be proxied there. All the other will be silently ignored."), "string" == typeof e && ["track", "properties", "navigation", "error"].includes(e)) return i.R.debug(`Sending API call ${e} to parent window.`), null === (r = window.parent) || void 0 === r ? void 0 : r.smartlook(e, ...t);
                            if ("init" === e) {
                                i.R.debug("Smartlook in parent window is initialized and records to same project.");
                                const e = [...he];
                                return he = [], void queueMicrotask((() => {
                                    e.forEach((([e, t, o]) => {
                                        Re(e, ...o).finally(t)
                                    }))
                                }))
                            }
                            return void console.debug(`Smartlook is loaded in same-origin iframe. Calling '${e}' API in iframe is disabled. Please call it in parent page.`)
                        }
                        if ("init" === e) {
                            if (i.R.debug("Waiting for smartlook in parent window to initialize."), yield(I = void 0, A = function*() {
                                    let e;
                                    yield new Promise((t => {
                                        e = setInterval((() => {
                                            var o, r;
                                            void 0 !== (null === (r = null === (o = window.parent) || void 0 === o ? void 0 : o.smartlook) || void 0 === r ? void 0 : r.key) && (void 0 !== e && (clearInterval(e), e = void 0), t())
                                        }), 100)
                                    }))
                                }, new(I || (I = Promise))((function(e, t) {
                                    function o(e) {
                                        try {
                                            n(A.next(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }

                                    function r(e) {
                                        try {
                                            n(A.throw(e))
                                        } catch (e) {
                                            t(e)
                                        }
                                    }

                                    function n(t) {
                                        var n;
                                        t.done ? e(t.value) : (n = t.value, n instanceof I ? n : new I((function(e) {
                                            e(n)
                                        }))).then(o, r)
                                    }
                                    n((A = A.apply(void 0, [])).next())
                                }))), b(fe)) {
                                i.R.debug("Smartlook in parent window is initialized and records to same project.");
                                const e = [...he];
                                return he = [], void queueMicrotask((() => {
                                    e.forEach((([e, t, o]) => {
                                        Re(e, ...o).finally(t)
                                    }))
                                }))
                            }
                            i.R.debug("Smartlook in parent window is initialized but records to different project.")
                        }
                    }
                if ("visitor_blocked" === Z && ue && "identify" === e && !ye) {
                    ye = !0;
                    const [o] = t;
                    if ("string" != typeof o && "number" != typeof o || "string" == typeof o && !o) return (0, v.o)(`Invalid user id passed to smartlook('identify', ...). Received: ${o}`), void(ye = !1);
                    const r = new Promise((o => {
                        he.unshift([e, o, t]), he.unshift(...re)
                    })).finally((() => {
                        ye = !1
                    }));
                    return void 0 === fe || void 0 === ge ? void i.R.error("Cannot run reinit. Project key or init options are not defined.", {
                        initOptions: ge,
                        projectKey: fe
                    }) : (yield Re("reinit", fe, Object.assign(Object.assign({}, ge), {
                        userId: String(o)
                    })), r)
                }
                if (!["init", "finish", "reinit"].includes(e) && (!ee || we)) return new Promise((o => {
                    he.push([e, o, t])
                }));
                if ("init" === e || "reinit" === e) {
                    if (void 0 === ue) return void i.R.warn("Config is undefined.");
                    if ("reinit" === e && (we = !0), "init" === e && (me += 1), me > 1) {
                        const o = t[0];
                        return "string" == typeof o && o.trim() !== ue.projectKey ? (window.smartlook._loadInfo.push("Initialization unsuccessful. Init API called twice with different project keys."), (0, v.o)(`Smartlook init method called twice with different project keys (${ue.projectKey}, ${o.trim()}).`)) : (window.smartlook._loadInfo.push("Initialization unsuccessful. Init called twice."), i.R.debug(`Init called ${me}x times. Skipping initialization.`)), void("reinit" === e && (we = !1))
                    }
                    i.R.debug("Init called.");
                    const o = t[2];
                    if (ie.isAppliedBan()) return window.smartlook._loadInfo.push(`Initialization unsuccessful. BAN applied - ${ie.getBanReason()}`), i.R.debug("BAN is applied. Initialization is postponed."), o && o(), void("reinit" === e && (we = !1));
                    (s.wp() || ue.standalone) && ue.startRecordingAfterUserActivity && (window.smartlook._loadInfo.push(`Initialization waiting for user activity. Start: ${Date.now()}`), yield(0, S.j)(ne), window.smartlook._loadInfo.push(`Initialization continues. User activity detected. Start: ${Date.now()}`)), he.length > 0 && "anonymize" === he[0][0] && (window.smartlook._loadInfo.push("Anonymize called straight after init. Clearing storage."), i.R.debug("Anonymize called straight after init. Clearing storage."), ae.clearStorage(), he.shift()), s.wp() || s.NM() || null === window.parent || ue.standalone || (ie.clearBanIfApplied(), Y = yield(M = ue, L = window.parent, Q(void 0, void 0, void 0, (function*() {
                        i.R.debug("Sending discovered event to parent window event.", window.location.href), ne.sendEventToSource({
                            name: p.g4.DISCOVERED,
                            key: M.projectKey,
                            sessionId: void 0
                        }, window.parent);
                        try {
                            return i.R.debug("Waiting for acknowledged event from parent.", window.location.href), yield ne.waitForEventFromSourceOrThrowAfterGivenTime(p.g4.ACKNOWLEDGED, window.parent), (0, S.j)().then((() => {
                                void 0 !== ue && (i.R.debug("Sending user activity event to parent.", window.location.href), ne.sendEventToSource({
                                    name: p.g4.USER_ACTIVITY,
                                    key: ue.projectKey
                                }, window.parent))
                            })), i.R.debug("Waiting for start recording event from parent.", window.location.href), yield ne.waitForEventFromSource(p.g4.START_RECORDING, L)
                        } catch (e) {
                            e instanceof m.t && (i.R.debug("Could not receive post message in `init`. Timeout exceeded.", window.location.href), ne.close()), i.R.warn("Error happened during receiving post message from parent in `init`. Continuing normal recording.", e, window.location.href, document.visibilityState)
                        }
                    }))), Y ? (ue.isCrossOriginIframeMode = !0, i.R.debug("Received start recording event", Y, window.location.href), i.R.debug("Attaching START_RECORDING event listener.", window.location.href), ne.addPostMessageEventListener(p.g4.START_RECORDING, (e => {
                        var t;
                        if (!ue) throw new a.f("Config is undefined", {
                            shouldReport: !0
                        });
                        ue.isCrossOriginIframeMode = !0;
                        try {
                            null === (t = window.smartlook.recorder) || void 0 === t || t.startRecording(e.sessionId, e.visitorId, e.recordId, e.setupData, void 0, {
                                frameElementId: e.frameElementId,
                                frameMetadata: e.frameMetadata,
                                parentFrameElementId: e.parentFrameElementId,
                                relativeParentTimeStart: e.relativeTime
                            })
                        } catch (e) {
                            i.R.errorNoConsole("Coudl not startRecording in cross-origin iframe", e)
                        }
                    })), i.R.debug("Attaching STOP_RECORDING event listener."), ne.addPostMessageEventListener(p.g4.STOP_RECORDING, (() => {
                        var e;
                        try {
                            null === (e = window.smartlook.recorder) || void 0 === e || e.stopRecording()
                        } catch (e) {
                            if (e instanceof m.q) return;
                            throw e
                        }
                    }))) : yield(0, S.j)()), window.smartlook._loadInfo.push("Initialization - retrieving active sessions/creating new one.");
                    const r = (0, w.f4)(ue, ae);
                    let u, f, h, y, b, O;
                    if (void 0 === Y) {
                        const e = yield(0, w.vS)(r, ue, ae);
                        u = e.sessionId, f = e.visitorId, h = d.$(), y = e.sessionTimeRemaining
                    } else u = Y.sessionId, f = Y.visitorId, h = Y.recordId, b = {
                        frameElementId: Y.frameElementId,
                        frameMetadata: Y.frameMetadata,
                        parentFrameElementId: Y.parentFrameElementId,
                        relativeParentTimeStart: Y.relativeTime
                    };
                    try {
                        if (se.isAppliedRetryAfter() && !ye) {
                            const e = se.getAppliedRetryAfterReason();
                            if (oe = !1, X = "setup call is throttled", Z = "spamming_visitor", window.smartlook._loadInfo.push("Initialization - spamming visitor."), e) try {
                                const t = JSON.parse(e);
                                t.code && (Z = t.code), t.message && (X = t.message)
                            } catch (e) {}(0, v.o)(`Smartlook not recording. Reason: ${X}.`)
                        } else {
                            window.smartlook._loadInfo.push(`Initialization - setup call. Timestamp - ${Date.now()}`);
                            const e = Y ? {
                                response: void 0,
                                setupData: Y.setupData
                            } : yield(0, c.l2)({
                                config: ue,
                                sessionId: u,
                                visitorId: f
                            });
                            if (O = e.setupData, window.smartlook._loadInfo.push(`Initialization - setup call finished. Timestamp - ${Date.now()}`), O.recordingAllowed) {
                                if (window.smartlook._loadInfo.push("Initialization - recording allowed"), se.removeRetryAfterValues(), ae.setMetadata(ue.projectKey, {
                                        sessionId: u,
                                        visitorId: f
                                    }), le.setServerTime(O.serverTime), oe = !0, Z = void 0, X = void 0, !te) {
                                    try {
                                        yield n.e(23).then(n.bind(n, 684))
                                    } catch (e) {
                                        window.smartlook._loadInfo.push("Initialization - bundle failed to load."), e instanceof Error && e.message.includes("is not a function") ? (0, v.o)("Smartlook could not be initialized. This site uses unsupported version of Prototype.JS library which contains some bugs. We advise you to upgrade to latest version in order to make smartlook recording. For more information do not hesitate to contact our customer support.") : (0, v.o)("Could not load smartlook bundle. Smartlook will not record this page.", {
                                            error: e
                                        }), ve = !0
                                    }
                                    ve || (window.smartlook._loadInfo.push("Initialization - initializing recorder."), ((e, t, o, r, n, i, s, d) => {
                                        if (void 0 === window.smartlook.recorderClass) throw new a.f("Cannot initialize Smartlook. Smartlook class is not present.");
                                        window.smartlook.recorder = new window.smartlook.recorderClass(e, t, o, r, n, i, s, d)
                                    })(ue, ae, se, ie, le, ne, ce, de), te = !0)
                                }
                                ve || (void 0 !== y && y < O.recording.maxRecordDuration / 3 && (u = d.$()), null === (g = window.smartlook.recorder) || void 0 === g || g.startRecording(u, f, h, O, y, b))
                            } else {
                                const t = e.response,
                                    o = null == t ? void 0 : t.headers.get("Retry-After");
                                o && (se.applyRetryAfter(Number.parseInt(o, 10)), se.setAppliedRetryAfterReason(JSON.stringify(O.error))), oe = !1, X = null === (R = O.error) || void 0 === R ? void 0 : R.message, Z = null === (E = O.error) || void 0 === E ? void 0 : E.code, (null === (k = O.error) || void 0 === k ? void 0 : k.message) ? (0, v.o)(`Smartlook not recording. Reason: ${O.error.message}.`) : (0, v.o)("Smartlook not recording.")
                            }
                        }
                    } catch (e) {
                        window.smartlook._loadInfo.push("Initialization - error happened.");
                        const t = e instanceof Error ? e.message : "Unknown reason /setup";
                        if (e instanceof l.h) {
                            const o = e.isAbortedByUserAgent && "hidden" === e.visibilityState;
                            [404, 422].includes(e.status) ? (oe = !1, e.responseData && "string" != typeof e.responseData ? (X = "string" == typeof e.responseData.message ? e.responseData.message : "Unknown reason", Z = "string" == typeof e.responseData.code ? e.responseData.code : "unknown_code") : (X = "Unknown reason", Z = "unknown_code"), (0, v.o)(`Smartlook not recording. Reason: ${X}`, e.responseData), "organization_not_found" !== Z && i.R.warnNoConsole(`Setup failed. Reason: ${t}.`, e, fetch.toString())) : o || ie.applyBan(new a.f(`Setup in init failed. Reason: ${t}.`, {
                                originalError: e,
                                shouldReport: !e.isConnectionError
                            }))
                        } else e instanceof Error && (e.message.includes("Cannot set properties of undefined (setting 'sessionManager')") || e.message.includes("undefined is not an object (evaluating 'this.sessionManager=e')") || e.message.includes("this is undefined") || e.message.includes("Unable to set property 'sessionManager' of undefined or null reference")) ? (ve = !0, (0, v.o)("Smartlook could not be initialized. This site uses unsupported version of Prototype.JS library which contains some bugs. We advise you to upgrade to latest version in order to make smartlook recording. For more information do not hesitate to contact our customer support.")) : ie.applyBan(new a.f(`Setup in init failed. Reason: "${t}".`, {
                            originalError: e instanceof Error ? e : void 0
                        }))
                    } finally {
                        ee = !0
                    }
                    "reinit" === e && (we = !1);
                    const I = [...he];
                    return he = [], queueMicrotask((() => {
                        I.forEach((([e, t, o]) => {
                            Re(e, ...o).finally(t)
                        }))
                    })), void(o && o())
                }
                var M, L;
                if (!oe && "finish" !== e) return i.R.warn(`Cannot call ${e}. Recording is disabled. Reason ${null!=X?X:"unknown"}.`), void("visitor_blocked" === Z && re.push([e, () => null, t]));
                ve ? i.R.debug(`Cannot call ${e}. Bundle failed to load.`) : yield((e, t, o, ...r) => function(e, t, o, r) {
                    return new(o || (o = Promise))((function(e, t) {
                        function n(e) {
                            try {
                                s(r.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function i(e) {
                            try {
                                s(r.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function s(t) {
                            var r;
                            t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function(e) {
                                e(r)
                            }))).then(n, i)
                        }
                        s((r = r.apply(void 0, [])).next())
                    }))
                }(0, 0, void 0, (function*() {
                    try {
                        if (o && o.isCrossOriginIframeMode && ("string" != typeof e || ["track", "properties", "navigation", "error"].includes(e) || console.debug(`Smartlook is loaded in iframe. Calling '${e}' API in iframe is disabled. Please call it in parent page.`)), "finish" === e) {
                            const e = r;
                            return void(window.smartlook.recorder ? window.smartlook.recorder.finishAllQueuedTasks(...r) : e[0]())
                        }
                        if ("stop" === e) return void(window.smartlook.recorder && window.smartlook.recorder.stopRecording(...r));
                        if (t.isAppliedBan()) return void i.R.warn(`Cannot call smartlook API. Session is banned. Reason: ${t.getBanReason()}.`);
                        if (!window.smartlook.recorder) return void i.R.warn("Smartlook is not initialized. Cannot call public api.");
                        switch (e) {
                            case "record":
                                yield window.smartlook.recorder.setRecording(...r);
                                break;
                            case "resume":
                                yield window.smartlook.recorder.resumeRecording(...r);
                                break;
                            case "pause":
                                window.smartlook.recorder.pauseRecording(...r);
                                break;
                            case "error":
                                yield window.smartlook.recorder.logCustomError(...r);
                                break;
                            case "track":
                                yield window.smartlook.recorder.logCustomEvent(...r);
                                break;
                            case "navigation":
                                yield window.smartlook.recorder.changeUrl(...r);
                                break;
                            case "disable":
                                !0 === r[0] ? window.smartlook.recorder.pauseRecording() : !1 === r[0] && (yield window.smartlook.recorder.resumeRecording());
                                break;
                            case "properties":
                                yield window.smartlook.recorder.setCustomEventProperties(...r);
                                break;
                            case "identify":
                                yield window.smartlook.recorder.identifyVisitor(...r);
                                break;
                            case "anonymize":
                                yield window.smartlook.recorder.anonymize(...r);
                                break;
                            default:
                                "function" == typeof e ? e() : (0, v.o)(`"${e}" is not recognised by Smartlook. See available APIs at https://web.developer.smartlook.com/docs`)
                        }
                    } catch (e) {
                        e instanceof a.f && !e.shouldReport ? i.R.warn(e.message) : e instanceof Error ? console.warn(e.message, e) : console.error(JSON.stringify(e))
                    }
                })))(e, ie, ue, ...t)
            }
        }));
    window.smartlook._loadInfo = window.smartlook._loadInfo || [], window.smartlook._loadInfo.push(`Init script loaded. Script source: ${window.smartlook.scriptSource}`);
    const Ee = null !== (W = null === (H = window.smartlook) || void 0 === H ? void 0 : H.api) && void 0 !== W ? W : [],
        ke = null === (V = window.smartlook) || void 0 === V ? void 0 : V.isRecorderScriptLoaded,
        Oe = window.smartlook.scriptSource,
        Ie = window.smartlook._loadInfo,
        Ae = window.smartlook.silent;
    window.smartlook = Re, window.smartlook.isRecorderScriptLoaded = ke, window.smartlook.scriptSource = Oe, window.smartlook._loadInfo = Ie, window.smartlook.silent = Ae, Ee.forEach((e => {
        const [t, ...o] = [...e];
        window.smartlook(t, ...o)
    }))
})();