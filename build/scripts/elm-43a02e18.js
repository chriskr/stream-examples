import { g as getDefaultExportFromCjs, a0 as requireElm } from './script.js';

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

var elmExports = requireElm();
var elm = /*@__PURE__*/getDefaultExportFromCjs(elmExports);

var elm$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: elm
}, [elmExports]);

export { elm$1 as e };
