import { g as getDefaultExportFromCjs, b5 as requireOpenscad } from './script.js';

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

var openscadExports = requireOpenscad();
var openscad = /*@__PURE__*/getDefaultExportFromCjs(openscadExports);

var openscad$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: openscad
}, [openscadExports]);

export { openscad$1 as o };
