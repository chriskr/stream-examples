import { g as getDefaultExportFromCjs, cJ as requireCfscript } from './script.js';

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

var cfscriptExports = requireCfscript();
var cfscript = /*@__PURE__*/getDefaultExportFromCjs(cfscriptExports);

var cfscript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: cfscript
}, [cfscriptExports]);

export { cfscript$1 as c };
