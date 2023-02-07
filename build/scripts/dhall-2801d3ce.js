import { g as getDefaultExportFromCjs, d2 as requireDhall } from './script.js';

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

var dhallExports = requireDhall();
var dhall = /*@__PURE__*/getDefaultExportFromCjs(dhallExports);

var dhall$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dhall
}, [dhallExports]);

export { dhall$1 as d };
