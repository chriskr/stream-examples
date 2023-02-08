import { g as getDefaultExportFromCjs, f6 as requirePromql } from './script.js';

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

var promqlExports = requirePromql();
var promql = /*@__PURE__*/getDefaultExportFromCjs(promqlExports);

var promql$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: promql
}, [promqlExports]);

export { promql$1 as p };