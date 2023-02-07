import { g as getDefaultExportFromCjs, aw as requireJavascript } from './script.js';

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

var javascriptExports = requireJavascript();
var javascript = /*@__PURE__*/getDefaultExportFromCjs(javascriptExports);

var javascript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: javascript
}, [javascriptExports]);

export { javascript$1 as j };
