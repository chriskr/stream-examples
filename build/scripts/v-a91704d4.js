import { g as getDefaultExportFromCjs, g7 as requireV } from './script.js';

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

var vExports = requireV();
var v = /*@__PURE__*/getDefaultExportFromCjs(vExports);

var v$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: v
}, [vExports]);

export { v$1 as v };
