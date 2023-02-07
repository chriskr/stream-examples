import { g as getDefaultExportFromCjs, a6 as requireFlix } from './script.js';

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

var flixExports = requireFlix();
var flix = /*@__PURE__*/getDefaultExportFromCjs(flixExports);

var flix$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: flix
}, [flixExports]);

export { flix$1 as f };
