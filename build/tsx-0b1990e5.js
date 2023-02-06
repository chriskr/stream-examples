import { g as getDefaultExportFromCjs, f_ as requireTsx } from './script.js';

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

var tsxExports = requireTsx();
var tsx = /*@__PURE__*/getDefaultExportFromCjs(tsxExports);

var tsx$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: tsx
}, [tsxExports]);

export { tsx$1 as t };
