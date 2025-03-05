! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5dec8964-fbc3-4a7b-be86-354baf3135fa", e._sentryDebugIdIdentifier = "sentry-dbid-5dec8964-fbc3-4a7b-be86-354baf3135fa")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        91271: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 78894)), Promise.resolve().then(r.bind(r, 53547)), Promise.resolve().then(r.t.bind(r, 17687, 23)), Promise.resolve().then(r.t.bind(r, 59150, 23)), Promise.resolve().then(r.bind(r, 46056)), Promise.resolve().then(r.bind(r, 82822)), Promise.resolve().then(r.bind(r, 17431)), Promise.resolve().then(r.bind(r, 3003)), Promise.resolve().then(r.bind(r, 87984)), Promise.resolve().then(r.t.bind(r, 55942, 23))
        },
        46056: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnalyticsContext: () => i
            });
            let n = (0, r(89039).createContext)(null);
            n.displayName = "Analytics";
            let i = n
        },
        82822: (e, t, r) => {
            "use strict";
            r.d(t, {
                AnalyticsProvider: () => C
            });
            var n = r(44243),
                i = r(89039),
                s = r(31878),
                o = r(24276),
                a = r(95969),
                l = r(46056),
                d = r(1229),
                _ = r(89486),
                c = r(24598),
                u = r(97159);

            function N(e) {
                let {
                    onConsent: t
                } = e, r = (0, c.useTranslations)("common");
                return (0, n.jsxs)(_.f, {
                    className: "fixed bottom-0 z-10 flex w-full flex-row items-center justify-between bg-base px-4 py-2 text-foreground",
                    children: [(0, n.jsx)("div", {
                        children: r.rich("cookieConsent", {
                            url: e => (0, n.jsx)(d.default, {
                                "aria-label": r("cookiePolicy"),
                                className: "block text-secondary md:inline-block",
                                href: "https://paxful.com/cookie-policy",
                                children: e
                            })
                        })
                    }), (0, n.jsx)(u.z, {
                        size: "sm",
                        onClick: t,
                        children: r("iAccept")
                    })]
                })
            }
            var f = r(17700),
                P = r(22258),
                E = r(50714);
            let I = (0, P.D)({
                server: {
                    CANONICAL_URL: f.Z_8(),
                    BASE_PATH: f.Z_8()
                },
                client: {
                    NEXT_PUBLIC_COOKIE_CONSENT_NAME: f.Z_8(),
                    NEXT_PUBLIC_COOKIE_CONSENT_DOMAIN: f.Z_8(),
                    NEXT_PUBLIC_ANALYTICS_APP_NAME: f.Z_8(),
                    NEXT_PUBLIC_GTM_ID: f.jtO(f.Z_8(), ""),
                    NEXT_PUBLIC_FACEBOOK_APP_ID: f.jtO(f.Z_8(), "")
                },
                runtimeEnv: {
                    CANONICAL_URL: E.env.CANONICAL_URL || "https://accounts.paxful.com",
                    BASE_PATH: "/",
                    NEXT_PUBLIC_COOKIE_CONSENT_DOMAIN: ".paxful.com",
                    NEXT_PUBLIC_COOKIE_CONSENT_NAME: "cookie_consent",
                    NEXT_PUBLIC_ANALYTICS_APP_NAME: "accounts",
                    NEXT_PUBLIC_GTM_ID: "GTM-TSDDD2JJ",
                    NEXT_PUBLIC_FACEBOOK_APP_ID: E.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ""
                },
                clientPrefix: "NEXT_PUBLIC_"
            });
            var b = r(79407);
            let p = function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]
            };

            function C(e) {
                var t;
                let {
                    children: r
                } = e, d = (0, s.usePathname)(), [_, c] = (0, i.useState)(() => "1" === a.Z.get(I.NEXT_PUBLIC_COOKIE_CONSENT_NAME)), u = (0, i.useRef)((0, o.ZP)({
                    app: I.NEXT_PUBLIC_ANALYTICS_APP_NAME,
                    plugins: [(t = {
                        containerId: I.NEXT_PUBLIC_GTM_ID,
                        enabled: !0
                    }, (0, b.Z)(t))]
                }));
                return (0, i.useEffect)(() => {
                    u.current.page(), u.current.track("pax_page_viewed", {
                        currency: "N/A",
                        user_data: {
                            user_level: "N/A",
                            joined_days_ago: "N/A",
                            user_name: "N/A",
                            user_email: "N/A",
                            user_id: "N/A",
                            user_location: "N/A"
                        }
                    })
                }, [d, u, _]), (0, n.jsxs)(l.AnalyticsContext.Provider, {
                    value: u.current,
                    children: [r, !_ && (0, n.jsx)(N, {
                        onConsent: () => {
                            a.Z.set(I.NEXT_PUBLIC_COOKIE_CONSENT_NAME, "1", {
                                domain: I.NEXT_PUBLIC_COOKIE_CONSENT_DOMAIN
                            }), u.current.plugins.enable(["google-tag-manager"]), c(!0)
                        }
                    })]
                })
            }
        },
        55886: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => o
            });
            var n = r(41289),
                i = r(22258),
                s = r(50714);
            let o = (0, i.D)({
                shared: {
                    NEXT_PUBLIC_PAXFUL_URL: n.Z_8(),
                    NEXT_PUBLIC_BASE_URL: n.Z_8(),
                    NEXT_PUBLIC_PAXFUL_ACCOUNTS_URL: n.Z_8()
                },
                client: {
                    NEXT_PUBLIC_SHIELD_SITE_ID: n.Z_8()
                },
                server: {
                    PAXFUL_API_URL: n.Z_8(),
                    ACCOUNTS_API_URL: n.Z_8()
                },
                runtimeEnv: {
                    PAXFUL_API_URL: s.env.PAXFUL_API_URL || "",
                    ACCOUNTS_API_URL: s.env.ACCOUNTS_API_URL || "",
                    NEXT_PUBLIC_PAXFUL_URL: "https://paxful.com",
                    NEXT_PUBLIC_PAXFUL_ACCOUNTS_URL: "https://accounts.paxful.com",
                    NEXT_PUBLIC_BASE_URL: "https://accounts.paxful.com",
                    NEXT_PUBLIC_SHIELD_SITE_ID: "7ba9745f00a4afa36504b1942c08a59e5f06fc99"
                },
                clientPrefix: "NEXT_PUBLIC_"
            })
        },
        17431: (e, t, r) => {
            "use strict";
            r.d(t, {
                SentryClientOptions: () => s
            });
            var n = r(89039),
                i = r(77663);

            function s(e) {
                let {
                    email: t
                } = e;
                return (0, n.useEffect)(() => {
                    t && i.av({
                        email: t
                    })
                }, [t]), null
            }
        },
        3003: (e, t, r) => {
            "use strict";
            r.d(t, {
                ShieldProvider: () => _,
                x: () => c
            });
            var n = r(44243),
                i = r(89039),
                s = r(31878),
                o = r(34838),
                a = r(55886);
            let l = (0, i.createContext)(null);
            async function d(e) {
                let t = new o.Shield;
                await t.init({
                    siteId: a.O.NEXT_PUBLIC_SHIELD_SITE_ID
                }), await t.getDeviceIntelligence().then(t => {
                    e(t.result.session_id)
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, r = "" !== a.O.NEXT_PUBLIC_SHIELD_SITE_ID, [o, _] = (0, i.useState)(null), c = (0, s.usePathname)();
                return (0, i.useEffect)(() => {
                    r && d(_)
                }, [c]), (0, n.jsx)(l.Provider, {
                    value: o,
                    children: t
                })
            }

            function c() {
                return (0, i.useContext)(l)
            }
        },
        22258: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => s
            });
            var n = r(17700),
                i = r(50714);

            function s(e) {
                var t, r, s, o, a, l, d;
                let _ = null !== (r = null !== (t = e.runtimeEnvStrict) && void 0 !== t ? t : e.runtimeEnv) && void 0 !== r ? r : i.env;
                if (null !== (s = e.emptyStringAsUndefined) && void 0 !== s && s)
                    for (let [e, t] of Object.entries(_)) "" === t && delete _[e];
                if (e.skipValidation) return _;
                let c = "object" == typeof e.client ? e.client : {},
                    u = "object" == typeof e.server ? e.server : {},
                    N = "object" == typeof e.shared ? e.shared : {},
                    f = (0, n.Ryn)(c),
                    P = (0, n.Ryn)(u),
                    E = (0, n.Ryn)(N),
                    I = null !== (o = e.isServer) && void 0 !== o ? o : "Deno" in window,
                    b = (0, n.Ryn)({ ...f.entries,
                        ...E.entries
                    }),
                    p = (0, n.Ryn)({ ...P.entries,
                        ...E.entries,
                        ...f.entries
                    }),
                    C = I ? (0, n.AsG)(p, _) : (0, n.AsG)(b, _),
                    A = null !== (a = e.onValidationError) && void 0 !== a ? a : e => {
                        throw console.error("❌ Invalid environment variables:", (0, n.xHg)(e).nested), Error("Invalid environment variables")
                    },
                    m = null !== (l = e.onInvalidAccess) && void 0 !== l ? l : e => {
                        throw Error("❌ Attempted to access a server-side environment variable on the client")
                    };
                if (!1 === C.success) return A(C.issues);
                let v = t => !e.clientPrefix || !t.startsWith(e.clientPrefix) && !(t in E.entries),
                    L = e => I || !v(e),
                    U = e => "__esModule" === e || "$$typeof" === e,
                    x = (null !== (d = e.extends) && void 0 !== d ? d : []).reduce((e, t) => Object.assign(e, t), {});
                return new Proxy(Object.assign(C.output, x), {
                    get(e, t) {
                        if ("string" == typeof t && !U(t)) return L(t) ? Reflect.get(e, t) : m(t)
                    }
                })
            }
        },
        97159: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => d,
                z: () => c
            });
            var n = r(44243),
                i = r(89039),
                s = r(75603),
                o = r(13888),
                a = r(83892),
                l = r(87055);
            let d = (0, o.j)("relative flex cursor-pointer items-center justify-center whitespace-nowrap no-underline disabled:cursor-not-allowed [&:where(a)]:inline-flex", {
                    variants: {
                        variant: {
                            default: "",
                            primary: "border border-action-primary bg-action-primary text-action-primary hover:border-action-primary-disabled hover:text-action-primary disabled:text-action-primary-disabled dark:disabled:border-action-primary-disabled dark:disabled:bg-action-primary-disabled",
                            secondary: "border border-action-secondary bg-action-secondary text-foreground hover:border-border disabled:border-action-secondary-disabled disabled:bg-action-secondary-disabled disabled:!text-action-secondary-disabled",
                            outline: "border border-border",
                            ghost: "",
                            link: "",
                            empty: ""
                        },
                        size: {
                            sm: "rounded-[16px] px-6 py-1 text-[13px] font-semibold leading-6",
                            md: "h-12 rounded-[40px] px-8 text-[14px] font-semibold leading-6",
                            lg: "h-14 rounded-[40px] px-8 text-[14px] font-semibold leading-6",
                            icon: "",
                            "icon-md": "size-12 gap-2 rounded-full p-3",
                            "icon-lg": "size-14 gap-2 rounded-full p-4",
                            link: "text-[14px]",
                            empty: ""
                        }
                    },
                    defaultVariants: {
                        variant: "primary",
                        size: "md"
                    }
                }),
                _ = (0, o.j)("", {
                    variants: {
                        size: {
                            sm: "-mx-4 size-4",
                            md: "-mx-6 size-6",
                            lg: "-mx-6 size-6",
                            "icon-md": "size-4",
                            "icon-lg": "size-6",
                            icon: "",
                            link: "",
                            empty: ""
                        }
                    },
                    defaultVariants: {
                        size: "md"
                    }
                }),
                c = i.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: i,
                        type: o = "button",
                        size: c,
                        loading: u,
                        disabled: N,
                        asChild: f = !1,
                        children: P,
                        icon: E,
                        iconPosition: I = "prefix",
                        ...b
                    } = e, p = f ? s.g7 : "button";
                    return (0, n.jsxs)(p, {
                        ref: t,
                        className: (0, l.cn)(d({
                            variant: i,
                            size: c,
                            className: r
                        })),
                        disabled: u || N,
                        type: o,
                        ...b,
                        children: [(0, n.jsxs)("div", {
                            className: (0, l.cn)("inline-flex items-center justify-center gap-1", u ? "invisible" : ""),
                            children: [E && "prefix" === I ? (0, n.jsx)(E, {
                                className: (0, l.cn)("!-mr-0", _({
                                    size: c
                                }))
                            }) : null, P, E && "suffix" === I ? (0, n.jsx)(E, {
                                className: (0, l.cn)("!-ml-0", _({
                                    size: c
                                }))
                            }) : null]
                        }), u ? (0, n.jsx)(a.Z, {
                            className: (0, l.cn)(_({
                                size: c
                            }), "absolute animate-spin")
                        }) : null]
                    })
                });
            c.displayName = "Button"
        },
        87984: (e, t, r) => {
            "use strict";
            r.d(t, {
                Toaster: () => o
            });
            var n = r(44243),
                i = r(53547),
                s = r(95029);

            function o(e) {
                let { ...t
                } = e, {
                    theme: r = "system"
                } = (0, i.F)();
                return (0, n.jsx)(s.x7, {
                    pauseWhenPageIsHidden: !0,
                    richColors: !0,
                    className: "toaster group",
                    position: "top-right",
                    theme: r,
                    toastOptions: {
                        classNames: {
                            toast: "group toast group-[.toaster]:text-foreground group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:shadow-lg",
                            description: "group-[.toast]:text-muted",
                            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary",
                            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted"
                        }
                    },
                    ...t
                })
            }
        },
        87055: (e, t, r) => {
            "use strict";
            r.d(t, {
                cn: () => s
            });
            var n = r(9545),
                i = r(72308);

            function s() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, i.m6)((0, n.W)(t))
            }
        },
        55942: () => {}
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [6002, 4439, 6229, 1889, 4009, 1289, 7700, 4838, 3216, 6452, 2691, 4657, 1744], () => t(91271)), _N_E = e.O()
    }
]);