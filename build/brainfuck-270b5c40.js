import { g as getDefaultExportFromCjs, cE as requireBrainfuck } from './script.js';

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

var brainfuckExports = requireBrainfuck();
var brainfuck = /*@__PURE__*/getDefaultExportFromCjs(brainfuckExports);

var brainfuck$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: brainfuck
}, [brainfuckExports]);

export { brainfuck$1 as b };
