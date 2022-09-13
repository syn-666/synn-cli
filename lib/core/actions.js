const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

const createProjectAction = async (project) => {
	//1. clone项目
	await download(
		"direct:https://gitee.com/shi_yanan/react-template.git",
		`./${project}`,
		{ clone: true }
	);
	//2. 执行npm install

	//3. 运行项目npm run dev
};

module.exports = {
	createProjectAction
};
