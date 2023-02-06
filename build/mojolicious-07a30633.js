import { g as getDefaultExportFromCjs, aW as requireMojolicious } from './script.js';

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

var mojoliciousExports = requireMojolicious();
var mojolicious = /*@__PURE__*/getDefaultExportFromCjs(mojoliciousExports);

var mojolicious$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mojolicious
}, [mojoliciousExports]);

export { mojolicious$1 as m };
