import { g as getDefaultExportFromCjs, aO as requireMarkdown } from './script.js';

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

var markdownExports = requireMarkdown();
var markdown = /*@__PURE__*/getDefaultExportFromCjs(markdownExports);

var markdown$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: markdown
}, [markdownExports]);

export { markdown$1 as m };
