import { g as getDefaultExportFromCjs, eu as requireMarkupTemplating } from './script.js';

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

var markupTemplatingExports = requireMarkupTemplating();
var markupTemplating = /*@__PURE__*/getDefaultExportFromCjs(markupTemplatingExports);

var markupTemplating$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: markupTemplating
}, [markupTemplatingExports]);

export { markupTemplating$1 as m };
