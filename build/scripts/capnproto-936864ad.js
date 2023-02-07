import { g as getDefaultExportFromCjs, A as requireCapnproto } from './script.js';

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

var capnprotoExports = requireCapnproto();
var capnproto = /*@__PURE__*/getDefaultExportFromCjs(capnprotoExports);

var capnproto$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: capnproto
}, [capnprotoExports]);

export { capnproto$1 as c };
