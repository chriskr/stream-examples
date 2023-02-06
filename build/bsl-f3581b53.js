import { g as getDefaultExportFromCjs, cH as requireBsl } from './script.js';

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

var bslExports = requireBsl();
var bsl = /*@__PURE__*/getDefaultExportFromCjs(bslExports);

var bsl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: bsl
}, [bslExports]);

export { bsl$1 as b };
