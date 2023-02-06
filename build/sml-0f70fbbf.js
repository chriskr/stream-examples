import { g as getDefaultExportFromCjs, fF as requireSml } from './script.js';

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

var smlExports = requireSml();
var sml = /*@__PURE__*/getDefaultExportFromCjs(smlExports);

var sml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sml
}, [smlExports]);

export { sml$1 as s };
