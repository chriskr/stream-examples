import { g as getDefaultExportFromCjs, fR as requireSystemd } from './script.js';

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

var systemdExports = requireSystemd();
var systemd = /*@__PURE__*/getDefaultExportFromCjs(systemdExports);

var systemd$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: systemd
}, [systemdExports]);

export { systemd$1 as s };
