import { g as getDefaultExportFromCjs, dG as requireHaxe } from './script.js';

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

var haxeExports = requireHaxe();
var haxe = /*@__PURE__*/getDefaultExportFromCjs(haxeExports);

var haxe$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: haxe
}, [haxeExports]);

export { haxe$1 as h };
