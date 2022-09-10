const { program } = require("commander");

const { createProjectAction } = require("./actions");

const createCommands = () => {
	program
		.command("create <project> [others...]")
		.description("clone repository into a folder")
		.action((project, _) => createProjectAction(project));
};

module.exports = createCommands;
