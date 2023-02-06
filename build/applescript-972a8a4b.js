import { g as getDefaultExportFromCjs, h as requireApplescript } from './script.js';

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

var applescriptExports = requireApplescript();
var applescript = /*@__PURE__*/getDefaultExportFromCjs(applescriptExports);

var applescript$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: applescript
}, [applescriptExports]);

export { applescript$1 as a };
