const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red";

const heading3 = document.createElement('h3');
heading3.textContent = "I’m a blue h3!";

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const heading1 = document.createElement('h1');
heading1.textContent = "I’m in a div";

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'ME TOO!';

/*const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    alert('Thanks for clicking me!');
    console.log(e.target);
    e.target.style.width = '100px'
    console.log(e);
});*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('dblclick', () => {
        button.style.backgroundColor = 'red';
    })
});

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading3);
div.appendChild(heading1);
div.appendChild(paragraph2);
container.appendChild(div);