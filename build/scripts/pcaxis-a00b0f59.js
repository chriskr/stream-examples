import { g as getDefaultExportFromCjs, eX as requirePcaxis } from './script.js';

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

var pcaxisExports = requirePcaxis();
var pcaxis = /*@__PURE__*/getDefaultExportFromCjs(pcaxisExports);

var pcaxis$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: pcaxis
}, [pcaxisExports]);

export { pcaxis$1 as p };
