import { g as getDefaultExportFromCjs, g2 as requireTypescript } from './script.js';

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

var typescriptExports = requireTypescript();
var typescript = /*@__PURE__*/getDefaultExportFromCjs(typescriptExports);

var typescript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: typescript
}, [typescriptExports]);

export { typescript$1 as t };
