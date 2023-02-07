import { g as getDefaultExportFromCjs, fi as requireQore } from './script.js';

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

var qoreExports = requireQore();
var qore = /*@__PURE__*/getDefaultExportFromCjs(qoreExports);

var qore$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: qore
}, [qoreExports]);

export { qore$1 as q };
