import { g as getDefaultExportFromCjs, eU as requireParser } from './script.js';

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

var parserExports = requireParser();
var parser = /*@__PURE__*/getDefaultExportFromCjs(parserExports);

var parser$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: parser
}, [parserExports]);

export { parser$1 as p };
