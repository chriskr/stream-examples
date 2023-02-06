import { g as getDefaultExportFromCjs, cg as requireAntlr4 } from './script.js';

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

var antlr4Exports = requireAntlr4();
var antlr4 = /*@__PURE__*/getDefaultExportFromCjs(antlr4Exports);

var antlr4$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: antlr4
}, [antlr4Exports]);

export { antlr4$1 as a };
