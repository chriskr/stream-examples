import { g as getDefaultExportFromCjs, f3 as requirePowershell } from './script.js';

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

var powershellExports = requirePowershell();
var powershell = /*@__PURE__*/getDefaultExportFromCjs(powershellExports);

var powershell$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: powershell
}, [powershellExports]);

export { powershell$1 as p };
