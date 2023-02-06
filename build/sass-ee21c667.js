import { g as getDefaultExportFromCjs, fx as requireSass } from './script.js';

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

var sassExports = requireSass();
var sass = /*@__PURE__*/getDefaultExportFromCjs(sassExports);

var sass$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: sass
}, [sassExports]);

export { sass$1 as s };
