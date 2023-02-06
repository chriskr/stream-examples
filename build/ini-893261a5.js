import { g as getDefaultExportFromCjs, as as requireIni } from './script.js';

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

var iniExports = requireIni();
var ini = /*@__PURE__*/getDefaultExportFromCjs(iniExports);

var ini$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: ini
}, [iniExports]);

export { ini$1 as i };
