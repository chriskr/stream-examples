import { g as getDefaultExportFromCjs, fS as requireT4Cs } from './script.js';

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var t4CsExports = requireT4Cs();
var t4Cs = /*@__PURE__*/getDefaultExportFromCjs(t4CsExports);

var t4Cs$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: t4Cs
}, [t4CsExports]);

export { t4Cs$1 as t };
