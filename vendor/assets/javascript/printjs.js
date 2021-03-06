! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("print-js", [], t) : "object" == typeof exports ? exports["print-js"] = t() : e["print-js"] = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "./", t(t.s = 10)
    }([function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.focus(), a.a.isEdge() || a.a.isIE()) try {
                e.contentWindow.document.execCommand("print", !1, null)
            } catch (t) {
                e.contentWindow.print()
            } else e.contentWindow.print();
            t.showModal && d.a.close(), t.onLoadingEnd && t.onLoadingEnd(), (t.showModal || t.onLoadingStart) && window.URL.revokeObjectURL(t.printable)
        }

        function i(e, t) {
            var n = [];
            return t.printable.forEach(function(t, r) {
                return n.push(o(e, r))
            }), Promise.all(n)
        }

        function o(e, t) {
            return new Promise(function(n) {
                var r = e ? e.getElementById("printableImage" + t) : null;
                r && void 0 !== r.naturalWidth && 0 !== r.naturalWidth ? n() : setTimeout(function() {
                    o(e, t)
                }, 500)
            })
        }
        var a = n(2),
            d = n(3),
            l = {
                send: function(e, t) {
                    document.getElementsByTagName("body")[0].appendChild(t);
                    var n = document.getElementById(e.frameId);
                    "pdf" === e.type && (a.a.isIE() || a.a.isEdge()) ? n.setAttribute("onload", r(n, e)) : t.onload = function() {
                        if ("pdf" === e.type) r(n, e);
                        else {
                            var t = n.contentWindow || n.contentDocument;
                            if (t.document && (t = t.document), t.body.innerHTML = e.htmlData, "pdf" !== e.type && null !== e.style) {
                                var o = document.createElement("style");
                                o.innerHTML = e.style, t.head.appendChild(o)
                            }
                            "image" === e.type ? i(t, e).then(function() {
                                r(n, e)
                            }) : r(n, e)
                        }
                    }
                }
            };
        t.a = l
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return '<div style="font-family:' + t.font + " !important; font-size: " + t.font_size + ' !important; width:100%;">' + e + "</div>"
        }

        function i(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function o(e, t) {
            var n = document.defaultView || window,
                r = "";
            t.honorMarginPadding && t.targetStyles.push("margin", "padding"), t.honorColor && t.targetStyles.push("color");
            var i = n.getComputedStyle(e, "");
            return Object.keys(i).map(function(e) {
                (-1 !== t.targetStyles.indexOf("*") || -1 !== t.targetStyle.indexOf(i[e]) || a(t.targetStyles, i[e])) && i.getPropertyValue(i[e]) && (r += i[e] + ":" + i.getPropertyValue(i[e]) + ";")
            }), r += "max-width: " + t.maxWidth + "px !important;" + t.font_size + " !important;"
        }

        function a(e, t) {
            for (var n = 0; n < e.length; n++)
                if (-1 !== t.indexOf(e[n])) return !0;
            return !1
        }

        function d(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (-1 === t.ignoreElements.indexOf(r.getAttribute("id"))) {
                    var i = r.tagName;
                    if ("INPUT" === i || "TEXTAREA" === i || "SELECT" === i) {
                        var a = o(r, t),
                            l = r.parentNode,
                            s = "SELECT" === i ? document.createTextNode(r.options[r.selectedIndex].text) : document.createTextNode(r.value),
                            c = document.createElement("div");
                        c.appendChild(s), c.setAttribute("style", a), l.appendChild(c), l.removeChild(r)
                    } else r.setAttribute("style", o(r, t));
                    var p = r.children;
                    p && p.length && d(p, t)
                } else r.parentNode.removeChild(r)
            }
        }

        function l(e, t, n) {
            var r = document.createElement("h1"),
                i = document.createTextNode(t);
            r.appendChild(i), r.setAttribute("style", n), e.insertBefore(r, e.childNodes[0])
        }
        t.a = r, t.b = i, t.c = o, t.d = d, t.e = l
    }, function(e, t, n) {
        "use strict";
        var r = {
            isFirefox: function() {
                return "undefined" != typeof InstallTrigger
            },
            isIE: function() {
                return -1 !== navigator.userAgent.indexOf("MSIE") || !!document.documentMode
            },
            isEdge: function() {
                return !r.isIE() && !!window.StyleMedia
            },
            isChrome: function() {
                return !!window.chrome && !!window.chrome.webstore
            },
            isSafari: function() {
                return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || -1 !== navigator.userAgent.toLowerCase().indexOf("safari")
            }
        };
        t.a = r
    }, function(e, t, n) {
        "use strict";
        var r = {
            show: function(e) {
                var t = document.createElement("div");
                t.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"), t.setAttribute("id", "printJS-Modal");
                var n = document.createElement("div");
                n.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
                var i = document.createElement("div");
                i.setAttribute("class", "printClose"), i.setAttribute("id", "printClose"), n.appendChild(i);
                var o = document.createElement("span");
                o.setAttribute("class", "printSpinner"), n.appendChild(o);
                var a = document.createTextNode(e.modalMessage);
                n.appendChild(a), t.appendChild(n), document.getElementsByTagName("body")[0].appendChild(t), document.getElementById("printClose").addEventListener("click", function() {
                    r.close()
                })
            },
            close: function() {
                var e = document.getElementById("printJS-Modal");
                e.parentNode.removeChild(e)
            }
        };
        t.a = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(7),
            i = r.a.init;
        "undefined" != typeof window && (window.printJS = i), t.default = i
    }, function(e, t, n) {
        "use strict";
        var r = n(1),
            i = n(0);
        t.a = {
            print: function(e, t) {
                var o = document.getElementById(e.printable);
                if (!o) return window.console.error("Invalid HTML element id: " + e.printable), !1;
                var a = document.createElement("div");
                a.appendChild(o.cloneNode(!0)), a.setAttribute("style", "height:0; overflow:hidden;"), a.setAttribute("id", "printJS-html"), o.parentNode.appendChild(a), a = document.getElementById("printJS-html"), !0 === e.scanStyles && a.setAttribute("style", n.i(r.c)(a, e) + "margin:0 !important;");
                var d = a.children;
                !0 === e.scanStyles && n.i(r.d)(d, e), e.header && n.i(r.e)(a, e.header, e.headerStyle), a.parentNode.removeChild(a), e.htmlData = n.i(r.a)(a.innerHTML, e), i.a.send(e, t)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = [];
            return t.printable.forEach(function(r, o) {
                var a = document.createElement("img");
                a.src = r, n.push(i(e, t, a, o))
            }), Promise.all(n)
        }

        function i(e, t, n, r) {
            return new Promise(function(i) {
                n.onload = function() {
                    var o = document.createElement("div");
                    o.setAttribute("style", t.imageStyle), n.setAttribute("style", "width:100%;"), n.setAttribute("id", "printableImage" + r), o.appendChild(n), e.appendChild(o), i()
                }
            })
        }
        var o = n(1),
            a = n(0);
        t.a = {
            print: function(e, t) {
                e.printable.constructor !== Array && (e.printable = [e.printable]);
                var i = document.createElement("div");
                i.setAttribute("style", "width:100%"), r(i, e).then(function() {
                    e.header && n.i(o.e)(i, e.header, e.headerStyle), e.htmlData = i.outerHTML, a.a.send(e, t)
                })
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(2),
            i = n(3),
            o = n(9),
            a = n(5),
            d = n(6),
            l = n(8),
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = ["pdf", "html", "image", "json"];
        t.a = {
            init: function() {
                var e = {
                        printable: null,
                        fallbackPrintable: null,
                        type: "pdf",
                        header: null,
                        headerStyle: "font-weight: 300;",
                        maxWidth: 800,
                        font: "TimesNewRoman",
                        font_size: "12pt",
                        honorMarginPadding: !0,
                        honorColor: !1,
                        properties: null,
                        gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;",
                        gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;",
                        showModal: !1,
                        onLoadingStart: null,
                        onLoadingEnd: null,
                        modalMessage: "Retrieving Document...",
                        frameId: "printJS",
                        htmlData: "",
                        documentTitle: "Document",
                        targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"],
                        targetStyles: ["border", "box", "break", "text-decoration"],
                        ignoreElements: [],
                        imageStyle: "width:100%;",
                        repeatTableHeader: !0,
                        css: null,
                        style: null,
                        scanStyles: !0
                    },
                    t = arguments[0];
                if (void 0 === t) throw new Error("printJS expects at least 1 attribute.");
                switch (void 0 === t ? "undefined" : s(t)) {
                    case "string":
                        e.printable = encodeURI(t), e.fallbackPrintable = e.printable, e.type = arguments[1] || e.type;
                        break;
                    case "object":
                        e.printable = t.printable, e.fallbackPrintable = void 0 !== t.fallbackPrintable ? t.fallbackPrintable : e.printable, e.type = void 0 !== t.type ? t.type : e.type, e.frameId = void 0 !== t.frameId ? t.frameId : e.frameId, e.header = void 0 !== t.header ? t.header : e.header, e.headerStyle = void 0 !== t.headerStyle ? t.headerStyle : e.headerStyle, e.maxWidth = void 0 !== t.maxWidth ? t.maxWidth : e.maxWidth, e.font = void 0 !== t.font ? t.font : e.font, e.font_size = void 0 !== t.font_size ? t.font_size : e.font_size, e.honorMarginPadding = void 0 !== t.honorMarginPadding ? t.honorMarginPadding : e.honorMarginPadding, e.properties = void 0 !== t.properties ? t.properties : e.properties, e.gridHeaderStyle = void 0 !== t.gridHeaderStyle ? t.gridHeaderStyle : e.gridHeaderStyle, e.gridStyle = void 0 !== t.gridStyle ? t.gridStyle : e.gridStyle, e.showModal = void 0 !== t.showModal ? t.showModal : e.showModal, e.onLoadingStart = void 0 !== t.onLoadingStart ? t.onLoadingStart : e.onLoadingStart, e.onLoadingEnd = void 0 !== t.onLoadingEnd ? t.onLoadingEnd : e.onLoadingEnd, e.modalMessage = void 0 !== t.modalMessage ? t.modalMessage : e.modalMessage, e.documentTitle = void 0 !== t.documentTitle ? t.documentTitle : e.documentTitle, e.targetStyle = void 0 !== t.targetStyle ? t.targetStyle : e.targetStyle, e.targetStyles = void 0 !== t.targetStyles ? t.targetStyles : e.targetStyles, e.ignoreElements = void 0 !== t.ignoreElements ? t.ignoreElements : e.ignoreElements, e.imageStyle = void 0 !== t.imageStyle ? t.imageStyle : e.imageStyle, e.repeatTableHeader = void 0 !== t.repeatTableHeader ? t.repeatTableHeader : e.repeatTableHeader, e.css = void 0 !== t.css ? t.css : e.css, e.style = void 0 !== t.style ? t.style : e.style, e.scanStyles = void 0 !== t.scanStyles ? t.scanStyles : e.scanStyles;
                        break;
                    default:
                        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (void 0 === t ? "undefined" : s(t)))
                }
                if (!e.printable) throw new Error("Missing printable information.");
                if (!e.type || "string" != typeof e.type || -1 === c.indexOf(e.type.toLowerCase())) throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
                e.showModal && i.a.show(e), e.onLoadingStart && e.onLoadingStart();
                var n = document.getElementById(e.frameId);
                n && n.parentNode.removeChild(n);
                var p = void 0;
                switch (p = document.createElement("iframe"), p.setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute;"), p.setAttribute("id", e.frameId), "pdf" !== e.type && (p.srcdoc = "<html><head><title>" + e.documentTitle + "</title>", null !== e.css && (Array.isArray(e.css) || (e.css = [e.css]), e.css.forEach(function(e) {
                    p.srcdoc += '<link rel="stylesheet" href="' + e + '">'
                })), p.srcdoc += "</head><body></body></html>"), e.type) {
                    case "pdf":
                        if (r.a.isFirefox() || r.a.isEdge() || r.a.isIE()) {
                            window.open(e.fallbackPrintable, "_blank").focus(), e.showModal && i.a.close(), e.onLoadingEnd && e.onLoadingEnd()
                        } else o.a.print(e, p);
                        break;
                    case "image":
                        d.a.print(e, p);
                        break;
                    case "html":
                        a.a.print(e, p);
                        break;
                    case "json":
                        l.a.print(e, p)
                }
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.printable,
                r = e.properties,
                o = '<table style="border-collapse: collapse; width: 100%;">';
            e.repeatTableHeader && (o += "<thead>"), o += "<tr>";
            for (var a = 0; a < r.length; a++) o += '<th style="width:' + 100 / r.length + "%; " + e.gridHeaderStyle + '">' + n.i(i.b)(r[a]) + "</th>";
            o += "</tr>", e.repeatTableHeader && (o += "</thead>"), o += "<tbody>";
            for (var d = 0; d < t.length; d++) {
                o += "<tr>";
                for (var l = 0; l < r.length; l++) {
                    var s = t[d],
                        c = r[l].split(".");
                    if (c.length > 1)
                        for (var p = 0; p < c.length; p++) s = s[c[p]];
                    else s = s[r[l]];
                    o += '<td style="width:' + 100 / r.length + "%;" + e.gridStyle + '">' + s + "</td>"
                }
                o += "</tr>"
            }
            return o += "</tbody></table>"
        }
        var i = n(1),
            o = n(0),
            a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.a = {
            print: function(e, t) {
                if ("object" !== a(e.printable)) throw new Error("Invalid javascript data object (JSON).");
                if ("boolean" != typeof e.repeatTableHeader) throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
                if (!e.properties || "object" !== a(e.properties)) throw new Error("Invalid properties array for your JSON data.");
                var d = "";
                e.header && (d += '<h1 style="' + e.headerStyle + '">' + e.header + "</h1>"), d += r(e), e.htmlData = n.i(i.a)(d, e), o.a.send(e, t)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            t.setAttribute("src", e.printable), i.a.send(e, t)
        }
        var i = n(0);
        t.a = {
            print: function(e, t) {
                if (e.printable = -1 !== e.printable.indexOf("http") ? e.printable : window.location.origin + ("/" !== e.printable.charAt(0) ? "/" + e.printable : e.printable), e.showModal || e.onLoadingStart) {
                    var n = new window.XMLHttpRequest;
                    n.responseType = "arraybuffer", n.addEventListener("load", function() {
                        var i = new window.Blob([n.response], {
                            type: "application/pdf"
                        });
                        i = window.URL.createObjectURL(i), e.printable = i, r(e, t)
                    }), n.open("GET", e.printable, !0), n.send()
                } else r(e, t)
            }
        }
    }, function(e, t, n) {
        e.exports = n(4)
    }])
});