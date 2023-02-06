import { g as getDefaultExportFromCjs, e3 as requireJsTemplates } from './script.js';

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

var jsTemplatesExports = requireJsTemplates();
var jsTemplates = /*@__PURE__*/getDefaultExportFromCjs(jsTemplatesExports);

var jsTemplates$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: jsTemplates
}, [jsTemplatesExports]);

export { jsTemplates$1 as j };
