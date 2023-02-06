import { g as getDefaultExportFromCjs, dF as requireHaskell } from './script.js';

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

var haskellExports = requireHaskell();
var haskell = /*@__PURE__*/getDefaultExportFromCjs(haskellExports);

var haskell$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: haskell
}, [haskellExports]);

export { haskell$1 as h };
