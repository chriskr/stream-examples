import { g as getDefaultExportFromCjs, fL as requireSqf } from './script.js';

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

var sqfExports = requireSqf();
var sqf = /*@__PURE__*/getDefaultExportFromCjs(sqfExports);

var sqf$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sqf
}, [sqfExports]);

export { sqf$1 as s };
