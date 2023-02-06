import { g as getDefaultExportFromCjs, ae as requireGml } from './script.js';

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

var gmlExports = requireGml();
var gml = /*@__PURE__*/getDefaultExportFromCjs(gmlExports);

var gml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: gml
}, [gmlExports]);

export { gml$1 as g };
