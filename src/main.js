import './style.css'
import { io } from "socket.io-client";
import Box from "@/box.js"
import Vector from "@/vector.js";


document.querySelector('#app').innerHTML = `
<div>
    <canvas id="game"></canvas>
<div/>
`;

const socket = io(import.meta.env.VITE_API_URL);
const canvas = document.getElementById('game');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');
const box = new Box(50, 50, 50, 50, '#646cff');
const box2 = new Box(40, 40, 50, 50, '#FFFFFF');

const speed = 200;
let lastTime = 0;
const keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function gameLoop(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    context.clearRect(0, 0, canvas.width, canvas.height);

    let dx = 0;
    let dy = 0;

    if (keys['ArrowUp']) dy -= speed;
    if (keys['ArrowDown']) dy += speed;
    if (keys['ArrowLeft']) dx -= speed;
    if (keys['ArrowRight']) dx += speed;

    box.velocity = new Vector(dx, dy);
    box.update(deltaTime, canvas);
    box.draw(context);

    box2.update(deltaTime, canvas)
    box2.draw(context);

    const anyKeyDown = Object.keys(keys).some(key => keys[key]);

    if (anyKeyDown) {
        socket.emit("PlayerMove", {
            x: box.position.x,
            y: box.position.y
        });
    }

    requestAnimationFrame(gameLoop);
}

socket.on("PlayerMove", (msg) => {
    box2.position = new Vector(msg.x, msg.y);
});

requestAnimationFrame(gameLoop);