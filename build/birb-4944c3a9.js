import { g as getDefaultExportFromCjs, cB as requireBirb } from './script.js';

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

var birbExports = requireBirb();
var birb = /*@__PURE__*/getDefaultExportFromCjs(birbExports);

var birb$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: birb
}, [birbExports]);

export { birb$1 as b };
