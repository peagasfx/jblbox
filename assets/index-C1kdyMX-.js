var Ld = e => {
    throw TypeError(e)
}
;
var al = (e, t, n) => t.has(e) || Ld("Cannot " + n);
var N = (e, t, n) => (al(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Ld("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , W = (e, t, n, r) => (al(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , Oe = (e, t, n) => (al(e, t, "access private method"),
n);
var Qs = (e, t, n, r) => ({
    set _(o) {
        W(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function Hy(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, o);
                    s && Object.defineProperty(e, o, s.get ? s : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
function uh(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ch = {
    exports: {}
}
  , vi = {}
  , dh = {
    exports: {}
}
  , q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _s = Symbol.for("react.element")
  , Qy = Symbol.for("react.portal")
  , Yy = Symbol.for("react.fragment")
  , qy = Symbol.for("react.strict_mode")
  , Gy = Symbol.for("react.profiler")
  , Ky = Symbol.for("react.provider")
  , Xy = Symbol.for("react.context")
  , Jy = Symbol.for("react.forward_ref")
  , Zy = Symbol.for("react.suspense")
  , ex = Symbol.for("react.memo")
  , tx = Symbol.for("react.lazy")
  , Id = Symbol.iterator;
function nx(e) {
    return e === null || typeof e != "object" ? null : (e = Id && e[Id] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var fh = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , ph = Object.assign
  , hh = {};
function ko(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = hh,
    this.updater = n || fh
}
ko.prototype.isReactComponent = {};
ko.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ko.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function mh() {}
mh.prototype = ko.prototype;
function sc(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = hh,
    this.updater = n || fh
}
var ac = sc.prototype = new mh;
ac.constructor = sc;
ph(ac, ko.prototype);
ac.isPureReactComponent = !0;
var Fd = Array.isArray
  , gh = Object.prototype.hasOwnProperty
  , ic = {
    current: null
}
  , vh = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function yh(e, t, n) {
    var r, o = {}, s = null, a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            gh.call(t, r) && !vh.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1)
        o.children = n;
    else if (1 < i) {
        for (var l = Array(i), u = 0; u < i; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps,
        i)
            o[r] === void 0 && (o[r] = i[r]);
    return {
        $$typeof: _s,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: ic.current
    }
}
function rx(e, t) {
    return {
        $$typeof: _s,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function lc(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _s
}
function ox(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var $d = /\/+/g;
function il(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ox("" + e.key) : t.toString(36)
}
function xa(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (s) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case _s:
            case Qy:
                a = !0
            }
        }
    if (a)
        return a = e,
        o = o(a),
        e = r === "" ? "." + il(a, 0) : r,
        Fd(o) ? (n = "",
        e != null && (n = e.replace($d, "$&/") + "/"),
        xa(o, t, n, "", function(u) {
            return u
        })) : o != null && (lc(o) && (o = rx(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace($d, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (a = 0,
    r = r === "" ? "." : r + ":",
    Fd(e))
        for (var i = 0; i < e.length; i++) {
            s = e[i];
            var l = r + il(s, i);
            a += xa(s, t, n, l, o)
        }
    else if (l = nx(e),
    typeof l == "function")
        for (e = l.call(e),
        i = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + il(s, i++),
            a += xa(s, t, n, l, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ys(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return xa(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function sx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Be = {
    current: null
}
  , wa = {
    transition: null
}
  , ax = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: wa,
    ReactCurrentOwner: ic
};
function xh() {
    throw Error("act(...) is not supported in production builds of React.")
}
q.Children = {
    map: Ys,
    forEach: function(e, t, n) {
        Ys(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ys(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ys(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!lc(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
q.Component = ko;
q.Fragment = Yy;
q.Profiler = Gy;
q.PureComponent = sc;
q.StrictMode = qy;
q.Suspense = Zy;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax;
q.act = xh;
q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ph({}, e.props)
      , o = e.key
      , s = e.ref
      , a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        a = ic.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var i = e.type.defaultProps;
        for (l in t)
            gh.call(t, l) && !vh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var u = 0; u < l; u++)
            i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: _s,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
;
q.createContext = function(e) {
    return e = {
        $$typeof: Xy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ky,
        _context: e
    },
    e.Consumer = e
}
;
q.createElement = yh;
q.createFactory = function(e) {
    var t = yh.bind(null, e);
    return t.type = e,
    t
}
;
q.createRef = function() {
    return {
        current: null
    }
}
;
q.forwardRef = function(e) {
    return {
        $$typeof: Jy,
        render: e
    }
}
;
q.isValidElement = lc;
q.lazy = function(e) {
    return {
        $$typeof: tx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: sx
    }
}
;
q.memo = function(e, t) {
    return {
        $$typeof: ex,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
q.startTransition = function(e) {
    var t = wa.transition;
    wa.transition = {};
    try {
        e()
    } finally {
        wa.transition = t
    }
}
;
q.unstable_act = xh;
q.useCallback = function(e, t) {
    return Be.current.useCallback(e, t)
}
;
q.useContext = function(e) {
    return Be.current.useContext(e)
}
;
q.useDebugValue = function() {}
;
q.useDeferredValue = function(e) {
    return Be.current.useDeferredValue(e)
}
;
q.useEffect = function(e, t) {
    return Be.current.useEffect(e, t)
}
;
q.useId = function() {
    return Be.current.useId()
}
;
q.useImperativeHandle = function(e, t, n) {
    return Be.current.useImperativeHandle(e, t, n)
}
;
q.useInsertionEffect = function(e, t) {
    return Be.current.useInsertionEffect(e, t)
}
;
q.useLayoutEffect = function(e, t) {
    return Be.current.useLayoutEffect(e, t)
}
;
q.useMemo = function(e, t) {
    return Be.current.useMemo(e, t)
}
;
q.useReducer = function(e, t, n) {
    return Be.current.useReducer(e, t, n)
}
;
q.useRef = function(e) {
    return Be.current.useRef(e)
}
;
q.useState = function(e) {
    return Be.current.useState(e)
}
;
q.useSyncExternalStore = function(e, t, n) {
    return Be.current.useSyncExternalStore(e, t, n)
}
;
q.useTransition = function() {
    return Be.current.useTransition()
}
;
q.version = "18.3.1";
dh.exports = q;
var g = dh.exports;
const R = uh(g)
  , uc = Hy({
    __proto__: null,
    default: R
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ix = g
  , lx = Symbol.for("react.element")
  , ux = Symbol.for("react.fragment")
  , cx = Object.prototype.hasOwnProperty
  , dx = ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function wh(e, t, n) {
    var r, o = {}, s = null, a = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        cx.call(t, r) && !fx.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: lx,
        type: e,
        key: s,
        ref: a,
        props: o,
        _owner: dx.current
    }
}
vi.Fragment = ux;
vi.jsx = wh;
vi.jsxs = wh;
ch.exports = vi;
var c = ch.exports
  , bh = {
    exports: {}
}
  , nt = {}
  , Sh = {
    exports: {}
}
  , Ch = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, j) {
        var D = P.length;
        P.push(j);
        e: for (; 0 < D; ) {
            var V = D - 1 >>> 1
              , F = P[V];
            if (0 < o(F, j))
                P[V] = j,
                P[D] = F,
                D = V;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var j = P[0]
          , D = P.pop();
        if (D !== j) {
            P[0] = D;
            e: for (var V = 0, F = P.length, Y = F >>> 1; V < Y; ) {
                var K = 2 * (V + 1) - 1
                  , xe = P[K]
                  , Re = K + 1
                  , Z = P[Re];
                if (0 > o(xe, D))
                    Re < F && 0 > o(Z, xe) ? (P[V] = Z,
                    P[Re] = D,
                    V = Re) : (P[V] = xe,
                    P[K] = D,
                    V = K);
                else if (Re < F && 0 > o(Z, D))
                    P[V] = Z,
                    P[Re] = D,
                    V = Re;
                else
                    break e
            }
        }
        return j
    }
    function o(P, j) {
        var D = P.sortIndex - j.sortIndex;
        return D !== 0 ? D : P.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var a = Date
          , i = a.now();
        e.unstable_now = function() {
            return a.now() - i
        }
    }
    var l = []
      , u = []
      , d = 1
      , f = null
      , m = 3
      , p = !1
      , b = !1
      , v = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function x(P) {
        for (var j = n(u); j !== null; ) {
            if (j.callback === null)
                r(u);
            else if (j.startTime <= P)
                r(u),
                j.sortIndex = j.expirationTime,
                t(l, j);
            else
                break;
            j = n(u)
        }
    }
    function S(P) {
        if (v = !1,
        x(P),
        !b)
            if (n(l) !== null)
                b = !0,
                z(C);
            else {
                var j = n(u);
                j !== null && U(S, j.startTime - P)
            }
    }
    function C(P, j) {
        b = !1,
        v && (v = !1,
        y(T),
        T = -1),
        p = !0;
        var D = m;
        try {
            for (x(j),
            f = n(l); f !== null && (!(f.expirationTime > j) || P && !$()); ) {
                var V = f.callback;
                if (typeof V == "function") {
                    f.callback = null,
                    m = f.priorityLevel;
                    var F = V(f.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof F == "function" ? f.callback = F : f === n(l) && r(l),
                    x(j)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Y = !0;
            else {
                var K = n(u);
                K !== null && U(S, K.startTime - j),
                Y = !1
            }
            return Y
        } finally {
            f = null,
            m = D,
            p = !1
        }
    }
    var E = !1
      , k = null
      , T = -1
      , M = 5
      , A = -1;
    function $() {
        return !(e.unstable_now() - A < M)
    }
    function I() {
        if (k !== null) {
            var P = e.unstable_now();
            A = P;
            var j = !0;
            try {
                j = k(!0, P)
            } finally {
                j ? Q() : (E = !1,
                k = null)
            }
        } else
            E = !1
    }
    var Q;
    if (typeof h == "function")
        Q = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var _ = new MessageChannel
          , G = _.port2;
        _.port1.onmessage = I,
        Q = function() {
            G.postMessage(null)
        }
    } else
        Q = function() {
            w(I, 0)
        }
        ;
    function z(P) {
        k = P,
        E || (E = !0,
        Q())
    }
    function U(P, j) {
        T = w(function() {
            P(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        b || p || (b = !0,
        z(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = m
        }
        var D = m;
        m = j;
        try {
            return P()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, j) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var D = m;
        m = P;
        try {
            return j()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, j, D) {
        var V = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? V + D : V) : D = V,
        P) {
        case 1:
            var F = -1;
            break;
        case 2:
            F = 250;
            break;
        case 5:
            F = 1073741823;
            break;
        case 4:
            F = 1e4;
            break;
        default:
            F = 5e3
        }
        return F = D + F,
        P = {
            id: d++,
            callback: j,
            priorityLevel: P,
            startTime: D,
            expirationTime: F,
            sortIndex: -1
        },
        D > V ? (P.sortIndex = D,
        t(u, P),
        n(l) === null && P === n(u) && (v ? (y(T),
        T = -1) : v = !0,
        U(S, D - V))) : (P.sortIndex = F,
        t(l, P),
        b || p || (b = !0,
        z(C))),
        P
    }
    ,
    e.unstable_shouldYield = $,
    e.unstable_wrapCallback = function(P) {
        var j = m;
        return function() {
            var D = m;
            m = j;
            try {
                return P.apply(this, arguments)
            } finally {
                m = D
            }
        }
    }
}
)(Ch);
Sh.exports = Ch;
var px = Sh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx = g
  , et = px;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Eh = new Set
  , is = {};
function Er(e, t) {
    mo(e, t),
    mo(e + "Capture", t)
}
function mo(e, t) {
    for (is[e] = t,
    e = 0; e < t.length; e++)
        Eh.add(t[e])
}
var rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Kl = Object.prototype.hasOwnProperty
  , mx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , zd = {}
  , Bd = {};
function gx(e) {
    return Kl.call(Bd, e) ? !0 : Kl.call(zd, e) ? !1 : mx.test(e) ? Bd[e] = !0 : (zd[e] = !0,
    !1)
}
function vx(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function yx(e, t, n, r) {
    if (t === null || typeof t > "u" || vx(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function We(e, t, n, r, o, s, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = a
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new We(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new We(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new We(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new We(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new We(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new We(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new We(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new We(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new We(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var cc = /[\-:]([a-z])/g;
function dc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(cc, dc);
    je[t] = new We(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(cc, dc);
    je[t] = new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(cc, dc);
    je[t] = new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new We(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new We(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function fc(e, t, n, r) {
    var o = je.hasOwnProperty(t) ? je[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yx(t, n, o, r) && (n = null),
    r || o === null ? gx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var cn = hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , qs = Symbol.for("react.element")
  , Fr = Symbol.for("react.portal")
  , $r = Symbol.for("react.fragment")
  , pc = Symbol.for("react.strict_mode")
  , Xl = Symbol.for("react.profiler")
  , kh = Symbol.for("react.provider")
  , Nh = Symbol.for("react.context")
  , hc = Symbol.for("react.forward_ref")
  , Jl = Symbol.for("react.suspense")
  , Zl = Symbol.for("react.suspense_list")
  , mc = Symbol.for("react.memo")
  , Cn = Symbol.for("react.lazy")
  , Ph = Symbol.for("react.offscreen")
  , Wd = Symbol.iterator;
function Do(e) {
    return e === null || typeof e != "object" ? null : (e = Wd && e[Wd] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, ll;
function Ho(e) {
    if (ll === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ll = t && t[1] || ""
        }
    return `
` + ll + e
}
var ul = !1;
function cl(e, t) {
    if (!e || ul)
        return "";
    ul = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), s = r.stack.split(`
`), a = o.length - 1, i = s.length - 1; 1 <= a && 0 <= i && o[a] !== s[i]; )
                i--;
            for (; 1 <= a && 0 <= i; a--,
            i--)
                if (o[a] !== s[i]) {
                    if (a !== 1 || i !== 1)
                        do
                            if (a--,
                            i--,
                            0 > i || o[a] !== s[i]) {
                                var l = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= a && 0 <= i);
                    break
                }
        }
    } finally {
        ul = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ho(e) : ""
}
function xx(e) {
    switch (e.tag) {
    case 5:
        return Ho(e.type);
    case 16:
        return Ho("Lazy");
    case 13:
        return Ho("Suspense");
    case 19:
        return Ho("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = cl(e.type, !1),
        e;
    case 11:
        return e = cl(e.type.render, !1),
        e;
    case 1:
        return e = cl(e.type, !0),
        e;
    default:
        return ""
    }
}
function eu(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case $r:
        return "Fragment";
    case Fr:
        return "Portal";
    case Xl:
        return "Profiler";
    case pc:
        return "StrictMode";
    case Jl:
        return "Suspense";
    case Zl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Nh:
            return (e.displayName || "Context") + ".Consumer";
        case kh:
            return (e._context.displayName || "Context") + ".Provider";
        case hc:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case mc:
            return t = e.displayName || null,
            t !== null ? t : eu(e.type) || "Memo";
        case Cn:
            t = e._payload,
            e = e._init;
            try {
                return eu(e(t))
            } catch {}
        }
    return null
}
function wx(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return eu(t);
    case 8:
        return t === pc ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Vn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function jh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function bx(e) {
    var t = jh(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                s.call(this, a)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Gs(e) {
    e._valueTracker || (e._valueTracker = bx(e))
}
function Th(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = jh(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Fa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function tu(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ud(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Rh(e, t) {
    t = t.checked,
    t != null && fc(e, "checked", t, !1)
}
function nu(e, t) {
    Rh(e, t);
    var n = Vn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ru(e, t.type, n) : t.hasOwnProperty("defaultValue") && ru(e, t.type, Vn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Vd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ru(e, t, n) {
    (t !== "number" || Fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Qo = Array.isArray;
function Kr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ou(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Hd(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(O(92));
            if (Qo(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Vn(n)
    }
}
function Oh(e, t) {
    var n = Vn(t.value)
      , r = Vn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Qd(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Mh(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function su(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mh(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ks, Ah = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Ks = Ks || document.createElement("div"),
        Ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Ks.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ls(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ko = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ko).forEach(function(e) {
    Sx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ko[t] = Ko[e]
    })
});
function _h(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ko.hasOwnProperty(e) && Ko[e] ? ("" + t).trim() : t + "px"
}
function Dh(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = _h(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Cx = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function au(e, t) {
    if (t) {
        if (Cx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(O(62))
    }
}
function iu(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var lu = null;
function gc(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var uu = null
  , Xr = null
  , Jr = null;
function Yd(e) {
    if (e = Is(e)) {
        if (typeof uu != "function")
            throw Error(O(280));
        var t = e.stateNode;
        t && (t = Si(t),
        uu(e.stateNode, e.type, t))
    }
}
function Lh(e) {
    Xr ? Jr ? Jr.push(e) : Jr = [e] : Xr = e
}
function Ih() {
    if (Xr) {
        var e = Xr
          , t = Jr;
        if (Jr = Xr = null,
        Yd(e),
        t)
            for (e = 0; e < t.length; e++)
                Yd(t[e])
    }
}
function Fh(e, t) {
    return e(t)
}
function $h() {}
var dl = !1;
function zh(e, t, n) {
    if (dl)
        return e(t, n);
    dl = !0;
    try {
        return Fh(e, t, n)
    } finally {
        dl = !1,
        (Xr !== null || Jr !== null) && ($h(),
        Ih())
    }
}
function us(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Si(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, t, typeof n));
    return n
}
var cu = !1;
if (rn)
    try {
        var Lo = {};
        Object.defineProperty(Lo, "passive", {
            get: function() {
                cu = !0
            }
        }),
        window.addEventListener("test", Lo, Lo),
        window.removeEventListener("test", Lo, Lo)
    } catch {
        cu = !1
    }
function Ex(e, t, n, r, o, s, a, i, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Xo = !1
  , $a = null
  , za = !1
  , du = null
  , kx = {
    onError: function(e) {
        Xo = !0,
        $a = e
    }
};
function Nx(e, t, n, r, o, s, a, i, l) {
    Xo = !1,
    $a = null,
    Ex.apply(kx, arguments)
}
function Px(e, t, n, r, o, s, a, i, l) {
    if (Nx.apply(this, arguments),
    Xo) {
        if (Xo) {
            var u = $a;
            Xo = !1,
            $a = null
        } else
            throw Error(O(198));
        za || (za = !0,
        du = u)
    }
}
function kr(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Bh(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function qd(e) {
    if (kr(e) !== e)
        throw Error(O(188))
}
function jx(e) {
    var t = e.alternate;
    if (!t) {
        if (t = kr(e),
        t === null)
            throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return qd(o),
                    e;
                if (s === r)
                    return qd(o),
                    t;
                s = s.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var a = !1, i = o.child; i; ) {
                if (i === n) {
                    a = !0,
                    n = o,
                    r = s;
                    break
                }
                if (i === r) {
                    a = !0,
                    r = o,
                    n = s;
                    break
                }
                i = i.sibling
            }
            if (!a) {
                for (i = s.child; i; ) {
                    if (i === n) {
                        a = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (i === r) {
                        a = !0,
                        r = s,
                        n = o;
                        break
                    }
                    i = i.sibling
                }
                if (!a)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? e : t
}
function Wh(e) {
    return e = jx(e),
    e !== null ? Uh(e) : null
}
function Uh(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Uh(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Vh = et.unstable_scheduleCallback
  , Gd = et.unstable_cancelCallback
  , Tx = et.unstable_shouldYield
  , Rx = et.unstable_requestPaint
  , ye = et.unstable_now
  , Ox = et.unstable_getCurrentPriorityLevel
  , vc = et.unstable_ImmediatePriority
  , Hh = et.unstable_UserBlockingPriority
  , Ba = et.unstable_NormalPriority
  , Mx = et.unstable_LowPriority
  , Qh = et.unstable_IdlePriority
  , yi = null
  , Vt = null;
function Ax(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function")
        try {
            Vt.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Nt = Math.clz32 ? Math.clz32 : Lx
  , _x = Math.log
  , Dx = Math.LN2;
function Lx(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (_x(e) / Dx | 0) | 0
}
var Xs = 64
  , Js = 4194304;
function Yo(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Wa(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , a = n & 268435455;
    if (a !== 0) {
        var i = a & ~o;
        i !== 0 ? r = Yo(i) : (s &= a,
        s !== 0 && (r = Yo(s)))
    } else
        a = n & ~o,
        a !== 0 ? r = Yo(a) : s !== 0 && (r = Yo(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Nt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Ix(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Fx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var a = 31 - Nt(s)
          , i = 1 << a
          , l = o[a];
        l === -1 ? (!(i & n) || i & r) && (o[a] = Ix(i, t)) : l <= t && (e.expiredLanes |= i),
        s &= ~i
    }
}
function fu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Yh() {
    var e = Xs;
    return Xs <<= 1,
    !(Xs & 4194240) && (Xs = 64),
    e
}
function fl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ds(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Nt(t),
    e[t] = n
}
function $x(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Nt(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function yc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Nt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ne = 0;
function qh(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gh, xc, Kh, Xh, Jh, pu = !1, Zs = [], Ln = null, In = null, Fn = null, cs = new Map, ds = new Map, kn = [], zx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Kd(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Ln = null;
        break;
    case "dragenter":
    case "dragleave":
        In = null;
        break;
    case "mouseover":
    case "mouseout":
        Fn = null;
        break;
    case "pointerover":
    case "pointerout":
        cs.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ds.delete(t.pointerId)
    }
}
function Io(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Is(t),
    t !== null && xc(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Bx(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Ln = Io(Ln, e, t, n, r, o),
        !0;
    case "dragenter":
        return In = Io(In, e, t, n, r, o),
        !0;
    case "mouseover":
        return Fn = Io(Fn, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return cs.set(s, Io(cs.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        ds.set(s, Io(ds.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Zh(e) {
    var t = sr(e.target);
    if (t !== null) {
        var n = kr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Bh(n),
                t !== null) {
                    e.blockedOn = t,
                    Jh(e.priority, function() {
                        Kh(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ba(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            lu = r,
            n.target.dispatchEvent(r),
            lu = null
        } else
            return t = Is(n),
            t !== null && xc(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Xd(e, t, n) {
    ba(e) && n.delete(t)
}
function Wx() {
    pu = !1,
    Ln !== null && ba(Ln) && (Ln = null),
    In !== null && ba(In) && (In = null),
    Fn !== null && ba(Fn) && (Fn = null),
    cs.forEach(Xd),
    ds.forEach(Xd)
}
function Fo(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    pu || (pu = !0,
    et.unstable_scheduleCallback(et.unstable_NormalPriority, Wx)))
}
function fs(e) {
    function t(o) {
        return Fo(o, e)
    }
    if (0 < Zs.length) {
        Fo(Zs[0], e);
        for (var n = 1; n < Zs.length; n++) {
            var r = Zs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ln !== null && Fo(Ln, e),
    In !== null && Fo(In, e),
    Fn !== null && Fo(Fn, e),
    cs.forEach(t),
    ds.forEach(t),
    n = 0; n < kn.length; n++)
        r = kn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kn.length && (n = kn[0],
    n.blockedOn === null); )
        Zh(n),
        n.blockedOn === null && kn.shift()
}
var Zr = cn.ReactCurrentBatchConfig
  , Ua = !0;
function Ux(e, t, n, r) {
    var o = ne
      , s = Zr.transition;
    Zr.transition = null;
    try {
        ne = 1,
        wc(e, t, n, r)
    } finally {
        ne = o,
        Zr.transition = s
    }
}
function Vx(e, t, n, r) {
    var o = ne
      , s = Zr.transition;
    Zr.transition = null;
    try {
        ne = 4,
        wc(e, t, n, r)
    } finally {
        ne = o,
        Zr.transition = s
    }
}
function wc(e, t, n, r) {
    if (Ua) {
        var o = hu(e, t, n, r);
        if (o === null)
            Sl(e, t, r, Va, n),
            Kd(e, r);
        else if (Bx(o, e, t, n, r))
            r.stopPropagation();
        else if (Kd(e, r),
        t & 4 && -1 < zx.indexOf(e)) {
            for (; o !== null; ) {
                var s = Is(o);
                if (s !== null && Gh(s),
                s = hu(e, t, n, r),
                s === null && Sl(e, t, r, Va, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Sl(e, t, r, null, n)
    }
}
var Va = null;
function hu(e, t, n, r) {
    if (Va = null,
    e = gc(r),
    e = sr(e),
    e !== null)
        if (t = kr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Bh(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Va = e,
    null
}
function em(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ox()) {
        case vc:
            return 1;
        case Hh:
            return 4;
        case Ba:
        case Mx:
            return 16;
        case Qh:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Mn = null
  , bc = null
  , Sa = null;
function tm() {
    if (Sa)
        return Sa;
    var e, t = bc, n = t.length, r, o = "value"in Mn ? Mn.value : Mn.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[s - r]; r++)
        ;
    return Sa = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Ca(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ea() {
    return !0
}
function Jd() {
    return !1
}
function rt(e) {
    function t(n, r, o, s, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = a,
        this.currentTarget = null;
        for (var i in e)
            e.hasOwnProperty(i) && (n = e[i],
            this[i] = n ? n(s) : s[i]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ea : Jd,
        this.isPropagationStopped = Jd,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ea)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ea)
        },
        persist: function() {},
        isPersistent: ea
    }),
    t
}
var No = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Sc = rt(No), Ls = me({}, No, {
    view: 0,
    detail: 0
}), Hx = rt(Ls), pl, hl, $o, xi = me({}, Ls, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== $o && ($o && e.type === "mousemove" ? (pl = e.screenX - $o.screenX,
        hl = e.screenY - $o.screenY) : hl = pl = 0,
        $o = e),
        pl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : hl
    }
}), Zd = rt(xi), Qx = me({}, xi, {
    dataTransfer: 0
}), Yx = rt(Qx), qx = me({}, Ls, {
    relatedTarget: 0
}), ml = rt(qx), Gx = me({}, No, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Kx = rt(Gx), Xx = me({}, No, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Jx = rt(Xx), Zx = me({}, No, {
    data: 0
}), ef = rt(Zx), e1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, t1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, n1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function r1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = n1[e]) ? !!t[e] : !1
}
function Cc() {
    return r1
}
var o1 = me({}, Ls, {
    key: function(e) {
        if (e.key) {
            var t = e1[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ca(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? t1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cc,
    charCode: function(e) {
        return e.type === "keypress" ? Ca(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ca(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , s1 = rt(o1)
  , a1 = me({}, xi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , tf = rt(a1)
  , i1 = me({}, Ls, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cc
})
  , l1 = rt(i1)
  , u1 = me({}, No, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , c1 = rt(u1)
  , d1 = me({}, xi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , f1 = rt(d1)
  , p1 = [9, 13, 27, 32]
  , Ec = rn && "CompositionEvent"in window
  , Jo = null;
rn && "documentMode"in document && (Jo = document.documentMode);
var h1 = rn && "TextEvent"in window && !Jo
  , nm = rn && (!Ec || Jo && 8 < Jo && 11 >= Jo)
  , nf = " "
  , rf = !1;
function rm(e, t) {
    switch (e) {
    case "keyup":
        return p1.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function om(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var zr = !1;
function m1(e, t) {
    switch (e) {
    case "compositionend":
        return om(t);
    case "keypress":
        return t.which !== 32 ? null : (rf = !0,
        nf);
    case "textInput":
        return e = t.data,
        e === nf && rf ? null : e;
    default:
        return null
    }
}
function g1(e, t) {
    if (zr)
        return e === "compositionend" || !Ec && rm(e, t) ? (e = tm(),
        Sa = bc = Mn = null,
        zr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return nm && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var v1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function of(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v1[e.type] : t === "textarea"
}
function sm(e, t, n, r) {
    Lh(r),
    t = Ha(t, "onChange"),
    0 < t.length && (n = new Sc("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Zo = null
  , ps = null;
function y1(e) {
    gm(e, 0)
}
function wi(e) {
    var t = Ur(e);
    if (Th(t))
        return e
}
function x1(e, t) {
    if (e === "change")
        return t
}
var am = !1;
if (rn) {
    var gl;
    if (rn) {
        var vl = "oninput"in document;
        if (!vl) {
            var sf = document.createElement("div");
            sf.setAttribute("oninput", "return;"),
            vl = typeof sf.oninput == "function"
        }
        gl = vl
    } else
        gl = !1;
    am = gl && (!document.documentMode || 9 < document.documentMode)
}
function af() {
    Zo && (Zo.detachEvent("onpropertychange", im),
    ps = Zo = null)
}
function im(e) {
    if (e.propertyName === "value" && wi(ps)) {
        var t = [];
        sm(t, ps, e, gc(e)),
        zh(y1, t)
    }
}
function w1(e, t, n) {
    e === "focusin" ? (af(),
    Zo = t,
    ps = n,
    Zo.attachEvent("onpropertychange", im)) : e === "focusout" && af()
}
function b1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wi(ps)
}
function S1(e, t) {
    if (e === "click")
        return wi(t)
}
function C1(e, t) {
    if (e === "input" || e === "change")
        return wi(t)
}
function E1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var jt = typeof Object.is == "function" ? Object.is : E1;
function hs(e, t) {
    if (jt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Kl.call(t, o) || !jt(e[o], t[o]))
            return !1
    }
    return !0
}
function lf(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function uf(e, t) {
    var n = lf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = lf(n)
    }
}
function lm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lm(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function um() {
    for (var e = window, t = Fa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Fa(e.document)
    }
    return t
}
function kc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function k1(e) {
    var t = um()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && lm(n.ownerDocument.documentElement, n)) {
        if (r !== null && kc(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = uf(n, s);
                var a = uf(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var N1 = rn && "documentMode"in document && 11 >= document.documentMode
  , Br = null
  , mu = null
  , es = null
  , gu = !1;
function cf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gu || Br == null || Br !== Fa(r) || (r = Br,
    "selectionStart"in r && kc(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    es && hs(es, r) || (es = r,
    r = Ha(mu, "onSelect"),
    0 < r.length && (t = new Sc("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Br)))
}
function ta(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Wr = {
    animationend: ta("Animation", "AnimationEnd"),
    animationiteration: ta("Animation", "AnimationIteration"),
    animationstart: ta("Animation", "AnimationStart"),
    transitionend: ta("Transition", "TransitionEnd")
}
  , yl = {}
  , cm = {};
rn && (cm = document.createElement("div").style,
"AnimationEvent"in window || (delete Wr.animationend.animation,
delete Wr.animationiteration.animation,
delete Wr.animationstart.animation),
"TransitionEvent"in window || delete Wr.transitionend.transition);
function bi(e) {
    if (yl[e])
        return yl[e];
    if (!Wr[e])
        return e;
    var t = Wr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in cm)
            return yl[e] = t[n];
    return e
}
var dm = bi("animationend")
  , fm = bi("animationiteration")
  , pm = bi("animationstart")
  , hm = bi("transitionend")
  , mm = new Map
  , df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Gn(e, t) {
    mm.set(e, t),
    Er(t, [e])
}
for (var xl = 0; xl < df.length; xl++) {
    var wl = df[xl]
      , P1 = wl.toLowerCase()
      , j1 = wl[0].toUpperCase() + wl.slice(1);
    Gn(P1, "on" + j1)
}
Gn(dm, "onAnimationEnd");
Gn(fm, "onAnimationIteration");
Gn(pm, "onAnimationStart");
Gn("dblclick", "onDoubleClick");
Gn("focusin", "onFocus");
Gn("focusout", "onBlur");
Gn(hm, "onTransitionEnd");
mo("onMouseEnter", ["mouseout", "mouseover"]);
mo("onMouseLeave", ["mouseout", "mouseover"]);
mo("onPointerEnter", ["pointerout", "pointerover"]);
mo("onPointerLeave", ["pointerout", "pointerover"]);
Er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , T1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));
function ff(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Px(r, t, void 0, e),
    e.currentTarget = null
}
function gm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var i = r[a]
                      , l = i.instance
                      , u = i.currentTarget;
                    if (i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    ff(o, i, u),
                    s = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (i = r[a],
                    l = i.instance,
                    u = i.currentTarget,
                    i = i.listener,
                    l !== s && o.isPropagationStopped())
                        break e;
                    ff(o, i, u),
                    s = l
                }
        }
    }
    if (za)
        throw e = du,
        za = !1,
        du = null,
        e
}
function ue(e, t) {
    var n = t[bu];
    n === void 0 && (n = t[bu] = new Set);
    var r = e + "__bubble";
    n.has(r) || (vm(t, e, 2, !1),
    n.add(r))
}
function bl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    vm(n, e, r, t)
}
var na = "_reactListening" + Math.random().toString(36).slice(2);
function ms(e) {
    if (!e[na]) {
        e[na] = !0,
        Eh.forEach(function(n) {
            n !== "selectionchange" && (T1.has(n) || bl(n, !1, e),
            bl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[na] || (t[na] = !0,
        bl("selectionchange", !1, t))
    }
}
function vm(e, t, n, r) {
    switch (em(t)) {
    case 1:
        var o = Ux;
        break;
    case 4:
        o = Vx;
        break;
    default:
        o = wc
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !cu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Sl(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var i = r.stateNode.containerInfo;
                if (i === o || i.nodeType === 8 && i.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null; ) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; i !== null; ) {
                    if (a = sr(i),
                    a === null)
                        return;
                    if (l = a.tag,
                    l === 5 || l === 6) {
                        r = s = a;
                        continue e
                    }
                    i = i.parentNode
                }
            }
            r = r.return
        }
    zh(function() {
        var u = s
          , d = gc(n)
          , f = [];
        e: {
            var m = mm.get(e);
            if (m !== void 0) {
                var p = Sc
                  , b = e;
                switch (e) {
                case "keypress":
                    if (Ca(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = s1;
                    break;
                case "focusin":
                    b = "focus",
                    p = ml;
                    break;
                case "focusout":
                    b = "blur",
                    p = ml;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = ml;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = Zd;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = Yx;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = l1;
                    break;
                case dm:
                case fm:
                case pm:
                    p = Kx;
                    break;
                case hm:
                    p = c1;
                    break;
                case "scroll":
                    p = Hx;
                    break;
                case "wheel":
                    p = f1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = Jx;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = tf
                }
                var v = (t & 4) !== 0
                  , w = !v && e === "scroll"
                  , y = v ? m !== null ? m + "Capture" : null : m;
                v = [];
                for (var h = u, x; h !== null; ) {
                    x = h;
                    var S = x.stateNode;
                    if (x.tag === 5 && S !== null && (x = S,
                    y !== null && (S = us(h, y),
                    S != null && v.push(gs(h, S, x)))),
                    w)
                        break;
                    h = h.return
                }
                0 < v.length && (m = new p(m,b,null,n,d),
                f.push({
                    event: m,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                m && n !== lu && (b = n.relatedTarget || n.fromElement) && (sr(b) || b[on]))
                    break e;
                if ((p || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window,
                p ? (b = n.relatedTarget || n.toElement,
                p = u,
                b = b ? sr(b) : null,
                b !== null && (w = kr(b),
                b !== w || b.tag !== 5 && b.tag !== 6) && (b = null)) : (p = null,
                b = u),
                p !== b)) {
                    if (v = Zd,
                    S = "onMouseLeave",
                    y = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = tf,
                    S = "onPointerLeave",
                    y = "onPointerEnter",
                    h = "pointer"),
                    w = p == null ? m : Ur(p),
                    x = b == null ? m : Ur(b),
                    m = new v(S,h + "leave",p,n,d),
                    m.target = w,
                    m.relatedTarget = x,
                    S = null,
                    sr(d) === u && (v = new v(y,h + "enter",b,n,d),
                    v.target = x,
                    v.relatedTarget = w,
                    S = v),
                    w = S,
                    p && b)
                        t: {
                            for (v = p,
                            y = b,
                            h = 0,
                            x = v; x; x = Ar(x))
                                h++;
                            for (x = 0,
                            S = y; S; S = Ar(S))
                                x++;
                            for (; 0 < h - x; )
                                v = Ar(v),
                                h--;
                            for (; 0 < x - h; )
                                y = Ar(y),
                                x--;
                            for (; h--; ) {
                                if (v === y || y !== null && v === y.alternate)
                                    break t;
                                v = Ar(v),
                                y = Ar(y)
                            }
                            v = null
                        }
                    else
                        v = null;
                    p !== null && pf(f, m, p, v, !1),
                    b !== null && w !== null && pf(f, w, b, v, !0)
                }
            }
            e: {
                if (m = u ? Ur(u) : window,
                p = m.nodeName && m.nodeName.toLowerCase(),
                p === "select" || p === "input" && m.type === "file")
                    var C = x1;
                else if (of(m))
                    if (am)
                        C = C1;
                    else {
                        C = b1;
                        var E = w1
                    }
                else
                    (p = m.nodeName) && p.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = S1);
                if (C && (C = C(e, u))) {
                    sm(f, C, n, d);
                    break e
                }
                E && E(e, m, u),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && ru(m, "number", m.value)
            }
            switch (E = u ? Ur(u) : window,
            e) {
            case "focusin":
                (of(E) || E.contentEditable === "true") && (Br = E,
                mu = u,
                es = null);
                break;
            case "focusout":
                es = mu = Br = null;
                break;
            case "mousedown":
                gu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                gu = !1,
                cf(f, n, d);
                break;
            case "selectionchange":
                if (N1)
                    break;
            case "keydown":
            case "keyup":
                cf(f, n, d)
            }
            var k;
            if (Ec)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                zr ? rm(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (nm && n.locale !== "ko" && (zr || T !== "onCompositionStart" ? T === "onCompositionEnd" && zr && (k = tm()) : (Mn = d,
            bc = "value"in Mn ? Mn.value : Mn.textContent,
            zr = !0)),
            E = Ha(u, T),
            0 < E.length && (T = new ef(T,e,null,n,d),
            f.push({
                event: T,
                listeners: E
            }),
            k ? T.data = k : (k = om(n),
            k !== null && (T.data = k)))),
            (k = h1 ? m1(e, n) : g1(e, n)) && (u = Ha(u, "onBeforeInput"),
            0 < u.length && (d = new ef("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = k))
        }
        gm(f, t)
    })
}
function gs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ha(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = us(e, n),
        s != null && r.unshift(gs(e, s, o)),
        s = us(e, t),
        s != null && r.push(gs(e, s, o))),
        e = e.return
    }
    return r
}
function Ar(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function pf(e, t, n, r, o) {
    for (var s = t._reactName, a = []; n !== null && n !== r; ) {
        var i = n
          , l = i.alternate
          , u = i.stateNode;
        if (l !== null && l === r)
            break;
        i.tag === 5 && u !== null && (i = u,
        o ? (l = us(n, s),
        l != null && a.unshift(gs(n, l, i))) : o || (l = us(n, s),
        l != null && a.push(gs(n, l, i)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var R1 = /\r\n?/g
  , O1 = /\u0000|\uFFFD/g;
function hf(e) {
    return (typeof e == "string" ? e : "" + e).replace(R1, `
`).replace(O1, "")
}
function ra(e, t, n) {
    if (t = hf(t),
    hf(e) !== t && n)
        throw Error(O(425))
}
function Qa() {}
var vu = null
  , yu = null;
function xu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wu = typeof setTimeout == "function" ? setTimeout : void 0
  , M1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , mf = typeof Promise == "function" ? Promise : void 0
  , A1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof mf < "u" ? function(e) {
    return mf.resolve(null).then(e).catch(_1)
}
: wu;
function _1(e) {
    setTimeout(function() {
        throw e
    })
}
function Cl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    fs(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    fs(t)
}
function $n(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function gf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Po = Math.random().toString(36).slice(2)
  , $t = "__reactFiber$" + Po
  , vs = "__reactProps$" + Po
  , on = "__reactContainer$" + Po
  , bu = "__reactEvents$" + Po
  , D1 = "__reactListeners$" + Po
  , L1 = "__reactHandles$" + Po;
function sr(e) {
    var t = e[$t];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[on] || n[$t]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = gf(e); e !== null; ) {
                    if (n = e[$t])
                        return n;
                    e = gf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Is(e) {
    return e = e[$t] || e[on],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ur(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(O(33))
}
function Si(e) {
    return e[vs] || null
}
var Su = []
  , Vr = -1;
function Kn(e) {
    return {
        current: e
    }
}
function ce(e) {
    0 > Vr || (e.current = Su[Vr],
    Su[Vr] = null,
    Vr--)
}
function ae(e, t) {
    Vr++,
    Su[Vr] = e.current,
    e.current = t
}
var Hn = {}
  , Le = Kn(Hn)
  , Qe = Kn(!1)
  , vr = Hn;
function go(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Hn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ye(e) {
    return e = e.childContextTypes,
    e != null
}
function Ya() {
    ce(Qe),
    ce(Le)
}
function vf(e, t, n) {
    if (Le.current !== Hn)
        throw Error(O(168));
    ae(Le, t),
    ae(Qe, n)
}
function ym(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(O(108, wx(e) || "Unknown", o));
    return me({}, n, r)
}
function qa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Hn,
    vr = Le.current,
    ae(Le, e),
    ae(Qe, Qe.current),
    !0
}
function yf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (e = ym(e, t, vr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ce(Qe),
    ce(Le),
    ae(Le, e)) : ce(Qe),
    ae(Qe, n)
}
var Jt = null
  , Ci = !1
  , El = !1;
function xm(e) {
    Jt === null ? Jt = [e] : Jt.push(e)
}
function I1(e) {
    Ci = !0,
    xm(e)
}
function Xn() {
    if (!El && Jt !== null) {
        El = !0;
        var e = 0
          , t = ne;
        try {
            var n = Jt;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Jt = null,
            Ci = !1
        } catch (o) {
            throw Jt !== null && (Jt = Jt.slice(e + 1)),
            Vh(vc, Xn),
            o
        } finally {
            ne = t,
            El = !1
        }
    }
    return null
}
var Hr = []
  , Qr = 0
  , Ga = null
  , Ka = 0
  , at = []
  , it = 0
  , yr = null
  , en = 1
  , tn = "";
function nr(e, t) {
    Hr[Qr++] = Ka,
    Hr[Qr++] = Ga,
    Ga = e,
    Ka = t
}
function wm(e, t, n) {
    at[it++] = en,
    at[it++] = tn,
    at[it++] = yr,
    yr = e;
    var r = en;
    e = tn;
    var o = 32 - Nt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Nt(t) + o;
    if (30 < s) {
        var a = o - o % 5;
        s = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        en = 1 << 32 - Nt(t) + o | n << o | r,
        tn = s + e
    } else
        en = 1 << s | n << o | r,
        tn = e
}
function Nc(e) {
    e.return !== null && (nr(e, 1),
    wm(e, 1, 0))
}
function Pc(e) {
    for (; e === Ga; )
        Ga = Hr[--Qr],
        Hr[Qr] = null,
        Ka = Hr[--Qr],
        Hr[Qr] = null;
    for (; e === yr; )
        yr = at[--it],
        at[it] = null,
        tn = at[--it],
        at[it] = null,
        en = at[--it],
        at[it] = null
}
var Je = null
  , Xe = null
  , fe = !1
  , kt = null;
function bm(e, t) {
    var n = lt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function xf(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = $n(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Je = e,
        Xe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = yr !== null ? {
            id: en,
            overflow: tn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = lt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Je = e,
        Xe = null,
        !0) : !1;
    default:
        return !1
    }
}
function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Eu(e) {
    if (fe) {
        var t = Xe;
        if (t) {
            var n = t;
            if (!xf(e, t)) {
                if (Cu(e))
                    throw Error(O(418));
                t = $n(n.nextSibling);
                var r = Je;
                t && xf(e, t) ? bm(r, n) : (e.flags = e.flags & -4097 | 2,
                fe = !1,
                Je = e)
            }
        } else {
            if (Cu(e))
                throw Error(O(418));
            e.flags = e.flags & -4097 | 2,
            fe = !1,
            Je = e
        }
    }
}
function wf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Je = e
}
function oa(e) {
    if (e !== Je)
        return !1;
    if (!fe)
        return wf(e),
        fe = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !xu(e.type, e.memoizedProps)),
    t && (t = Xe)) {
        if (Cu(e))
            throw Sm(),
            Error(O(418));
        for (; t; )
            bm(e, t),
            t = $n(t.nextSibling)
    }
    if (wf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(O(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Xe = $n(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Xe = null
        }
    } else
        Xe = Je ? $n(e.stateNode.nextSibling) : null;
    return !0
}
function Sm() {
    for (var e = Xe; e; )
        e = $n(e.nextSibling)
}
function vo() {
    Xe = Je = null,
    fe = !1
}
function jc(e) {
    kt === null ? kt = [e] : kt.push(e)
}
var F1 = cn.ReactCurrentBatchConfig;
function zo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(a) {
                var i = o.refs;
                a === null ? delete i[s] : i[s] = a
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, e))
    }
    return e
}
function sa(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function bf(e) {
    var t = e._init;
    return t(e._payload)
}
function Cm(e) {
    function t(y, h) {
        if (e) {
            var x = y.deletions;
            x === null ? (y.deletions = [h],
            y.flags |= 16) : x.push(h)
        }
    }
    function n(y, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(y, h),
            h = h.sibling;
        return null
    }
    function r(y, h) {
        for (y = new Map; h !== null; )
            h.key !== null ? y.set(h.key, h) : y.set(h.index, h),
            h = h.sibling;
        return y
    }
    function o(y, h) {
        return y = Un(y, h),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, h, x) {
        return y.index = x,
        e ? (x = y.alternate,
        x !== null ? (x = x.index,
        x < h ? (y.flags |= 2,
        h) : x) : (y.flags |= 2,
        h)) : (y.flags |= 1048576,
        h)
    }
    function a(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function i(y, h, x, S) {
        return h === null || h.tag !== 6 ? (h = Ol(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function l(y, h, x, S) {
        var C = x.type;
        return C === $r ? d(y, h, x.props.children, S, x.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Cn && bf(C) === h.type) ? (S = o(h, x.props),
        S.ref = zo(y, h, x),
        S.return = y,
        S) : (S = Ra(x.type, x.key, x.props, null, y.mode, S),
        S.ref = zo(y, h, x),
        S.return = y,
        S)
    }
    function u(y, h, x, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== x.containerInfo || h.stateNode.implementation !== x.implementation ? (h = Ml(x, y.mode, S),
        h.return = y,
        h) : (h = o(h, x.children || []),
        h.return = y,
        h)
    }
    function d(y, h, x, S, C) {
        return h === null || h.tag !== 7 ? (h = mr(x, y.mode, S, C),
        h.return = y,
        h) : (h = o(h, x),
        h.return = y,
        h)
    }
    function f(y, h, x) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Ol("" + h, y.mode, x),
            h.return = y,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case qs:
                return x = Ra(h.type, h.key, h.props, null, y.mode, x),
                x.ref = zo(y, null, h),
                x.return = y,
                x;
            case Fr:
                return h = Ml(h, y.mode, x),
                h.return = y,
                h;
            case Cn:
                var S = h._init;
                return f(y, S(h._payload), x)
            }
            if (Qo(h) || Do(h))
                return h = mr(h, y.mode, x, null),
                h.return = y,
                h;
            sa(y, h)
        }
        return null
    }
    function m(y, h, x, S) {
        var C = h !== null ? h.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return C !== null ? null : i(y, h, "" + x, S);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case qs:
                return x.key === C ? l(y, h, x, S) : null;
            case Fr:
                return x.key === C ? u(y, h, x, S) : null;
            case Cn:
                return C = x._init,
                m(y, h, C(x._payload), S)
            }
            if (Qo(x) || Do(x))
                return C !== null ? null : d(y, h, x, S, null);
            sa(y, x)
        }
        return null
    }
    function p(y, h, x, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return y = y.get(x) || null,
            i(h, y, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case qs:
                return y = y.get(S.key === null ? x : S.key) || null,
                l(h, y, S, C);
            case Fr:
                return y = y.get(S.key === null ? x : S.key) || null,
                u(h, y, S, C);
            case Cn:
                var E = S._init;
                return p(y, h, x, E(S._payload), C)
            }
            if (Qo(S) || Do(S))
                return y = y.get(x) || null,
                d(h, y, S, C, null);
            sa(h, S)
        }
        return null
    }
    function b(y, h, x, S) {
        for (var C = null, E = null, k = h, T = h = 0, M = null; k !== null && T < x.length; T++) {
            k.index > T ? (M = k,
            k = null) : M = k.sibling;
            var A = m(y, k, x[T], S);
            if (A === null) {
                k === null && (k = M);
                break
            }
            e && k && A.alternate === null && t(y, k),
            h = s(A, h, T),
            E === null ? C = A : E.sibling = A,
            E = A,
            k = M
        }
        if (T === x.length)
            return n(y, k),
            fe && nr(y, T),
            C;
        if (k === null) {
            for (; T < x.length; T++)
                k = f(y, x[T], S),
                k !== null && (h = s(k, h, T),
                E === null ? C = k : E.sibling = k,
                E = k);
            return fe && nr(y, T),
            C
        }
        for (k = r(y, k); T < x.length; T++)
            M = p(k, y, T, x[T], S),
            M !== null && (e && M.alternate !== null && k.delete(M.key === null ? T : M.key),
            h = s(M, h, T),
            E === null ? C = M : E.sibling = M,
            E = M);
        return e && k.forEach(function($) {
            return t(y, $)
        }),
        fe && nr(y, T),
        C
    }
    function v(y, h, x, S) {
        var C = Do(x);
        if (typeof C != "function")
            throw Error(O(150));
        if (x = C.call(x),
        x == null)
            throw Error(O(151));
        for (var E = C = null, k = h, T = h = 0, M = null, A = x.next(); k !== null && !A.done; T++,
        A = x.next()) {
            k.index > T ? (M = k,
            k = null) : M = k.sibling;
            var $ = m(y, k, A.value, S);
            if ($ === null) {
                k === null && (k = M);
                break
            }
            e && k && $.alternate === null && t(y, k),
            h = s($, h, T),
            E === null ? C = $ : E.sibling = $,
            E = $,
            k = M
        }
        if (A.done)
            return n(y, k),
            fe && nr(y, T),
            C;
        if (k === null) {
            for (; !A.done; T++,
            A = x.next())
                A = f(y, A.value, S),
                A !== null && (h = s(A, h, T),
                E === null ? C = A : E.sibling = A,
                E = A);
            return fe && nr(y, T),
            C
        }
        for (k = r(y, k); !A.done; T++,
        A = x.next())
            A = p(k, y, T, A.value, S),
            A !== null && (e && A.alternate !== null && k.delete(A.key === null ? T : A.key),
            h = s(A, h, T),
            E === null ? C = A : E.sibling = A,
            E = A);
        return e && k.forEach(function(I) {
            return t(y, I)
        }),
        fe && nr(y, T),
        C
    }
    function w(y, h, x, S) {
        if (typeof x == "object" && x !== null && x.type === $r && x.key === null && (x = x.props.children),
        typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case qs:
                e: {
                    for (var C = x.key, E = h; E !== null; ) {
                        if (E.key === C) {
                            if (C = x.type,
                            C === $r) {
                                if (E.tag === 7) {
                                    n(y, E.sibling),
                                    h = o(E, x.props.children),
                                    h.return = y,
                                    y = h;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Cn && bf(C) === E.type) {
                                n(y, E.sibling),
                                h = o(E, x.props),
                                h.ref = zo(y, E, x),
                                h.return = y,
                                y = h;
                                break e
                            }
                            n(y, E);
                            break
                        } else
                            t(y, E);
                        E = E.sibling
                    }
                    x.type === $r ? (h = mr(x.props.children, y.mode, S, x.key),
                    h.return = y,
                    y = h) : (S = Ra(x.type, x.key, x.props, null, y.mode, S),
                    S.ref = zo(y, h, x),
                    S.return = y,
                    y = S)
                }
                return a(y);
            case Fr:
                e: {
                    for (E = x.key; h !== null; ) {
                        if (h.key === E)
                            if (h.tag === 4 && h.stateNode.containerInfo === x.containerInfo && h.stateNode.implementation === x.implementation) {
                                n(y, h.sibling),
                                h = o(h, x.children || []),
                                h.return = y,
                                y = h;
                                break e
                            } else {
                                n(y, h);
                                break
                            }
                        else
                            t(y, h);
                        h = h.sibling
                    }
                    h = Ml(x, y.mode, S),
                    h.return = y,
                    y = h
                }
                return a(y);
            case Cn:
                return E = x._init,
                w(y, h, E(x._payload), S)
            }
            if (Qo(x))
                return b(y, h, x, S);
            if (Do(x))
                return v(y, h, x, S);
            sa(y, x)
        }
        return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x,
        h !== null && h.tag === 6 ? (n(y, h.sibling),
        h = o(h, x),
        h.return = y,
        y = h) : (n(y, h),
        h = Ol(x, y.mode, S),
        h.return = y,
        y = h),
        a(y)) : n(y, h)
    }
    return w
}
var yo = Cm(!0)
  , Em = Cm(!1)
  , Xa = Kn(null)
  , Ja = null
  , Yr = null
  , Tc = null;
function Rc() {
    Tc = Yr = Ja = null
}
function Oc(e) {
    var t = Xa.current;
    ce(Xa),
    e._currentValue = t
}
function ku(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function eo(e, t) {
    Ja = e,
    Tc = Yr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (He = !0),
    e.firstContext = null)
}
function ct(e) {
    var t = e._currentValue;
    if (Tc !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Yr === null) {
            if (Ja === null)
                throw Error(O(308));
            Yr = e,
            Ja.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Yr = Yr.next = e;
    return t
}
var ar = null;
function Mc(e) {
    ar === null ? ar = [e] : ar.push(e)
}
function km(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    Mc(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    sn(e, r)
}
function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var En = !1;
function Ac(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Nm(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function nn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function zn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        sn(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    Mc(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    sn(e, n)
}
function Ea(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        yc(e, n)
    }
}
function Sf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = a : s = s.next = a,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Za(e, t, n, r) {
    var o = e.updateQueue;
    En = !1;
    var s = o.firstBaseUpdate
      , a = o.lastBaseUpdate
      , i = o.shared.pending;
    if (i !== null) {
        o.shared.pending = null;
        var l = i
          , u = l.next;
        l.next = null,
        a === null ? s = u : a.next = u,
        a = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue,
        i = d.lastBaseUpdate,
        i !== a && (i === null ? d.firstBaseUpdate = u : i.next = u,
        d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = o.baseState;
        a = 0,
        d = u = l = null,
        i = s;
        do {
            var m = i.lane
              , p = i.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var b = e
                      , v = i;
                    switch (m = t,
                    p = n,
                    v.tag) {
                    case 1:
                        if (b = v.payload,
                        typeof b == "function") {
                            f = b.call(p, f, m);
                            break e
                        }
                        f = b;
                        break e;
                    case 3:
                        b.flags = b.flags & -65537 | 128;
                    case 0:
                        if (b = v.payload,
                        m = typeof b == "function" ? b.call(p, f, m) : b,
                        m == null)
                            break e;
                        f = me({}, f, m);
                        break e;
                    case 2:
                        En = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [i] : m.push(i))
            } else
                p = {
                    eventTime: p,
                    lane: m,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                },
                d === null ? (u = d = p,
                l = f) : d = d.next = p,
                a |= m;
            if (i = i.next,
            i === null) {
                if (i = o.shared.pending,
                i === null)
                    break;
                m = i,
                i = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = d,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                a |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        wr |= a,
        e.lanes = a,
        e.memoizedState = f
    }
}
function Cf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(O(191, o));
                o.call(r)
            }
        }
}
var Fs = {}
  , Ht = Kn(Fs)
  , ys = Kn(Fs)
  , xs = Kn(Fs);
function ir(e) {
    if (e === Fs)
        throw Error(O(174));
    return e
}
function _c(e, t) {
    switch (ae(xs, t),
    ae(ys, e),
    ae(Ht, Fs),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : su(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = su(t, e)
    }
    ce(Ht),
    ae(Ht, t)
}
function xo() {
    ce(Ht),
    ce(ys),
    ce(xs)
}
function Pm(e) {
    ir(xs.current);
    var t = ir(Ht.current)
      , n = su(t, e.type);
    t !== n && (ae(ys, e),
    ae(Ht, n))
}
function Dc(e) {
    ys.current === e && (ce(Ht),
    ce(ys))
}
var pe = Kn(0);
function ei(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var kl = [];
function Lc() {
    for (var e = 0; e < kl.length; e++)
        kl[e]._workInProgressVersionPrimary = null;
    kl.length = 0
}
var ka = cn.ReactCurrentDispatcher
  , Nl = cn.ReactCurrentBatchConfig
  , xr = 0
  , he = null
  , be = null
  , Ee = null
  , ti = !1
  , ts = !1
  , ws = 0
  , $1 = 0;
function Me() {
    throw Error(O(321))
}
function Ic(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!jt(e[n], t[n]))
            return !1;
    return !0
}
function Fc(e, t, n, r, o, s) {
    if (xr = s,
    he = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ka.current = e === null || e.memoizedState === null ? U1 : V1,
    e = n(r, o),
    ts) {
        s = 0;
        do {
            if (ts = !1,
            ws = 0,
            25 <= s)
                throw Error(O(301));
            s += 1,
            Ee = be = null,
            t.updateQueue = null,
            ka.current = H1,
            e = n(r, o)
        } while (ts)
    }
    if (ka.current = ni,
    t = be !== null && be.next !== null,
    xr = 0,
    Ee = be = he = null,
    ti = !1,
    t)
        throw Error(O(300));
    return e
}
function $c() {
    var e = ws !== 0;
    return ws = 0,
    e
}
function Dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e,
    Ee
}
function dt() {
    if (be === null) {
        var e = he.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = be.next;
    var t = Ee === null ? he.memoizedState : Ee.next;
    if (t !== null)
        Ee = t,
        be = e;
    else {
        if (e === null)
            throw Error(O(310));
        be = e,
        e = {
            memoizedState: be.memoizedState,
            baseState: be.baseState,
            baseQueue: be.baseQueue,
            queue: be.queue,
            next: null
        },
        Ee === null ? he.memoizedState = Ee = e : Ee = Ee.next = e
    }
    return Ee
}
function bs(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Pl(e) {
    var t = dt()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = be
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = s.next,
            s.next = a
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var i = a = null
          , l = null
          , u = s;
        do {
            var d = u.lane;
            if ((xr & d) === d)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (i = l = f,
                a = r) : l = l.next = f,
                he.lanes |= d,
                wr |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? a = r : l.next = i,
        jt(r, t.memoizedState) || (He = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            he.lanes |= s,
            wr |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function jl(e) {
    var t = dt()
      , n = t.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do
            s = e(s, a.action),
            a = a.next;
        while (a !== o);
        jt(s, t.memoizedState) || (He = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function jm() {}
function Tm(e, t) {
    var n = he
      , r = dt()
      , o = t()
      , s = !jt(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    He = !0),
    r = r.queue,
    zc(Mm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Ee !== null && Ee.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ss(9, Om.bind(null, n, r, o, t), void 0, null),
        ke === null)
            throw Error(O(349));
        xr & 30 || Rm(n, t, o)
    }
    return o
}
function Rm(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Om(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Am(t) && _m(e)
}
function Mm(e, t, n) {
    return n(function() {
        Am(t) && _m(e)
    })
}
function Am(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !jt(e, n)
    } catch {
        return !0
    }
}
function _m(e) {
    var t = sn(e, 1);
    t !== null && Pt(t, e, 1, -1)
}
function Ef(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bs,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = W1.bind(null, he, e),
    [t.memoizedState, e]
}
function Ss(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = he.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    he.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Dm() {
    return dt().memoizedState
}
function Na(e, t, n, r) {
    var o = Dt();
    he.flags |= e,
    o.memoizedState = Ss(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ei(e, t, n, r) {
    var o = dt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (be !== null) {
        var a = be.memoizedState;
        if (s = a.destroy,
        r !== null && Ic(r, a.deps)) {
            o.memoizedState = Ss(t, n, s, r);
            return
        }
    }
    he.flags |= e,
    o.memoizedState = Ss(1 | t, n, s, r)
}
function kf(e, t) {
    return Na(8390656, 8, e, t)
}
function zc(e, t) {
    return Ei(2048, 8, e, t)
}
function Lm(e, t) {
    return Ei(4, 2, e, t)
}
function Im(e, t) {
    return Ei(4, 4, e, t)
}
function Fm(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function $m(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ei(4, 4, Fm.bind(null, t, e), n)
}
function Bc() {}
function zm(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ic(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Bm(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ic(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Wm(e, t, n) {
    return xr & 21 ? (jt(n, t) || (n = Yh(),
    he.lanes |= n,
    wr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    He = !0),
    e.memoizedState = n)
}
function z1(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        Nl.transition = r
    }
}
function Um() {
    return dt().memoizedState
}
function B1(e, t, n) {
    var r = Wn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Vm(e))
        Hm(t, n);
    else if (n = km(e, t, n, r),
    n !== null) {
        var o = ze();
        Pt(n, e, r, o),
        Qm(n, t, r)
    }
}
function W1(e, t, n) {
    var r = Wn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Vm(e))
        Hm(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var a = t.lastRenderedState
                  , i = s(a, n);
                if (o.hasEagerState = !0,
                o.eagerState = i,
                jt(i, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    Mc(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = km(e, t, o, r),
        n !== null && (o = ze(),
        Pt(n, e, r, o),
        Qm(n, t, r))
    }
}
function Vm(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he
}
function Hm(e, t) {
    ts = ti = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Qm(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        yc(e, n)
    }
}
var ni = {
    readContext: ct,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1
}
  , U1 = {
    readContext: ct,
    useCallback: function(e, t) {
        return Dt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ct,
    useEffect: kf,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Na(4194308, 4, Fm.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Na(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Na(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Dt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Dt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = B1.bind(null, he, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Dt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Ef,
    useDebugValue: Bc,
    useDeferredValue: function(e) {
        return Dt().memoizedState = e
    },
    useTransition: function() {
        var e = Ef(!1)
          , t = e[0];
        return e = z1.bind(null, e[1]),
        Dt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = he
          , o = Dt();
        if (fe) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = t(),
            ke === null)
                throw Error(O(349));
            xr & 30 || Rm(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        kf(Mm.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ss(9, Om.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Dt()
          , t = ke.identifierPrefix;
        if (fe) {
            var n = tn
              , r = en;
            n = (r & ~(1 << 32 - Nt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ws++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = $1++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , V1 = {
    readContext: ct,
    useCallback: zm,
    useContext: ct,
    useEffect: zc,
    useImperativeHandle: $m,
    useInsertionEffect: Lm,
    useLayoutEffect: Im,
    useMemo: Bm,
    useReducer: Pl,
    useRef: Dm,
    useState: function() {
        return Pl(bs)
    },
    useDebugValue: Bc,
    useDeferredValue: function(e) {
        var t = dt();
        return Wm(t, be.memoizedState, e)
    },
    useTransition: function() {
        var e = Pl(bs)[0]
          , t = dt().memoizedState;
        return [e, t]
    },
    useMutableSource: jm,
    useSyncExternalStore: Tm,
    useId: Um,
    unstable_isNewReconciler: !1
}
  , H1 = {
    readContext: ct,
    useCallback: zm,
    useContext: ct,
    useEffect: zc,
    useImperativeHandle: $m,
    useInsertionEffect: Lm,
    useLayoutEffect: Im,
    useMemo: Bm,
    useReducer: jl,
    useRef: Dm,
    useState: function() {
        return jl(bs)
    },
    useDebugValue: Bc,
    useDeferredValue: function(e) {
        var t = dt();
        return be === null ? t.memoizedState = e : Wm(t, be.memoizedState, e)
    },
    useTransition: function() {
        var e = jl(bs)[0]
          , t = dt().memoizedState;
        return [e, t]
    },
    useMutableSource: jm,
    useSyncExternalStore: Tm,
    useId: Um,
    unstable_isNewReconciler: !1
};
function wt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Nu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ki = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? kr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = Wn(e)
          , s = nn(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = zn(e, s, o),
        t !== null && (Pt(t, e, o, r),
        Ea(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ze()
          , o = Wn(e)
          , s = nn(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = zn(e, s, o),
        t !== null && (Pt(t, e, o, r),
        Ea(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ze()
          , r = Wn(e)
          , o = nn(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = zn(e, o, r),
        t !== null && (Pt(t, e, r, n),
        Ea(t, e, r))
    }
};
function Nf(e, t, n, r, o, s, a) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, a) : t.prototype && t.prototype.isPureReactComponent ? !hs(n, r) || !hs(o, s) : !0
}
function Ym(e, t, n) {
    var r = !1
      , o = Hn
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = ct(s) : (o = Ye(t) ? vr : Le.current,
    r = t.contextTypes,
    s = (r = r != null) ? go(e, o) : Hn),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ki,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Pf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ki.enqueueReplaceState(t, t.state, null)
}
function Pu(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Ac(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = ct(s) : (s = Ye(t) ? vr : Le.current,
    o.context = go(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Nu(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && ki.enqueueReplaceState(o, o.state, null),
    Za(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function wo(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += xx(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Tl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ju(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Q1 = typeof WeakMap == "function" ? WeakMap : Map;
function qm(e, t, n) {
    n = nn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        oi || (oi = !0,
        Fu = r),
        ju(e, t)
    }
    ,
    n
}
function Gm(e, t, n) {
    n = nn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ju(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        ju(e, t),
        typeof r != "function" && (Bn === null ? Bn = new Set([this]) : Bn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }
    ),
    n
}
function jf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Q1;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = aw.bind(null, e, t, n),
    t.then(e, e))
}
function Tf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Rf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nn(-1, 1),
    t.tag = 2,
    zn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Y1 = cn.ReactCurrentOwner
  , He = !1;
function Fe(e, t, n, r) {
    t.child = e === null ? Em(t, null, n, r) : yo(t, e.child, n, r)
}
function Of(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return eo(t, o),
    r = Fc(e, t, n, r, s, o),
    n = $c(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    an(e, t, o)) : (fe && n && Nc(t),
    t.flags |= 1,
    Fe(e, t, r, o),
    t.child)
}
function Mf(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Gc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Km(e, t, s, r, o)) : (e = Ra(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var a = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : hs,
        n(a, r) && e.ref === t.ref)
            return an(e, t, o)
    }
    return t.flags |= 1,
    e = Un(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Km(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (hs(s, r) && e.ref === t.ref)
            if (He = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (He = !0);
            else
                return t.lanes = e.lanes,
                an(e, t, o)
    }
    return Tu(e, t, n, r, o)
}
function Xm(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ae(Gr, Ge),
            Ge |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ae(Gr, Ge),
                Ge |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ae(Gr, Ge),
            Ge |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ae(Gr, Ge),
        Ge |= r;
    return Fe(e, t, o, n),
    t.child
}
function Jm(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Tu(e, t, n, r, o) {
    var s = Ye(n) ? vr : Le.current;
    return s = go(t, s),
    eo(t, o),
    n = Fc(e, t, n, r, s, o),
    r = $c(),
    e !== null && !He ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    an(e, t, o)) : (fe && r && Nc(t),
    t.flags |= 1,
    Fe(e, t, n, o),
    t.child)
}
function Af(e, t, n, r, o) {
    if (Ye(n)) {
        var s = !0;
        qa(t)
    } else
        s = !1;
    if (eo(t, o),
    t.stateNode === null)
        Pa(e, t),
        Ym(t, n, r),
        Pu(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode
          , i = t.memoizedProps;
        a.props = i;
        var l = a.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = ct(u) : (u = Ye(n) ? vr : Le.current,
        u = go(t, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        f || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== r || l !== u) && Pf(t, a, r, u),
        En = !1;
        var m = t.memoizedState;
        a.state = m,
        Za(t, r, a, o),
        l = t.memoizedState,
        i !== r || m !== l || Qe.current || En ? (typeof d == "function" && (Nu(t, n, d, r),
        l = t.memoizedState),
        (i = En || Nf(t, n, i, r, m, l, u)) ? (f || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
        typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        a.props = r,
        a.state = l,
        a.context = u,
        r = i) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        a = t.stateNode,
        Nm(e, t),
        i = t.memoizedProps,
        u = t.type === t.elementType ? i : wt(t.type, i),
        a.props = u,
        f = t.pendingProps,
        m = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = ct(l) : (l = Ye(n) ? vr : Le.current,
        l = go(t, l));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (i !== f || m !== l) && Pf(t, a, r, l),
        En = !1,
        m = t.memoizedState,
        a.state = m,
        Za(t, r, a, o);
        var b = t.memoizedState;
        i !== f || m !== b || Qe.current || En ? (typeof p == "function" && (Nu(t, n, p, r),
        b = t.memoizedState),
        (u = En || Nf(t, n, u, r, m, b, l) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, l),
        typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, l)),
        typeof a.componentDidUpdate == "function" && (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = b),
        a.props = r,
        a.state = b,
        a.context = l,
        r = u) : (typeof a.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ru(e, t, n, r, s, o)
}
function Ru(e, t, n, r, o, s) {
    Jm(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && yf(t, n, !1),
        an(e, t, s);
    r = t.stateNode,
    Y1.current = t;
    var i = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && a ? (t.child = yo(t, e.child, null, s),
    t.child = yo(t, null, i, s)) : Fe(e, t, i, s),
    t.memoizedState = r.state,
    o && yf(t, n, !0),
    t.child
}
function Zm(e) {
    var t = e.stateNode;
    t.pendingContext ? vf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vf(e, t.context, !1),
    _c(e, t.containerInfo)
}
function _f(e, t, n, r, o) {
    return vo(),
    jc(o),
    t.flags |= 256,
    Fe(e, t, n, r),
    t.child
}
var Ou = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Mu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function eg(e, t, n) {
    var r = t.pendingProps, o = pe.current, s = !1, a = (t.flags & 128) !== 0, i;
    if ((i = a) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(pe, o & 1),
    e === null)
        return Eu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (a = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        a = {
            mode: "hidden",
            children: a
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = a) : s = ji(a, r, 0, null),
        e = mr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Mu(n),
        t.memoizedState = Ou,
        e) : Wc(t, a));
    if (o = e.memoizedState,
    o !== null && (i = o.dehydrated,
    i !== null))
        return q1(e, t, a, r, i, o, n);
    if (s) {
        s = r.fallback,
        a = t.mode,
        o = e.child,
        i = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(a & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Un(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        i !== null ? s = Un(i, s) : (s = mr(s, a, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        a = e.child.memoizedState,
        a = a === null ? Mu(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        },
        s.memoizedState = a,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Ou,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Un(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Wc(e, t) {
    return t = ji({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function aa(e, t, n, r) {
    return r !== null && jc(r),
    yo(t, e.child, null, n),
    e = Wc(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function q1(e, t, n, r, o, s, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Tl(Error(O(422))),
        aa(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = ji({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = mr(s, o, a, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && yo(t, e.child, null, a),
        t.child.memoizedState = Mu(a),
        t.memoizedState = Ou,
        s);
    if (!(t.mode & 1))
        return aa(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var i = r.dgst;
        return r = i,
        s = Error(O(419)),
        r = Tl(s, r, void 0),
        aa(e, t, a, r)
    }
    if (i = (a & e.childLanes) !== 0,
    He || i) {
        if (r = ke,
        r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | a) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            sn(e, o),
            Pt(r, e, o, -1))
        }
        return qc(),
        r = Tl(Error(O(421))),
        aa(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = iw.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Xe = $n(o.nextSibling),
    Je = t,
    fe = !0,
    kt = null,
    e !== null && (at[it++] = en,
    at[it++] = tn,
    at[it++] = yr,
    en = e.id,
    tn = e.overflow,
    yr = t),
    t = Wc(t, r.children),
    t.flags |= 4096,
    t)
}
function Df(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ku(e.return, t, n)
}
function Rl(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function tg(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (Fe(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Df(e, n, t);
                else if (e.tag === 19)
                    Df(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ae(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && ei(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Rl(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && ei(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Rl(t, !0, n, null, s);
            break;
        case "together":
            Rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Pa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function an(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    wr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Un(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Un(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function G1(e, t, n) {
    switch (t.tag) {
    case 3:
        Zm(t),
        vo();
        break;
    case 5:
        Pm(t);
        break;
    case 1:
        Ye(t.type) && qa(t);
        break;
    case 4:
        _c(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ae(Xa, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ae(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? eg(e, t, n) : (ae(pe, pe.current & 1),
            e = an(e, t, n),
            e !== null ? e.sibling : null);
        ae(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return tg(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ae(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Xm(e, t, n)
    }
    return an(e, t, n)
}
var ng, Au, rg, og;
ng = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Au = function() {}
;
rg = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        ir(Ht.current);
        var s = null;
        switch (n) {
        case "input":
            o = tu(e, o),
            r = tu(e, r),
            s = [];
            break;
        case "select":
            o = me({}, o, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = ou(e, o),
            r = ou(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qa)
        }
        au(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var i = o[u];
                    for (a in i)
                        i.hasOwnProperty(a) && (n || (n = {}),
                        n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (is.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (i = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== i && (l != null || i != null))
                if (u === "style")
                    if (i) {
                        for (a in i)
                            !i.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}),
                            n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && i[a] !== l[a] && (n || (n = {}),
                            n[a] = l[a])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    i = i ? i.__html : void 0,
                    l != null && i !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (is.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e),
                    s || i === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
og = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Bo(e, t) {
    if (!fe)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function K1(e, t, n) {
    var r = t.pendingProps;
    switch (Pc(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ae(t),
        null;
    case 1:
        return Ye(t.type) && Ya(),
        Ae(t),
        null;
    case 3:
        return r = t.stateNode,
        xo(),
        ce(Qe),
        ce(Le),
        Lc(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (oa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        kt !== null && (Bu(kt),
        kt = null))),
        Au(e, t),
        Ae(t),
        null;
    case 5:
        Dc(t);
        var o = ir(xs.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            rg(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(O(166));
                return Ae(t),
                null
            }
            if (e = ir(Ht.current),
            oa(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[$t] = t,
                r[vs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ue("cancel", r),
                    ue("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ue("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < qo.length; o++)
                        ue(qo[o], r);
                    break;
                case "source":
                    ue("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ue("error", r),
                    ue("load", r);
                    break;
                case "details":
                    ue("toggle", r);
                    break;
                case "input":
                    Ud(r, s),
                    ue("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ue("invalid", r);
                    break;
                case "textarea":
                    Hd(r, s),
                    ue("invalid", r)
                }
                au(n, s),
                o = null;
                for (var a in s)
                    if (s.hasOwnProperty(a)) {
                        var i = s[a];
                        a === "children" ? typeof i == "string" ? r.textContent !== i && (s.suppressHydrationWarning !== !0 && ra(r.textContent, i, e),
                        o = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (s.suppressHydrationWarning !== !0 && ra(r.textContent, i, e),
                        o = ["children", "" + i]) : is.hasOwnProperty(a) && i != null && a === "onScroll" && ue("scroll", r)
                    }
                switch (n) {
                case "input":
                    Gs(r),
                    Vd(r, s, !0);
                    break;
                case "textarea":
                    Gs(r),
                    Qd(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Qa)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Mh(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n),
                n === "select" && (a = e,
                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[$t] = t,
                e[vs] = r,
                ng(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (a = iu(n, r),
                    n) {
                    case "dialog":
                        ue("cancel", e),
                        ue("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ue("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < qo.length; o++)
                            ue(qo[o], e);
                        o = r;
                        break;
                    case "source":
                        ue("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ue("error", e),
                        ue("load", e),
                        o = r;
                        break;
                    case "details":
                        ue("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Ud(e, r),
                        o = tu(e, r),
                        ue("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = me({}, r, {
                            value: void 0
                        }),
                        ue("invalid", e);
                        break;
                    case "textarea":
                        Hd(e, r),
                        o = ou(e, r),
                        ue("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    au(n, o),
                    i = o;
                    for (s in i)
                        if (i.hasOwnProperty(s)) {
                            var l = i[s];
                            s === "style" ? Dh(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ah(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ls(e, l) : typeof l == "number" && ls(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (is.hasOwnProperty(s) ? l != null && s === "onScroll" && ue("scroll", e) : l != null && fc(e, s, l, a))
                        }
                    switch (n) {
                    case "input":
                        Gs(e),
                        Vd(e, r, !1);
                        break;
                    case "textarea":
                        Gs(e),
                        Qd(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Vn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Kr(e, !!r.multiple, s, !1) : r.defaultValue != null && Kr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Qa)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ae(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            og(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(O(166));
            if (n = ir(xs.current),
            ir(Ht.current),
            oa(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[$t] = t,
                (s = r.nodeValue !== n) && (e = Je,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ra(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ra(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[$t] = t,
                t.stateNode = r
        }
        return Ae(t),
        null;
    case 13:
        if (ce(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (fe && Xe !== null && t.mode & 1 && !(t.flags & 128))
                Sm(),
                vo(),
                t.flags |= 98560,
                s = !1;
            else if (s = oa(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(O(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(O(317));
                    s[$t] = t
                } else
                    vo(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ae(t),
                s = !1
            } else
                kt !== null && (Bu(kt),
                kt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? Se === 0 && (Se = 3) : qc())),
        t.updateQueue !== null && (t.flags |= 4),
        Ae(t),
        null);
    case 4:
        return xo(),
        Au(e, t),
        e === null && ms(t.stateNode.containerInfo),
        Ae(t),
        null;
    case 10:
        return Oc(t.type._context),
        Ae(t),
        null;
    case 17:
        return Ye(t.type) && Ya(),
        Ae(t),
        null;
    case 19:
        if (ce(pe),
        s = t.memoizedState,
        s === null)
            return Ae(t),
            null;
        if (r = (t.flags & 128) !== 0,
        a = s.rendering,
        a === null)
            if (r)
                Bo(s, !1);
            else {
                if (Se !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (a = ei(e),
                        a !== null) {
                            for (t.flags |= 128,
                            Bo(s, !1),
                            r = a.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                a = s.alternate,
                                a === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = a.childLanes,
                                s.lanes = a.lanes,
                                s.child = a.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = a.memoizedProps,
                                s.memoizedState = a.memoizedState,
                                s.updateQueue = a.updateQueue,
                                s.type = a.type,
                                e = a.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ae(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ye() > bo && (t.flags |= 128,
                r = !0,
                Bo(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ei(a),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Bo(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !a.alternate && !fe)
                        return Ae(t),
                        null
                } else
                    2 * ye() - s.renderingStartTime > bo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Bo(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (a.sibling = t.child,
            t.child = a) : (n = s.last,
            n !== null ? n.sibling = a : t.child = a,
            s.last = a)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ye(),
        t.sibling = null,
        n = pe.current,
        ae(pe, r ? n & 1 | 2 : n & 1),
        t) : (Ae(t),
        null);
    case 22:
    case 23:
        return Yc(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Ae(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, t.tag))
}
function X1(e, t) {
    switch (Pc(t),
    t.tag) {
    case 1:
        return Ye(t.type) && Ya(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return xo(),
        ce(Qe),
        ce(Le),
        Lc(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Dc(t),
        null;
    case 13:
        if (ce(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(O(340));
            vo()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ce(pe),
        null;
    case 4:
        return xo(),
        null;
    case 10:
        return Oc(t.type._context),
        null;
    case 22:
    case 23:
        return Yc(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ia = !1
  , De = !1
  , J1 = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function qr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ve(e, t, r)
            }
        else
            n.current = null
}
function _u(e, t, n) {
    try {
        n()
    } catch (r) {
        ve(e, t, r)
    }
}
var Lf = !1;
function Z1(e, t) {
    if (vu = Ua,
    e = um(),
    kc(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0
                      , i = -1
                      , l = -1
                      , u = 0
                      , d = 0
                      , f = e
                      , m = null;
                    t: for (; ; ) {
                        for (var p; f !== n || o !== 0 && f.nodeType !== 3 || (i = a + o),
                        f !== s || r !== 0 && f.nodeType !== 3 || (l = a + r),
                        f.nodeType === 3 && (a += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            m = f,
                            f = p;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (m === n && ++u === o && (i = a),
                            m === s && ++d === r && (l = a),
                            (p = f.nextSibling) !== null)
                                break;
                            f = m,
                            m = f.parentNode
                        }
                        f = p
                    }
                    n = i === -1 || l === -1 ? null : {
                        start: i,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (yu = {
        focusedElem: e,
        selectionRange: n
    },
    Ua = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var b = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (b !== null) {
                                var v = b.memoizedProps
                                  , w = b.memoizedState
                                  , y = t.stateNode
                                  , h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : wt(t.type, v), w);
                                y.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var x = t.stateNode.containerInfo;
                            x.nodeType === 1 ? x.textContent = "" : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (S) {
                    ve(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return b = Lf,
    Lf = !1,
    b
}
function ns(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && _u(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ni(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Du(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function sg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    sg(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[$t],
    delete t[vs],
    delete t[bu],
    delete t[D1],
    delete t[L1])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function ag(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function If(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || ag(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Lu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Qa));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Lu(e, t, n),
        e = e.sibling; e !== null; )
            Lu(e, t, n),
            e = e.sibling
}
function Iu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Iu(e, t, n),
        e = e.sibling; e !== null; )
            Iu(e, t, n),
            e = e.sibling
}
var Ne = null
  , Et = !1;
function vn(e, t, n) {
    for (n = n.child; n !== null; )
        ig(e, t, n),
        n = n.sibling
}
function ig(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
        try {
            Vt.onCommitFiberUnmount(yi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        De || qr(n, t);
    case 6:
        var r = Ne
          , o = Et;
        Ne = null,
        vn(e, t, n),
        Ne = r,
        Et = o,
        Ne !== null && (Et ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
        break;
    case 18:
        Ne !== null && (Et ? (e = Ne,
        n = n.stateNode,
        e.nodeType === 8 ? Cl(e.parentNode, n) : e.nodeType === 1 && Cl(e, n),
        fs(e)) : Cl(Ne, n.stateNode));
        break;
    case 4:
        r = Ne,
        o = Et,
        Ne = n.stateNode.containerInfo,
        Et = !0,
        vn(e, t, n),
        Ne = r,
        Et = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!De && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , a = s.destroy;
                s = s.tag,
                a !== void 0 && (s & 2 || s & 4) && _u(n, t, a),
                o = o.next
            } while (o !== r)
        }
        vn(e, t, n);
        break;
    case 1:
        if (!De && (qr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (i) {
                ve(n, t, i)
            }
        vn(e, t, n);
        break;
    case 21:
        vn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (De = (r = De) || n.memoizedState !== null,
        vn(e, t, n),
        De = r) : vn(e, t, n);
        break;
    default:
        vn(e, t, n)
    }
}
function Ff(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new J1),
        t.forEach(function(r) {
            var o = lw.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function gt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , a = t
                  , i = a;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                    case 5:
                        Ne = i.stateNode,
                        Et = !1;
                        break e;
                    case 3:
                        Ne = i.stateNode.containerInfo,
                        Et = !0;
                        break e;
                    case 4:
                        Ne = i.stateNode.containerInfo,
                        Et = !0;
                        break e
                    }
                    i = i.return
                }
                if (Ne === null)
                    throw Error(O(160));
                ig(s, a, o),
                Ne = null,
                Et = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                ve(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            lg(t, e),
            t = t.sibling
}
function lg(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (gt(t, e),
        _t(e),
        r & 4) {
            try {
                ns(3, e, e.return),
                Ni(3, e)
            } catch (v) {
                ve(e, e.return, v)
            }
            try {
                ns(5, e, e.return)
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        break;
    case 1:
        gt(t, e),
        _t(e),
        r & 512 && n !== null && qr(n, n.return);
        break;
    case 5:
        if (gt(t, e),
        _t(e),
        r & 512 && n !== null && qr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ls(o, "")
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , a = n !== null ? n.memoizedProps : s
              , i = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    i === "input" && s.type === "radio" && s.name != null && Rh(o, s),
                    iu(i, a);
                    var u = iu(i, s);
                    for (a = 0; a < l.length; a += 2) {
                        var d = l[a]
                          , f = l[a + 1];
                        d === "style" ? Dh(o, f) : d === "dangerouslySetInnerHTML" ? Ah(o, f) : d === "children" ? ls(o, f) : fc(o, d, f, u)
                    }
                    switch (i) {
                    case "input":
                        nu(o, s);
                        break;
                    case "textarea":
                        Oh(o, s);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Kr(o, !!s.multiple, p, !1) : m !== !!s.multiple && (s.defaultValue != null ? Kr(o, !!s.multiple, s.defaultValue, !0) : Kr(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[vs] = s
                } catch (v) {
                    ve(e, e.return, v)
                }
        }
        break;
    case 6:
        if (gt(t, e),
        _t(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(O(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (v) {
                ve(e, e.return, v)
            }
        }
        break;
    case 3:
        if (gt(t, e),
        _t(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                fs(t.containerInfo)
            } catch (v) {
                ve(e, e.return, v)
            }
        break;
    case 4:
        gt(t, e),
        _t(e);
        break;
    case 13:
        gt(t, e),
        _t(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Hc = ye())),
        r & 4 && Ff(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (De = (u = De) || d,
        gt(t, e),
        De = u) : gt(t, e),
        _t(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !d && e.mode & 1)
                for (L = e,
                d = e.child; d !== null; ) {
                    for (f = L = d; L !== null; ) {
                        switch (m = L,
                        p = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ns(4, m, m.return);
                            break;
                        case 1:
                            qr(m, m.return);
                            var b = m.stateNode;
                            if (typeof b.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    b.props = t.memoizedProps,
                                    b.state = t.memoizedState,
                                    b.componentWillUnmount()
                                } catch (v) {
                                    ve(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            qr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                zf(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = m,
                        L = p) : zf(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            o = f.stateNode,
                            u ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (i = f.stateNode,
                            l = f.memoizedProps.style,
                            a = l != null && l.hasOwnProperty("display") ? l.display : null,
                            i.style.display = _h("display", a))
                        } catch (v) {
                            ve(e, e.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            ve(e, e.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        gt(t, e),
        _t(e),
        r & 4 && Ff(e);
        break;
    case 21:
        break;
    default:
        gt(t, e),
        _t(e)
    }
}
function _t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ag(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ls(o, ""),
                r.flags &= -33);
                var s = If(e);
                Iu(e, s, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo
                  , i = If(e);
                Lu(e, i, a);
                break;
            default:
                throw Error(O(161))
            }
        } catch (l) {
            ve(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ew(e, t, n) {
    L = e,
    ug(e)
}
function ug(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L
          , s = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || ia;
            if (!a) {
                var i = o.alternate
                  , l = i !== null && i.memoizedState !== null || De;
                i = ia;
                var u = De;
                if (ia = a,
                (De = l) && !u)
                    for (L = o; L !== null; )
                        a = L,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? Bf(o) : l !== null ? (l.return = a,
                        L = l) : Bf(o);
                for (; s !== null; )
                    L = s,
                    ug(s),
                    s = s.sibling;
                L = o,
                ia = i,
                De = u
            }
            $f(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            L = s) : $f(e)
    }
}
function $f(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        De || Ni(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !De)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : wt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Cf(t, s, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Cf(t, a, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && fs(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                De || t.flags & 512 && Du(t)
            } catch (m) {
                ve(t, t.return, m)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function zf(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function Bf(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ni(4, t)
                } catch (l) {
                    ve(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ve(t, o, l)
                    }
                }
                var s = t.return;
                try {
                    Du(t)
                } catch (l) {
                    ve(t, s, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    Du(t)
                } catch (l) {
                    ve(t, a, l)
                }
            }
        } catch (l) {
            ve(t, t.return, l)
        }
        if (t === e) {
            L = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return,
            L = i;
            break
        }
        L = t.return
    }
}
var tw = Math.ceil
  , ri = cn.ReactCurrentDispatcher
  , Uc = cn.ReactCurrentOwner
  , ut = cn.ReactCurrentBatchConfig
  , X = 0
  , ke = null
  , we = null
  , Pe = 0
  , Ge = 0
  , Gr = Kn(0)
  , Se = 0
  , Cs = null
  , wr = 0
  , Pi = 0
  , Vc = 0
  , rs = null
  , Ve = null
  , Hc = 0
  , bo = 1 / 0
  , Xt = null
  , oi = !1
  , Fu = null
  , Bn = null
  , la = !1
  , An = null
  , si = 0
  , os = 0
  , $u = null
  , ja = -1
  , Ta = 0;
function ze() {
    return X & 6 ? ye() : ja !== -1 ? ja : ja = ye()
}
function Wn(e) {
    return e.mode & 1 ? X & 2 && Pe !== 0 ? Pe & -Pe : F1.transition !== null ? (Ta === 0 && (Ta = Yh()),
    Ta) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : em(e.type)),
    e) : 1
}
function Pt(e, t, n, r) {
    if (50 < os)
        throw os = 0,
        $u = null,
        Error(O(185));
    Ds(e, n, r),
    (!(X & 2) || e !== ke) && (e === ke && (!(X & 2) && (Pi |= n),
    Se === 4 && Nn(e, Pe)),
    qe(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (bo = ye() + 500,
    Ci && Xn()))
}
function qe(e, t) {
    var n = e.callbackNode;
    Fx(e, t);
    var r = Wa(e, e === ke ? Pe : 0);
    if (r === 0)
        n !== null && Gd(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Gd(n),
        t === 1)
            e.tag === 0 ? I1(Wf.bind(null, e)) : xm(Wf.bind(null, e)),
            A1(function() {
                !(X & 6) && Xn()
            }),
            n = null;
        else {
            switch (qh(r)) {
            case 1:
                n = vc;
                break;
            case 4:
                n = Hh;
                break;
            case 16:
                n = Ba;
                break;
            case 536870912:
                n = Qh;
                break;
            default:
                n = Ba
            }
            n = vg(n, cg.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function cg(e, t) {
    if (ja = -1,
    Ta = 0,
    X & 6)
        throw Error(O(327));
    var n = e.callbackNode;
    if (to() && e.callbackNode !== n)
        return null;
    var r = Wa(e, e === ke ? Pe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ai(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var s = fg();
        (ke !== e || Pe !== t) && (Xt = null,
        bo = ye() + 500,
        hr(e, t));
        do
            try {
                ow();
                break
            } catch (i) {
                dg(e, i)
            }
        while (!0);
        Rc(),
        ri.current = s,
        X = o,
        we !== null ? t = 0 : (ke = null,
        Pe = 0,
        t = Se)
    }
    if (t !== 0) {
        if (t === 2 && (o = fu(e),
        o !== 0 && (r = o,
        t = zu(e, o))),
        t === 1)
            throw n = Cs,
            hr(e, 0),
            Nn(e, r),
            qe(e, ye()),
            n;
        if (t === 6)
            Nn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !nw(o) && (t = ai(e, r),
            t === 2 && (s = fu(e),
            s !== 0 && (r = s,
            t = zu(e, s))),
            t === 1))
                throw n = Cs,
                hr(e, 0),
                Nn(e, r),
                qe(e, ye()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                rr(e, Ve, Xt);
                break;
            case 3:
                if (Nn(e, r),
                (r & 130023424) === r && (t = Hc + 500 - ye(),
                10 < t)) {
                    if (Wa(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        ze(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = wu(rr.bind(null, e, Ve, Xt), t);
                    break
                }
                rr(e, Ve, Xt);
                break;
            case 4:
                if (Nn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var a = 31 - Nt(r);
                    s = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~s
                }
                if (r = o,
                r = ye() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tw(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = wu(rr.bind(null, e, Ve, Xt), r);
                    break
                }
                rr(e, Ve, Xt);
                break;
            case 5:
                rr(e, Ve, Xt);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return qe(e, ye()),
    e.callbackNode === n ? cg.bind(null, e) : null
}
function zu(e, t) {
    var n = rs;
    return e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256),
    e = ai(e, t),
    e !== 2 && (t = Ve,
    Ve = n,
    t !== null && Bu(t)),
    e
}
function Bu(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e)
}
function nw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!jt(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Nn(e, t) {
    for (t &= ~Vc,
    t &= ~Pi,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Nt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Wf(e) {
    if (X & 6)
        throw Error(O(327));
    to();
    var t = Wa(e, 0);
    if (!(t & 1))
        return qe(e, ye()),
        null;
    var n = ai(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = fu(e);
        r !== 0 && (t = r,
        n = zu(e, r))
    }
    if (n === 1)
        throw n = Cs,
        hr(e, 0),
        Nn(e, t),
        qe(e, ye()),
        n;
    if (n === 6)
        throw Error(O(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    rr(e, Ve, Xt),
    qe(e, ye()),
    null
}
function Qc(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (bo = ye() + 500,
        Ci && Xn())
    }
}
function br(e) {
    An !== null && An.tag === 0 && !(X & 6) && to();
    var t = X;
    X |= 1;
    var n = ut.transition
      , r = ne;
    try {
        if (ut.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        ut.transition = n,
        X = t,
        !(X & 6) && Xn()
    }
}
function Yc() {
    Ge = Gr.current,
    ce(Gr)
}
function hr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    M1(n)),
    we !== null)
        for (n = we.return; n !== null; ) {
            var r = n;
            switch (Pc(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ya();
                break;
            case 3:
                xo(),
                ce(Qe),
                ce(Le),
                Lc();
                break;
            case 5:
                Dc(r);
                break;
            case 4:
                xo();
                break;
            case 13:
                ce(pe);
                break;
            case 19:
                ce(pe);
                break;
            case 10:
                Oc(r.type._context);
                break;
            case 22:
            case 23:
                Yc()
            }
            n = n.return
        }
    if (ke = e,
    we = e = Un(e.current, null),
    Pe = Ge = t,
    Se = 0,
    Cs = null,
    Vc = Pi = wr = 0,
    Ve = rs = null,
    ar !== null) {
        for (t = 0; t < ar.length; t++)
            if (n = ar[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var a = s.next;
                    s.next = o,
                    r.next = a
                }
                n.pending = r
            }
        ar = null
    }
    return e
}
function dg(e, t) {
    do {
        var n = we;
        try {
            if (Rc(),
            ka.current = ni,
            ti) {
                for (var r = he.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ti = !1
            }
            if (xr = 0,
            Ee = be = he = null,
            ts = !1,
            ws = 0,
            Uc.current = null,
            n === null || n.return === null) {
                Se = 1,
                Cs = t,
                we = null;
                break
            }
            e: {
                var s = e
                  , a = n.return
                  , i = n
                  , l = t;
                if (t = Pe,
                i.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , d = i
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue,
                        d.memoizedState = m.memoizedState,
                        d.lanes = m.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = Tf(a);
                    if (p !== null) {
                        p.flags &= -257,
                        Rf(p, a, i, s, t),
                        p.mode & 1 && jf(s, u, t),
                        t = p,
                        l = u;
                        var b = t.updateQueue;
                        if (b === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            b.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            jf(s, u, t),
                            qc();
                            break e
                        }
                        l = Error(O(426))
                    }
                } else if (fe && i.mode & 1) {
                    var w = Tf(a);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Rf(w, a, i, s, t),
                        jc(wo(l, i));
                        break e
                    }
                }
                s = l = wo(l, i),
                Se !== 4 && (Se = 2),
                rs === null ? rs = [s] : rs.push(s),
                s = a;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = qm(s, l, t);
                        Sf(s, y);
                        break e;
                    case 1:
                        i = l;
                        var h = s.type
                          , x = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Bn === null || !Bn.has(x)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Gm(s, i, t);
                            Sf(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            hg(n)
        } catch (C) {
            t = C,
            we === n && n !== null && (we = n = n.return);
            continue
        }
        break
    } while (!0)
}
function fg() {
    var e = ri.current;
    return ri.current = ni,
    e === null ? ni : e
}
function qc() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    ke === null || !(wr & 268435455) && !(Pi & 268435455) || Nn(ke, Pe)
}
function ai(e, t) {
    var n = X;
    X |= 2;
    var r = fg();
    (ke !== e || Pe !== t) && (Xt = null,
    hr(e, t));
    do
        try {
            rw();
            break
        } catch (o) {
            dg(e, o)
        }
    while (!0);
    if (Rc(),
    X = n,
    ri.current = r,
    we !== null)
        throw Error(O(261));
    return ke = null,
    Pe = 0,
    Se
}
function rw() {
    for (; we !== null; )
        pg(we)
}
function ow() {
    for (; we !== null && !Tx(); )
        pg(we)
}
function pg(e) {
    var t = gg(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps,
    t === null ? hg(e) : we = t,
    Uc.current = null
}
function hg(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = X1(n, t),
            n !== null) {
                n.flags &= 32767,
                we = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Se = 6,
                we = null;
                return
            }
        } else if (n = K1(n, t, Ge),
        n !== null) {
            we = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            we = t;
            return
        }
        we = t = e
    } while (t !== null);
    Se === 0 && (Se = 5)
}
function rr(e, t, n) {
    var r = ne
      , o = ut.transition;
    try {
        ut.transition = null,
        ne = 1,
        sw(e, t, n, r)
    } finally {
        ut.transition = o,
        ne = r
    }
    return null
}
function sw(e, t, n, r) {
    do
        to();
    while (An !== null);
    if (X & 6)
        throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(O(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if ($x(e, s),
    e === ke && (we = ke = null,
    Pe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || la || (la = !0,
    vg(Ba, function() {
        return to(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = ut.transition,
        ut.transition = null;
        var a = ne;
        ne = 1;
        var i = X;
        X |= 4,
        Uc.current = null,
        Z1(e, n),
        lg(n, e),
        k1(yu),
        Ua = !!vu,
        yu = vu = null,
        e.current = n,
        ew(n),
        Rx(),
        X = i,
        ne = a,
        ut.transition = s
    } else
        e.current = n;
    if (la && (la = !1,
    An = e,
    si = o),
    s = e.pendingLanes,
    s === 0 && (Bn = null),
    Ax(n.stateNode),
    qe(e, ye()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (oi)
        throw oi = !1,
        e = Fu,
        Fu = null,
        e;
    return si & 1 && e.tag !== 0 && to(),
    s = e.pendingLanes,
    s & 1 ? e === $u ? os++ : (os = 0,
    $u = e) : os = 0,
    Xn(),
    null
}
function to() {
    if (An !== null) {
        var e = qh(si)
          , t = ut.transition
          , n = ne;
        try {
            if (ut.transition = null,
            ne = 16 > e ? 16 : e,
            An === null)
                var r = !1;
            else {
                if (e = An,
                An = null,
                si = 0,
                X & 6)
                    throw Error(O(331));
                var o = X;
                for (X |= 4,
                L = e.current; L !== null; ) {
                    var s = L
                      , a = s.child;
                    if (L.flags & 16) {
                        var i = s.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var u = i[l];
                                for (L = u; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ns(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var m = d.sibling
                                              , p = d.return;
                                            if (sg(d),
                                            d === u) {
                                                L = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = p,
                                                L = m;
                                                break
                                            }
                                            L = p
                                        }
                                }
                            }
                            var b = s.alternate;
                            if (b !== null) {
                                var v = b.child;
                                if (v !== null) {
                                    b.child = null;
                                    do {
                                        var w = v.sibling;
                                        v.sibling = null,
                                        v = w
                                    } while (v !== null)
                                }
                            }
                            L = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && a !== null)
                        a.return = s,
                        L = a;
                    else
                        e: for (; L !== null; ) {
                            if (s = L,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ns(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                L = y;
                                break e
                            }
                            L = s.return
                        }
                }
                var h = e.current;
                for (L = h; L !== null; ) {
                    a = L;
                    var x = a.child;
                    if (a.subtreeFlags & 2064 && x !== null)
                        x.return = a,
                        L = x;
                    else
                        e: for (a = h; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                try {
                                    switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ni(9, i)
                                    }
                                } catch (C) {
                                    ve(i, i.return, C)
                                }
                            if (i === a) {
                                L = null;
                                break e
                            }
                            var S = i.sibling;
                            if (S !== null) {
                                S.return = i.return,
                                L = S;
                                break e
                            }
                            L = i.return
                        }
                }
                if (X = o,
                Xn(),
                Vt && typeof Vt.onPostCommitFiberRoot == "function")
                    try {
                        Vt.onPostCommitFiberRoot(yi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            ut.transition = t
        }
    }
    return !1
}
function Uf(e, t, n) {
    t = wo(n, t),
    t = qm(e, t, 1),
    e = zn(e, t, 1),
    t = ze(),
    e !== null && (Ds(e, 1, t),
    qe(e, t))
}
function ve(e, t, n) {
    if (e.tag === 3)
        Uf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Uf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Bn === null || !Bn.has(r))) {
                    e = wo(n, e),
                    e = Gm(t, e, 1),
                    t = zn(t, e, 1),
                    e = ze(),
                    t !== null && (Ds(t, 1, e),
                    qe(t, e));
                    break
                }
            }
            t = t.return
        }
}
function aw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ze(),
    e.pingedLanes |= e.suspendedLanes & n,
    ke === e && (Pe & n) === n && (Se === 4 || Se === 3 && (Pe & 130023424) === Pe && 500 > ye() - Hc ? hr(e, 0) : Vc |= n),
    qe(e, t)
}
function mg(e, t) {
    t === 0 && (e.mode & 1 ? (t = Js,
    Js <<= 1,
    !(Js & 130023424) && (Js = 4194304)) : t = 1);
    var n = ze();
    e = sn(e, t),
    e !== null && (Ds(e, t, n),
    qe(e, n))
}
function iw(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    mg(e, n)
}
function lw(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(t),
    mg(e, n)
}
var gg;
gg = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Qe.current)
            He = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return He = !1,
                G1(e, t, n);
            He = !!(e.flags & 131072)
        }
    else
        He = !1,
        fe && t.flags & 1048576 && wm(t, Ka, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Pa(e, t),
        e = t.pendingProps;
        var o = go(t, Le.current);
        eo(t, n),
        o = Fc(null, t, r, e, o, n);
        var s = $c();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ye(r) ? (s = !0,
        qa(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Ac(t),
        o.updater = ki,
        t.stateNode = o,
        o._reactInternals = t,
        Pu(t, r, e, n),
        t = Ru(null, t, r, !0, s, n)) : (t.tag = 0,
        fe && s && Nc(t),
        Fe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Pa(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = cw(r),
            e = wt(r, e),
            o) {
            case 0:
                t = Tu(null, t, r, e, n);
                break e;
            case 1:
                t = Af(null, t, r, e, n);
                break e;
            case 11:
                t = Of(null, t, r, e, n);
                break e;
            case 14:
                t = Mf(null, t, r, wt(r.type, e), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : wt(r, o),
        Tu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : wt(r, o),
        Af(e, t, r, o, n);
    case 3:
        e: {
            if (Zm(t),
            e === null)
                throw Error(O(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Nm(e, t),
            Za(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = wo(Error(O(423)), t),
                    t = _f(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = wo(Error(O(424)), t),
                    t = _f(e, t, r, n, o);
                    break e
                } else
                    for (Xe = $n(t.stateNode.containerInfo.firstChild),
                    Je = t,
                    fe = !0,
                    kt = null,
                    n = Em(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (vo(),
                r === o) {
                    t = an(e, t, n);
                    break e
                }
                Fe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Pm(t),
        e === null && Eu(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        a = o.children,
        xu(r, o) ? a = null : s !== null && xu(r, s) && (t.flags |= 32),
        Jm(e, t),
        Fe(e, t, a, n),
        t.child;
    case 6:
        return e === null && Eu(t),
        null;
    case 13:
        return eg(e, t, n);
    case 4:
        return _c(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = yo(t, null, r, n) : Fe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : wt(r, o),
        Of(e, t, r, o, n);
    case 7:
        return Fe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Fe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            a = o.value,
            ae(Xa, r._currentValue),
            r._currentValue = a,
            s !== null)
                if (jt(s.value, a)) {
                    if (s.children === o.children && !Qe.current) {
                        t = an(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var i = s.dependencies;
                        if (i !== null) {
                            a = s.child;
                            for (var l = i.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = nn(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? l.next = l : (l.next = d.next,
                                            d.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    ku(s.return, n, t),
                                    i.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            a = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (a = s.return,
                            a === null)
                                throw Error(O(341));
                            a.lanes |= n,
                            i = a.alternate,
                            i !== null && (i.lanes |= n),
                            ku(a, n, t),
                            a = s.sibling
                        } else
                            a = s.child;
                        if (a !== null)
                            a.return = s;
                        else
                            for (a = s; a !== null; ) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (s = a.sibling,
                                s !== null) {
                                    s.return = a.return,
                                    a = s;
                                    break
                                }
                                a = a.return
                            }
                        s = a
                    }
            Fe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        eo(t, n),
        o = ct(o),
        r = r(o),
        t.flags |= 1,
        Fe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = wt(r, t.pendingProps),
        o = wt(r.type, o),
        Mf(e, t, r, o, n);
    case 15:
        return Km(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : wt(r, o),
        Pa(e, t),
        t.tag = 1,
        Ye(r) ? (e = !0,
        qa(t)) : e = !1,
        eo(t, n),
        Ym(t, r, o),
        Pu(t, r, o, n),
        Ru(null, t, r, !0, e, n);
    case 19:
        return tg(e, t, n);
    case 22:
        return Xm(e, t, n)
    }
    throw Error(O(156, t.tag))
}
;
function vg(e, t) {
    return Vh(e, t)
}
function uw(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function lt(e, t, n, r) {
    return new uw(e,t,n,r)
}
function Gc(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function cw(e) {
    if (typeof e == "function")
        return Gc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === hc)
            return 11;
        if (e === mc)
            return 14
    }
    return 2
}
function Un(e, t) {
    var n = e.alternate;
    return n === null ? (n = lt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ra(e, t, n, r, o, s) {
    var a = 2;
    if (r = e,
    typeof e == "function")
        Gc(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e: switch (e) {
        case $r:
            return mr(n.children, o, s, t);
        case pc:
            a = 8,
            o |= 8;
            break;
        case Xl:
            return e = lt(12, n, t, o | 2),
            e.elementType = Xl,
            e.lanes = s,
            e;
        case Jl:
            return e = lt(13, n, t, o),
            e.elementType = Jl,
            e.lanes = s,
            e;
        case Zl:
            return e = lt(19, n, t, o),
            e.elementType = Zl,
            e.lanes = s,
            e;
        case Ph:
            return ji(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case kh:
                    a = 10;
                    break e;
                case Nh:
                    a = 9;
                    break e;
                case hc:
                    a = 11;
                    break e;
                case mc:
                    a = 14;
                    break e;
                case Cn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, e == null ? e : typeof e, ""))
        }
    return t = lt(a, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function mr(e, t, n, r) {
    return e = lt(7, e, r, t),
    e.lanes = n,
    e
}
function ji(e, t, n, r) {
    return e = lt(22, e, r, t),
    e.elementType = Ph,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ol(e, t, n) {
    return e = lt(6, e, null, t),
    e.lanes = n,
    e
}
function Ml(e, t, n) {
    return t = lt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function dw(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = fl(0),
    this.expirationTimes = fl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = fl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Kc(e, t, n, r, o, s, a, i, l) {
    return e = new dw(e,t,n,i,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = lt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ac(s),
    e
}
function fw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Fr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function yg(e) {
    if (!e)
        return Hn;
    e = e._reactInternals;
    e: {
        if (kr(e) !== e || e.tag !== 1)
            throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ye(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ye(n))
            return ym(e, n, t)
    }
    return t
}
function xg(e, t, n, r, o, s, a, i, l) {
    return e = Kc(n, r, !0, e, o, s, a, i, l),
    e.context = yg(null),
    n = e.current,
    r = ze(),
    o = Wn(n),
    s = nn(r, o),
    s.callback = t ?? null,
    zn(n, s, o),
    e.current.lanes = o,
    Ds(e, o, r),
    qe(e, r),
    e
}
function Ti(e, t, n, r) {
    var o = t.current
      , s = ze()
      , a = Wn(o);
    return n = yg(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = nn(s, a),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = zn(o, t, a),
    e !== null && (Pt(e, o, a, s),
    Ea(e, o, a)),
    a
}
function ii(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Vf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Xc(e, t) {
    Vf(e, t),
    (e = e.alternate) && Vf(e, t)
}
function pw() {
    return null
}
var wg = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Jc(e) {
    this._internalRoot = e
}
Ri.prototype.render = Jc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(O(409));
    Ti(e, t, null, null)
}
;
Ri.prototype.unmount = Jc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        br(function() {
            Ti(null, e, null, null)
        }),
        t[on] = null
    }
}
;
function Ri(e) {
    this._internalRoot = e
}
Ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Xh();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++)
            ;
        kn.splice(n, 0, e),
        n === 0 && Zh(e)
    }
}
;
function Zc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Oi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Hf() {}
function hw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = ii(a);
                s.call(u)
            }
        }
        var a = xg(t, r, e, 0, null, !1, !1, "", Hf);
        return e._reactRootContainer = a,
        e[on] = a.current,
        ms(e.nodeType === 8 ? e.parentNode : e),
        br(),
        a
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = ii(l);
            i.call(u)
        }
    }
    var l = Kc(e, 0, !1, null, null, !1, !1, "", Hf);
    return e._reactRootContainer = l,
    e[on] = l.current,
    ms(e.nodeType === 8 ? e.parentNode : e),
    br(function() {
        Ti(t, l, n, r)
    }),
    l
}
function Mi(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var a = s;
        if (typeof o == "function") {
            var i = o;
            o = function() {
                var l = ii(a);
                i.call(l)
            }
        }
        Ti(t, a, e, o)
    } else
        a = hw(n, t, e, o, r);
    return ii(a)
}
Gh = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Yo(t.pendingLanes);
            n !== 0 && (yc(t, n | 1),
            qe(t, ye()),
            !(X & 6) && (bo = ye() + 500,
            Xn()))
        }
        break;
    case 13:
        br(function() {
            var r = sn(e, 1);
            if (r !== null) {
                var o = ze();
                Pt(r, e, 1, o)
            }
        }),
        Xc(e, 1)
    }
}
;
xc = function(e) {
    if (e.tag === 13) {
        var t = sn(e, 134217728);
        if (t !== null) {
            var n = ze();
            Pt(t, e, 134217728, n)
        }
        Xc(e, 134217728)
    }
}
;
Kh = function(e) {
    if (e.tag === 13) {
        var t = Wn(e)
          , n = sn(e, t);
        if (n !== null) {
            var r = ze();
            Pt(n, e, t, r)
        }
        Xc(e, t)
    }
}
;
Xh = function() {
    return ne
}
;
Jh = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
uu = function(e, t, n) {
    switch (t) {
    case "input":
        if (nu(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Si(r);
                    if (!o)
                        throw Error(O(90));
                    Th(r),
                    nu(r, o)
                }
            }
        }
        break;
    case "textarea":
        Oh(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Kr(e, !!n.multiple, t, !1)
    }
}
;
Fh = Qc;
$h = br;
var mw = {
    usingClientEntryPoint: !1,
    Events: [Is, Ur, Si, Lh, Ih, Qc]
}
  , Wo = {
    findFiberByHostInstance: sr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , gw = {
    bundleType: Wo.bundleType,
    version: Wo.version,
    rendererPackageName: Wo.rendererPackageName,
    rendererConfig: Wo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Wh(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Wo.findFiberByHostInstance || pw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ua.isDisabled && ua.supportsFiber)
        try {
            yi = ua.inject(gw),
            Vt = ua
        } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mw;
nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Zc(t))
        throw Error(O(200));
    return fw(e, t, null, n)
}
;
nt.createRoot = function(e, t) {
    if (!Zc(e))
        throw Error(O(299));
    var n = !1
      , r = ""
      , o = wg;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Kc(e, 1, !1, null, null, n, !1, r, o),
    e[on] = t.current,
    ms(e.nodeType === 8 ? e.parentNode : e),
    new Jc(t)
}
;
nt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","),
        Error(O(268, e)));
    return e = Wh(t),
    e = e === null ? null : e.stateNode,
    e
}
;
nt.flushSync = function(e) {
    return br(e)
}
;
nt.hydrate = function(e, t, n) {
    if (!Oi(t))
        throw Error(O(200));
    return Mi(null, e, t, !0, n)
}
;
nt.hydrateRoot = function(e, t, n) {
    if (!Zc(e))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , a = wg;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    t = xg(t, null, e, 1, n ?? null, o, !1, s, a),
    e[on] = t.current,
    ms(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Ri(t)
}
;
nt.render = function(e, t, n) {
    if (!Oi(t))
        throw Error(O(200));
    return Mi(null, e, t, !1, n)
}
;
nt.unmountComponentAtNode = function(e) {
    if (!Oi(e))
        throw Error(O(40));
    return e._reactRootContainer ? (br(function() {
        Mi(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[on] = null
        })
    }),
    !0) : !1
}
;
nt.unstable_batchedUpdates = Qc;
nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Oi(n))
        throw Error(O(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(O(38));
    return Mi(e, t, n, !1, r)
}
;
nt.version = "18.3.1-next-f1338f8080-20240426";
function bg() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)
        } catch (e) {
            console.error(e)
        }
}
bg(),
bh.exports = nt;
var $s = bh.exports;
const Sg = uh($s);
var Cg, Qf = $s;
Cg = Qf.createRoot,
Qf.hydrateRoot;
const vw = 1
  , yw = 1e6;
let Al = 0;
function xw() {
    return Al = (Al + 1) % Number.MAX_SAFE_INTEGER,
    Al.toString()
}
const _l = new Map
  , Yf = e => {
    if (_l.has(e))
        return;
    const t = setTimeout( () => {
        _l.delete(e),
        ss({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , yw);
    _l.set(e, t)
}
  , ww = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, vw)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Yf(n) : e.toasts.forEach(r => {
                Yf(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , Oa = [];
let Ma = {
    toasts: []
};
function ss(e) {
    Ma = ww(Ma, e),
    Oa.forEach(t => {
        t(Ma)
    }
    )
}
function bw({...e}) {
    const t = xw()
      , n = o => ss({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => ss({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return ss({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function ed() {
    const [e,t] = g.useState(Ma);
    return g.useEffect( () => (Oa.push(t),
    () => {
        const n = Oa.indexOf(t);
        n > -1 && Oa.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: bw,
        dismiss: n => ss({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function se(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function qf(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Eg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = qf(o, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    typeof s == "function" ? s() : qf(e[o], null)
                }
            }
    }
}
function Te(...e) {
    return g.useCallback(Eg(...e), e)
}
function Sw(e, t) {
    const n = g.createContext(t)
      , r = s => {
        const {children: a, ...i} = s
          , l = g.useMemo( () => i, Object.values(i));
        return c.jsx(n.Provider, {
            value: l,
            children: a
        })
    }
    ;
    r.displayName = e + "Provider";
    function o(s) {
        const a = g.useContext(n);
        if (a)
            return a;
        if (t !== void 0)
            return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}
function Jn(e, t=[]) {
    let n = [];
    function r(s, a) {
        const i = g.createContext(a)
          , l = n.length;
        n = [...n, a];
        const u = f => {
            var y;
            const {scope: m, children: p, ...b} = f
              , v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[l]) || i
              , w = g.useMemo( () => b, Object.values(b));
            return c.jsx(v.Provider, {
                value: w,
                children: p
            })
        }
        ;
        u.displayName = s + "Provider";
        function d(f, m) {
            var v;
            const p = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[l]) || i
              , b = g.useContext(p);
            if (b)
                return b;
            if (a !== void 0)
                return a;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(a => g.createContext(a));
        return function(i) {
            const l = (i == null ? void 0 : i[e]) || s;
            return g.useMemo( () => ({
                [`__scope${e}`]: {
                    ...i,
                    [e]: l
                }
            }), [i, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, Cw(o, ...t)]
}
function Cw(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce( (i, {useScope: l, scopeName: u}) => {
                const f = l(s)[`__scope${u}`];
                return {
                    ...i,
                    ...f
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Es(e) {
    const t = kw(e)
      , n = g.forwardRef( (r, o) => {
        const {children: s, ...a} = r
          , i = g.Children.toArray(s)
          , l = i.find(Pw);
        if (l) {
            const u = l.props.children
              , d = i.map(f => f === l ? g.Children.count(u) > 1 ? g.Children.only(null) : g.isValidElement(u) ? u.props.children : null : f);
            return c.jsx(t, {
                ...a,
                ref: o,
                children: g.isValidElement(u) ? g.cloneElement(u, void 0, d) : null
            })
        }
        return c.jsx(t, {
            ...a,
            ref: o,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var Ew = Es("Slot");
function kw(e) {
    const t = g.forwardRef( (n, r) => {
        const {children: o, ...s} = n;
        if (g.isValidElement(o)) {
            const a = Tw(o)
              , i = jw(s, o.props);
            return o.type !== g.Fragment && (i.ref = r ? Eg(r, a) : a),
            g.cloneElement(o, i)
        }
        return g.Children.count(o) > 1 ? g.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var kg = Symbol("radix.slottable");
function Nw(e) {
    const t = ({children: n}) => c.jsx(c.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = kg,
    t
}
function Pw(e) {
    return g.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === kg
}
function jw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
            const l = s(...i);
            return o(...i),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function Tw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Ng(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Jn(t)
      , [o,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , a = v => {
        const {scope: w, children: y} = v
          , h = R.useRef(null)
          , x = R.useRef(new Map).current;
        return c.jsx(o, {
            scope: w,
            itemMap: x,
            collectionRef: h,
            children: y
        })
    }
    ;
    a.displayName = t;
    const i = e + "CollectionSlot"
      , l = Es(i)
      , u = R.forwardRef( (v, w) => {
        const {scope: y, children: h} = v
          , x = s(i, y)
          , S = Te(w, x.collectionRef);
        return c.jsx(l, {
            ref: S,
            children: h
        })
    }
    );
    u.displayName = i;
    const d = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , m = Es(d)
      , p = R.forwardRef( (v, w) => {
        const {scope: y, children: h, ...x} = v
          , S = R.useRef(null)
          , C = Te(w, S)
          , E = s(d, y);
        return R.useEffect( () => (E.itemMap.set(S, {
            ref: S,
            ...x
        }),
        () => void E.itemMap.delete(S))),
        c.jsx(m, {
            [f]: "",
            ref: C,
            children: h
        })
    }
    );
    p.displayName = d;
    function b(v) {
        const w = s(e + "CollectionConsumer", v);
        return R.useCallback( () => {
            const h = w.collectionRef.current;
            if (!h)
                return [];
            const x = Array.from(h.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (E, k) => x.indexOf(E.ref.current) - x.indexOf(k.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: a,
        Slot: u,
        ItemSlot: p
    }, b, r]
}
var Rw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , ee = Rw.reduce( (e, t) => {
    const n = Es(`Primitive.${t}`)
      , r = g.forwardRef( (o, s) => {
        const {asChild: a, ...i} = o
          , l = a ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(l, {
            ...i,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function Pg(e, t) {
    e && $s.flushSync( () => e.dispatchEvent(t))
}
function Tt(e) {
    const t = g.useRef(e);
    return g.useEffect( () => {
        t.current = e
    }
    ),
    g.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Ow(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Tt(e);
    g.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Mw = "DismissableLayer", Wu = "dismissableLayer.update", Aw = "dismissableLayer.pointerDownOutside", _w = "dismissableLayer.focusOutside", Gf, jg = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Ai = g.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: a, onDismiss: i, ...l} = e
      , u = g.useContext(jg)
      , [d,f] = g.useState(null)
      , m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = g.useState({})
      , b = Te(t, k => f(k))
      , v = Array.from(u.layers)
      , [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , y = v.indexOf(w)
      , h = d ? v.indexOf(d) : -1
      , x = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = h >= y
      , C = Lw(k => {
        const T = k.target
          , M = [...u.branches].some(A => A.contains(T));
        !S || M || (o == null || o(k),
        a == null || a(k),
        k.defaultPrevented || i == null || i())
    }
    , m)
      , E = Iw(k => {
        const T = k.target;
        [...u.branches].some(A => A.contains(T)) || (s == null || s(k),
        a == null || a(k),
        k.defaultPrevented || i == null || i())
    }
    , m);
    return Ow(k => {
        h === u.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && i && (k.preventDefault(),
        i()))
    }
    , m),
    g.useEffect( () => {
        if (d)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Gf = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Kf(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Gf)
            }
    }
    , [d, m, n, u]),
    g.useEffect( () => () => {
        d && (u.layers.delete(d),
        u.layersWithOutsidePointerEventsDisabled.delete(d),
        Kf())
    }
    , [d, u]),
    g.useEffect( () => {
        const k = () => p({});
        return document.addEventListener(Wu, k),
        () => document.removeEventListener(Wu, k)
    }
    , []),
    c.jsx(ee.div, {
        ...l,
        ref: b,
        style: {
            pointerEvents: x ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: se(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: se(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: se(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Ai.displayName = Mw;
var Dw = "DismissableLayerBranch"
  , Tg = g.forwardRef( (e, t) => {
    const n = g.useContext(jg)
      , r = g.useRef(null)
      , o = Te(t, r);
    return g.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    c.jsx(ee.div, {
        ...e,
        ref: o
    })
}
);
Tg.displayName = Dw;
function Lw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Tt(e)
      , r = g.useRef(!1)
      , o = g.useRef( () => {}
    );
    return g.useEffect( () => {
        const s = i => {
            if (i.target && !r.current) {
                let l = function() {
                    Rg(Aw, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: i
                };
                i.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , a = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(a),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Iw(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = Tt(e)
      , r = g.useRef(!1);
    return g.useEffect( () => {
        const o = s => {
            s.target && !r.current && Rg(_w, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Kf() {
    const e = new CustomEvent(Wu);
    document.dispatchEvent(e)
}
function Rg(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Pg(o, s) : o.dispatchEvent(s)
}
var Fw = Ai
  , $w = Tg
  , tt = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {}
  , zw = "Portal"
  , td = g.forwardRef( (e, t) => {
    var i;
    const {container: n, ...r} = e
      , [o,s] = g.useState(!1);
    tt( () => s(!0), []);
    const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
    return a ? Sg.createPortal(c.jsx(ee.div, {
        ...r,
        ref: t
    }), a) : null
}
);
td.displayName = zw;
function Bw(e, t) {
    return g.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Nr = e => {
    const {present: t, children: n} = e
      , r = Ww(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n)
      , s = Te(r.ref, Uw(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: s
    }) : null
}
;
Nr.displayName = "Presence";
function Ww(e) {
    const [t,n] = g.useState()
      , r = g.useRef(null)
      , o = g.useRef(e)
      , s = g.useRef("none")
      , a = e ? "mounted" : "unmounted"
      , [i,l] = Bw(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect( () => {
        const u = ca(r.current);
        s.current = i === "mounted" ? u : "none"
    }
    , [i]),
    tt( () => {
        const u = r.current
          , d = o.current;
        if (d !== e) {
            const m = s.current
              , p = ca(u);
            e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && m !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    tt( () => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window
              , f = p => {
                const v = ca(r.current).includes(p.animationName);
                if (p.target === t && v && (l("ANIMATION_END"),
                !o.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = d.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , m = p => {
                p.target === t && (s.current = ca(r.current))
            }
            ;
            return t.addEventListener("animationstart", m),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                d.clearTimeout(u),
                t.removeEventListener("animationstart", m),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: g.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ca(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Uw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Vw = uc[" useInsertionEffect ".trim().toString()] || tt;
function zs({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,s,a] = Hw({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , l = i ? e : o;
    {
        const d = g.useRef(e !== void 0);
        g.useEffect( () => {
            const f = d.current;
            f !== i && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            d.current = i
        }
        , [i, r])
    }
    const u = g.useCallback(d => {
        var f;
        if (i) {
            const m = Qw(d) ? d(e) : d;
            m !== e && ((f = a.current) == null || f.call(a, m))
        } else
            s(d)
    }
    , [i, e, s, a]);
    return [l, u]
}
function Hw({defaultProp: e, onChange: t}) {
    const [n,r] = g.useState(e)
      , o = g.useRef(n)
      , s = g.useRef(t);
    return Vw( () => {
        s.current = t
    }
    , [t]),
    g.useEffect( () => {
        var a;
        o.current !== n && ((a = s.current) == null || a.call(s, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, s]
}
function Qw(e) {
    return typeof e == "function"
}
var Yw = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , qw = "VisuallyHidden"
  , _i = g.forwardRef( (e, t) => c.jsx(ee.span, {
    ...e,
    ref: t,
    style: {
        ...Yw,
        ...e.style
    }
}));
_i.displayName = qw;
var Gw = _i
  , nd = "ToastProvider"
  , [rd,Kw,Xw] = Ng("Toast")
  , [Og,NT] = Jn("Toast", [Xw])
  , [Jw,Di] = Og(nd)
  , Mg = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: s=50, children: a} = e
      , [i,l] = g.useState(null)
      , [u,d] = g.useState(0)
      , f = g.useRef(!1)
      , m = g.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${nd}\`. Expected non-empty \`string\`.`),
    c.jsx(rd.Provider, {
        scope: t,
        children: c.jsx(Jw, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: s,
            toastCount: u,
            viewport: i,
            onViewportChange: l,
            onToastAdd: g.useCallback( () => d(p => p + 1), []),
            onToastRemove: g.useCallback( () => d(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: m,
            children: a
        })
    })
}
;
Mg.displayName = nd;
var Ag = "ToastViewport"
  , Zw = ["F8"]
  , Uu = "toast.viewportPause"
  , Vu = "toast.viewportResume"
  , _g = g.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Zw, label: o="Notifications ({hotkey})", ...s} = e
      , a = Di(Ag, n)
      , i = Kw(n)
      , l = g.useRef(null)
      , u = g.useRef(null)
      , d = g.useRef(null)
      , f = g.useRef(null)
      , m = Te(t, f, a.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = a.toastCount > 0;
    g.useEffect( () => {
        const w = y => {
            var x;
            r.length !== 0 && r.every(S => y[S] || y.code === S) && ((x = f.current) == null || x.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    g.useEffect( () => {
        const w = l.current
          , y = f.current;
        if (b && w && y) {
            const h = () => {
                if (!a.isClosePausedRef.current) {
                    const E = new CustomEvent(Uu);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !0
                }
            }
              , x = () => {
                if (a.isClosePausedRef.current) {
                    const E = new CustomEvent(Vu);
                    y.dispatchEvent(E),
                    a.isClosePausedRef.current = !1
                }
            }
              , S = E => {
                !w.contains(E.relatedTarget) && x()
            }
              , C = () => {
                w.contains(document.activeElement) || x()
            }
            ;
            return w.addEventListener("focusin", h),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
                w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x)
            }
        }
    }
    , [b, a.isClosePausedRef]);
    const v = g.useCallback( ({tabbingDirection: w}) => {
        const h = i().map(x => {
            const S = x.ref.current
              , C = [S, ...fb(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? h.reverse() : h).flat()
    }
    , [i]);
    return g.useEffect( () => {
        const w = f.current;
        if (w) {
            const y = h => {
                var C, E, k;
                const x = h.altKey || h.ctrlKey || h.metaKey;
                if (h.key === "Tab" && !x) {
                    const T = document.activeElement
                      , M = h.shiftKey;
                    if (h.target === w && M) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const I = v({
                        tabbingDirection: M ? "backwards" : "forwards"
                    })
                      , Q = I.findIndex(_ => _ === T);
                    Dl(I.slice(Q + 1)) ? h.preventDefault() : M ? (E = u.current) == null || E.focus() : (k = d.current) == null || k.focus()
                }
            }
            ;
            return w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
        }
    }
    , [i, v]),
    c.jsxs($w, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && c.jsx(Hu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "forwards"
                });
                Dl(w)
            }
        }), c.jsx(rd.Slot, {
            scope: n,
            children: c.jsx(ee.ol, {
                tabIndex: -1,
                ...s,
                ref: m
            })
        }), b && c.jsx(Hu, {
            ref: d,
            onFocusFromOutsideViewport: () => {
                const w = v({
                    tabbingDirection: "backwards"
                });
                Dl(w)
            }
        })]
    })
}
);
_g.displayName = Ag;
var Dg = "ToastFocusProxy"
  , Hu = g.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , s = Di(Dg, n);
    return c.jsx(_i, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: a => {
            var u;
            const i = a.relatedTarget;
            !((u = s.viewport) != null && u.contains(i)) && r()
        }
    })
}
);
Hu.displayName = Dg;
var Bs = "Toast"
  , eb = "toast.swipeStart"
  , tb = "toast.swipeMove"
  , nb = "toast.swipeCancel"
  , rb = "toast.swipeEnd"
  , Lg = g.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a} = e
      , [i,l] = zs({
        prop: r,
        defaultProp: o ?? !0,
        onChange: s,
        caller: Bs
    });
    return c.jsx(Nr, {
        present: n || i,
        children: c.jsx(ab, {
            open: i,
            ...a,
            ref: t,
            onClose: () => l(!1),
            onPause: Tt(e.onPause),
            onResume: Tt(e.onResume),
            onSwipeStart: se(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: se(e.onSwipeMove, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: se(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: se(e.onSwipeEnd, u => {
                const {x: d, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
Lg.displayName = Bs;
var [ob,sb] = Og(Bs, {
    onClose() {}
})
  , ab = g.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: s, onClose: a, onEscapeKeyDown: i, onPause: l, onResume: u, onSwipeStart: d, onSwipeMove: f, onSwipeCancel: m, onSwipeEnd: p, ...b} = e
      , v = Di(Bs, n)
      , [w,y] = g.useState(null)
      , h = Te(t, _ => y(_))
      , x = g.useRef(null)
      , S = g.useRef(null)
      , C = o || v.duration
      , E = g.useRef(0)
      , k = g.useRef(C)
      , T = g.useRef(0)
      , {onToastAdd: M, onToastRemove: A} = v
      , $ = Tt( () => {
        var G;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((G = v.viewport) == null || G.focus()),
        a()
    }
    )
      , I = g.useCallback(_ => {
        !_ || _ === 1 / 0 || (window.clearTimeout(T.current),
        E.current = new Date().getTime(),
        T.current = window.setTimeout($, _))
    }
    , [$]);
    g.useEffect( () => {
        const _ = v.viewport;
        if (_) {
            const G = () => {
                I(k.current),
                u == null || u()
            }
              , z = () => {
                const U = new Date().getTime() - E.current;
                k.current = k.current - U,
                window.clearTimeout(T.current),
                l == null || l()
            }
            ;
            return _.addEventListener(Uu, z),
            _.addEventListener(Vu, G),
            () => {
                _.removeEventListener(Uu, z),
                _.removeEventListener(Vu, G)
            }
        }
    }
    , [v.viewport, C, l, u, I]),
    g.useEffect( () => {
        s && !v.isClosePausedRef.current && I(C)
    }
    , [s, C, v.isClosePausedRef, I]),
    g.useEffect( () => (M(),
    () => A()), [M, A]);
    const Q = g.useMemo( () => w ? Ug(w) : null, [w]);
    return v.viewport ? c.jsxs(c.Fragment, {
        children: [Q && c.jsx(ib, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), c.jsx(ob, {
            scope: n,
            onClose: $,
            children: $s.createPortal(c.jsx(rd.ItemSlot, {
                scope: n,
                children: c.jsx(Fw, {
                    asChild: !0,
                    onEscapeKeyDown: se(i, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || $(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: c.jsx(ee.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...b,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: se(e.onKeyDown, _ => {
                            _.key === "Escape" && (i == null || i(_.nativeEvent),
                            _.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            $()))
                        }
                        ),
                        onPointerDown: se(e.onPointerDown, _ => {
                            _.button === 0 && (x.current = {
                                x: _.clientX,
                                y: _.clientY
                            })
                        }
                        ),
                        onPointerMove: se(e.onPointerMove, _ => {
                            if (!x.current)
                                return;
                            const G = _.clientX - x.current.x
                              , z = _.clientY - x.current.y
                              , U = !!S.current
                              , P = ["left", "right"].includes(v.swipeDirection)
                              , j = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , D = P ? j(0, G) : 0
                              , V = P ? 0 : j(0, z)
                              , F = _.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: D,
                                y: V
                            }
                              , K = {
                                originalEvent: _,
                                delta: Y
                            };
                            U ? (S.current = Y,
                            da(tb, f, K, {
                                discrete: !1
                            })) : Xf(Y, v.swipeDirection, F) ? (S.current = Y,
                            da(eb, d, K, {
                                discrete: !1
                            }),
                            _.target.setPointerCapture(_.pointerId)) : (Math.abs(G) > F || Math.abs(z) > F) && (x.current = null)
                        }
                        ),
                        onPointerUp: se(e.onPointerUp, _ => {
                            const G = S.current
                              , z = _.target;
                            if (z.hasPointerCapture(_.pointerId) && z.releasePointerCapture(_.pointerId),
                            S.current = null,
                            x.current = null,
                            G) {
                                const U = _.currentTarget
                                  , P = {
                                    originalEvent: _,
                                    delta: G
                                };
                                Xf(G, v.swipeDirection, v.swipeThreshold) ? da(rb, p, P, {
                                    discrete: !0
                                }) : da(nb, m, P, {
                                    discrete: !0
                                }),
                                U.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , ib = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = Di(Bs, t)
      , [s,a] = g.useState(!1)
      , [i,l] = g.useState(!1);
    return cb( () => a(!0)),
    g.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    i ? null : c.jsx(td, {
        asChild: !0,
        children: c.jsx(_i, {
            ...r,
            children: s && c.jsxs(c.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , lb = "ToastTitle"
  , Ig = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
Ig.displayName = lb;
var ub = "ToastDescription"
  , Fg = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return c.jsx(ee.div, {
        ...r,
        ref: t
    })
}
);
Fg.displayName = ub;
var $g = "ToastAction"
  , zg = g.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? c.jsx(Wg, {
        altText: n,
        asChild: !0,
        children: c.jsx(od, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${$g}\`. Expected non-empty \`string\`.`),
    null)
}
);
zg.displayName = $g;
var Bg = "ToastClose"
  , od = g.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = sb(Bg, n);
    return c.jsx(Wg, {
        asChild: !0,
        children: c.jsx(ee.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: se(e.onClick, o.onClose)
        })
    })
}
);
od.displayName = Bg;
var Wg = g.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return c.jsx(ee.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Ug(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        db(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (s) {
                    const a = r.dataset.radixToastAnnounceAlt;
                    a && t.push(a)
                } else
                    t.push(...Ug(r))
        }
    }
    ),
    t
}
function da(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Pg(o, s) : o.dispatchEvent(s)
}
var Xf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , s = r > o;
    return t === "left" || t === "right" ? s && r > n : !s && o > n
}
;
function cb(e= () => {}
) {
    const t = Tt(e);
    tt( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function db(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function fb(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Dl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var pb = Mg
  , Vg = _g
  , Hg = Lg
  , Qg = Ig
  , Yg = Fg
  , qg = zg
  , Gg = od;
function Kg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Kg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Xg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Kg(e)) && (r && (r += " "),
        r += t);
    return r
}
const Jf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Zf = Xg
  , sd = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Zf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: s} = t
      , a = Object.keys(o).map(u => {
        const d = n == null ? void 0 : n[u]
          , f = s == null ? void 0 : s[u];
        if (d === null)
            return null;
        const m = Jf(d) || Jf(f);
        return o[u][m]
    }
    )
      , i = n && Object.entries(n).reduce( (u, d) => {
        let[f,m] = d;
        return m === void 0 || (u[f] = m),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, d) => {
        let {class: f, className: m, ...p} = d;
        return Object.entries(p).every(b => {
            let[v,w] = b;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...i
            }[v]) : {
                ...s,
                ...i
            }[v] === w
        }
        ) ? [...u, f, m] : u
    }
    , []);
    return Zf(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Jg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mb = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = g.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: s, iconNode: a, ...i}, l) => g.createElement("svg", {
    ref: l,
    ...mb,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Jg("lucide", o),
    ...i
}, [...a.map( ([u,d]) => g.createElement(u, d)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = (e, t) => {
    const n = g.forwardRef( ({className: r, ...o}, s) => g.createElement(gb, {
        ref: s,
        iconNode: t,
        className: Jg(`lucide-${hb(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = ie("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yb = ie("BadgeCheck", [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = ie("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = ie("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = ie("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xb = ie("ChevronUp", [["path", {
    d: "m18 15-6-6-6 6",
    key: "153udz"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = ie("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = ie("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ev = ie("CreditCard", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2",
    key: "ynyp8z"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10",
    key: "1b3vmo"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = ie("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = ie("Ellipsis", [["circle", {
    cx: "12",
    cy: "12",
    r: "1",
    key: "41hilf"
}], ["circle", {
    cx: "19",
    cy: "12",
    r: "1",
    key: "1wjl8i"
}], ["circle", {
    cx: "5",
    cy: "12",
    r: "1",
    key: "1pcz8c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = ie("FileText", [["path", {
    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
    key: "1rqfz7"
}], ["path", {
    d: "M14 2v4a2 2 0 0 0 2 2h4",
    key: "tnqrlb"
}], ["path", {
    d: "M10 9H8",
    key: "b1mrlr"
}], ["path", {
    d: "M16 13H8",
    key: "t4e002"
}], ["path", {
    d: "M16 17H8",
    key: "z1uh3a"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cb = ie("Info", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 16v-4",
    key: "1dtifu"
}], ["path", {
    d: "M12 8h.01",
    key: "e9boi3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tv = ie("Package", [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["path", {
    d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
    key: "yx3hmr"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eb = ie("RefreshCcw", [["path", {
    d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "14sxne"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}], ["path", {
    d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
    key: "1hlbsb"
}], ["path", {
    d: "M16 16h5v5",
    key: "ccwih5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = ie("Settings", [["path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    key: "1qme2f"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nb = ie("Share", [["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["polyline", {
    points: "16 6 12 2 8 6",
    key: "m901s6"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "15",
    key: "1p0rca"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pb = ie("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = ie("ShoppingBag", [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = ie("ShoppingCart", [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = ie("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tb = ie("Store", [["path", {
    d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
    key: "ztvudi"
}], ["path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    key: "1b2hhj"
}], ["path", {
    d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
    key: "2ebpfo"
}], ["path", {
    d: "M2 7h20",
    key: "1fcdvo"
}], ["path", {
    d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
    key: "6c3vgh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rb = ie("ThumbsUp", [["path", {
    d: "M7 10v12",
    key: "1qc93n"
}], ["path", {
    d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
    key: "emmmcr"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rv = ie("Truck", [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = ie("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = ie("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , ad = "-"
  , Mb = e => {
    const t = _b(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: a => {
            const i = a.split(ad);
            return i[0] === "" && i.length !== 1 && i.shift(),
            ov(i, t) || Ab(a)
        }
        ,
        getConflictingClassGroupIds: (a, i) => {
            const l = n[a] || [];
            return i && r[a] ? [...l, ...r[a]] : l
        }
    }
}
  , ov = (e, t) => {
    var a;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? ov(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const s = e.join(ad);
    return (a = t.validators.find( ({validator: i}) => i(s))) == null ? void 0 : a.classGroupId
}
  , tp = /^\[(.+)\]$/
  , Ab = e => {
    if (tp.test(e)) {
        const t = tp.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , _b = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Lb(Object.entries(e.classGroups), n).forEach( ([s,a]) => {
        Yu(a, r, s, t)
    }
    ),
    r
}
  , Yu = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const s = o === "" ? t : np(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Db(o)) {
                Yu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([s,a]) => {
            Yu(a, np(t, s), n, r)
        }
        )
    }
    )
}
  , np = (e, t) => {
    let n = e;
    return t.split(ad).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , Db = e => e.isThemeGetter
  , Lb = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([a,i]) => [t + a, i])) : s);
    return [n, o]
}
) : e
  , Ib = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (s, a) => {
        n.set(s, a),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                a
        },
        set(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
  , sv = "!"
  , Fb = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , s = t.length
      , a = i => {
        const l = [];
        let u = 0, d = 0, f;
        for (let w = 0; w < i.length; w++) {
            let y = i[w];
            if (u === 0) {
                if (y === o && (r || i.slice(w, w + s) === t)) {
                    l.push(i.slice(d, w)),
                    d = w + s;
                    continue
                }
                if (y === "/") {
                    f = w;
                    continue
                }
            }
            y === "[" ? u++ : y === "]" && u--
        }
        const m = l.length === 0 ? i : i.substring(d)
          , p = m.startsWith(sv)
          , b = p ? m.substring(1) : m
          , v = f && f > d ? f - d : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: b,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? i => n({
        className: i,
        parseClassName: a
    }) : a
}
  , $b = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , zb = e => ({
    cache: Ib(e.cacheSize),
    parseClassName: Fb(e),
    ...Mb(e)
})
  , Bb = /\s+/
  , Wb = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , s = []
      , a = e.trim().split(Bb);
    let i = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
        const u = a[l]
          , {modifiers: d, hasImportantModifier: f, baseClassName: m, maybePostfixModifierPosition: p} = n(u);
        let b = !!p
          , v = r(b ? m.substring(0, p) : m);
        if (!v) {
            if (!b) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            if (v = r(m),
            !v) {
                i = u + (i.length > 0 ? " " + i : i);
                continue
            }
            b = !1
        }
        const w = $b(d).join(":")
          , y = f ? w + sv : w
          , h = y + v;
        if (s.includes(h))
            continue;
        s.push(h);
        const x = o(v, b);
        for (let S = 0; S < x.length; ++S) {
            const C = x[S];
            s.push(y + C)
        }
        i = u + (i.length > 0 ? " " + i : i)
    }
    return i
}
;
function Ub() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = av(t)) && (r && (r += " "),
        r += n);
    return r
}
const av = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = av(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function Vb(e, ...t) {
    let n, r, o, s = a;
    function a(l) {
        const u = t.reduce( (d, f) => f(d), e());
        return n = zb(u),
        r = n.cache.get,
        o = n.cache.set,
        s = i,
        i(l)
    }
    function i(l) {
        const u = r(l);
        if (u)
            return u;
        const d = Wb(l, n);
        return o(l, d),
        d
    }
    return function() {
        return s(Ub.apply(null, arguments))
    }
}
const le = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , iv = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , Hb = /^\d+\/\d+$/
  , Qb = new Set(["px", "full", "screen"])
  , Yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , qb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Gb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Kb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Xb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Gt = e => no(e) || Qb.has(e) || Hb.test(e)
  , yn = e => jo(e, "length", sS)
  , no = e => !!e && !Number.isNaN(Number(e))
  , Ll = e => jo(e, "number", no)
  , Uo = e => !!e && Number.isInteger(Number(e))
  , Jb = e => e.endsWith("%") && no(e.slice(0, -1))
  , H = e => iv.test(e)
  , xn = e => Yb.test(e)
  , Zb = new Set(["length", "size", "percentage"])
  , eS = e => jo(e, Zb, lv)
  , tS = e => jo(e, "position", lv)
  , nS = new Set(["image", "url"])
  , rS = e => jo(e, nS, iS)
  , oS = e => jo(e, "", aS)
  , Vo = () => !0
  , jo = (e, t, n) => {
    const r = iv.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , sS = e => qb.test(e) && !Gb.test(e)
  , lv = () => !1
  , aS = e => Kb.test(e)
  , iS = e => Xb.test(e)
  , lS = () => {
    const e = le("colors")
      , t = le("spacing")
      , n = le("blur")
      , r = le("brightness")
      , o = le("borderColor")
      , s = le("borderRadius")
      , a = le("borderSpacing")
      , i = le("borderWidth")
      , l = le("contrast")
      , u = le("grayscale")
      , d = le("hueRotate")
      , f = le("invert")
      , m = le("gap")
      , p = le("gradientColorStops")
      , b = le("gradientColorStopPositions")
      , v = le("inset")
      , w = le("margin")
      , y = le("opacity")
      , h = le("padding")
      , x = le("saturate")
      , S = le("scale")
      , C = le("sepia")
      , E = le("skew")
      , k = le("space")
      , T = le("translate")
      , M = () => ["auto", "contain", "none"]
      , A = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , $ = () => ["auto", H, t]
      , I = () => [H, t]
      , Q = () => ["", Gt, yn]
      , _ = () => ["auto", no, H]
      , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , z = () => ["solid", "dashed", "dotted", "double", "none"]
      , U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , j = () => ["", "0", H]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , V = () => [no, H];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Vo],
            spacing: [Gt, yn],
            blur: ["none", "", xn, H],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", xn, H],
            borderSpacing: I(),
            borderWidth: Q(),
            contrast: V(),
            grayscale: j(),
            hueRotate: V(),
            invert: j(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Jb, yn],
            inset: $(),
            margin: $(),
            opacity: V(),
            padding: I(),
            saturate: V(),
            scale: V(),
            sepia: j(),
            skew: V(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", H]
            }],
            container: ["container"],
            columns: [{
                columns: [xn]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
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
                object: [...G(), H]
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
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Uo, H]
            }],
            basis: [{
                basis: $()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", H]
            }],
            grow: [{
                grow: j()
            }],
            shrink: [{
                shrink: j()
            }],
            order: [{
                order: ["first", "last", "none", Uo, H]
            }],
            "grid-cols": [{
                "grid-cols": [Vo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Uo, H]
                }, H]
            }],
            "col-start": [{
                "col-start": _()
            }],
            "col-end": [{
                "col-end": _()
            }],
            "grid-rows": [{
                "grid-rows": [Vo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Uo, H]
                }, H]
            }],
            "row-start": [{
                "row-start": _()
            }],
            "row-end": [{
                "row-end": _()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", H]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", H]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
            }],
            "min-w": [{
                "min-w": [H, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [xn]
                }, xn]
            }],
            h: [{
                h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [H, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", xn, yn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ll]
            }],
            "font-family": [{
                font: [Vo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
            }],
            "line-clamp": [{
                "line-clamp": ["none", no, Ll]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Gt, H]
            }],
            "list-image": [{
                "list-image": ["none", H]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", H]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...z(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Gt, yn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Gt, H]
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
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
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
                content: ["none", H]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...G(), tS]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", eS]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, rS]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-s": [{
                "border-s": [i]
            }],
            "border-w-e": [{
                "border-e": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...z(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: z()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...z()]
            }],
            "outline-offset": [{
                "outline-offset": [Gt, H]
            }],
            "outline-w": [{
                outline: [Gt, yn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Gt, yn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", xn, oS]
            }],
            "shadow-color": [{
                shadow: [Vo]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": [...U(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": U()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", xn, H]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [x]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", H]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", H]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Uo, H]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
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
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
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
                "will-change": ["auto", "scroll", "contents", "transform", H]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Gt, yn, Ll]
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
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}
  , uS = Vb(lS);
function oe(...e) {
    return uS(Xg(e))
}
const cS = pb
  , uv = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Vg, {
    ref: n,
    className: oe("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
uv.displayName = Vg.displayName;
const dS = sd("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , cv = g.forwardRef( ({className: e, variant: t, ...n}, r) => c.jsx(Hg, {
    ref: r,
    className: oe(dS({
        variant: t
    }), e),
    ...n
}));
cv.displayName = Hg.displayName;
const fS = g.forwardRef( ({className: e, ...t}, n) => c.jsx(qg, {
    ref: n,
    className: oe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
fS.displayName = qg.displayName;
const dv = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Gg, {
    ref: n,
    className: oe("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: c.jsx(Fi, {
        className: "h-4 w-4"
    })
}));
dv.displayName = Gg.displayName;
const fv = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Qg, {
    ref: n,
    className: oe("text-sm font-semibold", e),
    ...t
}));
fv.displayName = Qg.displayName;
const pv = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Yg, {
    ref: n,
    className: oe("text-sm opacity-90", e),
    ...t
}));
pv.displayName = Yg.displayName;
function pS() {
    const {toasts: e} = ed();
    return c.jsxs(cS, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...s}) {
            return c.jsxs(cv, {
                ...s,
                children: [c.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && c.jsx(fv, {
                        children: n
                    }), r && c.jsx(pv, {
                        children: r
                    })]
                }), o, c.jsx(dv, {})]
            }, t)
        }), c.jsx(uv, {})]
    })
}
var rp = ["light", "dark"]
  , hS = "(prefers-color-scheme: dark)"
  , mS = g.createContext(void 0)
  , gS = {
    setTheme: e => {}
    ,
    themes: []
}
  , vS = () => {
    var e;
    return (e = g.useContext(mS)) != null ? e : gS
}
;
g.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: s, value: a, attrs: i, nonce: l}) => {
    let u = s === "system"
      , d = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map(b => `'${b}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? rp.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , m = (b, v=!1, w=!0) => {
        let y = a ? a[b] : b
          , h = v ? b + "|| ''" : `'${y}'`
          , x = "";
        return o && w && !v && rp.includes(b) && (x += `d.style.colorScheme = '${b}';`),
        n === "class" ? v || y ? x += `c.add(${h})` : x += "null" : y && (x += `d[s](n,${h})`),
        x
    }
      , p = e ? `!function(){${d}${m(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${hS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${m(a ? "x[e]" : "e", !0)}}${u ? "" : "else{" + m(s, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a ? `var x=${JSON.stringify(a)};` : ""}${m(a ? "x[e]" : "e", !0)}}else{${m(s, !1, !1)};}${f}}catch(t){}}();`;
    return g.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var yS = e => {
    switch (e) {
    case "success":
        return bS;
    case "info":
        return CS;
    case "warning":
        return SS;
    case "error":
        return ES;
    default:
        return null
    }
}
  , xS = Array(12).fill(0)
  , wS = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, xS.map( (n, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , bS = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , SS = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , CS = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , ES = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , kS = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , NS = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , qu = 1
  , PS = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : qu++
              , s = this.toasts.find(i => i.id === o)
              , a = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s ? this.toasts = this.toasts.map(i => i.id === o ? (this.publish({
                ...i,
                ...e,
                id: o,
                title: n
            }),
            {
                ...i,
                ...e,
                id: o,
                dismissible: a,
                title: n
            }) : i) : this.addToast({
                title: n,
                ...r,
                dismissible: a,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, s, a = r.then(async l => {
                if (s = ["resolve", l],
                R.isValidElement(l))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (TS(l) && !l.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , d = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(l) : t.success
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: d
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(l) : t.error
                      , d = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: d
                    })
                }
            }
            ).finally( () => {
                var l;
                o && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), i = () => new Promise( (l, u) => a.then( () => s[0] === "reject" ? u(s[1]) : l(s[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: i
            } : Object.assign(n, {
                unwrap: i
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || qu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Ue = new PS
  , jS = (e, t) => {
    let n = (t == null ? void 0 : t.id) || qu++;
    return Ue.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , TS = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , RS = jS
  , OS = () => Ue.toasts
  , MS = () => Ue.getActiveToasts();
Object.assign(RS, {
    success: Ue.success,
    info: Ue.info,
    warning: Ue.warning,
    error: Ue.error,
    custom: Ue.custom,
    message: Ue.message,
    promise: Ue.promise,
    dismiss: Ue.dismiss,
    loading: Ue.loading
}, {
    getHistory: OS,
    getToasts: MS
});
function AS(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
AS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function fa(e) {
    return e.label !== void 0
}
var _S = 3
  , DS = "32px"
  , LS = "16px"
  , op = 4e3
  , IS = 356
  , FS = 14
  , $S = 20
  , zS = 200;
function vt(...e) {
    return e.filter(Boolean).join(" ")
}
function BS(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var WS = e => {
    var t, n, r, o, s, a, i, l, u, d, f;
    let {invert: m, toast: p, unstyled: b, interacting: v, setHeights: w, visibleToasts: y, heights: h, index: x, toasts: S, expanded: C, removeToast: E, defaultRichColors: k, closeButton: T, style: M, cancelButtonStyle: A, actionButtonStyle: $, className: I="", descriptionClassName: Q="", duration: _, position: G, gap: z, loadingIcon: U, expandByDefault: P, classNames: j, icons: D, closeButtonAriaLabel: V="Close toast", pauseWhenPageIsHidden: F} = e
      , [Y,K] = R.useState(null)
      , [xe,Re] = R.useState(null)
      , [Z,Pr] = R.useState(!1)
      , [dn,Zn] = R.useState(!1)
      , [fn,jr] = R.useState(!1)
      , [pn,Us] = R.useState(!1)
      , [nl,Vs] = R.useState(!1)
      , [rl,Ao] = R.useState(0)
      , [Tr,Rd] = R.useState(0)
      , _o = R.useRef(p.duration || _ || op)
      , Od = R.useRef(null)
      , er = R.useRef(null)
      , Ly = x === 0
      , Iy = x + 1 <= y
      , ot = p.type
      , Rr = p.dismissible !== !1
      , Fy = p.className || ""
      , $y = p.descriptionClassName || ""
      , Hs = R.useMemo( () => h.findIndex(B => B.toastId === p.id) || 0, [h, p.id])
      , zy = R.useMemo( () => {
        var B;
        return (B = p.closeButton) != null ? B : T
    }
    , [p.closeButton, T])
      , Md = R.useMemo( () => p.duration || _ || op, [p.duration, _])
      , ol = R.useRef(0)
      , Or = R.useRef(0)
      , Ad = R.useRef(0)
      , Mr = R.useRef(null)
      , [By,Wy] = G.split("-")
      , _d = R.useMemo( () => h.reduce( (B, re, de) => de >= Hs ? B : B + re.height, 0), [h, Hs])
      , Dd = NS()
      , Uy = p.invert || m
      , sl = ot === "loading";
    Or.current = R.useMemo( () => Hs * z + _d, [Hs, _d]),
    R.useEffect( () => {
        _o.current = Md
    }
    , [Md]),
    R.useEffect( () => {
        Pr(!0)
    }
    , []),
    R.useEffect( () => {
        let B = er.current;
        if (B) {
            let re = B.getBoundingClientRect().height;
            return Rd(re),
            w(de => [{
                toastId: p.id,
                height: re,
                position: p.position
            }, ...de]),
            () => w(de => de.filter(pt => pt.toastId !== p.id))
        }
    }
    , [w, p.id]),
    R.useLayoutEffect( () => {
        if (!Z)
            return;
        let B = er.current
          , re = B.style.height;
        B.style.height = "auto";
        let de = B.getBoundingClientRect().height;
        B.style.height = re,
        Rd(de),
        w(pt => pt.find(ht => ht.toastId === p.id) ? pt.map(ht => ht.toastId === p.id ? {
            ...ht,
            height: de
        } : ht) : [{
            toastId: p.id,
            height: de,
            position: p.position
        }, ...pt])
    }
    , [Z, p.title, p.description, w, p.id]);
    let hn = R.useCallback( () => {
        Zn(!0),
        Ao(Or.current),
        w(B => B.filter(re => re.toastId !== p.id)),
        setTimeout( () => {
            E(p)
        }
        , zS)
    }
    , [p, E, w, Or]);
    R.useEffect( () => {
        if (p.promise && ot === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let B;
        return C || v || F && Dd ? ( () => {
            if (Ad.current < ol.current) {
                let re = new Date().getTime() - ol.current;
                _o.current = _o.current - re
            }
            Ad.current = new Date().getTime()
        }
        )() : _o.current !== 1 / 0 && (ol.current = new Date().getTime(),
        B = setTimeout( () => {
            var re;
            (re = p.onAutoClose) == null || re.call(p, p),
            hn()
        }
        , _o.current)),
        () => clearTimeout(B)
    }
    , [C, v, p, ot, F, Dd, hn]),
    R.useEffect( () => {
        p.delete && hn()
    }
    , [hn, p.delete]);
    function Vy() {
        var B, re, de;
        return D != null && D.loading ? R.createElement("div", {
            className: vt(j == null ? void 0 : j.loader, (B = p == null ? void 0 : p.classNames) == null ? void 0 : B.loader, "sonner-loader"),
            "data-visible": ot === "loading"
        }, D.loading) : U ? R.createElement("div", {
            className: vt(j == null ? void 0 : j.loader, (re = p == null ? void 0 : p.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ot === "loading"
        }, U) : R.createElement(wS, {
            className: vt(j == null ? void 0 : j.loader, (de = p == null ? void 0 : p.classNames) == null ? void 0 : de.loader),
            visible: ot === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: er,
        className: vt(I, Fy, j == null ? void 0 : j.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, j == null ? void 0 : j.default, j == null ? void 0 : j[ot], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[ot]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : k,
        "data-styled": !(p.jsx || p.unstyled || b),
        "data-mounted": Z,
        "data-promise": !!p.promise,
        "data-swiped": nl,
        "data-removed": dn,
        "data-visible": Iy,
        "data-y-position": By,
        "data-x-position": Wy,
        "data-index": x,
        "data-front": Ly,
        "data-swiping": fn,
        "data-dismissible": Rr,
        "data-type": ot,
        "data-invert": Uy,
        "data-swipe-out": pn,
        "data-swipe-direction": xe,
        "data-expanded": !!(C || P && Z),
        style: {
            "--index": x,
            "--toasts-before": x,
            "--z-index": S.length - x,
            "--offset": `${dn ? rl : Or.current}px`,
            "--initial-height": P ? "auto" : `${Tr}px`,
            ...M,
            ...p.style
        },
        onDragEnd: () => {
            jr(!1),
            K(null),
            Mr.current = null
        }
        ,
        onPointerDown: B => {
            sl || !Rr || (Od.current = new Date,
            Ao(Or.current),
            B.target.setPointerCapture(B.pointerId),
            B.target.tagName !== "BUTTON" && (jr(!0),
            Mr.current = {
                x: B.clientX,
                y: B.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var B, re, de, pt;
            if (pn || !Rr)
                return;
            Mr.current = null;
            let ht = Number(((B = er.current) == null ? void 0 : B.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , mn = Number(((re = er.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , tr = new Date().getTime() - ((de = Od.current) == null ? void 0 : de.getTime())
              , mt = Y === "x" ? ht : mn
              , gn = Math.abs(mt) / tr;
            if (Math.abs(mt) >= $S || gn > .11) {
                Ao(Or.current),
                (pt = p.onDismiss) == null || pt.call(p, p),
                Re(Y === "x" ? ht > 0 ? "right" : "left" : mn > 0 ? "down" : "up"),
                hn(),
                Us(!0),
                Vs(!1);
                return
            }
            jr(!1),
            K(null)
        }
        ,
        onPointerMove: B => {
            var re, de, pt, ht;
            if (!Mr.current || !Rr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let mn = B.clientY - Mr.current.y
              , tr = B.clientX - Mr.current.x
              , mt = (de = e.swipeDirections) != null ? de : BS(G);
            !Y && (Math.abs(tr) > 1 || Math.abs(mn) > 1) && K(Math.abs(tr) > Math.abs(mn) ? "x" : "y");
            let gn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (mt.includes("top") || mt.includes("bottom")) && (mt.includes("top") && mn < 0 || mt.includes("bottom") && mn > 0) && (gn.y = mn) : Y === "x" && (mt.includes("left") || mt.includes("right")) && (mt.includes("left") && tr < 0 || mt.includes("right") && tr > 0) && (gn.x = tr),
            (Math.abs(gn.x) > 0 || Math.abs(gn.y) > 0) && Vs(!0),
            (pt = er.current) == null || pt.style.setProperty("--swipe-amount-x", `${gn.x}px`),
            (ht = er.current) == null || ht.style.setProperty("--swipe-amount-y", `${gn.y}px`)
        }
    }, zy && !p.jsx ? R.createElement("button", {
        "aria-label": V,
        "data-disabled": sl,
        "data-close-button": !0,
        onClick: sl || !Rr ? () => {}
        : () => {
            var B;
            hn(),
            (B = p.onDismiss) == null || B.call(p, p)
        }
        ,
        className: vt(j == null ? void 0 : j.closeButton, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton)
    }, (s = D == null ? void 0 : D.close) != null ? s : kS) : null, p.jsx || g.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : R.createElement(R.Fragment, null, ot || p.icon || p.promise ? R.createElement("div", {
        "data-icon": "",
        className: vt(j == null ? void 0 : j.icon, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || Vy() : null, p.type !== "loading" ? p.icon || (D == null ? void 0 : D[ot]) || yS(ot) : null) : null, R.createElement("div", {
        "data-content": "",
        className: vt(j == null ? void 0 : j.content, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.content)
    }, R.createElement("div", {
        "data-title": "",
        className: vt(j == null ? void 0 : j.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? R.createElement("div", {
        "data-description": "",
        className: vt(Q, $y, j == null ? void 0 : j.description, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), g.isValidElement(p.cancel) ? p.cancel : p.cancel && fa(p.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || A,
        onClick: B => {
            var re, de;
            fa(p.cancel) && Rr && ((de = (re = p.cancel).onClick) == null || de.call(re, B),
            hn())
        }
        ,
        className: vt(j == null ? void 0 : j.cancelButton, (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.cancelButton)
    }, p.cancel.label) : null, g.isValidElement(p.action) ? p.action : p.action && fa(p.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || $,
        onClick: B => {
            var re, de;
            fa(p.action) && ((de = (re = p.action).onClick) == null || de.call(re, B),
            !B.defaultPrevented && hn())
        }
        ,
        className: vt(j == null ? void 0 : j.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
}
;
function sp() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function US(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let s = o === 1
          , a = s ? "--mobile-offset" : "--offset"
          , i = s ? LS : DS;
        function l(u) {
            ["top", "right", "bottom", "left"].forEach(d => {
                n[`${a}-${d}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${a}-${u}`] = i : n[`${a}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : l(i)
    }
    ),
    n
}
var VS = g.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: s, closeButton: a, className: i, offset: l, mobileOffset: u, theme: d="light", richColors: f, duration: m, style: p, visibleToasts: b=_S, toastOptions: v, dir: w=sp(), gap: y=FS, loadingIcon: h, icons: x, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [E,k] = R.useState([])
      , T = R.useMemo( () => Array.from(new Set([r].concat(E.filter(F => F.position).map(F => F.position)))), [E, r])
      , [M,A] = R.useState([])
      , [$,I] = R.useState(!1)
      , [Q,_] = R.useState(!1)
      , [G,z] = R.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , U = R.useRef(null)
      , P = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , j = R.useRef(null)
      , D = R.useRef(!1)
      , V = R.useCallback(F => {
        k(Y => {
            var K;
            return (K = Y.find(xe => xe.id === F.id)) != null && K.delete || Ue.dismiss(F.id),
            Y.filter( ({id: xe}) => xe !== F.id)
        }
        )
    }
    , []);
    return R.useEffect( () => Ue.subscribe(F => {
        if (F.dismiss) {
            k(Y => Y.map(K => K.id === F.id ? {
                ...K,
                delete: !0
            } : K));
            return
        }
        setTimeout( () => {
            Sg.flushSync( () => {
                k(Y => {
                    let K = Y.findIndex(xe => xe.id === F.id);
                    return K !== -1 ? [...Y.slice(0, K), {
                        ...Y[K],
                        ...F
                    }, ...Y.slice(K + 1)] : [F, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (d !== "system") {
            z(d);
            return
        }
        if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")),
        typeof window > "u")
            return;
        let F = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            F.addEventListener("change", ({matches: Y}) => {
                z(Y ? "dark" : "light")
            }
            )
        } catch {
            F.addListener( ({matches: K}) => {
                try {
                    z(K ? "dark" : "light")
                } catch (xe) {
                    console.error(xe)
                }
            }
            )
        }
    }
    , [d]),
    R.useEffect( () => {
        E.length <= 1 && I(!1)
    }
    , [E]),
    R.useEffect( () => {
        let F = Y => {
            var K, xe;
            o.every(Re => Y[Re] || Y.code === Re) && (I(!0),
            (K = U.current) == null || K.focus()),
            Y.code === "Escape" && (document.activeElement === U.current || (xe = U.current) != null && xe.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
    }
    , [o]),
    R.useEffect( () => {
        if (U.current)
            return () => {
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null,
                D.current = !1)
            }
    }
    , [U.current]),
    R.createElement("section", {
        ref: t,
        "aria-label": `${S} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map( (F, Y) => {
        var K;
        let[xe,Re] = F.split("-");
        return E.length ? R.createElement("ol", {
            key: F,
            dir: w === "auto" ? sp() : w,
            tabIndex: -1,
            ref: U,
            className: i,
            "data-sonner-toaster": !0,
            "data-theme": G,
            "data-y-position": xe,
            "data-lifted": $ && E.length > 1 && !s,
            "data-x-position": Re,
            style: {
                "--front-toast-height": `${((K = M[0]) == null ? void 0 : K.height) || 0}px`,
                "--width": `${IS}px`,
                "--gap": `${y}px`,
                ...p,
                ...US(l, u)
            },
            onBlur: Z => {
                D.current && !Z.currentTarget.contains(Z.relatedTarget) && (D.current = !1,
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || D.current || (D.current = !0,
                j.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                Q || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || _(!0)
            }
            ,
            onPointerUp: () => _(!1)
        }, E.filter(Z => !Z.position && Y === 0 || Z.position === F).map( (Z, Pr) => {
            var dn, Zn;
            return R.createElement(WS, {
                key: Z.id,
                icons: x,
                index: Pr,
                toast: Z,
                defaultRichColors: f,
                duration: (dn = v == null ? void 0 : v.duration) != null ? dn : m,
                className: v == null ? void 0 : v.className,
                descriptionClassName: v == null ? void 0 : v.descriptionClassName,
                invert: n,
                visibleToasts: b,
                closeButton: (Zn = v == null ? void 0 : v.closeButton) != null ? Zn : a,
                interacting: Q,
                position: F,
                style: v == null ? void 0 : v.style,
                unstyled: v == null ? void 0 : v.unstyled,
                classNames: v == null ? void 0 : v.classNames,
                cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                removeToast: V,
                toasts: E.filter(fn => fn.position == Z.position),
                heights: M.filter(fn => fn.position == Z.position),
                setHeights: A,
                expandByDefault: s,
                gap: y,
                loadingIcon: h,
                expanded: $,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const HS = ({...e}) => {
    const {theme: t="system"} = vS();
    return c.jsx(VS, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var QS = uc[" useId ".trim().toString()] || ( () => {}
)
  , YS = 0;
function as(e) {
    const [t,n] = g.useState(QS());
    return tt( () => {
        n(r => r ?? String(YS++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const qS = ["top", "right", "bottom", "left"]
  , Qn = Math.min
  , Ke = Math.max
  , li = Math.round
  , pa = Math.floor
  , Qt = e => ({
    x: e,
    y: e
})
  , GS = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , KS = {
    start: "end",
    end: "start"
};
function Gu(e, t, n) {
    return Ke(e, Qn(t, n))
}
function ln(e, t) {
    return typeof e == "function" ? e(t) : e
}
function un(e) {
    return e.split("-")[0]
}
function To(e) {
    return e.split("-")[1]
}
function id(e) {
    return e === "x" ? "y" : "x"
}
function ld(e) {
    return e === "y" ? "height" : "width"
}
const XS = new Set(["top", "bottom"]);
function Ut(e) {
    return XS.has(un(e)) ? "y" : "x"
}
function ud(e) {
    return id(Ut(e))
}
function JS(e, t, n) {
    n === void 0 && (n = !1);
    const r = To(e)
      , o = ud(e)
      , s = ld(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = ui(a)),
    [a, ui(a)]
}
function ZS(e) {
    const t = ui(e);
    return [Ku(e), t, Ku(t)]
}
function Ku(e) {
    return e.replace(/start|end/g, t => KS[t])
}
const ap = ["left", "right"]
  , ip = ["right", "left"]
  , eC = ["top", "bottom"]
  , tC = ["bottom", "top"];
function nC(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? ip : ap : t ? ap : ip;
    case "left":
    case "right":
        return t ? eC : tC;
    default:
        return []
    }
}
function rC(e, t, n, r) {
    const o = To(e);
    let s = nC(un(e), n === "start", r);
    return o && (s = s.map(a => a + "-" + o),
    t && (s = s.concat(s.map(Ku)))),
    s
}
function ui(e) {
    return e.replace(/left|right|bottom|top/g, t => GS[t])
}
function oC(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function hv(e) {
    return typeof e != "number" ? oC(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function ci(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function lp(e, t, n) {
    let {reference: r, floating: o} = e;
    const s = Ut(t)
      , a = ud(t)
      , i = ld(a)
      , l = un(t)
      , u = s === "y"
      , d = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , m = r[i] / 2 - o[i] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: d,
            y: r.y - o.height
        };
        break;
    case "bottom":
        p = {
            x: d,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (To(t)) {
    case "start":
        p[a] -= m * (n && u ? -1 : 1);
        break;
    case "end":
        p[a] += m * (n && u ? -1 : 1);
        break
    }
    return p
}
const sC = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: s=[], platform: a} = n
      , i = s.filter(Boolean)
      , l = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: d, y: f} = lp(u, r, l)
      , m = r
      , p = {}
      , b = 0;
    for (let v = 0; v < i.length; v++) {
        const {name: w, fn: y} = i[v]
          , {x: h, y: x, data: S, reset: C} = await y({
            x: d,
            y: f,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = h ?? d,
        f = x ?? f,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...S
            }
        },
        C && b <= 50 && (b++,
        typeof C == "object" && (C.placement && (m = C.placement),
        C.rects && (u = C.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: d, y: f} = lp(u, m, l)),
        v = -1)
    }
    return {
        x: d,
        y: f,
        placement: m,
        strategy: o,
        middlewareData: p
    }
}
;
async function ks(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: s, rects: a, elements: i, strategy: l} = e
      , {boundary: u="clippingAncestors", rootBoundary: d="viewport", elementContext: f="floating", altBoundary: m=!1, padding: p=0} = ln(t, e)
      , b = hv(p)
      , w = i[m ? f === "floating" ? "reference" : "floating" : f]
      , y = ci(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: l
    }))
      , h = f === "floating" ? {
        x: r,
        y: o,
        width: a.floating.width,
        height: a.floating.height
    } : a.reference
      , x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = ci(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: h,
        offsetParent: x,
        strategy: l
    }) : h);
    return {
        top: (y.top - C.top + b.top) / S.y,
        bottom: (C.bottom - y.bottom + b.bottom) / S.y,
        left: (y.left - C.left + b.left) / S.x,
        right: (C.right - y.right + b.right) / S.x
    }
}
const aC = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: s, platform: a, elements: i, middlewareData: l} = t
          , {element: u, padding: d=0} = ln(e, t) || {};
        if (u == null)
            return {};
        const f = hv(d)
          , m = {
            x: n,
            y: r
        }
          , p = ud(o)
          , b = ld(p)
          , v = await a.getDimensions(u)
          , w = p === "y"
          , y = w ? "top" : "left"
          , h = w ? "bottom" : "right"
          , x = w ? "clientHeight" : "clientWidth"
          , S = s.reference[b] + s.reference[p] - m[p] - s.floating[b]
          , C = m[p] - s.reference[p]
          , E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let k = E ? E[x] : 0;
        (!k || !await (a.isElement == null ? void 0 : a.isElement(E))) && (k = i.floating[x] || s.floating[b]);
        const T = S / 2 - C / 2
          , M = k / 2 - v[b] / 2 - 1
          , A = Qn(f[y], M)
          , $ = Qn(f[h], M)
          , I = A
          , Q = k - v[b] - $
          , _ = k / 2 - v[b] / 2 + T
          , G = Gu(I, _, Q)
          , z = !l.arrow && To(o) != null && _ !== G && s.reference[b] / 2 - (_ < I ? A : $) - v[b] / 2 < 0
          , U = z ? _ < I ? _ - I : _ - Q : 0;
        return {
            [p]: m[p] + U,
            data: {
                [p]: G,
                centerOffset: _ - G - U,
                ...z && {
                    alignmentOffset: U
                }
            },
            reset: z
        }
    }
})
  , iC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: s, rects: a, initialPlacement: i, platform: l, elements: u} = t
              , {mainAxis: d=!0, crossAxis: f=!0, fallbackPlacements: m, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: v=!0, ...w} = ln(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const y = un(o)
              , h = Ut(i)
              , x = un(i) === i
              , S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating))
              , C = m || (x || !v ? [ui(i)] : ZS(i))
              , E = b !== "none";
            !m && E && C.push(...rC(i, v, b, S));
            const k = [i, ...C]
              , T = await ks(t, w)
              , M = [];
            let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (d && M.push(T[y]),
            f) {
                const _ = JS(o, a, S);
                M.push(T[_[0]], T[_[1]])
            }
            if (A = [...A, {
                placement: o,
                overflows: M
            }],
            !M.every(_ => _ <= 0)) {
                var $, I;
                const _ = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1
                  , G = k[_];
                if (G && (!(f === "alignment" ? h !== Ut(G) : !1) || A.every(P => P.overflows[0] > 0 && Ut(P.placement) === h)))
                    return {
                        data: {
                            index: _,
                            overflows: A
                        },
                        reset: {
                            placement: G
                        }
                    };
                let z = (I = A.filter(U => U.overflows[0] <= 0).sort( (U, P) => U.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!z)
                    switch (p) {
                    case "bestFit":
                        {
                            var Q;
                            const U = (Q = A.filter(P => {
                                if (E) {
                                    const j = Ut(P.placement);
                                    return j === h || j === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(j => j > 0).reduce( (j, D) => j + D, 0)]).sort( (P, j) => P[1] - j[1])[0]) == null ? void 0 : Q[0];
                            U && (z = U);
                            break
                        }
                    case "initialPlacement":
                        z = i;
                        break
                    }
                if (o !== z)
                    return {
                        reset: {
                            placement: z
                        }
                    }
            }
            return {}
        }
    }
};
function up(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function cp(e) {
    return qS.some(t => e[t] >= 0)
}
const lC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = ln(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await ks(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , a = up(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: a,
                            referenceHidden: cp(a)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await ks(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , a = up(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: a,
                            escaped: cp(a)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , mv = new Set(["left", "top"]);
async function uC(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , a = un(n)
      , i = To(n)
      , l = Ut(n) === "y"
      , u = mv.has(a) ? -1 : 1
      , d = s && l ? -1 : 1
      , f = ln(t, e);
    let {mainAxis: m, crossAxis: p, alignmentAxis: b} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return i && typeof b == "number" && (p = i === "end" ? b * -1 : b),
    l ? {
        x: p * d,
        y: m * u
    } : {
        x: m * u,
        y: p * d
    }
}
const cC = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: s, placement: a, middlewareData: i} = t
              , l = await uC(t, e);
            return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: a
                }
            }
        }
    }
}
  , dC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: s=!0, crossAxis: a=!1, limiter: i={
                fn: w => {
                    let {x: y, y: h} = w;
                    return {
                        x: y,
                        y: h
                    }
                }
            }, ...l} = ln(e, t)
              , u = {
                x: n,
                y: r
            }
              , d = await ks(t, l)
              , f = Ut(un(o))
              , m = id(f);
            let p = u[m]
              , b = u[f];
            if (s) {
                const w = m === "y" ? "top" : "left"
                  , y = m === "y" ? "bottom" : "right"
                  , h = p + d[w]
                  , x = p - d[y];
                p = Gu(h, p, x)
            }
            if (a) {
                const w = f === "y" ? "top" : "left"
                  , y = f === "y" ? "bottom" : "right"
                  , h = b + d[w]
                  , x = b - d[y];
                b = Gu(h, b, x)
            }
            const v = i.fn({
                ...t,
                [m]: p,
                [f]: b
            });
            return {
                ...v,
                data: {
                    x: v.x - n,
                    y: v.y - r,
                    enabled: {
                        [m]: s,
                        [f]: a
                    }
                }
            }
        }
    }
}
  , fC = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: s, middlewareData: a} = t
              , {offset: i=0, mainAxis: l=!0, crossAxis: u=!0} = ln(e, t)
              , d = {
                x: n,
                y: r
            }
              , f = Ut(o)
              , m = id(f);
            let p = d[m]
              , b = d[f];
            const v = ln(i, t)
              , w = typeof v == "number" ? {
                mainAxis: v,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...v
            };
            if (l) {
                const x = m === "y" ? "height" : "width"
                  , S = s.reference[m] - s.floating[x] + w.mainAxis
                  , C = s.reference[m] + s.reference[x] - w.mainAxis;
                p < S ? p = S : p > C && (p = C)
            }
            if (u) {
                var y, h;
                const x = m === "y" ? "width" : "height"
                  , S = mv.has(un(o))
                  , C = s.reference[f] - s.floating[x] + (S && ((y = a.offset) == null ? void 0 : y[f]) || 0) + (S ? 0 : w.crossAxis)
                  , E = s.reference[f] + s.reference[x] + (S ? 0 : ((h = a.offset) == null ? void 0 : h[f]) || 0) - (S ? w.crossAxis : 0);
                b < C ? b = C : b > E && (b = E)
            }
            return {
                [m]: p,
                [f]: b
            }
        }
    }
}
  , pC = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: s, platform: a, elements: i} = t
              , {apply: l= () => {}
            , ...u} = ln(e, t)
              , d = await ks(t, u)
              , f = un(o)
              , m = To(o)
              , p = Ut(o) === "y"
              , {width: b, height: v} = s.floating;
            let w, y;
            f === "top" || f === "bottom" ? (w = f,
            y = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = f,
            w = m === "end" ? "top" : "bottom");
            const h = v - d.top - d.bottom
              , x = b - d.left - d.right
              , S = Qn(v - d[w], h)
              , C = Qn(b - d[y], x)
              , E = !t.middlewareData.shift;
            let k = S
              , T = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = h),
            E && !m) {
                const A = Ke(d.left, 0)
                  , $ = Ke(d.right, 0)
                  , I = Ke(d.top, 0)
                  , Q = Ke(d.bottom, 0);
                p ? T = b - 2 * (A !== 0 || $ !== 0 ? A + $ : Ke(d.left, d.right)) : k = v - 2 * (I !== 0 || Q !== 0 ? I + Q : Ke(d.top, d.bottom))
            }
            await l({
                ...t,
                availableWidth: T,
                availableHeight: k
            });
            const M = await a.getDimensions(i.floating);
            return b !== M.width || v !== M.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function $i() {
    return typeof window < "u"
}
function Ro(e) {
    return gv(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ze(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function qt(e) {
    var t;
    return (t = (gv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function gv(e) {
    return $i() ? e instanceof Node || e instanceof Ze(e).Node : !1
}
function Rt(e) {
    return $i() ? e instanceof Element || e instanceof Ze(e).Element : !1
}
function Yt(e) {
    return $i() ? e instanceof HTMLElement || e instanceof Ze(e).HTMLElement : !1
}
function dp(e) {
    return !$i() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot
}
const hC = new Set(["inline", "contents"]);
function Ws(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Ot(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hC.has(o)
}
const mC = new Set(["table", "td", "th"]);
function gC(e) {
    return mC.has(Ro(e))
}
const vC = [":popover-open", ":modal"];
function zi(e) {
    return vC.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const yC = ["transform", "translate", "scale", "rotate", "perspective"]
  , xC = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , wC = ["paint", "layout", "strict", "content"];
function cd(e) {
    const t = dd()
      , n = Rt(e) ? Ot(e) : e;
    return yC.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xC.some(r => (n.willChange || "").includes(r)) || wC.some(r => (n.contain || "").includes(r))
}
function bC(e) {
    let t = Yn(e);
    for (; Yt(t) && !So(t); ) {
        if (cd(t))
            return t;
        if (zi(t))
            return null;
        t = Yn(t)
    }
    return null
}
function dd() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const SC = new Set(["html", "body", "#document"]);
function So(e) {
    return SC.has(Ro(e))
}
function Ot(e) {
    return Ze(e).getComputedStyle(e)
}
function Bi(e) {
    return Rt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Yn(e) {
    if (Ro(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || dp(e) && e.host || qt(e);
    return dp(t) ? t.host : t
}
function vv(e) {
    const t = Yn(e);
    return So(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && Ws(t) ? t : vv(t)
}
function Ns(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = vv(e)
      , s = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , a = Ze(o);
    if (s) {
        const i = Xu(a);
        return t.concat(a, a.visualViewport || [], Ws(o) ? o : [], i && n ? Ns(i) : [])
    }
    return t.concat(o, Ns(o, [], n))
}
function Xu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function yv(e) {
    const t = Ot(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Yt(e)
      , s = o ? e.offsetWidth : n
      , a = o ? e.offsetHeight : r
      , i = li(n) !== s || li(r) !== a;
    return i && (n = s,
    r = a),
    {
        width: n,
        height: r,
        $: i
    }
}
function fd(e) {
    return Rt(e) ? e : e.contextElement
}
function ro(e) {
    const t = fd(e);
    if (!Yt(t))
        return Qt(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: s} = yv(t);
    let a = (s ? li(n.width) : n.width) / r
      , i = (s ? li(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    {
        x: a,
        y: i
    }
}
const CC = Qt(0);
function xv(e) {
    const t = Ze(e);
    return !dd() || !t.visualViewport ? CC : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function EC(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Ze(e) ? !1 : t
}
function Sr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , s = fd(e);
    let a = Qt(1);
    t && (r ? Rt(r) && (a = ro(r)) : a = ro(e));
    const i = EC(s, n, r) ? xv(s) : Qt(0);
    let l = (o.left + i.x) / a.x
      , u = (o.top + i.y) / a.y
      , d = o.width / a.x
      , f = o.height / a.y;
    if (s) {
        const m = Ze(s)
          , p = r && Rt(r) ? Ze(r) : r;
        let b = m
          , v = Xu(b);
        for (; v && r && p !== b; ) {
            const w = ro(v)
              , y = v.getBoundingClientRect()
              , h = Ot(v)
              , x = y.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x
              , S = y.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
            l *= w.x,
            u *= w.y,
            d *= w.x,
            f *= w.y,
            l += x,
            u += S,
            b = Ze(v),
            v = Xu(b)
        }
    }
    return ci({
        width: d,
        height: f,
        x: l,
        y: u
    })
}
function pd(e, t) {
    const n = Bi(e).scrollLeft;
    return t ? t.left + n : Sr(qt(e)).left + n
}
function wv(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : pd(e, r))
      , s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}
function kC(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const s = o === "fixed"
      , a = qt(r)
      , i = t ? zi(t.floating) : !1;
    if (r === a || i && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Qt(1);
    const d = Qt(0)
      , f = Yt(r);
    if ((f || !f && !s) && ((Ro(r) !== "body" || Ws(a)) && (l = Bi(r)),
    Yt(r))) {
        const p = Sr(r);
        u = ro(r),
        d.x = p.x + r.clientLeft,
        d.y = p.y + r.clientTop
    }
    const m = a && !f && !s ? wv(a, l, !0) : Qt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + d.x + m.x,
        y: n.y * u.y - l.scrollTop * u.y + d.y + m.y
    }
}
function NC(e) {
    return Array.from(e.getClientRects())
}
function PC(e) {
    const t = qt(e)
      , n = Bi(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + pd(e);
    const i = -n.scrollTop;
    return Ot(r).direction === "rtl" && (a += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: s,
        x: a,
        y: i
    }
}
function jC(e, t) {
    const n = Ze(e)
      , r = qt(e)
      , o = n.visualViewport;
    let s = r.clientWidth
      , a = r.clientHeight
      , i = 0
      , l = 0;
    if (o) {
        s = o.width,
        a = o.height;
        const u = dd();
        (!u || u && t === "fixed") && (i = o.offsetLeft,
        l = o.offsetTop)
    }
    return {
        width: s,
        height: a,
        x: i,
        y: l
    }
}
const TC = new Set(["absolute", "fixed"]);
function RC(e, t) {
    const n = Sr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , s = Yt(e) ? ro(e) : Qt(1)
      , a = e.clientWidth * s.x
      , i = e.clientHeight * s.y
      , l = o * s.x
      , u = r * s.y;
    return {
        width: a,
        height: i,
        x: l,
        y: u
    }
}
function fp(e, t, n) {
    let r;
    if (t === "viewport")
        r = jC(e, n);
    else if (t === "document")
        r = PC(qt(e));
    else if (Rt(t))
        r = RC(t, n);
    else {
        const o = xv(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return ci(r)
}
function bv(e, t) {
    const n = Yn(e);
    return n === t || !Rt(n) || So(n) ? !1 : Ot(n).position === "fixed" || bv(n, t)
}
function OC(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Ns(e, [], !1).filter(i => Rt(i) && Ro(i) !== "body")
      , o = null;
    const s = Ot(e).position === "fixed";
    let a = s ? Yn(e) : e;
    for (; Rt(a) && !So(a); ) {
        const i = Ot(a)
          , l = cd(a);
        !l && i.position === "fixed" && (o = null),
        (s ? !l && !o : !l && i.position === "static" && !!o && TC.has(o.position) || Ws(a) && !l && bv(e, a)) ? r = r.filter(d => d !== a) : o = i,
        a = Yn(a)
    }
    return t.set(e, r),
    r
}
function MC(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const a = [...n === "clippingAncestors" ? zi(t) ? [] : OC(t, this._c) : [].concat(n), r]
      , i = a[0]
      , l = a.reduce( (u, d) => {
        const f = fp(t, d, o);
        return u.top = Ke(f.top, u.top),
        u.right = Qn(f.right, u.right),
        u.bottom = Qn(f.bottom, u.bottom),
        u.left = Ke(f.left, u.left),
        u
    }
    , fp(t, i, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function AC(e) {
    const {width: t, height: n} = yv(e);
    return {
        width: t,
        height: n
    }
}
function _C(e, t, n) {
    const r = Yt(t)
      , o = qt(t)
      , s = n === "fixed"
      , a = Sr(e, !0, s, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Qt(0);
    function u() {
        l.x = pd(o)
    }
    if (r || !r && !s)
        if ((Ro(t) !== "body" || Ws(o)) && (i = Bi(t)),
        r) {
            const p = Sr(t, !0, s, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            o && u();
    s && !r && o && u();
    const d = o && !r && !s ? wv(o, i) : Qt(0)
      , f = a.left + i.scrollLeft - l.x - d.x
      , m = a.top + i.scrollTop - l.y - d.y;
    return {
        x: f,
        y: m,
        width: a.width,
        height: a.height
    }
}
function Il(e) {
    return Ot(e).position === "static"
}
function pp(e, t) {
    if (!Yt(e) || Ot(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return qt(e) === n && (n = n.ownerDocument.body),
    n
}
function Sv(e, t) {
    const n = Ze(e);
    if (zi(e))
        return n;
    if (!Yt(e)) {
        let o = Yn(e);
        for (; o && !So(o); ) {
            if (Rt(o) && !Il(o))
                return o;
            o = Yn(o)
        }
        return n
    }
    let r = pp(e, t);
    for (; r && gC(r) && Il(r); )
        r = pp(r, t);
    return r && So(r) && Il(r) && !cd(r) ? n : r || bC(e) || n
}
const DC = async function(e) {
    const t = this.getOffsetParent || Sv
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: _C(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function LC(e) {
    return Ot(e).direction === "rtl"
}
const IC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: kC,
    getDocumentElement: qt,
    getClippingRect: MC,
    getOffsetParent: Sv,
    getElementRects: DC,
    getClientRects: NC,
    getDimensions: AC,
    getScale: ro,
    isElement: Rt,
    isRTL: LC
};
function Cv(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function FC(e, t) {
    let n = null, r;
    const o = qt(e);
    function s() {
        var i;
        clearTimeout(r),
        (i = n) == null || i.disconnect(),
        n = null
    }
    function a(i, l) {
        i === void 0 && (i = !1),
        l === void 0 && (l = 1),
        s();
        const u = e.getBoundingClientRect()
          , {left: d, top: f, width: m, height: p} = u;
        if (i || t(),
        !m || !p)
            return;
        const b = pa(f)
          , v = pa(o.clientWidth - (d + m))
          , w = pa(o.clientHeight - (f + p))
          , y = pa(d)
          , x = {
            rootMargin: -b + "px " + -v + "px " + -w + "px " + -y + "px",
            threshold: Ke(0, Qn(1, l)) || 1
        };
        let S = !0;
        function C(E) {
            const k = E[0].intersectionRatio;
            if (k !== l) {
                if (!S)
                    return a();
                k ? a(!1, k) : r = setTimeout( () => {
                    a(!1, 1e-7)
                }
                , 1e3)
            }
            k === 1 && !Cv(u, e.getBoundingClientRect()) && a(),
            S = !1
        }
        try {
            n = new IntersectionObserver(C,{
                ...x,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(C,x)
        }
        n.observe(e)
    }
    return a(!0),
    s
}
function $C(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: s=!0, elementResize: a=typeof ResizeObserver == "function", layoutShift: i=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , u = fd(e)
      , d = o || s ? [...u ? Ns(u) : [], ...Ns(t)] : [];
    d.forEach(y => {
        o && y.addEventListener("scroll", n, {
            passive: !0
        }),
        s && y.addEventListener("resize", n)
    }
    );
    const f = u && i ? FC(u, n) : null;
    let m = -1
      , p = null;
    a && (p = new ResizeObserver(y => {
        let[h] = y;
        h && h.target === u && p && (p.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var x;
            (x = p) == null || x.observe(t)
        }
        )),
        n()
    }
    ),
    u && !l && p.observe(u),
    p.observe(t));
    let b, v = l ? Sr(e) : null;
    l && w();
    function w() {
        const y = Sr(e);
        v && !Cv(v, y) && n(),
        v = y,
        b = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var y;
        d.forEach(h => {
            o && h.removeEventListener("scroll", n),
            s && h.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (y = p) == null || y.disconnect(),
        p = null,
        l && cancelAnimationFrame(b)
    }
}
const zC = cC
  , BC = dC
  , WC = iC
  , UC = pC
  , VC = lC
  , hp = aC
  , HC = fC
  , QC = (e, t, n) => {
    const r = new Map
      , o = {
        platform: IC,
        ...n
    }
      , s = {
        ...o.platform,
        _c: r
    };
    return sC(e, t, {
        ...o,
        platform: s
    })
}
;
var YC = typeof document < "u"
  , qC = function() {}
  , _a = YC ? g.useLayoutEffect : qC;
function di(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!di(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !di(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Ev(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function mp(e, t) {
    const n = Ev(e);
    return Math.round(t * n) / n
}
function Fl(e) {
    const t = g.useRef(e);
    return _a( () => {
        t.current = e
    }
    ),
    t
}
function GC(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: s, floating: a}={}, transform: i=!0, whileElementsMounted: l, open: u} = e
      , [d,f] = g.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,p] = g.useState(r);
    di(m, r) || p(r);
    const [b,v] = g.useState(null)
      , [w,y] = g.useState(null)
      , h = g.useCallback(P => {
        P !== E.current && (E.current = P,
        v(P))
    }
    , [])
      , x = g.useCallback(P => {
        P !== k.current && (k.current = P,
        y(P))
    }
    , [])
      , S = s || b
      , C = a || w
      , E = g.useRef(null)
      , k = g.useRef(null)
      , T = g.useRef(d)
      , M = l != null
      , A = Fl(l)
      , $ = Fl(o)
      , I = Fl(u)
      , Q = g.useCallback( () => {
        if (!E.current || !k.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: m
        };
        $.current && (P.platform = $.current),
        QC(E.current, k.current, P).then(j => {
            const D = {
                ...j,
                isPositioned: I.current !== !1
            };
            _.current && !di(T.current, D) && (T.current = D,
            $s.flushSync( () => {
                f(D)
            }
            ))
        }
        )
    }
    , [m, t, n, $, I]);
    _a( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [u]);
    const _ = g.useRef(!1);
    _a( () => (_.current = !0,
    () => {
        _.current = !1
    }
    ), []),
    _a( () => {
        if (S && (E.current = S),
        C && (k.current = C),
        S && C) {
            if (A.current)
                return A.current(S, C, Q);
            Q()
        }
    }
    , [S, C, Q, A, M]);
    const G = g.useMemo( () => ({
        reference: E,
        floating: k,
        setReference: h,
        setFloating: x
    }), [h, x])
      , z = g.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , U = g.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!z.floating)
            return P;
        const j = mp(z.floating, d.x)
          , D = mp(z.floating, d.y);
        return i ? {
            ...P,
            transform: "translate(" + j + "px, " + D + "px)",
            ...Ev(z.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: j,
            top: D
        }
    }
    , [n, i, z.floating, d.x, d.y]);
    return g.useMemo( () => ({
        ...d,
        update: Q,
        refs: G,
        elements: z,
        floatingStyles: U
    }), [d, Q, G, z, U])
}
const KC = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? hp({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? hp({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , XC = (e, t) => ({
    ...zC(e),
    options: [e, t]
})
  , JC = (e, t) => ({
    ...BC(e),
    options: [e, t]
})
  , ZC = (e, t) => ({
    ...HC(e),
    options: [e, t]
})
  , e2 = (e, t) => ({
    ...WC(e),
    options: [e, t]
})
  , t2 = (e, t) => ({
    ...UC(e),
    options: [e, t]
})
  , n2 = (e, t) => ({
    ...VC(e),
    options: [e, t]
})
  , r2 = (e, t) => ({
    ...KC(e),
    options: [e, t]
});
var o2 = "Arrow"
  , kv = g.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...s} = e;
    return c.jsx(ee.svg, {
        ...s,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : c.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
kv.displayName = o2;
var s2 = kv;
function a2(e) {
    const [t,n] = g.useState(void 0);
    return tt( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const s = o[0];
                let a, i;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , u = Array.isArray(l) ? l[0] : l;
                    a = u.inlineSize,
                    i = u.blockSize
                } else
                    a = e.offsetWidth,
                    i = e.offsetHeight;
                n({
                    width: a,
                    height: i
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Nv = "Popper"
  , [Pv,jv] = Jn(Nv)
  , [PT,Tv] = Pv(Nv)
  , Rv = "PopperAnchor"
  , Ov = g.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , s = Tv(Rv, n)
      , a = g.useRef(null)
      , i = Te(t, a);
    return g.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || a.current)
    }
    ),
    r ? null : c.jsx(ee.div, {
        ...o,
        ref: i
    })
}
);
Ov.displayName = Rv;
var hd = "PopperContent"
  , [i2,l2] = Pv(hd)
  , Mv = g.forwardRef( (e, t) => {
    var Z, Pr, dn, Zn, fn, jr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: s="center", alignOffset: a=0, arrowPadding: i=0, avoidCollisions: l=!0, collisionBoundary: u=[], collisionPadding: d=0, sticky: f="partial", hideWhenDetached: m=!1, updatePositionStrategy: p="optimized", onPlaced: b, ...v} = e
      , w = Tv(hd, n)
      , [y,h] = g.useState(null)
      , x = Te(t, pn => h(pn))
      , [S,C] = g.useState(null)
      , E = a2(S)
      , k = (E == null ? void 0 : E.width) ?? 0
      , T = (E == null ? void 0 : E.height) ?? 0
      , M = r + (s !== "center" ? "-" + s : "")
      , A = typeof d == "number" ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
    }
      , $ = Array.isArray(u) ? u : [u]
      , I = $.length > 0
      , Q = {
        padding: A,
        boundary: $.filter(c2),
        altBoundary: I
    }
      , {refs: _, floatingStyles: G, placement: z, isPositioned: U, middlewareData: P} = GC({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...pn) => $C(...pn, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [XC({
            mainAxis: o + T,
            alignmentAxis: a
        }), l && JC({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? ZC() : void 0,
            ...Q
        }), l && e2({
            ...Q
        }), t2({
            ...Q,
            apply: ({elements: pn, rects: Us, availableWidth: nl, availableHeight: Vs}) => {
                const {width: rl, height: Ao} = Us.reference
                  , Tr = pn.floating.style;
                Tr.setProperty("--radix-popper-available-width", `${nl}px`),
                Tr.setProperty("--radix-popper-available-height", `${Vs}px`),
                Tr.setProperty("--radix-popper-anchor-width", `${rl}px`),
                Tr.setProperty("--radix-popper-anchor-height", `${Ao}px`)
            }
        }), S && r2({
            element: S,
            padding: i
        }), d2({
            arrowWidth: k,
            arrowHeight: T
        }), m && n2({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [j,D] = Dv(z)
      , V = Tt(b);
    tt( () => {
        U && (V == null || V())
    }
    , [U, V]);
    const F = (Z = P.arrow) == null ? void 0 : Z.x
      , Y = (Pr = P.arrow) == null ? void 0 : Pr.y
      , K = ((dn = P.arrow) == null ? void 0 : dn.centerOffset) !== 0
      , [xe,Re] = g.useState();
    return tt( () => {
        y && Re(window.getComputedStyle(y).zIndex)
    }
    , [y]),
    c.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...G,
            transform: U ? G.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: xe,
            "--radix-popper-transform-origin": [(Zn = P.transformOrigin) == null ? void 0 : Zn.x, (fn = P.transformOrigin) == null ? void 0 : fn.y].join(" "),
            ...((jr = P.hide) == null ? void 0 : jr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: c.jsx(i2, {
            scope: n,
            placedSide: j,
            onArrowChange: C,
            arrowX: F,
            arrowY: Y,
            shouldHideArrow: K,
            children: c.jsx(ee.div, {
                "data-side": j,
                "data-align": D,
                ...v,
                ref: x,
                style: {
                    ...v.style,
                    animation: U ? void 0 : "none"
                }
            })
        })
    })
}
);
Mv.displayName = hd;
var Av = "PopperArrow"
  , u2 = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , _v = g.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , s = l2(Av, r)
      , a = u2[s.placedSide];
    return c.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [a]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: c.jsx(s2, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
_v.displayName = Av;
function c2(e) {
    return e !== null
}
var d2 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, y, h;
        const {placement: n, rects: r, middlewareData: o} = t
          , a = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0
          , i = a ? 0 : e.arrowWidth
          , l = a ? 0 : e.arrowHeight
          , [u,d] = Dv(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d]
          , m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2
          , p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
        let b = ""
          , v = "";
        return u === "bottom" ? (b = a ? f : `${m}px`,
        v = `${-l}px`) : u === "top" ? (b = a ? f : `${m}px`,
        v = `${r.floating.height + l}px`) : u === "right" ? (b = `${-l}px`,
        v = a ? f : `${p}px`) : u === "left" && (b = `${r.floating.width + l}px`,
        v = a ? f : `${p}px`),
        {
            data: {
                x: b,
                y: v
            }
        }
    }
});
function Dv(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var f2 = Ov
  , p2 = Mv
  , h2 = _v
  , [Wi,jT] = Jn("Tooltip", [jv])
  , md = jv()
  , Lv = "TooltipProvider"
  , m2 = 700
  , gp = "tooltip.open"
  , [g2,Iv] = Wi(Lv)
  , Fv = e => {
    const {__scopeTooltip: t, delayDuration: n=m2, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: s} = e
      , a = g.useRef(!0)
      , i = g.useRef(!1)
      , l = g.useRef(0);
    return g.useEffect( () => {
        const u = l.current;
        return () => window.clearTimeout(u)
    }
    , []),
    c.jsx(g2, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: g.useCallback( () => {
            window.clearTimeout(l.current),
            a.current = !1
        }
        , []),
        onClose: g.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => a.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: i,
        onPointerInTransitChange: g.useCallback(u => {
            i.current = u
        }
        , []),
        disableHoverableContent: o,
        children: s
    })
}
;
Fv.displayName = Lv;
var $v = "Tooltip"
  , [TT,Ui] = Wi($v)
  , Ju = "TooltipTrigger"
  , v2 = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = Ui(Ju, n)
      , s = Iv(Ju, n)
      , a = md(n)
      , i = g.useRef(null)
      , l = Te(t, i, o.onTriggerChange)
      , u = g.useRef(!1)
      , d = g.useRef(!1)
      , f = g.useCallback( () => u.current = !1, []);
    return g.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    c.jsx(f2, {
        asChild: !0,
        ...a,
        children: c.jsx(ee.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: se(e.onPointerMove, m => {
                m.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(),
                d.current = !0)
            }
            ),
            onPointerLeave: se(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                d.current = !1
            }
            ),
            onPointerDown: se(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: se(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: se(e.onBlur, o.onClose),
            onClick: se(e.onClick, o.onClose)
        })
    })
}
);
v2.displayName = Ju;
var y2 = "TooltipPortal"
  , [RT,x2] = Wi(y2, {
    forceMount: void 0
})
  , Co = "TooltipContent"
  , zv = g.forwardRef( (e, t) => {
    const n = x2(Co, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...s} = e
      , a = Ui(Co, e.__scopeTooltip);
    return c.jsx(Nr, {
        present: r || a.open,
        children: a.disableHoverableContent ? c.jsx(Bv, {
            side: o,
            ...s,
            ref: t
        }) : c.jsx(w2, {
            side: o,
            ...s,
            ref: t
        })
    })
}
)
  , w2 = g.forwardRef( (e, t) => {
    const n = Ui(Co, e.__scopeTooltip)
      , r = Iv(Co, e.__scopeTooltip)
      , o = g.useRef(null)
      , s = Te(t, o)
      , [a,i] = g.useState(null)
      , {trigger: l, onClose: u} = n
      , d = o.current
      , {onPointerInTransitChange: f} = r
      , m = g.useCallback( () => {
        i(null),
        f(!1)
    }
    , [f])
      , p = g.useCallback( (b, v) => {
        const w = b.currentTarget
          , y = {
            x: b.clientX,
            y: b.clientY
        }
          , h = k2(y, w.getBoundingClientRect())
          , x = N2(y, h)
          , S = P2(v.getBoundingClientRect())
          , C = T2([...x, ...S]);
        i(C),
        f(!0)
    }
    , [f]);
    return g.useEffect( () => () => m(), [m]),
    g.useEffect( () => {
        if (l && d) {
            const b = w => p(w, d)
              , v = w => p(w, l);
            return l.addEventListener("pointerleave", b),
            d.addEventListener("pointerleave", v),
            () => {
                l.removeEventListener("pointerleave", b),
                d.removeEventListener("pointerleave", v)
            }
        }
    }
    , [l, d, p, m]),
    g.useEffect( () => {
        if (a) {
            const b = v => {
                const w = v.target
                  , y = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , h = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w))
                  , x = !j2(y, a);
                h ? m() : x && (m(),
                u())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [l, d, a, u, m]),
    c.jsx(Bv, {
        ...e,
        ref: s
    })
}
)
  , [b2,S2] = Wi($v, {
    isInside: !1
})
  , C2 = Nw("TooltipContent")
  , Bv = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: s, onPointerDownOutside: a, ...i} = e
      , l = Ui(Co, n)
      , u = md(n)
      , {onClose: d} = l;
    return g.useEffect( () => (document.addEventListener(gp, d),
    () => document.removeEventListener(gp, d)), [d]),
    g.useEffect( () => {
        if (l.trigger) {
            const f = m => {
                const p = m.target;
                p != null && p.contains(l.trigger) && d()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, d]),
    c.jsx(Ai, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: c.jsxs(p2, {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
                ...i.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [c.jsx(C2, {
                children: r
            }), c.jsx(b2, {
                scope: n,
                isInside: !0,
                children: c.jsx(Gw, {
                    id: l.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
zv.displayName = Co;
var Wv = "TooltipArrow"
  , E2 = g.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = md(n);
    return S2(Wv, n).isInside ? null : c.jsx(h2, {
        ...o,
        ...r,
        ref: t
    })
}
);
E2.displayName = Wv;
function k2(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
    case s:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function N2(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function P2(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function j2(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const i = t[s]
          , l = t[a]
          , u = i.x
          , d = i.y
          , f = l.x
          , m = l.y;
        d > r != m > r && n < (f - u) * (r - d) / (m - d) + u && (o = !o)
    }
    return o
}
function T2(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    R2(t)
}
function R2(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var O2 = Fv
  , Uv = zv;
const M2 = O2
  , A2 = g.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => c.jsx(Uv, {
    ref: r,
    sideOffset: t,
    className: oe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
A2.displayName = Uv.displayName;
var Vi = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Hi = typeof window > "u" || "Deno"in globalThis;
function bt() {}
function _2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function D2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function L2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Zu(e, t) {
    return typeof e == "function" ? e(t) : e
}
function I2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function vp(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: a, stale: i} = e;
    if (a) {
        if (r) {
            if (t.queryHash !== gd(a, t.options))
                return !1
        } else if (!js(t.queryKey, a))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof i == "boolean" && t.isStale() !== i || o && o !== t.state.fetchStatus || s && !s(t))
}
function yp(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Ps(t.options.mutationKey) !== Ps(s))
                return !1
        } else if (!js(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function gd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ps)(e)
}
function Ps(e) {
    return JSON.stringify(e, (t, n) => ec(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function js(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => js(e[n], t[n])) : !1
}
function Vv(e, t) {
    if (e === t)
        return e;
    const n = xp(e) && xp(t);
    if (n || ec(e) && ec(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , s = n ? t : Object.keys(t)
          , a = s.length
          , i = n ? [] : {}
          , l = new Set(r);
        let u = 0;
        for (let d = 0; d < a; d++) {
            const f = n ? d : s[d];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (i[f] = void 0,
            u++) : (i[f] = Vv(e[f], t[f]),
            i[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === a && u === o ? e : i
    }
    return t
}
function xp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function ec(e) {
    if (!wp(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!wp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function wp(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function F2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function $2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Vv(e, t) : t
}
function z2(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function B2(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var vd = Symbol();
function Hv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === vd ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var lr, Pn, ao, th, W2 = (th = class extends Vi {
    constructor() {
        super();
        J(this, lr);
        J(this, Pn);
        J(this, ao);
        W(this, ao, t => {
            if (!Hi && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Pn) || this.setEventListener(N(this, ao))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Pn)) == null || t.call(this),
        W(this, Pn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, ao, t),
        (n = N(this, Pn)) == null || n.call(this),
        W(this, Pn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, lr) !== t && (W(this, lr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, lr) == "boolean" ? N(this, lr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
lr = new WeakMap,
Pn = new WeakMap,
ao = new WeakMap,
th), Qv = new W2, io, jn, lo, nh, U2 = (nh = class extends Vi {
    constructor() {
        super();
        J(this, io, !0);
        J(this, jn);
        J(this, lo);
        W(this, lo, t => {
            if (!Hi && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, jn) || this.setEventListener(N(this, lo))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, jn)) == null || t.call(this),
        W(this, jn, void 0))
    }
    setEventListener(t) {
        var n;
        W(this, lo, t),
        (n = N(this, jn)) == null || n.call(this),
        W(this, jn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, io) !== t && (W(this, io, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, io)
    }
}
,
io = new WeakMap,
jn = new WeakMap,
lo = new WeakMap,
nh), fi = new U2;
function V2() {
    let e, t;
    const n = new Promise( (o, s) => {
        e = o,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function H2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Yv(e) {
    return (e ?? "online") === "online" ? fi.isOnline() : !0
}
var qv = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function $l(e) {
    return e instanceof qv
}
function Gv(e) {
    let t = !1, n = 0, r = !1, o;
    const s = V2()
      , a = v => {
        var w;
        r || (m(new qv(v)),
        (w = e.abort) == null || w.call(e))
    }
      , i = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , u = () => Qv.isFocused() && (e.networkMode === "always" || fi.isOnline()) && e.canRun()
      , d = () => Yv(e.networkMode) && e.canRun()
      , f = v => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        s.resolve(v))
    }
      , m = v => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        s.reject(v))
    }
      , p = () => new Promise(v => {
        var w;
        o = y => {
            (r || u()) && v(y)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var v;
        o = void 0,
        r || (v = e.onContinue) == null || v.call(e)
    }
    )
      , b = () => {
        if (r)
            return;
        let v;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            v = w ?? e.fn()
        } catch (y) {
            v = Promise.reject(y)
        }
        Promise.resolve(v).then(f).catch(y => {
            var E;
            if (r)
                return;
            const h = e.retry ?? (Hi ? 0 : 3)
              , x = e.retryDelay ?? H2
              , S = typeof x == "function" ? x(n, y) : x
              , C = h === !0 || typeof h == "number" && n < h || typeof h == "function" && h(n, y);
            if (t || !C) {
                m(y);
                return
            }
            n++,
            (E = e.onFail) == null || E.call(e, n, y),
            F2(S).then( () => u() ? void 0 : p()).then( () => {
                t ? m(y) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: a,
        continue: () => (o == null || o(),
        s),
        cancelRetry: i,
        continueRetry: l,
        canStart: d,
        start: () => (d() ? b() : p().then(b),
        s)
    }
}
var Q2 = e => setTimeout(e, 0);
function Y2() {
    let e = []
      , t = 0
      , n = i => {
        i()
    }
      , r = i => {
        i()
    }
      , o = Q2;
    const s = i => {
        t ? e.push(i) : o( () => {
            n(i)
        }
        )
    }
      , a = () => {
        const i = e;
        e = [],
        i.length && o( () => {
            r( () => {
                i.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: i => {
            let l;
            t++;
            try {
                l = i()
            } finally {
                t--,
                t || a()
            }
            return l
        }
        ,
        batchCalls: i => (...l) => {
            s( () => {
                i(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: i => {
            n = i
        }
        ,
        setBatchNotifyFunction: i => {
            r = i
        }
        ,
        setScheduler: i => {
            o = i
        }
    }
}
var $e = Y2(), ur, rh, Kv = (rh = class {
    constructor() {
        J(this, ur)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        D2(this.gcTime) && W(this, ur, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Hi ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, ur) && (clearTimeout(N(this, ur)),
        W(this, ur, void 0))
    }
}
,
ur = new WeakMap,
rh), uo, cr, st, dr, _e, Ms, fr, St, Kt, oh, q2 = (oh = class extends Kv {
    constructor(t) {
        super();
        J(this, St);
        J(this, uo);
        J(this, cr);
        J(this, st);
        J(this, dr);
        J(this, _e);
        J(this, Ms);
        J(this, fr);
        W(this, fr, !1),
        W(this, Ms, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        W(this, dr, t.client),
        W(this, st, N(this, dr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        W(this, uo, K2(this.options)),
        this.state = t.state ?? N(this, uo),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, _e)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, Ms),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, st).remove(this)
    }
    setData(t, n) {
        const r = $2(this.state.data, t, this.options);
        return Oe(this, St, Kt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        Oe(this, St, Kt).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = N(this, _e)) == null ? void 0 : r.promise;
        return (o = N(this, _e)) == null || o.cancel(t),
        n ? n.then(bt).catch(bt) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, uo))
    }
    isActive() {
        return this.observers.some(t => I2(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === vd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Zu(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !L2(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, _e)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, st).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, _e) && (N(this, fr) ? N(this, _e).cancel({
            revert: !0
        }) : N(this, _e).cancelRetry()),
        this.scheduleGc()),
        N(this, st).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Oe(this, St, Kt).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, d, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, _e))
                return N(this, _e).continueRetry(),
                N(this, _e).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const m = this.observers.find(p => p.options.queryFn);
            m && this.setOptions(m.options)
        }
        const r = new AbortController
          , o = m => {
            Object.defineProperty(m, "signal", {
                enumerable: !0,
                get: () => (W(this, fr, !0),
                r.signal)
            })
        }
          , s = () => {
            const m = Hv(this.options, n)
              , b = ( () => {
                const v = {
                    client: N(this, dr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(v),
                v
            }
            )();
            return W(this, fr, !1),
            this.options.persister ? this.options.persister(m, b, this) : m(b)
        }
          , i = ( () => {
            const m = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, dr),
                state: this.state,
                fetchFn: s
            };
            return o(m),
            m
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(i, this),
        W(this, cr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = i.fetchOptions) == null ? void 0 : d.meta)) && Oe(this, St, Kt).call(this, {
            type: "fetch",
            meta: (f = i.fetchOptions) == null ? void 0 : f.meta
        });
        const l = m => {
            var p, b, v, w;
            $l(m) && m.silent || Oe(this, St, Kt).call(this, {
                type: "error",
                error: m
            }),
            $l(m) || ((b = (p = N(this, st).config).onError) == null || b.call(p, m, this),
            (w = (v = N(this, st).config).onSettled) == null || w.call(v, this.state.data, m, this)),
            this.scheduleGc()
        }
        ;
        return W(this, _e, Gv({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: i.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: m => {
                var p, b, v, w;
                if (m === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(m)
                } catch (y) {
                    l(y);
                    return
                }
                (b = (p = N(this, st).config).onSuccess) == null || b.call(p, m, this),
                (w = (v = N(this, st).config).onSettled) == null || w.call(v, m, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (m, p) => {
                Oe(this, St, Kt).call(this, {
                    type: "failed",
                    failureCount: m,
                    error: p
                })
            }
            ,
            onPause: () => {
                Oe(this, St, Kt).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Oe(this, St, Kt).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: i.options.retry,
            retryDelay: i.options.retryDelay,
            networkMode: i.options.networkMode,
            canRun: () => !0
        })),
        N(this, _e).start()
    }
}
,
uo = new WeakMap,
cr = new WeakMap,
st = new WeakMap,
dr = new WeakMap,
_e = new WeakMap,
Ms = new WeakMap,
fr = new WeakMap,
St = new WeakSet,
Kt = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...G2(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return W(this, cr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return $l(o) && o.revert && N(this, cr) ? {
                ...N(this, cr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, st).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
oh);
function G2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yv(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function K2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Lt, sh, X2 = (sh = class extends Vi {
    constructor(t={}) {
        super();
        J(this, Lt);
        this.config = t,
        W(this, Lt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , s = n.queryHash ?? gd(o, n);
        let a = this.get(s);
        return a || (a = new q2({
            client: t,
            queryKey: o,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(a)),
        a
    }
    add(t) {
        N(this, Lt).has(t.queryHash) || (N(this, Lt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Lt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Lt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Lt).get(t)
    }
    getAll() {
        return [...N(this, Lt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => vp(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => vp(t, r)) : n
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        $e.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Lt = new WeakMap,
sh), It, Ie, pr, Ft, bn, ah, J2 = (ah = class extends Kv {
    constructor(t) {
        super();
        J(this, Ft);
        J(this, It);
        J(this, Ie);
        J(this, pr);
        this.mutationId = t.mutationId,
        W(this, Ie, t.mutationCache),
        W(this, It, []),
        this.state = t.state || Z2(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, It).includes(t) || (N(this, It).push(t),
        this.clearGcTimeout(),
        N(this, Ie).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        W(this, It, N(this, It).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, Ie).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, It).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Ie).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, pr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, a, i, l, u, d, f, m, p, b, v, w, y, h, x, S, C, E, k, T;
        const n = () => {
            Oe(this, Ft, bn).call(this, {
                type: "continue"
            })
        }
        ;
        W(this, pr, Gv({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, A) => {
                Oe(this, Ft, bn).call(this, {
                    type: "failed",
                    failureCount: M,
                    error: A
                })
            }
            ,
            onPause: () => {
                Oe(this, Ft, bn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, Ie).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !N(this, pr).canStart();
        try {
            if (r)
                n();
            else {
                Oe(this, Ft, bn).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((a = (s = N(this, Ie).config).onMutate) == null ? void 0 : a.call(s, t, this));
                const A = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
                A !== this.state.context && Oe(this, Ft, bn).call(this, {
                    type: "pending",
                    context: A,
                    variables: t,
                    isPaused: o
                })
            }
            const M = await N(this, pr).start();
            return await ((d = (u = N(this, Ie).config).onSuccess) == null ? void 0 : d.call(u, M, t, this.state.context, this)),
            await ((m = (f = this.options).onSuccess) == null ? void 0 : m.call(f, M, t, this.state.context)),
            await ((b = (p = N(this, Ie).config).onSettled) == null ? void 0 : b.call(p, M, null, this.state.variables, this.state.context, this)),
            await ((w = (v = this.options).onSettled) == null ? void 0 : w.call(v, M, null, t, this.state.context)),
            Oe(this, Ft, bn).call(this, {
                type: "success",
                data: M
            }),
            M
        } catch (M) {
            try {
                throw await ((h = (y = N(this, Ie).config).onError) == null ? void 0 : h.call(y, M, t, this.state.context, this)),
                await ((S = (x = this.options).onError) == null ? void 0 : S.call(x, M, t, this.state.context)),
                await ((E = (C = N(this, Ie).config).onSettled) == null ? void 0 : E.call(C, void 0, M, this.state.variables, this.state.context, this)),
                await ((T = (k = this.options).onSettled) == null ? void 0 : T.call(k, void 0, M, t, this.state.context)),
                M
            } finally {
                Oe(this, Ft, bn).call(this, {
                    type: "error",
                    error: M
                })
            }
        } finally {
            N(this, Ie).runNext(this)
        }
    }
}
,
It = new WeakMap,
Ie = new WeakMap,
pr = new WeakMap,
Ft = new WeakSet,
bn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    $e.batch( () => {
        N(this, It).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, Ie).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ah);
function Z2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Zt, Ct, As, ih, eE = (ih = class extends Vi {
    constructor(t={}) {
        super();
        J(this, Zt);
        J(this, Ct);
        J(this, As);
        this.config = t,
        W(this, Zt, new Set),
        W(this, Ct, new Map),
        W(this, As, 0)
    }
    build(t, n, r) {
        const o = new J2({
            mutationCache: this,
            mutationId: ++Qs(this, As)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        N(this, Zt).add(t);
        const n = ha(t);
        if (typeof n == "string") {
            const r = N(this, Ct).get(n);
            r ? r.push(t) : N(this, Ct).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, Zt).delete(t)) {
            const n = ha(t);
            if (typeof n == "string") {
                const r = N(this, Ct).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && N(this, Ct).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ha(t);
        if (typeof n == "string") {
            const r = N(this, Ct).get(n)
              , o = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ha(t);
        if (typeof n == "string") {
            const o = (r = N(this, Ct).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        $e.batch( () => {
            N(this, Zt).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, Zt).clear(),
            N(this, Ct).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, Zt))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => yp(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => yp(t, n))
    }
    notify(t) {
        $e.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return $e.batch( () => Promise.all(t.map(n => n.continue().catch(bt))))
    }
}
,
Zt = new WeakMap,
Ct = new WeakMap,
As = new WeakMap,
ih);
function ha(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function bp(e) {
    return {
        onFetch: (t, n) => {
            var d, f, m, p, b;
            const r = t.options
              , o = (m = (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : m.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , a = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
            let i = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const u = async () => {
                let v = !1;
                const w = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? v = !0 : t.signal.addEventListener("abort", () => {
                            v = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , y = Hv(t.options, t.fetchOptions)
                  , h = async (x, S, C) => {
                    if (v)
                        return Promise.reject();
                    if (S == null && x.pages.length)
                        return Promise.resolve(x);
                    const k = ( () => {
                        const $ = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w($),
                        $
                    }
                    )()
                      , T = await y(k)
                      , {maxPages: M} = t.options
                      , A = C ? B2 : z2;
                    return {
                        pages: A(x.pages, T, M),
                        pageParams: A(x.pageParams, S, M)
                    }
                }
                ;
                if (o && s.length) {
                    const x = o === "backward"
                      , S = x ? tE : Sp
                      , C = {
                        pages: s,
                        pageParams: a
                    }
                      , E = S(r, C);
                    i = await h(C, E, x)
                } else {
                    const x = e ?? s.length;
                    do {
                        const S = l === 0 ? a[0] ?? r.initialPageParam : Sp(r, i);
                        if (l > 0 && S == null)
                            break;
                        i = await h(i, S),
                        l++
                    } while (l < x)
                }
                return i
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var v, w;
                return (w = (v = t.options).persister) == null ? void 0 : w.call(v, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Sp(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function tE(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ge, Tn, Rn, co, fo, On, po, ho, lh, nE = (lh = class {
    constructor(e={}) {
        J(this, ge);
        J(this, Tn);
        J(this, Rn);
        J(this, co);
        J(this, fo);
        J(this, On);
        J(this, po);
        J(this, ho);
        W(this, ge, e.queryCache || new X2),
        W(this, Tn, e.mutationCache || new eE),
        W(this, Rn, e.defaultOptions || {}),
        W(this, co, new Map),
        W(this, fo, new Map),
        W(this, On, 0)
    }
    mount() {
        Qs(this, On)._++,
        N(this, On) === 1 && (W(this, po, Qv.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ge).onFocus())
        }
        )),
        W(this, ho, fi.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ge).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Qs(this, On)._--,
        N(this, On) === 0 && ((e = N(this, po)) == null || e.call(this),
        W(this, po, void 0),
        (t = N(this, ho)) == null || t.call(this),
        W(this, ho, void 0))
    }
    isFetching(e) {
        return N(this, ge).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, Tn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, ge).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Zu(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, ge).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = N(this, ge).get(r.queryHash)
          , s = o == null ? void 0 : o.state.data
          , a = _2(t, s);
        if (a !== void 0)
            return N(this, ge).build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return $e.batch( () => N(this, ge).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ge).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, ge);
        $e.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, ge);
        return $e.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = $e.batch( () => N(this, ge).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(bt).catch(bt)
    }
    invalidateQueries(e, t={}) {
        return $e.batch( () => (N(this, ge).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = $e.batch( () => N(this, ge).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let s = o.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(bt)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(bt)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, ge).build(this, t);
        return n.isStaleByTime(Zu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(bt).catch(bt)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = bp(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(bt).catch(bt)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = bp(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return fi.isOnline() ? N(this, Tn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, ge)
    }
    getMutationCache() {
        return N(this, Tn)
    }
    getDefaultOptions() {
        return N(this, Rn)
    }
    setDefaultOptions(e) {
        W(this, Rn, e)
    }
    setQueryDefaults(e, t) {
        N(this, co).set(Ps(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, co).values()]
          , n = {};
        return t.forEach(r => {
            js(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, fo).set(Ps(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, fo).values()]
          , n = {};
        return t.forEach(r => {
            js(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, Rn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = gd(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === vd && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, Rn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, ge).clear(),
        N(this, Tn).clear()
    }
}
,
ge = new WeakMap,
Tn = new WeakMap,
Rn = new WeakMap,
co = new WeakMap,
fo = new WeakMap,
On = new WeakMap,
po = new WeakMap,
ho = new WeakMap,
lh), rE = g.createContext(void 0), oE = ({client: e, children: t}) => (g.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
c.jsx(rE.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ts() {
    return Ts = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ts.apply(this, arguments)
}
var _n;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(_n || (_n = {}));
const Cp = "popstate";
function sE(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: s, search: a, hash: i} = r.location;
        return tc("", {
            pathname: s,
            search: a,
            hash: i
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Jv(o)
    }
    return iE(t, n, null, e)
}
function Ce(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Xv(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function aE() {
    return Math.random().toString(36).substr(2, 8)
}
function Ep(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function tc(e, t, n, r) {
    return n === void 0 && (n = null),
    Ts({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Oo(t) : t, {
        state: n,
        key: t && t.key || r || aE()
    })
}
function Jv(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Oo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function iE(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: s=!1} = r
      , a = o.history
      , i = _n.Pop
      , l = null
      , u = d();
    u == null && (u = 0,
    a.replaceState(Ts({}, a.state, {
        idx: u
    }), ""));
    function d() {
        return (a.state || {
            idx: null
        }).idx
    }
    function f() {
        i = _n.Pop;
        let w = d()
          , y = w == null ? null : w - u;
        u = w,
        l && l({
            action: i,
            location: v.location,
            delta: y
        })
    }
    function m(w, y) {
        i = _n.Push;
        let h = tc(v.location, w, y);
        u = d() + 1;
        let x = Ep(h, u)
          , S = v.createHref(h);
        try {
            a.pushState(x, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            o.location.assign(S)
        }
        s && l && l({
            action: i,
            location: v.location,
            delta: 1
        })
    }
    function p(w, y) {
        i = _n.Replace;
        let h = tc(v.location, w, y);
        u = d();
        let x = Ep(h, u)
          , S = v.createHref(h);
        a.replaceState(x, "", S),
        s && l && l({
            action: i,
            location: v.location,
            delta: 0
        })
    }
    function b(w) {
        let y = o.location.origin !== "null" ? o.location.origin : o.location.href
          , h = typeof w == "string" ? w : Jv(w);
        return h = h.replace(/ $/, "%20"),
        Ce(y, "No window.location.(origin|href) available to create URL for href: " + h),
        new URL(h,y)
    }
    let v = {
        get action() {
            return i
        },
        get location() {
            return e(o, a)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(Cp, f),
            l = w,
            () => {
                o.removeEventListener(Cp, f),
                l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: b,
        encodeLocation(w) {
            let y = b(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: m,
        replace: p,
        go(w) {
            return a.go(w)
        }
    };
    return v
}
var kp;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(kp || (kp = {}));
function lE(e, t, n) {
    return n === void 0 && (n = "/"),
    uE(e, t, n, !1)
}
function uE(e, t, n, r) {
    let o = typeof t == "string" ? Oo(t) : t
      , s = t0(o.pathname || "/", n);
    if (s == null)
        return null;
    let a = Zv(e);
    cE(a);
    let i = null;
    for (let l = 0; i == null && l < a.length; ++l) {
        let u = bE(s);
        i = xE(a[l], u, r)
    }
    return i
}
function Zv(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (s, a, i) => {
        let l = {
            relativePath: i === void 0 ? s.path || "" : i,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: a,
            route: s
        };
        l.relativePath.startsWith("/") && (Ce(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let u = gr([r, l.relativePath])
          , d = n.concat(l);
        s.children && s.children.length > 0 && (Ce(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Zv(s.children, t, d, u)),
        !(s.path == null && !s.index) && t.push({
            path: u,
            score: vE(u, s.index),
            routesMeta: d
        })
    }
    ;
    return e.forEach( (s, a) => {
        var i;
        if (s.path === "" || !((i = s.path) != null && i.includes("?")))
            o(s, a);
        else
            for (let l of e0(s.path))
                o(s, a, l)
    }
    ),
    t
}
function e0(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [s, ""] : [s];
    let a = e0(r.join("/"))
      , i = [];
    return i.push(...a.map(l => l === "" ? s : [s, l].join("/"))),
    o && i.push(...a),
    i.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function cE(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : yE(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const dE = /^:[\w-]+$/
  , fE = 3
  , pE = 2
  , hE = 1
  , mE = 10
  , gE = -2
  , Np = e => e === "*";
function vE(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Np) && (r += gE),
    t && (r += pE),
    n.filter(o => !Np(o)).reduce( (o, s) => o + (dE.test(s) ? fE : s === "" ? hE : mE), r)
}
function yE(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function xE(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , s = "/"
      , a = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i]
          , u = i === r.length - 1
          , d = s === "/" ? t : t.slice(s.length) || "/"
          , f = Pp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, d)
          , m = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Pp({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, d)),
        !f)
            return null;
        Object.assign(o, f.params),
        a.push({
            params: o,
            pathname: gr([s, f.pathname]),
            pathnameBase: PE(gr([s, f.pathnameBase])),
            route: m
        }),
        f.pathnameBase !== "/" && (s = gr([s, f.pathnameBase]))
    }
    return a
}
function Pp(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = wE(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let s = o[0]
      , a = s.replace(/(.)\/+$/, "$1")
      , i = o.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: m, isOptional: p} = d;
            if (m === "*") {
                let v = i[f] || "";
                a = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1")
            }
            const b = i[f];
            return p && !b ? u[m] = void 0 : u[m] = (b || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: s,
        pathnameBase: a,
        pattern: e
    }
}
function wE(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Xv(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, i, l) => (r.push({
        paramName: i,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function bE(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Xv(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function t0(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function SE(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Oo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : CE(n, t) : t,
        search: jE(r),
        hash: TE(o)
    }
}
function CE(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function zl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function EE(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function kE(e, t) {
    let n = EE(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function NE(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Oo(e) : (o = Ts({}, e),
    Ce(!o.pathname || !o.pathname.includes("?"), zl("?", "pathname", "search", o)),
    Ce(!o.pathname || !o.pathname.includes("#"), zl("#", "pathname", "hash", o)),
    Ce(!o.search || !o.search.includes("#"), zl("#", "search", "hash", o)));
    let s = e === "" || o.pathname === "", a = s ? "/" : o.pathname, i;
    if (a == null)
        i = n;
    else {
        let f = t.length - 1;
        if (!r && a.startsWith("..")) {
            let m = a.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                f -= 1;
            o.pathname = m.join("/")
        }
        i = f >= 0 ? t[f] : "/"
    }
    let l = SE(o, i)
      , u = a && a !== "/" && a.endsWith("/")
      , d = (s || a === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"),
    l
}
const gr = e => e.join("/").replace(/\/\/+/g, "/")
  , PE = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , jE = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , TE = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function RE(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const n0 = ["post", "put", "patch", "delete"];
new Set(n0);
const OE = ["get", ...n0];
new Set(OE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rs() {
    return Rs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Rs.apply(this, arguments)
}
const yd = g.createContext(null)
  , ME = g.createContext(null)
  , Qi = g.createContext(null)
  , Yi = g.createContext(null)
  , Mo = g.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , r0 = g.createContext(null);
function qi() {
    return g.useContext(Yi) != null
}
function Gi() {
    return qi() || Ce(!1),
    g.useContext(Yi).location
}
function o0(e) {
    g.useContext(Qi).static || g.useLayoutEffect(e)
}
function AE() {
    let {isDataRoute: e} = g.useContext(Mo);
    return e ? QE() : _E()
}
function _E() {
    qi() || Ce(!1);
    let e = g.useContext(yd)
      , {basename: t, future: n, navigator: r} = g.useContext(Qi)
      , {matches: o} = g.useContext(Mo)
      , {pathname: s} = Gi()
      , a = JSON.stringify(kE(o, n.v7_relativeSplatPath))
      , i = g.useRef(!1);
    return o0( () => {
        i.current = !0
    }
    ),
    g.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !i.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = NE(u, JSON.parse(a), s, d.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : gr([t, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [t, r, a, s, e])
}
function DE(e, t) {
    return LE(e, t)
}
function LE(e, t, n, r) {
    qi() || Ce(!1);
    let {navigator: o} = g.useContext(Qi)
      , {matches: s} = g.useContext(Mo)
      , a = s[s.length - 1]
      , i = a ? a.params : {};
    a && a.pathname;
    let l = a ? a.pathnameBase : "/";
    a && a.route;
    let u = Gi(), d;
    if (t) {
        var f;
        let w = typeof t == "string" ? Oo(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Ce(!1),
        d = w
    } else
        d = u;
    let m = d.pathname || "/"
      , p = m;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + m.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let b = lE(e, {
        pathname: p
    })
      , v = BE(b && b.map(w => Object.assign({}, w, {
        params: Object.assign({}, i, w.params),
        pathname: gr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : gr([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && v ? g.createElement(Yi.Provider, {
        value: {
            location: Rs({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: _n.Pop
        }
    }, v) : v
}
function IE() {
    let e = HE()
      , t = RE(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? g.createElement("pre", {
        style: o
    }, n) : null, null)
}
const FE = g.createElement(IE, null);
class $E extends g.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(Mo.Provider, {
            value: this.props.routeContext
        }, g.createElement(r0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function zE(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = g.useContext(yd);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(Mo.Provider, {
        value: t
    }, r)
}
function BE(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let a = e
      , i = (o = n) == null ? void 0 : o.errors;
    if (i != null) {
        let d = a.findIndex(f => f.route.id && (i == null ? void 0 : i[f.route.id]) !== void 0);
        d >= 0 || Ce(!1),
        a = a.slice(0, Math.min(a.length, d + 1))
    }
    let l = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < a.length; d++) {
            let f = a[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: m, errors: p} = n
                  , b = f.route.loader && m[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || b) {
                    l = !0,
                    u >= 0 ? a = a.slice(0, u + 1) : a = [a[0]];
                    break
                }
            }
        }
    return a.reduceRight( (d, f, m) => {
        let p, b = !1, v = null, w = null;
        n && (p = i && f.route.id ? i[f.route.id] : void 0,
        v = f.route.errorElement || FE,
        l && (u < 0 && m === 0 ? (b = !0,
        w = null) : u === m && (b = !0,
        w = f.route.hydrateFallbackElement || null)));
        let y = t.concat(a.slice(0, m + 1))
          , h = () => {
            let x;
            return p ? x = v : b ? x = w : f.route.Component ? x = g.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = d,
            g.createElement(zE, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: y,
                    isDataRoute: n != null
                },
                children: x
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? g.createElement($E, {
            location: n.location,
            revalidation: n.revalidation,
            component: v,
            error: p,
            children: h(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : h()
    }
    , null)
}
var s0 = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(s0 || {})
  , pi = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(pi || {});
function WE(e) {
    let t = g.useContext(yd);
    return t || Ce(!1),
    t
}
function UE(e) {
    let t = g.useContext(ME);
    return t || Ce(!1),
    t
}
function VE(e) {
    let t = g.useContext(Mo);
    return t || Ce(!1),
    t
}
function a0(e) {
    let t = VE()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ce(!1),
    n.route.id
}
function HE() {
    var e;
    let t = g.useContext(r0)
      , n = UE(pi.UseRouteError)
      , r = a0(pi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function QE() {
    let {router: e} = WE(s0.UseNavigateStable)
      , t = a0(pi.UseNavigateStable)
      , n = g.useRef(!1);
    return o0( () => {
        n.current = !0
    }
    ),
    g.useCallback(function(o, s) {
        s === void 0 && (s = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Rs({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function YE(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function Da(e) {
    Ce(!1)
}
function qE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=_n.Pop, navigator: s, static: a=!1, future: i} = e;
    qi() && Ce(!1);
    let l = t.replace(/^\/*/, "/")
      , u = g.useMemo( () => ({
        basename: l,
        navigator: s,
        static: a,
        future: Rs({
            v7_relativeSplatPath: !1
        }, i)
    }), [l, i, s, a]);
    typeof r == "string" && (r = Oo(r));
    let {pathname: d="/", search: f="", hash: m="", state: p=null, key: b="default"} = r
      , v = g.useMemo( () => {
        let w = t0(d, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: m,
                state: p,
                key: b
            },
            navigationType: o
        }
    }
    , [l, d, f, m, p, b, o]);
    return v == null ? null : g.createElement(Qi.Provider, {
        value: u
    }, g.createElement(Yi.Provider, {
        children: n,
        value: v
    }))
}
function GE(e) {
    let {children: t, location: n} = e;
    return DE(nc(t), n)
}
new Promise( () => {}
);
function nc(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return g.Children.forEach(e, (r, o) => {
        if (!g.isValidElement(r))
            return;
        let s = [...t, o];
        if (r.type === g.Fragment) {
            n.push.apply(n, nc(r.props.children, s));
            return
        }
        r.type !== Da && Ce(!1),
        !r.props.index || !r.props.children || Ce(!1);
        let a = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (a.children = nc(r.props.children, s)),
        n.push(a)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const KE = "6";
try {
    window.__reactRouterVersion = KE
} catch {}
const XE = "startTransition"
  , jp = uc[XE];
function JE(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , s = g.useRef();
    s.current == null && (s.current = sE({
        window: o,
        v5Compat: !0
    }));
    let a = s.current
      , [i,l] = g.useState({
        action: a.action,
        location: a.location
    })
      , {v7_startTransition: u} = r || {}
      , d = g.useCallback(f => {
        u && jp ? jp( () => l(f)) : l(f)
    }
    , [l, u]);
    return g.useLayoutEffect( () => a.listen(d), [a, d]),
    g.useEffect( () => YE(r), [r]),
    g.createElement(qE, {
        basename: t,
        children: n,
        location: i.location,
        navigationType: i.action,
        navigator: a,
        future: r
    })
}
var Tp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Tp || (Tp = {}));
var Rp;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Rp || (Rp = {}));
function ft(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}
function qn(e, t) {
    return e instanceof Date ? new e.constructor(t) : new Date(t)
}
function Op(e, t) {
    const n = ft(e);
    return isNaN(t) ? qn(e, NaN) : (t && n.setDate(n.getDate() + t),
    n)
}
const i0 = 6048e5
  , ZE = 864e5;
let ek = {};
function Ki() {
    return ek
}
function Os(e, t) {
    var i, l, u, d;
    const n = Ki()
      , r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0
      , o = ft(e)
      , s = o.getDay()
      , a = (s < r ? 7 : 0) + s - r;
    return o.setDate(o.getDate() - a),
    o.setHours(0, 0, 0, 0),
    o
}
function hi(e) {
    return Os(e, {
        weekStartsOn: 1
    })
}
function l0(e) {
    const t = ft(e)
      , n = t.getFullYear()
      , r = qn(e, 0);
    r.setFullYear(n + 1, 0, 4),
    r.setHours(0, 0, 0, 0);
    const o = hi(r)
      , s = qn(e, 0);
    s.setFullYear(n, 0, 4),
    s.setHours(0, 0, 0, 0);
    const a = hi(s);
    return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= a.getTime() ? n : n - 1
}
function Mp(e) {
    const t = ft(e);
    return t.setHours(0, 0, 0, 0),
    t
}
function Ap(e) {
    const t = ft(e)
      , n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    +e - +n
}
function tk(e, t) {
    const n = Mp(e)
      , r = Mp(t)
      , o = +n - Ap(n)
      , s = +r - Ap(r);
    return Math.round((o - s) / ZE)
}
function nk(e) {
    const t = l0(e)
      , n = qn(e, 0);
    return n.setFullYear(t, 0, 4),
    n.setHours(0, 0, 0, 0),
    hi(n)
}
function rk(e) {
    return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]"
}
function ok(e) {
    if (!rk(e) && typeof e != "number")
        return !1;
    const t = ft(e);
    return !isNaN(Number(t))
}
function sk(e) {
    const t = ft(e)
      , n = qn(e, 0);
    return n.setFullYear(t.getFullYear(), 0, 1),
    n.setHours(0, 0, 0, 0),
    n
}
const ak = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , ik = (e, t, n) => {
    let r;
    const o = ak[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
}
;
function oo(e) {
    return (t={}) => {
        const n = t.width ? String(t.width) : e.defaultWidth;
        return e.formats[n] || e.formats[e.defaultWidth]
    }
}
const lk = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , uk = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , ck = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , dk = {
    date: oo({
        formats: lk,
        defaultWidth: "full"
    }),
    time: oo({
        formats: uk,
        defaultWidth: "full"
    }),
    dateTime: oo({
        formats: ck,
        defaultWidth: "full"
    })
}
  , fk = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , pk = (e, t, n, r) => fk[e];
function zt(e) {
    return (t, n) => {
        const r = n != null && n.context ? String(n.context) : "standalone";
        let o;
        if (r === "formatting" && e.formattingValues) {
            const a = e.defaultFormattingWidth || e.defaultWidth
              , i = n != null && n.width ? String(n.width) : a;
            o = e.formattingValues[i] || e.formattingValues[a]
        } else {
            const a = e.defaultWidth
              , i = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[i] || e.values[a]
        }
        const s = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[s]
    }
}
const hk = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , mk = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , gk = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , vk = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , yk = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , xk = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , wk = (e, t) => {
    const n = Number(e)
      , r = n % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , bk = {
    ordinalNumber: wk,
    era: zt({
        values: hk,
        defaultWidth: "wide"
    }),
    quarter: zt({
        values: mk,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: zt({
        values: gk,
        defaultWidth: "wide"
    }),
    day: zt({
        values: vk,
        defaultWidth: "wide"
    }),
    dayPeriod: zt({
        values: yk,
        defaultWidth: "wide",
        formattingValues: xk,
        defaultFormattingWidth: "wide"
    })
};
function Bt(e) {
    return (t, n={}) => {
        const r = n.width
          , o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth]
          , s = t.match(o);
        if (!s)
            return null;
        const a = s[0]
          , i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth]
          , l = Array.isArray(i) ? Ck(i, f => f.test(a)) : Sk(i, f => f.test(a));
        let u;
        u = e.valueCallback ? e.valueCallback(l) : l,
        u = n.valueCallback ? n.valueCallback(u) : u;
        const d = t.slice(a.length);
        return {
            value: u,
            rest: d
        }
    }
}
function Sk(e, t) {
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
            return n
}
function Ck(e, t) {
    for (let n = 0; n < e.length; n++)
        if (t(e[n]))
            return n
}
function u0(e) {
    return (t, n={}) => {
        const r = t.match(e.matchPattern);
        if (!r)
            return null;
        const o = r[0]
          , s = t.match(e.parsePattern);
        if (!s)
            return null;
        let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
        a = n.valueCallback ? n.valueCallback(a) : a;
        const i = t.slice(o.length);
        return {
            value: a,
            rest: i
        }
    }
}
const Ek = /^(\d+)(th|st|nd|rd)?/i
  , kk = /\d+/i
  , Nk = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , Pk = {
    any: [/^b/i, /^(a|c)/i]
}
  , jk = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , Tk = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , Rk = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , Ok = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , Mk = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , Ak = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , _k = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , Dk = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , Lk = {
    ordinalNumber: u0({
        matchPattern: Ek,
        parsePattern: kk,
        valueCallback: e => parseInt(e, 10)
    }),
    era: Bt({
        matchPatterns: Nk,
        defaultMatchWidth: "wide",
        parsePatterns: Pk,
        defaultParseWidth: "any"
    }),
    quarter: Bt({
        matchPatterns: jk,
        defaultMatchWidth: "wide",
        parsePatterns: Tk,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: Bt({
        matchPatterns: Rk,
        defaultMatchWidth: "wide",
        parsePatterns: Ok,
        defaultParseWidth: "any"
    }),
    day: Bt({
        matchPatterns: Mk,
        defaultMatchWidth: "wide",
        parsePatterns: Ak,
        defaultParseWidth: "any"
    }),
    dayPeriod: Bt({
        matchPatterns: _k,
        defaultMatchWidth: "any",
        parsePatterns: Dk,
        defaultParseWidth: "any"
    })
}
  , Ik = {
    code: "en-US",
    formatDistance: ik,
    formatLong: dk,
    formatRelative: pk,
    localize: bk,
    match: Lk,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function Fk(e) {
    const t = ft(e);
    return tk(t, sk(t)) + 1
}
function $k(e) {
    const t = ft(e)
      , n = +hi(t) - +nk(t);
    return Math.round(n / i0) + 1
}
function c0(e, t) {
    var d, f, m, p;
    const n = ft(e)
      , r = n.getFullYear()
      , o = Ki()
      , s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (m = o.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1
      , a = qn(e, 0);
    a.setFullYear(r + 1, 0, s),
    a.setHours(0, 0, 0, 0);
    const i = Os(a, t)
      , l = qn(e, 0);
    l.setFullYear(r, 0, s),
    l.setHours(0, 0, 0, 0);
    const u = Os(l, t);
    return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1
}
function zk(e, t) {
    var i, l, u, d;
    const n = Ki()
      , r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1
      , o = c0(e, t)
      , s = qn(e, 0);
    return s.setFullYear(o, 0, r),
    s.setHours(0, 0, 0, 0),
    Os(s, t)
}
function Bk(e, t) {
    const n = ft(e)
      , r = +Os(n, t) - +zk(n, t);
    return Math.round(r / i0) + 1
}
function te(e, t) {
    const n = e < 0 ? "-" : ""
      , r = Math.abs(e).toString().padStart(t, "0");
    return n + r
}
const wn = {
    y(e, t) {
        const n = e.getFullYear()
          , r = n > 0 ? n : 1 - n;
        return te(t === "yy" ? r % 100 : r, t.length)
    },
    M(e, t) {
        const n = e.getMonth();
        return t === "M" ? String(n + 1) : te(n + 1, 2)
    },
    d(e, t) {
        return te(e.getDate(), t.length)
    },
    a(e, t) {
        const n = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h(e, t) {
        return te(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
        return te(e.getHours(), t.length)
    },
    m(e, t) {
        return te(e.getMinutes(), t.length)
    },
    s(e, t) {
        return te(e.getSeconds(), t.length)
    },
    S(e, t) {
        const n = t.length
          , r = e.getMilliseconds()
          , o = Math.trunc(r * Math.pow(10, n - 3));
        return te(o, t.length)
    }
}
  , _r = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , _p = {
    G: function(e, t, n) {
        const r = e.getFullYear() > 0 ? 1 : 0;
        switch (t) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(r, {
                width: "wide"
            })
        }
    },
    y: function(e, t, n) {
        if (t === "yo") {
            const r = e.getFullYear()
              , o = r > 0 ? r : 1 - r;
            return n.ordinalNumber(o, {
                unit: "year"
            })
        }
        return wn.y(e, t)
    },
    Y: function(e, t, n, r) {
        const o = c0(e, r)
          , s = o > 0 ? o : 1 - o;
        if (t === "YY") {
            const a = s % 100;
            return te(a, 2)
        }
        return t === "Yo" ? n.ordinalNumber(s, {
            unit: "year"
        }) : te(s, t.length)
    },
    R: function(e, t) {
        const n = l0(e);
        return te(n, t.length)
    },
    u: function(e, t) {
        const n = e.getFullYear();
        return te(n, t.length)
    },
    Q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "Q":
            return String(r);
        case "QQ":
            return te(r, 2);
        case "Qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, t, n) {
        const r = Math.ceil((e.getMonth() + 1) / 3);
        switch (t) {
        case "q":
            return String(r);
        case "qq":
            return te(r, 2);
        case "qo":
            return n.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "M":
        case "MM":
            return wn.M(e, t);
        case "Mo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, t, n) {
        const r = e.getMonth();
        switch (t) {
        case "L":
            return String(r + 1);
        case "LL":
            return te(r + 1, 2);
        case "Lo":
            return n.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, t, n, r) {
        const o = Bk(e, r);
        return t === "wo" ? n.ordinalNumber(o, {
            unit: "week"
        }) : te(o, t.length)
    },
    I: function(e, t, n) {
        const r = $k(e);
        return t === "Io" ? n.ordinalNumber(r, {
            unit: "week"
        }) : te(r, t.length)
    },
    d: function(e, t, n) {
        return t === "do" ? n.ordinalNumber(e.getDate(), {
            unit: "date"
        }) : wn.d(e, t)
    },
    D: function(e, t, n) {
        const r = Fk(e);
        return t === "Do" ? n.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : te(r, t.length)
    },
    E: function(e, t, n) {
        const r = e.getDay();
        switch (t) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, t, n, r) {
        const o = e.getDay()
          , s = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "e":
            return String(s);
        case "ee":
            return te(s, 2);
        case "eo":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "eee":
            return n.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, t, n, r) {
        const o = e.getDay()
          , s = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (t) {
        case "c":
            return String(s);
        case "cc":
            return te(s, t.length);
        case "co":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "ccc":
            return n.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, t, n) {
        const r = e.getDay()
          , o = r === 0 ? 7 : r;
        switch (t) {
        case "i":
            return String(o);
        case "ii":
            return te(o, t.length);
        case "io":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return n.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, t, n) {
        const o = e.getHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
        case "a":
        case "aa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r === 12 ? o = _r.noon : r === 0 ? o = _r.midnight : o = r / 12 >= 1 ? "pm" : "am",
        t) {
        case "b":
        case "bb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, t, n) {
        const r = e.getHours();
        let o;
        switch (r >= 17 ? o = _r.evening : r >= 12 ? o = _r.afternoon : r >= 4 ? o = _r.morning : o = _r.night,
        t) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, t, n) {
        if (t === "ho") {
            let r = e.getHours() % 12;
            return r === 0 && (r = 12),
            n.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return wn.h(e, t)
    },
    H: function(e, t, n) {
        return t === "Ho" ? n.ordinalNumber(e.getHours(), {
            unit: "hour"
        }) : wn.H(e, t)
    },
    K: function(e, t, n) {
        const r = e.getHours() % 12;
        return t === "Ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : te(r, t.length)
    },
    k: function(e, t, n) {
        let r = e.getHours();
        return r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, {
            unit: "hour"
        }) : te(r, t.length)
    },
    m: function(e, t, n) {
        return t === "mo" ? n.ordinalNumber(e.getMinutes(), {
            unit: "minute"
        }) : wn.m(e, t)
    },
    s: function(e, t, n) {
        return t === "so" ? n.ordinalNumber(e.getSeconds(), {
            unit: "second"
        }) : wn.s(e, t)
    },
    S: function(e, t) {
        return wn.S(e, t)
    },
    X: function(e, t, n) {
        const r = e.getTimezoneOffset();
        if (r === 0)
            return "Z";
        switch (t) {
        case "X":
            return Lp(r);
        case "XXXX":
        case "XX":
            return or(r);
        case "XXXXX":
        case "XXX":
        default:
            return or(r, ":")
        }
    },
    x: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "x":
            return Lp(r);
        case "xxxx":
        case "xx":
            return or(r);
        case "xxxxx":
        case "xxx":
        default:
            return or(r, ":")
        }
    },
    O: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + Dp(r, ":");
        case "OOOO":
        default:
            return "GMT" + or(r, ":")
        }
    },
    z: function(e, t, n) {
        const r = e.getTimezoneOffset();
        switch (t) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + Dp(r, ":");
        case "zzzz":
        default:
            return "GMT" + or(r, ":")
        }
    },
    t: function(e, t, n) {
        const r = Math.trunc(e.getTime() / 1e3);
        return te(r, t.length)
    },
    T: function(e, t, n) {
        const r = e.getTime();
        return te(r, t.length)
    }
};
function Dp(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = Math.trunc(r / 60)
      , s = r % 60;
    return s === 0 ? n + String(o) : n + String(o) + t + te(s, 2)
}
function Lp(e, t) {
    return e % 60 === 0 ? (e > 0 ? "-" : "+") + te(Math.abs(e) / 60, 2) : or(e, t)
}
function or(e, t="") {
    const n = e > 0 ? "-" : "+"
      , r = Math.abs(e)
      , o = te(Math.trunc(r / 60), 2)
      , s = te(r % 60, 2);
    return n + o + t + s
}
const Ip = (e, t) => {
    switch (e) {
    case "P":
        return t.date({
            width: "short"
        });
    case "PP":
        return t.date({
            width: "medium"
        });
    case "PPP":
        return t.date({
            width: "long"
        });
    case "PPPP":
    default:
        return t.date({
            width: "full"
        })
    }
}
  , d0 = (e, t) => {
    switch (e) {
    case "p":
        return t.time({
            width: "short"
        });
    case "pp":
        return t.time({
            width: "medium"
        });
    case "ppp":
        return t.time({
            width: "long"
        });
    case "pppp":
    default:
        return t.time({
            width: "full"
        })
    }
}
  , Wk = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || []
      , r = n[1]
      , o = n[2];
    if (!o)
        return Ip(e, t);
    let s;
    switch (r) {
    case "P":
        s = t.dateTime({
            width: "short"
        });
        break;
    case "PP":
        s = t.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        s = t.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        s = t.dateTime({
            width: "full"
        });
        break
    }
    return s.replace("{{date}}", Ip(r, t)).replace("{{time}}", d0(o, t))
}
  , Uk = {
    p: d0,
    P: Wk
}
  , Vk = /^D+$/
  , Hk = /^Y+$/
  , Qk = ["D", "DD", "YY", "YYYY"];
function Yk(e) {
    return Vk.test(e)
}
function qk(e) {
    return Hk.test(e)
}
function Gk(e, t, n) {
    const r = Kk(e, t, n);
    if (console.warn(r),
    Qk.includes(e))
        throw new RangeError(r)
}
function Kk(e, t, n) {
    const r = e[0] === "Y" ? "years" : "days of the month";
    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
const Xk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , Jk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , Zk = /^'([^]*?)'?$/
  , eN = /''/g
  , tN = /[a-zA-Z]/;
function Fp(e, t, n) {
    var d, f, m, p, b, v, w, y;
    const r = Ki()
      , o = (n == null ? void 0 : n.locale) ?? r.locale ?? Ik
      , s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (m = r.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1
      , a = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((y = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : y.weekStartsOn) ?? 0
      , i = ft(e);
    if (!ok(i))
        throw new RangeError("Invalid time value");
    let l = t.match(Jk).map(h => {
        const x = h[0];
        if (x === "p" || x === "P") {
            const S = Uk[x];
            return S(h, o.formatLong)
        }
        return h
    }
    ).join("").match(Xk).map(h => {
        if (h === "''")
            return {
                isToken: !1,
                value: "'"
            };
        const x = h[0];
        if (x === "'")
            return {
                isToken: !1,
                value: nN(h)
            };
        if (_p[x])
            return {
                isToken: !0,
                value: h
            };
        if (x.match(tN))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + x + "`");
        return {
            isToken: !1,
            value: h
        }
    }
    );
    o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
    const u = {
        firstWeekContainsDate: s,
        weekStartsOn: a,
        locale: o
    };
    return l.map(h => {
        if (!h.isToken)
            return h.value;
        const x = h.value;
        (!(n != null && n.useAdditionalWeekYearTokens) && qk(x) || !(n != null && n.useAdditionalDayOfYearTokens) && Yk(x)) && Gk(x, t, String(e));
        const S = _p[x[0]];
        return S(i, x, o.localize, u)
    }
    ).join("")
}
function nN(e) {
    const t = e.match(Zk);
    return t ? t[1].replace(eN, "'") : e
}
const rN = {
    lessThanXSeconds: {
        one: "menos de um segundo",
        other: "menos de {{count}} segundos"
    },
    xSeconds: {
        one: "1 segundo",
        other: "{{count}} segundos"
    },
    halfAMinute: "meio minuto",
    lessThanXMinutes: {
        one: "menos de um minuto",
        other: "menos de {{count}} minutos"
    },
    xMinutes: {
        one: "1 minuto",
        other: "{{count}} minutos"
    },
    aboutXHours: {
        one: "cerca de 1 hora",
        other: "cerca de {{count}} horas"
    },
    xHours: {
        one: "1 hora",
        other: "{{count}} horas"
    },
    xDays: {
        one: "1 dia",
        other: "{{count}} dias"
    },
    aboutXWeeks: {
        one: "cerca de 1 semana",
        other: "cerca de {{count}} semanas"
    },
    xWeeks: {
        one: "1 semana",
        other: "{{count}} semanas"
    },
    aboutXMonths: {
        one: "cerca de 1 mês",
        other: "cerca de {{count}} meses"
    },
    xMonths: {
        one: "1 mês",
        other: "{{count}} meses"
    },
    aboutXYears: {
        one: "cerca de 1 ano",
        other: "cerca de {{count}} anos"
    },
    xYears: {
        one: "1 ano",
        other: "{{count}} anos"
    },
    overXYears: {
        one: "mais de 1 ano",
        other: "mais de {{count}} anos"
    },
    almostXYears: {
        one: "quase 1 ano",
        other: "quase {{count}} anos"
    }
}
  , oN = (e, t, n) => {
    let r;
    const o = rN[e];
    return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", String(t)),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "em " + r : "há " + r : r
}
  , sN = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d MMM y",
    short: "dd/MM/yyyy"
}
  , aN = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
}
  , iN = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , lN = {
    date: oo({
        formats: sN,
        defaultWidth: "full"
    }),
    time: oo({
        formats: aN,
        defaultWidth: "full"
    }),
    dateTime: oo({
        formats: iN,
        defaultWidth: "full"
    })
}
  , uN = {
    lastWeek: e => {
        const t = e.getDay();
        return "'" + (t === 0 || t === 6 ? "último" : "última") + "' eeee 'às' p"
    }
    ,
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: "P"
}
  , cN = (e, t, n, r) => {
    const o = uN[e];
    return typeof o == "function" ? o(t) : o
}
  , dN = {
    narrow: ["AC", "DC"],
    abbreviated: ["AC", "DC"],
    wide: ["antes de cristo", "depois de cristo"]
}
  , fN = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}
  , pN = {
    narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
    abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    wide: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
}
  , hN = {
    narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
    short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    abbreviated: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
    wide: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
}
  , mN = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "manhã",
        afternoon: "tarde",
        evening: "tarde",
        night: "noite"
    }
}
  , gN = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mn",
        noon: "md",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "meia-noite",
        noon: "meio-dia",
        morning: "da manhã",
        afternoon: "da tarde",
        evening: "da tarde",
        night: "da noite"
    }
}
  , vN = (e, t) => {
    const n = Number(e);
    return (t == null ? void 0 : t.unit) === "week" ? n + "ª" : n + "º"
}
  , yN = {
    ordinalNumber: vN,
    era: zt({
        values: dN,
        defaultWidth: "wide"
    }),
    quarter: zt({
        values: fN,
        defaultWidth: "wide",
        argumentCallback: e => e - 1
    }),
    month: zt({
        values: pN,
        defaultWidth: "wide"
    }),
    day: zt({
        values: hN,
        defaultWidth: "wide"
    }),
    dayPeriod: zt({
        values: mN,
        defaultWidth: "wide",
        formattingValues: gN,
        defaultFormattingWidth: "wide"
    })
}
  , xN = /^(\d+)[ºªo]?/i
  , wN = /\d+/i
  , bN = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
    wide: /^(antes de cristo|depois de cristo)/i
}
  , SN = {
    any: [/^ac/i, /^dc/i],
    wide: [/^antes de cristo/i, /^depois de cristo/i]
}
  , CN = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º)? trimestre/i
}
  , EN = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , kN = {
    narrow: /^[jfmajsond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}
  , NN = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
}
  , PN = {
    narrow: /^(dom|[23456]ª?|s[aá]b)/i,
    short: /^(dom|[23456]ª?|s[aá]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
    wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
}
  , jN = {
    short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
}
  , TN = {
    narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
    any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
}
  , RN = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mn|^meia[-\s]noite/i,
        noon: /^md|^meio[-\s]dia/i,
        morning: /manhã/i,
        afternoon: /tarde/i,
        evening: /tarde/i,
        night: /noite/i
    }
}
  , ON = {
    ordinalNumber: u0({
        matchPattern: xN,
        parsePattern: wN,
        valueCallback: e => parseInt(e, 10)
    }),
    era: Bt({
        matchPatterns: bN,
        defaultMatchWidth: "wide",
        parsePatterns: SN,
        defaultParseWidth: "any"
    }),
    quarter: Bt({
        matchPatterns: CN,
        defaultMatchWidth: "wide",
        parsePatterns: EN,
        defaultParseWidth: "any",
        valueCallback: e => e + 1
    }),
    month: Bt({
        matchPatterns: kN,
        defaultMatchWidth: "wide",
        parsePatterns: NN,
        defaultParseWidth: "any"
    }),
    day: Bt({
        matchPatterns: PN,
        defaultMatchWidth: "wide",
        parsePatterns: jN,
        defaultParseWidth: "any"
    }),
    dayPeriod: Bt({
        matchPatterns: TN,
        defaultMatchWidth: "any",
        parsePatterns: RN,
        defaultParseWidth: "any"
    })
}
  , $p = {
    code: "pt-BR",
    formatDistance: oN,
    formatLong: lN,
    formatRelative: cN,
    localize: yN,
    match: ON,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
}
  , MN = ({onCartClick: e}) => c.jsxs("div", {
    className: "absolute top-0 left-0 right-0 z-50 bg-transparent px-3 py-3 flex items-center justify-between",
    children: [c.jsx("button", {
        className: "h-10 w-10 flex items-center justify-center",
        children: c.jsx(Fi, {
            className: "h-6 w-6 text-foreground",
            strokeWidth: 2.5
        })
    }), c.jsxs("div", {
        className: "flex items-center gap-2",
        children: [c.jsx("button", {
            className: "h-10 w-10 flex items-center justify-center",
            children: c.jsx(Nb, {
                className: "h-5 w-5 text-foreground",
                strokeWidth: 2
            })
        }), c.jsx("button", {
            className: "h-10 w-10 flex items-center justify-center relative",
            onClick: e,
            children: c.jsx(jb, {
                className: "h-5 w-5 text-foreground",
                strokeWidth: 2
            })
        }), c.jsx("button", {
            className: "h-10 w-10 flex items-center justify-center",
            children: c.jsx(Sb, {
                className: "h-6 w-6 text-foreground",
                strokeWidth: 2.5
            })
        })]
    })]
})
  , AN = ({images: e}) => {
    const [t,n] = g.useState(0)
      , [r,o] = g.useState(0)
      , [s,a] = g.useState(0);
    g.useEffect( () => {
        const m = setInterval( () => {
            n(p => p === e.length - 1 ? 0 : p + 1)
        }
        , 3e3);
        return () => clearInterval(m)
    }
    , [e.length]);
    const i = () => {
        n(m => m === 0 ? e.length - 1 : m - 1)
    }
      , l = () => {
        n(m => m === e.length - 1 ? 0 : m + 1)
    }
      , u = m => {
        o(m.targetTouches[0].clientX)
    }
      , d = m => {
        a(m.targetTouches[0].clientX)
    }
      , f = () => {
        r - s > 50 && l(),
        r - s < -50 && i()
    }
    ;
    return c.jsxs("div", {
        className: "relative w-full aspect-square bg-white overflow-hidden",
        onTouchStart: u,
        onTouchMove: d,
        onTouchEnd: f,
        children: [c.jsx("div", {
            className: "flex transition-transform duration-500 ease-out h-full",
            style: {
                transform: `translateX(-${t * 100}%)`
            },
            children: e.map( (m, p) => c.jsx("div", {
                className: "w-full h-full flex-shrink-0 flex items-center justify-center bg-white",
                children: c.jsx("img", {
                    src: m,
                    alt: `Produto ${p + 1}`,
                    className: "w-full h-full object-contain",
                    style: {
                        imageRendering: "crisp-edges"
                    },
                    loading: p === 0 ? "eager" : "lazy",
                    decoding: "async",
                    fetchPriority: p === 0 ? "high" : "auto"
                })
            }, p))
        }), c.jsx("div", {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5",
            children: e.map( (m, p) => c.jsx("button", {
                onClick: () => n(p),
                className: `h-1.5 rounded-full transition-all duration-300 ${p === t ? "w-5 bg-orange-500" : "w-1.5 bg-gray-300"}`
            }, p))
        }), c.jsxs("div", {
            className: "absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full",
            children: [t + 1, "/", e.length]
        })]
    })
}
  , _N = ({currentPrice: e, originalPrice: t, discount: n, countdown: r, colorVariants: o, selectedColor: s=0, onColorSelect: a}) => c.jsx("div", {
    className: "bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 text-white p-4",
    children: c.jsxs("div", {
        className: "flex items-start justify-between",
        children: [c.jsxs("div", {
            className: "flex-1",
            children: [c.jsxs("div", {
                className: "flex items-baseline gap-1 mb-1",
                children: [c.jsx("span", {
                    className: "text-sm font-medium",
                    children: "R$"
                }), c.jsx("span", {
                    className: "text-4xl font-bold tracking-tight",
                    children: e.replace("R$ ", "")
                })]
            }), c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [c.jsx("span", {
                    className: "text-white/80 line-through text-sm",
                    children: t
                }), c.jsxs("span", {
                    className: "bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded",
                    children: ["Economize ", n]
                })]
            })]
        }), r && c.jsxs("div", {
            className: "flex flex-col items-center",
            children: [c.jsxs("div", {
                className: "flex items-center gap-1 text-[10px] font-medium mb-1 text-white/90",
                children: [c.jsx(Ob, {
                    className: "h-3 w-3 fill-yellow-300 text-yellow-300"
                }), c.jsx("span", {
                    children: "OFERTA RELÂMPAGO"
                })]
            }), c.jsxs("div", {
                className: "bg-white text-orange-500 px-3 py-1.5 rounded-lg text-center",
                children: [c.jsx("div", {
                    className: "text-[9px] font-medium text-gray-500 uppercase tracking-wide",
                    children: "OFERTA ENCERRADA"
                }), c.jsx("div", {
                    className: "text-xl font-bold tabular-nums tracking-tight",
                    children: r
                })]
            })]
        })]
    })
})
  , DN = ({title: e, rating: t, reviewCount: n, salesCount: r, badge: o, deliveryInfo: s, shippingNote: a}) => c.jsxs("div", {
    className: "p-4 space-y-3 bg-background",
    children: [o && c.jsx("span", {
        className: "inline-flex items-center bg-rose-500 text-white text-xs font-semibold px-2 py-1 rounded",
        children: o
    }), c.jsx("h1", {
        className: "text-base font-medium leading-snug text-foreground",
        children: e
    }), c.jsxs("div", {
        className: "flex items-center gap-2 text-sm",
        children: [c.jsxs("div", {
            className: "flex items-center gap-1",
            children: [c.jsx(Aa, {
                className: "h-4 w-4 fill-amber-400 text-amber-400"
            }), c.jsx("span", {
                className: "font-semibold text-foreground",
                children: t
            })]
        }), c.jsxs("span", {
            className: "text-muted-foreground",
            children: ["(", n, ")"]
        }), c.jsx("span", {
            className: "text-muted-foreground",
            children: "•"
        }), c.jsxs("span", {
            className: "text-muted-foreground",
            children: [r.toLocaleString(), " vendidos"]
        })]
    }), s && c.jsxs("div", {
        className: "flex items-center justify-between bg-secondary/50 p-3 rounded-lg",
        children: [c.jsxs("div", {
            className: "flex items-center gap-3",
            children: [c.jsx(rv, {
                className: "h-5 w-5 text-muted-foreground"
            }), c.jsxs("div", {
                className: "text-sm",
                children: [c.jsx("span", {
                    className: "text-foreground",
                    children: s
                }), a && c.jsxs("div", {
                    className: "text-muted-foreground",
                    children: ["Taxa de envio: ", c.jsx("span", {
                        className: "text-green-600 font-medium",
                        children: "Grátis"
                    })]
                })]
            })]
        }), c.jsx(Ii, {
            className: "h-5 w-5 text-muted-foreground"
        })]
    })]
})
  , LN = ({services: e, title: t}) => c.jsxs("div", {
    className: "border-t border-border bg-background",
    children: [c.jsxs("div", {
        className: "px-4 py-3 flex items-center justify-between",
        children: [c.jsxs("div", {
            className: "flex items-center gap-2",
            children: [c.jsx(yb, {
                className: "h-5 w-5 text-rose-500"
            }), c.jsx("span", {
                className: "font-medium text-rose-500 text-sm",
                children: t || "Serviços do TikTok Shop"
            })]
        }), c.jsx(Ii, {
            className: "h-5 w-5 text-muted-foreground"
        })]
    }), c.jsx("div", {
        className: "px-4 pb-4",
        children: c.jsx("div", {
            className: "flex flex-wrap gap-x-4 gap-y-2",
            children: e.map( (n, r) => c.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [c.jsx(Li, {
                    className: "h-3.5 w-3.5 text-green-500"
                }), c.jsx("span", {
                    className: "text-xs text-muted-foreground",
                    children: n.text
                })]
            }, r))
        })
    })]
});
var f0 = {
    exports: {}
}
  , p0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo = g;
function IN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var FN = typeof Object.is == "function" ? Object.is : IN
  , $N = Eo.useState
  , zN = Eo.useEffect
  , BN = Eo.useLayoutEffect
  , WN = Eo.useDebugValue;
function UN(e, t) {
    var n = t()
      , r = $N({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return BN(function() {
        o.value = n,
        o.getSnapshot = t,
        Bl(o) && s({
            inst: o
        })
    }, [e, n, t]),
    zN(function() {
        return Bl(o) && s({
            inst: o
        }),
        e(function() {
            Bl(o) && s({
                inst: o
            })
        })
    }, [e]),
    WN(n),
    n
}
function Bl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !FN(e, n)
    } catch {
        return !0
    }
}
function VN(e, t) {
    return t()
}
var HN = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? VN : UN;
p0.useSyncExternalStore = Eo.useSyncExternalStore !== void 0 ? Eo.useSyncExternalStore : HN;
f0.exports = p0;
var QN = f0.exports;
function YN() {
    return QN.useSyncExternalStore(qN, () => !0, () => !1)
}
function qN() {
    return () => {}
}
var xd = "Avatar"
  , [GN,OT] = Jn(xd)
  , [KN,h0] = GN(xd)
  , m0 = g.forwardRef( (e, t) => {
    const {__scopeAvatar: n, ...r} = e
      , [o,s] = g.useState("idle");
    return c.jsx(KN, {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: c.jsx(ee.span, {
            ...r,
            ref: t
        })
    })
}
);
m0.displayName = xd;
var g0 = "AvatarImage"
  , v0 = g.forwardRef( (e, t) => {
    const {__scopeAvatar: n, src: r, onLoadingStatusChange: o= () => {}
    , ...s} = e
      , a = h0(g0, n)
      , i = XN(r, s)
      , l = Tt(u => {
        o(u),
        a.onImageLoadingStatusChange(u)
    }
    );
    return tt( () => {
        i !== "idle" && l(i)
    }
    , [i, l]),
    i === "loaded" ? c.jsx(ee.img, {
        ...s,
        ref: t,
        src: r
    }) : null
}
);
v0.displayName = g0;
var y0 = "AvatarFallback"
  , x0 = g.forwardRef( (e, t) => {
    const {__scopeAvatar: n, delayMs: r, ...o} = e
      , s = h0(y0, n)
      , [a,i] = g.useState(r === void 0);
    return g.useEffect( () => {
        if (r !== void 0) {
            const l = window.setTimeout( () => i(!0), r);
            return () => window.clearTimeout(l)
        }
    }
    , [r]),
    a && s.imageLoadingStatus !== "loaded" ? c.jsx(ee.span, {
        ...o,
        ref: t
    }) : null
}
);
x0.displayName = y0;
function zp(e, t) {
    return e ? t ? (e.src !== t && (e.src = t),
    e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle"
}
function XN(e, {referrerPolicy: t, crossOrigin: n}) {
    const r = YN()
      , o = g.useRef(null)
      , s = r ? (o.current || (o.current = new window.Image),
    o.current) : null
      , [a,i] = g.useState( () => zp(s, e));
    return tt( () => {
        i(zp(s, e))
    }
    , [s, e]),
    tt( () => {
        const l = f => () => {
            i(f)
        }
        ;
        if (!s)
            return;
        const u = l("loaded")
          , d = l("error");
        return s.addEventListener("load", u),
        s.addEventListener("error", d),
        t && (s.referrerPolicy = t),
        typeof n == "string" && (s.crossOrigin = n),
        () => {
            s.removeEventListener("load", u),
            s.removeEventListener("error", d)
        }
    }
    , [s, n, t]),
    a
}
var w0 = m0
  , b0 = v0
  , S0 = x0;
const C0 = g.forwardRef( ({className: e, ...t}, n) => c.jsx(w0, {
    ref: n,
    className: oe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
}));
C0.displayName = w0.displayName;
const E0 = g.forwardRef( ({className: e, ...t}, n) => c.jsx(b0, {
    ref: n,
    className: oe("aspect-square h-full w-full", e),
    ...t
}));
E0.displayName = b0.displayName;
const k0 = g.forwardRef( ({className: e, ...t}, n) => c.jsx(S0, {
    ref: n,
    className: oe("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
}));
k0.displayName = S0.displayName;
const JN = ({rating: e, totalReviews: t, breakdown: n, reviews: r}) => c.jsxs("div", {
    className: "bg-background border-t border-border",
    children: [c.jsxs("div", {
        className: "px-4 py-3 flex items-center justify-between",
        children: [c.jsxs("h2", {
            className: "font-medium text-sm",
            children: ["Avaliações (", t.toLocaleString(), ")"]
        }), c.jsxs("div", {
            className: "flex items-center gap-1 text-muted-foreground",
            children: [c.jsx("span", {
                className: "text-xs",
                children: "Ver todas"
            }), c.jsx(Ii, {
                className: "h-4 w-4"
            })]
        })]
    }), c.jsxs("div", {
        className: "px-4 pb-4",
        children: [c.jsxs("div", {
            className: "flex gap-4 mb-4",
            children: [c.jsxs("div", {
                className: "text-center",
                children: [c.jsx("div", {
                    className: "text-3xl font-bold text-foreground",
                    children: e
                }), c.jsx("div", {
                    className: "flex gap-0.5 my-1 justify-center",
                    children: [...Array(5)].map( (o, s) => c.jsx(Aa, {
                        className: `h-3 w-3 ${s < Math.floor(e) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`
                    }, s))
                }), c.jsxs("div", {
                    className: "text-[10px] text-muted-foreground",
                    children: [t, " avaliações"]
                })]
            }), c.jsx("div", {
                className: "flex-1 space-y-1",
                children: n.map(o => c.jsxs("div", {
                    className: "flex items-center gap-1.5 text-xs",
                    children: [c.jsx("span", {
                        className: "w-2 text-muted-foreground",
                        children: o.stars
                    }), c.jsx(Aa, {
                        className: "h-2.5 w-2.5 fill-amber-400 text-amber-400"
                    }), c.jsx("div", {
                        className: "flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden",
                        children: c.jsx("div", {
                            className: "h-full bg-amber-400 rounded-full",
                            style: {
                                width: `${o.percentage}%`
                            }
                        })
                    }), c.jsx("span", {
                        className: "text-muted-foreground w-6 text-right text-[10px]",
                        children: o.count
                    })]
                }, o.stars))
            })]
        }), c.jsx("div", {
            className: "space-y-4",
            children: r.slice(0, 5).map( (o, s) => c.jsxs("div", {
                className: "border-t border-border pt-4",
                children: [c.jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [c.jsxs(C0, {
                        className: "h-8 w-8",
                        children: [c.jsx(E0, {
                            src: o.avatar,
                            loading: "lazy"
                        }), c.jsx(k0, {
                            className: "bg-rose-100 text-rose-600 text-xs",
                            children: o.author[0]
                        })]
                    }), c.jsxs("div", {
                        className: "flex flex-col",
                        children: [c.jsx("span", {
                            className: "font-medium text-sm text-foreground leading-tight",
                            children: o.author
                        }), c.jsx("span", {
                            className: "text-xs text-muted-foreground leading-tight",
                            children: o.date
                        })]
                    })]
                }), c.jsx("div", {
                    className: "flex gap-0.5 mb-2",
                    children: [...Array(5)].map( (a, i) => c.jsx(Aa, {
                        className: `h-3 w-3 ${i < o.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`
                    }, i))
                }), c.jsx("p", {
                    className: "text-sm leading-relaxed text-foreground mb-2",
                    children: o.text
                }), o.images && o.images.length > 0 && c.jsx("div", {
                    className: "flex gap-2 mb-2",
                    children: o.images.map( (a, i) => c.jsx("img", {
                        src: a,
                        alt: `Review ${i + 1}`,
                        className: "w-16 h-16 object-cover rounded-lg",
                        loading: "lazy",
                        decoding: "async"
                    }, i))
                }), o.helpful && c.jsxs("div", {
                    className: "flex items-center gap-1 text-[11px] text-muted-foreground",
                    children: [c.jsx(Rb, {
                        className: "h-3 w-3"
                    }), c.jsxs("span", {
                        children: ["Útil (", o.helpful, ")"]
                    })]
                })]
            }, s))
        })]
    })]
})
  , ZN = sd("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Dn = g.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, s) => {
    const a = r ? Ew : "button";
    return c.jsx(a, {
        className: oe(ZN({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...o
    })
}
);
Dn.displayName = "Button";
const eP = "/assets/jbl-logo-ChrE5blK.png"
  , tP = ({storeName: e, verified: t=!1, productCount: n, recommendation: r, trustScore: o}) => {
    const [s,a] = g.useState(!1);
    return c.jsxs("div", {
        className: "bg-background border-t border-border",
        children: [c.jsxs("div", {
            className: "px-4 py-3 flex items-center justify-between",
            children: [c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [c.jsx("img", {
                    src: eP,
                    alt: "Logo da loja",
                    className: "w-11 h-11 rounded-lg object-cover"
                }), c.jsxs("div", {
                    className: "flex-1",
                    children: [c.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [c.jsx("span", {
                            className: "font-semibold text-sm text-foreground",
                            children: e
                        }), t && c.jsx("span", {
                            className: "bg-teal-500 text-white text-[10px] px-1.5 py-0.5 rounded font-medium",
                            children: "Verified"
                        })]
                    }), c.jsxs("div", {
                        className: "flex items-center gap-1 text-xs text-muted-foreground mt-0.5",
                        children: [c.jsx("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-green-500"
                        }), c.jsxs("span", {
                            children: [n, " produtos"]
                        }), c.jsx("span", {
                            children: "•"
                        }), c.jsxs("span", {
                            children: [r, " recomenda"]
                        })]
                    })]
                })]
            }), c.jsx(Dn, {
                variant: "outline",
                size: "sm",
                className: `h-8 text-xs px-4 rounded-full font-medium transition-all ${s ? "bg-rose-500 text-white border-rose-500 hover:bg-rose-600" : "text-rose-500 border-rose-300 hover:bg-rose-50"}`,
                onClick: () => a(!s),
                children: s ? c.jsxs(c.Fragment, {
                    children: [c.jsx(Li, {
                        className: "w-3 h-3"
                    }), "Seguindo"]
                }) : "+ Seguir"
            })]
        }), c.jsxs("div", {
            className: "px-4 pb-3",
            children: [c.jsxs("div", {
                className: "flex items-center justify-between text-xs mb-1.5",
                children: [c.jsx("span", {
                    className: "text-muted-foreground",
                    children: "Confiança:"
                }), c.jsxs("span", {
                    className: "font-semibold text-rose-500",
                    children: [o, "%"]
                })]
            }), c.jsx("div", {
                className: "w-full h-1.5 bg-gray-200 rounded-full overflow-hidden",
                children: c.jsx("div", {
                    className: "h-full bg-gradient-to-r from-rose-400 to-rose-500 rounded-full transition-all duration-500",
                    style: {
                        width: `${o}%`
                    }
                })
            })]
        })]
    })
}
  , nP = ({title: e, description: t}) => {
    const [n,r] = g.useState(!1);
    return c.jsx("div", {
        className: "bg-gray-50 border-t-4 border-gray-100",
        children: c.jsxs("div", {
            className: "px-4 py-4",
            children: [e && c.jsx("h2", {
                className: "font-bold text-base mb-2 text-foreground",
                children: e
            }), c.jsx("p", {
                className: `text-sm leading-relaxed text-muted-foreground ${n ? "" : "line-clamp-3"}`,
                children: t
            }), c.jsx("button", {
                className: "flex items-center gap-0.5 text-rose-500 text-sm font-medium mt-3",
                onClick: () => r(!n),
                children: n ? c.jsxs(c.Fragment, {
                    children: ["Ver menos", c.jsx(xb, {
                        className: "h-4 w-4"
                    })]
                }) : c.jsxs(c.Fragment, {
                    children: ["Ver mais", c.jsx(Zg, {
                        className: "h-4 w-4"
                    })]
                })
            })]
        })
    })
}
  , rP = ({specs: e}) => c.jsx("div", {
    className: "bg-background border-t border-border",
    children: c.jsxs("div", {
        className: "px-4 py-4",
        children: [c.jsxs("div", {
            className: "flex items-center gap-2 mb-3",
            children: [c.jsx(kb, {
                className: "h-4 w-4 text-muted-foreground"
            }), c.jsx("h2", {
                className: "font-medium text-sm text-foreground",
                children: "Especificações Técnicas"
            })]
        }), c.jsx("div", {
            className: "space-y-0",
            children: e.map( (t, n) => c.jsxs("div", {
                className: "flex justify-between py-2.5 border-b border-border last:border-0",
                children: [c.jsx("span", {
                    className: "text-sm text-muted-foreground",
                    children: t.label
                }), c.jsx("span", {
                    className: "text-sm font-medium text-foreground text-right max-w-[55%]",
                    children: t.value
                })]
            }, n))
        })]
    })
})
  , Bp = ({title: e, features: t, variant: n="features"}) => c.jsx("div", {
    className: "bg-background border-t border-border",
    children: c.jsxs("div", {
        className: "px-4 py-4",
        children: [c.jsxs("div", {
            className: "flex items-center gap-2 mb-3",
            children: [n === "includes" && c.jsx(tv, {
                className: "h-4 w-4 text-rose-500"
            }), c.jsx("h2", {
                className: "font-medium text-sm text-foreground",
                children: e
            })]
        }), c.jsx("div", {
            className: n === "includes" ? "bg-rose-50 p-3 rounded-lg" : "",
            children: c.jsx("ul", {
                className: "space-y-2",
                children: t.map( (r, o) => c.jsxs("li", {
                    className: "flex items-start gap-2 text-sm",
                    children: [c.jsx(Li, {
                        className: "h-4 w-4 text-green-500 flex-shrink-0 mt-0.5"
                    }), c.jsx("span", {
                        className: "text-foreground",
                        children: r.text
                    })]
                }, o))
            })
        })]
    })
});
var Wl = "focusScope.autoFocusOnMount"
  , Ul = "focusScope.autoFocusOnUnmount"
  , Wp = {
    bubbles: !1,
    cancelable: !0
}
  , oP = "FocusScope"
  , N0 = g.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...a} = e
      , [i,l] = g.useState(null)
      , u = Tt(o)
      , d = Tt(s)
      , f = g.useRef(null)
      , m = Te(t, v => l(v))
      , p = g.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    g.useEffect( () => {
        if (r) {
            let v = function(x) {
                if (p.paused || !i)
                    return;
                const S = x.target;
                i.contains(S) ? f.current = S : Sn(f.current, {
                    select: !0
                })
            }
              , w = function(x) {
                if (p.paused || !i)
                    return;
                const S = x.relatedTarget;
                S !== null && (i.contains(S) || Sn(f.current, {
                    select: !0
                }))
            }
              , y = function(x) {
                if (document.activeElement === document.body)
                    for (const C of x)
                        C.removedNodes.length > 0 && Sn(i)
            };
            document.addEventListener("focusin", v),
            document.addEventListener("focusout", w);
            const h = new MutationObserver(y);
            return i && h.observe(i, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", v),
                document.removeEventListener("focusout", w),
                h.disconnect()
            }
        }
    }
    , [r, i, p.paused]),
    g.useEffect( () => {
        if (i) {
            Vp.add(p);
            const v = document.activeElement;
            if (!i.contains(v)) {
                const y = new CustomEvent(Wl,Wp);
                i.addEventListener(Wl, u),
                i.dispatchEvent(y),
                y.defaultPrevented || (sP(cP(P0(i)), {
                    select: !0
                }),
                document.activeElement === v && Sn(i))
            }
            return () => {
                i.removeEventListener(Wl, u),
                setTimeout( () => {
                    const y = new CustomEvent(Ul,Wp);
                    i.addEventListener(Ul, d),
                    i.dispatchEvent(y),
                    y.defaultPrevented || Sn(v ?? document.body, {
                        select: !0
                    }),
                    i.removeEventListener(Ul, d),
                    Vp.remove(p)
                }
                , 0)
            }
        }
    }
    , [i, u, d, p]);
    const b = g.useCallback(v => {
        if (!n && !r || p.paused)
            return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey
          , y = document.activeElement;
        if (w && y) {
            const h = v.currentTarget
              , [x,S] = aP(h);
            x && S ? !v.shiftKey && y === S ? (v.preventDefault(),
            n && Sn(x, {
                select: !0
            })) : v.shiftKey && y === x && (v.preventDefault(),
            n && Sn(S, {
                select: !0
            })) : y === h && v.preventDefault()
        }
    }
    , [n, r, p.paused]);
    return c.jsx(ee.div, {
        tabIndex: -1,
        ...a,
        ref: m,
        onKeyDown: b
    })
}
);
N0.displayName = oP;
function sP(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (Sn(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function aP(e) {
    const t = P0(e)
      , n = Up(t, e)
      , r = Up(t.reverse(), e);
    return [n, r]
}
function P0(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Up(e, t) {
    for (const n of e)
        if (!iP(n, {
            upTo: t
        }))
            return n
}
function iP(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function lP(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function Sn(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && lP(e) && t && e.select()
    }
}
var Vp = uP();
function uP() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Hp(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Hp(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Hp(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function cP(e) {
    return e.filter(t => t.tagName !== "A")
}
var Vl = 0;
function dP() {
    g.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Qp()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Qp()),
        Vl++,
        () => {
            Vl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            Vl--
        }
    }
    , [])
}
function Qp() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.outline = "none",
    e.style.opacity = "0",
    e.style.position = "fixed",
    e.style.pointerEvents = "none",
    e
}
var Wt = function() {
    return Wt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
        }
        return t
    }
    ,
    Wt.apply(this, arguments)
};
function j0(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function fP(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, s; r < o; r++)
            (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)),
            s[r] = t[r]);
    return e.concat(s || Array.prototype.slice.call(t))
}
var La = "right-scroll-bar-position"
  , Ia = "width-before-scroll-bar"
  , pP = "with-scroll-bars-hidden"
  , hP = "--removed-body-scroll-bar-size";
function Hl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function mP(e, t) {
    var n = g.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var gP = typeof window < "u" ? g.useLayoutEffect : g.useEffect
  , Yp = new WeakMap;
function vP(e, t) {
    var n = mP(null, function(r) {
        return e.forEach(function(o) {
            return Hl(o, r)
        })
    });
    return gP(function() {
        var r = Yp.get(n);
        if (r) {
            var o = new Set(r)
              , s = new Set(e)
              , a = n.current;
            o.forEach(function(i) {
                s.has(i) || Hl(i, null)
            }),
            s.forEach(function(i) {
                o.has(i) || Hl(i, a)
            })
        }
        Yp.set(n, e)
    }, [e]),
    n
}
function yP(e) {
    return e
}
function xP(e, t) {
    t === void 0 && (t = yP);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(s) {
            var a = t(s, r);
            return n.push(a),
            function() {
                n = n.filter(function(i) {
                    return i !== a
                })
            }
        },
        assignSyncMedium: function(s) {
            for (r = !0; n.length; ) {
                var a = n;
                n = [],
                a.forEach(s)
            }
            n = {
                push: function(i) {
                    return s(i)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(s) {
            r = !0;
            var a = [];
            if (n.length) {
                var i = n;
                n = [],
                i.forEach(s),
                a = n
            }
            var l = function() {
                var d = a;
                a = [],
                d.forEach(s)
            }
              , u = function() {
                return Promise.resolve().then(l)
            };
            u(),
            n = {
                push: function(d) {
                    a.push(d),
                    u()
                },
                filter: function(d) {
                    return a = a.filter(d),
                    n
                }
            }
        }
    };
    return o
}
function wP(e) {
    e === void 0 && (e = {});
    var t = xP(null);
    return t.options = Wt({
        async: !0,
        ssr: !1
    }, e),
    t
}
var T0 = function(e) {
    var t = e.sideCar
      , n = j0(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return g.createElement(r, Wt({}, n))
};
T0.isSideCarExport = !0;
function bP(e, t) {
    return e.useMedium(t),
    T0
}
var R0 = wP()
  , Ql = function() {}
  , Xi = g.forwardRef(function(e, t) {
    var n = g.useRef(null)
      , r = g.useState({
        onScrollCapture: Ql,
        onWheelCapture: Ql,
        onTouchMoveCapture: Ql
    })
      , o = r[0]
      , s = r[1]
      , a = e.forwardProps
      , i = e.children
      , l = e.className
      , u = e.removeScrollBar
      , d = e.enabled
      , f = e.shards
      , m = e.sideCar
      , p = e.noRelative
      , b = e.noIsolation
      , v = e.inert
      , w = e.allowPinchZoom
      , y = e.as
      , h = y === void 0 ? "div" : y
      , x = e.gapMode
      , S = j0(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , C = m
      , E = vP([n, t])
      , k = Wt(Wt({}, S), o);
    return g.createElement(g.Fragment, null, d && g.createElement(C, {
        sideCar: R0,
        removeScrollBar: u,
        shards: f,
        noRelative: p,
        noIsolation: b,
        inert: v,
        setCallbacks: s,
        allowPinchZoom: !!w,
        lockRef: n,
        gapMode: x
    }), a ? g.cloneElement(g.Children.only(i), Wt(Wt({}, k), {
        ref: E
    })) : g.createElement(h, Wt({}, k, {
        className: l,
        ref: E
    }), i))
});
Xi.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Xi.classNames = {
    fullWidth: Ia,
    zeroRight: La
};
var SP = function() {
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function CP() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = SP();
    return t && e.setAttribute("nonce", t),
    e
}
function EP(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function kP(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var NP = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = CP()) && (EP(t, n),
            kP(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , PP = function() {
    var e = NP();
    return function(t, n) {
        g.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , O0 = function() {
    var e = PP()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , jP = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Yl = function(e) {
    return parseInt(e || "", 10) || 0
}
  , TP = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Yl(n), Yl(r), Yl(o)]
}
  , RP = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return jP;
    var t = TP(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , OP = O0()
  , so = "data-scroll-locked"
  , MP = function(e, t, n, r) {
    var o = e.left
      , s = e.top
      , a = e.right
      , i = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(pP, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(so, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(La, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ia, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ia, " .").concat(Ia, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(so, `] {
    `).concat(hP, ": ").concat(i, `px;
  }
`)
}
  , qp = function() {
    var e = parseInt(document.body.getAttribute(so) || "0", 10);
    return isFinite(e) ? e : 0
}
  , AP = function() {
    g.useEffect(function() {
        return document.body.setAttribute(so, (qp() + 1).toString()),
        function() {
            var e = qp() - 1;
            e <= 0 ? document.body.removeAttribute(so) : document.body.setAttribute(so, e.toString())
        }
    }, [])
}
  , _P = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    AP();
    var s = g.useMemo(function() {
        return RP(o)
    }, [o]);
    return g.createElement(OP, {
        styles: MP(s, !t, o, n ? "" : "!important")
    })
}
  , rc = !1;
if (typeof window < "u")
    try {
        var ma = Object.defineProperty({}, "passive", {
            get: function() {
                return rc = !0,
                !0
            }
        });
        window.addEventListener("test", ma, ma),
        window.removeEventListener("test", ma, ma)
    } catch {
        rc = !1
    }
var Dr = rc ? {
    passive: !1
} : !1
  , DP = function(e) {
    return e.tagName === "TEXTAREA"
}
  , M0 = function(e, t) {
    if (!(e instanceof Element))
        return !1;
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !DP(e) && n[t] === "visible")
}
  , LP = function(e) {
    return M0(e, "overflowY")
}
  , IP = function(e) {
    return M0(e, "overflowX")
}
  , Gp = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = A0(e, r);
        if (o) {
            var s = _0(e, r)
              , a = s[1]
              , i = s[2];
            if (a > i)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , FP = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , $P = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , A0 = function(e, t) {
    return e === "v" ? LP(t) : IP(t)
}
  , _0 = function(e, t) {
    return e === "v" ? FP(t) : $P(t)
}
  , zP = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , BP = function(e, t, n, r, o) {
    var s = zP(e, window.getComputedStyle(t).direction)
      , a = s * r
      , i = n.target
      , l = t.contains(i)
      , u = !1
      , d = a > 0
      , f = 0
      , m = 0;
    do {
        if (!i)
            break;
        var p = _0(e, i)
          , b = p[0]
          , v = p[1]
          , w = p[2]
          , y = v - w - s * b;
        (b || y) && A0(e, i) && (f += y,
        m += b);
        var h = i.parentNode;
        i = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h
    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(m) < 1 || !o)) && (u = !0),
    u
}
  , ga = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Kp = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Xp = function(e) {
    return e && "current"in e ? e.current : e
}
  , WP = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , UP = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , VP = 0
  , Lr = [];
function HP(e) {
    var t = g.useRef([])
      , n = g.useRef([0, 0])
      , r = g.useRef()
      , o = g.useState(VP++)[0]
      , s = g.useState(O0)[0]
      , a = g.useRef(e);
    g.useEffect(function() {
        a.current = e
    }, [e]),
    g.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var v = fP([e.lockRef.current], (e.shards || []).map(Xp), !0).filter(Boolean);
            return v.forEach(function(w) {
                return w.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function(w) {
                    return w.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = g.useCallback(function(v, w) {
        if ("touches"in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
            return !a.current.allowPinchZoom;
        var y = ga(v), h = n.current, x = "deltaX"in v ? v.deltaX : h[0] - y[0], S = "deltaY"in v ? v.deltaY : h[1] - y[1], C, E = v.target, k = Math.abs(x) > Math.abs(S) ? "h" : "v";
        if ("touches"in v && k === "h" && E.type === "range")
            return !1;
        var T = Gp(k, E);
        if (!T)
            return !0;
        if (T ? C = k : (C = k === "v" ? "h" : "v",
        T = Gp(k, E)),
        !T)
            return !1;
        if (!r.current && "changedTouches"in v && (x || S) && (r.current = C),
        !C)
            return !0;
        var M = r.current || C;
        return BP(M, w, v, M === "h" ? x : S, !0)
    }, [])
      , l = g.useCallback(function(v) {
        var w = v;
        if (!(!Lr.length || Lr[Lr.length - 1] !== s)) {
            var y = "deltaY"in w ? Kp(w) : ga(w)
              , h = t.current.filter(function(C) {
                return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && WP(C.delta, y)
            })[0];
            if (h && h.should) {
                w.cancelable && w.preventDefault();
                return
            }
            if (!h) {
                var x = (a.current.shards || []).map(Xp).filter(Boolean).filter(function(C) {
                    return C.contains(w.target)
                })
                  , S = x.length > 0 ? i(w, x[0]) : !a.current.noIsolation;
                S && w.cancelable && w.preventDefault()
            }
        }
    }, [])
      , u = g.useCallback(function(v, w, y, h) {
        var x = {
            name: v,
            delta: w,
            target: y,
            should: h,
            shadowParent: QP(y)
        };
        t.current.push(x),
        setTimeout(function() {
            t.current = t.current.filter(function(S) {
                return S !== x
            })
        }, 1)
    }, [])
      , d = g.useCallback(function(v) {
        n.current = ga(v),
        r.current = void 0
    }, [])
      , f = g.useCallback(function(v) {
        u(v.type, Kp(v), v.target, i(v, e.lockRef.current))
    }, [])
      , m = g.useCallback(function(v) {
        u(v.type, ga(v), v.target, i(v, e.lockRef.current))
    }, []);
    g.useEffect(function() {
        return Lr.push(s),
        e.setCallbacks({
            onScrollCapture: f,
            onWheelCapture: f,
            onTouchMoveCapture: m
        }),
        document.addEventListener("wheel", l, Dr),
        document.addEventListener("touchmove", l, Dr),
        document.addEventListener("touchstart", d, Dr),
        function() {
            Lr = Lr.filter(function(v) {
                return v !== s
            }),
            document.removeEventListener("wheel", l, Dr),
            document.removeEventListener("touchmove", l, Dr),
            document.removeEventListener("touchstart", d, Dr)
        }
    }, []);
    var p = e.removeScrollBar
      , b = e.inert;
    return g.createElement(g.Fragment, null, b ? g.createElement(s, {
        styles: UP(o)
    }) : null, p ? g.createElement(_P, {
        noRelative: e.noRelative,
        gapMode: e.gapMode
    }) : null)
}
function QP(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const YP = bP(R0, HP);
var D0 = g.forwardRef(function(e, t) {
    return g.createElement(Xi, Wt({}, e, {
        ref: t,
        sideCar: YP
    }))
});
D0.classNames = Xi.classNames;
var qP = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Ir = new WeakMap
  , va = new WeakMap
  , ya = {}
  , ql = 0
  , L0 = function(e) {
    return e && (e.host || L0(e.parentNode))
}
  , GP = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = L0(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , KP = function(e, t, n, r) {
    var o = GP(t, Array.isArray(e) ? e : [e]);
    ya[n] || (ya[n] = new WeakMap);
    var s = ya[n]
      , a = []
      , i = new Set
      , l = new Set(o)
      , u = function(f) {
        !f || i.has(f) || (i.add(f),
        u(f.parentNode))
    };
    o.forEach(u);
    var d = function(f) {
        !f || l.has(f) || Array.prototype.forEach.call(f.children, function(m) {
            if (i.has(m))
                d(m);
            else
                try {
                    var p = m.getAttribute(r)
                      , b = p !== null && p !== "false"
                      , v = (Ir.get(m) || 0) + 1
                      , w = (s.get(m) || 0) + 1;
                    Ir.set(m, v),
                    s.set(m, w),
                    a.push(m),
                    v === 1 && b && va.set(m, !0),
                    w === 1 && m.setAttribute(n, "true"),
                    b || m.setAttribute(r, "true")
                } catch (y) {
                    console.error("aria-hidden: cannot operate on ", m, y)
                }
        })
    };
    return d(t),
    i.clear(),
    ql++,
    function() {
        a.forEach(function(f) {
            var m = Ir.get(f) - 1
              , p = s.get(f) - 1;
            Ir.set(f, m),
            s.set(f, p),
            m || (va.has(f) || f.removeAttribute(r),
            va.delete(f)),
            p || f.removeAttribute(n)
        }),
        ql--,
        ql || (Ir = new WeakMap,
        Ir = new WeakMap,
        va = new WeakMap,
        ya = {})
    }
}
  , XP = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = qP(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    KP(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Ji = "Dialog"
  , [I0,MT] = Jn(Ji)
  , [JP,Mt] = I0(Ji)
  , F0 = e => {
    const {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: s, modal: a=!0} = e
      , i = g.useRef(null)
      , l = g.useRef(null)
      , [u,d] = zs({
        prop: r,
        defaultProp: o ?? !1,
        onChange: s,
        caller: Ji
    });
    return c.jsx(JP, {
        scope: t,
        triggerRef: i,
        contentRef: l,
        contentId: as(),
        titleId: as(),
        descriptionId: as(),
        open: u,
        onOpenChange: d,
        onOpenToggle: g.useCallback( () => d(f => !f), [d]),
        modal: a,
        children: n
    })
}
;
F0.displayName = Ji;
var $0 = "DialogTrigger"
  , z0 = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Mt($0, n)
      , s = Te(t, o.triggerRef);
    return c.jsx(ee.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sd(o.open),
        ...r,
        ref: s,
        onClick: se(e.onClick, o.onOpenToggle)
    })
}
);
z0.displayName = $0;
var wd = "DialogPortal"
  , [ZP,B0] = I0(wd, {
    forceMount: void 0
})
  , W0 = e => {
    const {__scopeDialog: t, forceMount: n, children: r, container: o} = e
      , s = Mt(wd, t);
    return c.jsx(ZP, {
        scope: t,
        forceMount: n,
        children: g.Children.map(r, a => c.jsx(Nr, {
            present: n || s.open,
            children: c.jsx(td, {
                asChild: !0,
                container: o,
                children: a
            })
        }))
    })
}
;
W0.displayName = wd;
var mi = "DialogOverlay"
  , U0 = g.forwardRef( (e, t) => {
    const n = B0(mi, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Mt(mi, e.__scopeDialog);
    return s.modal ? c.jsx(Nr, {
        present: r || s.open,
        children: c.jsx(tj, {
            ...o,
            ref: t
        })
    }) : null
}
);
U0.displayName = mi;
var ej = Es("DialogOverlay.RemoveScroll")
  , tj = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Mt(mi, n);
    return c.jsx(D0, {
        as: ej,
        allowPinchZoom: !0,
        shards: [o.contentRef],
        children: c.jsx(ee.div, {
            "data-state": Sd(o.open),
            ...r,
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })
    })
}
)
  , Cr = "DialogContent"
  , V0 = g.forwardRef( (e, t) => {
    const n = B0(Cr, e.__scopeDialog)
      , {forceMount: r=n.forceMount, ...o} = e
      , s = Mt(Cr, e.__scopeDialog);
    return c.jsx(Nr, {
        present: r || s.open,
        children: s.modal ? c.jsx(nj, {
            ...o,
            ref: t
        }) : c.jsx(rj, {
            ...o,
            ref: t
        })
    })
}
);
V0.displayName = Cr;
var nj = g.forwardRef( (e, t) => {
    const n = Mt(Cr, e.__scopeDialog)
      , r = g.useRef(null)
      , o = Te(t, n.contentRef, r);
    return g.useEffect( () => {
        const s = r.current;
        if (s)
            return XP(s)
    }
    , []),
    c.jsx(H0, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: se(e.onCloseAutoFocus, s => {
            var a;
            s.preventDefault(),
            (a = n.triggerRef.current) == null || a.focus()
        }
        ),
        onPointerDownOutside: se(e.onPointerDownOutside, s => {
            const a = s.detail.originalEvent
              , i = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || i) && s.preventDefault()
        }
        ),
        onFocusOutside: se(e.onFocusOutside, s => s.preventDefault())
    })
}
)
  , rj = g.forwardRef( (e, t) => {
    const n = Mt(Cr, e.__scopeDialog)
      , r = g.useRef(!1)
      , o = g.useRef(!1);
    return c.jsx(H0, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: s => {
            var a, i;
            (a = e.onCloseAutoFocus) == null || a.call(e, s),
            s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
            r.current = !1,
            o.current = !1
        }
        ,
        onInteractOutside: s => {
            var l, u;
            (l = e.onInteractOutside) == null || l.call(e, s),
            s.defaultPrevented || (r.current = !0,
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
            const a = s.target;
            ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) && s.preventDefault(),
            s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
        }
    })
}
)
  , H0 = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a} = e
      , i = Mt(Cr, n)
      , l = g.useRef(null)
      , u = Te(t, l);
    return dP(),
    c.jsxs(c.Fragment, {
        children: [c.jsx(N0, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(Ai, {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Sd(i.open),
                ...a,
                ref: u,
                onDismiss: () => i.onOpenChange(!1)
            })
        }), c.jsxs(c.Fragment, {
            children: [c.jsx(oj, {
                titleId: i.titleId
            }), c.jsx(aj, {
                contentRef: l,
                descriptionId: i.descriptionId
            })]
        })]
    })
}
)
  , bd = "DialogTitle"
  , Q0 = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Mt(bd, n);
    return c.jsx(ee.h2, {
        id: o.titleId,
        ...r,
        ref: t
    })
}
);
Q0.displayName = bd;
var Y0 = "DialogDescription"
  , q0 = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Mt(Y0, n);
    return c.jsx(ee.p, {
        id: o.descriptionId,
        ...r,
        ref: t
    })
}
);
q0.displayName = Y0;
var G0 = "DialogClose"
  , K0 = g.forwardRef( (e, t) => {
    const {__scopeDialog: n, ...r} = e
      , o = Mt(G0, n);
    return c.jsx(ee.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: se(e.onClick, () => o.onOpenChange(!1))
    })
}
);
K0.displayName = G0;
function Sd(e) {
    return e ? "open" : "closed"
}
var X0 = "DialogTitleWarning"
  , [AT,J0] = Sw(X0, {
    contentName: Cr,
    titleName: bd,
    docsSlug: "dialog"
})
  , oj = ({titleId: e}) => {
    const t = J0(X0)
      , n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return g.useEffect( () => {
        e && (document.getElementById(e) || console.error(n))
    }
    , [n, e]),
    null
}
  , sj = "DialogDescriptionWarning"
  , aj = ({contentRef: e, descriptionId: t}) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${J0(sj).contentName}}.`;
    return g.useEffect( () => {
        var s;
        const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r))
    }
    , [r, e, t]),
    null
}
  , ij = F0
  , lj = z0
  , uj = W0
  , Z0 = U0
  , ey = V0
  , ty = Q0
  , ny = q0
  , cj = K0;
const dj = ij
  , fj = lj
  , pj = uj
  , ry = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Z0, {
    ref: n,
    className: oe("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
}));
ry.displayName = Z0.displayName;
const oy = g.forwardRef( ({className: e, children: t, ...n}, r) => c.jsxs(pj, {
    children: [c.jsx(ry, {}), c.jsxs(ey, {
        ref: r,
        className: oe("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
        ...n,
        children: [t, c.jsxs(cj, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [c.jsx(Fi, {
                className: "h-4 w-4"
            }), c.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
oy.displayName = ey.displayName;
const sy = ({className: e, ...t}) => c.jsx("div", {
    className: oe("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
});
sy.displayName = "DialogHeader";
const ay = g.forwardRef( ({className: e, ...t}, n) => c.jsx(ty, {
    ref: n,
    className: oe("text-lg font-semibold leading-none tracking-tight", e),
    ...t
}));
ay.displayName = ty.displayName;
const hj = g.forwardRef( ({className: e, ...t}, n) => c.jsx(ny, {
    ref: n,
    className: oe("text-sm text-muted-foreground", e),
    ...t
}));
hj.displayName = ny.displayName;
var Zi = "Collapsible"
  , [mj,iy] = Jn(Zi)
  , [gj,Cd] = mj(Zi)
  , ly = g.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: o, disabled: s, onOpenChange: a, ...i} = e
      , [l,u] = zs({
        prop: r,
        defaultProp: o ?? !1,
        onChange: a,
        caller: Zi
    });
    return c.jsx(gj, {
        scope: n,
        disabled: s,
        contentId: as(),
        open: l,
        onOpenToggle: g.useCallback( () => u(d => !d), [u]),
        children: c.jsx(ee.div, {
            "data-state": kd(l),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
        })
    })
}
);
ly.displayName = Zi;
var uy = "CollapsibleTrigger"
  , cy = g.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , o = Cd(uy, n);
    return c.jsx(ee.button, {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": kd(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: se(e.onClick, o.onOpenToggle)
    })
}
);
cy.displayName = uy;
var Ed = "CollapsibleContent"
  , dy = g.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , o = Cd(Ed, e.__scopeCollapsible);
    return c.jsx(Nr, {
        present: n || o.open,
        children: ({present: s}) => c.jsx(vj, {
            ...r,
            ref: t,
            present: s
        })
    })
}
);
dy.displayName = Ed;
var vj = g.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: o, ...s} = e
      , a = Cd(Ed, n)
      , [i,l] = g.useState(r)
      , u = g.useRef(null)
      , d = Te(t, u)
      , f = g.useRef(0)
      , m = f.current
      , p = g.useRef(0)
      , b = p.current
      , v = a.open || i
      , w = g.useRef(v)
      , y = g.useRef(void 0);
    return g.useEffect( () => {
        const h = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(h)
    }
    , []),
    tt( () => {
        const h = u.current;
        if (h) {
            y.current = y.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            },
            h.style.transitionDuration = "0s",
            h.style.animationName = "none";
            const x = h.getBoundingClientRect();
            f.current = x.height,
            p.current = x.width,
            w.current || (h.style.transitionDuration = y.current.transitionDuration,
            h.style.animationName = y.current.animationName),
            l(r)
        }
    }
    , [a.open, r]),
    c.jsx(ee.div, {
        "data-state": kd(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        id: a.contentId,
        hidden: !v,
        ...s,
        ref: d,
        style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": b ? `${b}px` : void 0,
            ...e.style
        },
        children: v && o
    })
}
);
function kd(e) {
    return e ? "open" : "closed"
}
var yj = ly
  , xj = cy
  , wj = dy
  , bj = g.createContext(void 0);
function Sj(e) {
    const t = g.useContext(bj);
    return e || t || "ltr"
}
var At = "Accordion"
  , Cj = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Nd,Ej,kj] = Ng(At)
  , [el,_T] = Jn(At, [kj, iy])
  , Pd = iy()
  , fy = R.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , o = r
      , s = r;
    return c.jsx(Nd.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? c.jsx(Tj, {
            ...s,
            ref: t
        }) : c.jsx(jj, {
            ...o,
            ref: t
        })
    })
}
);
fy.displayName = At;
var [py,Nj] = el(At)
  , [hy,Pj] = el(At, {
    collapsible: !1
})
  , jj = R.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , collapsible: s=!1, ...a} = e
      , [i,l] = zs({
        prop: n,
        defaultProp: r ?? "",
        onChange: o,
        caller: At
    });
    return c.jsx(py, {
        scope: e.__scopeAccordion,
        value: R.useMemo( () => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: R.useCallback( () => s && l(""), [s, l]),
        children: c.jsx(hy, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: c.jsx(my, {
                ...a,
                ref: t
            })
        })
    })
}
)
  , Tj = R.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: o= () => {}
    , ...s} = e
      , [a,i] = zs({
        prop: n,
        defaultProp: r ?? [],
        onChange: o,
        caller: At
    })
      , l = R.useCallback(d => i( (f=[]) => [...f, d]), [i])
      , u = R.useCallback(d => i( (f=[]) => f.filter(m => m !== d)), [i]);
    return c.jsx(py, {
        scope: e.__scopeAccordion,
        value: a,
        onItemOpen: l,
        onItemClose: u,
        children: c.jsx(hy, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: c.jsx(my, {
                ...s,
                ref: t
            })
        })
    })
}
)
  , [Rj,tl] = el(At)
  , my = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: o, orientation: s="vertical", ...a} = e
      , i = R.useRef(null)
      , l = Te(i, t)
      , u = Ej(n)
      , f = Sj(o) === "ltr"
      , m = se(e.onKeyDown, p => {
        var T;
        if (!Cj.includes(p.key))
            return;
        const b = p.target
          , v = u().filter(M => {
            var A;
            return !((A = M.ref.current) != null && A.disabled)
        }
        )
          , w = v.findIndex(M => M.ref.current === b)
          , y = v.length;
        if (w === -1)
            return;
        p.preventDefault();
        let h = w;
        const x = 0
          , S = y - 1
          , C = () => {
            h = w + 1,
            h > S && (h = x)
        }
          , E = () => {
            h = w - 1,
            h < x && (h = S)
        }
        ;
        switch (p.key) {
        case "Home":
            h = x;
            break;
        case "End":
            h = S;
            break;
        case "ArrowRight":
            s === "horizontal" && (f ? C() : E());
            break;
        case "ArrowDown":
            s === "vertical" && C();
            break;
        case "ArrowLeft":
            s === "horizontal" && (f ? E() : C());
            break;
        case "ArrowUp":
            s === "vertical" && E();
            break
        }
        const k = h % y;
        (T = v[k].ref.current) == null || T.focus()
    }
    );
    return c.jsx(Rj, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: c.jsx(Nd.Slot, {
            scope: n,
            children: c.jsx(ee.div, {
                ...a,
                "data-orientation": s,
                ref: l,
                onKeyDown: r ? void 0 : m
            })
        })
    })
}
)
  , gi = "AccordionItem"
  , [Oj,jd] = el(gi)
  , gy = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...o} = e
      , s = tl(gi, n)
      , a = Nj(gi, n)
      , i = Pd(n)
      , l = as()
      , u = r && a.value.includes(r) || !1
      , d = s.disabled || e.disabled;
    return c.jsx(Oj, {
        scope: n,
        open: u,
        disabled: d,
        triggerId: l,
        children: c.jsx(yj, {
            "data-orientation": s.orientation,
            "data-state": Sy(u),
            ...i,
            ...o,
            ref: t,
            disabled: d,
            open: u,
            onOpenChange: f => {
                f ? a.onItemOpen(r) : a.onItemClose(r)
            }
        })
    })
}
);
gy.displayName = gi;
var vy = "AccordionHeader"
  , yy = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = tl(At, n)
      , s = jd(vy, n);
    return c.jsx(ee.h3, {
        "data-orientation": o.orientation,
        "data-state": Sy(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
yy.displayName = vy;
var oc = "AccordionTrigger"
  , xy = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = tl(At, n)
      , s = jd(oc, n)
      , a = Pj(oc, n)
      , i = Pd(n);
    return c.jsx(Nd.ItemSlot, {
        scope: n,
        children: c.jsx(xj, {
            "aria-disabled": s.open && !a.collapsible || void 0,
            "data-orientation": o.orientation,
            id: s.triggerId,
            ...i,
            ...r,
            ref: t
        })
    })
}
);
xy.displayName = oc;
var wy = "AccordionContent"
  , by = R.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , o = tl(At, n)
      , s = jd(wy, n)
      , a = Pd(n);
    return c.jsx(wj, {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": o.orientation,
        ...a,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
by.displayName = wy;
function Sy(e) {
    return e ? "open" : "closed"
}
var Mj = fy
  , Aj = gy
  , _j = yy
  , Cy = xy
  , Ey = by;
const Dj = Mj
  , ky = g.forwardRef( ({className: e, ...t}, n) => c.jsx(Aj, {
    ref: n,
    className: oe("border-b", e),
    ...t
}));
ky.displayName = "AccordionItem";
const Ny = g.forwardRef( ({className: e, children: t, ...n}, r) => c.jsx(_j, {
    className: "flex",
    children: c.jsxs(Cy, {
        ref: r,
        className: oe("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, c.jsx(Zg, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
Ny.displayName = Cy.displayName;
const Py = g.forwardRef( ({className: e, children: t, ...n}, r) => c.jsx(Ey, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: c.jsx("div", {
        className: oe("pb-4 pt-0", e),
        children: t
    })
}));
Py.displayName = Ey.displayName;
const Lj = [{
    icon: rv,
    question: "Qual o prazo de entrega?",
    answer: "O prazo de entrega é de 7 a 15 dias úteis após a confirmação do pagamento. Enviamos para todo o Brasil com código de rastreamento."
}, {
    icon: tv,
    question: "Como rastrear meu pedido?",
    answer: "Após o envio, você receberá um código de rastreamento por e-mail e SMS. Você pode acompanhar seu pedido diretamente no site dos Correios."
}, {
    icon: Eb,
    question: "Posso trocar ou devolver?",
    answer: "Sim! Você tem até 7 dias após o recebimento para solicitar troca ou devolução. O produto deve estar na embalagem original e sem sinais de uso."
}, {
    icon: ev,
    question: "Quais formas de pagamento?",
    answer: "Aceitamos PIX, cartões de crédito (até 12x sem juros), cartões de débito e boleto bancário. PIX tem aprovação instantânea!"
}, {
    icon: Pb,
    question: "O produto tem garantia?",
    answer: "Sim! O produto possui garantia de 12 meses contra defeitos de fabricação. Em caso de problemas, entre em contato conosco."
}, {
    icon: wb,
    question: "O produto é original?",
    answer: "Sim, trabalhamos apenas com produtos 100% originais e lacrados. Todos os produtos possuem nota fiscal e garantia do fabricante."
}]
  , Ij = () => c.jsxs(dj, {
    children: [c.jsx(fj, {
        asChild: !0,
        children: c.jsxs("div", {
            className: "flex flex-col items-center justify-center w-11 cursor-pointer",
            children: [c.jsx(Qu, {
                className: "h-5 w-5 text-muted-foreground"
            }), c.jsx("span", {
                className: "text-[10px] text-muted-foreground mt-0.5",
                children: "Ajuda"
            })]
        })
    }), c.jsxs(oy, {
        className: "max-w-[95vw] sm:max-w-md max-h-[80vh] overflow-y-auto",
        children: [c.jsx(sy, {
            children: c.jsxs(ay, {
                className: "text-lg font-semibold flex items-center gap-2",
                children: [c.jsx(Qu, {
                    className: "h-5 w-5 text-rose-500"
                }), "Perguntas Frequentes"]
            })
        }), c.jsx(Dj, {
            type: "single",
            collapsible: !0,
            className: "w-full",
            children: Lj.map( (e, t) => c.jsxs(ky, {
                value: `item-${t}`,
                children: [c.jsx(Ny, {
                    className: "text-left text-sm hover:no-underline",
                    children: c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [c.jsx(e.icon, {
                            className: "h-4 w-4 text-rose-500 flex-shrink-0"
                        }), c.jsx("span", {
                            children: e.question
                        })]
                    })
                }), c.jsx(Py, {
                    className: "text-sm text-muted-foreground pl-7",
                    children: e.answer
                })]
            }, t))
        }), c.jsx("div", {
            className: "mt-4 p-3 bg-rose-50 rounded-lg",
            children: c.jsx("p", {
                className: "text-xs text-rose-600 text-center",
                children: "Ainda tem dúvidas? Entre em contato pelo WhatsApp clicando no ícone no canto da tela."
            })
        })]
    })]
})
  , Fj = ({onAddToCart: e, onBuy: t}) => {
    const n = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return c.jsxs("div", {
        className: "fixed bottom-0 left-0 right-0 bg-background border-t border-border px-3 py-2.5 flex items-center gap-2 z-50",
        style: {
            paddingBottom: "max(12px, env(safe-area-inset-bottom))"
        },
        children: [c.jsxs("div", {
            className: "flex flex-col items-center justify-center w-10 cursor-pointer shrink-0",
            onClick: n,
            children: [c.jsx(Tb, {
                className: "h-5 w-5 text-muted-foreground"
            }), c.jsx("span", {
                className: "text-[10px] text-muted-foreground mt-0.5",
                children: "Loja"
            })]
        }), c.jsx(Ij, {}), c.jsxs(Dn, {
            variant: "outline",
            className: "flex-1 h-11 text-xs font-medium border-rose-300 text-rose-500 hover:bg-rose-50 hover:text-rose-600 rounded-full px-3",
            onClick: e,
            children: ["Adicionar ao", c.jsx("br", {}), "carrinho"]
        }), c.jsx(Dn, {
            className: "flex-1 h-11 bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm rounded-full px-3",
            onClick: t,
            children: "COMPRAR"
        })]
    })
}
  , $j = () => c.jsxs("div", {
    className: "bg-background border-t border-border",
    children: [c.jsxs("div", {
        className: "px-4 py-3 flex items-center justify-between",
        children: [c.jsx("span", {
            className: "font-medium text-sm",
            children: "Ofertas"
        }), c.jsx(Ii, {
            className: "h-5 w-5 text-muted-foreground"
        })]
    }), c.jsx("div", {
        className: "px-4 pb-4",
        children: c.jsx("div", {
            className: "bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200/50",
            children: c.jsxs("div", {
                className: "flex items-center justify-between gap-4",
                children: [c.jsxs("div", {
                    className: "flex-1",
                    children: [c.jsx("div", {
                        className: "text-amber-600 font-bold text-lg leading-tight",
                        children: "Desconto 90%"
                    }), c.jsx("div", {
                        className: "text-amber-500 font-semibold text-base",
                        children: "aplicado com sucesso"
                    }), c.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: "Desconto especial para novos clientes em sua primeira compra"
                    })]
                }), c.jsxs("div", {
                    className: "flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium",
                    children: [c.jsx(Li, {
                        className: "h-3.5 w-3.5 text-green-500"
                    }), c.jsx("span", {
                        children: "Aplicado"
                    })]
                })]
            })
        })
    })]
})
  , zj = "/assets/app-store-badge-CVyK0T4N.svg"
  , Bj = "/assets/google-play-badge-DVbUjTfg.svg"
  , Wj = () => {
    const e = [{
        icon: nv,
        title: "Compre",
        links: ["Mais vendidos", "Novidades"]
    }, {
        icon: bb,
        title: "Ganhe",
        links: ["Afiliado", "Programa criador"]
    }, {
        icon: Cb,
        title: "Sobre",
        links: ["Sobre nós", "Carreiras"]
    }, {
        icon: Qu,
        title: "Suporte",
        links: ["Central de Ajuda", "Contato"]
    }, {
        icon: ep,
        title: "Política & Legal",
        links: ["Política de privacidade", "Termos de uso"]
    }];
    return c.jsxs("div", {
        className: "bg-background border-t border-border pb-20",
        children: [c.jsx("div", {
            className: "grid grid-cols-2 gap-4 p-4",
            children: e.slice(0, 4).map( (t, n) => c.jsxs("div", {
                className: "flex items-start gap-2",
                children: [c.jsx(t.icon, {
                    className: "h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5"
                }), c.jsxs("div", {
                    children: [c.jsx("h4", {
                        className: "font-medium text-sm text-foreground",
                        children: t.title
                    }), t.links.map( (r, o) => c.jsx("p", {
                        className: "text-xs text-muted-foreground mt-0.5",
                        children: r
                    }, o))]
                })]
            }, n))
        }), c.jsx("div", {
            className: "px-4 pb-4",
            children: c.jsxs("div", {
                className: "flex items-start gap-2",
                children: [c.jsx(ep, {
                    className: "h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5"
                }), c.jsxs("div", {
                    children: [c.jsx("h4", {
                        className: "font-medium text-sm text-foreground",
                        children: "Política & Legal"
                    }), c.jsx("p", {
                        className: "text-xs text-muted-foreground mt-0.5",
                        children: "Política de privacidade"
                    }), c.jsx("p", {
                        className: "text-xs text-muted-foreground mt-0.5",
                        children: "Termos de uso"
                    })]
                })]
            })
        }), c.jsxs("div", {
            className: "flex items-center justify-center gap-3 py-4 border-t border-border",
            children: [c.jsx("a", {
                href: "#",
                className: "block",
                children: c.jsx("img", {
                    src: Bj,
                    alt: "Get it on Google Play",
                    className: "h-10"
                })
            }), c.jsx("a", {
                href: "#",
                className: "block",
                children: c.jsx("img", {
                    src: zj,
                    alt: "Download on the App Store",
                    className: "h-10"
                })
            })]
        }), c.jsxs("div", {
            className: "text-center py-4 text-xs text-muted-foreground border-t border-border",
            children: [c.jsx("p", {
                children: "© 2025 Shops."
            }), c.jsx("p", {
                className: "mt-1",
                children: "Política de privacidade • Termos de uso"
            })]
        })]
    })
}
  , jy = "/assets/jbl-1-BThPEEYg.png"
  , Ty = "/assets/jbl-2-Cz1-ijIt.png"
  , Ry = "/assets/jbl-3-Bzu4g-dS.png"
  , Td = "/assets/jbl-4-BzqPY9vt.png"
  , Uj = "/assets/bolsa-jbl-CxKpP9sL.webp"
  , Gl = [{
    id: "camuflada",
    name: "Camuflada",
    image: Td,
    checkoutUrl: "https://pay.mestredoar.online/mwK436dnq26GQ8b"
}, {
    id: "azul",
    name: "Azul",
    image: Ry,
    checkoutUrl: "https://pay.mestredoar.online/ODAK3LlN82j3E6V"
}, {
    id: "branca",
    name: "Branca",
    image: Ty,
    checkoutUrl: "https://pay.mestredoar.online/BNjzgPl9kqxgM78"
}, {
    id: "preta",
    name: "Preta",
    image: jy,
    checkoutUrl: "https://pay.mestredoar.online/DYp0ZxVbQx4gmvX"
}]
  , Vj = ({isOpen: e, onClose: t, onConfirm: n, price: r, originalPrice: o}) => {
    const [s,a] = g.useState("camuflada");
    if (!e)
        return null;
    const i = Gl.find(u => u.id === s)
      , l = Math.round((parseFloat(o.replace("R$ ", "").replace(",", ".")) - parseFloat(r.replace("R$ ", "").replace(",", "."))) / parseFloat(o.replace("R$ ", "").replace(",", ".")) * 100);
    return c.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [c.jsx("div", {
            className: "absolute inset-0 bg-black/50",
            onClick: t
        }), c.jsxs("div", {
            className: "relative w-full max-w-sm bg-white rounded-2xl animate-scale-in max-h-[85vh] overflow-y-auto shadow-2xl",
            children: [c.jsxs("div", {
                className: "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                children: [c.jsx("h2", {
                    className: "text-sm font-medium text-gray-900",
                    children: "Selecione as opções"
                }), c.jsx("button", {
                    onClick: t,
                    className: "p-1 hover:bg-gray-100 rounded-full transition-colors",
                    children: c.jsx(Fi, {
                        className: "w-5 h-5 text-gray-400"
                    })
                })]
            }), c.jsxs("div", {
                className: "px-4 py-3",
                children: [c.jsx("div", {
                    className: "flex justify-center mb-3",
                    children: c.jsx("img", {
                        src: (i == null ? void 0 : i.image) || Td,
                        alt: "JBL Boombox 4",
                        className: "h-24 object-contain"
                    })
                }), c.jsxs("div", {
                    className: "text-center mb-3",
                    children: [c.jsx("h3", {
                        className: "text-sm font-medium text-gray-900 mb-1",
                        children: "JBL Boombox 4"
                    }), c.jsxs("div", {
                        className: "flex items-center justify-center gap-2",
                        children: [c.jsx("span", {
                            className: "text-xl font-bold text-rose-500",
                            children: r
                        }), c.jsx("span", {
                            className: "text-xs text-gray-400 line-through",
                            children: o
                        })]
                    }), c.jsxs("span", {
                        className: "inline-block mt-1.5 bg-green-100 text-green-700 text-[10px] font-medium px-2.5 py-0.5 rounded-full",
                        children: ["Economize ", l, "%"]
                    })]
                }), c.jsxs("div", {
                    className: "bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 rounded-xl p-2.5 mb-4 flex items-center gap-3",
                    children: [c.jsx("div", {
                        className: "w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100",
                        children: c.jsx("img", {
                            src: Uj,
                            alt: "Bolsa JBL",
                            className: "w-full h-full object-cover"
                        })
                    }), c.jsxs("div", {
                        className: "flex-1",
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-1 mb-0.5",
                            children: [c.jsx("span", {
                                className: "text-sm",
                                children: "🎁"
                            }), c.jsx("span", {
                                className: "text-rose-500 font-bold text-xs",
                                children: "BRINDE EXCLUSIVO!"
                            })]
                        }), c.jsxs("p", {
                            className: "text-[11px] text-gray-600 leading-tight",
                            children: ["Finalize agora e ganhe uma ", c.jsx("strong", {
                                children: "Bolsa JBL Boombox 4"
                            }), " de presente!"]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "mb-4",
                    children: [c.jsxs("p", {
                        className: "text-xs text-gray-700 mb-2",
                        children: ["Cor: ", c.jsx("span", {
                            className: "font-medium capitalize",
                            children: s
                        })]
                    }), c.jsx("div", {
                        className: "flex gap-2 justify-between",
                        children: Gl.map(u => c.jsxs("button", {
                            onClick: () => a(u.id),
                            className: `flex flex-col items-center gap-1 p-1.5 rounded-lg border-2 transition-all flex-1 ${s === u.id ? "border-rose-500 bg-rose-50" : "border-gray-200 hover:border-gray-300"}`,
                            children: [c.jsx("div", {
                                className: "w-12 h-12 rounded-md overflow-hidden bg-gray-50",
                                children: c.jsx("img", {
                                    src: u.image,
                                    alt: u.name,
                                    className: "w-full h-full object-contain"
                                })
                            }), c.jsx("span", {
                                className: "text-[10px] text-gray-600",
                                children: u.name
                            })]
                        }, u.id))
                    })]
                })]
            }), c.jsx("div", {
                className: "px-4 pb-4",
                children: c.jsxs("button", {
                    onClick: () => {
                        const u = Gl.find(d => d.id === s);
                        if (u != null && u.checkoutUrl) {
                            const d = u.checkoutUrl + (window.location.search ? "&" + window.location.search.substring(1) : "");
                            window.location.href = d
                        }
                        n(s)
                    }
                    ,
                    className: "w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-3.5 rounded-full text-sm shadow-lg hover:from-rose-600 hover:to-pink-600 transition-all",
                    children: ["Confirmar – ", r]
                })
            })]
        })]
    })
}
  , Hj = "/assets/jbl-5-BNJlL9P0.png"
  , Qj = "/assets/jbl-6-TQsdGvpF.png"
  , Yj = "/assets/mariana-avatar-BnmUYH2x.jpg"
  , qj = "/assets/ana-avatar-BGb8pIa6.jpg"
  , Gj = "/assets/camila-avatar-B9DfCrNi.jpg"
  , Kj = "/assets/juliana-avatar-DjWUHd64.jpg"
  , Xj = "/assets/fernanda-avatar-9WJXb2-v.jpg"
  , Jj = "/assets/carlos-avatar-kcdP96L9.jpg"
  , Zj = "/assets/ricardo-avatar-CbpJrmeY.jpg"
  , Jp = "/assets/review-jbl-1-DHcKwv87.jpg"
  , eT = "/assets/review-jbl-2-DvxXjXMk.jpg"
  , tT = "/assets/review-jbl-3-F1de7Ma7.jpg"
  , Zp = "/assets/review-jbl-4-BJqC3-22.webp"
  , nT = "/assets/review-jbl-5-h3ouI7Mv.webp"
  , rT = "/assets/review-jbl-6-o8GfMCLy.webp"
  , oT = "/assets/review-jbl-7-B9AsEmUQ.jpg"
  , sT = "/assets/review-jbl-8-UP5rXFTG.jpg"
  , aT = "/assets/review-jbl-9-3-eW0O8-.webp"
  , iT = "/assets/review-jbl-10-BTxMhXcx.jpg"
  , lT = "/assets/review-jbl-11-Co2W1_K5.webp"
  , uT = "/assets/review-jbl-12-BV5Mpqx8.webp"
  , cT = () => {
    ed();
    const [e,t] = g.useState("00:03:39")
      , [n,r] = g.useState(!1)
      , o = g.useMemo( () => {
        const v = new Date
          , w = Op(v, 3)
          , y = Op(v, 8);
        return `Receba até ${Fp(w, "d 'de' MMM", {
            locale: $p
        })} – ${Fp(y, "d 'de' MMM", {
            locale: $p
        })}.`
    }
    , []);
    g.useEffect( () => {
        const v = new Date().getTime() + 219e3
          , w = () => {
            const h = new Date().getTime()
              , x = v - h;
            if (x <= 0) {
                t("00:00:00");
                return
            }
            const S = Math.floor(x / (1e3 * 60 * 60))
              , C = Math.floor(x % (1e3 * 60 * 60) / (1e3 * 60))
              , E = Math.floor(x % (1e3 * 60) / 1e3);
            t(`${String(S).padStart(2, "0")}:${String(C).padStart(2, "0")}:${String(E).padStart(2, "0")}`)
        }
        ;
        w();
        const y = setInterval(w, 1e3);
        return () => clearInterval(y)
    }
    , []);
    const s = [jy, Ty, Ry, Td, Hj, Qj]
      , a = [{
        text: "Devolução gratuita"
    }, {
        text: "Cupom por perda ou dano"
    }, {
        text: "Pagamento seguro"
    }, {
        text: "Cupom por atraso na coleta"
    }]
      , i = [{
        stars: 5,
        count: 155,
        percentage: 76
    }, {
        stars: 4,
        count: 22,
        percentage: 11
    }, {
        stars: 3,
        count: 18,
        percentage: 9
    }, {
        stars: 2,
        count: 7,
        percentage: 3
    }, {
        stars: 1,
        count: 5,
        percentage: 1
    }]
      , l = [{
        author: "Luh Moraes",
        avatar: Yj,
        rating: 5,
        date: "há 23 minutos",
        text: "O som é tão potente que parece uma caixa de som profissional! A conexão Bluetooth é estável e o carregamento é bem rápido. Perfeita pra qualquer ocasião.",
        images: [Jp, eT, tT],
        helpful: 234
    }, {
        author: "Bela Prado",
        avatar: qj,
        rating: 5,
        date: "há 41 minutos",
        text: "Uso em viagens e festas — o áudio é absurdo de bom! A Boombox 4 tem um som limpo, com muito grave e agudos equilibrados. O design ainda é lindo e resistente à água.",
        images: [Zp, nT, rT],
        helpful: 189
    }, {
        author: "Elane Costa",
        avatar: Gj,
        rating: 5,
        date: "há 50 minutos",
        text: "Amei! Vem super bem embalado 😍",
        images: [oT, sT],
        helpful: 156
    }, {
        author: "Sofia Dias",
        avatar: Kj,
        rating: 5,
        date: "há 1 hora",
        text: "Comprei pra usar em churrascos e viagens e não me decepcionei. O design é robusto, o áudio enche o ambiente e a conexão Bluetooth é estável. Carregamento rápido e acabamento premium. Vale cada centavo.",
        images: [aT],
        helpful: 198
    }, {
        author: "Carlos Albuquerque",
        avatar: Jj,
        rating: 5,
        date: "há 1 hora",
        text: "Som absurdo de bom! A Boombox 4 JBL entregou graves potentes e clareza mesmo em volumes altos. Levei pra piscina e a prova d'água é real — sem preocupações. Bateria dura o dia todo.",
        images: [iT],
        helpful: 176
    }, {
        author: "Rafaela Lima",
        avatar: Xj,
        rating: 5,
        date: "há 1 hora",
        text: "Perfeita para festas ao ar livre. O som é muito potente, o alcance Bluetooth surpreende e não temo deixar perto da água. Bateria segura a maratona inteira. Compra certeira pra quem gosta de som forte e sem dor de cabeça.",
        images: [lT, uT],
        helpful: 142
    }, {
        author: "Beatriz Souza",
        avatar: Zj,
        rating: 5,
        date: "há 1 hora",
        text: "Incrível como um equipamento tão resistente consegue ter som tão limpo. Testei em praia e não entrou nada de areia ou água. Fácil de emparelhar com o celular e a autonomia é ótima. Produto top!",
        images: [Jp, Zp],
        helpful: 134
    }]
      , u = [{
        label: "Potência",
        value: "80W RMS"
    }, {
        label: "Conectividade",
        value: "Bluetooth 5.3 + entrada auxiliar"
    }, {
        label: "Autonomia",
        value: "Até 24 horas"
    }, {
        label: "Proteção",
        value: "À prova d'água e poeira (IP67)"
    }, {
        label: "Tempo de recarga",
        value: "6,5 horas"
    }, {
        label: "Peso",
        value: "5,9 kg"
    }, {
        label: "Dimensões",
        value: "48,2 x 25,7 x 20 cm"
    }, {
        label: "Compatibilidade",
        value: "JBL Portable App"
    }]
      , d = [{
        icon: "check",
        text: "Som poderoso: Graves marcantes e áudio cristalino"
    }, {
        icon: "check",
        text: "Resistência total: Design à prova d'água e poeira (IP67)"
    }, {
        icon: "check",
        text: "Bateria duradoura: Até 24h de reprodução contínua"
    }, {
        icon: "check",
        text: "Conexão rápida: Bluetooth 5.3 estável e sem interrupções"
    }, {
        icon: "check",
        text: "Estilo JBL: Design moderno com alça reforçada e acabamento premium"
    }]
      , f = [{
        icon: "check",
        text: "1 x Caixa de Som JBL Boombox 4 Original"
    }, {
        icon: "check",
        text: "1 x Cabo de carregamento USB-C"
    }, {
        icon: "check",
        text: "1 x Manual do usuário"
    }, {
        icon: "check",
        text: "Garantia oficial do fabricante"
    }]
      , m = () => {
        r(!0)
    }
      , p = () => {
        r(!0)
    }
      , b = v => {
        r(!1)
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-secondary pb-24",
        children: [c.jsx(MN, {
            onCartClick: p
        }), c.jsx(AN, {
            images: s
        }), c.jsx(_N, {
            currentPrice: "R$ 56,70",
            originalPrice: "R$ 629,43",
            discount: "88%",
            countdown: e
        }), c.jsx(DN, {
            badge: "⚡ OFERTA RELÂMPAGO",
            title: "Caixa de Som Bluetooth JBL Boombox 4 – IP68, Som de Última Geração, À Prova d'Água, 110/220V 127/220V",
            rating: 4.7,
            reviewCount: 204,
            salesCount: 4473,
            deliveryInfo: o,
            shippingNote: "Taxa de envio: Grátis"
        }), c.jsx(LN, {
            services: a,
            title: "Serviços do TikTok Shop"
        }), c.jsx($j, {}), c.jsx(JN, {
            rating: 4.7,
            totalReviews: 207,
            breakdown: i,
            reviews: l
        }), c.jsx(tP, {
            storeName: "JBL Eletronicos Shops",
            verified: !0,
            productCount: "1706",
            recommendation: "100%",
            trustScore: 100
        }), c.jsx(nP, {
            title: "Caixa de Som Bluetooth À Prova D'água Boombox 4 JBL",
            description: `Som potente, design moderno e resistência total para acompanhar o seu ritmo — onde quer que esteja.

No TikTok, a vibe é intensidade — e o som de qualidade não pode ficar de fora. A Boombox 4 JBL chega com potência de sobra, estilo marcante e resistência para te acompanhar em qualquer lugar. Seja na praia, na piscina, no churrasco ou no quarto, o som vai ser sempre o protagonista.`
        }), c.jsx(Bp, {
            title: "Itens Inclusos",
            features: f,
            variant: "includes"
        }), c.jsx(rP, {
            specs: u
        }), c.jsx(Bp, {
            title: "Por que escolher a Boombox 4 JBL",
            features: d,
            variant: "features"
        }), c.jsxs("div", {
            className: "bg-background p-4 border-t border-border",
            children: [c.jsx("h2", {
                className: "font-medium text-sm mb-3 text-foreground",
                children: "Oferta Especial"
            }), c.jsxs("p", {
                className: "text-sm leading-relaxed text-muted-foreground",
                children: ["De ", c.jsx("span", {
                    className: "line-through",
                    children: "R$ 629,43"
                }), " por ", c.jsx("span", {
                    className: "font-bold text-rose-500",
                    children: "R$ 56,70"
                }), " — economia de ", c.jsx("span", {
                    className: "font-bold text-rose-500",
                    children: "R$ 554,68"
                }), " (88% de desconto). Som de alta performance com preço de oportunidade exclusiva aqui no TikTok Shop!"]
            }), c.jsx("p", {
                className: "text-sm leading-relaxed text-muted-foreground mt-2",
                children: "🚚 Envio rápido e seguro para todo o Brasil. Aproveite essa oferta e leve a experiência JBL para o seu dia a dia!"
            })]
        }), c.jsx(Wj, {}), c.jsx(Fj, {
            onAddToCart: m,
            onBuy: p
        }), c.jsx(Vj, {
            isOpen: n,
            onClose: () => r(!1),
            onConfirm: b,
            price: "R$ 56,70",
            originalPrice: "R$ 629,43"
        })]
    })
}
  , yt = g.forwardRef( ({className: e, type: t, ...n}, r) => c.jsx("input", {
    type: t,
    className: oe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
yt.displayName = "Input";
var dT = "Label"
  , Oy = g.forwardRef( (e, t) => c.jsx(ee.label, {
    ...e,
    ref: t,
    onMouseDown: n => {
        var o;
        n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
Oy.displayName = dT;
var My = Oy;
const fT = sd("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , xt = g.forwardRef( ({className: e, ...t}, n) => c.jsx(My, {
    ref: n,
    className: oe(fT(), e),
    ...t
}));
xt.displayName = My.displayName;
const Go = g.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: oe("rounded-lg border bg-card text-card-foreground shadow-sm", e),
    ...t
}));
Go.displayName = "Card";
const pT = g.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: oe("flex flex-col space-y-1.5 p-6", e),
    ...t
}));
pT.displayName = "CardHeader";
const hT = g.forwardRef( ({className: e, ...t}, n) => c.jsx("h3", {
    ref: n,
    className: oe("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
}));
hT.displayName = "CardTitle";
const mT = g.forwardRef( ({className: e, ...t}, n) => c.jsx("p", {
    ref: n,
    className: oe("text-sm text-muted-foreground", e),
    ...t
}));
mT.displayName = "CardDescription";
const gT = g.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: oe("p-6 pt-0", e),
    ...t
}));
gT.displayName = "CardContent";
const vT = g.forwardRef( ({className: e, ...t}, n) => c.jsx("div", {
    ref: n,
    className: oe("flex items-center p-6 pt-0", e),
    ...t
}));
vT.displayName = "CardFooter";
var yT = "Separator"
  , eh = "horizontal"
  , xT = ["horizontal", "vertical"]
  , Ay = g.forwardRef( (e, t) => {
    const {decorative: n, orientation: r=eh, ...o} = e
      , s = wT(r) ? r : eh
      , i = n ? {
        role: "none"
    } : {
        "aria-orientation": s === "vertical" ? s : void 0,
        role: "separator"
    };
    return c.jsx(ee.div, {
        "data-orientation": s,
        ...i,
        ...o,
        ref: t
    })
}
);
Ay.displayName = yT;
function wT(e) {
    return xT.includes(e)
}
var _y = Ay;
const Dy = g.forwardRef( ({className: e, orientation: t="horizontal", decorative: n=!0, ...r}, o) => c.jsx(_y, {
    ref: o,
    decorative: n,
    orientation: t,
    className: oe("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
    ...r
}));
Dy.displayName = _y.displayName;
const bT = () => {
    const e = AE()
      , t = Gi()
      , {toast: n} = ed()
      , {color: r, storage: o, price: s} = t.state || {
        color: "Cinza",
        storage: "64 GB",
        price: "R$ 43,71"
    }
      , [a,i] = g.useState({
        name: "",
        email: "",
        phone: "",
        cep: "",
        address: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: ""
    })
      , l = d => {
        i({
            ...a,
            [d.target.name]: d.target.value
        })
    }
      , u = d => {
        d.preventDefault(),
        n({
            title: "Pedido confirmado!",
            description: "Você receberá um e-mail com os detalhes do pedido."
        })
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [c.jsx("div", {
            className: "sticky top-0 z-50 bg-background border-b border-border p-4",
            children: c.jsxs("div", {
                className: "max-w-4xl mx-auto flex items-center gap-3",
                children: [c.jsx(Dn, {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => e(-1),
                    children: c.jsx(vb, {
                        className: "h-5 w-5"
                    })
                }), c.jsx("h1", {
                    className: "text-lg font-semibold",
                    children: "Finalizar Compra"
                })]
            })
        }), c.jsx("div", {
            className: "max-w-4xl mx-auto p-4 pb-24",
            children: c.jsxs("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: [c.jsxs("div", {
                    className: "space-y-6",
                    children: [c.jsxs(Go, {
                        className: "p-4",
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [c.jsx(nv, {
                                className: "h-5 w-5 text-primary"
                            }), c.jsx("h2", {
                                className: "font-semibold",
                                children: "Resumo do Pedido"
                            })]
                        }), c.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [c.jsxs("div", {
                                className: "flex justify-between",
                                children: [c.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Produto:"
                                }), c.jsx("span", {
                                    className: "font-medium",
                                    children: "Galaxy Tab S10 FE"
                                })]
                            }), c.jsxs("div", {
                                className: "flex justify-between",
                                children: [c.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Cor:"
                                }), c.jsx("span", {
                                    className: "font-medium",
                                    children: r
                                })]
                            }), c.jsxs("div", {
                                className: "flex justify-between",
                                children: [c.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: "Armazenamento:"
                                }), c.jsx("span", {
                                    className: "font-medium",
                                    children: o
                                })]
                            }), c.jsx(Dy, {
                                className: "my-3"
                            }), c.jsxs("div", {
                                className: "flex justify-between text-base",
                                children: [c.jsx("span", {
                                    className: "font-semibold",
                                    children: "Total:"
                                }), c.jsx("span", {
                                    className: "font-bold text-primary text-xl",
                                    children: s
                                })]
                            })]
                        })]
                    }), c.jsxs(Go, {
                        className: "p-4",
                        children: [c.jsx("h2", {
                            className: "font-semibold mb-4",
                            children: "Dados de Entrega"
                        }), c.jsxs("form", {
                            onSubmit: u,
                            className: "space-y-4",
                            children: [c.jsxs("div", {
                                className: "space-y-2",
                                children: [c.jsx(xt, {
                                    htmlFor: "name",
                                    children: "Nome Completo"
                                }), c.jsx(yt, {
                                    id: "name",
                                    name: "name",
                                    value: a.name,
                                    onChange: l,
                                    placeholder: "Seu nome completo",
                                    required: !0
                                })]
                            }), c.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "email",
                                        children: "E-mail"
                                    }), c.jsx(yt, {
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                        value: a.email,
                                        onChange: l,
                                        placeholder: "seu@email.com",
                                        required: !0
                                    })]
                                }), c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "phone",
                                        children: "Telefone"
                                    }), c.jsx(yt, {
                                        id: "phone",
                                        name: "phone",
                                        value: a.phone,
                                        onChange: l,
                                        placeholder: "(00) 00000-0000",
                                        required: !0
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "space-y-2",
                                children: [c.jsx(xt, {
                                    htmlFor: "cep",
                                    children: "CEP"
                                }), c.jsx(yt, {
                                    id: "cep",
                                    name: "cep",
                                    value: a.cep,
                                    onChange: l,
                                    placeholder: "00000-000",
                                    required: !0
                                })]
                            }), c.jsxs("div", {
                                className: "space-y-2",
                                children: [c.jsx(xt, {
                                    htmlFor: "address",
                                    children: "Endereço"
                                }), c.jsx(yt, {
                                    id: "address",
                                    name: "address",
                                    value: a.address,
                                    onChange: l,
                                    placeholder: "Rua, Avenida, etc.",
                                    required: !0
                                })]
                            }), c.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "number",
                                        children: "Número"
                                    }), c.jsx(yt, {
                                        id: "number",
                                        name: "number",
                                        value: a.number,
                                        onChange: l,
                                        placeholder: "123",
                                        required: !0
                                    })]
                                }), c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "complement",
                                        children: "Complemento"
                                    }), c.jsx(yt, {
                                        id: "complement",
                                        name: "complement",
                                        value: a.complement,
                                        onChange: l,
                                        placeholder: "Apto, Bloco..."
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "neighborhood",
                                        children: "Bairro"
                                    }), c.jsx(yt, {
                                        id: "neighborhood",
                                        name: "neighborhood",
                                        value: a.neighborhood,
                                        onChange: l,
                                        placeholder: "Seu bairro",
                                        required: !0
                                    })]
                                }), c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [c.jsx(xt, {
                                        htmlFor: "city",
                                        children: "Cidade"
                                    }), c.jsx(yt, {
                                        id: "city",
                                        name: "city",
                                        value: a.city,
                                        onChange: l,
                                        placeholder: "Sua cidade",
                                        required: !0
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "space-y-2",
                                children: [c.jsx(xt, {
                                    htmlFor: "state",
                                    children: "Estado"
                                }), c.jsx(yt, {
                                    id: "state",
                                    name: "state",
                                    value: a.state,
                                    onChange: l,
                                    placeholder: "UF",
                                    maxLength: 2,
                                    required: !0
                                })]
                            })]
                        })]
                    })]
                }), c.jsxs("div", {
                    className: "space-y-6",
                    children: [c.jsxs(Go, {
                        className: "p-4",
                        children: [c.jsxs("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [c.jsx(ev, {
                                className: "h-5 w-5 text-primary"
                            }), c.jsx("h2", {
                                className: "font-semibold",
                                children: "Pagamento"
                            })]
                        }), c.jsxs("div", {
                            className: "space-y-3",
                            children: [c.jsx(Dn, {
                                variant: "outline",
                                className: "w-full justify-start text-left h-auto p-4",
                                type: "button",
                                children: c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsx("div", {
                                        className: "font-semibold",
                                        children: "Cartão de Crédito"
                                    }), c.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Parcelamento em até 12x"
                                    })]
                                })
                            }), c.jsx(Dn, {
                                variant: "outline",
                                className: "w-full justify-start text-left h-auto p-4",
                                type: "button",
                                children: c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsx("div", {
                                        className: "font-semibold",
                                        children: "PIX"
                                    }), c.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Aprovação imediata"
                                    })]
                                })
                            }), c.jsx(Dn, {
                                variant: "outline",
                                className: "w-full justify-start text-left h-auto p-4",
                                type: "button",
                                children: c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsx("div", {
                                        className: "font-semibold",
                                        children: "Boleto Bancário"
                                    }), c.jsx("div", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Vencimento em 3 dias úteis"
                                    })]
                                })
                            })]
                        })]
                    }), c.jsxs(Go, {
                        className: "p-4 bg-success/5 border-success/20",
                        children: [c.jsx("h3", {
                            className: "font-semibold text-success mb-2",
                            children: "🎉 Oferta Especial"
                        }), c.jsxs("p", {
                            className: "text-sm text-muted-foreground",
                            children: ["Você está economizando ", c.jsx("span", {
                                className: "font-bold text-success",
                                children: "70%"
                            }), " neste produto!"]
                        })]
                    })]
                })]
            })
        }), c.jsx("div", {
            className: "fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50",
            children: c.jsx("div", {
                className: "max-w-4xl mx-auto",
                children: c.jsxs("a", {
                    href: "javascript:void(0)",
                    onClick: u,
                    className: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full bg-danger hover:bg-danger/90 text-white py-6",
                    children: ["Finalizar Pedido - ", s]
                })
            })
        })]
    })
}
  , ST = () => {
    const e = Gi();
    return g.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
            className: "text-center",
            children: [c.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), c.jsx("p", {
                className: "mb-4 text-xl text-gray-600",
                children: "Oops! Page not found"
            }), c.jsx("a", {
                href: "/",
                className: "text-blue-500 underline hover:text-blue-700",
                children: "Return to Home"
            })]
        })
    })
}
  , CT = new nE
  , ET = () => c.jsx(oE, {
    client: CT,
    children: c.jsxs(M2, {
        children: [c.jsx(pS, {}), c.jsx(HS, {}), c.jsx(JE, {
            children: c.jsxs(GE, {
                children: [c.jsx(Da, {
                    path: "/",
                    element: c.jsx(cT, {})
                }), c.jsx(Da, {
                    path: "/checkout",
                    element: c.jsx(bT, {})
                }), c.jsx(Da, {
                    path: "*",
                    element: c.jsx(ST, {})
                })]
            })
        })]
    })
});
Cg(document.getElementById("root")).render(c.jsx(ET, {}));
