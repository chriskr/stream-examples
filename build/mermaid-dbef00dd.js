import { g as getDefaultExportFromCjs, ey as requireMermaid } from './script.js';

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

var mermaidExports = requireMermaid();
var mermaid = /*@__PURE__*/getDefaultExportFromCjs(mermaidExports);

var mermaid$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mermaid
}, [mermaidExports]);

export { mermaid$1 as m };
