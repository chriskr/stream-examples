import { g as getDefaultExportFromCjs, fh as requireQml } from './script.js';

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

var qmlExports = requireQml();
var qml = /*@__PURE__*/getDefaultExportFromCjs(qmlExports);

var qml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: qml
}, [qmlExports]);

export { qml$1 as q };
