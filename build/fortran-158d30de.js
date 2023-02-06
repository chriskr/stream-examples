import { g as getDefaultExportFromCjs, a7 as requireFortran } from './script.js';

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

var fortranExports = requireFortran();
var fortran = /*@__PURE__*/getDefaultExportFromCjs(fortranExports);

var fortran$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: fortran
}, [fortranExports]);

export { fortran$1 as f };
