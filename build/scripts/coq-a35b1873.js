import { g as getDefaultExportFromCjs, H as requireCoq } from './script.js';

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

var coqExports = requireCoq();
var coq = /*@__PURE__*/getDefaultExportFromCjs(coqExports);

var coq$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: coq
}, [coqExports]);

export { coq$1 as c };
