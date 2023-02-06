import { g as getDefaultExportFromCjs, c5 as requireXl } from './script.js';

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

var xlExports = requireXl();
var xl = /*@__PURE__*/getDefaultExportFromCjs(xlExports);

var xl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: xl
}, [xlExports]);

export { xl$1 as x };
