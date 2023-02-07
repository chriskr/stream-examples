import { g as getDefaultExportFromCjs, d3 as requireDiff } from './script.js';

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

var diffExports = requireDiff();
var diff = /*@__PURE__*/getDefaultExportFromCjs(diffExports);

var diff$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: diff
}, [diffExports]);

export { diff$1 as d };
