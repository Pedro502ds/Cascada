const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = '㊊㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰';
const tamaño = 20;
const columnas = canvas.width / tamaño;

const drops = Array.from({ length: columnas }).fill(1);

function draw() { ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';

ctx.fillRect(0, 0, canvas.width, canvas.height); 
ctx.fillStyle = 'red'; 
ctx.font = `${tamaño}px fantasy`; 

drops.forEach((y, index) => { const text = letras.charAt(Math.floor(Math.random() * letras.length));
const x = index * tamaño; 
ctx.fillText(text, x, y * tamaño);
 if (y * tamaño > canvas.height && Math.random() > 0.9) { drops[index] = 0; } drops[index]++; });}

setInterval(draw, 40);

