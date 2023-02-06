import { g as getDefaultExportFromCjs, ef as requireKusto } from './script.js';

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

var kustoExports = requireKusto();
var kusto = /*@__PURE__*/getDefaultExportFromCjs(kustoExports);

var kusto$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: kusto
}, [kustoExports]);

export { kusto$1 as k };
