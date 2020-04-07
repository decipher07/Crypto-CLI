console.log('Client Side JS');

const Form = document.querySelector('form')

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    var formSelection = document.querySelectorAll('input')
    var APIKey = formSelection[0].value ;
    var Curr = formSelection[1].value;
})

// function processFormData()
// {
//     const APIKey = document.getElementById('APIKey')
//     console.log(APIKey.value);
// }