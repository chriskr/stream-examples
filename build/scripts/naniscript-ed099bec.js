import { g as getDefaultExportFromCjs, eG as requireNaniscript } from './script.js';

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

var naniscriptExports = requireNaniscript();
var naniscript = /*@__PURE__*/getDefaultExportFromCjs(naniscriptExports);

var naniscript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: naniscript
}, [naniscriptExports]);

export { naniscript$1 as n };
