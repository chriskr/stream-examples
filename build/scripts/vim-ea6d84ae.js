import { g as getDefaultExportFromCjs, c3 as requireVim } from './script.js';

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

var vimExports = requireVim();
var vim = /*@__PURE__*/getDefaultExportFromCjs(vimExports);

var vim$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: vim
}, [vimExports]);

export { vim$1 as v };
