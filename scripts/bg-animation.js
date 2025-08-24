const canvas = document.getElementById('terminal-bg');
const ctx = canvas.getContext('2d');

// Resize canvas to section size
function resizeCanvas() {
    canvas.width = document.getElementById('welcome-section').clientWidth;
    canvas.height = document.getElementById('welcome-section').clientHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix rain effect
const characters = '01';
const fontSize = 16;
let columns;
let drops;

function initMatrix() {
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
}

initMatrix();

function draw() {
    // Background fade for trail effect
    ctx.fillStyle = 'rgba(18, 18, 18, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Terminal green
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 100);

// Recalculate matrix on resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initMatrix();
});
