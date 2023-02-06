import { g as getDefaultExportFromCjs, av as requireJava } from './script.js';

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

var javaExports = requireJava();
var java = /*@__PURE__*/getDefaultExportFromCjs(javaExports);

var java$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: java
}, [javaExports]);

export { java$1 as j };
