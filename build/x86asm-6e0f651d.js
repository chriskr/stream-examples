import { g as getDefaultExportFromCjs, c4 as requireX86asm } from './script.js';

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

var x86asmExports = requireX86asm();
var x86asm = /*@__PURE__*/getDefaultExportFromCjs(x86asmExports);

var x86asm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: x86asm
}, [x86asmExports]);

export { x86asm$1 as x };
