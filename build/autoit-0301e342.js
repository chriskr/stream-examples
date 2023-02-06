import { g as getDefaultExportFromCjs, o as requireAutoit } from './script.js';

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

var autoitExports = requireAutoit();
var autoit = /*@__PURE__*/getDefaultExportFromCjs(autoitExports);

var autoit$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: autoit
}, [autoitExports]);

export { autoit$1 as a };
