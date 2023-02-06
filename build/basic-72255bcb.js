import { g as getDefaultExportFromCjs, cx as requireBasic } from './script.js';

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

var basicExports = requireBasic();
var basic = /*@__PURE__*/getDefaultExportFromCjs(basicExports);

var basic$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: basic
}, [basicExports]);

export { basic$1 as b };
