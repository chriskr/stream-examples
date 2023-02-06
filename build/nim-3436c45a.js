import { g as getDefaultExportFromCjs, eL as requireNim } from './script.js';

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

var nimExports = requireNim();
var nim = /*@__PURE__*/getDefaultExportFromCjs(nimExports);

var nim$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: nim
}, [nimExports]);

export { nim$1 as n };
