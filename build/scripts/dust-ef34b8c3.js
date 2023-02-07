import { g as getDefaultExportFromCjs, Z as requireDust } from './script.js';

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

var dustExports = requireDust();
var dust = /*@__PURE__*/getDefaultExportFromCjs(dustExports);

var dust$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dust
}, [dustExports]);

export { dust$1 as d };
