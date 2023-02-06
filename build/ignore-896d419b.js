import { g as getDefaultExportFromCjs, dS as requireIgnore } from './script.js';

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

var ignoreExports = requireIgnore();
var ignore = /*@__PURE__*/getDefaultExportFromCjs(ignoreExports);

var ignore$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: ignore
}, [ignoreExports]);

export { ignore$1 as i };
