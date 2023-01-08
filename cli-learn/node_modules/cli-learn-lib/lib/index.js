module.exports={
    sum:function(a,b){
        return a+b+4;
    },
    init:function({option,param}){
        console.log('执行init流程',option,param)
    }
}