#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// 增加options和help
helpOptions();

//创建其他指令
createCommands();

// program.parse 是将命令参数传入commander 管道中，一般放在最后执行
program.parse(process.argv);

// 获取命令后的参数
// const options = program.opts();
