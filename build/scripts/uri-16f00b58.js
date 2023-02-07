import { g as getDefaultExportFromCjs, g6 as requireUri } from './script.js';

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

var uriExports = requireUri();
var uri = /*@__PURE__*/getDefaultExportFromCjs(uriExports);

var uri$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: uri
}, [uriExports]);

export { uri$1 as u };
