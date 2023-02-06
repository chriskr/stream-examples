import { g as getDefaultExportFromCjs, az as requireJuliaRepl } from './script.js';

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

var juliaReplExports = requireJuliaRepl();
var juliaRepl = /*@__PURE__*/getDefaultExportFromCjs(juliaReplExports);

var juliaRepl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: juliaRepl
}, [juliaReplExports]);

export { juliaRepl$1 as j };
