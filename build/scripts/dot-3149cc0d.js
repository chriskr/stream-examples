import { g as getDefaultExportFromCjs, d7 as requireDot } from './script.js';

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

var dotExports = requireDot();
var dot = /*@__PURE__*/getDefaultExportFromCjs(dotExports);

var dot$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dot
}, [dotExports]);

export { dot$1 as d };
