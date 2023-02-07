import { g as getDefaultExportFromCjs, gp as requireYaml } from './script.js';

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

var yamlExports = requireYaml();
var yaml = /*@__PURE__*/getDefaultExportFromCjs(yamlExports);

var yaml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: yaml
}, [yamlExports]);

export { yaml$1 as y };
