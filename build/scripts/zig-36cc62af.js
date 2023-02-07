import { g as getDefaultExportFromCjs, gr as requireZig } from './script.js';

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

var zigExports = requireZig();
var zig = /*@__PURE__*/getDefaultExportFromCjs(zigExports);

var zig$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: zig
}, [zigExports]);

export { zig$1 as z };
