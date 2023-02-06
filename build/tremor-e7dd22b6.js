import { g as getDefaultExportFromCjs, fZ as requireTremor } from './script.js';

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

var tremorExports = requireTremor();
var tremor = /*@__PURE__*/getDefaultExportFromCjs(tremorExports);

var tremor$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: tremor
}, [tremorExports]);

export { tremor$1 as t };
