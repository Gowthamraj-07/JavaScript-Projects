let text = document.getElementById('color');
let container = document.getElementById('wrap');
let button = document.getElementById('btn');

let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
button.addEventListener('click',generator);
function generator()
{
    let hex = '#';
    for(let i=0;i<6;i++)
    {
        let idx = Math.floor(Math.random()*16);
        hex+=arr[idx];
    }
    container.style.backgroundColor = hex;
    text.innerHTML = hex;

}