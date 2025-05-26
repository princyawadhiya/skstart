if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    var i = [],
        n = t.document,
        o = i.slice,
        s = i.concat,
        r = i.push,
        a = i.indexOf,
        l = {},
        c = l.toString,
        h = l.hasOwnProperty,
        d = {},
        u = "1.12.4",
        p = function(t, e) {
            return new p.fn.init(t, e)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        v = function(t, e) {
            return e.toUpperCase()
        };

    function y(t) {
        var e = !!t && "length" in t && t.length,
            i = p.type(t);
        return "function" !== i && !p.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    p.fn = p.prototype = {
        jquery: u,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this)
        },
        pushStack: function(t) {
            var e = p.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return p.each(this, t)
        },
        map: function(t) {
            return this.pushStack(p.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: i.sort,
        splice: i.splice
    }, p.extend = p.fn.extend = function() {
        var t, e, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || p.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (n in o) t = r[n], r !== (i = o[n]) && (c && i && (p.isPlainObject(i) || (e = p.isArray(i))) ? (e ? (e = !1, s = t && p.isArray(t) ? t : []) : s = t && p.isPlainObject(t) ? t : {}, r[n] = p.extend(c, s, i)) : void 0 !== i && (r[n] = i));
        return r
    }, p.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === p.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === p.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !p.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== p.type(t) || t.nodeType || p.isWindow(t)) return !1;
            try {
                if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!d.ownFirst)
                for (e in t) return h.call(t, e);
            for (e in t);
            return void 0 === e || h.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && p.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, n = 0;
            if (y(t))
                for (i = t.length; i > n && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(f, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (y(Object(t)) ? p.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)), i
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (a) return a.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
            if (i != i)
                for (; void 0 !== e[n];) t[o++] = e[n++];
            return t.length = o, t
        },
        grep: function(t, e, i) {
            for (var n = [], o = 0, s = t.length, r = !i; s > o; o++) !e(t[o], o) !== r && n.push(t[o]);
            return n
        },
        map: function(t, e, i) {
            var n, o, r = 0,
                a = [];
            if (y(t))
                for (n = t.length; n > r; r++) null != (o = e(t[r], r, i)) && a.push(o);
            else
                for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), p.isFunction(t) ? (i = o.call(arguments, 2), (n = function() {
                return t.apply(e || this, i.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || p.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: d
    }), "function" == typeof Symbol && (p.fn[Symbol.iterator] = i[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function(t) {
        var e, i, n, o, s, r, a, l, c, h, d, u, p, f, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = t.document,
            x = 0,
            C = 0,
            T = st(),
            $ = st(),
            E = st(),
            S = function(t, e) {
                return t === e && (d = !0), 0
            },
            k = 1 << 31,
            A = {}.hasOwnProperty,
            O = [],
            L = O.pop,
            P = O.push,
            D = O.push,
            N = O.slice,
            I = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = "\\[" + z + "*(" + H + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + z + "*\\]",
            M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            W = new RegExp(z + "+", "g"),
            q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            B = new RegExp("^" + z + "*," + z + "*"),
            F = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            U = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
            Q = new RegExp(M),
            V = new RegExp("^" + H + "$"),
            G = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            tt = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
            it = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            nt = function() {
                u()
            };
        try {
            D.apply(O = N.call(_.childNodes), _.childNodes), O[_.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: O.length ? function(t, e) {
                    P.apply(t, N.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, n, o) {
            var s, a, c, h, d, f, v, y, x = e && e.ownerDocument,
                C = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return n;
            if (!o && ((e ? e.ownerDocument || e : _) !== p && u(e), e = e || p, g)) {
                if (11 !== C && (f = K.exec(t)))
                    if (s = f[1]) {
                        if (9 === C) {
                            if (!(c = e.getElementById(s))) return n;
                            if (c.id === s) return n.push(c), n
                        } else if (x && (c = x.getElementById(s)) && b(e, c) && c.id === s) return n.push(c), n
                    } else {
                        if (f[2]) return D.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = f[3]) && i.getElementsByClassName && e.getElementsByClassName) return D.apply(n, e.getElementsByClassName(s)), n
                    }
                if (i.qsa && !E[t + " "] && (!m || !m.test(t))) {
                    if (1 !== C) x = e, y = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((h = e.getAttribute("id")) ? h = h.replace(tt, "\\$&") : e.setAttribute("id", h = w), a = (v = r(t)).length, d = V.test(h) ? "#" + h : "[id='" + h + "']"; a--;) v[a] = d + " " + gt(v[a]);
                        y = v.join(","), x = Z.test(t) && pt(e.parentNode) || e
                    }
                    if (y) try {
                        return D.apply(n, x.querySelectorAll(y)), n
                    } catch (t) {} finally {
                        h === w && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(q, "$1"), e, n, o)
        }

        function st() {
            var t = [];
            return function e(i, o) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
            }
        }

        function rt(t) {
            return t[w] = !0, t
        }

        function at(t) {
            var e = p.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function lt(t, e) {
            for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
        }

        function ct(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || k) - (~t.sourceIndex || k);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ht(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function dt(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function ut(t) {
            return rt(function(e) {
                return e = +e, rt(function(i, n) {
                    for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function pt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in i = ot.support = {}, s = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, u = ot.setDocument = function(t) {
                var e, o, r = t ? t.ownerDocument || t : _;
                return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, g = !s(p), (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = at(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), i.getElementsByTagName = at(function(t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                }), i.getElementsByClassName = J.test(p.getElementsByClassName), i.getById = at(function(t) {
                    return f.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                }), i.getById ? (n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete n.find.ID, n.filter.ID = function(t) {
                    var e = t.replace(et, it);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
                }, v = [], m = [], (i.qsa = J.test(p.querySelectorAll)) && (at(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + z + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), at(function(t) {
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + z + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                })), (i.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(t) {
                    i.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", M)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(f.compareDocumentPosition), b = e || J.test(f.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, S = e ? function(t, e) {
                    if (t === e) return d = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === _ && b(_, t) ? -1 : e === p || e.ownerDocument === _ && b(_, e) ? 1 : h ? I(h, t) - I(h, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return d = !0, 0;
                    var i, n = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        r = [t],
                        a = [e];
                    if (!o || !s) return t === p ? -1 : e === p ? 1 : o ? -1 : s ? 1 : h ? I(h, t) - I(h, e) : 0;
                    if (o === s) return ct(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? ct(r[n], a[n]) : r[n] === _ ? -1 : a[n] === _ ? 1 : 0
                }, p) : p
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && u(t), e = e.replace(U, "='$1']"), i.matchesSelector && g && !E[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                    var n = y.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return ot(e, p, null, [t]).length > 0
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && u(t), b(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== p && u(t);
                var o = n.attrHandle[e.toLowerCase()],
                    s = o && A.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                return void 0 !== s ? s : i.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, n = [],
                    o = 0,
                    s = 0;
                if (d = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(S), d) {
                    for (; e = t[s++];) e === t[s] && (o = n.push(s));
                    for (; o--;) t.splice(n[o], 1)
                }
                return h = null, t
            }, o = ot.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += o(e);
                return i
            }, (n = ot.selectors = {
                cacheLength: 50,
                createPseudo: rt,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Q.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, it).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = T[t + " "];
                        return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && T(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var o = ot.attr(n, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, h, d, u, p, f, g = s !== r ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                    for (b = (p = (c = (h = (d = (u = m)[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (b = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++b && u === e) {
                                            h[t] = [x, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (c = (h = (d = (u = e)[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                    for (;
                                        (u = ++p && u && u[g] || (b = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (y && ((h = (d = u[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] = [x, b]), u !== e)););
                                return (b -= o) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return o[w] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, i) {
                            for (var n, s = o(t, e), r = s.length; r--;) t[n = I(t, s[r])] = !(i[n] = s[r])
                        }) : function(t) {
                            return o(t, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: rt(function(t) {
                        var e = [],
                            i = [],
                            n = a(t.replace(q, "$1"));
                        return n[w] ? rt(function(t, e, i, o) {
                            for (var s, r = n(t, null, o, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, o, s) {
                            return e[0] = t, n(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: rt(function(t) {
                        return function(e) {
                            return ot(t, e).length > 0
                        }
                    }),
                    contains: rt(function(t) {
                        return t = t.replace(et, it),
                            function(e) {
                                return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                            }
                    }),
                    lang: rt(function(t) {
                        return V.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ut(function() {
                        return [0]
                    }),
                    last: ut(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ut(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: ut(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: ut(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: ut(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: ut(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[e] = ht(e);
        for (e in {
                submit: !0,
                reset: !0
            }) n.pseudos[e] = dt(e);

        function ft() {}

        function gt(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function mt(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                s = C++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, s)
            } : function(e, i, r) {
                var a, l, c, h = [x, s];
                if (r) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if ((a = (l = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[n]) && a[0] === x && a[1] === s) return h[2] = a[2];
                            if (l[n] = h, h[2] = t(e, i, r)) return !0
                        }
            }
        }

        function vt(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function yt(t, e, i, n, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (i && !i(s, n, o) || (r.push(s), c && e.push(a)));
            return r
        }

        function bt(t, e, i, n, o, s) {
            return n && !n[w] && (n = bt(n)), o && !o[w] && (o = bt(o, s)), rt(function(s, r, a, l) {
                var c, h, d, u = [],
                    p = [],
                    f = r.length,
                    g = s || function(t, e, i) {
                        for (var n = 0, o = e.length; o > n; n++) ot(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []),
                    m = !t || !s && e ? g : yt(g, u, t, a, l),
                    v = i ? o || (s ? t : f || n) ? [] : r : m;
                if (i && i(m, v, a, l), n)
                    for (c = yt(v, p), n(c, [], a, l), h = c.length; h--;)(d = c[h]) && (v[p[h]] = !(m[p[h]] = d));
                if (s) {
                    if (o || t) {
                        if (o) {
                            for (c = [], h = v.length; h--;)(d = v[h]) && c.push(m[h] = d);
                            o(null, v = [], c, l)
                        }
                        for (h = v.length; h--;)(d = v[h]) && (c = o ? I(s, d) : u[h]) > -1 && (s[c] = !(r[c] = d))
                    }
                } else v = yt(v === r ? v.splice(f, v.length) : v), o ? o(null, r, v, l) : D.apply(r, v)
            })
        }

        function wt(t) {
            for (var e, i, o, s = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, h = mt(function(t) {
                    return t === e
                }, a, !0), d = mt(function(t) {
                    return I(e, t) > -1
                }, a, !0), u = [function(t, i, n) {
                    var o = !r && (n || i !== c) || ((e = i).nodeType ? h(t, i, n) : d(t, i, n));
                    return e = null, o
                }]; s > l; l++)
                if (i = n.relative[t[l].type]) u = [mt(vt(u), i)];
                else {
                    if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                        for (o = ++l; s > o && !n.relative[t[o].type]; o++);
                        return bt(l > 1 && vt(u), l > 1 && gt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), i, o > l && wt(t.slice(l, o)), s > o && wt(t = t.slice(o)), s > o && gt(t))
                    }
                    u.push(i)
                }
            return vt(u)
        }

        function _t(t, e) {
            var i = e.length > 0,
                o = t.length > 0,
                s = function(s, r, a, l, h) {
                    var d, f, m, v = 0,
                        y = "0",
                        b = s && [],
                        w = [],
                        _ = c,
                        C = s || o && n.find.TAG("*", h),
                        T = x += null == _ ? 1 : Math.random() || .1,
                        $ = C.length;
                    for (h && (c = r === p || r || h); y !== $ && null != (d = C[y]); y++) {
                        if (o && d) {
                            for (f = 0, r || d.ownerDocument === p || (u(d), a = !g); m = t[f++];)
                                if (m(d, r || p, a)) {
                                    l.push(d);
                                    break
                                }
                            h && (x = T)
                        }
                        i && ((d = !m && d) && v--, s && b.push(d))
                    }
                    if (v += y, i && y !== v) {
                        for (f = 0; m = e[f++];) m(b, w, r, a);
                        if (s) {
                            if (v > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                            w = yt(w)
                        }
                        D.apply(l, w), h && !s && w.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                    }
                    return h && (x = T, c = _), b
                };
            return i ? rt(s) : s
        }
        return ft.prototype = n.filters = n.pseudos, n.setFilters = new ft, r = ot.tokenize = function(t, e) {
            var i, o, s, r, a, l, c, h = $[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = n.preFilter; a;) {
                for (r in i && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = F.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(q, " ")
                    }), a = a.slice(i.length)), n.filter) !(o = G[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return e ? a.length : a ? ot.error(t) : $(t, l).slice(0)
        }, a = ot.compile = function(t, e) {
            var i, n = [],
                o = [],
                s = E[t + " "];
            if (!s) {
                for (e || (e = r(t)), i = e.length; i--;)(s = wt(e[i]))[w] ? n.push(s) : o.push(s);
                (s = E(t, _t(o, n))).selector = t
            }
            return s
        }, l = ot.select = function(t, e, o, s) {
            var l, c, h, d, u, p = "function" == typeof t && t,
                f = !s && r(t = p.selector || t);
            if (o = o || [], 1 === f.length) {
                if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (h = c[0]).type && i.getById && 9 === e.nodeType && g && n.relative[c[1].type]) {
                    if (!(e = (n.find.ID(h.matches[0].replace(et, it), e) || [])[0])) return o;
                    p && (e = e.parentNode), t = t.slice(c.shift().value.length)
                }
                for (l = G.needsContext.test(t) ? 0 : c.length; l-- && (h = c[l], !n.relative[d = h.type]);)
                    if ((u = n.find[d]) && (s = u(h.matches[0].replace(et, it), Z.test(c[0].type) && pt(e.parentNode) || e))) {
                        if (c.splice(l, 1), !(t = s.length && gt(c))) return D.apply(o, s), o;
                        break
                    }
            }
            return (p || a(t, f))(s, e, !g, o, !e || Z.test(t) && pt(e.parentNode) || e), o
        }, i.sortStable = w.split("").sort(S).join("") === w, i.detectDuplicates = !!d, u(), i.sortDetached = at(function(t) {
            return 1 & t.compareDocumentPosition(p.createElement("div"))
        }), at(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && at(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || lt("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), at(function(t) {
            return null == t.getAttribute("disabled")
        }) || lt(j, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), ot
    }(t);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = function(t, e, i) {
            for (var n = [], o = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && p(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        _ = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        x = p.expr.match.needsContext,
        C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        T = /^.[^:#\[\.,]*$/;

    function $(t, e, i) {
        if (p.isFunction(e)) return p.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return p.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (T.test(e)) return p.filter(e, t, i);
            e = p.filter(e, t)
        }
        return p.grep(t, function(t) {
            return p.inArray(t, e) > -1 !== i
        })
    }
    p.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? p.find.matchesSelector(n, t) ? [n] : [] : p.find.matches(t, p.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, p.fn.extend({
        find: function(t) {
            var e, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof t) return this.pushStack(p(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (p.contains(n[e], this)) return !0
            }));
            for (e = 0; o > e; e++) p.find(t, n[e], i);
            return (i = this.pushStack(o > 1 ? p.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack($(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack($(this, t || [], !0))
        },
        is: function(t) {
            return !!$(this, "string" == typeof t && x.test(t) ? p(t) : t || [], !1).length
        }
    });
    var E, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(t, e, i) {
        var o, s;
        if (!t) return this;
        if (i = i || E, "string" == typeof t) {
            if (!(o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : S.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (o[1]) {
                if (e = e instanceof p ? e[0] : e, p.merge(this, p.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), C.test(o[1]) && p.isPlainObject(e))
                    for (o in e) p.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                return this
            }
            if ((s = n.getElementById(o[2])) && s.parentNode) {
                if (s.id !== o[2]) return E.find(t);
                this.length = 1, this[0] = s
            }
            return this.context = n, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : p.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(p) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), p.makeArray(t, this))
    }).prototype = p.fn, E = p(n);
    var k = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }
    p.fn.extend({
        has: function(t) {
            var e, i = p(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++)
                    if (p.contains(this, i[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, s = [], r = x.test(t) || "string" != typeof t ? p(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, t))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? p.inArray(this[0], p(t)) : p.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(p.uniqueSort(p.merge(this.get(), p(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), p.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return w(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return w(t, "parentNode", i)
        },
        next: function(t) {
            return O(t, "nextSibling")
        },
        prev: function(t) {
            return O(t, "previousSibling")
        },
        nextAll: function(t) {
            return w(t, "nextSibling")
        },
        prevAll: function(t) {
            return w(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return w(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return w(t, "previousSibling", i)
        },
        siblings: function(t) {
            return _((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return _(t.firstChild)
        },
        contents: function(t) {
            return p.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : p.merge([], t.childNodes)
        }
    }, function(t, e) {
        p.fn[t] = function(i, n) {
            var o = p.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = p.filter(n, o)), this.length > 1 && (A[t] || (o = p.uniqueSort(o)), k.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var L, P, D = /\S+/g;

    function N() {
        n.addEventListener ? (n.removeEventListener("DOMContentLoaded", I), t.removeEventListener("load", I)) : (n.detachEvent("onreadystatechange", I), t.detachEvent("onload", I))
    }

    function I() {
        (n.addEventListener || "load" === t.event.type || "complete" === n.readyState) && (N(), p.ready())
    }
    for (P in p.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return p.each(t.match(D) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : p.extend({}, t);
            var e, i, n, o, s = [],
                r = [],
                a = -1,
                l = function() {
                    for (o = t.once, n = e = !0; r.length; a = -1)
                        for (i = r.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (s = i ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (i && !e && (a = s.length - 1, r.push(i)), function e(i) {
                            p.each(i, function(i, n) {
                                p.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== p.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return p.each(arguments, function(t, e) {
                            for (var i;
                                (i = p.inArray(e, s, i)) > -1;) s.splice(i, 1), a >= i && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? p.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return o = r = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return o = !0, i || c.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, i) {
                        return o || (i = [t, (i = i || []).slice ? i.slice() : i], r.push(i), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, p.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", p.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return p.Deferred(function(i) {
                                p.each(e, function(e, s) {
                                    var r = p.isFunction(t[e]) && t[e];
                                    o[s[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && p.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? p.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, p.each(e, function(t, s) {
                    var r = s[2],
                        a = s[3];
                    n[s[1]] = r.add, a && r.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                        return o[s[0] + "With"](this === o ? n : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, s = 0,
                    r = o.call(arguments),
                    a = r.length,
                    l = 1 !== a || t && p.isFunction(t.promise) ? a : 0,
                    c = 1 === l ? t : p.Deferred(),
                    h = function(t, i, n) {
                        return function(s) {
                            i[t] = this, n[t] = arguments.length > 1 ? o.call(arguments) : s, n === e ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) r[s] && p.isFunction(r[s].promise) ? r[s].promise().progress(h(s, i, e)).done(h(s, n, r)).fail(c.reject) : --l;
                return l || c.resolveWith(n, r), c.promise()
            }
        }), p.fn.ready = function(t) {
            return p.ready.promise().done(t), this
        }, p.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? p.readyWait++ : p.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== t && --p.readyWait > 0 || (L.resolveWith(n, [p]), p.fn.triggerHandler && (p(n).triggerHandler("ready"), p(n).off("ready"))))
            }
        }), p.ready.promise = function(e) {
            if (!L)
                if (L = p.Deferred(), "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll) t.setTimeout(p.ready);
                else if (n.addEventListener) n.addEventListener("DOMContentLoaded", I), t.addEventListener("load", I);
            else {
                n.attachEvent("onreadystatechange", I), t.attachEvent("onload", I);
                var i = !1;
                try {
                    i = null == t.frameElement && n.documentElement
                } catch (t) {}
                i && i.doScroll && function e() {
                    if (!p.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (i) {
                            return t.setTimeout(e, 50)
                        }
                        N(), p.ready()
                    }
                }()
            }
            return L.promise(e)
        }, p.ready.promise(), p(d)) break;
    d.ownFirst = "0" === P, d.inlineBlockNeedsLayout = !1, p(function() {
            var t, e, i, o;
            (i = n.getElementsByTagName("body")[0]) && i.style && (e = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", d.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(o))
        }),
        function() {
            var t = n.createElement("div");
            d.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                d.deleteExpando = !1
            }
            t = null
        }();
    var j = function(t) {
            var e = p.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
        },
        z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        H = /([A-Z])/g;

    function R(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(H, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : z.test(i) ? p.parseJSON(i) : i)
                } catch (t) {}
                p.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function M(t) {
        var e;
        for (e in t)
            if (("data" !== e || !p.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function W(t, e, n, o) {
        if (j(t)) {
            var s, r, a = p.expando,
                l = t.nodeType,
                c = l ? p.cache : t,
                h = l ? t[a] : t[a] && a;
            if (h && c[h] && (o || c[h].data) || void 0 !== n || "string" != typeof e) return h || (h = l ? t[a] = i.pop() || p.guid++ : a), c[h] || (c[h] = l ? {} : {
                toJSON: p.noop
            }), "object" != typeof e && "function" != typeof e || (o ? c[h] = p.extend(c[h], e) : c[h].data = p.extend(c[h].data, e)), r = c[h], o || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[p.camelCase(e)] = n), "string" == typeof e ? null == (s = r[e]) && (s = r[p.camelCase(e)]) : s = r, s
        }
    }

    function q(t, e, i) {
        if (j(t)) {
            var n, o, s = t.nodeType,
                r = s ? p.cache : t,
                a = s ? t[p.expando] : p.expando;
            if (r[a]) {
                if (e && (n = i ? r[a] : r[a].data)) {
                    o = (e = p.isArray(e) ? e.concat(p.map(e, p.camelCase)) : e in n ? [e] : (e = p.camelCase(e)) in n ? [e] : e.split(" ")).length;
                    for (; o--;) delete n[e[o]];
                    if (i ? !M(n) : !p.isEmptyObject(n)) return
                }(i || (delete r[a].data, M(r[a]))) && (s ? p.cleanData([t], !0) : d.deleteExpando || r != r.window ? delete r[a] : r[a] = void 0)
            }
        }
    }
    p.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return !!(t = t.nodeType ? p.cache[t[p.expando]] : t[p.expando]) && !M(t)
            },
            data: function(t, e, i) {
                return W(t, e, i)
            },
            removeData: function(t, e) {
                return q(t, e)
            },
            _data: function(t, e, i) {
                return W(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return q(t, e, !0)
            }
        }), p.fn.extend({
            data: function(t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                        for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && R(s, n = p.camelCase(n.slice(5)), o[n]);
                        p._data(s, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    p.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    p.data(this, t, e)
                }) : s ? R(s, t, p.data(s, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    p.removeData(this, t)
                })
            }
        }), p.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = p._data(t, e), i && (!n || p.isArray(i) ? n = p._data(t, e, p.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = p.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = p._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function() {
                    p.dequeue(t, e)
                }, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return p._data(t, i) || p._data(t, i, {
                    empty: p.Callbacks("once memory").add(function() {
                        p._removeData(t, e + "queue"), p._removeData(t, i)
                    })
                })
            }
        }), p.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? p.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = p.queue(this, t, e);
                    p._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && p.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    p.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = p.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = p._data(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        }),
        function() {
            var t;
            d.shrinkWrapBlocks = function() {
                return null != t ? t : (t = !1, (i = n.getElementsByTagName("body")[0]) && i.style ? (e = n.createElement("div"), (o = n.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(o).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(n.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(o), t) : void 0);
                var e, i, o
            }
        }();
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        F = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        Q = function(t, e) {
            return t = e || t, "none" === p.css(t, "display") || !p.contains(t.ownerDocument, t)
        };

    function V(t, e, i, n) {
        var o, s = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return p.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (p.cssNumber[e] ? "" : "px"),
            h = (p.cssNumber[e] || "px" !== c && +l) && F.exec(p.css(t, e));
        if (h && h[3] !== c) {
            c = c || h[3], i = i || [], h = +l || 1;
            do {
                h /= s = s || ".5", p.style(t, e, h + c)
            } while (s !== (s = a() / l) && 1 !== s && --r)
        }
        return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = o)), o
    }
    var G = function(t, e, i, n, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === p.type(i))
                for (a in o = !0, i) G(t, e, a, i[a], !0, s, r);
            else if (void 0 !== n && (o = !0, p.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(p(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
        },
        X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        J = /^$|\/(?:java|ecma)script/i,
        K = /^\s+/,
        Z = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function tt(t) {
        var e = Z.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }! function() {
        var t = n.createElement("div"),
            e = n.createDocumentFragment(),
            i = n.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d.leadingWhitespace = 3 === t.firstChild.nodeType, d.tbody = !t.getElementsByTagName("tbody").length, d.htmlSerialize = !!t.getElementsByTagName("link").length, d.html5Clone = "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), d.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), (i = n.createElement("input")).setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, d.noCloneEvent = !!t.addEventListener, t[p.expando] = 1, d.attributes = !t.getAttribute(p.expando)
    }();
    var et = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function it(t, e) {
        var i, n, o = 0,
            s = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || p.nodeName(n, e) ? s.push(n) : p.merge(s, it(n, e));
        return void 0 === e || e && p.nodeName(t, e) ? p.merge([t], s) : s
    }

    function nt(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) p._data(i, "globalEval", !e || p._data(e[n], "globalEval"))
    }
    et.optgroup = et.option, et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td;
    var ot = /<|&#?\w+;/,
        st = /<tbody/i;

    function rt(t) {
        X.test(t.type) && (t.defaultChecked = t.checked)
    }

    function at(t, e, i, n, o) {
        for (var s, r, a, l, c, h, u, f = t.length, g = tt(e), m = [], v = 0; f > v; v++)
            if ((r = t[v]) || 0 === r)
                if ("object" === p.type(r)) p.merge(m, r.nodeType ? [r] : r);
                else if (ot.test(r)) {
            for (l = l || g.appendChild(e.createElement("div")), c = (Y.exec(r) || ["", ""])[1].toLowerCase(), u = et[c] || et._default, l.innerHTML = u[1] + p.htmlPrefilter(r) + u[2], s = u[0]; s--;) l = l.lastChild;
            if (!d.leadingWhitespace && K.test(r) && m.push(e.createTextNode(K.exec(r)[0])), !d.tbody)
                for (s = (r = "table" !== c || st.test(r) ? "<table>" !== u[1] || st.test(r) ? 0 : l : l.firstChild) && r.childNodes.length; s--;) p.nodeName(h = r.childNodes[s], "tbody") && !h.childNodes.length && r.removeChild(h);
            for (p.merge(m, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = g.lastChild
        } else m.push(e.createTextNode(r));
        for (l && g.removeChild(l), d.appendChecked || p.grep(it(m, "input"), rt), v = 0; r = m[v++];)
            if (n && p.inArray(r, n) > -1) o && o.push(r);
            else if (a = p.contains(r.ownerDocument, r), l = it(g.appendChild(r), "script"), a && nt(l), i)
            for (s = 0; r = l[s++];) J.test(r.type || "") && i.push(r);
        return l = null, g
    }! function() {
        var e, i, o = n.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (d[e] = i in t) || (o.setAttribute(i, "t"), d[e] = !1 === o.attributes[i].expando);
        o = null
    }();
    var lt = /^(?:input|select|textarea)$/i,
        ct = /^key/,
        ht = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        dt = /^(?:focusinfocus|focusoutblur)$/,
        ut = /^([^.]*)(?:\.(.+)|)/;

    function pt() {
        return !0
    }

    function ft() {
        return !1
    }

    function gt() {
        try {
            return n.activeElement
        } catch (t) {}
    }

    function mt(t, e, i, n, o, s) {
        var r, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) mt(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = ft;
        else if (!o) return t;
        return 1 === s && (r = o, (o = function(t) {
            return p().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = p.guid++)), t.each(function() {
            p.event.add(this, e, o, n, i)
        })
    }
    p.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var s, r, a, l, c, h, d, u, f, g, m, v = p._data(t);
            if (v) {
                for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = p.guid++), (r = v.events) || (r = v.events = {}), (h = v.handle) || ((h = v.handle = function(t) {
                        return void 0 === p || t && p.event.triggered === t.type ? void 0 : p.event.dispatch.apply(h.elem, arguments)
                    }).elem = t), a = (e = (e || "").match(D) || [""]).length; a--;) f = m = (s = ut.exec(e[a]) || [])[1], g = (s[2] || "").split(".").sort(), f && (c = p.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = p.event.special[f] || {}, d = p.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (u = r[f]) || ((u = r[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, g, h) || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, d) : u.push(d), p.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, i, n, o) {
            var s, r, a, l, c, h, d, u, f, g, m, v = p.hasData(t) && p._data(t);
            if (v && (h = v.events)) {
                for (c = (e = (e || "").match(D) || [""]).length; c--;)
                    if (f = m = (a = ut.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f) {
                        for (d = p.event.special[f] || {}, u = h[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = u.length; s--;) r = u[s], !o && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (u.splice(s, 1), r.selector && u.delegateCount--, d.remove && d.remove.call(t, r));
                        l && !u.length && (d.teardown && !1 !== d.teardown.call(t, g, v.handle) || p.removeEvent(t, f, v.handle), delete h[f])
                    } else
                        for (f in h) p.event.remove(t, f + e[c], i, n, !0);
                p.isEmptyObject(h) && (delete v.handle, p._removeData(t, "events"))
            }
        },
        trigger: function(e, i, o, s) {
            var r, a, l, c, d, u, f, g = [o || n],
                m = h.call(e, "type") ? e.type : e,
                v = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (l = u = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !dt.test(m + p.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), a = m.indexOf(":") < 0 && "on" + m, (e = e[p.expando] ? e : new p.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), i = null == i ? [e] : p.makeArray(i, [e]), d = p.event.special[m] || {}, s || !d.trigger || !1 !== d.trigger.apply(o, i))) {
                if (!s && !d.noBubble && !p.isWindow(o)) {
                    for (c = d.delegateType || m, dt.test(c + m) || (l = l.parentNode); l; l = l.parentNode) g.push(l), u = l;
                    u === (o.ownerDocument || n) && g.push(u.defaultView || u.parentWindow || t)
                }
                for (f = 0;
                    (l = g[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? c : d.bindType || m, (r = (p._data(l, "events") || {})[e.type] && p._data(l, "handle")) && r.apply(l, i), (r = a && l[a]) && r.apply && j(l) && (e.result = r.apply(l, i), !1 === e.result && e.preventDefault());
                if (e.type = m, !s && !e.isDefaultPrevented() && (!d._default || !1 === d._default.apply(g.pop(), i)) && j(o) && a && o[m] && !p.isWindow(o)) {
                    (u = o[a]) && (o[a] = null), p.event.triggered = m;
                    try {
                        o[m]()
                    } catch (t) {}
                    p.event.triggered = void 0, u && (o[a] = u)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = p.event.fix(t);
            var e, i, n, s, r, a = [],
                l = o.call(arguments),
                c = (p._data(this, "events") || {})[t.type] || [],
                h = p.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (a = p.event.handlers.call(this, t, c), e = 0;
                    (s = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (n = ((p.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, s, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (n = [], i = 0; a > i; i++) void 0 === n[o = (s = e[i]).selector + " "] && (n[o] = s.needsContext ? p(o, this).index(l) > -1 : p.find(o, this, null, [l]).length), n[o] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        fix: function(t) {
            if (t[p.expando]) return t;
            var e, i, o, s = t.type,
                r = t,
                a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = ht.test(s) ? this.mouseHooks : ct.test(s) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new p.Event(r), e = o.length; e--;) t[i = o[e]] = r[i];
            return t.target || (t.target = r.srcElement || n), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, o, s, r = e.button,
                    a = e.fromElement;
                return null == t.pageX && null != e.clientX && (s = (o = t.target.ownerDocument || n).documentElement, i = o.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== gt() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === gt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return p.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i) {
            var n = p.extend(new p.Event, i, {
                type: t,
                isSimulated: !0
            });
            p.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
        }
    }, p.removeEvent = n.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (void 0 === t[n] && (t[n] = null), t.detachEvent(n, i))
    }, p.Event = function(t, e) {
        return this instanceof p.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? pt : ft) : this.type = t, e && p.extend(this, e), this.timeStamp = t && t.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(t, e)
    }, p.Event.prototype = {
        constructor: p.Event,
        isDefaultPrevented: ft,
        isPropagationStopped: ft,
        isImmediatePropagationStopped: ft,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = pt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = pt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = pt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        p.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget,
                    o = t.handleObj;
                return n && (n === this || p.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), d.submit || (p.event.special.submit = {
        setup: function() {
            return !p.nodeName(this, "form") && void p.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    i = p.nodeName(e, "input") || p.nodeName(e, "button") ? p.prop(e, "form") : void 0;
                i && !p._data(i, "submit") && (p.event.add(i, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), p._data(i, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && p.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
        }
    }), d.change || (p.event.special.change = {
        setup: function() {
            return lt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (p.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), p.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, t)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                lt.test(e.nodeName) && !p._data(e, "change") && (p.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || p.event.simulate("change", this.parentNode, t)
                }), p._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !lt.test(this.nodeName)
        }
    }), d.focusin || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            p.event.simulate(e, t.target, p.event.fix(t))
        };
        p.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = p._data(n, e);
                o || n.addEventListener(t, i, !0), p._data(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = p._data(n, e) - 1;
                o ? p._data(n, e, o) : (n.removeEventListener(t, i, !0), p._removeData(n, e))
            }
        }
    }), p.fn.extend({
        on: function(t, e, i, n) {
            return mt(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return mt(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, p(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = ft), this.each(function() {
                p.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                p.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? p.event.trigger(t, e, i, !0) : void 0
        }
    });
    var vt = / jQuery\d+="(?:null|\d+)"/g,
        yt = new RegExp("<(?:" + Z + ")[\\s/>]", "i"),
        bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wt = /<script|<style|<link/i,
        _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /^true\/(.*)/,
        Ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Tt = tt(n).appendChild(n.createElement("div"));

    function $t(t, e) {
        return p.nodeName(t, "table") && p.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function Et(t) {
        return t.type = (null !== p.find.attr(t, "type")) + "/" + t.type, t
    }

    function St(t) {
        var e = xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function kt(t, e) {
        if (1 === e.nodeType && p.hasData(t)) {
            var i, n, o, s = p._data(t),
                r = p._data(e, s),
                a = s.events;
            if (a)
                for (i in delete r.handle, r.events = {}, a)
                    for (n = 0, o = a[i].length; o > n; n++) p.event.add(e, i, a[i][n]);
            r.data && (r.data = p.extend({}, r.data))
        }
    }

    function At(t, e) {
        var i, n, o;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !d.noCloneEvent && e[p.expando]) {
                for (n in (o = p._data(e)).events) p.removeEvent(e, n, o.handle);
                e.removeAttribute(p.expando)
            }
            "script" === i && e.text !== t.text ? (Et(e).text = t.text, St(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), d.html5Clone && t.innerHTML && !p.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && X.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }

    function Ot(t, e, i, n) {
        e = s.apply([], e);
        var o, r, a, l, c, h, u = 0,
            f = t.length,
            g = f - 1,
            m = e[0],
            v = p.isFunction(m);
        if (v || f > 1 && "string" == typeof m && !d.checkClone && _t.test(m)) return t.each(function(o) {
            var s = t.eq(o);
            v && (e[0] = m.call(this, o, s.html())), Ot(s, e, i, n)
        });
        if (f && (o = (h = at(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === h.childNodes.length && (h = o), o || n)) {
            for (a = (l = p.map(it(h, "script"), Et)).length; f > u; u++) r = h, u !== g && (r = p.clone(r, !0, !0), a && p.merge(l, it(r, "script"))), i.call(t[u], r, u);
            if (a)
                for (c = l[l.length - 1].ownerDocument, p.map(l, St), u = 0; a > u; u++) r = l[u], J.test(r.type || "") && !p._data(r, "globalEval") && p.contains(c, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ct, "")));
            h = o = null
        }
        return t
    }

    function Lt(t, e, i) {
        for (var n, o = e ? p.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || p.cleanData(it(n)), n.parentNode && (i && p.contains(n.ownerDocument, n) && nt(it(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    p.extend({
        htmlPrefilter: function(t) {
            return t.replace(bt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, o, s, r, a, l = p.contains(t.ownerDocument, t);
            if (d.html5Clone || p.isXMLDoc(t) || !yt.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Tt.innerHTML = t.outerHTML, Tt.removeChild(s = Tt.firstChild)), !(d.noCloneEvent && d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || p.isXMLDoc(t)))
                for (n = it(s), a = it(t), r = 0; null != (o = a[r]); ++r) n[r] && At(o, n[r]);
            if (e)
                if (i)
                    for (a = a || it(t), n = n || it(s), r = 0; null != (o = a[r]); r++) kt(o, n[r]);
                else kt(t, s);
            return (n = it(s, "script")).length > 0 && nt(n, !l && it(t, "script")), n = a = o = null, s
        },
        cleanData: function(t, e) {
            for (var n, o, s, r, a = 0, l = p.expando, c = p.cache, h = d.attributes, u = p.event.special; null != (n = t[a]); a++)
                if ((e || j(n)) && (r = (s = n[l]) && c[s])) {
                    if (r.events)
                        for (o in r.events) u[o] ? p.event.remove(n, o) : p.removeEvent(n, o, r.handle);
                    c[s] && (delete c[s], h || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), i.push(s))
                }
        }
    }), p.fn.extend({
        domManip: Ot,
        detach: function(t) {
            return Lt(this, t, !0)
        },
        remove: function(t) {
            return Lt(this, t)
        },
        text: function(t) {
            return G(this, function(t) {
                return void 0 === t ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return Ot(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Ot(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return Ot(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Ot(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && p.cleanData(it(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && p.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return p.clone(this, t, e)
            })
        },
        html: function(t) {
            return G(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(vt, "") : void 0;
                if ("string" == typeof t && !wt.test(t) && (d.htmlSerialize || !yt.test(t)) && (d.leadingWhitespace || !K.test(t)) && !et[(Y.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = p.htmlPrefilter(t);
                    try {
                        for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (p.cleanData(it(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Ot(this, arguments, function(e) {
                var i = this.parentNode;
                p.inArray(this, t) < 0 && (p.cleanData(it(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        p.fn[t] = function(t) {
            for (var i, n = 0, o = [], s = p(t), a = s.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), p(s[n])[e](i), r.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var Pt, Dt = {
        HTML: "block",
        BODY: "block"
    };

    function Nt(t, e) {
        var i = p(e.createElement(t)).appendTo(e.body),
            n = p.css(i[0], "display");
        return i.detach(), n
    }

    function It(t) {
        var e = n,
            i = Dt[t];
        return i || ("none" !== (i = Nt(t, e)) && i || ((e = ((Pt = (Pt || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || Pt[0].contentDocument).document).write(), e.close(), i = Nt(t, e), Pt.detach()), Dt[t] = i), i
    }
    var jt = /^margin/,
        zt = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        Ht = function(t, e, i, n) {
            var o, s, r = {};
            for (s in e) r[s] = t.style[s], t.style[s] = e[s];
            for (s in o = i.apply(t, n || []), e) t.style[s] = r[s];
            return o
        },
        Rt = n.documentElement;
    ! function() {
        var e, i, o, s, r, a, l = n.createElement("div"),
            c = n.createElement("div");
        if (c.style) {
            function h() {
                var h, d, u = n.documentElement;
                u.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = o = a = !1, i = r = !0, t.getComputedStyle && (d = t.getComputedStyle(c), e = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, o = "4px" === (d || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", i = "4px" === (d || {
                    marginRight: "4px"
                }).marginRight, (h = c.appendChild(n.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", h.style.marginRight = h.style.width = "0", c.style.width = "1px", r = !parseFloat((t.getComputedStyle(h) || {}).marginRight), c.removeChild(h)), c.style.display = "none", (s = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (h = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === h[0].offsetHeight) && (h[0].style.display = "", h[1].style.display = "none", s = 0 === h[0].offsetHeight)), u.removeChild(l)
            }
            c.style.cssText = "float:left;opacity:.5", d.opacity = "0.5" === c.style.opacity, d.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = n.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), d.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, p.extend(d, {
                reliableHiddenOffsets: function() {
                    return null == e && h(), s
                },
                boxSizingReliable: function() {
                    return null == e && h(), o
                },
                pixelMarginRight: function() {
                    return null == e && h(), i
                },
                pixelPosition: function() {
                    return null == e && h(), e
                },
                reliableMarginRight: function() {
                    return null == e && h(), r
                },
                reliableMarginLeft: function() {
                    return null == e && h(), a
                }
            })
        }
    }();
    var Mt, Wt, qt = /^(top|right|bottom|left)$/;

    function Bt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    t.getComputedStyle ? (Mt = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, Wt = function(t, e, i) {
        var n, o, s, r, a = t.style;
        return "" !== (r = (i = i || Mt(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== r || p.contains(t.ownerDocument, t) || (r = p.style(t, e)), i && !d.pixelMarginRight() && zt.test(r) && jt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 === r ? r : r + ""
    }) : Rt.currentStyle && (Mt = function(t) {
        return t.currentStyle
    }, Wt = function(t, e, i) {
        var n, o, s, r, a = t.style;
        return null == (r = (i = i || Mt(t)) ? i[e] : void 0) && a && a[e] && (r = a[e]), zt.test(r) && !qt.test(e) && (n = a.left, (s = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
    });
    var Ft = /alpha\([^)]*\)/i,
        Ut = /opacity\s*=\s*([^)]*)/i,
        Qt = /^(none|table(?!-c[ea]).+)/,
        Vt = new RegExp("^(" + B + ")(.*)$", "i"),
        Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Yt = ["Webkit", "O", "Moz", "ms"],
        Jt = n.createElement("div").style;

    function Kt(t) {
        if (t in Jt) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = Yt.length; i--;)
            if ((t = Yt[i] + e) in Jt) return t
    }

    function Zt(t, e) {
        for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++)(n = t[r]).style && (s[r] = p._data(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Q(n) && (s[r] = p._data(n, "olddisplay", It(n.nodeName)))) : (o = Q(n), (i && "none" !== i || !o) && p._data(n, "olddisplay", o ? i : p.css(n, "display"))));
        for (r = 0; a > r; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
        return t
    }

    function te(t, e, i) {
        var n = Vt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function ee(t, e, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += p.css(t, i + U[s], !0, o)), n ? ("content" === i && (r -= p.css(t, "padding" + U[s], !0, o)), "margin" !== i && (r -= p.css(t, "border" + U[s] + "Width", !0, o))) : (r += p.css(t, "padding" + U[s], !0, o), "padding" !== i && (r += p.css(t, "border" + U[s] + "Width", !0, o)));
        return r
    }

    function ie(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = Mt(t),
            r = d.boxSizing && "border-box" === p.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if ((0 > (o = Wt(t, e, s)) || null == o) && (o = t.style[e]), zt.test(o)) return o;
            n = r && (d.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + ee(t, e, i || (r ? "border" : "content"), n, s) + "px"
    }

    function ne(t, e, i, n, o) {
        return new ne.prototype.init(t, e, i, n, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Wt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: d.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = p.camelCase(e),
                    l = t.style;
                if (e = p.cssProps[a] || (p.cssProps[a] = Kt(a) || a), r = p.cssHooks[e] || p.cssHooks[a], void 0 === i) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e];
                if ("string" == (s = typeof i) && (o = F.exec(i)) && o[1] && (i = V(t, e, o), s = "number"), null != i && i == i && ("number" === s && (i += o && o[3] || (p.cssNumber[a] ? "" : "px")), d.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n))))) try {
                    l[e] = i
                } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var o, s, r, a = p.camelCase(e);
            return e = p.cssProps[a] || (p.cssProps[a] = Kt(a) || a), (r = p.cssHooks[e] || p.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Wt(t, e, n)), "normal" === s && e in Xt && (s = Xt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), p.each(["height", "width"], function(t, e) {
        p.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Qt.test(p.css(t, "display")) && 0 === t.offsetWidth ? Ht(t, Gt, function() {
                    return ie(t, e, n)
                }) : ie(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o = n && Mt(t);
                return te(0, i, n ? ee(t, e, n, d.boxSizing && "border-box" === p.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), d.opacity || (p.cssHooks.opacity = {
        get: function(t, e) {
            return Ut.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                o = p.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === p.trim(s.replace(Ft, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = Ft.test(s) ? s.replace(Ft, o) : s + " " + o)
        }
    }), p.cssHooks.marginRight = Bt(d.reliableMarginRight, function(t, e) {
        return e ? Ht(t, {
            display: "inline-block"
        }, Wt, [t, "marginRight"]) : void 0
    }), p.cssHooks.marginLeft = Bt(d.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Wt(t, "marginLeft")) || (p.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Ht(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        p.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + U[n] + e] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, jt.test(t) || (p.cssHooks[t + e].set = te)
    }), p.fn.extend({
        css: function(t, e) {
            return G(this, function(t, e, i) {
                var n, o, s = {},
                    r = 0;
                if (p.isArray(e)) {
                    for (n = Mt(t), o = e.length; o > r; r++) s[e[r]] = p.css(t, e[r], !1, n);
                    return s
                }
                return void 0 !== i ? p.style(t, e, i) : p.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return Zt(this, !0)
        },
        hide: function() {
            return Zt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Q(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = ne, ne.prototype = {
        constructor: ne,
        init: function(t, e, i, n, o, s) {
            this.elem = t, this.prop = i, this.easing = o || p.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (p.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = ne.propHooks[this.prop];
            return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = ne.propHooks[this.prop];
            return this.options.duration ? this.pos = e = p.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : ne.propHooks._default.set(this), this
        }
    }, ne.prototype.init.prototype = ne.prototype, ne.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = p.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                p.fx.step[t.prop] ? p.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[p.cssProps[t.prop]] && !p.cssHooks[t.prop] ? t.elem[t.prop] = t.now : p.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, ne.propHooks.scrollTop = ne.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, p.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, p.fx = ne.prototype.init, p.fx.step = {};
    var oe, se, re = /^(?:toggle|show|hide)$/,
        ae = /queueHooks$/;

    function le() {
        return t.setTimeout(function() {
            oe = void 0
        }), oe = p.now()
    }

    function ce(t, e) {
        var i, n = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n["margin" + (i = U[o])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function he(t, e, i) {
        for (var n, o = (de.tweeners[e] || []).concat(de.tweeners["*"]), s = 0, r = o.length; r > s; s++)
            if (n = o[s].call(i, e, t)) return n
    }

    function de(t, e, i) {
        var n, o, s = 0,
            r = de.prefilters.length,
            a = p.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = oe || le(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; r > s; s++) c.tweens[s].run(n);
                return a.notifyWith(t, [c, n, i]), 1 > n && r ? i : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: p.extend({}, e),
                opts: p.extend(!0, {
                    specialEasing: {},
                    easing: p.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: oe || le(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = p.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (function(t, e) {
                var i, n, o, s, r;
                for (i in t)
                    if (o = e[n = p.camelCase(i)], s = t[i], p.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (r = p.cssHooks[n]) && "expand" in r)
                        for (i in s = r.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
                    else e[n] = o
            }(h, c.opts.specialEasing); r > s; s++)
            if (n = de.prefilters[s].call(c, t, h, c.opts)) return p.isFunction(n.stop) && (p._queueHooks(c.elem, c.opts.queue).stop = p.proxy(n.stop, n)), n;
        return p.map(h, he, c), p.isFunction(c.opts.start) && c.opts.start.call(t, c), p.fx.timer(p.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(de, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return V(i.elem, t, F.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                p.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(D);
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], de.tweeners[i] = de.tweeners[i] || [], de.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, o, s, r, a, l, c, h = this,
                    u = {},
                    f = t.style,
                    g = t.nodeType && Q(t),
                    m = p._data(t, "fxshow");
                for (n in i.queue || (null == (a = p._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, h.always(function() {
                        h.always(function() {
                            a.unqueued--, p.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = p.css(t, "display")) ? p._data(t, "olddisplay") || It(t.nodeName) : c) && "none" === p.css(t, "float") && (d.inlineBlockNeedsLayout && "inline" !== It(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.shrinkWrapBlocks() || h.always(function() {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), e)
                    if (o = e[n], re.exec(o)) {
                        if (delete e[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[n]) continue;
                            g = !0
                        }
                        u[n] = m && m[n] || p.style(t, n)
                    } else c = void 0;
                if (p.isEmptyObject(u)) "inline" === ("none" === c ? It(t.nodeName) : c) && (f.display = c);
                else
                    for (n in m ? "hidden" in m && (g = m.hidden) : m = p._data(t, "fxshow", {}), s && (m.hidden = !g), g ? p(t).show() : h.done(function() {
                            p(t).hide()
                        }), h.done(function() {
                            var e;
                            for (e in p._removeData(t, "fxshow"), u) p.style(t, e, u[e])
                        }), u) r = he(g ? m[n] : 0, n, h), n in m || (m[n] = r.start, g && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }],
            prefilter: function(t, e) {
                e ? de.prefilters.unshift(t) : de.prefilters.push(t)
            }
        }), p.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? p.extend({}, t) : {
                complete: i || !i && e || p.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !p.isFunction(e) && e
            };
            return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
            }, n
        }, p.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Q).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = p.isEmptyObject(t),
                    s = p.speed(e, i, n),
                    r = function() {
                        var e = de(this, p.extend({}, t), s);
                        (o || p._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        s = p.timers,
                        r = p._data(this);
                    if (o) r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && ae.test(o) && n(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                    !e && i || p.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = p._data(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        s = p.timers,
                        r = n ? n.length : 0;
                    for (i.finish = !0, p.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(t, e) {
            var i = p.fn[e];
            p.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ce(e, !0), t, n, o)
            }
        }), p.each({
            slideDown: ce("show"),
            slideUp: ce("hide"),
            slideToggle: ce("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            p.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), p.timers = [], p.fx.tick = function() {
            var t, e = p.timers,
                i = 0;
            for (oe = p.now(); i < e.length; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
            e.length || p.fx.stop(), oe = void 0
        }, p.fx.timer = function(t) {
            p.timers.push(t), t() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            se || (se = t.setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            t.clearInterval(se), se = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, i) {
            return e = p.fx && p.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                var o = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(o)
                }
            })
        },
        function() {
            var t, e = n.createElement("input"),
                i = n.createElement("div"),
                o = n.createElement("select"),
                s = o.appendChild(n.createElement("option"));
            (i = n.createElement("div")).setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), (t = i.getElementsByTagName("a")[0]).style.cssText = "top:1px", d.getSetAttribute = "t" !== i.className, d.style = /top/.test(t.getAttribute("style")), d.hrefNormalized = "/a" === t.getAttribute("href"), d.checkOn = !!e.value, d.optSelected = s.selected, d.enctype = !!n.createElement("form").enctype, o.disabled = !0, d.optDisabled = !s.disabled, (e = n.createElement("input")).setAttribute("value", ""), d.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), d.radioValue = "t" === e.value
        }();
    var ue = /\r/g,
        pe = /[\x20\t\r\n\f]+/g;
    p.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            return arguments.length ? (n = p.isFunction(t), this.each(function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? t.call(this, i, p(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), (e = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(ue, "") : null == i ? "" : i : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = p.find.attr(t, "value");
                    return null != e ? e : p.trim(p.text(t)).replace(pe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (((i = n[l]).selected || l === o) && (d.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !p.nodeName(i.parentNode, "optgroup"))) {
                            if (e = p(i).val(), s) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, s = p.makeArray(e), r = o.length; r--;)
                        if (n = o[r], p.inArray(p.valHooks.option.get(n), s) > -1) try {
                            n.selected = i = !0
                        } catch (t) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(t, e) {
                return p.isArray(e) ? t.checked = p.inArray(p(t).val(), e) > -1 : void 0
            }
        }, d.checkOn || (p.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var fe, ge, me = p.expr.attrHandle,
        ve = /^(?:checked|selected)$/i,
        ye = d.getSetAttribute,
        be = d.input;
    p.fn.extend({
        attr: function(t, e) {
            return G(this, p.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                p.removeAttr(this, t)
            })
        }
    }), p.extend({
        attr: function(t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? p.prop(t, e, i) : (1 === s && p.isXMLDoc(t) || (e = e.toLowerCase(), o = p.attrHooks[e] || (p.expr.match.bool.test(e) ? ge : fe)), void 0 !== i ? null === i ? void p.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = p.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!d.radioValue && "radio" === e && p.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, o = 0,
                s = e && e.match(D);
            if (s && 1 === t.nodeType)
                for (; i = s[o++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) ? be && ye || !ve.test(i) ? t[n] = !1 : t[p.camelCase("default-" + i)] = t[n] = !1 : p.attr(t, i, ""), t.removeAttribute(ye ? i : n)
        }
    }), ge = {
        set: function(t, e, i) {
            return !1 === e ? p.removeAttr(t, i) : be && ye || !ve.test(i) ? t.setAttribute(!ye && p.propFix[i] || i, i) : t[p.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = me[e] || p.find.attr;
        be && ye || !ve.test(e) ? me[e] = function(t, e, n) {
            var o, s;
            return n || (s = me[e], me[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, me[e] = s), o
        } : me[e] = function(t, e, i) {
            return i ? void 0 : t[p.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), be && ye || (p.attrHooks.value = {
        set: function(t, e, i) {
            return p.nodeName(t, "input") ? void(t.defaultValue = e) : fe && fe.set(t, e, i)
        }
    }), ye || (fe = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, me.id = me.name = me.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, p.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: fe.set
    }, p.attrHooks.contenteditable = {
        set: function(t, e, i) {
            fe.set(t, "" !== e && e, i)
        }
    }, p.each(["width", "height"], function(t, e) {
        p.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), d.style || (p.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var we = /^(?:input|select|textarea|button|object)$/i,
        _e = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(t, e) {
            return G(this, p.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = p.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), p.extend({
        prop: function(t, e, i) {
            var n, o, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && p.isXMLDoc(t) || (e = p.propFix[e] || e, o = p.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = p.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : we.test(t.nodeName) || _e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), d.hrefNormalized || p.each(["href", "src"], function(t, e) {
        p.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), d.optSelected || (p.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), d.enctype || (p.propFix.enctype = "encoding");
    var xe = /[\t\r\n\f]/g;

    function Ce(t) {
        return p.attr(t, "class") || ""
    }
    p.fn.extend({
        addClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).addClass(t.call(this, e, Ce(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(D) || []; i = this[l++];)
                    if (o = Ce(i), n = 1 === i.nodeType && (" " + o + " ").replace(xe, " ")) {
                        for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        o !== (a = p.trim(n)) && p.attr(i, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, s, r, a, l = 0;
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).removeClass(t.call(this, e, Ce(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(D) || []; i = this[l++];)
                    if (o = Ce(i), n = 1 === i.nodeType && (" " + o + " ").replace(xe, " ")) {
                        for (r = 0; s = e[r++];)
                            for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                        o !== (a = p.trim(n)) && p.attr(i, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : p.isFunction(t) ? this.each(function(i) {
                p(this).toggleClass(t.call(this, i, Ce(this), e), e)
            }) : this.each(function() {
                var e, n, o, s;
                if ("string" === i)
                    for (n = 0, o = p(this), s = t.match(D) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== i || ((e = Ce(this)) && p._data(this, "__className__", e), p.attr(this, "class", e || !1 === t ? "" : p._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + Ce(i) + " ").replace(xe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        p.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), p.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Te = t.location,
        $e = p.now(),
        Ee = /\?/,
        Se = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            o = p.trim(e + "");
        return o && !p.trim(o.replace(Se, function(t, e, o, s) {
            return i && e && (n = 0), 0 === n ? t : (i = o || e, n += !s - !o, "")
        })) ? Function("return " + o)() : p.error("Invalid JSON: " + e)
    }, p.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? i = (new t.DOMParser).parseFromString(e, "text/xml") : ((i = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false", i.loadXML(e))
        } catch (t) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + e), i
    };
    var ke = /#.*$/,
        Ae = /([?&])_=[^&]*/,
        Oe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Le = /^(?:GET|HEAD)$/,
        Pe = /^\/\//,
        De = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ne = {},
        Ie = {},
        je = "*/".concat("*"),
        ze = Te.href,
        He = De.exec(ze.toLowerCase()) || [];

    function Re(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                s = e.toLowerCase().match(D) || [];
            if (p.isFunction(i))
                for (; n = s[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Me(t, e, i, n) {
        var o = {},
            s = t === Ie;

        function r(a) {
            var l;
            return o[a] = !0, p.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function We(t, e) {
        var i, n, o = p.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && p.extend(!0, t, i), t
    }

    function qe(t) {
        return t.style && t.style.display || p.css(t, "display")
    }
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ze,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(He[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? We(We(t, p.ajaxSettings), e) : We(p.ajaxSettings, t)
        },
        ajaxPrefilter: Re(Ne),
        ajaxTransport: Re(Ie),
        ajax: function(e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, o, s, r, a, l, c, h, d = p.ajaxSetup({}, i),
                u = d.context || d,
                f = d.context && (u.nodeType || u.jquery) ? p(u) : p.event,
                g = p.Deferred(),
                m = p.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                w = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!h)
                                for (h = {}; e = Oe.exec(r);) h[e[1].toLowerCase()] = e[2];
                            e = h[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return w || (t = b[i] = b[i] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return c && c.abort(e), C(0, e), this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ze) + "").replace(ke, "").replace(Pe, He[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = p.trim(d.dataType || "*").toLowerCase().match(D) || [""], null == d.crossDomain && (n = De.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === He[1] && n[2] === He[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (He[3] || ("http:" === He[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = p.param(d.data, d.traditional)), Me(Ne, d, i, x), 2 === w) return x;
            for (o in (l = p.event && d.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Le.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (Ee.test(s) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Ae.test(s) ? s.replace(Ae, "$1_=" + $e++) : s + (Ee.test(s) ? "&" : "?") + "_=" + $e++)), d.ifModified && (p.lastModified[s] && x.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && x.setRequestHeader("If-None-Match", p.etag[s])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + je + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(u, x, d) || 2 === w)) return x.abort();
            for (o in _ = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (c = Me(Ie, d, i, x)) {
                if (x.readyState = 1, l && f.trigger("ajaxSend", [x, d]), 2 === w) return x;
                d.async && d.timeout > 0 && (a = t.setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, c.send(y, C)
                } catch (t) {
                    if (!(2 > w)) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(e, i, n, o) {
                var h, y, b, _, C, T = i;
                2 !== w && (w = 2, a && t.clearTimeout(a), c = void 0, r = o || "", x.readyState = e > 0 ? 4 : 0, h = e >= 200 && 300 > e || 304 === e, n && (_ = function(t, e, i) {
                    for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (o)
                        for (r in a)
                            if (a[r] && a[r].test(o)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            n || (n = r)
                        }
                        s = s || n
                    }
                    return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                }(d, x, n)), _ = function(t, e, i, n) {
                    var o, s, r, a, l, c = {},
                        h = t.dataTypes.slice();
                    if (h[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (s = h.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], h.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: r ? t : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(d, _, x, h), h ? (d.ifModified && ((C = x.getResponseHeader("Last-Modified")) && (p.lastModified[s] = C), (C = x.getResponseHeader("etag")) && (p.etag[s] = C)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state, y = _.data, h = !(b = _.error))) : (b = T, !e && T || (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || T) + "", h ? g.resolveWith(u, [y, T, x]) : g.rejectWith(u, [x, T, b]), x.statusCode(v), v = void 0, l && f.trigger(h ? "ajaxSuccess" : "ajaxError", [x, d, h ? y : b]), m.fireWith(u, [x, T]), l && (f.trigger("ajaxComplete", [x, d]), --p.active || p.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(t, e, i) {
            return p.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return p.get(t, void 0, e, "script")
        }
    }), p.each(["get", "post"], function(t, e) {
        p[e] = function(t, i, n, o) {
            return p.isFunction(i) && (o = o || n, n = i, i = void 0), p.ajax(p.extend({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            }, p.isPlainObject(t) && t))
        }
    }), p._evalUrl = function(t) {
        return p.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(t) {
            if (p.isFunction(t)) return this.each(function(e) {
                p(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = p(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return p.isFunction(t) ? this.each(function(e) {
                p(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = p(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = p.isFunction(t);
            return this.each(function(i) {
                p(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(t) {
        return d.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
            if (!p.contains(t.ownerDocument || n, t)) return !0;
            for (; t && 1 === t.nodeType;) {
                if ("none" === qe(t) || "hidden" === t.type) return !0;
                t = t.parentNode
            }
            return !1
        }(t)
    }, p.expr.filters.visible = function(t) {
        return !p.expr.filters.hidden(t)
    };
    var Be = /%20/g,
        Fe = /\[\]$/,
        Ue = /\r?\n/g,
        Qe = /^(?:submit|button|image|reset|file)$/i,
        Ve = /^(?:input|select|textarea|keygen)/i;

    function Ge(t, e, i, n) {
        var o;
        if (p.isArray(e)) p.each(e, function(e, o) {
            i || Fe.test(t) ? n(t, o) : Ge(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== p.type(e)) n(t, e);
        else
            for (o in e) Ge(t + "[" + o + "]", e[o], i, n)
    }
    p.param = function(t, e) {
        var i, n = [],
            o = function(t, e) {
                e = p.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(t) || t.jquery && !p.isPlainObject(t)) p.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (i in t) Ge(i, t[i], e, o);
        return n.join("&").replace(Be, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = p.prop(this, "elements");
                return t ? p.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !p(this).is(":disabled") && Ve.test(this.nodeName) && !Qe.test(t) && (this.checked || !X.test(t))
            }).map(function(t, e) {
                var i = p(this).val();
                return null == i ? null : p.isArray(i) ? p.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ue, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ue, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? Ze() : n.documentMode > 8 ? Ke() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Ke() || Ze()
    } : Ke;
    var Xe = 0,
        Ye = {},
        Je = p.ajaxSettings.xhr();

    function Ke() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function Ze() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ye) Ye[t](void 0, !0)
    }), d.cors = !!Je && "withCredentials" in Je, (Je = d.ajax = !!Je) && p.ajaxTransport(function(e) {
        var i;
        if (!e.crossDomain || d.cors) return {
            send: function(n, o) {
                var s, r = e.xhr(),
                    a = ++Xe;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) r[s] = e.xhrFields[s];
                for (s in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[s] && r.setRequestHeader(s, n[s] + "");
                r.send(e.hasContent && e.data || null), i = function(t, n) {
                    var s, l, c;
                    if (i && (n || 4 === r.readyState))
                        if (delete Ye[a], i = void 0, r.onreadystatechange = p.noop, n) 4 !== r.readyState && r.abort();
                        else {
                            c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch (t) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                        }
                    c && o(s, l, c, r.getAllResponseHeaders())
                }, e.async ? 4 === r.readyState ? t.setTimeout(i) : r.onreadystatechange = Ye[a] = i : i()
            },
            abort: function() {
                i && i(void 0, !0)
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return p.globalEval(t), t
            }
        }
    }), p.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), p.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = n.head || p("head")[0] || n.documentElement;
            return {
                send: function(o, s) {
                    (e = n.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var ti = [],
        ei = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ti.pop() || p.expando + "_" + $e++;
            return this[t] = !0, t
        }
    }), p.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, s, r, a = !1 !== e.jsonp && (ei.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ei.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = p.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ei, "$1" + o) : !1 !== e.jsonp && (e.url += (Ee.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || p.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === s ? p(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, ti.push(o)), r && p.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || n;
        var o = C.exec(t),
            s = !i && [];
        return o ? [e.createElement(o[1])] : (o = at([t], e, s), s && s.length && p(s).remove(), p.merge([], o.childNodes))
    };
    var ii = p.fn.load;

    function ni(t) {
        return p.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    p.fn.load = function(t, e, i) {
        if ("string" != typeof t && ii) return ii.apply(this, arguments);
        var n, o, s, r = this,
            a = t.indexOf(" ");
        return a > -1 && (n = p.trim(t.slice(a, t.length)), t = t.slice(0, a)), p.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && p.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, r.html(n ? p("<div>").append(p.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        p.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), p.expr.filters.animated = function(t) {
        return p.grep(p.timers, function(e) {
            return t === e.elem
        }).length
    }, p.offset = {
        setOffset: function(t, e, i) {
            var n, o, s, r, a, l, c = p.css(t, "position"),
                h = p(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = p.css(t, "top"), l = p.css(t, "left"), ("absolute" === c || "fixed" === c) && p.inArray("auto", [s, l]) > -1 ? (r = (n = h.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(e) && (e = e.call(t, i, p.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, p.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                p.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (e = s.documentElement, p.contains(e, o) ? (void 0 !== o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = ni(s), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === p.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), p.nodeName(t[0], "html") || (i = t.offset()), i.top += p.css(t[0], "borderTopWidth", !0), i.left += p.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - p.css(n, "marginTop", !0),
                    left: e.left - i.left - p.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !p.nodeName(t, "html") && "static" === p.css(t, "position");) t = t.offsetParent;
                return t || Rt
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        p.fn[t] = function(n) {
            return G(this, function(t, n, o) {
                var s = ni(t);
                return void 0 === o ? s ? e in s ? s[e] : s.document.documentElement[n] : t[n] : void(s ? s.scrollTo(i ? p(s).scrollLeft() : o, i ? o : p(s).scrollTop()) : t[n] = o)
            }, t, n, arguments.length, null)
        }
    }), p.each(["top", "left"], function(t, e) {
        p.cssHooks[e] = Bt(d.pixelPosition, function(t, i) {
            return i ? (i = Wt(t, e), zt.test(i) ? p(t).position()[e] + "px" : i) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        p.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            p.fn[n] = function(n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === o ? "margin" : "border");
                return G(this, function(e, i, n) {
                    var o;
                    return p.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? p.css(e, i, r) : p.style(e, i, n, r)
                }, e, s ? n : void 0, s, null)
            }
        })
    }), p.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var oi = t.jQuery,
        si = t.$;
    return p.noConflict = function(e) {
        return t.$ === p && (t.$ = si), e && t.jQuery === p && (t.jQuery = oi), p
    }, e || (t.jQuery = t.$ = p), p
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
"use strict";
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
"use strict";
t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
        n = this;
    return t(this).one("bsTransitionEnd", function() {
        i = !0
    }), setTimeout(function() {
        i || t(n).trigger(t.support.transition.end)
    }, e), this
}, t(function() {
    t.support.transition = function() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(t) {
"use strict";
var e = '[data-dismiss="alert"]',
    i = function(i) {
        t(i).on("click", e, this.close)
    };
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function n() {
        r.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
        s = o.attr("data-target");
    s || (s = (s = o.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
    var r = t("#" === s ? [] : s);
    e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
};
var n = t.fn.alert;
t.fn.alert = function(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.alert");
        o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
    })
}, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = n, this
}, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.button"),
            s = "object" == typeof e && e;
        o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
}
var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
};
i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
}, i.prototype.setState = function(e) {
    var i = "disabled",
        n = this.$element,
        o = n.is("input") ? "val" : "html",
        s = n.data();
    e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
        n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
}, i.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var n = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = n, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var n = t(i.target).closest(".btn");
    e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.carousel"),
            s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
            r = "string" == typeof e ? e : s.slide;
        o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
    })
}
var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e);
    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
    var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(n)
}, i.prototype.to = function(t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
}, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, i.prototype.slide = function(e, n) {
    var o = this.$element.find(".item.active"),
        s = n || this.getItemForDirection(e, o),
        r = this.interval,
        a = "next" == e ? "left" : "right",
        l = this;
    if (s.hasClass("active")) return this.sliding = !1;
    var c = s[0],
        h = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
    if (this.$element.trigger(h), !h.isDefaultPrevented()) {
        if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(s)]);
            d && d.addClass("active")
        }
        var u = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
            s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(u)
            }, 0)
        }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
    }
};
var n = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = n, this
};
var o = function(i) {
    var n, o = t(this),
        s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (s.hasClass("carousel")) {
        var r = t.extend({}, s.data(), o.data()),
            a = o.attr("data-slide-to");
        a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var i = t(this);
        e.call(i, i.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(n)
}

function i(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.collapse"),
            s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
    })
}
var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
}, n.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
            var s = t.Event("show.bs.collapse");
            if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return a.call(this);
                var l = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
            }
        }
    }
}, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var o = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
        }
    }
}, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, n.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
        var o = t(n);
        this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
}, n.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var o = t.fn.collapse;
t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
    var o = t(this);
    o.attr("data-target") || n.preventDefault();
    var s = e(o),
        r = s.data("bs.collapse") ? "toggle" : o.data();
    i.call(s, r)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i = e.attr("data-target");
    i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && t(i);
    return n && n.length ? n : e.parent()
}

function i(i) {
    i && 3 === i.which || (t(n).remove(), t(o).each(function() {
        var n = t(this),
            o = e(n),
            s = {
                relatedTarget: this
            };
        o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
    }))
}
var n = ".dropdown-backdrop",
    o = '[data-toggle="dropdown"]',
    s = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
s.VERSION = "3.3.7", s.prototype.toggle = function(n) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
        var s = e(o),
            r = s.hasClass("open");
        if (i(), !r) {
            "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
            var a = {
                relatedTarget: this
            };
            if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
            o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
        }
        return !1
    }
}, s.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
        var n = t(this);
        if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
            var s = e(n),
                r = s.hasClass("open");
            if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(o).trigger("focus"), n.trigger("click");
            var a = s.find(".dropdown-menu li:not(.disabled):visible a");
            if (a.length) {
                var l = a.index(i.target);
                38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
            }
        }
    }
};
var r = t.fn.dropdown;
t.fn.dropdown = function(e) {
    return this.each(function() {
        var i = t(this),
            n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
    })
}, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = r, this
}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, n) {
    return this.each(function() {
        var o = t(this),
            s = o.data("bs.modal"),
            r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
        s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
    })
}
var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, i.prototype.show = function(e) {
    var n = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        n.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var o = t.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
        var s = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        o ? n.$dialog.one("bsTransitionEnd", function() {
            n.$element.trigger("focus").trigger(s)
        }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
    }))
}, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
}, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, i.prototype.backdrop = function(e) {
    var n = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var s = t.support.transition && o;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var r = function() {
            n.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
    } else e && e()
}, i.prototype.handleUpdate = function() {
    this.adjustDialog()
}, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, i.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var n = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = n, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var n = t(this),
        o = n.attr("href"),
        s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        r = s.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, s.data(), n.data());
    n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
            n.is(":visible") && n.trigger("focus")
        })
    }), e.call(s, r, this)
})
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, e.prototype.init = function(e, i, n) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
        var r = o[s];
        if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != r) {
            var a = "hover" == r ? "mouseenter" : "focusin",
                l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.getOptions = function(e) {
    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, e.prototype.getDelegateOptions = function() {
    var e = {},
        i = this.getDefaults();
    return this._options && t.each(this._options, function(t, n) {
        i[t] != n && (e[t] = n)
    }), e
}, e.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
        "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
}, e.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, e.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
        "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
}, e.prototype.show = function() {
    var i = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(i);
        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (i.isDefaultPrevented() || !n) return;
        var o = this,
            s = this.tip(),
            r = this.getUID(this.type);
        this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
        c && (a = a.replace(l, "") || "top"), s.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var h = this.getPosition(),
            d = s[0].offsetWidth,
            u = s[0].offsetHeight;
        if (c) {
            var p = a,
                f = this.getPosition(this.$viewport);
            a = "bottom" == a && h.bottom + u > f.bottom ? "top" : "top" == a && h.top - u < f.top ? "bottom" : "right" == a && h.right + d > f.width ? "left" : "left" == a && h.left - d < f.left ? "right" : a, s.removeClass(p).addClass(a)
        }
        var g = this.getCalculatedOffset(a, h, d, u);
        this.applyPlacement(g, a);
        var m = function() {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
    }
}, e.prototype.applyPlacement = function(e, i) {
    var n = this.tip(),
        o = n[0].offsetWidth,
        s = n[0].offsetHeight,
        r = parseInt(n.css("margin-top"), 10),
        a = parseInt(n.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
        using: function(t) {
            n.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), n.addClass("in");
    var l = n[0].offsetWidth,
        c = n[0].offsetHeight;
    "top" == i && c != s && (e.top = e.top + s - c);
    var h = this.getViewportAdjustedDelta(i, e, l, c);
    h.left ? e.left += h.left : e.top += h.top;
    var d = /top|bottom/.test(i),
        u = d ? 2 * h.left - o + l : 2 * h.top - s + c,
        p = d ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(u, n[0][p], d)
}, e.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, e.prototype.hide = function(i) {
    function n() {
        "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), i && i()
    }
    var o = this,
        s = t(this.$tip),
        r = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(r), !r.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this
}, e.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function() {
    return this.getTitle()
}, e.prototype.getPosition = function(e) {
    var i = (e = e || this.$element)[0],
        n = "BODY" == i.tagName,
        o = i.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
    }));
    var s = window.SVGElement && i instanceof window.SVGElement,
        r = n ? {
            top: 0,
            left: 0
        } : s ? null : e.offset(),
        a = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        l = n ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, o, a, l, r)
}, e.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
        top: e.top - n,
        left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - n / 2,
        left: e.left - i
    } : {
        top: e.top + e.height / 2 - n / 2,
        left: e.left + e.width
    }
}, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var s = this.options.viewport && this.options.viewport.padding || 0,
        r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var a = e.top - s - r.scroll,
            l = e.top + s - r.scroll + n;
        a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
    } else {
        var c = e.left - s,
            h = e.left + s + i;
        c < r.left ? o.left = r.left - c : h > r.right && (o.left = r.left + r.width - h)
    }
    return o
}, e.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, e.prototype.getUID = function(t) {
    do {
        t += ~~(1e6 * Math.random())
    } while (document.getElementById(t));
    return t
}, e.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.enable = function() {
    this.enabled = !0
}, e.prototype.disable = function() {
    this.enabled = !1
}, e.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, e.prototype.toggle = function(e) {
    var i = this;
    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
}, e.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
};
var i = t.fn.tooltip;
t.fn.tooltip = function(i) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.tooltip"),
            s = "object" == typeof i && i;
        !o && /destroy|hide/.test(i) || (o || n.data("bs.tooltip", o = new e(this, s)), "string" == typeof i && o[i]())
    })
}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
}
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, e.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, e.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = function(i) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.popover"),
            s = "object" == typeof i && i;
        !o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new e(this, s)), "string" == typeof i && o[i]())
    })
}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(i, n) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function i(i) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.scrollspy"),
            s = "object" == typeof i && i;
        o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
    })
}
e.VERSION = "3.3.7", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        i = "offset",
        n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            o = e.data("target") || e.attr("href"),
            s = /^#./.test(o) && t(o);
        return s && s.length && s.is(":visible") && [
            [s[i]().top + n, o]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        n = this.options.offset + i - this.$scrollElement.height(),
        o = this.offsets,
        s = this.targets,
        r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
    if (r && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        n = t(i).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var n = t.fn.scrollspy;
t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = n, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        i.call(e, e.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.tab");
        o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
    })
}
var i = function(e) {
    this.element = t(e)
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        n = e.data("target");
    if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = i.find(".active:last a"),
            s = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            r = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
        if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
            var a = t(n);
            this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                o.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o[0]
                })
            })
        }
    }
}, i.prototype.activate = function(e, n, o) {
    function s() {
        r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var r = n.find("> .active"),
        a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
    r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
};
var n = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = n, this
};
var o = function(i) {
    i.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.affix"),
            s = "object" == typeof e && e;
        o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
    })
}
var i = function(e, n) {
    this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
}, i.prototype.getState = function(t, e, i, n) {
    var o = this.$target.scrollTop(),
        s = this.$element.offset(),
        r = this.$target.height();
    if (null != i && "top" == this.affixed) return o < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
    var a = null == this.affixed,
        l = a ? o : s.top;
    return null != i && o <= i ? "top" : null != n && l + (a ? r : e) >= t - n && "bottom"
}, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            n = this.options.offset,
            o = n.top,
            s = n.bottom,
            r = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
        var a = this.getState(r, e, o, s);
        if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
                c = t.Event(l + ".bs.affix");
            if (this.$element.trigger(c), c.isDefaultPrevented()) return;
            this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == a && this.$element.offset({
            top: r - e - s
        })
    }
};
var n = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = n, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var i = t(this),
            n = i.data();
        n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
    })
})
}(jQuery),
function() {
var t, e, i, n, o, s = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    r = [].indexOf || function(t) {
        for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    };
e = function() {
    function t() {}
    return t.prototype.extend = function(t, e) {
        var i, n;
        for (i in e) n = e[i], null == t[i] && (t[i] = n);
        return t
    }, t.prototype.isMobile = function(t) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
    }, t.prototype.createEvent = function(t, e, i, n) {
        var o;
        return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
    }, t.prototype.emitEvent = function(t, e) {
        return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
    }, t.prototype.addEvent = function(t, e, i) {
        return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
    }, t.prototype.removeEvent = function(t, e, i) {
        return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
    }, t.prototype.innerHeight = function() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, t
}(), i = this.WeakMap || this.MozWeakMap || (i = function() {
    function t() {
        this.keys = [], this.values = []
    }
    return t.prototype.get = function(t) {
        var e, i, n, o;
        for (e = i = 0, n = (o = this.keys).length; n > i; e = ++i)
            if (o[e] === t) return this.values[e]
    }, t.prototype.set = function(t, e) {
        var i, n, o, s;
        for (i = n = 0, o = (s = this.keys).length; o > n; i = ++n)
            if (s[i] === t) return void(this.values[i] = e);
        return this.keys.push(t), this.values.push(e)
    }, t
}()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
    function t() {
        "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return t.notSupported = !0, t.prototype.observe = function() {}, t
}()), n = this.getComputedStyle || function(t, e) {
    return this.getPropertyValue = function(e) {
        var i;
        return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
            return e.toUpperCase()
        }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
    }, this
}, o = /(\-([a-z]){1})/g, this.WOW = function() {
    function o(t) {
        null == t && (t = {}), this.scrollCallback = s(this.scrollCallback, this), this.scrollHandler = s(this.scrollHandler, this), this.resetAnimation = s(this.resetAnimation, this), this.start = s(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }
    return o.prototype.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null
    }, o.prototype.init = function() {
        var t;
        return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, o.prototype.start = function() {
        var e, i, n, o;
        if (this.stopped = !1, this.boxes = function() {
                var t, i, n, o;
                for (o = [], t = 0, i = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; i > t; t++) e = n[t], o.push(e);
                return o
            }.call(this), this.all = function() {
                var t, i, n, o;
                for (o = [], t = 0, i = (n = this.boxes).length; i > t; t++) e = n[t], o.push(e);
                return o
            }.call(this), this.boxes.length)
            if (this.disabled()) this.resetStyle();
            else
                for (i = 0, n = (o = this.boxes).length; n > i; i++) e = o[i], this.applyStyle(e, !0);
        return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
            return function(e) {
                var i, n, o, s, r;
                for (r = [], i = 0, n = e.length; n > i; i++) s = e[i], r.push(function() {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = s.addedNodes || []).length; e > t; t++) o = i[t], n.push(this.doSync(o));
                    return n
                }.call(t));
                return r
            }
        }(this)).observe(document.body, {
            childList: !0,
            subtree: !0
        }) : void 0
    }, o.prototype.stop = function() {
        return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, o.prototype.sync = function(e) {
        return t.notSupported ? this.doSync(this.element) : void 0
    }, o.prototype.doSync = function(t) {
        var e, i, n, o, s;
        if (null == t && (t = this.element), 1 === t.nodeType) {
            for (s = [], i = 0, n = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; n > i; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), s.push(this.scrolled = !0)) : s.push(void 0);
            return s
        }
    }, o.prototype.show = function(t) {
        return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
    }, o.prototype.applyStyle = function(t, e) {
        var i, n, o, s;
        return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((s = this, function() {
            return s.customStyle(t, e, n, i, o)
        }))
    }, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
        return window.requestAnimationFrame(t)
    } : function(t) {
        return t()
    }, o.prototype.resetStyle = function() {
        var t, e, i, n, o;
        for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
        return o
    }, o.prototype.resetAnimation = function(t) {
        var e;
        return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
    }, o.prototype.customStyle = function(t, e, i, n, o) {
        return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
            animationDuration: i
        }), n && this.vendorSet(t.style, {
            animationDelay: n
        }), o && this.vendorSet(t.style, {
            animationIterationCount: o
        }), this.vendorSet(t.style, {
            animationName: e ? "none" : this.cachedAnimationName(t)
        }), t
    }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
        var i, n, o, s;
        for (i in n = [], e) o = e[i], t["" + i] = o, n.push(function() {
            var e, n, r, a;
            for (a = [], e = 0, n = (r = this.vendors).length; n > e; e++) s = r[e], a.push(t["" + s + i.charAt(0).toUpperCase() + i.substr(1)] = o);
            return a
        }.call(this));
        return n
    }, o.prototype.vendorCSS = function(t, e) {
        var i, o, s, r, a, l;
        for (r = (a = n(t)).getPropertyCSSValue(e), i = 0, o = (s = this.vendors).length; o > i; i++) l = s[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
        return r
    }, o.prototype.animationName = function(t) {
        var e;
        try {
            e = this.vendorCSS(t, "animation-name").cssText
        } catch (i) {
            e = n(t).getPropertyValue("animation-name")
        }
        return "none" === e ? "" : e
    }, o.prototype.cacheAnimationName = function(t) {
        return this.animationNameCache.set(t, this.animationName(t))
    }, o.prototype.cachedAnimationName = function(t) {
        return this.animationNameCache.get(t)
    }, o.prototype.scrollHandler = function() {
        return this.scrolled = !0
    }, o.prototype.scrollCallback = function() {
        var t;
        return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
            var e, i, n, o;
            for (o = [], e = 0, i = (n = this.boxes).length; i > e; e++)(t = n[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
            return o
        }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, o.prototype.offsetTop = function(t) {
        for (var e; void 0 === t.offsetTop;) t = t.parentNode;
        for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
        return e
    }, o.prototype.isVisible = function(t) {
        var e, i, n, o, s;
        return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (s = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, o >= n && e >= s
    }, o.prototype.util = function() {
        return null != this._util ? this._util : this._util = new e
    }, o.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, o
}()
}.call(this);
var wow = new WOW({
boxClass: "wow",
animateClass: "animated",
offset: 0,
mobile: !1,
live: !0,
callback: function(t) {},
scrollContainer: null
});
wow.init(),
function(t, e) {
    "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? module.exports = e(t) : t.smoothScroll = e(t)
}("undefined" != typeof global ? global : this.window || this.global, function(t) {
    "use strict";
    var e, i, n, o, s, r, a, l = {},
        c = "querySelector" in document && "addEventListener" in t,
        h = {
            selector: "[data-scroll]",
            selectorHeader: null,
            speed: 500,
            easing: "easeInOutCubic",
            offset: 0,
            callback: function() {}
        },
        d = function() {
            var t = {},
                e = !1,
                i = 0,
                n = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
            for (var o = function(i) {
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e && "[object Object]" === Object.prototype.toString.call(i[n]) ? t[n] = d(!0, t[n], i[n]) : t[n] = i[n])
                }; n > i; i++) o(arguments[i]);
            return t
        },
        u = function(t, e, i) {
            var n = 0;
            if (t.offsetParent)
                do {
                    n += t.offsetTop, t = t.offsetParent
                } while (t);
            return n = Math.max(n - e - i, 0), Math.min(n, f() - p())
        },
        p = function() {
            return Math.max(document.documentElement.clientHeight, t.innerHeight || 0)
        },
        f = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        },
        g = function(t) {
            return t ? function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
            }(t) + t.offsetTop : 0
        };
    l.animateScroll = function(i, n, r) {
        var l = function(t) {
                return t && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {}
            }(n ? n.getAttribute("data-options") : null),
            c = d(e || h, r || {}, l),
            p = "[object Number]" === Object.prototype.toString.call(i),
            m = p || !i.tagName ? null : i;
        if (p || m) {
            var v = t.pageYOffset;
            c.selectorHeader && !o && (o = document.querySelector(c.selectorHeader)), s || (s = g(o));
            var y, b, w = p ? i : u(m, s, parseInt(c.offset, 10)),
                _ = w - v,
                x = f(),
                C = 0;
            0 === t.pageYOffset && t.scrollTo(0, 0), clearInterval(a), a = setInterval(function() {
                var e, o, s, r;
                y = (y = (C += 16) / parseInt(c.speed, 10)) > 1 ? 1 : y, b = v + _ * function(t, e) {
                    var i;
                    return "easeInQuad" === t && (i = e * e), "easeOutQuad" === t && (i = e * (2 - e)), "easeInOutQuad" === t && (i = .5 > e ? 2 * e * e : (4 - 2 * e) * e - 1), "easeInCubic" === t && (i = e * e * e), "easeOutCubic" === t && (i = --e * e * e + 1), "easeInOutCubic" === t && (i = .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1), "easeInQuart" === t && (i = e * e * e * e), "easeOutQuart" === t && (i = 1 - --e * e * e * e), "easeInOutQuart" === t && (i = .5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e), "easeInQuint" === t && (i = e * e * e * e * e), "easeOutQuint" === t && (i = 1 + --e * e * e * e * e), "easeInOutQuint" === t && (i = .5 > e ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e), i || e
                }(c.easing, y), t.scrollTo(0, Math.floor(b)), e = b, o = w, s = a, r = t.pageYOffset, (e == o || r == o || t.innerHeight + r >= x) && (clearInterval(s), function(e, i, n) {
                    p || (e.focus(), document.activeElement.id !== e.id && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), t.scrollTo(0, i))
                }(i, o), c.callback(i, n))
            }, 16)
        }
    };
    var m = function(e) {
            t.location.hash, i && (i.id = i.getAttribute("data-scroll-id"), l.animateScroll(i, n), i = null, n = null)
        },
        v = function(o) {
            if (0 === o.button && !o.metaKey && !o.ctrlKey && (n = function(t, e) {
                    var i, n, o = e.charAt(0),
                        s = "classList" in document.documentElement;
                    for ("[" === o && (i = (e = e.substr(1, e.length - 2)).split("=")).length > 1 && (n = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, "")); t && t !== document && 1 === t.nodeType; t = t.parentNode) {
                        if ("." === o)
                            if (s) {
                                if (t.classList.contains(e.substr(1))) return t
                            } else if (new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(t.className)) return t;
                        if ("#" === o && t.id === e.substr(1)) return t;
                        if ("[" === o && t.hasAttribute(i[0])) {
                            if (!n) return t;
                            if (t.getAttribute(i[0]) === i[1]) return t
                        }
                        if (t.tagName.toLowerCase() === e) return t
                    }
                    return null
                }(o.target, e.selector)) && "a" === n.tagName.toLowerCase() && n.hostname === t.location.hostname && n.pathname === t.location.pathname && /#/.test(n.href)) {
                var s = function(t) {
                    "#" === t.charAt(0) && (t = t.substr(1));
                    for (var e, i = String(t), n = i.length, o = -1, s = "", r = i.charCodeAt(0); ++o < n;) {
                        if (0 === (e = i.charCodeAt(o))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        s += e >= 1 && 31 >= e || 127 == e || 0 === o && e >= 48 && 57 >= e || 1 === o && e >= 48 && 57 >= e && 45 === r ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e ? i.charAt(o) : "\\" + i.charAt(o)
                    }
                    return "#" + s
                }(n.hash);
                if ("#" === s) {
                    o.preventDefault();
                    var r = (i = document.body).id ? i.id : "smooth-scroll-top";
                    return i.setAttribute("data-scroll-id", r), i.id = "", void(t.location.hash.substring(1) === r ? m() : t.location.hash = r)
                }(i = document.querySelector(s)) && (i.setAttribute("data-scroll-id", i.id), i.id = "", n.hash === t.location.hash && (o.preventDefault(), m()))
            }
        },
        y = function(t) {
            r || (r = setTimeout(function() {
                r = null, s = g(o)
            }, 66))
        };
    return l.destroy = function() {
        e && (document.removeEventListener("click", v, !1), t.removeEventListener("resize", y, !1), e = null, i = null, n = null, o = null, s = null, r = null, a = null)
    }, l.init = function(i) {
        c && (l.destroy(), e = d(h, i || {}), o = e.selectorHeader ? document.querySelector(e.selectorHeader) : null, s = g(o), document.addEventListener("click", v, !1), t.addEventListener("hashchange", m, !1), o && t.addEventListener("resize", y, !1))
    }, l
}), smoothScroll.init({
    selector: "[data-scroll]",
    selectorHeader: "[data-scroll-header]",
    speed: 500,
    easing: "Linear",
    offset: 90,
    updateURL: !0,
    callback: function(t, e) {}
}),
function(t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function i(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
        return null == i ? "" : i[1]
    }
    t.prettyPhoto = {
        version: "3.1.6"
    }, t.fn.prettyPhoto = function(n) {
        function o() {
            t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (_ / 2 - u.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: u.contentHeight,
                width: u.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: x / 2 - u.containerWidth / 2 < 0 ? 0 : x / 2 - u.containerWidth / 2,
                width: u.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(u.height).width(u.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == l(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (u.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || y || p || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), p = !0
            }), isSet && settings.overlay_gallery && "image" == l(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((u.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"), n.ajaxcallback()
        }

        function s(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                t(".pp_loaderIcon").show(), e()
            })
        }

        function r(t, e) {
            if (resized = !1, a(t, e), imageWidth = t, imageHeight = e, (v > x || m > _) && doresize && settings.allow_resize && !w) {
                for (resized = !0, fitting = !1; !fitting;) v > x ? (imageWidth = x - 200, imageHeight = e / t * imageWidth) : m > _ ? (imageHeight = _ - 200, imageWidth = t / e * imageHeight) : fitting = !0, m = imageHeight, v = imageWidth;
                (v > x || m > _) && r(v, m), a(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(m),
                containerWidth: Math.floor(v) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(f),
                contentWidth: Math.floor(g),
                resized: resized
            }
        }

        function a(e, i) {
            e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), f = i + detailsHeight, g = e, m = f + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), v = e
        }

        function l(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }

        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = h(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = _ / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > _) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: x / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function h() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function d() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var e = 0; e < pp_images.length; e++) pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[e]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(e) {
                    t(this).find("a").click(function() {
                        return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function() {
                settings.modal || t.prettyPhoto.close()
            }), t("a.pp_close").bind("click", function() {
                return t.prettyPhoto.close(), !1
            }), settings.allow_expand && t("a.pp_expand").bind("click", function() {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), s(function() {
                    t.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
            }), c()
        }
        n = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, n);
        var u, p, f, g, m, v, y, b = this,
            w = !1,
            _ = t(window).height(),
            x = t(window).width();
        return doresize = !0, scroll_pos = h(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(), _ = t(window).height(), x = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(x)
        }), n.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault()
            }
        }), t.prettyPhoto.initialize = function() {
            return settings = n, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(b, function(e) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
            }) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(b, function(e) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
            }) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(b, function(e) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
            }) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), d(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                c()
            }), t.prettyPhoto.open(), !1
        }, t.prettyPhoto.open = function(e) {
            return "undefined" == typeof settings && (settings = n, pp_images = t.makeArray(arguments[0]), pp_titles = t.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = t.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, d(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), t(pp_images).size() > 1 ? t(".pp_nav").show() : t(".pp_nav").hide(), t(".pp_loaderIcon").show(), settings.deeplinking && "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/"), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()), void 0 !== pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString(), w = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), w = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), w = !0), $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && void 0 !== pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, l(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            u = r(imgPreloader.width, imgPreloader.height), o()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        u = r(movie_width, movie_height), movie_id = i("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += i("rel", pp_images[set_position]) ? "?rel=" + i("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        u = r(movie_width, movie_height), movie_id = pp_images[set_position];
                        var e = movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);
                        movie = "http://player.vimeo.com/video/" + e[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = u.width + "/embed/?moog_width=" + u.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, u.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        (u = r(movie_width, movie_height)).height += 15, u.contentHeight += 15, u.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        u = r(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        u = r(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, u = r(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function(t) {
                            toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, o()
                        });
                        break;
                    case "custom":
                        u = r(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, u = r(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, o())
            }), !1
        }, t.prettyPhoto.changePage = function(e) {
            currentGalleryPage = 0, "previous" == e ? (set_position--, set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++, set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), s(function() {
                t.prettyPhoto.open()
            })
        }, t.prettyPhoto.changeGalleryPage = function(t) {
            "next" == t ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, t.prettyPhoto.startSlideshow = function() {
            void 0 === y ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return t.prettyPhoto.stopSlideshow(), !1
            }), y = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }, t.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(), !1
            }), clearInterval(y), y = void 0
        }, t.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                t(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto"), settings.callback(), doresize = !0, p = !1, delete settings
            }))
        }, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            t("a[" + n.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;

function arrayify(t) {
return Array.prototype.slice.call(t)
}

function chooseCap(t) {
var e = parseInt(t, 10);
return environment < e ? environment : e
}

function forceOriginalDimensions(t) {
return t.hasAttribute("data-no-resize") || (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))), t
}

function setSourceIfAvailable(t, e) {
var i = t.nodeName.toLowerCase(),
    n = document.createElement("img");
n.addEventListener("load", function() {
    "img" === i ? forceOriginalDimensions(t).setAttribute("src", e) : t.style.backgroundImage = "url(" + e + ")"
}), n.setAttribute("src", e), t.setAttribute(processedAttr, !0)
}

function dynamicSwapImage(t, e) {
var i = chooseCap(arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2]);
e && i > 1 && setSourceIfAvailable(t, e.replace(srcReplace, "@" + i + "x$1"))
}

function manualSwapImage(t, e, i) {
environment > 1 && setSourceIfAvailable(t, i)
}

function getImages(t) {
return t ? "function" == typeof t.forEach ? t : arrayify(t) : "undefined" != typeof document ? arrayify(document.querySelectorAll(selector)) : []
}

function cleanBgImg(t) {
return t.style.backgroundImage.replace(inlineReplace, "$2")
}

function retina(t) {
getImages(t).forEach(function(t) {
    if (!t.getAttribute(processedAttr)) {
        var e = "img" === t.nodeName.toLowerCase() ? t.getAttribute("src") : cleanBgImg(t),
            i = t.getAttribute("data-rjs");
        isNaN(parseInt(i, 10)) ? manualSwapImage(t, e, i) : dynamicSwapImage(t, e, i)
    }
})
}
jQuery("a[data-gal]").each(function() {
    jQuery(this).attr("rel", jQuery(this).data("gal"))
}), jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
    animationSpeed: "slow",
    theme: "light_square",
    slideshow: !0,
    overlay_gallery: !0,
    social_tools: !1,
    deeplinking: !1
}),
function() {
    var t, e, i, n, o, s, r, a;
    window.device = {}, e = window.document.documentElement, a = window.navigator.userAgent.toLowerCase(), device.ios = function() {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function() {
        return i("iphone")
    }, device.ipod = function() {
        return i("ipod")
    }, device.ipad = function() {
        return i("ipad")
    }, device.android = function() {
        return i("android")
    }, device.androidPhone = function() {
        return device.android() && i("mobile")
    }, device.androidTablet = function() {
        return device.android() && !i("mobile")
    }, device.blackberry = function() {
        return i("blackberry") || i("bb10") || i("rim")
    }, device.blackberryPhone = function() {
        return device.blackberry() && !i("tablet")
    }, device.blackberryTablet = function() {
        return device.blackberry() && i("tablet")
    }, device.windows = function() {
        return i("windows")
    }, device.windowsPhone = function() {
        return device.windows() && i("phone")
    }, device.windowsTablet = function() {
        return device.windows() && i("touch")
    }, device.fxos = function() {
        return i("(mobile; rv:") || i("(tablet; rv:")
    }, device.fxosPhone = function() {
        return device.fxos() && i("mobile")
    }, device.fxosTablet = function() {
        return device.fxos() && i("tablet")
    }, device.mobile = function() {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone()
    }, device.tablet = function() {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.portrait = function() {
        return 90 !== Math.abs(window.orientation)
    }, device.landscape = function() {
        return 90 === Math.abs(window.orientation)
    }, i = function(t) {
        return -1 !== a.indexOf(t)
    }, o = function(t) {
        var i;
        return i = new RegExp(t, "i"), e.className.match(i)
    }, t = function(t) {
        return o(t) ? void 0 : e.className += " " + t
    }, r = function(t) {
        return o(t) ? e.className = e.className.replace(t, "") : void 0
    }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") : t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : "desktop"), n = function() {
        return device.landscape() ? (r("portrait"), t("landscape")) : (r("landscape"), t("portrait"))
    }, s = "onorientationchange" in window ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(s, n, !1) : window.attachEvent ? window.attachEvent(s, n) : window[s] = n, n()
}.call(this),
function(t, e, i, n) {
    function o(e, i) {
        this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
    }
    var s = "stellar",
        r = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(t) {
                t.hide()
            },
            showElement: function(t) {
                t.show()
            }
        },
        a = {
            scroll: {
                getLeft: function(t) {
                    return t.scrollLeft()
                },
                setLeft: function(t, e) {
                    t.scrollLeft(e)
                },
                getTop: function(t) {
                    return t.scrollTop()
                },
                setTop: function(t, e) {
                    t.scrollTop(e)
                }
            },
            position: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            },
            margin: {
                getLeft: function(t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                },
                getTop: function(t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            },
            transform: {
                getLeft: function(t) {
                    var e = getComputedStyle(t[0])[c];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                },
                getTop: function(t) {
                    var e = getComputedStyle(t[0])[c];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        },
        l = {
            position: {
                setLeft: function(t, e) {
                    t.css("left", e)
                },
                setTop: function(t, e) {
                    t.css("top", e)
                }
            },
            transform: {
                setPosition: function(t, e, i, n, o) {
                    t[0].style[c] = "translate3d(" + (e - i) + "px, " + (n - o) + "px, 0)"
                }
            }
        },
        c = function() {
            var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = t("script")[0].style,
                o = "";
            for (e in n)
                if (i.test(e)) {
                    o = e.match(i)[0];
                    break
                }
            return "WebkitOpacity" in n && (o = "Webkit"), "KhtmlOpacity" in n && (o = "Khtml"),
                function(t) {
                    return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
                }
        }()("transform"),
        h = t("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== n,
        d = h ? function(t, e, i) {
            t.css({
                "background-position-x": e,
                "background-position-y": i
            })
        } : function(t, e, i) {
            t.css("background-position", e + " " + i)
        },
        u = h ? function(t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function(t) {
            return t.css("background-position").split(" ")
        },
        p = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        };
    o.prototype = {
        init: function() {
            this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== n ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var t = this,
                e = a[t.options.scrollProperty];
            this._getScrollLeft = function() {
                return e.getLeft(t.$scrollElement)
            }, this._getScrollTop = function() {
                return e.getTop(t.$scrollElement)
            }
        },
        _defineSetters: function() {
            var e = this,
                i = a[e.options.scrollProperty],
                n = l[e.options.positionProperty],
                o = i.setLeft,
                s = i.setTop;
            this._setScrollLeft = "function" == typeof o ? function(t) {
                o(e.$scrollElement, t)
            } : t.noop, this._setScrollTop = "function" == typeof s ? function(t) {
                s(e.$scrollElement, t)
            } : t.noop, this._setPosition = n.setPosition || function(t, i, o, s, r) {
                e.options.horizontalScrolling && n.setLeft(t, i, o), e.options.verticalScrolling && n.setTop(t, s, r)
            }
        },
        _handleWindowLoadAndResize: function() {
            var i = this,
                n = t(e);
            i.options.responsive && n.bind("load." + this.name, function() {
                i.refresh()
            }), n.bind("resize." + this.name, function() {
                i._detectViewport(), i.options.responsive && i.refresh()
            })
        },
        refresh: function(i) {
            var n = this,
                o = n._getScrollLeft(),
                s = n._getScrollTop();
            i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
                var t = n._getScrollLeft(),
                    e = n._getScrollTop();
                n._setScrollLeft(t + 1), n._setScrollTop(e + 1), n._setScrollLeft(t), n._setScrollTop(e)
            }), this._setScrollLeft(o), this._setScrollTop(s)
        },
        _detectViewport: function() {
            var t = this.$viewportElement.offset(),
                e = null !== t && t !== n;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
        },
        _findParticles: function() {
            var e = this;
            if (this._getScrollLeft(), this._getScrollTop(), this.particles !== n)
                for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", n);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
                var i, o, s, r, a, l, c, h, d, u = t(this),
                    p = 0,
                    f = 0,
                    g = 0,
                    m = 0;
                if (u.data("stellar-elementIsActive")) {
                    if (u.data("stellar-elementIsActive") !== this) return
                } else u.data("stellar-elementIsActive", this);
                e.options.showElement(u), u.data("stellar-startingLeft") ? (u.css("left", u.data("stellar-startingLeft")), u.css("top", u.data("stellar-startingTop"))) : (u.data("stellar-startingLeft", u.css("left")), u.data("stellar-startingTop", u.css("top"))), s = u.position().left, r = u.position().top, a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), h = u.offset().left - a, d = u.offset().top - l, u.parents().each(function() {
                    var e = t(this);
                    return !0 === e.data("stellar-offset-parent") ? (p = g, f = m, c = e, !1) : (g += e.position().left, void(m += e.position().top))
                }), i = u.data("stellar-horizontal-offset") !== n ? u.data("stellar-horizontal-offset") : c !== n && c.data("stellar-horizontal-offset") !== n ? c.data("stellar-horizontal-offset") : e.horizontalOffset, o = u.data("stellar-vertical-offset") !== n ? u.data("stellar-vertical-offset") : c !== n && c.data("stellar-vertical-offset") !== n ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                    $element: u,
                    $offsetParent: c,
                    isFixed: "fixed" === u.css("position"),
                    horizontalOffset: i,
                    verticalOffset: o,
                    startingPositionLeft: s,
                    startingPositionTop: r,
                    startingOffsetLeft: h,
                    startingOffsetTop: d,
                    parentOffsetLeft: p,
                    parentOffsetTop: f,
                    stellarRatio: u.data("stellar-ratio") !== n ? u.data("stellar-ratio") : 1,
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var e, i = this,
                o = this._getScrollLeft(),
                s = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
                var e, r, a, l, c, h, p, f = t(this),
                    g = u(f),
                    m = 0,
                    v = 0,
                    y = 0,
                    b = 0;
                if (f.data("stellar-backgroundIsActive")) {
                    if (f.data("stellar-backgroundIsActive") !== this) return
                } else f.data("stellar-backgroundIsActive", this);
                f.data("stellar-backgroundStartingLeft") ? d(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", g[0]), f.data("stellar-backgroundStartingTop", g[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - o, h = f.offset().top - l - s, f.parents().each(function() {
                    var e = t(this);
                    return !0 === e.data("stellar-offset-parent") ? (m = y, v = b, p = e, !1) : (y += e.position().left, void(b += e.position().top))
                }), e = f.data("stellar-horizontal-offset") !== n ? f.data("stellar-horizontal-offset") : p !== n && p.data("stellar-horizontal-offset") !== n ? p.data("stellar-horizontal-offset") : i.horizontalOffset, r = f.data("stellar-vertical-offset") !== n ? f.data("stellar-vertical-offset") : p !== n && p.data("stellar-vertical-offset") !== n ? p.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
                    $element: f,
                    $offsetParent: p,
                    isFixed: "fixed" === f.css("background-attachment"),
                    horizontalOffset: e,
                    verticalOffset: r,
                    startingValueLeft: g[0],
                    startingValueTop: g[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                    startingPositionLeft: f.position().left,
                    startingPositionTop: f.position().top,
                    startingOffsetLeft: c,
                    startingOffsetTop: h,
                    parentOffsetLeft: m,
                    parentOffsetTop: v,
                    stellarRatio: f.data("stellar-background-ratio") === n ? 1 : f.data("stellar-background-ratio")
                })
            }))
        },
        _reset: function() {
            var t, e, i, n, o;
            for (o = this.particles.length - 1; o >= 0; o--) e = (t = this.particles[o]).$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (o = this.backgrounds.length - 1; o >= 0; o--)(n = this.backgrounds[o]).$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(n.$element, n.startingValueLeft, n.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var i = this,
                n = t(e);
            n.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), n.bind("resize.horizontal-" + this.name, function() {
                i.horizontalOffset = i.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), n.bind("resize.vertical-" + this.name, function() {
                i.verticalOffset = i.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var t, e, i, n, o, s, r, a, l, c, h = this._getScrollLeft(),
                u = this._getScrollTop(),
                p = !0,
                f = !0;
            if (this.currentScrollLeft !== h || this.currentScrollTop !== u || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = h, this.currentScrollTop = u, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--) e = (t = this.particles[c]).isFixed ? 1 : 0, this.options.horizontalScrolling ? a = (s = (h + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft) - t.startingPositionLeft + t.startingOffsetLeft : (s = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? l = (r = (u + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop) - t.startingPositionTop + t.startingOffsetTop : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : h) && a < (t.isFixed ? 0 : h) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : u) && l < (t.isFixed ? 0 : u) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                for (c = this.backgrounds.length - 1; c >= 0; c--) e = (i = this.backgrounds[c]).isFixed ? 0 : 1, n = this.options.horizontalScrolling ? (h + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (u + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, d(i.$element, n, o)
            }
        },
        _handleScrollEvent: function() {
            var t = this,
                e = !1,
                i = function() {
                    t._repositionElements(), e = !1
                },
                n = function() {
                    e || (p(i), e = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, n), n()
        },
        _startAnimationLoop: function() {
            var t = this;
            this._animationLoop = function() {
                p(t._animationLoop), t._repositionElements()
            }, this._animationLoop()
        }
    }, t.fn[s] = function(e) {
        var i = arguments;
        return e === n || "object" == typeof e ? this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var n = t.data(this, "plugin_" + s);
            n instanceof o && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
        }) : void 0
    }, t[s] = function() {
        var i = t(e);
        return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
    }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
}(jQuery, this, document),
function() {
    "use strict";
    device.tablet() || device.mobile() ? $(".parallax, .parallax-layer").addClass("no-parallax") : $(window).bind("load", function() {
        $.stellar({
            positionProperty: "transform"
        })
    })
}(),
function(t, e, i, n) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    o.Defaults = {
        items: 3,
        autoplay: !0,
        loop: true,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 150,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Type = {
        Event: "event",
        State: "state"
    }, o.Plugins = {}, o.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                n = this.settings.rtl,
                o = {
                    width: "auto",
                    "margin-left": n ? e : "",
                    "margin-right": n ? "" : e
                };
            !i && this.$stage.children().css(o), t.css = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                n = this._items.length,
                o = !this.settings.autoWidth,
                s = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, s[n] = o ? e * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                n = this.settings,
                o = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                r = n.loop && i.length ? n.rewind ? o : Math.max(o, s) : 0,
                a = "",
                l = "";
            for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, s = []; ++i < e;) n = s[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, s.push(n + o * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                n = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, n.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                s = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + s,
                a = r + this.width() * o,
                l = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], o.prototype.initialize = function() {
        var e, i, o;
        this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o && this.preloadAutoWidthImages(e)), this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, o.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            n = -1,
            o = null;
        i ? (t.each(i, function(t) {
            e >= t && t > n && (n = Number(t))
        }), delete(o = t.extend({}, this.options, i[n])).responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : o = t.extend({}, this.options), null !== this.settings && this._breakpoint === n || (this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, o.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, o.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, o.prototype.width = function(t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, o.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, o.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, o.prototype.onDragStart = function(e) {
        var n = null;
        3 !== e.which && (t.support.transform ? n = {
            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        } : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, o.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            n = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            s = this.difference(this._drag.stage.start, o);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, s.x = ((s.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, s.x = Math.max(Math.min(s.x, e + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, o.prototype.onDragEnd = function(e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, o.prototype.closest = function(e, i) {
        var n = -1,
            o = this.width(),
            s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
            return "left" === i && e > r - 30 && r + 30 > e ? n = t : "right" === i && e > r - o - 30 && r - o + 30 > e ? n = t + 1 : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (n = "left" === i ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (n = e = this.maximum())), n
    }, o.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, o.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, o.prototype.current = function(t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, o.prototype.reset = function(t) {
        (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function(t, e) {
        var i = this._items.length,
            o = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || 1 > i ? t = n : (0 > t || t >= i + o) && (t = ((t - o / 2) % i + i) % i + o / 2), t
    }, o.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function(t) {
        var e, i = this.settings,
            n = this._coordinates.length,
            o = Math.abs(this._coordinates[n - 1]) - this._width,
            s = -1;
        if (i.loop) n = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge)
            for (; n - s > 1;) Math.abs(this._coordinates[e = n + s >> 1]) < o ? s = e : n = e;
        else n = i.center ? this._items.length - 1 : this._items.length - i.items;
        return t && (n -= this._clones.length / 2), Math.max(n, 0)
    }, o.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function(t) {
        return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function(t) {
        return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            o = i + this._items.length,
            s = function(t) {
                return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
            };
        return e === n ? t.map(this._clones, function(t, e) {
            return s(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? s(i) : null
        })
    }, o.prototype.speed = function(t) {
        return t !== n && (this._speed = t), this._speed
    }, o.prototype.coordinates = function(e) {
        var i, o = 1,
            s = e - 1;
        return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (o = -1, s = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * o) : i = this._coordinates[s] || 0, i = Math.ceil(i))
    }, o.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function(t, e) {
        var i = this.current(),
            n = null,
            o = t - this.relative(i),
            s = (o > 0) - (0 > o),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(o) > r / 2 && (o += -1 * s * r), (n = (((t = i + o) - a) % r + r) % r + a) !== t && l >= n - o && n - o > 0 && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, o.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.onTransitionEnd = function(t) {
        return (t === n || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, o.prototype.viewport = function() {
        var n;
        if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) n = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            n = i.documentElement.clientWidth
        }
        return n
    }, o.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function(e, i) {
        var o = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, o.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== n && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, o.prototype.destroy = function() {
        for (var n in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, o.prototype.op = function(t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
            case "<":
                return n ? t > i : i > t;
            case ">":
                return n ? i > t : t > i;
            case ">=":
                return n ? i >= t : t >= i;
            case "<=":
                return n ? t >= i : i >= t
        }
    }, o.prototype.on = function(t, e, i, n) {
        t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function(t, e, i, n) {
        t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function(e, i, n, s, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, n], function(t) {
                return t
            }).join("-").toLowerCase()),
            c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(c)
        }), this.register({
            type: o.Type.Event,
            name: e
        }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
    }, o.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, o.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, o.prototype.register = function(e) {
        if (e.type === o.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
            return t.inArray(i, this._states.tags[e.name]) === n
        }, this)))
    }, o.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, o.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, o.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                s = n.data("owl.carousel");
            s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                s.register({
                    type: o.Type.Event,
                    name: i
                }), s.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, s))
            })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, o.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, o.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, o.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s)), a), s++
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        lazyLoad: !1
    }, o.prototype.load = function(i) {
        var n = this._core.$stage.children().eq(i),
            o = n && n.find(".owl-lazy");
        !o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
            var o, s = t(n),
                r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: r
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((o = new Image).onload = t.proxy(function() {
                s.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(n.get(0)))
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    o.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, o.prototype.update = function() {
        var e, i = this._core._current,
            n = i + this._core.settings.items,
            o = this._core.$stage.children().toArray().slice(i, n),
            s = [];
        t.each(o, function(e, i) {
            s.push(t(i).height())
        }), e = Math.max.apply(null, s), this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            s = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[r] = {
            type: i,
            id: n,
            width: o,
            height: s
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, o.prototype.thumbnail = function(e, i) {
        var n, o, s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            r = e.find("img"),
            a = "src",
            l = "",
            c = this._core.settings,
            h = function(t) {
                n = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after('<div class="owl-video-play-icon"></div>')
            };
        return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length ? (h(r.attr(a)), r.remove(), !1) : void("youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(o)) : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, h(o)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t.framegrab_url, h(o)
            }
        }))
    }, o.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function(e) {
        var i, n = t(e.target).closest("." + this._core.settings.itemClass),
            o = this._videos[n.attr("data-video")],
            s = o.width || "100%",
            r = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === o.type ? i = '<iframe width="' + s + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + s + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, o.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                n = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                s = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), s && o.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
        }
    }, o.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    var o = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        loop:true,
        autoplayTimeout: 6000,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, o.prototype._getNextTimeout = function(n, o) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(o || this._core.settings.autoplaySpeed)
        }, this), n || this._core.settings.autoplayTimeout)
    }, o.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, o.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, o.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, o.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    o.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, o.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, o.prototype.destroy = function() {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, o.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            n = i + this._core.items().length,
            o = this._core.maximum(!0),
            s = this._core.settings,
            r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = i, e = 0; n > t; t++) {
                if (e >= r || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - i),
                            end: t - i + r - 1
                        }), Math.min(o, t - i) === o) break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, o.prototype.draw = function() {
        var e, i = this._core.settings,
            n = this._core.items().length <= i.items,
            o = this._core.relative(this._core.current()),
            s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, o.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, o.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, o.prototype.getPosition = function(e) {
        var i, n, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, o.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, o.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, o.prototype.to = function(e, i, n) {
        var o;
        !n && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    "use strict";
    var o = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        o = t.map(this._hashes, function(t, e) {
                            return t === n ? e : null
                        }).join();
                    if (!o || e.location.hash.slice(1) === o) return;
                    e.location.hash = o
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                n = this._core.$stage.children(),
                o = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    o.Defaults = {
        URLhashListener: !1
    }, o.prototype.destroy = function() {
        var i, n;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = o
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, n) {
    function o(e, i) {
        var o = !1,
            s = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(s + " ") + s).split(" "), function(t, e) {
            return r[e] !== n ? (o = !i || e, !1) : void 0
        }), o
    }

    function s(t) {
        return o(t, !0)
    }
    var r = t("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        l = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        };
    !!o("transition") && (t.support.transition = new String(s("transition")), t.support.transition.end = l.transition.end[t.support.transition]), !!o("animation") && (t.support.animation = new String(s("animation")), t.support.animation.end = l.animation.end[t.support.animation]), o("transform") && (t.support.transform = new String(s("transform")), t.support.transform3d = !!o("perspective"))
}(window.Zepto || window.jQuery, window, document), $(".owl-watch").owlCarousel({
    loop: true,
    margin: 0,
    dots: !1,
    nav: !0,
    responsiveClass: !0,
    navText: ["<i class='fa fa-angle-left effect-1'></i>", "<i class='fa fa-angle-right effect-1'></i>"],
    responsive: {
        0: {
            nav: !1,
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
}), $(".owl-services").owlCarousel({
    loop: true,
    margin: 30,
    dots: !1,
    nav: !0,
    responsiveClass: !0,
    navText: ["<i class='fa fa-angle-left effect-1'></i>", "<i class='fa fa-angle-right effect-1'></i>"],
    responsive: {
        0: {
            nav: !1,
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
}), $(".testi-carousel").owlCarousel({
    loop: true,
    margin: 30,
    dots: !0,
    nav: !0,
    responsiveClass: !0,
    navText: ["<i class='fa fa-angle-left effect-1'></i>", "<i class='fa fa-angle-right effect-1'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: !1
        },
        600: {
            items: 2,
            nav: !1
        },
        1000: {
            items: 2,
            loop: true
        },
        1200: {
            items: 3,
            loop: true
        }
    }
}), $(".owl-screenshots").owlCarousel({
    loop: !1,
    margin: 30,
    dots: !1,
    nav: !0,
    responsiveClass: !0,
    navText: ["<i class='fa fa-angle-left effect-1'></i>", "<i class='fa fa-angle-right effect-1'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
}), $(".owl-app").owlCarousel({
    loop: !0,
    margin: 0,
    autoplay: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    dots: !1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    nav: !1,
    responsiveClass: !0,
    navText: ["<i class='fa fa-angle-left effect-1'></i>", "<i class='fa fa-angle-right effect-1'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
}),
function(t, e, i) {
    "use strict";
    var n, o, s, r = t.document,
        a = t.Modernizr,
        l = function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        },
        c = "Moz Webkit O Ms".split(" "),
        h = function(t) {
            var e, i = r.documentElement.style;
            if ("string" == typeof i[t]) return t;
            t = l(t);
            for (var n = 0, o = c.length; o > n; n++)
                if ("string" == typeof i[e = c[n] + t]) return e
        },
        d = h("transform"),
        u = h("transitionProperty"),
        p = {
            csstransforms: function() {
                return !!d
            },
            csstransforms3d: function() {
                var t = !!h("perspective");
                if (t) {
                    var i = "@media (" + " -o- -moz- -ms- -webkit- -khtml- ".split(" ").join("transform-3d),(") + "modernizr)",
                        n = e("<style>" + i + "{#modernizr{height:3px}}</style>").appendTo("head"),
                        o = e('<div id="modernizr" />').appendTo("html");
                    t = 3 === o.height(), o.remove(), n.remove()
                }
                return t
            },
            csstransitions: function() {
                return !!u
            }
        };
    if (a)
        for (n in p) a.hasOwnProperty(n) || a.addTest(n, p[n]);
    else {
        a = t.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var f, g = " ";
        for (n in p) f = p[n](), a[n] = f, g += " " + (f ? "" : "no-") + n;
        e("html").addClass(g)
    }
    if (a.csstransforms) {
        var m = a.csstransforms3d ? {
                translate: function(t) {
                    return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) "
                },
                scale: function(t) {
                    return "scale3d(" + t + ", " + t + ", 1) "
                }
            } : {
                translate: function(t) {
                    return "translate(" + t[0] + "px, " + t[1] + "px) "
                },
                scale: function(t) {
                    return "scale(" + t + ") "
                }
            },
            v = function(t, i, n) {
                var o, s, r = e.data(t, "isoTransform") || {},
                    a = {},
                    l = {};
                for (o in a[i] = n, e.extend(r, a), r) s = r[o], l[o] = m[o](s);
                var c = (l.translate || "") + (l.scale || "");
                e.data(t, "isoTransform", r), t.style[d] = c
            };
        e.cssNumber.scale = !0, e.cssHooks.scale = {
            set: function(t, e) {
                v(t, "scale", e)
            },
            get: function(t, i) {
                var n = e.data(t, "isoTransform");
                return n && n.scale ? n.scale : 1
            }
        }, e.fx.step.scale = function(t) {
            e.cssHooks.scale.set(t.elem, t.now + t.unit)
        }, e.cssNumber.translate = !0, e.cssHooks.translate = {
            set: function(t, e) {
                v(t, "translate", e)
            },
            get: function(t, i) {
                var n = e.data(t, "isoTransform");
                return n && n.translate ? n.translate : [0, 0]
            }
        }
    }
    a.csstransitions && (o = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[u], s = h("transitionDuration"));
    var y, b = e.event,
        w = e.event.handle ? "handle" : "dispatch";
    b.special.smartresize = {
        setup: function() {
            e(this).bind("resize", b.special.smartresize.handler)
        },
        teardown: function() {
            e(this).unbind("resize", b.special.smartresize.handler)
        },
        handler: function(t, e) {
            var i = this,
                n = arguments;
            t.type = "smartresize", y && clearTimeout(y), y = setTimeout(function() {
                b[w].apply(i, n)
            }, "execAsap" === e ? 0 : 100)
        }
    }, e.fn.smartresize = function(t) {
        return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
    }, e.Isotope = function(t, i, n) {
        this.element = e(i), this._create(t), this._init(n)
    };
    var _ = ["width", "height"],
        x = e(t);
    e.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, e.Isotope.prototype = {
        _create: function(t) {
            this.options = e.extend({}, e.Isotope.settings, t), this.styleQueue = [], this.elemCount = 0;
            var i = this.element[0].style;
            this.originalStyle = {};
            var n = _.slice(0);
            for (var o in this.options.containerStyle) n.push(o);
            for (var s = 0, r = n.length; r > s; s++) o = n[s], this.originalStyle[o] = i[o] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var a = {
                "original-order": function(t, e) {
                    return e.elemCount++, e.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = e.extend(this.options.getSortData, a), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var l = this;
            setTimeout(function() {
                l.element.addClass(l.options.containerClass)
            }, 0), this.options.resizable && x.bind("smartresize.isotope", function() {
                l.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(t) {
            var e = this.options.itemSelector,
                i = e ? t.filter(e).add(t.find(e)) : t,
                n = {
                    position: "absolute"
                };
            return i = i.filter(function(t, e) {
                return 1 === e.nodeType
            }), this.usingTransforms && (n.left = 0, n.top = 0), i.css(n).addClass(this.options.itemClass), this.updateSortData(i, !0), i
        },
        _init: function(t) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(t)
        },
        option: function(t) {
            var i;
            if (e.isPlainObject(t))
                for (var n in this.options = e.extend(!0, this.options, t), t) this[i = "_update" + l(n)] && this[i]()
        },
        _updateAnimationEngine: function() {
            var t;
            switch (this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "")) {
                case "css":
                case "none":
                    t = !1;
                    break;
                case "jquery":
                    t = !0;
                    break;
                default:
                    t = !a.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var t = this.usingTransforms = this.options.transformsEnabled && a.csstransforms && a.csstransitions && !this.isUsingJQueryAnimation;
            t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = t ? this._translate : this._positionAbs
        },
        _filter: function(t) {
            var e = "" === this.options.filter ? "*" : this.options.filter;
            if (!e) return t;
            var i = this.options.hiddenClass,
                n = "." + i,
                o = t.filter(n),
                s = o;
            if ("*" !== e) {
                s = o.filter(e);
                var r = t.not(n).not(e).addClass(i);
                this.styleQueue.push({
                    $el: r,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(i), t.filter(e)
        },
        updateSortData: function(t, i) {
            var n, o, s = this,
                r = this.options.getSortData;
            t.each(function() {
                for (var t in n = e(this), o = {}, r) o[t] = i || "original-order" !== t ? r[t](n, s) : e.data(this, "isotope-sort-data")[t];
                e.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function() {
            var t = this.options.sortBy,
                e = this._getSorter,
                i = this.options.sortAscending ? 1 : -1;
            this.$filteredAtoms.sort(function(n, o) {
                var s = e(n, t),
                    r = e(o, t);
                return s === r && "original-order" !== t && (s = e(n, "original-order"), r = e(o, "original-order")), (s > r ? 1 : r > s ? -1 : 0) * i
            })
        },
        _getSorter: function(t, i) {
            return e.data(t, "isotope-sort-data")[i]
        },
        _translate: function(t, e) {
            return {
                translate: [t, e]
            }
        },
        _positionAbs: function(t, e) {
            return {
                left: t,
                top: e
            }
        },
        _pushPosition: function(t, e, i) {
            e = Math.round(e + this.offset.left), i = Math.round(i + this.offset.top);
            var n = this.getPositionStyles(e, i);
            this.styleQueue.push({
                $el: t,
                style: n
            }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", {
                x: e,
                y: i
            })
        },
        layout: function(t, e) {
            var i = this.options.layoutMode;
            if (this["_" + i + "Layout"](t), this.options.resizesContainer) {
                var n = this["_" + i + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: n
                })
            }
            this._processStyleQueue(t, e), this.isLaidOut = !0
        },
        _processStyleQueue: function(t, i) {
            var n, r, l, c, h = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                d = this.options.animationOptions,
                u = this.options.onLayout;
            if (r = function(t, e) {
                    e.$el[h](e.style, d)
                }, this._isInserting && this.isUsingJQueryAnimation) r = function(t, e) {
                n = e.$el.hasClass("no-transition") ? "css" : h, e.$el[n](e.style, d)
            };
            else if (i || u || d.complete) {
                var p = !1,
                    f = [i, u, d.complete],
                    g = this;
                if (l = !0, c = function() {
                        if (!p) {
                            for (var e, i = 0, n = f.length; n > i; i++) "function" == typeof(e = f[i]) && e.call(g.element, t, g);
                            p = !0
                        }
                    }, this.isUsingJQueryAnimation && "animate" === h) d.complete = c, l = !1;
                else if (a.csstransitions) {
                    for (var m, v = 0, y = this.styleQueue[0], b = y && y.$el; !b || !b.length;) {
                        if (!(m = this.styleQueue[v++])) return;
                        b = m.$el
                    }
                    parseFloat(getComputedStyle(b[0])[s]) > 0 && (r = function(t, e) {
                        e.$el[h](e.style, d).one(o, c)
                    }, l = !1)
                }
            }
            e.each(this.styleQueue, r), l && c(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(t) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t)
        },
        addItems: function(t, e) {
            var i = this._getAtoms(t);
            this.$allAtoms = this.$allAtoms.add(i), e && e(i)
        },
        insert: function(t, e) {
            this.element.append(t);
            var i = this;
            this.addItems(t, function(t) {
                var n = i._filter(t);
                i._addHideAppended(n), i._sort(), i.reLayout(), i._revealAppended(n, e)
            })
        },
        appended: function(t, e) {
            var i = this;
            this.addItems(t, function(t) {
                i._addHideAppended(t), i.layout(t), i._revealAppended(t, e)
            })
        },
        _addHideAppended: function(t) {
            this.$filteredAtoms = this.$filteredAtoms.add(t), t.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(t, e) {
            var i = this;
            setTimeout(function() {
                t.removeClass("no-transition"), i.styleQueue.push({
                    $el: t,
                    style: i.options.visibleStyle
                }), i._isInserting = !1, i._processStyleQueue(t, e)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(t, e) {
            this.$allAtoms = this.$allAtoms.not(t), this.$filteredAtoms = this.$filteredAtoms.not(t);
            var i = this,
                n = function() {
                    t.remove(), e && e.call(i.element)
                };
            t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: t,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(n)) : n()
        },
        shuffle: function(t) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(t)
        },
        destroy: function() {
            var t = this.usingTransforms,
                e = this.options;
            this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function() {
                var e = this.style;
                e.position = "", e.top = "", e.left = "", e.opacity = "", t && (e[d] = "")
            });
            var i = this.element[0].style;
            for (var n in this.originalStyle) i[n] = this.originalStyle[n];
            this.element.unbind(".isotope").undelegate("." + e.hiddenClass, "click").removeClass(e.containerClass).removeData("isotope"), x.unbind(".isotope")
        },
        _getSegments: function(t) {
            var e, i = this.options.layoutMode,
                n = t ? "rowHeight" : "columnWidth",
                o = t ? "height" : "width",
                s = t ? "rows" : "cols",
                r = this.element[o](),
                a = this.options[i] && this.options[i][n] || this.$filteredAtoms["outer" + l(o)](!0) || r;
            e = Math.floor(r / a), e = Math.max(e, 1), this[i][s] = e, this[i][n] = a
        },
        _checkIfSegmentsChanged: function(t) {
            var e = this.options.layoutMode,
                i = t ? "rows" : "cols",
                n = this[e][i];
            return this._getSegments(t), this[e][i] !== n
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var t = this.masonry.cols;
            for (this.masonry.colYs = []; t--;) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(t) {
            var i = this,
                n = i.masonry;
            t.each(function() {
                var t = e(this),
                    o = Math.ceil(t.outerWidth(!0) / n.columnWidth);
                if (1 === (o = Math.min(o, n.cols))) i._masonryPlaceBrick(t, n.colYs);
                else {
                    var s, r, a = n.cols + 1 - o,
                        l = [];
                    for (r = 0; a > r; r++) s = n.colYs.slice(r, r + o), l[r] = Math.max.apply(Math, s);
                    i._masonryPlaceBrick(t, l)
                }
            })
        },
        _masonryPlaceBrick: function(t, e) {
            for (var i = Math.min.apply(Math, e), n = 0, o = 0, s = e.length; s > o; o++)
                if (e[o] === i) {
                    n = o;
                    break
                }
            var r = this.masonry.columnWidth * n,
                a = i;
            this._pushPosition(t, r, a);
            var l = i + t.outerHeight(!0),
                c = this.masonry.cols + 1 - s;
            for (o = 0; c > o; o++) this.masonry.colYs[n + o] = l
        },
        _masonryGetContainerSize: function() {
            return {
                height: Math.max.apply(Math, this.masonry.colYs)
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(t) {
            var i = this,
                n = this.element.width(),
                o = this.fitRows;
            t.each(function() {
                var t = e(this),
                    s = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== o.x && s + o.x > n && (o.x = 0, o.y = o.height), i._pushPosition(t, o.x, o.y), o.height = Math.max(o.y + r, o.height), o.x += s
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(t) {
            var i = this,
                n = this.cellsByRow;
            t.each(function() {
                var t = e(this),
                    o = n.index % n.cols,
                    s = Math.floor(n.index / n.cols),
                    r = (o + .5) * n.columnWidth - t.outerWidth(!0) / 2,
                    a = (s + .5) * n.rowHeight - t.outerHeight(!0) / 2;
                i._pushPosition(t, r, a), n.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(t) {
            var i = this;
            t.each(function(t) {
                var n = e(this);
                i._pushPosition(n, 0, i.straightDown.y), i.straightDown.y += n.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var t = this.masonryHorizontal.rows;
            for (this.masonryHorizontal.rowXs = []; t--;) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(t) {
            var i = this,
                n = i.masonryHorizontal;
            t.each(function() {
                var t = e(this),
                    o = Math.ceil(t.outerHeight(!0) / n.rowHeight);
                if (1 === (o = Math.min(o, n.rows))) i._masonryHorizontalPlaceBrick(t, n.rowXs);
                else {
                    var s, r, a = n.rows + 1 - o,
                        l = [];
                    for (r = 0; a > r; r++) s = n.rowXs.slice(r, r + o), l[r] = Math.max.apply(Math, s);
                    i._masonryHorizontalPlaceBrick(t, l)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(t, e) {
            for (var i = Math.min.apply(Math, e), n = 0, o = 0, s = e.length; s > o; o++)
                if (e[o] === i) {
                    n = o;
                    break
                }
            var r = i,
                a = this.masonryHorizontal.rowHeight * n;
            this._pushPosition(t, r, a);
            var l = i + t.outerWidth(!0),
                c = this.masonryHorizontal.rows + 1 - s;
            for (o = 0; c > o; o++) this.masonryHorizontal.rowXs[n + o] = l
        },
        _masonryHorizontalGetContainerSize: function() {
            return {
                width: Math.max.apply(Math, this.masonryHorizontal.rowXs)
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(t) {
            var i = this,
                n = this.element.height(),
                o = this.fitColumns;
            t.each(function() {
                var t = e(this),
                    s = t.outerWidth(!0),
                    r = t.outerHeight(!0);
                0 !== o.y && r + o.y > n && (o.x = o.width, o.y = 0), i._pushPosition(t, o.x, o.y), o.width = Math.max(o.x + s, o.width), o.y += r
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(t) {
            var i = this,
                n = this.cellsByColumn;
            t.each(function() {
                var t = e(this),
                    o = Math.floor(n.index / n.rows),
                    s = n.index % n.rows,
                    r = (o + .5) * n.columnWidth - t.outerWidth(!0) / 2,
                    a = (s + .5) * n.rowHeight - t.outerHeight(!0) / 2;
                i._pushPosition(t, r, a), n.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(t) {
            var i = this;
            t.each(function(t) {
                var n = e(this);
                i._pushPosition(n, i.straightAcross.x, 0), i.straightAcross.x += n.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, e.fn.imagesLoaded = function(t) {
        function i() {
            t.call(n, o)
        }
        var n = this,
            o = n.find("img").add(n.filter("img")),
            s = o.length,
            r = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return s || i(), o.bind("load.imagesLoaded error.imagesLoaded", function t(n) {
            var l = n.target;
            l.src !== r && -1 === e.inArray(l, a) && (a.push(l), --s <= 0 && (setTimeout(i), o.unbind(".imagesLoaded", t)))
        }).each(function() {
            var t = this.src;
            this.src = r, this.src = t
        }), n
    };
    var C = function(e) {
        t.console && t.console.error(e)
    };
    e.fn.isotope = function(t, i) {
        if ("string" == typeof t) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var i = e.data(this, "isotope");
                return i ? e.isFunction(i[t]) && "_" !== t.charAt(0) ? void i[t].apply(i, n) : void C("no such method '" + t + "' for isotope instance") : void C("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'")
            })
        } else this.each(function() {
            var n = e.data(this, "isotope");
            n ? (n.option(t), n._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i))
        });
        return this
    }
}(window, jQuery),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        s = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t)
            for (i in e = {}, n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i]);
        else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            s = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, s = this.getListenersAsObject(t);
        for (o in s) s.hasOwnProperty(o) && -1 !== (n = e(s[o], i)) && s[o].splice(n, 1);
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, s = t ? this.removeListener : this.addListener,
            r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) s.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if ("object" === i)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) !0 === (i = s[o][n]).once && this.removeListener(t, i.listener), i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = s, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var s = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
}(this),
function(t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports || (t.imagesLoaded = e(t, t.EventEmitter, t.eventie))
}(window, function(t, e, i) {
    function n(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function o(t, e, i) {
        if (!(this instanceof o)) return new o(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
            var e = [];
            if (function(t) {
                    return "[object Array]" === h.call(t)
                }(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), a && (this.jqDeferred = new a.Deferred);
        var s = this;
        setTimeout(function() {
            s.check()
        })
    }

    function s(t) {
        this.img = t
    }

    function r(t) {
        this.src = t, d[t] = this
    }
    var a = t.jQuery,
        l = t.console,
        c = void 0 !== l,
        h = Object.prototype.toString;
    o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var i = this.elements[t];
            "IMG" === i.nodeName && this.addImage(i);
            var n = i.nodeType;
            if (n && (1 === n || 9 === n || 11 === n))
                for (var o = i.querySelectorAll("img"), s = 0, r = o.length; r > s; s++) {
                    var a = o[s];
                    this.addImage(a)
                }
        }
    }, o.prototype.addImage = function(t) {
        var e = new s(t);
        this.images.push(e)
    }, o.prototype.check = function() {
        function t(t, o) {
            return e.options.debug && c && l.log("confirm", t, o), e.progress(t), ++i === n && e.complete(), !0
        }
        var e = this,
            i = 0,
            n = this.images.length;
        if (this.hasAnyBroken = !1, n)
            for (var o = 0; n > o; o++) {
                var s = this.images[o];
                s.on("confirm", t), s.check()
            } else this.complete()
    }, o.prototype.progress = function(t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function() {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function() {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var i = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[i](e)
            }
        })
    }, a && (a.fn.imagesLoaded = function(t, e) {
        return new o(this, t, e).jqDeferred.promise(a(this))
    }), s.prototype = new e, s.prototype.check = function() {
        var t = d[this.img.src] || new r(this.img.src);
        if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
        else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        else {
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var d = {};
    return r.prototype = new e, r.prototype.check = function() {
        if (!this.isChecked) {
            var t = new Image;
            i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
        }
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function(t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, r.prototype.onerror = function(t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, r.prototype.confirm = function(t, e) {
        this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, r.prototype.unbindProxyEvents = function(t) {
        i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
    }, o
}),
function(t) {
    "use strict";

    function e(e) {
        return t.each([{
            re: /[\xC0-\xC6]/g,
            ch: "A"
        }, {
            re: /[\xE0-\xE6]/g,
            ch: "a"
        }, {
            re: /[\xC8-\xCB]/g,
            ch: "E"
        }, {
            re: /[\xE8-\xEB]/g,
            ch: "e"
        }, {
            re: /[\xCC-\xCF]/g,
            ch: "I"
        }, {
            re: /[\xEC-\xEF]/g,
            ch: "i"
        }, {
            re: /[\xD2-\xD6]/g,
            ch: "O"
        }, {
            re: /[\xF2-\xF6]/g,
            ch: "o"
        }, {
            re: /[\xD9-\xDC]/g,
            ch: "U"
        }, {
            re: /[\xF9-\xFC]/g,
            ch: "u"
        }, {
            re: /[\xC7-\xE7]/g,
            ch: "c"
        }, {
            re: /[\xD1]/g,
            ch: "N"
        }, {
            re: /[\xF1]/g,
            ch: "n"
        }], function() {
            e = e.replace(this.re, this.ch)
        }), e
    }

    function i(t) {
        var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            i = "(?:" + Object.keys(e).join("|") + ")",
            n = new RegExp(i),
            o = new RegExp(i, "g"),
            s = null == t ? "" : "" + t;
        return n.test(s) ? s.replace(o, function(t) {
            return e[t]
        }) : s
    }

    function n(e, i) {
        var n = arguments,
            s = e,
            r = i;
        [].shift.apply(n);
        var a, l = this.each(function() {
            var e = t(this);
            if (e.is("select")) {
                var i = e.data("selectpicker"),
                    l = "object" == typeof s && s;
                if (i) {
                    if (l)
                        for (var c in l) l.hasOwnProperty(c) && (i.options[c] = l[c])
                } else {
                    var h = t.extend({}, o.DEFAULTS, t.fn.selectpicker.defaults || {}, e.data(), l);
                    e.data("selectpicker", i = new o(this, h, r))
                }
                "string" == typeof s && (a = i[s] instanceof Function ? i[s].apply(i, n) : i.options[s])
            }
        });
        return void 0 !== a ? a : l
    }
    String.prototype.includes || function() {
        var t = {}.toString,
            e = function() {
                try {
                    var t = {},
                        e = Object.defineProperty,
                        i = e(t, t, t) && e
                } catch (t) {}
                return i
            }(),
            i = "".indexOf,
            n = function(e) {
                if (null == this) throw TypeError();
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e)) throw TypeError();
                var o = n.length,
                    s = String(e),
                    r = s.length,
                    a = arguments.length > 1 ? arguments[1] : void 0,
                    l = a ? Number(a) : 0;
                return l != l && (l = 0), !(r + Math.min(Math.max(l, 0), o) > o) && -1 != i.call(n, s, l)
            };
        e ? e(String.prototype, "includes", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.includes = n
    }(), String.prototype.startsWith || function() {
        var t = function() {
                try {
                    var t = {},
                        e = Object.defineProperty,
                        i = e(t, t, t) && e
                } catch (t) {}
                return i
            }(),
            e = {}.toString,
            i = function(t) {
                if (null == this) throw TypeError();
                var i = String(this);
                if (t && "[object RegExp]" == e.call(t)) throw TypeError();
                var n = i.length,
                    o = String(t),
                    s = o.length,
                    r = arguments.length > 1 ? arguments[1] : void 0,
                    a = r ? Number(r) : 0;
                a != a && (a = 0);
                var l = Math.min(Math.max(a, 0), n);
                if (s + l > n) return !1;
                for (var c = -1; ++c < s;)
                    if (i.charCodeAt(l + c) != o.charCodeAt(c)) return !1;
                return !0
            };
        t ? t(String.prototype, "startsWith", {
            value: i,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = i
    }(), Object.keys || (Object.keys = function(t, e, i) {
        for (e in i = [], t) i.hasOwnProperty.call(t, e) && i.push(e);
        return i
    }), t.expr[":"].icontains = function(e, i, n) {
        var o = t(e);
        return (o.data("tokens") || o.text()).toUpperCase().includes(n[3].toUpperCase())
    }, t.expr[":"].ibegins = function(e, i, n) {
        var o = t(e);
        return (o.data("tokens") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
    }, t.expr[":"].aicontains = function(e, i, n) {
        var o = t(e);
        return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().includes(n[3].toUpperCase())
    }, t.expr[":"].aibegins = function(e, i, n) {
        var o = t(e);
        return (o.data("tokens") || o.data("normalizedText") || o.text()).toUpperCase().startsWith(n[3].toUpperCase())
    };
    var o = function(e, i, n) {
        n && (n.stopPropagation(), n.preventDefault()), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = o.prototype.val, this.render = o.prototype.render, this.refresh = o.prototype.refresh, this.setStyle = o.prototype.setStyle, this.selectAll = o.prototype.selectAll, this.deselectAll = o.prototype.deselectAll, this.destroy = o.prototype.remove, this.remove = o.prototype.remove, this.show = o.prototype.show, this.hide = o.prototype.hide, this.init()
    };
    o.VERSION = "1.7.2", o.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function(t, e) {
            return 1 == t ? "{0} item selected" : "{0} items selected"
        },
        maxOptionsText: function(t, e) {
            return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1
    }, o.prototype = {
        constructor: o,
        init: function() {
            var e = this,
                i = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function(t) {
                t.preventDefault(), e.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on("hide.bs.dropdown", function(t) {
                e.$element.trigger("hide.bs.select", t)
            }), this.$newElement.on("hidden.bs.dropdown", function(t) {
                e.$element.trigger("hidden.bs.select", t)
            }), this.$newElement.on("show.bs.dropdown", function(t) {
                e.$element.trigger("show.bs.select", t)
            }), this.$newElement.on("shown.bs.dropdown", function(t) {
                e.$element.trigger("shown.bs.select", t)
            }), setTimeout(function() {
                e.$element.trigger("loaded.bs.select")
            })
        },
        createDropdown: function() {
            var e = this.multiple ? " show-tick" : "",
                n = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                o = this.autofocus ? " autofocus" : "",
                s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + i(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                l = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                c = '<div class="btn-group bootstrap-select' + e + n + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + o + '><span class="filter-option pull-left"></span>&nbsp;<span class="fa fa-angle-down"></span></button><div class="dropdown-menu open">' + s + r + a + '<ul class="dropdown-menu inner" role="menu"></ul>' + l + "</div></div>";
            return t(c)
        },
        createView: function() {
            var t = this.createDropdown(),
                e = this.createLi();
            return t.find("ul")[0].innerHTML = e, t
        },
        reloadLi: function() {
            this.destroyLi();
            var t = this.createLi();
            this.$menuInner[0].innerHTML = t
        },
        destroyLi: function() {
            this.$menu.find("li").remove()
        },
        createLi: function() {
            var n = this,
                o = [],
                s = 0,
                r = document.createElement("option"),
                a = -1,
                l = function(t, e, i, n) {
                    return "<li" + (void 0 !== i & "" !== i ? ' class="' + i + '"' : "") + (void 0 !== e & null !== e ? ' data-original-index="' + e + '"' : "") + (void 0 !== n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
                },
                c = function(t, o, s, r) {
                    return '<a tabindex="0"' + (void 0 !== o ? ' class="' + o + '"' : "") + (void 0 !== s ? ' style="' + s + '"' : "") + (n.options.liveSearchNormalize ? ' data-normalized-text="' + e(i(t)) + '"' : "") + (void 0 !== r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + t + '<span class="' + n.options.iconBase + " " + n.options.tickIcon + ' check-mark"></span></a>'
                };
            if (this.options.title && !this.multiple && (a--, !this.$element.find(".bs-title-option").length)) {
                var h = this.$element[0];
                r.className = "bs-title-option", r.appendChild(document.createTextNode(this.options.title)), r.value = "", h.insertBefore(r, h.firstChild), null === h.options[h.selectedIndex].getAttribute("selected") && (r.selected = !0)
            }
            return this.$element.find("option").each(function(e) {
                var i = t(this);
                if (a++, !i.hasClass("bs-title-option")) {
                    var r = this.className || "",
                        h = this.style.cssText,
                        d = i.data("content") ? i.data("content") : i.html(),
                        u = i.data("tokens") ? i.data("tokens") : null,
                        p = void 0 !== i.data("subtext") ? '<small class="text-muted">' + i.data("subtext") + "</small>" : "",
                        f = void 0 !== i.data("icon") ? '<span class="' + n.options.iconBase + " " + i.data("icon") + '"></span> ' : "",
                        g = this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled;
                    if ("" !== f && g && (f = "<span>" + f + "</span>"), n.options.hideDisabled && g) return void a--;
                    if (i.data("content") || (d = f + '<span class="text">' + d + p + "</span>"), "OPTGROUP" === this.parentElement.tagName && !0 !== i.data("divider")) {
                        if (0 === i.index()) {
                            s += 1;
                            var m = this.parentElement.label,
                                v = void 0 !== i.parent().data("subtext") ? '<small class="text-muted">' + i.parent().data("subtext") + "</small>" : "",
                                y = i.parent().data("icon") ? '<span class="' + n.options.iconBase + " " + i.parent().data("icon") + '"></span> ' : "",
                                b = " " + this.parentElement.className || "";
                            m = y + '<span class="text">' + m + v + "</span>", 0 !== e && o.length > 0 && (a++, o.push(l("", null, "divider", s + "div"))), a++, o.push(l(m, null, "dropdown-header" + b, s))
                        }
                        o.push(l(c(d, "opt " + r + b, h, u), e, "", s))
                    } else !0 === i.data("divider") ? o.push(l("", e, "divider")) : !0 === i.data("hidden") ? o.push(l(c(d, r, h, u), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (a++, o.push(l("", null, "divider", s + "div"))), o.push(l(c(d, r, h, u), e)));
                    n.liObj[e] = a
                }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), o.join("")
        },
        findLis: function() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
        },
        render: function(e) {
            var i, n = this;
            !1 !== e && this.$element.find("option").each(function(t) {
                var e = n.findLis().eq(n.liObj[t]);
                n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled, e), n.setSelected(t, this.selected, e)
            }), this.tabIndex();
            var o = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentElement.tagName && this.parentElement.disabled)) return !1;
                        var e, i = t(this),
                            o = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                        return e = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content") : o + i.html() + e
                    }
                }).toArray(),
                s = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var r = this.options.selectedTextFormat.split(">");
                if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
                    i = this.options.hideDisabled ? ", [disabled]" : "";
                    var a = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length;
                    s = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, a) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", a.toString())
                }
            }
            null == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", t.trim(s.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select")
        },
        setStyle: function(t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
            var i = t || this.options.style;
            "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
        },
        liHeight: function(e) {
            if (e || !1 !== this.options.size && !this.sizeInfo) {
                var i = document.createElement("div"),
                    n = document.createElement("div"),
                    o = document.createElement("ul"),
                    s = document.createElement("li"),
                    r = document.createElement("li"),
                    a = document.createElement("a"),
                    l = document.createElement("span"),
                    c = this.options.header ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                    h = this.options.liveSearch ? document.createElement("div") : null,
                    d = this.options.actionsBox && this.multiple ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                    u = this.options.doneButton && this.multiple ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", o.className = "dropdown-menu inner", s.className = "divider", l.appendChild(document.createTextNode("Inner text")), a.appendChild(l), r.appendChild(a), o.appendChild(r), o.appendChild(s), c && n.appendChild(c), h) {
                    var p = document.createElement("span");
                    h.className = "bs-searchbox", p.className = "form-control", h.appendChild(p), n.appendChild(h)
                }
                d && n.appendChild(d), n.appendChild(o), u && n.appendChild(u), i.appendChild(n), document.body.appendChild(i);
                var f = a.offsetHeight,
                    g = c ? c.offsetHeight : 0,
                    m = h ? h.offsetHeight : 0,
                    v = d ? d.offsetHeight : 0,
                    y = u ? u.offsetHeight : 0,
                    b = t(s).outerHeight(!0),
                    w = !!getComputedStyle && getComputedStyle(n),
                    _ = w ? t(n) : null,
                    x = parseInt(w ? w.paddingTop : _.css("paddingTop")) + parseInt(w ? w.paddingBottom : _.css("paddingBottom")) + parseInt(w ? w.borderTopWidth : _.css("borderTopWidth")) + parseInt(w ? w.borderBottomWidth : _.css("borderBottomWidth")),
                    C = x + parseInt(w ? w.marginTop : _.css("marginTop")) + parseInt(w ? w.marginBottom : _.css("marginBottom")) + 2;
                document.body.removeChild(i), this.sizeInfo = {
                    liHeight: f,
                    headerHeight: g,
                    searchHeight: m,
                    actionsHeight: v,
                    doneButtonHeight: y,
                    dividerHeight: b,
                    menuPadding: x,
                    menuExtras: C
                }
            }
        },
        setSize: function() {
            this.findLis(), this.liHeight();
            var e, i, n, o, s = this,
                r = this.$menu,
                a = this.$menuInner,
                l = t(window),
                c = this.$newElement[0].offsetHeight,
                h = this.sizeInfo.liHeight,
                d = this.sizeInfo.headerHeight,
                u = this.sizeInfo.searchHeight,
                p = this.sizeInfo.actionsHeight,
                f = this.sizeInfo.doneButtonHeight,
                g = this.sizeInfo.dividerHeight,
                m = this.sizeInfo.menuPadding,
                v = this.sizeInfo.menuExtras,
                y = this.options.hideDisabled ? ".disabled" : "",
                b = function() {
                    n = s.$newElement.offset().top - l.scrollTop(), o = l.height() - n - c
                };
            if (b(), this.options.header && r.css("padding-top", 0), "auto" === this.options.size) {
                var w = function() {
                    var l, c = function(e, i) {
                            return function(n) {
                                return i ? n.classList ? n.classList.contains(e) : t(n).hasClass(e) : !(n.classList ? n.classList.contains(e) : t(n).hasClass(e))
                            }
                        },
                        g = s.$menuInner[0].getElementsByTagName("li"),
                        y = Array.prototype.filter ? Array.prototype.filter.call(g, c("hidden", !1)) : s.$lis.not(".hidden"),
                        w = Array.prototype.filter ? Array.prototype.filter.call(y, c("dropdown-header", !0)) : y.filter(".dropdown-header");
                    b(), e = o - v, s.options.container ? (r.data("height") || r.data("height", r.height()), i = r.data("height")) : i = r.height(), s.options.dropupAuto && s.$newElement.toggleClass("dropup", n > o && e - v < i), s.$newElement.hasClass("dropup") && (e = n - v), l = y.length + w.length > 3 ? 3 * h + v - 2 : 0, r.css({
                        "max-height": e + "px",
                        overflow: "hidden",
                        "min-height": l + d + u + p + f + "px"
                    }), a.css({
                        "max-height": e - d - u - p - f - m + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(l - m, 0) + "px"
                    })
                };
                w(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", w), l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", w)
            } else if (this.options.size && "auto" != this.options.size && this.$lis.not(y).length > this.options.size) {
                var _ = this.$lis.not(".divider").not(y).children().slice(0, this.options.size).last().parent().index(),
                    x = this.$lis.slice(0, _ + 1).filter(".divider").length;
                e = h * this.options.size + x * g + m, s.options.container ? (r.data("height") || r.data("height", r.height()), i = r.data("height")) : i = r.height(), s.options.dropupAuto && this.$newElement.toggleClass("dropup", n > o && e - v < i), r.css({
                    "max-height": e + d + u + p + f + "px",
                    overflow: "hidden",
                    "min-height": ""
                }), a.css({
                    "max-height": e - m + "px",
                    "overflow-y": "auto",
                    "min-height": ""
                })
            }
        },
        setWidth: function() {
            if ("auto" === this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$menu.parent().clone().appendTo("body"),
                    e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                    i = t.children(".dropdown-menu").outerWidth(),
                    n = e.css("width", "auto").children("button").outerWidth();
                t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var e, i, n = this,
                o = t("<div />"),
                s = function(t) {
                    o.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), i = t.hasClass("dropup") ? 0 : t[0].offsetHeight, o.css({
                        top: e.top + i,
                        left: e.left,
                        width: t[0].offsetWidth,
                        position: "absolute"
                    })
                };
            this.$newElement.on("click", function() {
                n.isDisabled() || (s(t(this)), o.appendTo(n.options.container), o.toggleClass("open", !t(this).hasClass("open")), o.append(n.$menu))
            }), t(window).on("resize scroll", function() {
                s(n.$newElement)
            }), this.$element.on("hide.bs.select", function() {
                n.$menu.data("height", n.$menu.height()), o.detach()
            })
        },
        setSelected: function(t, e, i) {
            i || (i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e)
        },
        setDisabled: function(t, e, i) {
            i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() {
            return this.$element[0].disabled
        },
        checkDisabled: function() {
            var t = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                return !t.isDisabled()
            })
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function() {
            var e = this,
                i = t(document);
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(t) {
                t.stopPropagation()
            }), i.data("spaceSelect", !1), this.$button.on("keyup", function(t) {
                /(32)/.test(t.keyCode.toString(10)) && i.data("spaceSelect") && (t.preventDefault(), i.data("spaceSelect", !1))
            }), this.$newElement.on("click", function() {
                e.setSize(), e.$element.on("shown.bs.select", function() {
                    if (e.options.liveSearch || e.multiple) {
                        if (!e.multiple) {
                            var t = e.liObj[e.$element[0].selectedIndex];
                            if ("number" != typeof t) return;
                            var i = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
                            i = i - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = i
                        }
                    } else e.$menu.find(".selected a").focus()
                })
            }), this.$menu.on("click", "li a", function(i) {
                var n = t(this),
                    o = n.parent().data("originalIndex"),
                    s = e.$element.val(),
                    r = e.$element.prop("selectedIndex");
                if (e.multiple && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !n.parent().hasClass("disabled")) {
                    var a = e.$element.find("option"),
                        l = a.eq(o),
                        c = l.prop("selected"),
                        h = l.parent("optgroup"),
                        d = e.options.maxOptions,
                        u = h.data("maxOptions") || !1;
                    if (e.multiple) {
                        if (l.prop("selected", !c), e.setSelected(o, !c), n.blur(), !1 !== d || !1 !== u) {
                            var p = d < a.filter(":selected").length,
                                f = u < h.find("option:selected").length;
                            if (d && p || u && f)
                                if (d && 1 == d) a.prop("selected", !1), l.prop("selected", !0), e.$menu.find(".selected").removeClass("selected"), e.setSelected(o, !0);
                                else if (u && 1 == u) {
                                h.find("option:selected").prop("selected", !1), l.prop("selected", !0);
                                var g = n.parent().data("optgroup");
                                e.$menu.find('[data-optgroup="' + g + '"]').removeClass("selected"), e.setSelected(o, !0)
                            } else {
                                var m = "function" == typeof e.options.maxOptionsText ? e.options.maxOptionsText(d, u) : e.options.maxOptionsText,
                                    v = m[0].replace("{n}", d),
                                    y = m[1].replace("{n}", u),
                                    b = t('<div class="notify"></div>');
                                m[2] && (v = v.replace("{var}", m[2][d > 1 ? 0 : 1]), y = y.replace("{var}", m[2][u > 1 ? 0 : 1])), l.prop("selected", !1), e.$menu.append(b), d && p && (b.append(t("<div>" + v + "</div>")), e.$element.trigger("maxReached.bs.select")), u && f && (b.append(t("<div>" + y + "</div>")), e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                    e.setSelected(o, !1)
                                }, 10), b.delay(750).fadeOut(300, function() {
                                    t(this).remove()
                                })
                            }
                        }
                    } else a.prop("selected", !1), l.prop("selected", !0), e.$menu.find(".selected").removeClass("selected"), e.setSelected(o, !0);
                    e.multiple ? e.options.liveSearch && e.$searchbox.focus() : e.$button.focus(), (s != e.$element.val() && e.multiple || r != e.$element.prop("selectedIndex") && !e.multiple) && (e.$element.change(), e.$element.trigger("changed.bs.select", [o, l.prop("selected"), c]))
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
                i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), e.options.liveSearch && !t(i.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
            }), this.$menu.on("click", "li.divider, li.dropdown-header", function(t) {
                t.preventDefault(), t.stopPropagation(), e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus()
            }), this.$menu.on("click", ".popover-title .close", function() {
                e.$button.click()
            }), this.$searchbox.on("click", function(t) {
                t.stopPropagation()
            }), this.$menu.on("click", ".actions-btn", function(i) {
                e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), i.preventDefault(), i.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll(), e.$element.change()
            }), this.$element.change(function() {
                e.render(!1)
            })
        },
        liveSearchListener: function() {
            var n = this,
                o = t('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                n.$menuInner.find(".active").removeClass("active"), n.$searchbox.val() && (n.$searchbox.val(""), n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove()), n.multiple || n.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                    n.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(t) {
                t.stopPropagation()
            }), this.$searchbox.on("input propertychange", function() {
                if (n.$searchbox.val()) {
                    var s = n.$lis.not(".is-hidden").removeClass("hidden").children("a");
                    (s = n.options.liveSearchNormalize ? s.not(":a" + n._searchStyle() + "(" + e(n.$searchbox.val()) + ")") : s.not(":" + n._searchStyle() + "(" + n.$searchbox.val() + ")")).parent().addClass("hidden"), n.$lis.filter(".dropdown-header").each(function() {
                        var e = t(this),
                            i = e.data("optgroup");
                        0 === n.$lis.filter("[data-optgroup=" + i + "]").not(e).not(".hidden").length && (e.addClass("hidden"), n.$lis.filter("[data-optgroup=" + i + "div]").addClass("hidden"))
                    });
                    var r = n.$lis.not(".hidden");
                    r.each(function(e) {
                        var i = t(this);
                        i.hasClass("divider") && (i.index() === r.eq(0).index() || i.index() === r.last().index() || r.eq(e + 1).hasClass("divider")) && i.addClass("hidden")
                    }), n.$lis.not(".hidden, .no-results").length ? o.parent().length && o.remove() : (o.parent().length && o.remove(), o.html(n.options.noneResultsText.replace("{0}", '"' + i(n.$searchbox.val()) + '"')).show(), n.$menuInner.append(o))
                } else n.$lis.not(".is-hidden").removeClass("hidden"), o.parent().length && o.remove();
                n.$lis.filter(".active").removeClass("active"), n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), t(this).focus()
            })
        },
        _searchStyle: function() {
            var t = "icontains";
            switch (this.options.liveSearchStyle) {
                case "begins":
                case "startsWith":
                    t = "ibegins"
            }
            return t
        },
        val: function(t) {
            return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
        },
        selectAll: function() {
            this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !0), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"), this.render(!1)
        },
        deselectAll: function() {
            this.findLis(), this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected", !1), this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"), this.render(!1)
        },
        keydown: function(i) {
            var n, o, s, r, a, l, c, h, d, u = t(this),
                p = u.is("input") ? u.parent().parent() : u.parent(),
                f = p.data("this"),
                g = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                m = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
            if (f.options.liveSearch && (p = u.parent().parent()), f.options.container && (p = f.$menu), n = t("[role=menu] li a", p), !(d = f.$menu.parent().hasClass("open")) && (i.keyCode >= 48 && i.keyCode <= 57 || event.keyCode >= 65 && event.keyCode <= 90) && (f.options.container ? f.$newElement.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), d = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(i.keyCode.toString(10)) && d && 0 === f.$menu.find(".active").length && (i.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), n = t("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)", p), u.val() || /(38|40)/.test(i.keyCode.toString(10)) || 0 === n.filter(".active").length && (n = f.$newElement.find("li"), n = f.options.liveSearchNormalize ? n.filter(":a" + f._searchStyle() + "(" + e(m[i.keyCode]) + ")") : n.filter(":" + f._searchStyle() + "(" + m[i.keyCode] + ")"))), n.length) {
                if (/(38|40)/.test(i.keyCode.toString(10))) o = n.index(n.filter(":focus")), r = n.parent(g).first().data("originalIndex"), a = n.parent(g).last().data("originalIndex"), s = n.eq(o).parent().nextAll(g).eq(0).data("originalIndex"), l = n.eq(o).parent().prevAll(g).eq(0).data("originalIndex"), c = n.eq(s).parent().prevAll(g).eq(0).data("originalIndex"), f.options.liveSearch && (n.each(function(e) {
                    t(this).hasClass("disabled") || t(this).data("index", e)
                }), o = n.index(n.filter(".active")), r = n.first().data("index"), a = n.last().data("index"), s = n.eq(o).nextAll().eq(0).data("index"), l = n.eq(o).prevAll().eq(0).data("index"), c = n.eq(s).prevAll().eq(0).data("index")), h = u.data("prevIndex"), 38 == i.keyCode ? (f.options.liveSearch && (o -= 1), o != c && o > l && (o = l), o < r && (o = r), o == h && (o = a)) : 40 == i.keyCode && (f.options.liveSearch && (o += 1), -1 == o && (o = 0), o != c && o < s && (o = s), o > a && (o = a), o == h && (o = r)), u.data("prevIndex", o), f.options.liveSearch ? (i.preventDefault(), u.hasClass("dropdown-toggle") || (n.removeClass("active").eq(o).addClass("active").children("a").focus(), u.focus())) : n.eq(o).focus();
                else if (!u.is("input")) {
                    var v, y = [];
                    n.each(function() {
                        t(this).parent().hasClass("disabled") || t.trim(t(this).text().toLowerCase()).substring(0, 1) == m[i.keyCode] && y.push(t(this).parent().index())
                    }), v = t(document).data("keycount"), v++, t(document).data("keycount", v), t.trim(t(":focus").text().toLowerCase()).substring(0, 1) != m[i.keyCode] ? (v = 1, t(document).data("keycount", v)) : v >= y.length && (t(document).data("keycount", 0), v > y.length && (v = 1)), n.eq(y[v - 1]).focus()
                }
                if ((/(13|32)/.test(i.keyCode.toString(10)) || /(^9$)/.test(i.keyCode.toString(10)) && f.options.selectOnTab) && d) {
                    if (/(32)/.test(i.keyCode.toString(10)) || i.preventDefault(), f.options.liveSearch) /(32)/.test(i.keyCode.toString(10)) || (f.$menu.find(".active a").click(), u.focus());
                    else {
                        var b = t(":focus");
                        b.click(), b.focus(), i.preventDefault(), t(document).data("spaceSelect", !0)
                    }
                    t(document).data("keycount", 0)
                }(/(^9$|27)/.test(i.keyCode.toString(10)) && d && (f.multiple || f.options.liveSearch) || /(27)/.test(i.keyCode.toString(10)) && !d) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
            }
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function() {
            this.$lis = null, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
        },
        hide: function() {
            this.$newElement.hide()
        },
        show: function() {
            this.$newElement.show()
        },
        remove: function() {
            this.$newElement.remove(), this.$element.remove()
        }
    };
    var s = t.fn.selectpicker;
    t.fn.selectpicker = n, t.fn.selectpicker.Constructor = o, t.fn.selectpicker.noConflict = function() {
        return t.fn.selectpicker = s, this
    }, t(document).data("keycount", 0).on("keydown", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', o.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(t) {
        t.stopPropagation()
    }), t(window).on("load.bs.select.data-api", function() {
        t(".selectpicker").each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), Object.defineProperty(exports, "__esModule", {
    value: !0
});
var hasWindow = "undefined" != typeof window,
environment = hasWindow && window.devicePixelRatio || 1,
srcReplace = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
inlineReplace = /url\(('|")?([^\)'"]+)('|")?\)/i,
selector = "[data-rjs]",
processedAttr = "data-rjs-processed";
hasWindow && (window.addEventListener("load", retina), window.retinajs = retina), exports.default = retina,
function(t) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function(t) {
    "use strict";

    function e(e, S) {
        function k(e) {
            if (!(!0 === xt.data(E + "_intouch") || t(e.target).closest(S.excludedElements, xt).length > 0)) {
                var r = e.originalEvent ? e.originalEvent : e;
                if (!r.pointerType || "mouse" != r.pointerType || 0 != S.fallbackToMouseEvents) {
                    var a, l = r.touches,
                        c = l ? l[0] : r;
                    return Ct = b, l ? Tt = l.length : !1 !== S.preventDefaultEvents && e.preventDefault(), ut = 0, pt = null, ft = null, wt = null, gt = 0, mt = 0, vt = 0, yt = 1, bt = 0, (h = {})[i] = et(i), h[n] = et(n), h[o] = et(o), h[s] = et(s), _t = h, X(), K(0, c), !l || Tt === S.fingers || S.fingers === v || W() ? (Et = st(), 2 == Tt && (K(1, l[1]), mt = vt = nt($t[0].start, $t[1].start)), (S.swipeStatus || S.pinchStatus) && (a = I(r, Ct))) : a = !1, !1 === a ? (I(r, Ct = x), a) : (S.hold && (Pt = setTimeout(t.proxy(function() {
                        xt.trigger("hold", [r.target]), S.hold && (a = S.hold.call(xt, r, r.target))
                    }, this), S.longTapThreshold)), J(!0), null)
                }
            }
            var h
        }

        function A(e) {
            var h, d, u, p, f = e.originalEvent ? e.originalEvent : e;
            if (Ct !== _ && Ct !== x && !Y()) {
                var y, b = f.touches,
                    C = Z(b ? b[0] : f);
                if (St = st(), b && (Tt = b.length), S.hold && clearTimeout(Pt), Ct = w, 2 == Tt && (0 == mt ? (K(1, b[1]), mt = vt = nt($t[0].start, $t[1].start)) : (Z(b[1]), vt = nt($t[0].end, $t[1].end), $t[0].end, $t[1].end, wt = 1 > yt ? a : r), yt = (vt / mt * 1).toFixed(2), bt = Math.abs(mt - vt)), Tt === S.fingers || S.fingers === v || !b || W()) {
                    if (pt = ot(C.start, C.end), function(t, e) {
                            if (!1 !== S.preventDefaultEvents)
                                if (S.allowPageScroll === l) t.preventDefault();
                                else {
                                    var r = S.allowPageScroll === c;
                                    switch (e) {
                                        case i:
                                            (S.swipeLeft && r || !r && S.allowPageScroll != g) && t.preventDefault();
                                            break;
                                        case n:
                                            (S.swipeRight && r || !r && S.allowPageScroll != g) && t.preventDefault();
                                            break;
                                        case o:
                                            (S.swipeUp && r || !r && S.allowPageScroll != m) && t.preventDefault();
                                            break;
                                        case s:
                                            (S.swipeDown && r || !r && S.allowPageScroll != m) && t.preventDefault()
                                    }
                                }
                        }(e, ft = ot(C.last, C.end)), u = C.start, p = C.end, ut = Math.round(Math.sqrt(Math.pow(p.x - u.x, 2) + Math.pow(p.y - u.y, 2))), gt = it(), function(t, e) {
                            t != l && (e = Math.max(e, tt(t)), _t[t].distance = e)
                        }(pt, ut), y = I(f, Ct), !S.triggerOnTouchEnd || S.triggerOnTouchLeave) {
                        var T = !0;
                        if (S.triggerOnTouchLeave) {
                            var $ = {
                                left: (d = (h = t(h = this)).offset()).left,
                                right: d.left + h.outerWidth(),
                                top: d.top,
                                bottom: d.top + h.outerHeight()
                            };
                            T = function(t, e) {
                                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
                            }(C.end, $)
                        }!S.triggerOnTouchEnd && T ? Ct = N(w) : S.triggerOnTouchLeave && !T && (Ct = N(_)), Ct != x && Ct != _ || I(f, Ct)
                    }
                } else I(f, Ct = x);
                !1 === y && I(f, Ct = x)
            }
        }

        function O(t) {
            var e = t.originalEvent ? t.originalEvent : t,
                i = e.touches;
            if (i) {
                if (i.length && !Y()) return function(t) {
                    kt = st(), At = t.touches.length + 1
                }(e), !0;
                if (i.length && Y()) return !0
            }
            return Y() && (Tt = At), St = st(), gt = it(), H() || !z() ? I(e, Ct = x) : S.triggerOnTouchEnd || !1 === S.triggerOnTouchEnd && Ct === w ? (!1 !== S.preventDefaultEvents && t.preventDefault(), I(e, Ct = _)) : !S.triggerOnTouchEnd && Q() ? j(e, Ct = _, u) : Ct === w && I(e, Ct = x), J(!1), null
        }

        function L() {
            Tt = 0, St = 0, Et = 0, mt = 0, vt = 0, yt = 1, X(), J(!1)
        }

        function P(t) {
            var e = t.originalEvent ? t.originalEvent : t;
            S.triggerOnTouchLeave && I(e, Ct = N(_))
        }

        function D() {
            xt.unbind(at, k), xt.unbind(dt, L), xt.unbind(lt, A), xt.unbind(ct, O), ht && xt.unbind(ht, P), J(!1)
        }

        function N(t) {
            var e = t,
                i = R(),
                n = z(),
                o = H();
            return !i || o ? e = x : !n || t != w || S.triggerOnTouchEnd && !S.triggerOnTouchLeave ? !n && t == _ && S.triggerOnTouchLeave && (e = x) : e = _, e
        }

        function I(t, e) {
            var i, n = t.touches;
            return (!(!q() || !B()) || B()) && (i = j(t, e, h)), (!(!M() || !W()) || W()) && !1 !== i && (i = j(t, e, d)), G() && V() && !1 !== i ? i = j(t, e, p) : gt > S.longTapThreshold && y > ut && S.longTap && !1 !== i ? i = j(t, e, f) : !(1 !== Tt && C || !(isNaN(ut) || ut < S.threshold) || !Q()) && !1 !== i && (i = j(t, e, u)), e === x && L(), e === _ && (n && n.length || L()), i
        }

        function j(e, l, c) {
            var g;
            if (c == h) {
                if (xt.trigger("swipeStatus", [l, pt || null, ut || 0, gt || 0, Tt, $t, ft]), S.swipeStatus && !1 === (g = S.swipeStatus.call(xt, e, l, pt || null, ut || 0, gt || 0, Tt, $t, ft))) return !1;
                if (l == _ && q()) {
                    if (clearTimeout(Lt), clearTimeout(Pt), xt.trigger("swipe", [pt, ut, gt, Tt, $t, ft]), S.swipe && !1 === (g = S.swipe.call(xt, e, pt, ut, gt, Tt, $t, ft))) return !1;
                    switch (pt) {
                        case i:
                            xt.trigger("swipeLeft", [pt, ut, gt, Tt, $t, ft]), S.swipeLeft && (g = S.swipeLeft.call(xt, e, pt, ut, gt, Tt, $t, ft));
                            break;
                        case n:
                            xt.trigger("swipeRight", [pt, ut, gt, Tt, $t, ft]), S.swipeRight && (g = S.swipeRight.call(xt, e, pt, ut, gt, Tt, $t, ft));
                            break;
                        case o:
                            xt.trigger("swipeUp", [pt, ut, gt, Tt, $t, ft]), S.swipeUp && (g = S.swipeUp.call(xt, e, pt, ut, gt, Tt, $t, ft));
                            break;
                        case s:
                            xt.trigger("swipeDown", [pt, ut, gt, Tt, $t, ft]), S.swipeDown && (g = S.swipeDown.call(xt, e, pt, ut, gt, Tt, $t, ft))
                    }
                }
            }
            if (c == d) {
                if (xt.trigger("pinchStatus", [l, wt || null, bt || 0, gt || 0, Tt, yt, $t]), S.pinchStatus && !1 === (g = S.pinchStatus.call(xt, e, l, wt || null, bt || 0, gt || 0, Tt, yt, $t))) return !1;
                if (l == _ && M()) switch (wt) {
                    case r:
                        xt.trigger("pinchIn", [wt || null, bt || 0, gt || 0, Tt, yt, $t]), S.pinchIn && (g = S.pinchIn.call(xt, e, wt || null, bt || 0, gt || 0, Tt, yt, $t));
                        break;
                    case a:
                        xt.trigger("pinchOut", [wt || null, bt || 0, gt || 0, Tt, yt, $t]), S.pinchOut && (g = S.pinchOut.call(xt, e, wt || null, bt || 0, gt || 0, Tt, yt, $t))
                }
            }
            return c == u ? l !== x && l !== _ || (clearTimeout(Lt), clearTimeout(Pt), V() && !G() ? (Ot = st(), Lt = setTimeout(t.proxy(function() {
                Ot = null, xt.trigger("tap", [e.target]), S.tap && (g = S.tap.call(xt, e, e.target))
            }, this), S.doubleTapThreshold)) : (Ot = null, xt.trigger("tap", [e.target]), S.tap && (g = S.tap.call(xt, e, e.target)))) : c == p ? l !== x && l !== _ || (clearTimeout(Lt), clearTimeout(Pt), Ot = null, xt.trigger("doubletap", [e.target]), S.doubleTap && (g = S.doubleTap.call(xt, e, e.target))) : c == f && (l !== x && l !== _ || (clearTimeout(Lt), Ot = null, xt.trigger("longtap", [e.target]), S.longTap && (g = S.longTap.call(xt, e, e.target)))), g
        }

        function z() {
            var t = !0;
            return null !== S.threshold && (t = ut >= S.threshold), t
        }

        function H() {
            var t = !1;
            return null !== S.cancelThreshold && null !== pt && (t = tt(pt) - ut >= S.cancelThreshold), t
        }

        function R() {
            return !(S.maxTimeThreshold && gt >= S.maxTimeThreshold)
        }

        function M() {
            var t = F(),
                e = U(),
                i = null === S.pinchThreshold || bt >= S.pinchThreshold;
            return t && e && i
        }

        function W() {
            return !!(S.pinchStatus || S.pinchIn || S.pinchOut)
        }

        function q() {
            var t = R(),
                e = z(),
                i = F(),
                n = U();
            return !H() && n && i && e && t
        }

        function B() {
            return !!(S.swipe || S.swipeStatus || S.swipeLeft || S.swipeRight || S.swipeUp || S.swipeDown)
        }

        function F() {
            return Tt === S.fingers || S.fingers === v || !C
        }

        function U() {
            return 0 !== $t[0].end.x
        }

        function Q() {
            return !!S.tap
        }

        function V() {
            return !!S.doubleTap
        }

        function G() {
            if (null == Ot) return !1;
            var t = st();
            return V() && t - Ot <= S.doubleTapThreshold
        }

        function X() {
            kt = 0, At = 0
        }

        function Y() {
            var t = !1;
            return kt && st() - kt <= S.fingerReleaseThreshold && (t = !0), t
        }

        function J(t) {
            xt && (!0 === t ? (xt.bind(lt, A), xt.bind(ct, O), ht && xt.bind(ht, P)) : (xt.unbind(lt, A, !1), xt.unbind(ct, O, !1), ht && xt.unbind(ht, P, !1)), xt.data(E + "_intouch", !0 === t))
        }

        function K(t, e) {
            var i = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, $t[t] = i, i
        }

        function Z(t) {
            var e = void 0 !== t.identifier ? t.identifier : 0,
                i = $t[e] || null;
            return null === i && (i = K(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
        }

        function tt(t) {
            return _t[t] ? _t[t].distance : void 0
        }

        function et(t) {
            return {
                direction: t,
                distance: 0
            }
        }

        function it() {
            return St - Et
        }

        function nt(t, e) {
            var i = Math.abs(t.x - e.x),
                n = Math.abs(t.y - e.y);
            return Math.round(Math.sqrt(i * i + n * n))
        }

        function ot(t, e) {
            if (a = e, (r = t).x == a.x && r.y == a.y) return l;
            var r, a, c = function(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    o = Math.atan2(n, i),
                    s = Math.round(180 * o / Math.PI);
                return 0 > s && (s = 360 - Math.abs(s)), s
            }(t, e);
            return 45 >= c && c >= 0 ? i : 360 >= c && c >= 315 ? i : c >= 135 && 225 >= c ? n : c > 45 && 135 > c ? s : o
        }

        function st() {
            return (new Date).getTime()
        }
        S = t.extend({}, S);
        var rt = C || $ || !S.fallbackToMouseEvents,
            at = rt ? $ ? T ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            lt = rt ? $ ? T ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            ct = rt ? $ ? T ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            ht = rt ? $ ? "mouseleave" : null : "mouseleave",
            dt = $ ? T ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            ut = 0,
            pt = null,
            ft = null,
            gt = 0,
            mt = 0,
            vt = 0,
            yt = 1,
            bt = 0,
            wt = 0,
            _t = null,
            xt = t(e),
            Ct = "start",
            Tt = 0,
            $t = {},
            Et = 0,
            St = 0,
            kt = 0,
            At = 0,
            Ot = 0,
            Lt = null,
            Pt = null;
        try {
            xt.bind(at, k), xt.bind(dt, L)
        } catch (e) {
            t.error("events not supported " + at + "," + dt + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(), xt.bind(at, k), xt.bind(dt, L), xt
        }, this.disable = function() {
            return D(), xt
        }, this.destroy = function() {
            D(), xt.data(E, null), xt = null
        }, this.option = function(e, i) {
            if ("object" == typeof e) S = t.extend(S, e);
            else if (void 0 !== S[e]) {
                if (void 0 === i) return S[e];
                S[e] = i
            } else {
                if (!e) return S;
                t.error("Option " + e + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var i = "left",
        n = "right",
        o = "up",
        s = "down",
        r = "in",
        a = "out",
        l = "none",
        c = "auto",
        h = "swipe",
        d = "pinch",
        u = "tap",
        p = "doubletap",
        f = "longtap",
        g = "horizontal",
        m = "vertical",
        v = "all",
        y = 10,
        b = "start",
        w = "move",
        _ = "end",
        x = "cancel",
        C = "ontouchstart" in window,
        T = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !C,
        $ = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !C,
        E = "TouchSwipe";
    t.fn.swipe = function(i) {
        var n = t(this),
            o = n.data(E);
        if (o && "string" == typeof i) {
            if (o[i]) return o[i].apply(o, Array.prototype.slice.call(arguments, 1));
            t.error("Method " + i + " does not exist on jQuery.swipe")
        } else if (o && "object" == typeof i) o.option.apply(o, arguments);
        else if (!(o || "object" != typeof i && i)) return function(i) {
            return !i || void 0 !== i.allowPageScroll || void 0 === i.swipe && void 0 === i.swipeStatus || (i.allowPageScroll = l), void 0 !== i.click && void 0 === i.tap && (i.tap = i.click), i || (i = {}), i = t.extend({}, t.fn.swipe.defaults, i), this.each(function() {
                var n = t(this),
                    o = n.data(E);
                o || (o = new e(this, i), n.data(E, o))
            })
        }.apply(this, arguments);
        return n
    }, t.fn.swipe.version = "1.6.18", t.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0
    }, t.fn.swipe.phases = {
        PHASE_START: b,
        PHASE_MOVE: w,
        PHASE_END: _,
        PHASE_CANCEL: x
    }, t.fn.swipe.directions = {
        LEFT: i,
        RIGHT: n,
        UP: o,
        DOWN: s,
        IN: r,
        OUT: a
    }, t.fn.swipe.pageScroll = {
        NONE: l,
        HORIZONTAL: g,
        VERTICAL: m,
        AUTO: c
    }, t.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: v
    }
}),
function(t) {
    "use strict";
    t.fn.bsTouchSlider = function(e) {
        var i = t(".carousel");
        return this.each(function() {
            function e(e) {
                e.each(function() {
                    var e = t(this),
                        i = e.data("animation");
                    e.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                        e.removeClass(i)
                    })
                })
            }
            var n = i.find(".item:first").find("[data-animation ^= 'animated']");
            i.carousel(), e(n), i.on("slide.bs.carousel", function(i) {
                e(t(i.relatedTarget).find("[data-animation ^= 'animated']"))
            }), t(".carousel .carousel-inner").swipe({
                swipeLeft: function(t, e, i, n, o) {
                    this.parent().carousel("next")
                },
                swipeRight: function() {
                    this.parent().carousel("prev")
                },
                threshold: 0
            })
        })
    }
}(jQuery);