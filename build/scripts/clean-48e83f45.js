import { g as getDefaultExportFromCjs, C as requireClean } from './script.js';

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

var cleanExports = requireClean();
var clean = /*@__PURE__*/getDefaultExportFromCjs(cleanExports);

var clean$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: clean
}, [cleanExports]);

export { clean$1 as c };