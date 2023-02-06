import { g as getDefaultExportFromCjs, bu as requireRoboconf } from './script.js';

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

var roboconfExports = requireRoboconf();
var roboconf = /*@__PURE__*/getDefaultExportFromCjs(roboconfExports);

var roboconf$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: roboconf
}, [roboconfExports]);

export { roboconf$1 as r };
