import { g as getDefaultExportFromCjs, eA as requireMongodb } from './script.js';

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

var mongodbExports = requireMongodb();
var mongodb = /*@__PURE__*/getDefaultExportFromCjs(mongodbExports);

var mongodb$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mongodb
}, [mongodbExports]);

export { mongodb$1 as m };
