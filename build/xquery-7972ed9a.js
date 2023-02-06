import { g as getDefaultExportFromCjs, go as requireXquery } from './script.js';

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

var xqueryExports = requireXquery();
var xquery = /*@__PURE__*/getDefaultExportFromCjs(xqueryExports);

var xquery$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: xquery
}, [xqueryExports]);

export { xquery$1 as x };
