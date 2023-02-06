import { g as getDefaultExportFromCjs, dL as requireHsts } from './script.js';

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

var hstsExports = requireHsts();
var hsts = /*@__PURE__*/getDefaultExportFromCjs(hstsExports);

var hsts$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: hsts
}, [hstsExports]);

export { hsts$1 as h };
