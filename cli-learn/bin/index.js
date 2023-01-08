#!/usr/bin/env node
// 上面这句话的作用是使得直接调用文件的时候，我们到环境变量中找node命令，然后通过node命令去执行这个文件
// 使得直接在终端执行 /bin/index.js 等价于 node /bin/index.js
const lib = require('cli-learn-lib')
// console.log(lib.sum(1,2))
// console.log('welcome cli-learn111223')

// 注册一个命令 cli-learn init
// 实现参数解析 cli-learn init --name my-app
const argv = require('process').argv
const command = argv[2]
const options = argv.slice(3)
if(options.length > 1){
    let [option,param] = options
    option = option.replace('--','')
    if(command){
        if(lib[command]){
            lib[command]({option,param})
         }else{
            console.log('无效的命令')
         }
    }else{
        console.log('请输入命令')
    }
}
// 实现参数解析cli-learn --version
if(command.startsWith('--')|| command.startsWith('-')){
    const globalOption = command.replace(/--|-/g,'');
    if(globalOption==='version' || globalOption === 'V'){
        console.log('1.0.0')
    }
}



