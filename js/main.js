function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        console.log('reday')
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        domCode.scrollTop = domCode.scrollHeight
        styleTag.innerHTML = prefix + code.substring(0, n)
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
}
function wirteMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        console.log('开始')
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 0)
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
#code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%
}
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
#paper > .content {
    background: white;
    height: 100%;
    width: 100%;
}
`
var result2 = `
    #paper {}
    `
var md = `
# 标题一
啊啊啊啊啊啊啊啊
颠三倒四多所多
sdsfsf

过的地方发生的
`
writeCode('', result, () => {
    createPaper(() => {
        console.log('第一遍')
        writeCode(result, result2, ()=>{
            console.log('结束')
            wirteMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
