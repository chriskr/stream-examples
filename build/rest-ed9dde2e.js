import { g as getDefaultExportFromCjs, fq as requireRest } from './script.js';

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

var restExports = requireRest();
var rest = /*@__PURE__*/getDefaultExportFromCjs(restExports);

var rest$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: rest
}, [restExports]);

export { rest$1 as r };
