import { g as getDefaultExportFromCjs, ft as requireRobotframework } from './script.js';

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

var robotframeworkExports = requireRobotframework();
var robotframework = /*@__PURE__*/getDefaultExportFromCjs(robotframeworkExports);

var robotframework$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: robotframework
}, [robotframeworkExports]);

export { robotframework$1 as r };
