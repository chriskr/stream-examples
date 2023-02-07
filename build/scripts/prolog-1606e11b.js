import { g as getDefaultExportFromCjs, bi as requireProlog } from './script.js';

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

var prologExports = requireProlog();
var prolog = /*@__PURE__*/getDefaultExportFromCjs(prologExports);

var prolog$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: prolog
}, [prologExports]);

export { prolog$1 as p };
