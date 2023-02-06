import { g as getDefaultExportFromCjs, d1 as requireDax } from './script.js';

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

var daxExports = requireDax();
var dax = /*@__PURE__*/getDefaultExportFromCjs(daxExports);

var dax$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dax
}, [daxExports]);

export { dax$1 as d };
