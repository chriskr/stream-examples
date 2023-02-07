import { g as getDefaultExportFromCjs, cF as requireBrightscript } from './script.js';

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

var brightscriptExports = requireBrightscript();
var brightscript = /*@__PURE__*/getDefaultExportFromCjs(brightscriptExports);

var brightscript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: brightscript
}, [brightscriptExports]);

export { brightscript$1 as b };
