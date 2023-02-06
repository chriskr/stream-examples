import { g as getDefaultExportFromCjs, dr as requireGcode } from './script.js';

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

var gcodeExports = requireGcode();
var gcode = /*@__PURE__*/getDefaultExportFromCjs(gcodeExports);

var gcode$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: gcode
}, [gcodeExports]);

export { gcode$1 as g };
