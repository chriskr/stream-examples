import { g as getDefaultExportFromCjs, bx as requireRuby } from './script.js';

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

var rubyExports = requireRuby();
var ruby = /*@__PURE__*/getDefaultExportFromCjs(rubyExports);

var ruby$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: ruby
}, [rubyExports]);

export { ruby$1 as r };
