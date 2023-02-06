import { g as getDefaultExportFromCjs, l as requireAsciidoc } from './script.js';

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

var asciidocExports = requireAsciidoc();
var asciidoc = /*@__PURE__*/getDefaultExportFromCjs(asciidocExports);

var asciidoc$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: asciidoc
}, [asciidocExports]);

export { asciidoc$1 as a };
