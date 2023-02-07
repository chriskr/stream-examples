import { g as getDefaultExportFromCjs, ds as requireGdscript } from './script.js';

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

var gdscriptExports = requireGdscript();
var gdscript = /*@__PURE__*/getDefaultExportFromCjs(gdscriptExports);

var gdscript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: gdscript
}, [gdscriptExports]);

export { gdscript$1 as g };
