let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
start.addEventListener("click",clicked);
pause.addEventListener("click",paused);
reset.addEventListener("click",reseted);
let min=sec=milli=0;
function started()
{
    start.disabled=true;
    milli++
    if(milli==100)
    {
        sec++;
        milli=0;
    }
    document.getElementById('milli').innerHTML = milli;
    if(sec==60)
    {
        min++;
        sec=0;
    }
    document.getElementById('seconds').innerHTML = padzero(sec);
    document.getElementById('mins').innerHTML = padzero(min);

}
function padzero(num)
{
    if(num<9)
    {
        return '0'+num;
    }
    return num;
}
function paused()
{
    start.disabled=false;
    clearInterval(interval)

}
function reseted()
{
    clearInterval(interval)
    document.getElementById('milli').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('mins').innerHTML = "00";
    min=sec=milli=0

}
function clicked()
{
    interval = setInterval(started,10);
}