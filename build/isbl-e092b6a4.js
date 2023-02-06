import { g as getDefaultExportFromCjs, au as requireIsbl } from './script.js';

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

var isblExports = requireIsbl();
var isbl = /*@__PURE__*/getDefaultExportFromCjs(isblExports);

var isbl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: isbl
}, [isblExports]);

export { isbl$1 as i };
