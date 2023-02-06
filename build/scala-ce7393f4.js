import { g as getDefaultExportFromCjs, fy as requireScala } from './script.js';

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

var scalaExports = requireScala();
var scala = /*@__PURE__*/getDefaultExportFromCjs(scalaExports);

var scala$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: scala
}, [scalaExports]);

export { scala$1 as s };
