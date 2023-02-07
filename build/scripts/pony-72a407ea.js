import { g as getDefaultExportFromCjs, be as requirePony } from './script.js';

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

var ponyExports = requirePony();
var pony = /*@__PURE__*/getDefaultExportFromCjs(ponyExports);

var pony$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: pony
}, [ponyExports]);

export { pony$1 as p };
