import { g as getDefaultExportFromCjs, by as requireRuleslanguage } from './script.js';

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

var ruleslanguageExports = requireRuleslanguage();
var ruleslanguage = /*@__PURE__*/getDefaultExportFromCjs(ruleslanguageExports);

var ruleslanguage$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: ruleslanguage
}, [ruleslanguageExports]);

export { ruleslanguage$1 as r };
