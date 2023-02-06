import { g as getDefaultExportFromCjs, fD as requireSmalltalk } from './script.js';

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

var smalltalkExports = requireSmalltalk();
var smalltalk = /*@__PURE__*/getDefaultExportFromCjs(smalltalkExports);

var smalltalk$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: smalltalk
}, [smalltalkExports]);

export { smalltalk$1 as s };
