import { g as getDefaultExportFromCjs, n as requireAutohotkey } from './script.js';

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

var autohotkeyExports = requireAutohotkey();
var autohotkey = /*@__PURE__*/getDefaultExportFromCjs(autohotkeyExports);

var autohotkey$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: autohotkey
}, [autohotkeyExports]);

export { autohotkey$1 as a };
