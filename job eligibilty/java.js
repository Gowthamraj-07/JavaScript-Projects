
let button = document.querySelector('button');
button.addEventListener('click',show);
function show()
{
    let op = document.getElementsByName("qul");
    let answer ="";
    for(let i=0;i<op.length;i++)
    {
        if(op[i].checked)
        {
             let selected = op[i].value;
             switch(selected)
             {
                case 'UG':
                    answer = "You are eligible for the job";
                    break;
                case 'PG':
                    answer = "You are not eligible for the job";
                    break;
                case 'Highschool':
                    answer = "You are eligible for the job";
                    break;
                case 'Illerate':
                    answer = "You are not eligible for the job";
                    break;
             }

        }
    }
    let result = document.getElementById('result');
    result.innerHTML = answer;
}