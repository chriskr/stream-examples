import { g as getDefaultExportFromCjs, k as requireArmasm } from './script.js';

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

var armasmExports = requireArmasm();
var armasm = /*@__PURE__*/getDefaultExportFromCjs(armasmExports);

var armasm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: armasm
}, [armasmExports]);

export { armasm$1 as a };
