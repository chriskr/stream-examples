import { g as getDefaultExportFromCjs, aK as requireLlvm } from './script.js';

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

var llvmExports = requireLlvm();
var llvm = /*@__PURE__*/getDefaultExportFromCjs(llvmExports);

var llvm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: llvm
}, [llvmExports]);

export { llvm$1 as l };
