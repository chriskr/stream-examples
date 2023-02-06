import { g as getDefaultExportFromCjs, T as requireDjango } from './script.js';

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

var djangoExports = requireDjango();
var django = /*@__PURE__*/getDefaultExportFromCjs(djangoExports);

var django$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: django
}, [djangoExports]);

export { django$1 as d };
