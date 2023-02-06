import { g as getDefaultExportFromCjs, b4 as requireOcaml } from './script.js';

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

var ocamlExports = requireOcaml();
var ocaml = /*@__PURE__*/getDefaultExportFromCjs(ocamlExports);

var ocaml$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: ocaml
}, [ocamlExports]);

export { ocaml$1 as o };
