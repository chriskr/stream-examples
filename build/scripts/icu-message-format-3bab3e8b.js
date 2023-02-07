import { g as getDefaultExportFromCjs, dP as requireIcuMessageFormat } from './script.js';

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

var icuMessageFormatExports = requireIcuMessageFormat();
var icuMessageFormat = /*@__PURE__*/getDefaultExportFromCjs(icuMessageFormatExports);

var icuMessageFormat$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: icuMessageFormat
}, [icuMessageFormatExports]);

export { icuMessageFormat$1 as i };
