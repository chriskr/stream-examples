import { g as getDefaultExportFromCjs, a3 as requireErlang } from './script.js';

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

var erlangExports = requireErlang();
var erlang = /*@__PURE__*/getDefaultExportFromCjs(erlangExports);

var erlang$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: erlang
}, [erlangExports]);

export { erlang$1 as e };
