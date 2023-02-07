import { g as getDefaultExportFromCjs, fl as requireRacket } from './script.js';

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

var racketExports = requireRacket();
var racket = /*@__PURE__*/getDefaultExportFromCjs(racketExports);

var racket$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: racket
}, [racketExports]);

export { racket$1 as r };
