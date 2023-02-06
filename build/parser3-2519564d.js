import { g as getDefaultExportFromCjs, b7 as requireParser3 } from './script.js';

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

var parser3Exports = requireParser3();
var parser3 = /*@__PURE__*/getDefaultExportFromCjs(parser3Exports);

var parser3$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: parser3
}, [parser3Exports]);

export { parser3$1 as p };
