import { g as getDefaultExportFromCjs, c2 as requireVhdl } from './script.js';

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

var vhdlExports = requireVhdl();
var vhdl = /*@__PURE__*/getDefaultExportFromCjs(vhdlExports);

var vhdl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: vhdl
}, [vhdlExports]);

export { vhdl$1 as v };
