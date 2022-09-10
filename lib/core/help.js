const { program } = require("commander");

const helpOptions = () => {
	// 增加自己的option
	program.option("-syn --synn", "a synn cli"); //脚手架信息
	// 版本信息
	program.version(require("../../package.json").version);
	program.option("-v --version"); //版本
	program.option(
		//
		"-d --dest <dest>",
		"a destination folder, 例如: -d /src/components"
	);
	program.option("-f --framework <framework>", "choose framework(vue,react)"); //选择框架

	// help命令添加其他打印
	// program.on("--help", () => {
	// 	// 帮助
	// 	console.log();
	// 	console.log("Other:");
	// 	console.log("   other options~");
	// });
};

module.exports = helpOptions;
