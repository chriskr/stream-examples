import { g as getDefaultExportFromCjs, fT as requireT4Templating } from './script.js';

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

var t4TemplatingExports = requireT4Templating();
var t4Templating = /*@__PURE__*/getDefaultExportFromCjs(t4TemplatingExports);

var t4Templating$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: t4Templating
}, [t4TemplatingExports]);

export { t4Templating$1 as t };
