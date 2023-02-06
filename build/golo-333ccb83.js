import { g as getDefaultExportFromCjs, ag as requireGolo } from './script.js';

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

var goloExports = requireGolo();
var golo = /*@__PURE__*/getDefaultExportFromCjs(goloExports);

var golo$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: golo
}, [goloExports]);

export { golo$1 as g };
