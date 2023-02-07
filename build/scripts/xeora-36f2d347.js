import { g as getDefaultExportFromCjs, gl as requireXeora } from './script.js';

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

var xeoraExports = requireXeora();
var xeora = /*@__PURE__*/getDefaultExportFromCjs(xeoraExports);

var xeora$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: xeora
}, [xeoraExports]);

export { xeora$1 as x };
