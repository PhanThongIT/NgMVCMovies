﻿!function (a) { "function" == typeof define && define.amd ? define(["jquery", "inputmask"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("./inputmask")) : a(jQuery, window.Inputmask) }(function (a, t) { a(document).ajaxComplete(function (n, i, u) { a.inArray("html", u.dataTypes) !== -1 && a(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(function (a, n) { void 0 === n.inputmask && t().mask(n) }) }).ready(function () { a(".inputmask, [data-inputmask], [data-inputmask-mask], [data-inputmask-alias]").each(function (a, n) { void 0 === n.inputmask && t().mask(n) }) }) });
//# sourceMappingURL=inputmask.binding.min.js.map