! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "32b49fc4-aa92-47f2-8e13-dc4be4f6e97e", e._sentryDebugIdIdentifier = "sentry-dbid-32b49fc4-aa92-47f2-8e13-dc4be4f6e97e")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6498], {
        33936: (e, t, n) => {
            n.d(t, {
                i: () => i,
                Z: () => l
            });
            var s = n(89039),
                r = n(22361),
                a = n(3003);

            function i(e) {
                return { ...e,
                    captcha_id: "",
                    captcha_output: "",
                    gen_time: "",
                    lot_number: "",
                    pass_token: ""
                }
            }

            function l(e) {
                var t;
                let {
                    captcha: n,
                    state: i,
                    reset: l
                } = function(e) {
                    let [t, n] = (0, s.useState)(), [r, a] = (0, s.useState)("loading"), {
                        captchaId: i,
                        ...l
                    } = e;
                    (0, s.useEffect)(() => (window.initGeetest4({
                        captchaId: "accounts" === i ? "e2363f01d85f513f7d9682f1941e228f" : "19da7d84951b18b4f32354ee24c95aa2",
                        protocol: "https://",
                        ...l
                    }, e => {
                        n(e)
                    }), () => {
                        t && t.destroy()
                    }), [i]), (0, s.useEffect)(() => {
                        t && (t.onReady(() => {
                            a("ready")
                        }), t.onSuccess(() => {
                            a("success")
                        }), t.onError(() => {
                            a("error")
                        }), t.onClose(() => {
                            a("closed")
                        }))
                    }, [t]);
                    let c = (0, s.useCallback)(() => {
                        t && t.reset(), a("ready")
                    }, [t]);
                    return {
                        captcha: t,
                        state: r,
                        reset: c
                    }
                }({
                    product: "bind",
                    captchaId: null == e ? void 0 : e.captchaId
                }), c = (0, r.cI)({ ...e,
                    validatorAdapter: null !== (t = null == e ? void 0 : e.validatorAdapter) && void 0 !== t ? t : (0, r.zr)()
                }), o = (0, a.x)();
                async function d() {
                    if ("success" === i) {
                        try {
                            await c.handleSubmit()
                        } finally {
                            l()
                        }
                        return
                    }
                    "ready" === i && (null == n || n.showCaptcha())
                }
                return (0, s.useEffect)(() => {
                    n && (n.onClose(() => {
                        l()
                    }), n.onSuccess(() => {
                        let e = null == n ? void 0 : n.getValidate();
                        return e && (c.setFieldValue("captcha_id", e.captcha_id), c.setFieldValue("captcha_output", e.captcha_output), c.setFieldValue("gen_time", e.gen_time), c.setFieldValue("lot_number", e.lot_number), c.setFieldValue("pass_token", e.pass_token)), c.handleSubmit().finally(() => {
                            l()
                        })
                    }))
                }, [n, l, c]), (0, s.useEffect)(() => {
                    o && c.setFieldValue("shield_session_id", o)
                }, [c, o]), { ...c,
                    handleSubmit: d
                }
            }
        },
        55886: (e, t, n) => {
            n.d(t, {
                O: () => i
            });
            var s = n(41289),
                r = n(22258),
                a = n(50714);
            let i = (0, r.D)({
                shared: {
                    NEXT_PUBLIC_PAXFUL_URL: s.Z_8(),
                    NEXT_PUBLIC_BASE_URL: s.Z_8(),
                    NEXT_PUBLIC_PAXFUL_ACCOUNTS_URL: s.Z_8()
                },
                client: {
                    NEXT_PUBLIC_SHIELD_SITE_ID: s.Z_8()
                },
                server: {
                    PAXFUL_API_URL: s.Z_8(),
                    ACCOUNTS_API_URL: s.Z_8()
                },
                runtimeEnv: {
                    PAXFUL_API_URL: a.env.PAXFUL_API_URL || "",
                    ACCOUNTS_API_URL: a.env.ACCOUNTS_API_URL || "",
                    NEXT_PUBLIC_PAXFUL_URL: "https://paxful.com",
                    NEXT_PUBLIC_PAXFUL_ACCOUNTS_URL: "https://accounts.paxful.com",
                    NEXT_PUBLIC_BASE_URL: "https://accounts.paxful.com",
                    NEXT_PUBLIC_SHIELD_SITE_ID: "7ba9745f00a4afa36504b1942c08a59e5f06fc99"
                },
                clientPrefix: "NEXT_PUBLIC_"
            })
        },
        3003: (e, t, n) => {
            n.d(t, {
                ShieldProvider: () => d,
                x: () => u
            });
            var s = n(44243),
                r = n(89039),
                a = n(31878),
                i = n(34838),
                l = n(55886);
            let c = (0, r.createContext)(null);
            async function o(e) {
                let t = new i.Shield;
                await t.init({
                    siteId: l.O.NEXT_PUBLIC_SHIELD_SITE_ID
                }), await t.getDeviceIntelligence().then(t => {
                    e(t.result.session_id)
                })
            }

            function d(e) {
                let {
                    children: t
                } = e, n = "" !== l.O.NEXT_PUBLIC_SHIELD_SITE_ID, [i, d] = (0, r.useState)(null), u = (0, a.usePathname)();
                return (0, r.useEffect)(() => {
                    n && o(d)
                }, [u]), (0, s.jsx)(c.Provider, {
                    value: i,
                    children: t
                })
            }

            function u() {
                return (0, r.useContext)(c)
            }
        },
        22258: (e, t, n) => {
            n.d(t, {
                D: () => a
            });
            var s = n(17700),
                r = n(50714);

            function a(e) {
                var t, n, a, i, l, c, o;
                let d = null !== (n = null !== (t = e.runtimeEnvStrict) && void 0 !== t ? t : e.runtimeEnv) && void 0 !== n ? n : r.env;
                if (null !== (a = e.emptyStringAsUndefined) && void 0 !== a && a)
                    for (let [e, t] of Object.entries(d)) "" === t && delete d[e];
                if (e.skipValidation) return d;
                let u = "object" == typeof e.client ? e.client : {},
                    f = "object" == typeof e.server ? e.server : {},
                    m = "object" == typeof e.shared ? e.shared : {},
                    p = (0, s.Ryn)(u),
                    _ = (0, s.Ryn)(f),
                    x = (0, s.Ryn)(m),
                    h = null !== (i = e.isServer) && void 0 !== i ? i : "Deno" in window,
                    v = (0, s.Ryn)({ ...p.entries,
                        ...x.entries
                    }),
                    y = (0, s.Ryn)({ ..._.entries,
                        ...x.entries,
                        ...p.entries
                    }),
                    g = h ? (0, s.AsG)(y, d) : (0, s.AsG)(v, d),
                    E = null !== (l = e.onValidationError) && void 0 !== l ? l : e => {
                        throw console.error("❌ Invalid environment variables:", (0, s.xHg)(e).nested), Error("Invalid environment variables")
                    },
                    b = null !== (c = e.onInvalidAccess) && void 0 !== c ? c : e => {
                        throw Error("❌ Attempted to access a server-side environment variable on the client")
                    };
                if (!1 === g.success) return E(g.issues);
                let I = t => !e.clientPrefix || !t.startsWith(e.clientPrefix) && !(t in x.entries),
                    L = e => h || !I(e),
                    N = e => "__esModule" === e || "$$typeof" === e,
                    U = (null !== (o = e.extends) && void 0 !== o ? o : []).reduce((e, t) => Object.assign(e, t), {});
                return new Proxy(Object.assign(g.output, U), {
                    get(e, t) {
                        if ("string" == typeof t && !N(t)) return L(t) ? Reflect.get(e, t) : b(t)
                    }
                })
            }
        },
        18321: (e, t, n) => {
            n.d(t, {
                W: () => y
            });
            var s = n(44243),
                r = n(89039),
                a = n(41289),
                i = n(24598),
                l = n(16357),
                c = n(83892),
                o = n(87055);
            let d = async () => {
                    let e = await Promise.all([n.e(3058), n.e(1321)]).then(n.bind(n, 61321)),
                        t = await Promise.all([n.e(6250), n.e(655), n.e(4367), n.e(1254)]).then(n.bind(n, 21254)),
                        s = {
                            dictionary: { ...e.dictionary,
                                ...t.dictionary
                            },
                            graphs: e.adjacencyGraphs,
                            translations: t.translations
                        };
                    l.Mu.setOptions(s)
                },
                u = {
                    0: "text-red-500",
                    1: "text-yellow-500",
                    2: "text-green-500",
                    3: "text-green-500",
                    4: "text-green-500"
                };

            function f(e) {
                let {
                    password: t = ""
                } = e, [n, a] = (0, r.useState)(!1), [f, m] = (0, r.useState)(), p = (0, r.useDeferredValue)(t), _ = (0, i.useTranslations)("common.Forms.password.strength");
                return ((0, r.useEffect)(() => {
                    d().then(() => {
                        a(!0)
                    })
                }), (0, r.useEffect)(() => {
                    n && (0, l.vM)(p || "").then(m)
                }, [p, n]), f && n) ? (0, s.jsx)("span", {
                    className: (0, o.cn)(u[f.score]),
                    children: _("".concat(f.score))
                }) : (0, s.jsx)(c.Z, {
                    className: "ml-2 size-3 animate-spin"
                })
            }
            var m = n(97159),
                p = n(66363),
                _ = n(8434),
                x = n(37737),
                h = n(3304),
                v = n(81797);

            function y(e) {
                let {
                    className: t,
                    isNewPassword: n,
                    showStrength: a,
                    value: l,
                    hasError: c,
                    ...d
                } = e, u = (0, i.useTranslations)("common.Forms.password"), [_, v] = (0, r.useState)(!1), y = d["aria-hidden"];
                return (0, s.jsxs)("div", {
                    "aria-hidden": y,
                    className: (0, o.cn)("w-full", t),
                    children: [(0, s.jsxs)("div", {
                        className: "relative w-full",
                        children: [(0, s.jsx)(p.I, {
                            required: !0,
                            autoComplete: n ? "new-password" : "current-password",
                            className: "pr-6",
                            hasError: c,
                            maxLength: n ? 72 : void 0,
                            minLength: n ? 8 : void 0,
                            ...d,
                            defaultValue: l,
                            type: _ ? "text" : "password"
                        }), (0, s.jsx)(m.z, {
                            className: (0, o.cn)("absolute top-[calc(50%-10px)] rounded-full", c ? "right-8" : "right-4"),
                            size: "icon",
                            variant: "ghost",
                            onClick: () => v(!_),
                            children: _ ? (0, s.jsx)(x.Z, {
                                className: "size-5 text-foreground"
                            }) : (0, s.jsx)(h.Z, {
                                className: "size-5 text-tertiary"
                            })
                        })]
                    }), a ? (0, s.jsxs)("div", {
                        className: "mt-2 flex items-center whitespace-pre text-tertiary",
                        children: [u("strengthLabel"), ": ", (0, s.jsx)(f, {
                            password: l
                        })]
                    }) : null, a ? (0, s.jsx)(g, {
                        value: l
                    }) : null]
                })
            }

            function g(e) {
                let {
                    value: t
                } = e, n = (0, i.useTranslations)("common.Forms.password"), r = (0, a.AsG)(v.kE, t), l = (0, a.AsG)(v.wX, t), c = (0, a.AsG)(v.Pq, t), d = (0, a.AsG)(v.Rx, t), u = (0, a.AsG)(v.mi, t);
                return (0, s.jsxs)("div", {
                    className: "mt-4 flex flex-col space-y-2 text-sm",
                    children: [(0, s.jsxs)("div", {
                        className: (0, o.cn)("flex items-center justify-start", r.success ? "text-primary" : "text-tertiary"),
                        children: [(0, s.jsx)(_.fU, {
                            className: (0, o.cn)("mr-2 size-5")
                        }), (0, s.jsx)("span", {
                            children: n("validation.length")
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, o.cn)("flex items-center justify-start", l.success ? "text-primary" : "text-tertiary"),
                        children: [(0, s.jsx)(_.fU, {
                            className: (0, o.cn)("mr-2 size-5")
                        }), (0, s.jsx)("span", {
                            children: n("validation.lowercase")
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, o.cn)("flex items-center justify-start", c.success ? "text-primary" : "text-tertiary"),
                        children: [(0, s.jsx)(_.fU, {
                            className: (0, o.cn)("mr-2 size-5")
                        }), (0, s.jsx)("span", {
                            children: n("validation.uppercase")
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, o.cn)("flex items-center justify-start", d.success ? "text-primary" : "text-tertiary"),
                        children: [(0, s.jsx)(_.fU, {
                            className: (0, o.cn)("mr-2 size-5")
                        }), (0, s.jsx)("span", {
                            children: n("validation.number")
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, o.cn)("flex items-center justify-start", u.success ? "text-primary" : "text-tertiary"),
                        children: [(0, s.jsx)(_.fU, {
                            className: (0, o.cn)("mr-2 size-5")
                        }), (0, s.jsx)("span", {
                            children: n("validation.special")
                        })]
                    })]
                })
            }
        },
        49079: (e, t, n) => {
            n.d(t, {
                _: () => c
            });
            var s = n(44243),
                r = n(66363),
                a = n(4932),
                i = n(21715),
                l = n(18321);

            function c(e) {
                let {
                    autoComplete: t,
                    children: n,
                    className: c,
                    id: o,
                    label: d,
                    name: u,
                    placeholder: f,
                    required: m,
                    size: p,
                    variant: _,
                    type: x = "text",
                    ref: h,
                    fieldSizing: v,
                    validate: y,
                    ...g
                } = e, {
                    useField: E
                } = (0, a.useFormContext)(), {
                    handleChange: b,
                    handleBlur: I,
                    getMeta: L,
                    state: N
                } = E({
                    name: u,
                    validators: {
                        onBlur: y
                    },
                    ...g
                }), {
                    errors: U
                } = L(), w = "password" === x ? l.W : r.I;
                return (0, s.jsxs)(i.g, {
                    className: c,
                    errors: U,
                    label: d,
                    name: u,
                    children: [n, (0, s.jsx)(w, {
                        ref: h,
                        autoComplete: t || ("email" === x ? "email" : "tel" === x ? "mobile" : x),
                        fieldSizing: v,
                        hasError: (null == U ? void 0 : U.length) > 0,
                        id: o,
                        name: u,
                        placeholder: f,
                        required: m,
                        size: p,
                        type: x,
                        value: N.value,
                        variant: _,
                        onBlur: I,
                        onChange: e => b(e.target.value)
                    })]
                })
            }
        },
        22361: (e, t, n) => {
            n.d(t, {
                Cx: () => l.FieldOTP,
                _o: () => r.FormErrors,
                RV: () => r.FormProvider,
                Mm: () => c.SubmitButton,
                LZ: () => a.L,
                cI: () => s.cI,
                Gc: () => i.useFormContext,
                zr: () => a.z
            });
            var s = n(87094),
                r = n(95322),
                a = n(83482);
            n(44243), n(60859);
            var i = n(4932),
                l = n(74837),
                c = n(81435)
        },
        66363: (e, t, n) => {
            n.d(t, {
                I: () => f
            });
            var s = n(44243),
                r = n(89039),
                a = n(13888),
                i = n(87055),
                l = n(8434);
            let c = (0, a.j)("flex items-center rounded-[16px] font-medium !text-foreground placeholder:!text-tertiary dark:border-transparent", {
                    variants: {
                        variant: {
                            default: "bg-container",
                            secondary: "bg-container-higher",
                            ghost: ""
                        },
                        size: {
                            default: "h-14 p-4 text-[15px] leading-6",
                            sm: "",
                            lg: "h-14 p-4 text-[15px] leading-6"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = ["font", "letterSpacing", "textTransform", "fontKerning", "fontOpticalSizing", "fontSizeAdjust", "fontStretch", "fontVariant", "fontVariationSettings", "fontSynthesis", "textIndent"],
                d = {
                    all: "initial",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "0px",
                    height: "0px",
                    visibility: "hidden",
                    overflow: "scroll",
                    whiteSpace: "pre"
                };

            function u(e) {
                var t;
                let {
                    className: n,
                    fieldSizing: a,
                    ref: l,
                    ...c
                } = e, u = (0, r.useRef)(null);
                return (0, r.useLayoutEffect)(() => {
                    let e = u.current;

                    function t() {
                        "content" === a && (e.style.width = function(e) {
                            var t;
                            let n;
                            let s = document.createElement("span");
                            s.innerText = "" === e.value ? e.placeholder : e.value;
                            let r = window.getComputedStyle(e);
                            Object.assign(s.style, d), o.forEach(e => {
                                s.style[e] = r[e]
                            }), document.body.appendChild(s);
                            let a = (t = s.scrollWidth, n = "calc(" + "".concat(t, "px"), "border-box" === r.boxSizing && (n += " + ".concat(r.paddingLeft, " + ").concat(r.paddingRight), n += " + ".concat(r.borderLeftWidth, " + ").concat(r.borderRightWidth)), n += ")");
                            return document.body.removeChild(s), a
                        }(e))
                    }
                    return t(), e.addEventListener("input", t), () => {
                        var n, s;
                        e.style.width = null == (s = null === (n = c.style) || void 0 === n ? void 0 : n.width) ? "" : "number" == typeof s ? "".concat(s, "px") : s, e.removeEventListener("input", t)
                    }
                }, [c.value, a, null === (t = c.style) || void 0 === t ? void 0 : t.width]), (0, s.jsx)("input", {
                    ref: e => {
                        u.current = e, "function" == typeof l ? l(e) : null != l && e && (l.current = e)
                    },
                    className: (0, i.cn)("bg-transparent text-foreground outline-0 placeholder:text-tertiary", n),
                    ...c
                })
            }

            function f(e) {
                let {
                    className: t,
                    size: n,
                    type: r,
                    frameless: a,
                    hasError: o,
                    label: d,
                    variant: f,
                    fieldSizing: m,
                    ref: p,
                    ..._
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, i.cn)(c({
                        size: n,
                        variant: f
                    }), "relative", {
                        border: !a
                    }, {
                        "h-auto": a
                    }, {
                        "bg-danger-the-lightest": o && !a
                    }, {
                        "border-danger": o && !a
                    }, t),
                    children: [(0, s.jsx)(u, {
                        ref: p,
                        className: "grow",
                        inputMode: "number" === r ? "decimal" : void 0,
                        type: "number" === r ? "text" : r,
                        ..._
                    }), o ? (0, s.jsx)(l.E5, {
                        className: "absolute right-4 top-[calc(50%-12px)] size-6 fill-danger"
                    }) : null]
                })
            }
        },
        8434: (e, t, n) => {
            n.d(t, {
                fU: () => c.default,
                E5: () => o.default,
                TR: () => a,
                Sf: () => l.default,
                Yz: () => i.default,
                HN: () => d.default
            });
            var s = n(44243),
                r = n(87055);
            let a = function(e) {
                let {
                    forceText: t = !1,
                    className: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, r.cn)("flex h-6 flex-row items-center space-x-2.5 md:h-8", n),
                    children: [(0, s.jsx)(l.default, {
                        className: "aspect-square size-6 md:size-8"
                    }), (0, s.jsx)(i.default, {
                        className: (0, r.cn)({
                            hidden: !t
                        }, "h-full text-foreground md:inline")
                    })]
                })
            };
            n(61330);
            var i = n(19829),
                l = n(3353);
            n(83247), n(88255), n(28430), n(74619), n(14209), n(14923), n(90459), n(53727), n(2015), n(73509), n(13465), n(47692), n(82703), n(23145), n(35147), n(66740), n(20910), n(34e3), n(25713), n(72936), n(59650), n(74635), n(51673), n(7178), n(37476), n(7394), n(31572), n(70656);
            var c = n(11332),
                o = n(71049),
                d = n(83999);
            n(14921), n(71142), n(15917), n(51381), n(93131)
        },
        81797: (e, t, n) => {
            n.d(t, {
                Pq: () => i,
                Rx: () => l,
                kE: () => r,
                mi: () => c,
                wX: () => a
            });
            var s = n(41289);
            let r = s.zGw(s.Z_8(), s.EiV(8), s.BSk(72)),
                a = s.zGw(s.Z_8(), s.SzQ(/^(?=.*[a-z])/)),
                i = s.zGw(s.Z_8(), s.SzQ(/^(?=.*[A-Z])/)),
                l = s.zGw(s.Z_8(), s.SzQ(/^(?=.*[0-9])/)),
                c = s.zGw(s.Z_8(), s.SzQ(/^(?=.*[!@#$%^&*])/))
        }
    }
]);