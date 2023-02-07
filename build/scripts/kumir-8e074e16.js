import { g as getDefaultExportFromCjs, ee as requireKumir } from './script.js';

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

var kumirExports = requireKumir();
var kumir = /*@__PURE__*/getDefaultExportFromCjs(kumirExports);

var kumir$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: kumir
}, [kumirExports]);

export { kumir$1 as k };
