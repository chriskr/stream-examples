import { g as getDefaultExportFromCjs, b1 as requireNodeRepl } from './script.js';

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

var nodeReplExports = requireNodeRepl();
var nodeRepl = /*@__PURE__*/getDefaultExportFromCjs(nodeReplExports);

var nodeRepl$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: nodeRepl
}, [nodeReplExports]);

export { nodeRepl$1 as n };
