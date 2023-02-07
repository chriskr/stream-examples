import { g as getDefaultExportFromCjs, eM as requireNix } from './script.js';

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

var nixExports = requireNix();
var nix = /*@__PURE__*/getDefaultExportFromCjs(nixExports);

var nix$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: nix
}, [nixExports]);

export { nix$1 as n };
