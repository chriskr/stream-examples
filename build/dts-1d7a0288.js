import { g as getDefaultExportFromCjs, Y as requireDts } from './script.js';

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

var dtsExports = requireDts();
var dts = /*@__PURE__*/getDefaultExportFromCjs(dtsExports);

var dts$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dts
}, [dtsExports]);

export { dts$1 as d };
