import { g as getDefaultExportFromCjs, b9 as requirePf } from './script.js';

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

var pfExports = requirePf();
var pf = /*@__PURE__*/getDefaultExportFromCjs(pfExports);

var pf$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: pf
}, [pfExports]);

export { pf$1 as p };
