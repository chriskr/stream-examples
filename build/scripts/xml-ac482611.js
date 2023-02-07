import { g as getDefaultExportFromCjs, c6 as requireXml } from './script.js';

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

var xmlExports = requireXml();
var xml = /*@__PURE__*/getDefaultExportFromCjs(xmlExports);

var xml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: xml
}, [xmlExports]);

export { xml$1 as x };
