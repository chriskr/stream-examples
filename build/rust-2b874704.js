import { g as getDefaultExportFromCjs, bz as requireRust } from './script.js';

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

var rustExports = requireRust();
var rust = /*@__PURE__*/getDefaultExportFromCjs(rustExports);

var rust$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: rust
}, [rustExports]);

export { rust$1 as r };
