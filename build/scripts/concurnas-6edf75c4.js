import { g as getDefaultExportFromCjs, cQ as requireConcurnas } from './script.js';

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

var concurnasExports = requireConcurnas();
var concurnas = /*@__PURE__*/getDefaultExportFromCjs(concurnasExports);

var concurnas$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: concurnas
}, [concurnasExports]);

export { concurnas$1 as c };
