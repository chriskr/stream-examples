import { g as getDefaultExportFromCjs, c_ as requireD } from './script.js';

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

var dExports = requireD();
var d = /*@__PURE__*/getDefaultExportFromCjs(dExports);

var d$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: d
}, [dExports]);

export { d$1 as d };
