import { g as getDefaultExportFromCjs, bU as requireTcl } from './script.js';

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

var tclExports = requireTcl();
var tcl = /*@__PURE__*/getDefaultExportFromCjs(tclExports);

var tcl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: tcl
}, [tclExports]);

export { tcl$1 as t };
