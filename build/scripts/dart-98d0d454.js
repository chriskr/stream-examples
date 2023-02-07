import { g as getDefaultExportFromCjs, c$ as requireDart } from './script.js';

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

var dartExports = requireDart();
var dart = /*@__PURE__*/getDefaultExportFromCjs(dartExports);

var dart$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dart
}, [dartExports]);

export { dart$1 as d };
