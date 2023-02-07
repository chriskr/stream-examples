import { g as getDefaultExportFromCjs, eh as requireLatte } from './script.js';

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

var latteExports = requireLatte();
var latte = /*@__PURE__*/getDefaultExportFromCjs(latteExports);

var latte$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: latte
}, [latteExports]);

export { latte$1 as l };
