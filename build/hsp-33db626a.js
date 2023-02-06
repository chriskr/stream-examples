import { g as getDefaultExportFromCjs, an as requireHsp } from './script.js';

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

var hspExports = requireHsp();
var hsp = /*@__PURE__*/getDefaultExportFromCjs(hspExports);

var hsp$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: hsp
}, [hspExports]);

export { hsp$1 as h };
