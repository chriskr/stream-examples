import { g as getDefaultExportFromCjs, el as requireLisp } from './script.js';

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

var lispExports = requireLisp();
var lisp = /*@__PURE__*/getDefaultExportFromCjs(lispExports);

var lisp$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: lisp
}, [lispExports]);

export { lisp$1 as l };
