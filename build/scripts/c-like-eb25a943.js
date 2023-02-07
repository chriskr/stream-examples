import { g as getDefaultExportFromCjs, x as requireCLike } from './script.js';

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

var cLikeExports = requireCLike();
var cLike = /*@__PURE__*/getDefaultExportFromCjs(cLikeExports);

var cLike$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: cLike
}, [cLikeExports]);

export { cLike$1 as c };
