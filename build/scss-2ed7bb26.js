import { g as getDefaultExportFromCjs, bE as requireScss } from './script.js';

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

var scssExports = requireScss();
var scss = /*@__PURE__*/getDefaultExportFromCjs(scssExports);

var scss$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: scss
}, [scssExports]);

export { scss$1 as s };
