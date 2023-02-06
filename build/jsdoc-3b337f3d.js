import { g as getDefaultExportFromCjs, e4 as requireJsdoc } from './script.js';

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

var jsdocExports = requireJsdoc();
var jsdoc = /*@__PURE__*/getDefaultExportFromCjs(jsdocExports);

var jsdoc$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: jsdoc
}, [jsdocExports]);

export { jsdoc$1 as j };
