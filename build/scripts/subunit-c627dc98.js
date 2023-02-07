import { g as getDefaultExportFromCjs, bQ as requireSubunit } from './script.js';

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

var subunitExports = requireSubunit();
var subunit = /*@__PURE__*/getDefaultExportFromCjs(subunitExports);

var subunit$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: subunit
}, [subunitExports]);

export { subunit$1 as s };
