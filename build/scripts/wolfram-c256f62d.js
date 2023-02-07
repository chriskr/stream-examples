import { g as getDefaultExportFromCjs, gj as requireWolfram } from './script.js';

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

var wolframExports = requireWolfram();
var wolfram = /*@__PURE__*/getDefaultExportFromCjs(wolframExports);

var wolfram$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: wolfram
}, [wolframExports]);

export { wolfram$1 as w };
