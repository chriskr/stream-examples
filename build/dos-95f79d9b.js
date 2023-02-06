import { g as getDefaultExportFromCjs, W as requireDos } from './script.js';

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

var dosExports = requireDos();
var dos = /*@__PURE__*/getDefaultExportFromCjs(dosExports);

var dos$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dos
}, [dosExports]);

export { dos$1 as d };
