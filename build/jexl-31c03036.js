import { g as getDefaultExportFromCjs, d$ as requireJexl } from './script.js';

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

var jexlExports = requireJexl();
var jexl = /*@__PURE__*/getDefaultExportFromCjs(jexlExports);

var jexl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: jexl
}, [jexlExports]);

export { jexl$1 as j };
