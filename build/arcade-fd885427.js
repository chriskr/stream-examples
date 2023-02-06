import { g as getDefaultExportFromCjs, i as requireArcade } from './script.js';

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

var arcadeExports = requireArcade();
var arcade = /*@__PURE__*/getDefaultExportFromCjs(arcadeExports);

var arcade$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: arcade
}, [arcadeExports]);

export { arcade$1 as a };
