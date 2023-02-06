import { g as getDefaultExportFromCjs, eI as requireNeon } from './script.js';

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

var neonExports = requireNeon();
var neon = /*@__PURE__*/getDefaultExportFromCjs(neonExports);

var neon$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: neon
}, [neonExports]);

export { neon$1 as n };
