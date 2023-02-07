import { g as getDefaultExportFromCjs, fp as requireRenpy } from './script.js';

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

var renpyExports = requireRenpy();
var renpy = /*@__PURE__*/getDefaultExportFromCjs(renpyExports);

var renpy$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: renpy
}, [renpyExports]);

export { renpy$1 as r };
