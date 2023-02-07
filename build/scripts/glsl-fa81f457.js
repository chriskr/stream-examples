import { g as getDefaultExportFromCjs, ad as requireGlsl } from './script.js';

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

var glslExports = requireGlsl();
var glsl = /*@__PURE__*/getDefaultExportFromCjs(glslExports);

var glsl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: glsl
}, [glslExports]);

export { glsl$1 as g };
