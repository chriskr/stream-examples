import { g as getDefaultExportFromCjs, eb as requireKeepalived } from './script.js';

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

var keepalivedExports = requireKeepalived();
var keepalived = /*@__PURE__*/getDefaultExportFromCjs(keepalivedExports);

var keepalived$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: keepalived
}, [keepalivedExports]);

export { keepalived$1 as k };
