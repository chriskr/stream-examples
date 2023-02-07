import { g as getDefaultExportFromCjs, r as require_1c } from './script.js';

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

var _1cExports = require_1c();
var _1c = /*@__PURE__*/getDefaultExportFromCjs(_1cExports);

var _1c$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: _1c
}, [_1cExports]);

export { _1c$1 as _ };
