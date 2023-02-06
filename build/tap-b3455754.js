import { g as getDefaultExportFromCjs, fV as requireTap } from './script.js';

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

var tapExports = requireTap();
var tap = /*@__PURE__*/getDefaultExportFromCjs(tapExports);

var tap$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: tap
}, [tapExports]);

export { tap$1 as t };
