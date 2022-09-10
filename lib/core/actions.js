const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

const createProjectAction = (project) => {
	//1. clone项目
	//2. 执行npm install
	//3. 运行项目npm run dev
};

module.exports = {
	createProjectAction
};
