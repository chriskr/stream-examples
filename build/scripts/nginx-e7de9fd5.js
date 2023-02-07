import { g as getDefaultExportFromCjs, a_ as requireNginx } from './script.js';

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

var nginxExports = requireNginx();
var nginx = /*@__PURE__*/getDefaultExportFromCjs(nginxExports);

var nginx$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: nginx
}, [nginxExports]);

export { nginx$1 as n };
