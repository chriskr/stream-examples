import { g as getDefaultExportFromCjs, fb as requirePuppet } from './script.js';

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

var puppetExports = requirePuppet();
var puppet = /*@__PURE__*/getDefaultExportFromCjs(puppetExports);

var puppet$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: puppet
}, [puppetExports]);

export { puppet$1 as p };
