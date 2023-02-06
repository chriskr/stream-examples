import { g as getDefaultExportFromCjs, bg as requireProcessing } from './script.js';

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

var processingExports = requireProcessing();
var processing = /*@__PURE__*/getDefaultExportFromCjs(processingExports);

var processing$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: processing
}, [processingExports]);

export { processing$1 as p };
