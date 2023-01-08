1.这个项目是cli-learn的分包，也就是cli-learn会引用的包，这个包也是我们自行开发的。
那么我们如何在本地进行调试呢？
在该项目下执行npm link，就可以使得这个包在本地全局的node_modules下存在。
然后在cli-learn项目下执行npm link cli-learn-lib这样就安装上了本地的cli-learn-lib包。
如果我们在cli-learn项目下执行npm uninstall cli-learn-lib，那么这个包就移除掉了。
或者我们通过npm unlink cli-learn-lib这样也能清除安装的cli-learn-lib包。
2.注意配置package.json中的main,main意味着当我们的项目作为库文件的时候，它的入口文件是哪个。
3.通过npm publish发布这个包。