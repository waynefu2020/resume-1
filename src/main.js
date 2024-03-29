let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/** 你好，我叫大威
 * 接下来，我演示一下如何用代码画一个太极
 * 首先，我要准备一个div
 **/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/** 接下来我把div变成一个太极
  * 注意看好啦
  * 首先，把div变成一个圆圈
  **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 我们让它转起来吧！*/
#div1{
  animation: circle 3s linear infinite;
}
@keyframes circle{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/** 太极图是由阴阳双鱼构成
  * 一黑一白
  **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 再加入阴阳鱼 */
#div1::before{
  width: 100px;
  height: 100px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/ * 太极终于大功告成了~ */
`;
let string2 = '';
let n = 0;

let step = () => { 
  setTimeout(() => {
    if (string[n] === '\n') {
      string2 += '<br>';
    } else if (string[n] === ' ') {
      string2 += '&nbsp';
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if ( n < string.length - 1 ) {
      // 如果n不是最后一个，就继续
      n += 1; 
      step(); 
    };
  }, 0)
};

step();


// setTimeout(() => {
//   style.innerHTML = `
//   #div1 {
//     border: 1px solid red;
//     weight: 400px;
//     height: 400px;
//   }
//   `;
// },3000)
