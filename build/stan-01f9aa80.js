import { g as getDefaultExportFromCjs, fO as requireStan } from './script.js';

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

var stanExports = requireStan();
var stan = /*@__PURE__*/getDefaultExportFromCjs(stanExports);

var stan$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: stan
}, [stanExports]);

export { stan$1 as s };
