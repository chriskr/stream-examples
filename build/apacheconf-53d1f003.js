import { g as getDefaultExportFromCjs, ch as requireApacheconf } from './script.js';

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

var apacheconfExports = requireApacheconf();
var apacheconf = /*@__PURE__*/getDefaultExportFromCjs(apacheconfExports);

var apacheconf$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: apacheconf
}, [apacheconfExports]);

export { apacheconf$1 as a };
