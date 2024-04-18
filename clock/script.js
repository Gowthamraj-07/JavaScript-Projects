let time = document.getElementById("ampm");
function displayDate()
{
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr>12)
    {
        hr=hr-12;
        time.innerHTML = "PM";
    }
    document.getElementById("hours").innerHTML = padZero(hr);
    document.getElementById("mins").innerHTML = padZero(min);
    document.getElementById("seconds").innerHTML = padZero(sec);
}
function padZero(num)
{
    if(num<10)
    {
        return '0'+num;
    }
    return num;
}
setInterval(displayDate,500);