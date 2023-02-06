import { g as getDefaultExportFromCjs, fM as requireSql } from './script.js';

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

var sqlExports = requireSql();
var sql = /*@__PURE__*/getDefaultExportFromCjs(sqlExports);

var sql$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sql
}, [sqlExports]);

export { sql$1 as s };
