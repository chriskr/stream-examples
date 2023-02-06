import { g as getDefaultExportFromCjs, fn as requireRegex } from './script.js';

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

var regexExports = requireRegex();
var regex = /*@__PURE__*/getDefaultExportFromCjs(regexExports);

var regex$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: regex
}, [regexExports]);

export { regex$1 as r };
