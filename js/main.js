function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.slice(0,n), Prism.languages.css)
    domCode.scrollTop = domCode.scrollHeight
    styleTag.innerHTML = prefix + code.slice(0, n)
    if (n >= result.length){
        window.clearInterval(id)
        fn.call()
    }
},10)
}

var result = `/*
* 面试官你好，我是文登
* 我将以动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/

* {
    transition: all 1s;
}
html {
    background: rgb(222,222,222);
    font-size: 16px;
}
#code {
    border: 1px solid red;
    padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector {
    color: #690;
}
.token.property {
    color: #905;
}
.token.function {
    color: #DD4A68;
}

/* 加点3D效果 */

#code {
    transform: rotate(360deg);
}

/* 好了好了不玩了，介绍一下我自己*/
/* 我需要一张白纸 */

`
var result2 = `
    #paper {
        width: 100px;
        height: 100px;
        background: white;
    }
    `
writeCode('',result,()=>{
    createPaper( ()=>{
        writeCode(result,result2)
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call()
}

function fn3(preResult){
    
    var n = 0
    var id = setInterval(()=>{
        n += 1
        code.innerHTML = preResult + result2.slice(0,n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result2.slice(0, n)
        if(n >= result2.length){
            window.clearInterval(id)
        }
    },500)
}