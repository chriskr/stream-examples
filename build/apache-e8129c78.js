import { g as getDefaultExportFromCjs, f as requireApache } from './script.js';

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

var apacheExports = requireApache();
var apache = /*@__PURE__*/getDefaultExportFromCjs(apacheExports);

var apache$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: apache
}, [apacheExports]);

export { apache$1 as a };
