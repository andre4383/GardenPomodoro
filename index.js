const FOCUS_MIN = 25;
let reimaningMs = FOCUS_MIN * 60 * 1000; // 25 minutos em ms
let lastTick = null;
let timerId = null;
let isRunning = false;


function updateDisplay() {
    const totalSec = Math.floor(reimaningMs / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;

    document.getElementById('minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('seconds').textContent = String(s).padStart(2, '0');
}

function tick() {
    const now = Date.now();

    if(lastTick === null) {
        lastTick = now;
    }

    reimaningMs = Math.max(0, reimaningMs - (now - lastTick));
    updateDisplay(reimaningMs);

    lastTick = now;

    if(reimaningMs <= 0) {
        alert('Tempo encerrado!');
        isRunning = false;
        return;
    }

    // agenda próximo tick
    timerId = setTimeout(tick, 250);
}

function start() {
    if (isRunning) return; // já está rodando

    isRunning = true;
    lastTick = null;

    timerId = setTimeout(tick, 250);
} 



document.getElementById('btn-start').addEventListener('click', start);