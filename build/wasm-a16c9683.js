import { g as getDefaultExportFromCjs, gg as requireWasm } from './script.js';

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

var wasmExports = requireWasm();
var wasm = /*@__PURE__*/getDefaultExportFromCjs(wasmExports);

var wasm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: wasm
}, [wasmExports]);

export { wasm$1 as w };
