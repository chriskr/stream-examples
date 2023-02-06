import { g as getDefaultExportFromCjs, eo as requireLog } from './script.js';

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

var logExports = requireLog();
var log = /*@__PURE__*/getDefaultExportFromCjs(logExports);

var log$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: log
}, [logExports]);

export { log$1 as l };
