重点：
1.package.json添加bin脚本,使得cli-learn成为配置到PATH路径下的可执行模块，这样我们就可以直接在终端执行
cli-learn命令，相当于在终端输入 bin/index.js
2.如何调试，在本地项目路径下调用npm link，使得本地开发包链接到全局node_modules下，这样我们在终端输入cli-learn,执行的就是本地的bin/index.js文件,而非发布到远端的文件。