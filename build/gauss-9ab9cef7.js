import { g as getDefaultExportFromCjs, aa as requireGauss } from './script.js';

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

var gaussExports = requireGauss();
var gauss = /*@__PURE__*/getDefaultExportFromCjs(gaussExports);

var gauss$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: gauss
}, [gaussExports]);

export { gauss$1 as g };
