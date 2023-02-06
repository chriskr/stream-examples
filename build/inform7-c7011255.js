import { g as getDefaultExportFromCjs, dT as requireInform7 } from './script.js';

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

var inform7Exports = requireInform7();
var inform7 = /*@__PURE__*/getDefaultExportFromCjs(inform7Exports);

var inform7$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: inform7
}, [inform7Exports]);

export { inform7$1 as i };
