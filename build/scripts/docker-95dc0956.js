import { g as getDefaultExportFromCjs, d6 as requireDocker } from './script.js';

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

var dockerExports = requireDocker();
var docker = /*@__PURE__*/getDefaultExportFromCjs(dockerExports);

var docker$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: docker
}, [dockerExports]);

export { docker$1 as d };
