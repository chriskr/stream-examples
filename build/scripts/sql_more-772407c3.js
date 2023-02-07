import { g as getDefaultExportFromCjs, bL as requireSql_more } from './script.js';

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

var sql_moreExports = requireSql_more();
var sql_more = /*@__PURE__*/getDefaultExportFromCjs(sql_moreExports);

var sql_more$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sql_more
}, [sql_moreExports]);

export { sql_more$1 as s };
