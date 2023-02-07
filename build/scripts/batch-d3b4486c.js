import { g as getDefaultExportFromCjs, cy as requireBatch } from './script.js';

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

var batchExports = requireBatch();
var batch = /*@__PURE__*/getDefaultExportFromCjs(batchExports);

var batch$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: batch
}, [batchExports]);

export { batch$1 as b };
