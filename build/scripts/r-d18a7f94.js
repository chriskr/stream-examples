import { g as getDefaultExportFromCjs, br as requireR } from './script.js';

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

var rExports = requireR();
var r = /*@__PURE__*/getDefaultExportFromCjs(rExports);

var r$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: r
}, [rExports]);

export { r$1 as r };