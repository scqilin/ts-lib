import reverseString from '@scqilin/vite-ts-lib';

const div = document.createElement('div');

div.innerHTML = `
    <input type="text" id="input" />
    <button id="btn">反转字符串</button>
    <div id="result"></div>
`;
document.body.appendChild(div);

const input = document.getElementById('input') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLDivElement;

btn.addEventListener('click', () => {
    result.innerText = reverseString(input.value);
});