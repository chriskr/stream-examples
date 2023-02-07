import { g as getDefaultExportFromCjs, at as requireIrpf90 } from './script.js';

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

var irpf90Exports = requireIrpf90();
var irpf90 = /*@__PURE__*/getDefaultExportFromCjs(irpf90Exports);

var irpf90$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: irpf90
}, [irpf90Exports]);

export { irpf90$1 as i };
