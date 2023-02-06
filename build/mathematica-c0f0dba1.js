import { g as getDefaultExportFromCjs, aP as requireMathematica } from './script.js';

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

var mathematicaExports = requireMathematica();
var mathematica = /*@__PURE__*/getDefaultExportFromCjs(mathematicaExports);

var mathematica$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mathematica
}, [mathematicaExports]);

export { mathematica$1 as m };
