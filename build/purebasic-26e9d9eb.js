import { g as getDefaultExportFromCjs, fd as requirePurebasic } from './script.js';

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

var purebasicExports = requirePurebasic();
var purebasic = /*@__PURE__*/getDefaultExportFromCjs(purebasicExports);

var purebasic$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: purebasic
}, [purebasicExports]);

export { purebasic$1 as p };
