import { g as getDefaultExportFromCjs, dD as requireHaml } from './script.js';

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

var hamlExports = requireHaml();
var haml = /*@__PURE__*/getDefaultExportFromCjs(hamlExports);

var haml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: haml
}, [hamlExports]);

export { haml$1 as h };
