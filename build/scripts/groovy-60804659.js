import { g as getDefaultExportFromCjs, ai as requireGroovy } from './script.js';

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

var groovyExports = requireGroovy();
var groovy = /*@__PURE__*/getDefaultExportFromCjs(groovyExports);

var groovy$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: groovy
}, [groovyExports]);

export { groovy$1 as g };
