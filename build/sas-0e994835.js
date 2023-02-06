import { g as getDefaultExportFromCjs, fw as requireSas } from './script.js';

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

var sasExports = requireSas();
var sas = /*@__PURE__*/getDefaultExportFromCjs(sasExports);

var sas$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sas
}, [sasExports]);

export { sas$1 as s };
