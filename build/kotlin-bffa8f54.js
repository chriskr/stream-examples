import { g as getDefaultExportFromCjs, ed as requireKotlin } from './script.js';

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

var kotlinExports = requireKotlin();
var kotlin = /*@__PURE__*/getDefaultExportFromCjs(kotlinExports);

var kotlin$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: kotlin
}, [kotlinExports]);

export { kotlin$1 as k };
