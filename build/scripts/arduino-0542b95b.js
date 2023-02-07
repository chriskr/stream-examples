import { g as getDefaultExportFromCjs, cm as requireArduino } from './script.js';

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

var arduinoExports = requireArduino();
var arduino = /*@__PURE__*/getDefaultExportFromCjs(arduinoExports);

var arduino$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: arduino
}, [arduinoExports]);

export { arduino$1 as a };
