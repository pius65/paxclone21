! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7aae978e-44e8-48fe-95eb-9c9563e2e626", e._sentryDebugIdIdentifier = "sentry-dbid-7aae978e-44e8-48fe-95eb-9c9563e2e626")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        64442: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 2529))
        },
        2529: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => f
            });
            var i = r(44243),
                t = r(89039),
                s = r(1229),
                a = r(77663),
                d = r(24598),
                l = r(97159),
                o = r(55886),
                c = r(8434),
                u = r(65576);

            function f(e) {
                let {
                    error: n,
                    reset: r
                } = e;
                (0, t.useEffect)(() => {
                    (0, a.Tb)(n)
                }, [n]);
                let f = (0, d.useTranslations)("accounts.Error");
                return "message" in n && n.message, (0, i.jsx)("div", {
                    className: "min-h-screen text-foreground max-[990px]:w-full min-[990px]:w-[498px] min-[990px]:shadow-[0_4px_8px_0_#FFFFFF40]",
                    children: (0, i.jsxs)("div", {
                        className: "flex size-full flex-col space-y-6 px-4 py-6 md:px-10",
                        children: [(0, i.jsx)(s.default, {
                            href: o.O.NEXT_PUBLIC_PAXFUL_URL,
                            children: (0, i.jsx)(c.TR, {
                                forceText: !0,
                                className: "mb-4"
                            })
                        }), (0, i.jsx)("div", {
                            className: "mb-6",
                            children: (0, i.jsxs)(s.default, {
                                className: (0, l.d)({
                                    variant: "link",
                                    size: "link"
                                }),
                                href: "/login",
                                children: [(0, i.jsx)(u.Z, {}), "Back"]
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)("h2", {
                                className: "mb-3 text-[32px] font-semibold leading-10 tracking-[-4%]",
                                children: f("title")
                            }), (0, i.jsx)("p", {
                                className: "text-sm text-tertiary",
                                children: f("description", {
                                    digest: n.digest || "unknown"
                                })
                            }), null]
                        }), (0, i.jsx)("div", {
                            className: "mx-0",
                            children: (0, i.jsx)(l.z, {
                                className: "w-full",
                                type: "submit",
                                onClick: () => r(),
                                children: f("action")
                            })
                        })]
                    })
                })
            }
        },
        65576: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => i
            });
            let i = (0, r(71850).Z)("ChevronLeft", [
                ["path", {
                    d: "m15 18-6-6 6-6",
                    key: "1wnfg3"
                }]
            ])
        },
        1229: (e, n, r) => {
            "use strict";
            r.d(n, {
                default: () => t.a
            });
            var i = r(71889),
                t = r.n(i)
        },
        55886: (e, n, r) => {
            "use strict";
            r.d(n, {
                O: () => a
            });
            var i = r(41289),
                t = r(22258),
                s = r(50714);
            let a = (0, t.D)({
                shared: {
                    NEXT_PUBLIC_PAXFUL_URL: i.Z_8(),
                    NEXT_PUBLIC_BASE_URL: i.Z_8(),
                    NEXT_PUBLIC_PAXFUL_ACCOUNTS_URL: i.Z_8()
                },
                client: {
                    NEXT_PUBLIC_SHIELD_SITE_ID: i.Z_8()
                },
                server: {
                    PAXFUL_API_URL: i.Z_8(),
                    ACCOUNTS_API_URL: i.Z_8()
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
        22258: (e, n, r) => {
            "use strict";
            r.d(n, {
                D: () => s
            });
            var i = r(17700),
                t = r(50714);

            function s(e) {
                var n, r, s, a, d, l, o;
                let c = null !== (r = null !== (n = e.runtimeEnvStrict) && void 0 !== n ? n : e.runtimeEnv) && void 0 !== r ? r : t.env;
                if (null !== (s = e.emptyStringAsUndefined) && void 0 !== s && s)
                    for (let [e, n] of Object.entries(c)) "" === n && delete c[e];
                if (e.skipValidation) return c;
                let u = "object" == typeof e.client ? e.client : {},
                    f = "object" == typeof e.server ? e.server : {},
                    m = "object" == typeof e.shared ? e.shared : {},
                    _ = (0, i.Ryn)(u),
                    x = (0, i.Ryn)(f),
                    p = (0, i.Ryn)(m),
                    b = null !== (a = e.isServer) && void 0 !== a ? a : "Deno" in window,
                    v = (0, i.Ryn)({ ..._.entries,
                        ...p.entries
                    }),
                    y = (0, i.Ryn)({ ...x.entries,
                        ...p.entries,
                        ..._.entries
                    }),
                    U = b ? (0, i.AsG)(y, c) : (0, i.AsG)(v, c),
                    h = null !== (d = e.onValidationError) && void 0 !== d ? d : e => {
                        throw console.error("❌ Invalid environment variables:", (0, i.xHg)(e).nested), Error("Invalid environment variables")
                    },
                    L = null !== (l = e.onInvalidAccess) && void 0 !== l ? l : e => {
                        throw Error("❌ Attempted to access a server-side environment variable on the client")
                    };
                if (!1 === U.success) return h(U.issues);
                let g = n => !e.clientPrefix || !n.startsWith(e.clientPrefix) && !(n in p.entries),
                    N = e => b || !g(e),
                    P = e => "__esModule" === e || "$$typeof" === e,
                    E = (null !== (o = e.extends) && void 0 !== o ? o : []).reduce((e, n) => Object.assign(e, n), {});
                return new Proxy(Object.assign(U.output, E), {
                    get(e, n) {
                        if ("string" == typeof n && !P(n)) return N(n) ? Reflect.get(e, n) : L(n)
                    }
                })
            }
        },
        97159: (e, n, r) => {
            "use strict";
            r.d(n, {
                d: () => o,
                z: () => u
            });
            var i = r(44243),
                t = r(89039),
                s = r(75603),
                a = r(13888),
                d = r(83892),
                l = r(87055);
            let o = (0, a.j)("relative flex cursor-pointer items-center justify-center whitespace-nowrap no-underline disabled:cursor-not-allowed [&:where(a)]:inline-flex", {
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
                c = (0, a.j)("", {
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
                u = t.forwardRef((e, n) => {
                    let {
                        className: r,
                        variant: t,
                        type: a = "button",
                        size: u,
                        loading: f,
                        disabled: m,
                        asChild: _ = !1,
                        children: x,
                        icon: p,
                        iconPosition: b = "prefix",
                        ...v
                    } = e, y = _ ? s.g7 : "button";
                    return (0, i.jsxs)(y, {
                        ref: n,
                        className: (0, l.cn)(o({
                            variant: t,
                            size: u,
                            className: r
                        })),
                        disabled: f || m,
                        type: a,
                        ...v,
                        children: [(0, i.jsxs)("div", {
                            className: (0, l.cn)("inline-flex items-center justify-center gap-1", f ? "invisible" : ""),
                            children: [p && "prefix" === b ? (0, i.jsx)(p, {
                                className: (0, l.cn)("!-mr-0", c({
                                    size: u
                                }))
                            }) : null, x, p && "suffix" === b ? (0, i.jsx)(p, {
                                className: (0, l.cn)("!-ml-0", c({
                                    size: u
                                }))
                            }) : null]
                        }), f ? (0, i.jsx)(d.Z, {
                            className: (0, l.cn)(c({
                                size: u
                            }), "absolute animate-spin")
                        }) : null]
                    })
                });
            u.displayName = "Button"
        },
        8434: (e, n, r) => {
            "use strict";
            r.d(n, {
                fU: () => l.default,
                E5: () => o.default,
                TR: () => s,
                Sf: () => d.default,
                Yz: () => a.default,
                HN: () => c.default
            });
            var i = r(44243),
                t = r(87055);
            let s = function(e) {
                let {
                    forceText: n = !1,
                    className: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: (0, t.cn)("flex h-6 flex-row items-center space-x-2.5 md:h-8", r),
                    children: [(0, i.jsx)(d.default, {
                        className: "aspect-square size-6 md:size-8"
                    }), (0, i.jsx)(a.default, {
                        className: (0, t.cn)({
                            hidden: !n
                        }, "h-full text-foreground md:inline")
                    })]
                })
            };
            r(61330);
            var a = r(19829),
                d = r(3353);
            r(83247), r(88255), r(28430), r(74619), r(14209), r(14923), r(90459), r(53727), r(2015), r(73509), r(13465), r(47692), r(82703), r(23145), r(35147), r(66740), r(20910), r(34e3), r(25713), r(72936), r(59650), r(74635), r(51673), r(7178), r(37476), r(7394), r(31572), r(70656);
            var l = r(11332),
                o = r(71049),
                c = r(83999);
            r(14921), r(71142), r(15917), r(51381), r(93131)
        },
        87055: (e, n, r) => {
            "use strict";
            r.d(n, {
                cn: () => s
            });
            var i = r(9545),
                t = r(72308);

            function s() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return (0, t.m6)((0, i.W)(n))
            }
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [6229, 1889, 4009, 1289, 7700, 9563, 6452, 2691, 4657, 1744], () => n(64442)), _N_E = e.O()
    }
]);