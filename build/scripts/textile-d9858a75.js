import { g as getDefaultExportFromCjs, fX as requireTextile } from './script.js';

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

var textileExports = requireTextile();
var textile = /*@__PURE__*/getDefaultExportFromCjs(textileExports);

var textile$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: textile
}, [textileExports]);

export { textile$1 as t };
