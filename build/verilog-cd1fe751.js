import { g as getDefaultExportFromCjs, c1 as requireVerilog } from './script.js';

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

var verilogExports = requireVerilog();
var verilog = /*@__PURE__*/getDefaultExportFromCjs(verilogExports);

var verilog$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: verilog
}, [verilogExports]);

export { verilog$1 as v };
