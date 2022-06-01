/*!
 * Glide.js v3.5.2
 * (c) 2013-2021 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */ !function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Glide = e();
}(this, function() {
    "use strict";
    function t1(e) {
        return t1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t1(e);
    }
    function e1(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function n1(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function i1(t, e, i) {
        return e && n1(t.prototype, e), i && n1(t, i), t;
    }
    function r1(t2) {
        return r1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, r1(t2);
    }
    function o1(t3, e2) {
        return o1 = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        }, o1(t3, e2);
    }
    function s1(t4, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }(t4);
    }
    function a1(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
            } catch (t) {
                return !1;
            }
        }();
        return function() {
            var n, i = r1(t);
            if (e) {
                var o = r1(this).constructor;
                n = Reflect.construct(i, arguments, o);
            } else n = i.apply(this, arguments);
            return s1(this, n);
        };
    }
    function u1(t, e) {
        for(; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r1(t)););
        return t;
    }
    function c1() {
        return c1 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = u1(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value;
            }
        }, c1.apply(this, arguments);
    }
    var l1 = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perSwipe: "",
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        waitForTransition: !0,
        throttle: 10,
        direction: "ltr",
        peek: 0,
        cloningRatio: 1,
        breakpoints: {},
        classes: {
            swipeable: "glide--swipeable",
            dragging: "glide--dragging",
            direction: {
                ltr: "glide--ltr",
                rtl: "glide--rtl"
            },
            type: {
                slider: "glide--slider",
                carousel: "glide--carousel"
            },
            slide: {
                clone: "glide__slide--clone",
                active: "glide__slide--active"
            },
            arrow: {
                disabled: "glide__arrow--disabled"
            },
            nav: {
                active: "glide__bullet--active"
            }
        }
    };
    function f1(t) {
        console.error("[Glide warn]: ".concat(t));
    }
    function d1(t) {
        return parseInt(t);
    }
    function h1(t) {
        return "string" == typeof t;
    }
    function v1(e) {
        var n = t1(e);
        return "function" === n || "object" === n && !!e;
    }
    function p1(t) {
        return "function" == typeof t;
    }
    function m1(t) {
        return void 0 === t;
    }
    function g1(t) {
        return t.constructor === Array;
    }
    function y1(t, e, n) {
        var i = {};
        for(var r in e)p1(e[r]) ? i[r] = e[r](t, i, n) : f1("Extension must be a function");
        for(var o in i)p1(i[o].mount) && i[o].mount();
        return i;
    }
    function b(t, e, n) {
        Object.defineProperty(t, e, n);
    }
    function w(t, e) {
        var n = Object.assign({}, t, e);
        return e.hasOwnProperty("classes") && (n.classes = Object.assign({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = Object.assign({}, t.classes.direction, e.classes.direction)), e.classes.hasOwnProperty("type") && (n.classes.type = Object.assign({}, t.classes.type, e.classes.type)), e.classes.hasOwnProperty("slide") && (n.classes.slide = Object.assign({}, t.classes.slide, e.classes.slide)), e.classes.hasOwnProperty("arrow") && (n.classes.arrow = Object.assign({}, t.classes.arrow, e.classes.arrow)), e.classes.hasOwnProperty("nav") && (n.classes.nav = Object.assign({}, t.classes.nav, e.classes.nav))), e.hasOwnProperty("breakpoints") && (n.breakpoints = Object.assign({}, t.breakpoints, e.breakpoints)), n;
    }
    var _ = function() {
        function t5() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e1(this, t5), this.events = n, this.hop = n.hasOwnProperty;
        }
        return i1(t5, [
            {
                key: "on",
                value: function(t, e) {
                    if (!g1(t)) {
                        this.hop.call(this.events, t) || (this.events[t] = []);
                        var n = this.events[t].push(e) - 1;
                        return {
                            remove: function() {
                                delete this.events[t][n];
                            }
                        };
                    }
                    for(var i = 0; i < t.length; i++)this.on(t[i], e);
                }
            },
            {
                key: "emit",
                value: function(t6, e) {
                    if (g1(t6)) for(var n = 0; n < t6.length; n++)this.emit(t6[n], e);
                    else this.hop.call(this.events, t6) && this.events[t6].forEach(function(t) {
                        t(e || {});
                    });
                }
            }
        ]), t5;
    }(), k = function() {
        function t7(n) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e1(this, t7), this._c = {}, this._t = [], this._e = new _, this.disabled = !1, this.selector = n, this.settings = w(l1, i), this.index = this.settings.startAt;
        }
        return i1(t7, [
            {
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._e.emit("mount.before"), v1(t) ? this._c = y1(this, t, this._e) : f1("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
                }
            },
            {
                key: "mutate",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return g1(t) ? this._t = t : f1("You need to provide a array on `mutate()`"), this;
                }
            },
            {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.settings = w(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this;
                }
            },
            {
                key: "go",
                value: function(t) {
                    return this._c.Run.make(t), this;
                }
            },
            {
                key: "move",
                value: function(t) {
                    return this._c.Transition.disable(), this._c.Move.make(t), this;
                }
            },
            {
                key: "destroy",
                value: function() {
                    return this._e.emit("destroy"), this;
                }
            },
            {
                key: "play",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return t && (this.settings.autoplay = t), this._e.emit("play"), this;
                }
            },
            {
                key: "pause",
                value: function() {
                    return this._e.emit("pause"), this;
                }
            },
            {
                key: "disable",
                value: function() {
                    return this.disabled = !0, this;
                }
            },
            {
                key: "enable",
                value: function() {
                    return this.disabled = !1, this;
                }
            },
            {
                key: "on",
                value: function(t, e) {
                    return this._e.on(t, e), this;
                }
            },
            {
                key: "isType",
                value: function(t) {
                    return this.settings.type === t;
                }
            },
            {
                key: "settings",
                get: function() {
                    return this._o;
                },
                set: function(t) {
                    v1(t) ? this._o = t : f1("Options must be an `object` instance.");
                }
            },
            {
                key: "index",
                get: function() {
                    return this._i;
                },
                set: function(t) {
                    this._i = d1(t);
                }
            },
            {
                key: "type",
                get: function() {
                    return this.settings.type;
                }
            },
            {
                key: "disabled",
                get: function() {
                    return this._d;
                },
                set: function(t) {
                    this._d = !!t;
                }
            }
        ]), t7;
    }();
    function S() {
        return (new Date).getTime();
    }
    function H(t, e, n) {
        var i, r, o, s, a = 0;
        n || (n = {});
        var u = function() {
            a = !1 === n.leading ? 0 : S(), i = null, s = t.apply(r, o), i || (r = o = null);
        }, c2 = function() {
            var c = S();
            a || !1 !== n.leading || (a = c);
            var l = e - (c - a);
            return r = this, o = arguments, l <= 0 || l > e ? (i && (clearTimeout(i), i = null), a = c, s = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(u, l)), s;
        };
        return c2.cancel = function() {
            clearTimeout(i), a = 0, i = r = o = null;
        }, c2;
    }
    var O = {
        ltr: [
            "marginLeft",
            "marginRight"
        ],
        rtl: [
            "marginRight",
            "marginLeft"
        ]
    };
    function T(t) {
        if (t && t.parentNode) {
            for(var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
        return [];
    }
    function x(t) {
        return !!(t && t instanceof window.HTMLElement);
    }
    var A = '[data-glide-el="track"]';
    var j = function() {
        function t8() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e1(this, t8), this.listeners = n;
        }
        return i1(t8, [
            {
                key: "on",
                value: function(t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    h1(t) && (t = [
                        t
                    ]);
                    for(var r = 0; r < t.length; r++)this.listeners[t[r]] = n, e.addEventListener(t[r], this.listeners[t[r]], i);
                }
            },
            {
                key: "off",
                value: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    h1(t) && (t = [
                        t
                    ]);
                    for(var i = 0; i < t.length; i++)e.removeEventListener(t[i], this.listeners[t[i]], n);
                }
            },
            {
                key: "destroy",
                value: function() {
                    delete this.listeners;
                }
            }
        ]), t8;
    }();
    var R = [
        "ltr",
        "rtl"
    ], P = {
        ">": "<",
        "<": ">",
        "=": "="
    };
    function C(t9, e) {
        return {
            modify: function(t) {
                return e.Direction.is("rtl") ? -t : t;
            }
        };
    }
    function M(t10, e) {
        return {
            modify: function(t) {
                var n = Math.floor(t / e.Sizes.slideWidth);
                return t + e.Gaps.value * n;
            }
        };
    }
    function z(t11, e) {
        return {
            modify: function(t) {
                return t + e.Clones.grow / 2;
            }
        };
    }
    function E(t, e) {
        return {
            modify: function(n) {
                if (t.settings.focusAt >= 0) {
                    var i = e.Peek.value;
                    return v1(i) ? n - i.before : n - i;
                }
                return n;
            }
        };
    }
    function L(t, e) {
        return {
            modify: function(n) {
                var i = e.Gaps.value, r = e.Sizes.width, o = t.settings.focusAt, s = e.Sizes.slideWidth;
                return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o;
            }
        };
    }
    var D = !1;
    try {
        var B = Object.defineProperty({}, "passive", {
            get: function() {
                D = !0;
            }
        });
        window.addEventListener("testPassive", null, B), window.removeEventListener("testPassive", null, B);
    } catch (t12) {}
    var W = D, q = [
        "touchstart",
        "mousedown"
    ], I = [
        "touchmove",
        "mousemove"
    ], V = [
        "touchend",
        "touchcancel",
        "mouseup",
        "mouseleave"
    ], G = [
        "mousedown",
        "mousemove",
        "mouseup",
        "mouseleave"
    ];
    var F = '[data-glide-el^="controls"]', N = "".concat(F, ' [data-glide-dir*="<"]'), Y = "".concat(F, ' [data-glide-dir*=">"]');
    function X(t13) {
        var e;
        return v1(t13) ? (e = t13, Object.keys(e).sort().reduce(function(t, n) {
            return t[n] = e[n], t[n], t;
        }, {})) : (f1("Breakpoints option must be an object"), {});
    }
    var K = {
        Html: function(t14, e3, n) {
            var i = {
                mount: function() {
                    this.root = t14.selector, this.track = this.root.querySelector(A), this.collectSlides();
                },
                collectSlides: function() {
                    this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(e) {
                        return !e.classList.contains(t14.settings.classes.slide.clone);
                    });
                }
            };
            return b(i, "root", {
                get: function() {
                    return i._r;
                },
                set: function(t) {
                    h1(t) && (t = document.querySelector(t)), x(t) ? i._r = t : f1("Root element must be a existing Html node");
                }
            }), b(i, "track", {
                get: function() {
                    return i._t;
                },
                set: function(t) {
                    x(t) ? i._t = t : f1("Could not find track element. Please use ".concat(A, " attribute."));
                }
            }), b(i, "wrapper", {
                get: function() {
                    return i.track.children[0];
                }
            }), n.on("update", function() {
                i.collectSlides();
            }), i;
        },
        Translate: function(t15, e4, n2) {
            var i2 = {
                set: function(n3) {
                    var i3 = (function(t, e, n) {
                        var i = [
                            M,
                            z,
                            E,
                            L
                        ].concat(t._t, [
                            C
                        ]);
                        return {
                            mutate: function(r) {
                                for(var o = 0; o < i.length; o++){
                                    var s = i[o];
                                    p1(s) && p1(s().modify) ? r = s(t, e, n).modify(r) : f1("Transformer should be a function that returns an object with `modify()` method");
                                }
                                return r;
                            }
                        };
                    })(t15, e4).mutate(n3), r2 = "translate3d(".concat(-1 * i3, "px, 0px, 0px)");
                    e4.Html.wrapper.style.mozTransform = r2, e4.Html.wrapper.style.webkitTransform = r2, e4.Html.wrapper.style.transform = r2;
                },
                remove: function() {
                    e4.Html.wrapper.style.transform = "";
                },
                getStartIndex: function() {
                    var n = e4.Sizes.length, i = t15.index, r = t15.settings.perView;
                    return e4.Run.isOffset(">") || e4.Run.isOffset("|>") ? n + (i - r) : (i + r) % n;
                },
                getTravelDistance: function() {
                    var n = e4.Sizes.slideWidth * t15.settings.perView;
                    return e4.Run.isOffset(">") || e4.Run.isOffset("|>") ? -1 * n : n;
                }
            };
            return n2.on("move", function(r) {
                if (!t15.isType("carousel") || !e4.Run.isOffset()) return i2.set(r.movement);
                e4.Transition.after(function() {
                    n2.emit("translate.jump"), i2.set(e4.Sizes.slideWidth * t15.index);
                });
                var o = e4.Sizes.slideWidth * e4.Translate.getStartIndex();
                return i2.set(o - e4.Translate.getTravelDistance());
            }), n2.on("destroy", function() {
                i2.remove();
            }), i2;
        },
        Transition: function(t16, e5, n4) {
            var i = !1, r = {
                compose: function(e) {
                    var n = t16.settings;
                    return i ? "".concat(e, " 0ms ").concat(n.animationTimingFunc) : "".concat(e, " ").concat(this.duration, "ms ").concat(n.animationTimingFunc);
                },
                set: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                    e5.Html.wrapper.style.transition = this.compose(t);
                },
                remove: function() {
                    e5.Html.wrapper.style.transition = "";
                },
                after: function(t) {
                    setTimeout(function() {
                        t();
                    }, this.duration);
                },
                enable: function() {
                    i = !1, this.set();
                },
                disable: function() {
                    i = !0, this.set();
                }
            };
            return b(r, "duration", {
                get: function() {
                    var n = t16.settings;
                    return t16.isType("slider") && e5.Run.offset ? n.rewindDuration : n.animationDuration;
                }
            }), n4.on("move", function() {
                r.set();
            }), n4.on([
                "build.before",
                "resize",
                "translate.jump"
            ], function() {
                r.disable();
            }), n4.on("run", function() {
                r.enable();
            }), n4.on("destroy", function() {
                r.remove();
            }), r;
        },
        Direction: function(t17, e6, n) {
            var i = {
                mount: function() {
                    this.value = t17.settings.direction;
                },
                resolve: function(t) {
                    var e = t.slice(0, 1);
                    return this.is("rtl") ? t.split(e).join(P[e]) : t;
                },
                is: function(t) {
                    return this.value === t;
                },
                addClass: function() {
                    e6.Html.root.classList.add(t17.settings.classes.direction[this.value]);
                },
                removeClass: function() {
                    e6.Html.root.classList.remove(t17.settings.classes.direction[this.value]);
                }
            };
            return b(i, "value", {
                get: function() {
                    return i._v;
                },
                set: function(t) {
                    R.indexOf(t) > -1 ? i._v = t : f1("Direction value must be `ltr` or `rtl`");
                }
            }), n.on([
                "destroy",
                "update"
            ], function() {
                i.removeClass();
            }), n.on("update", function() {
                i.mount();
            }), n.on([
                "build.before",
                "update"
            ], function() {
                i.addClass();
            }), i;
        },
        Peek: function(t18, e7, n5) {
            var i = {
                mount: function() {
                    this.value = t18.settings.peek;
                }
            };
            return b(i, "value", {
                get: function() {
                    return i._v;
                },
                set: function(t) {
                    v1(t) ? (t.before = d1(t.before), t.after = d1(t.after)) : t = d1(t), i._v = t;
                }
            }), b(i, "reductor", {
                get: function() {
                    var e = i.value, n = t18.settings.perView;
                    return v1(e) ? e.before / n + e.after / n : 2 * e / n;
                }
            }), n5.on([
                "resize",
                "update"
            ], function() {
                i.mount();
            }), i;
        },
        Sizes: function(t19, e, n6) {
            var i4 = {
                setupSlides: function() {
                    for(var t = "".concat(this.slideWidth, "px"), n = e.Html.slides, i = 0; i < n.length; i++)n[i].style.width = t;
                },
                setupWrapper: function() {
                    e.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
                },
                remove: function() {
                    for(var t = e.Html.slides, n = 0; n < t.length; n++)t[n].style.width = "";
                    e.Html.wrapper.style.width = "";
                }
            };
            return b(i4, "length", {
                get: function() {
                    return e.Html.slides.length;
                }
            }), b(i4, "width", {
                get: function() {
                    return e.Html.track.offsetWidth;
                }
            }), b(i4, "wrapperSize", {
                get: function() {
                    return i4.slideWidth * i4.length + e.Gaps.grow + e.Clones.grow;
                }
            }), b(i4, "slideWidth", {
                get: function() {
                    return i4.width / t19.settings.perView - e.Peek.reductor - e.Gaps.reductor;
                }
            }), n6.on([
                "build.before",
                "resize",
                "update"
            ], function() {
                i4.setupSlides(), i4.setupWrapper();
            }), n6.on("destroy", function() {
                i4.remove();
            }), i4;
        },
        Gaps: function(t20, e8, n7) {
            var i5 = {
                apply: function(t) {
                    for(var n = 0, i = t.length; n < i; n++){
                        var r = t[n].style, o = e8.Direction.value;
                        r[O[o][0]] = 0 !== n ? "".concat(this.value / 2, "px") : "", n !== t.length - 1 ? r[O[o][1]] = "".concat(this.value / 2, "px") : r[O[o][1]] = "";
                    }
                },
                remove: function(t) {
                    for(var e = 0, n = t.length; e < n; e++){
                        var i = t[e].style;
                        i.marginLeft = "", i.marginRight = "";
                    }
                }
            };
            return b(i5, "value", {
                get: function() {
                    return d1(t20.settings.gap);
                }
            }), b(i5, "grow", {
                get: function() {
                    return i5.value * e8.Sizes.length;
                }
            }), b(i5, "reductor", {
                get: function() {
                    var e = t20.settings.perView;
                    return i5.value * (e - 1) / e;
                }
            }), n7.on([
                "build.after",
                "update"
            ], H(function() {
                i5.apply(e8.Html.wrapper.children);
            }, 30)), n7.on("destroy", function() {
                i5.remove(e8.Html.wrapper.children);
            }), i5;
        },
        Move: function(t21, e, n8) {
            var i6 = {
                mount: function() {
                    this._o = 0;
                },
                make: function() {
                    var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.offset = i, n8.emit("move", {
                        movement: this.value
                    }), e.Transition.after(function() {
                        n8.emit("move.after", {
                            movement: t.value
                        });
                    });
                }
            };
            return b(i6, "offset", {
                get: function() {
                    return i6._o;
                },
                set: function(t) {
                    i6._o = m1(t) ? 0 : d1(t);
                }
            }), b(i6, "translate", {
                get: function() {
                    return e.Sizes.slideWidth * t21.index;
                }
            }), b(i6, "value", {
                get: function() {
                    var t = this.offset, n = this.translate;
                    return e.Direction.is("rtl") ? n + t : n - t;
                }
            }), n8.on([
                "build.before",
                "run"
            ], function() {
                i6.make();
            }), i6;
        },
        Clones: function(t22, e, n9) {
            var i7 = {
                mount: function() {
                    this.items = [], t22.isType("carousel") && (this.items = this.collect());
                },
                collect: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t22.settings, o = r.perView, s = r.classes, a = r.cloningRatio;
                    if (0 !== i.length) for(var u = +!!t22.settings.peek, c = o + u + Math.round(o / 2), l = i.slice(0, c).reverse(), f = i.slice(-1 * c), d = 0; d < Math.max(a, Math.floor(o / i.length)); d++){
                        for(var h = 0; h < l.length; h++){
                            var v = l[h].cloneNode(!0);
                            v.classList.add(s.slide.clone), n.push(v);
                        }
                        for(var p = 0; p < f.length; p++){
                            var m = f[p].cloneNode(!0);
                            m.classList.add(s.slide.clone), n.unshift(m);
                        }
                    }
                    return n;
                },
                append: function() {
                    for(var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), a = t.slice(-1 * o).reverse(), u = "".concat(e.Sizes.slideWidth, "px"), c = 0; c < a.length; c++)i.appendChild(a[c]);
                    for(var l = 0; l < s.length; l++)i.insertBefore(s[l], r[0]);
                    for(var f = 0; f < t.length; f++)t[f].style.width = u;
                },
                remove: function() {
                    for(var t = this.items, n = 0; n < t.length; n++)e.Html.wrapper.removeChild(t[n]);
                }
            };
            return b(i7, "grow", {
                get: function() {
                    return (e.Sizes.slideWidth + e.Gaps.value) * i7.items.length;
                }
            }), n9.on("update", function() {
                i7.remove(), i7.mount(), i7.append();
            }), n9.on("build.before", function() {
                t22.isType("carousel") && i7.append();
            }), n9.on("destroy", function() {
                i7.remove();
            }), i7;
        },
        Resize: function(t, e, n) {
            var i = new j, r = {
                mount: function() {
                    this.bind();
                },
                bind: function() {
                    i.on("resize", window, H(function() {
                        n.emit("resize");
                    }, t.settings.throttle));
                },
                unbind: function() {
                    i.off("resize", window);
                }
            };
            return n.on("destroy", function() {
                r.unbind(), i.destroy();
            }), r;
        },
        Build: function(t23, e, n10) {
            var i8 = {
                mount: function() {
                    n10.emit("build.before"), this.typeClass(), this.activeClass(), n10.emit("build.after");
                },
                typeClass: function() {
                    e.Html.root.classList.add(t23.settings.classes.type[t23.settings.type]);
                },
                activeClass: function() {
                    var n = t23.settings.classes, i = e.Html.slides[t23.index];
                    i && (i.classList.add(n.slide.active), T(i).forEach(function(t) {
                        t.classList.remove(n.slide.active);
                    }));
                },
                removeClasses: function() {
                    var n = t23.settings.classes, i = n.type, r = n.slide;
                    e.Html.root.classList.remove(i[t23.settings.type]), e.Html.slides.forEach(function(t) {
                        t.classList.remove(r.active);
                    });
                }
            };
            return n10.on([
                "destroy",
                "update"
            ], function() {
                i8.removeClasses();
            }), n10.on([
                "resize",
                "update"
            ], function() {
                i8.mount();
            }), n10.on("move.after", function() {
                i8.activeClass();
            }), i8;
        },
        Run: function(t24, e9, n11) {
            var i9 = {
                mount: function() {
                    this._o = !1;
                },
                make: function(i) {
                    var r = this;
                    t24.disabled || (!t24.settings.waitForTransition || t24.disable(), this.move = i, n11.emit("run.before", this.move), this.calculate(), n11.emit("run", this.move), e9.Transition.after(function() {
                        r.isStart() && n11.emit("run.start", r.move), r.isEnd() && n11.emit("run.end", r.move), r.isOffset() && (r._o = !1, n11.emit("run.offset", r.move)), n11.emit("run.after", r.move), t24.enable();
                    }));
                },
                calculate: function() {
                    var e10 = this.move, n12 = this.length, r3 = e10.steps, o = e10.direction, s = 1;
                    if ("=" === o) return t24.settings.bound && d1(r3) > n12 ? void (t24.index = n12) : void (t24.index = r3);
                    if (">" !== o || ">" !== r3) {
                        if ("<" !== o || "<" !== r3) {
                            if ("|" === o && (s = t24.settings.perView || 1), ">" === o || "|" === o && ">" === r3) {
                                var a = function(e) {
                                    var n = t24.index;
                                    if (t24.isType("carousel")) return n + e;
                                    return n + (e - n % e);
                                }(s);
                                return a > n12 && (this._o = !0), void (t24.index = function(e, n) {
                                    var r = i9.length;
                                    if (e <= r) return e;
                                    if (t24.isType("carousel")) return e - (r + 1);
                                    if (t24.settings.rewind) return i9.isBound() && !i9.isEnd() ? r : 0;
                                    if (i9.isBound()) return r;
                                    return Math.floor(r / n) * n;
                                }(a, s));
                            }
                            if ("<" === o || "|" === o && "<" === r3) {
                                var u = function(e) {
                                    var n = t24.index;
                                    if (t24.isType("carousel")) return n - e;
                                    return (Math.ceil(n / e) - 1) * e;
                                }(s);
                                return u < 0 && (this._o = !0), void (t24.index = function(e, n) {
                                    var r = i9.length;
                                    if (e >= 0) return e;
                                    if (t24.isType("carousel")) return e + (r + 1);
                                    if (t24.settings.rewind) return i9.isBound() && i9.isStart() ? r : Math.floor(r / n) * n;
                                    return 0;
                                }(u, s));
                            }
                            f1("Invalid direction pattern [".concat(o).concat(r3, "] has been used"));
                        } else t24.index = 0;
                    } else t24.index = n12;
                },
                isStart: function() {
                    return t24.index <= 0;
                },
                isEnd: function() {
                    return t24.index >= this.length;
                },
                isOffset: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    return t ? !!this._o && ("|>" === t ? "|" === this.move.direction && ">" === this.move.steps : "|<" === t ? "|" === this.move.direction && "<" === this.move.steps : this.move.direction === t) : this._o;
                },
                isBound: function() {
                    return t24.isType("slider") && "center" !== t24.settings.focusAt && t24.settings.bound;
                }
            };
            return b(i9, "move", {
                get: function() {
                    return this._m;
                },
                set: function(t) {
                    var e = t.substr(1);
                    this._m = {
                        direction: t.substr(0, 1),
                        steps: e ? d1(e) ? d1(e) : e : 0
                    };
                }
            }), b(i9, "length", {
                get: function() {
                    var n = t24.settings, i = e9.Html.slides.length;
                    return this.isBound() ? i - 1 - (d1(n.perView) - 1) + d1(n.focusAt) : i - 1;
                }
            }), b(i9, "offset", {
                get: function() {
                    return this._o;
                }
            }), i9;
        },
        Swipe: function(t25, e11, n13) {
            var i10 = new j, r4 = 0, o2 = 0, s2 = 0, a2 = !1, u2 = !!W && {
                passive: !0
            }, c3 = {
                mount: function() {
                    this.bindSwipeStart();
                },
                start: function(e) {
                    if (!a2 && !t25.disabled) {
                        this.disable();
                        var i = this.touches(e);
                        r4 = null, o2 = d1(i.pageX), s2 = d1(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n13.emit("swipe.start");
                    }
                },
                move: function(i) {
                    if (!t25.disabled) {
                        var a = t25.settings, u = a.touchAngle, c = a.touchRatio, l = a.classes, f = this.touches(i), h = d1(f.pageX) - o2, v = d1(f.pageY) - s2, p = Math.abs(h << 2), m = Math.abs(v << 2), g = Math.sqrt(p + m), y = Math.sqrt(m);
                        if (!(180 * (r4 = Math.asin(y / g)) / Math.PI < u)) return !1;
                        i.stopPropagation(), e11.Move.make(h * parseFloat(c)), e11.Html.root.classList.add(l.dragging), n13.emit("swipe.move");
                    }
                },
                end: function(i) {
                    if (!t25.disabled) {
                        var s = t25.settings, a = s.perSwipe, u = s.touchAngle, c = s.classes, l = this.touches(i), f = this.threshold(i), d = l.pageX - o2, h = 180 * r4 / Math.PI;
                        this.enable(), d > f && h < u ? e11.Run.make(e11.Direction.resolve("".concat(a, "<"))) : d < -f && h < u ? e11.Run.make(e11.Direction.resolve("".concat(a, ">"))) : e11.Move.make(), e11.Html.root.classList.remove(c.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n13.emit("swipe.end");
                    }
                },
                bindSwipeStart: function() {
                    var n = this, r = t25.settings, o = r.swipeThreshold, s = r.dragThreshold;
                    o && i10.on(q[0], e11.Html.wrapper, function(t) {
                        n.start(t);
                    }, u2), s && i10.on(q[1], e11.Html.wrapper, function(t) {
                        n.start(t);
                    }, u2);
                },
                unbindSwipeStart: function() {
                    i10.off(q[0], e11.Html.wrapper, u2), i10.off(q[1], e11.Html.wrapper, u2);
                },
                bindSwipeMove: function() {
                    var n = this;
                    i10.on(I, e11.Html.wrapper, H(function(t) {
                        n.move(t);
                    }, t25.settings.throttle), u2);
                },
                unbindSwipeMove: function() {
                    i10.off(I, e11.Html.wrapper, u2);
                },
                bindSwipeEnd: function() {
                    var t = this;
                    i10.on(V, e11.Html.wrapper, function(e) {
                        t.end(e);
                    });
                },
                unbindSwipeEnd: function() {
                    i10.off(V, e11.Html.wrapper);
                },
                touches: function(t) {
                    return G.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0];
                },
                threshold: function(e) {
                    var n = t25.settings;
                    return G.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold;
                },
                enable: function() {
                    return a2 = !1, e11.Transition.enable(), this;
                },
                disable: function() {
                    return a2 = !0, e11.Transition.disable(), this;
                }
            };
            return n13.on("build.after", function() {
                e11.Html.root.classList.add(t25.settings.classes.swipeable);
            }), n13.on("destroy", function() {
                c3.unbindSwipeStart(), c3.unbindSwipeMove(), c3.unbindSwipeEnd(), i10.destroy();
            }), c3;
        },
        Images: function(t26, e, n) {
            var i = new j, r = {
                mount: function() {
                    this.bind();
                },
                bind: function() {
                    i.on("dragstart", e.Html.wrapper, this.dragstart);
                },
                unbind: function() {
                    i.off("dragstart", e.Html.wrapper);
                },
                dragstart: function(t) {
                    t.preventDefault();
                }
            };
            return n.on("destroy", function() {
                r.unbind(), i.destroy();
            }), r;
        },
        Anchors: function(t27, e, n) {
            var i = new j, r = !1, o = !1, s = {
                mount: function() {
                    this._a = e.Html.wrapper.querySelectorAll("a"), this.bind();
                },
                bind: function() {
                    i.on("click", e.Html.wrapper, this.click);
                },
                unbind: function() {
                    i.off("click", e.Html.wrapper);
                },
                click: function(t) {
                    o && (t.stopPropagation(), t.preventDefault());
                },
                detach: function() {
                    if (o = !0, !r) {
                        for(var t = 0; t < this.items.length; t++)this.items[t].draggable = !1;
                        r = !0;
                    }
                    return this;
                },
                attach: function() {
                    if (o = !1, r) {
                        for(var t = 0; t < this.items.length; t++)this.items[t].draggable = !0;
                        r = !1;
                    }
                    return this;
                }
            };
            return b(s, "items", {
                get: function() {
                    return s._a;
                }
            }), n.on("swipe.move", function() {
                s.detach();
            }), n.on("swipe.end", function() {
                e.Transition.after(function() {
                    s.attach();
                });
            }), n.on("destroy", function() {
                s.attach(), s.unbind(), i.destroy();
            }), s;
        },
        Controls: function(t28, e12, n14) {
            var i11 = new j, r5 = !!W && {
                passive: !0
            }, o = {
                mount: function() {
                    this._n = e12.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e12.Html.root.querySelectorAll(F), this._arrowControls = {
                        previous: e12.Html.root.querySelectorAll(N),
                        next: e12.Html.root.querySelectorAll(Y)
                    }, this.addBindings();
                },
                setActive: function() {
                    for(var t = 0; t < this._n.length; t++)this.addClass(this._n[t].children);
                },
                removeActive: function() {
                    for(var t = 0; t < this._n.length; t++)this.removeClass(this._n[t].children);
                },
                addClass: function(e) {
                    var n = t28.settings, i = e[t28.index];
                    i && i && (i.classList.add(n.classes.nav.active), T(i).forEach(function(t) {
                        t.classList.remove(n.classes.nav.active);
                    }));
                },
                removeClass: function(e) {
                    var n = e[t28.index];
                    n && n.classList.remove(t28.settings.classes.nav.active);
                },
                setArrowState: function() {
                    if (!t28.settings.rewind) {
                        var n = o._arrowControls.next, i = o._arrowControls.previous;
                        this.resetArrowState(n, i), 0 === t28.index && this.disableArrow(i), t28.index === e12.Run.length && this.disableArrow(n);
                    }
                },
                resetArrowState: function() {
                    for(var e = t28.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++)i[r] = arguments[r];
                    i.forEach(function(t29) {
                        t29.forEach(function(t) {
                            t.classList.remove(e.classes.arrow.disabled);
                        });
                    });
                },
                disableArrow: function() {
                    for(var e = t28.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++)i[r] = arguments[r];
                    i.forEach(function(t30) {
                        t30.forEach(function(t) {
                            t.classList.add(e.classes.arrow.disabled);
                        });
                    });
                },
                addBindings: function() {
                    for(var t = 0; t < this._c.length; t++)this.bind(this._c[t].children);
                },
                removeBindings: function() {
                    for(var t = 0; t < this._c.length; t++)this.unbind(this._c[t].children);
                },
                bind: function(t) {
                    for(var e = 0; e < t.length; e++)i11.on("click", t[e], this.click), i11.on("touchstart", t[e], this.click, r5);
                },
                unbind: function(t) {
                    for(var e = 0; e < t.length; e++)i11.off([
                        "click",
                        "touchstart"
                    ], t[e]);
                },
                click: function(t) {
                    W || "touchstart" !== t.type || t.preventDefault();
                    var n = t.currentTarget.getAttribute("data-glide-dir");
                    e12.Run.make(e12.Direction.resolve(n));
                }
            };
            return b(o, "items", {
                get: function() {
                    return o._c;
                }
            }), n14.on([
                "mount.after",
                "move.after"
            ], function() {
                o.setActive();
            }), n14.on([
                "mount.after",
                "run"
            ], function() {
                o.setArrowState();
            }), n14.on("destroy", function() {
                o.removeBindings(), o.removeActive(), i11.destroy();
            }), o;
        },
        Keyboard: function(t, e, n15) {
            var i12 = new j, r = {
                mount: function() {
                    t.settings.keyboard && this.bind();
                },
                bind: function() {
                    i12.on("keyup", document, this.press);
                },
                unbind: function() {
                    i12.off("keyup", document);
                },
                press: function(n) {
                    var i = t.settings.perSwipe;
                    39 === n.keyCode && e.Run.make(e.Direction.resolve("".concat(i, ">"))), 37 === n.keyCode && e.Run.make(e.Direction.resolve("".concat(i, "<")));
                }
            };
            return n15.on([
                "destroy",
                "update"
            ], function() {
                r.unbind();
            }), n15.on("update", function() {
                r.mount();
            }), n15.on("destroy", function() {
                i12.destroy();
            }), r;
        },
        Autoplay: function(t31, e, n16) {
            var i13 = new j, r = {
                mount: function() {
                    this.enable(), this.start(), t31.settings.hoverpause && this.bind();
                },
                enable: function() {
                    this._e = !0;
                },
                disable: function() {
                    this._e = !1;
                },
                start: function() {
                    var i = this;
                    this._e && (this.enable(), t31.settings.autoplay && m1(this._i) && (this._i = setInterval(function() {
                        i.stop(), e.Run.make(">"), i.start(), n16.emit("autoplay");
                    }, this.time)));
                },
                stop: function() {
                    this._i = clearInterval(this._i);
                },
                bind: function() {
                    var t = this;
                    i13.on("mouseover", e.Html.root, function() {
                        t._e && t.stop();
                    }), i13.on("mouseout", e.Html.root, function() {
                        t._e && t.start();
                    });
                },
                unbind: function() {
                    i13.off([
                        "mouseover",
                        "mouseout"
                    ], e.Html.root);
                }
            };
            return b(r, "time", {
                get: function() {
                    var n = e.Html.slides[t31.index].getAttribute("data-glide-autoplay");
                    return d1(n || t31.settings.autoplay);
                }
            }), n16.on([
                "destroy",
                "update"
            ], function() {
                r.unbind();
            }), n16.on([
                "run.before",
                "swipe.start",
                "update"
            ], function() {
                r.stop();
            }), n16.on([
                "pause",
                "destroy"
            ], function() {
                r.disable(), r.stop();
            }), n16.on([
                "run.after",
                "swipe.end"
            ], function() {
                r.start();
            }), n16.on([
                "play"
            ], function() {
                r.enable(), r.start();
            }), n16.on("update", function() {
                r.mount();
            }), n16.on("destroy", function() {
                i13.destroy();
            }), r;
        },
        Breakpoints: function(t32, e13, n) {
            var i = new j, r = t32.settings, o = X(r.breakpoints), s = Object.assign({}, r), a = {
                match: function(t) {
                    if (void 0 !== window.matchMedia) {
                        for(var e in t)if (t.hasOwnProperty(e) && window.matchMedia("(max-width: ".concat(e, "px)")).matches) return t[e];
                    }
                    return s;
                }
            };
            return Object.assign(r, a.match(o)), i.on("resize", window, H(function() {
                t32.settings = w(r, a.match(o));
            }, t32.settings.throttle)), n.on("update", function() {
                o = X(o), s = Object.assign({}, r);
            }), n.on("destroy", function() {
                i.off("resize", window);
            }), a;
        }
    }, J = function(t33) {
        !function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o1(t, e);
        }(s, t33);
        var n = a1(s);
        function s() {
            return e1(this, s), n.apply(this, arguments);
        }
        return i1(s, [
            {
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return c1(r1(s.prototype), "mount", this).call(this, Object.assign({}, K, t));
                }
            }
        ]), s;
    }(k);
    return J;
});

//# sourceMappingURL=index.ecb2644b.js.map
