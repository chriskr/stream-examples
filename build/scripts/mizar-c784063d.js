import { g as getDefaultExportFromCjs, ez as requireMizar } from './script.js';

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

var mizarExports = requireMizar();
var mizar = /*@__PURE__*/getDefaultExportFromCjs(mizarExports);

var mizar$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mizar
}, [mizarExports]);

export { mizar$1 as m };
