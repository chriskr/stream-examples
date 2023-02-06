import { g as getDefaultExportFromCjs, fm as requireReason } from './script.js';

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

var reasonExports = requireReason();
var reason = /*@__PURE__*/getDefaultExportFromCjs(reasonExports);

var reason$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: reason
}, [reasonExports]);

export { reason$1 as r };
