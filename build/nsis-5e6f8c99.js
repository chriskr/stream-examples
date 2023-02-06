import { g as getDefaultExportFromCjs, eN as requireNsis } from './script.js';

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

var nsisExports = requireNsis();
var nsis = /*@__PURE__*/getDefaultExportFromCjs(nsisExports);

var nsis$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: nsis
}, [nsisExports]);

export { nsis$1 as n };
