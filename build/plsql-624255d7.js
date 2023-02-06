import { g as getDefaultExportFromCjs, f1 as requirePlsql } from './script.js';

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

var plsqlExports = requirePlsql();
var plsql = /*@__PURE__*/getDefaultExportFromCjs(plsqlExports);

var plsql$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: plsql
}, [plsqlExports]);

export { plsql$1 as p };
