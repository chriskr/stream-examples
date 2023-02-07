import { g as getDefaultExportFromCjs, cL as requireCil } from './script.js';

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

var cilExports = requireCil();
var cil = /*@__PURE__*/getDefaultExportFromCjs(cilExports);

var cil$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: cil
}, [cilExports]);

export { cil$1 as c };
