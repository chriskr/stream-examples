import { g as getDefaultExportFromCjs, e as requireAngelscript } from './script.js';

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

var angelscriptExports = requireAngelscript();
var angelscript = /*@__PURE__*/getDefaultExportFromCjs(angelscriptExports);

var angelscript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: angelscript
}, [angelscriptExports]);

export { angelscript$1 as a };
