/* JS GOES HERE */

const text = document.getElementById('text');
const button = document.getElementById('btn1')
let buttoncounter = 0;

button.addEventListener('click', function() {
    buttoncounter++;
    text.textContent = `Button clicked ${buttoncounter} times!`;
}); 
