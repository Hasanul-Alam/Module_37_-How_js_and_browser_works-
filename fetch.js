console.log('this is first.');
console.log('this is second.');
console.log('this is third.');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
console.log('I am the last in the vs code but not in the terminal or console.');