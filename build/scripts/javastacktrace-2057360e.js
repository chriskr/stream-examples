import { g as getDefaultExportFromCjs, d_ as requireJavastacktrace } from './script.js';

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

var javastacktraceExports = requireJavastacktrace();
var javastacktrace = /*@__PURE__*/getDefaultExportFromCjs(javastacktraceExports);

var javastacktrace$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: javastacktrace
}, [javastacktraceExports]);

export { javastacktrace$1 as j };
