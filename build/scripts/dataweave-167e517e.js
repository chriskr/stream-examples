import { g as getDefaultExportFromCjs, d0 as requireDataweave } from './script.js';

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

var dataweaveExports = requireDataweave();
var dataweave = /*@__PURE__*/getDefaultExportFromCjs(dataweaveExports);

var dataweave$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: dataweave
}, [dataweaveExports]);

export { dataweave$1 as d };
