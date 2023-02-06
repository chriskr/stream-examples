import { g as getDefaultExportFromCjs, ff as requirePython } from './script.js';

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

var pythonExports = requirePython();
var python = /*@__PURE__*/getDefaultExportFromCjs(pythonExports);

var python$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: python
}, [pythonExports]);

export { python$1 as p };
