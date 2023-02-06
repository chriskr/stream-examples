import { g as getDefaultExportFromCjs, eD as requireN1ql } from './script.js';

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

var n1qlExports = requireN1ql();
var n1ql = /*@__PURE__*/getDefaultExportFromCjs(n1qlExports);

var n1ql$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: n1ql
}, [n1qlExports]);

export { n1ql$1 as n };
