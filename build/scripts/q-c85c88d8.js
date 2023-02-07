import { g as getDefaultExportFromCjs, bp as requireQ } from './script.js';

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

var qExports = requireQ();
var q = /*@__PURE__*/getDefaultExportFromCjs(qExports);

var q$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: q
}, [qExports]);

export { q$1 as q };
