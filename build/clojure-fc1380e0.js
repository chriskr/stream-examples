import { g as getDefaultExportFromCjs, cM as requireClojure } from './script.js';

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

var clojureExports = requireClojure();
var clojure = /*@__PURE__*/getDefaultExportFromCjs(clojureExports);

var clojure$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: clojure
}, [clojureExports]);

export { clojure$1 as c };
