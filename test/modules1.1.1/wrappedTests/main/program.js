/* This file has been generated by yabbler.js */
require.define({
"program": function(require, exports, module) {
var test = require('test');

test.assert(require.main != null && require.main === module, 'main module has require.main');

var aMain = require('a').main();
test.assert(aMain != null && aMain === module, 'submodule has require.main');

require.ensure(['b'], function(require) {
	test.assert(require.main != null && require.main === module, 'require.ensure has require.main');
	test.print('DONE', 'info');
});
}}, ["test", "a"]);