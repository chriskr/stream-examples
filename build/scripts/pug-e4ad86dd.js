import { g as getDefaultExportFromCjs, fa as requirePug } from './script.js';

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

var pugExports = requirePug();
var pug = /*@__PURE__*/getDefaultExportFromCjs(pugExports);

var pug$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: pug
}, [pugExports]);

export { pug$1 as p };
