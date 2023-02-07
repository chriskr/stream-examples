import { g as getDefaultExportFromCjs, dl as requireFlow } from './script.js';

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

var flowExports = requireFlow();
var flow = /*@__PURE__*/getDefaultExportFromCjs(flowExports);

var flow$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: flow
}, [flowExports]);

export { flow$1 as f };
