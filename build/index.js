"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 4000;
app.listen(port, function () {
  console.log("listening on port " + port);
});
app.get('/', function (req, res) {
  res.send('Hello, world');
});
console.log('server listen on port ' + port);