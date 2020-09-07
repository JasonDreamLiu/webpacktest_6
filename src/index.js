import _ from 'lodash';
import printMe from "./print";
import './styles.less';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack', '啊啊啊啊啊啊啊啊啊啊啊'], ' ');

    btn.innerHTML = '点击这里，查看console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot){
    module.hot.accept('./print.js', ()=>{
        console.log('Accepring the updated printMe module!');

        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}