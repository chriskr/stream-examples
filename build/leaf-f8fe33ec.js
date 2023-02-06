import { g as getDefaultExportFromCjs, aF as requireLeaf } from './script.js';

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

var leafExports = requireLeaf();
var leaf = /*@__PURE__*/getDefaultExportFromCjs(leafExports);

var leaf$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: leaf
}, [leafExports]);

export { leaf$1 as l };
