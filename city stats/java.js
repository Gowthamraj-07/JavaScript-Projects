let button = document.querySelector('button');
button.addEventListener('click',show);
let result = document.createElement('div');
result.id = "result";
document.getElementById("wrapper").appendChild(result);
function show()
{
    let input = document.getElementById('input');
    let city = input.options[input.selectedIndex].value;
    let population="";
    let literacy="";
    let language="";
    switch(city)
    {
        case 'Bengalore':
            population = "8 million";
            literacy = "87%";
            language = "kannada";
            break;
        case 'Chennai':
            population = "6 million";
            literacy = "86.%";
            language = "tamil";
            break;
        case 'Coimbatore':
            population = "3 million";
            literacy = "90%";
            language = "tamil";
            break;
    }

    let resultdiv = document.getElementById("result");
    let text = `${city} has a population of over ${population} and has a literacy rate of ${literacy}. ${language} is the most spoken language`;
    resultdiv.innerHTML = text;
}