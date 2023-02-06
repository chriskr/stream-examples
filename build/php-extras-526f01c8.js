import { g as getDefaultExportFromCjs, e_ as requirePhpExtras } from './script.js';

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

var phpExtrasExports = requirePhpExtras();
var phpExtras = /*@__PURE__*/getDefaultExportFromCjs(phpExtrasExports);

var phpExtras$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: phpExtras
}, [phpExtrasExports]);

export { phpExtras$1 as p };
