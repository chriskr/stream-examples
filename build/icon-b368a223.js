import { g as getDefaultExportFromCjs, dO as requireIcon } from './script.js';

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

var iconExports = requireIcon();
var icon = /*@__PURE__*/getDefaultExportFromCjs(iconExports);

var icon$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: icon
}, [iconExports]);

export { icon$1 as i };
