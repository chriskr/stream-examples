import { g as getDefaultExportFromCjs, dJ as requireHoon } from './script.js';

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

var hoonExports = requireHoon();
var hoon = /*@__PURE__*/getDefaultExportFromCjs(hoonExports);

var hoon$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: hoon
}, [hoonExports]);

export { hoon$1 as h };
