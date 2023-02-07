import { g as getDefaultExportFromCjs, ce as requireAgda } from './script.js';

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

var agdaExports = requireAgda();
var agda = /*@__PURE__*/getDefaultExportFromCjs(agdaExports);

var agda$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: agda
}, [agdaExports]);

export { agda$1 as a };
