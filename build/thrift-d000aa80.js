import { g as getDefaultExportFromCjs, bV as requireThrift } from './script.js';

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

var thriftExports = requireThrift();
var thrift = /*@__PURE__*/getDefaultExportFromCjs(thriftExports);

var thrift$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: thrift
}, [thriftExports]);

export { thrift$1 as t };
