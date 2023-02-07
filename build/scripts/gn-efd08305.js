import { g as getDefaultExportFromCjs, dy as requireGn } from './script.js';

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

var gnExports = requireGn();
var gn = /*@__PURE__*/getDefaultExportFromCjs(gnExports);

var gn$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: gn
}, [gnExports]);

export { gn$1 as g };
