
const helloWorld = "Hello World!";

console.log(helloWorld);

function anotherHello(hi)
{

    console.log(hi);
}

console.log(anotherHello("Hello Everone In Class."));


const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => 
    {
        submitButton.disabled = true
        e.preventDefault()
        window.location.href = window.location.origin + '/success.html'
    })