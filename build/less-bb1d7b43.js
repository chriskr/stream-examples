import { g as getDefaultExportFromCjs, aG as requireLess } from './script.js';

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

var lessExports = requireLess();
var less = /*@__PURE__*/getDefaultExportFromCjs(lessExports);

var less$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: less
}, [lessExports]);

export { less$1 as l };
