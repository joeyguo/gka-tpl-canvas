var html = require("./lib/html");
var utils = require("./lib/utils");

module.exports = function (data, opts, tool) {

    var names = utils.getFileNames(data);
    var _data = utils.formateData(data, ['name']);

    tool.writeFile("data.js", `var data = ${JSON.stringify(_data, null, '    ')}`);
    tool.writeFile("gka.html", html(_data, JSON.stringify(names), opts));
};

