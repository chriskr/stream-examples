import { g as getDefaultExportFromCjs, fH as requireSolutionFile } from './script.js';

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

var solutionFileExports = requireSolutionFile();
var solutionFile = /*@__PURE__*/getDefaultExportFromCjs(solutionFileExports);

var solutionFile$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: solutionFile
}, [solutionFileExports]);

export { solutionFile$1 as s };
