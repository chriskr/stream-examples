import { g as getDefaultExportFromCjs, cI as requireC } from './script.js';

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

var cExports = requireC();
var c = /*@__PURE__*/getDefaultExportFromCjs(cExports);

var c$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: c
}, [cExports]);

export { c$1 as c };
