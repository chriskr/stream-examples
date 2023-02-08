import { g as getDefaultExportFromCjs, ep as requireLolcode } from './script.js';

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

var lolcodeExports = requireLolcode();
var lolcode = /*@__PURE__*/getDefaultExportFromCjs(lolcodeExports);

var lolcode$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: lolcode
}, [lolcodeExports]);

export { lolcode$1 as l };