import { g as getDefaultExportFromCjs, eR as requireOpenqasm } from './script.js';

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

var openqasmExports = requireOpenqasm();
var openqasm = /*@__PURE__*/getDefaultExportFromCjs(openqasmExports);

var openqasm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: openqasm
}, [openqasmExports]);

export { openqasm$1 as o };
