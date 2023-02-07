import { g as getDefaultExportFromCjs, gi as requireWiki } from './script.js';

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

var wikiExports = requireWiki();
var wiki = /*@__PURE__*/getDefaultExportFromCjs(wikiExports);

var wiki$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: wiki
}, [wikiExports]);

export { wiki$1 as w };
