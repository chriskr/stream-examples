import { g as getDefaultExportFromCjs, bP as requireStylus } from './script.js';

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

var stylusExports = requireStylus();
var stylus = /*@__PURE__*/getDefaultExportFromCjs(stylusExports);

var stylus$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: stylus
}, [stylusExports]);

export { stylus$1 as s };
