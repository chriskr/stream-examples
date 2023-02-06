import { g as getDefaultExportFromCjs, dQ as requireIdris } from './script.js';

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

var idrisExports = requireIdris();
var idris = /*@__PURE__*/getDefaultExportFromCjs(idrisExports);

var idris$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: idris
}, [idrisExports]);

export { idris$1 as i };
