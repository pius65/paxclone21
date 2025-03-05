! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "41ae9c2a-7b8c-4221-a96f-c7af38d83087", e._sentryDebugIdIdentifier = "sentry-dbid-41ae9c2a-7b8c-4221-a96f-c7af38d83087")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744], {
        69195: (e, s, n) => {
            Promise.resolve().then(n.t.bind(n, 63739, 23)), Promise.resolve().then(n.t.bind(n, 96390, 23)), Promise.resolve().then(n.t.bind(n, 4918, 23)), Promise.resolve().then(n.t.bind(n, 89676, 23)), Promise.resolve().then(n.t.bind(n, 75141, 23)), Promise.resolve().then(n.t.bind(n, 97014, 23)), Promise.resolve().then(n.t.bind(n, 43158, 23))
        },
        21928: (e, s, n) => {
            "use strict";
            var t = n(41096),
                r = n(39860),
                a = n(50714);
            globalThis.__sentryRewritesTunnelPath__ = void 0, globalThis.SENTRY_RELEASE = {
                id: "YB4c0KMMF6ve82WMv9GUg"
            }, globalThis.__sentryBasePath = void 0, globalThis.__rewriteFramesAssetPrefixPath__ = "", t.S1({
                environment: a.env.NEXT_PUBLIC_ENVIRONMENT,
                dsn: "https://34d8d41960e64a9c85b91c358a8e90dd@sentry.paxful.com/121",
                tracesSampleRate: "production" === a.env.NEXT_PUBLIC_ENVIRONMENT ? .1 : 1,
                integrations: [r.G()],
                replaysSessionSampleRate: .1,
                replaysOnErrorSampleRate: 1
            })
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [6452, 2691, 4657], () => (s(21928), s(72918), s(69195))), _N_E = e.O()
    }
]);