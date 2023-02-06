import { g as getDefaultExportFromCjs, gk as requireWren } from './script.js';

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

var wrenExports = requireWren();
var wren = /*@__PURE__*/getDefaultExportFromCjs(wrenExports);

var wren$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: wren
}, [wrenExports]);

export { wren$1 as w };
