import { g as getDefaultExportFromCjs, d9 as requireEditorconfig } from './script.js';

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

var editorconfigExports = requireEditorconfig();
var editorconfig = /*@__PURE__*/getDefaultExportFromCjs(editorconfigExports);

var editorconfig$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: editorconfig
}, [editorconfigExports]);

export { editorconfig$1 as e };
